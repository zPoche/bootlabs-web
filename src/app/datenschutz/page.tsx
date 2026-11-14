import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { legal } from "@/content/site";

export const metadata: Metadata = {
  title: "Datenschutz · Bootlabs",
  description: "Datenschutzerklärung der Bootlabs-Website.",
};

export default function DatenschutzPage() {
  const provider = legal.provider;

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
            Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne von Art. 4 Nr. 7
            DSGVO ist:
          </p>
          <p>
            <strong>{provider.name}</strong>
            <br />
            {legal.brand}, {legal.legalForm}
            <br />
            {provider.street}, {provider.postalCode} {provider.city}
            <br />
            E-Mail: <a href={`mailto:${legal.email}`}>{legal.email}</a>
            <br />
            Telefon: <a href={`tel:${legal.phoneHref}`}>{legal.phone}</a>
          </p>
          <p>
            Ein Datenschutzbeauftragter ist nicht bestellt, da die Voraussetzungen des § 38 BDSG
            nicht vorliegen. Für Fragen zum Datenschutz reicht eine Nachricht an{" "}
            <a href={`mailto:${legal.email}`}>{legal.email}</a>.
          </p>

          <h2>Hinweise zur Datenverarbeitung</h2>
          <ul>
            <li>
              <strong>Keine Cookies.</strong> Die Seite setzt weder eigene noch fremde Cookies und
              legt nichts im lokalen Speicher ab. Ein Cookie-Banner ist damit weder nötig noch
              vorhanden.
            </li>
            <li>
              <strong>Kein Web-Tracking.</strong> Es sind keine Analyse- oder Marketing-Dienste
              eingebunden, auch keine Pixel oder Social-Plugins.
            </li>
            <li>
              <strong>Schriften lokal.</strong> Schriften werden mit der Seite selbst ausgeliefert,
              nicht von Google oder einem anderen CDN geladen.
            </li>
            <li>
              <strong>Keine externen Inhalte beim Aufruf.</strong> Beim bloßen Aufruf der Seite wird
              kein Skript von einem Drittanbieter geladen. Erst wenn du das Kontaktformular benutzt
              und der Spam-Schutz eingerichtet ist, lädt der Browser Cloudflare Turnstile.
            </li>
          </ul>

          <h2>Hosting</h2>
          <p>
            Diese Website wird bei einem externen Hosting-Dienstleister betrieben. Empfänger der
            Server-Logdaten ist damit unser Hosting-Anbieter, der die Daten ausschließlich
            weisungsgebunden für uns verarbeitet.
          </p>
          <p>
            Beim Aufruf der Seiten werden technisch erforderliche Angaben verarbeitet: Browsertyp und
            Browserversion, Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners,
            Uhrzeit der Anfrage und IP-Adresse. Das ist nötig, um die Website auszuliefern und die
            IT-Sicherheit zu gewährleisten (Art. 6 Abs. 1 lit. f DSGVO). Eine Zusammenführung mit
            anderen Datenquellen findet nicht statt.
          </p>

          <h2>Kontaktformular</h2>
          <p>
            Wenn du das Formular nutzt, verarbeiten wir Name, E-Mail, optional Telefon, Thema und
            Nachricht, um deine Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
            DSGVO, soweit es um einen Vertrag oder eine vorvertragliche Anfrage geht, sonst Art. 6
            Abs. 1 lit. f DSGVO und deine Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Der Versand
            erfolgt über den eigenen Webspace, ohne externen Formulardienst.
          </p>
          <p>
            Die Angaben bleiben gespeichert, bis du Löschung verlangst, eine Einwilligung widerrufst
            oder der Zweck entfällt. Gesetzliche Aufbewahrungsfristen bleiben unberührt.
          </p>
          <p>
            Schreibst du uns per E-Mail oder rufst an, gelten für die Anfrage dieselben
            Rechtsgrundlagen und Löschfristen.
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
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen stehen in der{" "}
            <a href="https://www.cloudflare.com/privacypolicy/" rel="noopener noreferrer">
              Datenschutzerklärung von Cloudflare
            </a>
            . Für den Einsatz ist der Auftragsverarbeitungsvertrag im Cloudflare-Konto maßgeblich
            (Art. 28 DSGVO).
          </p>

          <h2>Deine Rechte</h2>
          <p>Du hast uns gegenüber jederzeit das Recht auf:</p>
          <ul>
            <li>Auskunft über die zu deiner Person gespeicherten Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung deiner Daten (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            <li>Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
          </ul>
          <p>
            Eine Nachricht an <a href={`mailto:${legal.email}`}>{legal.email}</a> genügt.
            Soweit wir Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeiten, kannst du aus
            Gründen, die sich aus deiner besonderen Situation ergeben, jederzeit Widerspruch
            einlegen.
          </p>

          <h2>Beschwerde bei der Aufsichtsbehörde</h2>
          <p>
            Du hast ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde, insbesondere in dem
            Mitgliedstaat deines Aufenthaltsorts, deines Arbeitsplatzes oder des Orts des
            mutmaßlichen Verstoßes (Art. 77 DSGVO). Für uns zuständig ist:
          </p>
          <p>
            {legal.dataProtectionAuthority.name}
            <br />
            {legal.dataProtectionAuthority.address}
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
