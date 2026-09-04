import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { legal } from "@/content/site";

export const metadata: Metadata = {
  title: "Datenschutz · Bootlabs",
  description: "Datenschutzerklärung der Bootlabs-Website.",
};

export default function DatenschutzPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="legal-page">
        <div className="wrap">
          <p className="kicker">RECHTLICHES</p>
          <h1>Datenschutzerklärung</h1>
          <p>Stand: {legal.lastUpdated}</p>

          <h2>Verantwortliche Stelle</h2>
          <p>
            Für die Verarbeitung personenbezogener Daten auf dieser Website ist die unter{" "}
            <a href="/impressum">Impressum</a> genannte Stelle verantwortlich. Kontakt:{" "}
            <a href={`mailto:${legal.email}`}>{legal.email}</a>.
          </p>

          <h2>Hinweise zur Datenverarbeitung</h2>
          <p>
            Diese Website wird ohne eingebettete Drittanbieter-Skripte, ohne Analyse-Cookies und
            ohne Werbenetzwerke ausgeliefert. Schriften werden mit der Seite selbst ausgeliefert,
            nicht von Google oder einem anderen CDN geladen.
          </p>

          <h2>Kontaktformular</h2>
          <p>
            Wenn du das Formular nutzt, verarbeiten wir Name, E-Mail, optional Telefon, Thema und
            Nachricht, um deine Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
            DSGVO (vorvertragliche Anfrage) sowie deine Einwilligung nach Art. 6 Abs. 1 lit. a
            DSGVO. Der Versand erfolgt über den eigenen Webspace, ohne Drittanbieter-Formulardienst.
          </p>
          <p>
            Die Angaben werden nur so lange gespeichert, wie es für die Bearbeitung und gesetzliche
            Aufbewahrung nötig ist.
          </p>

          <h2>Hosting</h2>
          <p>
            Beim Aufruf der Seiten werden technisch erforderliche Server-Logdaten verarbeitet
            (IP-Adresse, Zeitpunkt, aufgerufene Datei, User-Agent). Das ist nötig, um die Website
            auszuliefern und die IT-Sicherheit zu gewährleisten (Art. 6 Abs. 1 lit. f DSGVO).
          </p>

          <h2>Deine Rechte</h2>
          <p>
            Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
            Datenübertragbarkeit und Widerspruch. Einwilligungen kannst du jederzeit widerrufen.
            Außerdem besteht ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
