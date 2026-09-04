"use client";

import { FormEvent, useState } from "react";
import { siteContent } from "@/content/site";

export function ContactForm() {
  const { contact, email } = siteContent;
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setPending(true);

    try {
      const response = await fetch(contact.endpoint, {
        method: "POST",
        body: data,
      });
      if (!response.ok) throw new Error("send-failed");
      setSent(true);
    } catch {
      const name = String(data.get("name") ?? "");
      const topic = String(data.get("topic") ?? "");
      const message = String(data.get("message") ?? "");
      const phone = String(data.get("phone") ?? "");
      const subject = encodeURIComponent(`Anfrage über bootlabs.de: ${topic}`);
      const body = encodeURIComponent(
        `Name: ${name}\nTelefon: ${phone || "-"}\n\n${message}`,
      );
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
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
      <button className="button button-primary" type="submit" disabled={pending}>
        {contact.submit}
      </button>
      <p className="form-note">{contact.note}</p>
    </form>
  );
}
