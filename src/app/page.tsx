import { ContactForm } from "@/components/ContactForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteContent } from "@/content/site";

export default function Home() {
  const {
    hero,
    marquee,
    services,
    gaming,
    privateOffer,
    businessOffer,
    process,
    products,
    contact,
  } = siteContent;

  return (
    <div className="site-shell" id="top">
      <SiteHeader />
      <main>
        <section className="hero wrap" aria-labelledby="hero-heading">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="pill">
                <span className="pill-dot" aria-hidden="true" />
                {hero.eyebrow}
              </p>
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
              <p className="hero-notes">
                {hero.notes.map((note) => (
                  <span key={note}>{note}</span>
                ))}
              </p>
            </div>

            <aside className="status-card" aria-label="Verfügbare Leistungen">
              <div className="status-bar">
                <span className="status-dot" />
                <span className="status-dot" />
                <span className="status-dot" />
                <span>bootlabs@service: ~</span>
              </div>
              <div className="status-body">
                <div className="status-line">
                  <span style={{ color: "#7C5CFF" }}>&gt;</span>
                  <span>bootlabs status</span>
                </div>
                {hero.status.map((row) => (
                  <div className="status-line" key={row.label}>
                    <span style={{ color: "#7C5CFF" }}>●</span>
                    <span>{row.label}</span>
                    <span className="ok">{row.value}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div className="marquee-group" key={copy}>
                {marquee.map((item) => (
                  <span key={`${copy}-${item}`}>
                    {item} <span aria-hidden="true">/</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section
          id="leistungen"
          className="section wrap"
          aria-labelledby="leistungen-heading"
        >
          <div className="section-head">
            <p className="kicker">{services.eyebrow}</p>
            <h2 id="leistungen-heading">{services.title}</h2>
          </div>
          <div className="card-grid">
            {services.items.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="gaming"
          className="gaming section"
          aria-labelledby="gaming-heading"
        >
          <div className="wrap">
            <div className="section-head">
              <p className="kicker">{gaming.eyebrow}</p>
              <h2 id="gaming-heading">{gaming.title}</h2>
              <p>{gaming.body}</p>
            </div>
            <div className="offer-grid">
              {gaming.items.map((item) => (
                <article className="card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band section" aria-labelledby="privat-heading">
          <div className="wrap band-inner">
            <div className="band-copy">
              <p className="kicker">{privateOffer.eyebrow}</p>
              <h2 id="privat-heading">{privateOffer.title}</h2>
              <p>{privateOffer.body}</p>
              <ul className="point-list">
                {privateOffer.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="band-copy">
              <p className="kicker">{businessOffer.eyebrow}</p>
              <h2>{businessOffer.title}</h2>
              <p>{businessOffer.body}</p>
              <ul className="point-list">
                {businessOffer.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="ablauf"
          className="section wrap"
          aria-labelledby="ablauf-heading"
        >
          <div className="section-head">
            <p className="kicker">{process.eyebrow}</p>
            <h2 id="ablauf-heading">{process.title}</h2>
          </div>
          <div className="process-grid">
            {process.steps.map((step) => (
              <article className="step" key={step.n}>
                <span className="n">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="tools"
          className="band section"
          aria-labelledby="tools-heading"
        >
          <div className="wrap">
            <div className="section-head">
              <p className="kicker">{products.eyebrow}</p>
              <h2 id="tools-heading">{products.title}</h2>
              <p>{products.body}</p>
            </div>
            <div className="offer-grid" style={{ marginBottom: "1.15rem" }}>
              {products.featured.map((item) => (
                <article className="product" key={item.title}>
                  <div className="product-body">
                    <div className="product-head">
                      <h3>{item.title}</h3>
                      {item.badge ? <span className="badge">{item.badge}</span> : null}
                    </div>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mini-grid">
              {products.extras.map((item) => (
                <article className="card" key={item.title}>
                  <div className="product-head">
                    <h3>{item.title}</h3>
                    {item.badge ? <span className="badge">{item.badge}</span> : null}
                  </div>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="kontakt"
          className="section wrap"
          aria-labelledby="kontakt-heading"
        >
          <div className="contact-grid">
            <div className="band-copy">
              <p className="kicker">{contact.eyebrow}</p>
              <h2 id="kontakt-heading">{contact.title}</h2>
              <p>{contact.body}</p>
              <div className="contact-meta">
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                {contact.phone ? <span>{contact.phone}</span> : null}
              </div>
            </div>
            <div className="form-card">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
