export type NavLink = {
  label: string;
  href: string;
};

export type Cta = {
  label: string;
  href: string;
};

export type SiteContent = {
  brand: {
    name: string;
    tagline: string;
  };
  meta: {
    title: string;
    description: string;
  };
  nav: NavLink[];
  hero: {
    headline: string;
    support: string;
    primaryCta: Cta;
    secondaryCta?: Cta;
  };
  sections: Array<{
    id: string;
    title: string;
    body: string;
  }>;
  contact: {
    email: string;
    phone?: string;
    address?: string;
  };
  footer: {
    note: string;
  };
};

/**
 * Zentrale Inhalte für die Bootlabs-Website.
 * Hier kommen die finalen Texte, CTAs und Kontaktdaten rein.
 */
export const siteContent: SiteContent = {
  brand: {
    name: "Bootlabs",
    tagline: "",
  },
  meta: {
    title: "Bootlabs",
    description: "Website für Bootlabs — Inhalte folgen.",
  },
  nav: [
    { label: "Angebot", href: "#angebot" },
    { label: "Über uns", href: "#ueber-uns" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  hero: {
    headline: "Inhalte folgen",
    support: "Texte, Bilder und Branding werden als Nächstes eingepflegt.",
    primaryCta: {
      label: "Kontakt",
      href: "#kontakt",
    },
  },
  sections: [
    {
      id: "angebot",
      title: "Angebot",
      body: "Platzhalter — Beschreibung des Angebots folgt.",
    },
    {
      id: "ueber-uns",
      title: "Über uns",
      body: "Platzhalter — Unternehmensgeschichte und Team folgen.",
    },
    {
      id: "kontakt",
      title: "Kontakt",
      body: "Platzhalter — Kontaktdaten folgen.",
    },
  ],
  contact: {
    email: "",
  },
  footer: {
    note: "© Bootlabs",
  },
};
