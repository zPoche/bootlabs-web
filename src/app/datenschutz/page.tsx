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
            Diese Website wird ohne Analyse-Cookies und ohne Werbenetzwerke ausgeliefert. Schriften
            werden mit der Seite selbst ausgeliefert, nicht von Google oder einem anderen CDN
            geladen. Beim bloßen Aufruf der Seite wird kein Skript von einem Drittanbieter geladen.
            Erst wenn du das Kontaktformular benutzt und der Spam-Schutz eingerichtet ist, lädt der
            Browser Cloudflare Turnstile.
          </p>

          <h2>Kontaktformular</h2>
          <p>
            Wenn du das Formular nutzt, verarbeiten wir Name, E-Mail, optional Telefon, Thema und
            Nachricht, um deine Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
            DSGVO (vorvertragliche Anfrage) sowie deine Einwilligung nach Art. 6 Abs. 1 lit. a
            DSGVO. Der Versand erfolgt über den eigenen Webspace, ohne externen Formulardienst.
          </p>
          <p>
            Die Angaben werden nur so lange gespeichert, wie es für die Bearbeitung und gesetzliche
            Aufbewahrung nötig ist.
          </p>

          <h2>Spam-Schutz</h2>
          <p>
            Damit das Formular nicht automatisiert missbraucht wird, kann Cloudflare Turnstile
            eingebunden sein. Das Häkchen und das Skript von challenges.cloudflare.com werden erst
            geladen, wenn du das Formular benutzt und der Schutz auf dem Server eingerichtet ist.
            Cloudflare verarbeitet dabei insbesondere deine IP-Adresse und technische Merkmale des
            Browsers, um zu unterscheiden, ob die Anfrage von einem Menschen stammt.
          </p>
          <p>
            Anbieter ist die Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, USA.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO: unser berechtigtes Interesse, das
            Formular vor Spam zu schützen. Weitere Informationen stehen in der{" "}
            <a href="https://www.cloudflare.com/privacypolicy/" rel="noopener noreferrer">
              Datenschutzerklärung von Cloudflare
            </a>
            . Für den Einsatz ist der Auftragsverarbeitungsvertrag im Cloudflare-Konto maßgeblich
            (Art. 28 DSGVO).
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
