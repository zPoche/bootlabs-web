import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteContent } from "@/content/site";

export default function Home() {
  const { brand, hero, sections } = siteContent;

  return (
    <div className="site-shell" id="top">
      <SiteHeader />
      <main>
        <section className="hero" aria-labelledby="hero-heading">
          <p className="brand">{brand.name}</p>
          <h1 id="hero-heading">{hero.headline}</h1>
          <p className="hero-support">{hero.support}</p>
          <div className="cta-row">
            <a className="button button-primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </a>
            {hero.secondaryCta ? (
              <a
                className="button button-secondary"
                href={hero.secondaryCta.href}
              >
                {hero.secondaryCta.label}
              </a>
            ) : null}
          </div>
        </section>

        <div className="sections">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="section"
              aria-labelledby={`${section.id}-heading`}
            >
              <h2 id={`${section.id}-heading`}>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
