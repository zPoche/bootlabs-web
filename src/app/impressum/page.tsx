import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { legal } from "@/content/site";

export const metadata: Metadata = {
  title: "Impressum · Bootlabs",
  description: "Anbieterkennzeichnung der Bootlabs-Website.",
};

export default function ImpressumPage() {
  const provider = legal.provider;

  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="legal-page">
        <div className="wrap">
          <p className="kicker">RECHTLICHES</p>
          <h1>Impressum</h1>
          <p>Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG).</p>

          <h2>Anbieter</h2>
          <p>
            <strong>{provider.name}</strong>
            <br />
            {legal.brand}
            <br />
            {legal.legalForm}
            <br />
            {provider.street}
            <br />
            {provider.postalCode} {provider.city}
            <br />
            {provider.country}
          </p>

          <h2>Kontakt</h2>
          <p>
            E-Mail: <a href={`mailto:${legal.email}`}>{legal.email}</a>
            <br />
            Telefon: <a href={`tel:${legal.phoneHref}`}>{legal.phone}</a>
            <br />
            Website: <a href={legal.siteUrl}>{legal.siteUrl.replace("https://", "")}</a>
          </p>

          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            {legal.contentResponsible}
            <br />
            {provider.street}
            <br />
            {provider.postalCode} {provider.city}
          </p>

          <h2>Umsatzsteuer</h2>
          <p>{legal.smallBusinessNote}</p>

          <h2>Verbraucherstreitbeilegung</h2>
          <p>
            Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach den §§ 8 bis 10 DDG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben unberührt. Eine diesbezügliche
            Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
            möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen entfernen wir diese Inhalte
            umgehend.
          </p>

          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
            übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf mögliche Rechtsverstöße überprüft; rechtswidrige Inhalte waren nicht
            erkennbar. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links
            umgehend.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
            der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
            nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
