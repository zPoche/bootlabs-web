"use client";

import { useState } from "react";
import { siteContent } from "@/content/site";

export function ContactForm() {
  const { topics, email } = siteContent.contact;
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className="form-success">
        Anfrage ist vorbereitet. Wenn sich dein Mailprogramm nicht geöffnet hat,
        schreib uns direkt an {email}.
      </p>
    );
  }

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = String(data.get("name") ?? "");
        const from = String(data.get("email") ?? "");
        const phone = String(data.get("phone") ?? "");
        const topic = String(data.get("topic") ?? "");
        const message = String(data.get("message") ?? "");
        const body = [
          `Name: ${name}`,
          `E-Mail: ${from}`,
          `Telefon: ${phone || "-"}`,
          `Thema: ${topic}`,
          "",
          message,
        ].join("\n");
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(
          `Anfrage über bootlabs.de: ${topic}`,
        )}&body=${encodeURIComponent(body)}`;
        setSent(true);
      }}
    >
      <div className="form-row">
        <label className="field">
          <span>Name</span>
          <input type="text" name="name" required placeholder="Vor- und Nachname" />
        </label>
        <label className="field">
          <span>E-Mail</span>
          <input type="email" name="email" required placeholder="name@beispiel.de" />
        </label>
      </div>
      <label className="field">
        <span>Telefon (optional)</span>
        <input type="tel" name="phone" placeholder="Für Rückfragen" />
      </label>
      <label className="field">
        <span>Worum geht es</span>
        <select name="topic" defaultValue="Gaming-PC konfigurieren">
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>Beschreibung</span>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Was brauchst du: Reparatur, Gaming-PC oder ein kleines Spiel?"
        />
      </label>
      <label className="check">
        <input type="checkbox" name="privacy" required />
        <span>
          Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung der
          Anfrage verarbeitet werden.
        </span>
      </label>
      <button className="button button-primary" type="submit">
        Anfrage absenden
      </button>
      <p className="form-note">
        Öffnet dein Mailprogramm an {email}. Live läuft der Versand über das
        eigene Formular-Skript.
      </p>
    </form>
  );
}
