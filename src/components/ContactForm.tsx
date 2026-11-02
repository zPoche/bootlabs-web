"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { siteContent } from "@/content/site";

const SITEKEY_URL = "/api/turnstile-sitekey.php";
const SITEKEY_PATTERN = /^0x[A-Za-z0-9_-]{16,200}$/;

type Tone = "ok" | "error" | "info";

type TurnstileApi = {
  render: (
    element: HTMLElement,
    options: {
      sitekey: string;
      theme: "dark";
      language: "de";
      appearance: "always";
      action: "contact";
      callback: () => void;
      "error-callback": () => void;
      "expired-callback": () => void;
    },
  ) => string;
  reset: (widgetId?: string) => void;
  getResponse: (widgetId?: string) => string | undefined;
};

function turnstileApi(): TurnstileApi | undefined {
  return (window as Window & { turnstile?: TurnstileApi }).turnstile;
}

function validSiteKey(value: string): string {
  const key = value.trim();
  return SITEKEY_PATTERN.test(key) ? key : "";
}

function loadTurnstileScript(): Promise<void> {
  if (turnstileApi()) return Promise.resolve();

  const existing = document.querySelector<HTMLScriptElement>("script[data-bootlabs-turnstile]");
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("turnstile-load")), { once: true });
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.dataset.bootlabsTurnstile = "true";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("turnstile-load"));
    document.head.appendChild(script);
  });
}

