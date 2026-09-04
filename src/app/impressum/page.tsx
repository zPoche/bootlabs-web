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
  const hasAddress = Boolean(provider.street && provider.postalCode && provider.city);

  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="legal-page">
        <div className="wrap">
          <p className="kicker">RECHTLICHES</p>
          <h1>Impressum</h1>
          <p>Angaben gemäß § 5 DDG.</p>

          {provider.name ? <p>{provider.name}</p> : null}
          {hasAddress ? (
            <p>
              {provider.street}
              <br />
              {provider.postalCode} {provider.city}
              {provider.country ? (
                <>
                  <br />
                  {provider.country}
                </>
              ) : null}
            </p>
          ) : null}

          <h2>Kontakt</h2>
          <p>
            E-Mail: <a href={`mailto:${legal.email}`}>{legal.email}</a>
          </p>
          <p>
            Website: <a href={legal.siteUrl}>{legal.siteUrl.replace("https://", "")}</a>
          </p>

          {legal.vatId ? (
            <>
              <h2>Umsatzsteuer</h2>
              <p>USt-IdNr.: {legal.vatId}</p>
            </>
          ) : null}

          {legal.register ? (
            <>
              <h2>Registereintrag</h2>
              <p>{legal.register}</p>
            </>
          ) : null}

          {legal.contentResponsible ? (
            <>
              <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <p>{legal.contentResponsible}</p>
            </>
          ) : null}

          <p className="legal-note">
            Weitere Anbieterangaben werden ergänzt, sobald sie feststehen. Es werden keine
            Platzhalterwerte ausgegeben.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
