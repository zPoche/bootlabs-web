import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";
import { ServiceIcon } from "@/components/ServiceIcons";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteContent } from "@/content/site";

export default function Home() {
  const { services, private: privat, business, process, products, trust, contact, ticker, email } =
    siteContent;

  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <Hero />

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[...ticker, ...ticker].map((item, index) => (
              <span key={`${item}-${index}`}>
                {item}
                <i>/</i>
              </span>
            ))}
          </div>
        </div>

        <section className="section" id={services.id} aria-labelledby="services-heading">
          <div className="wrap">
            <p className="kicker">{services.kicker}</p>
            <h2 id="services-heading">{services.title}</h2>
            <div className="service-grid">
              {services.items.map((item) => (
                <article key={item.title} className="service-card">
                  <ServiceIcon name={item.icon} />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section audience" aria-labelledby="private-heading">
          <div className="wrap audience-grid">
            <div>
              <p className="kicker">{privat.kicker}</p>
              <h2 id="private-heading">{privat.title}</h2>
              <p>{privat.body}</p>
              <ul className="check-list">
                {privat.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <figure className="media-frame">
              <Image
                src={privat.image.src}
                alt={privat.image.alt}
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 48vw"
              />
            </figure>
          </div>
        </section>

        <section className="section audience audience-flip" aria-labelledby="business-heading">
          <div className="wrap audience-grid">
            <figure className="media-frame">
              <Image
                src={business.image.src}
                alt={business.image.alt}
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 48vw"
              />
            </figure>
            <div>
              <p className="kicker">{business.kicker}</p>
              <h2 id="business-heading">{business.title}</h2>
              <p>{business.body}</p>
              <ul className="check-list">
                {business.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id={process.id} aria-labelledby="process-heading">
          <div className="wrap">
            <p className="kicker">{process.kicker}</p>
            <h2 id="process-heading">{process.title}</h2>
            <ol className="process-grid">
              {process.steps.map((step) => (
                <li key={step.num}>
                  <span>{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id={products.id} aria-labelledby="products-heading">
          <div className="wrap">
            <p className="kicker">{products.kicker}</p>
            <h2 id="products-heading">{products.title}</h2>
            <p className="lede">{products.body}</p>
            <div className="product-featured">
              {products.featured.map((item) => (
                <article key={item.title} className="product-card">
                  <figure className="media-frame">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      width={1200}
                      height={800}
                      sizes="(max-width: 768px) 100vw, 46vw"
                    />
                  </figure>
                  <div>
                    <div className="product-head">
                      <h3>{item.title}</h3>
                      <span>{item.badge}</span>
                    </div>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="product-compact">
              {products.compact.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="trust" aria-label="Vertrauen">
          <div className="wrap trust-grid">
            {trust.map((item) => (
              <article key={item.mark}>
                <strong>{item.mark}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id={contact.id} aria-labelledby="contact-heading">
          <div className="wrap contact-grid">
            <div>
              <p className="kicker">{contact.kicker}</p>
              <h2 id="contact-heading">{contact.title}</h2>
              <p className="lede">{contact.body}</p>
              <p className="contact-meta">
                <a href={`mailto:${email}`}>{email}</a>
                <span>{contact.phoneNote}</span>
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