export function ContactForm() {
  const { contact, email } = siteContent;
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<{ message: string; tone: Tone } | null>(null);
  const [sitekey, setSitekey] = useState("");
  const [apiReady, setApiReady] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef("");
  const sitekeyRef = useRef("");
  const lookup = useRef<Promise<string> | null>(null);
  const prepare = useRef<Promise<void> | null>(null);
  const bakedKey = validSiteKey(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "");

  useEffect(() => {
    const host = hostRef.current;
    const api = turnstileApi();
    if (!sitekey || !apiReady || !host || !api || widgetId.current) return;

    widgetId.current = api.render(host, {
      sitekey,
      theme: "dark",
      language: "de",
      appearance: "always",
      action: "contact",
      callback: () => {},
      "error-callback": () => {},
      "expired-callback": () => {
        api.reset(widgetId.current);
      },
    });
  }, [apiReady, sitekey]);

  function resolveSiteKey(): Promise<string> {
    if (sitekeyRef.current) return Promise.resolve(sitekeyRef.current);
    if (bakedKey) {
      sitekeyRef.current = bakedKey;
      return Promise.resolve(bakedKey);
    }
    if (lookup.current) return lookup.current;

    lookup.current = fetch(SITEKEY_URL, { headers: { Accept: "application/json" } })
      .then(async (response) => {
        if (!response.ok) return "";
        const payload = (await response.json()) as { sitekey?: unknown };
        const key = typeof payload.sitekey === "string" ? validSiteKey(payload.sitekey) : "";
        sitekeyRef.current = key;
        return key;
      })
      .catch(() => "");

    return lookup.current;
  }

  function ensureTurnstile(): Promise<void> {
    if (prepare.current) return prepare.current;

    prepare.current = resolveSiteKey()
      .then(async (key) => {
        if (!key) return;
        await loadTurnstileScript();
        setSitekey(key);
        setApiReady(true);
      })
      .catch((error: unknown) => {
        prepare.current = null;
        throw error;
      });

    return prepare.current;
  }

  function onFormIntent() {
    void ensureTurnstile().catch(() => {});
  }

  function openMailClient(data: FormData) {
    const name = String(data.get("name") ?? "");
    const topic = String(data.get("topic") ?? "");
    const message = String(data.get("message") ?? "");
    const phone = String(data.get("phone") ?? "");
    const subject = encodeURIComponent(`Anfrage über bootlabs.de: ${topic}`);
    const body = encodeURIComponent(`Name: ${name}\nTelefon: ${phone || "-"}\n\n${message}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("company") ?? "").trim() !== "") return;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus(null);

    try {
      await ensureTurnstile();
    } catch {
      if (sitekeyRef.current) {
        setStatus({
          message: `Die Sicherheitsprüfung konnte nicht geladen werden. Schreib uns direkt an ${email}.`,
          tone: "error",
        });
        return;
      }
    }

    if (sitekeyRef.current) {
      const token = turnstileApi()?.getResponse(widgetId.current) ?? "";
      if (!token) {
        setStatus({
          message: "Bitte setze zuerst das Häkchen bei der Sicherheitsprüfung.",
          tone: "error",
        });
        hostRef.current?.scrollIntoView({ block: "nearest" });
        return;
      }
    }

    setPending(true);

    try {
      const response = await fetch(contact.endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        const error = payload?.error;
        if (error === "turnstile") {
          turnstileApi()?.reset(widgetId.current);
          setStatus({
            message: "Die Sicherheitsprüfung ist abgelaufen oder ungültig. Bitte setze das Häkchen erneut.",
            tone: "error",
          });
          return;
        }
        if (error === "turnstile_unavailable") {
          setStatus({
            message: `Die Sicherheitsprüfung ist gerade nicht erreichbar. Schreib uns direkt an ${email}.`,
            tone: "error",
          });
          return;
        }
        if (error === "rate_limit") {
          setStatus({
            message: `Zu viele Anfragen hintereinander. Bitte warte eine Stunde oder schreib uns direkt an ${email}.`,
            tone: "error",
          });
          return;
        }
        throw new Error("send-failed");
      }

      setSent(true);
    } catch {
      openMailClient(data);
    } finally {
      setPending(false);
    }
  }

  if (sent) {
    return (
      <div className="form-success">
        <h3>{contact.successTitle}</h3>
        <p>{contact.successBody}</p>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      action={contact.endpoint}
      method="post"
      onSubmit={onSubmit}
      onFocus={onFormIntent}
      onPointerEnter={onFormIntent}
    >
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input type="text" name="name" required maxLength={120} placeholder="Vor- und Nachname" />
        </label>
        <label>
          <span>E-Mail</span>
          <input
            type="email"
            name="email"
            required
            maxLength={190}
            placeholder="name@beispiel.de"
          />
        </label>
      </div>
      <label>
        <span>
          Telefon <em>(optional)</em>
        </span>
        <input type="tel" name="phone" maxLength={60} placeholder="Für Rückfragen" />
      </label>
      <input
        className="honeypot"
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <label>
        <span>Worum geht es</span>
        <select name="topic" defaultValue={contact.topics[0]}>
          {contact.topics.map((topic) => (
            <option key={topic}>{topic}</option>
          ))}
        </select>
      </label>
      <label>
        <span>Beschreibung</span>
        <textarea
          name="message"
          rows={5}
          required
          maxLength={5000}
          placeholder="Was ist passiert, seit wann, welches Gerät?"
        />
      </label>
      <label className="form-check">
        <input type="checkbox" name="privacy" required />
        <span>
          {contact.privacyLabel}{" "}
          <a href="/datenschutz">{contact.privacyLink}</a>.
        </span>
      </label>
      <div className="turnstile-slot" hidden={!sitekey}>
        <div ref={hostRef} className="turnstile-host" />
        <p className="turnstile-note">
          Bitte setze das Häkchen. Die Prüfung läuft über Cloudflare und startet erst, wenn du
          dieses Formular benutzt.
        </p>
      </div>
      {status ? (
        <p className="form-status" data-tone={status.tone} role="status">
          {status.message}
        </p>
      ) : null}
      <button className="button button-primary" type="submit" disabled={pending}>
        {pending ? "Wird gesendet …" : contact.submit}
      </button>
      <p className="form-note">{contact.note}</p>
    </form>
  );
}
