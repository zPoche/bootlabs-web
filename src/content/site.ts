export type NavLink = {
  label: string;
  href: string;
};

export type Cta = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  body: string;
};

export type Product = {
  title: string;
  badge?: string;
  body: string;
};

export type Step = {
  n: string;
  title: string;
  body: string;
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
    eyebrow: string;
    headline: string;
    support: string;
    primaryCta: Cta;
    secondaryCta?: Cta;
    notes: string[];
    status: Array<{ label: string; value: string }>;
  };
  marquee: string[];
  services: {
    eyebrow: string;
    title: string;
    items: Service[];
  };
  gaming: {
    eyebrow: string;
    title: string;
    body: string;
    items: Service[];
  };
  privateOffer: {
    eyebrow: string;
    title: string;
    body: string;
    points: string[];
  };
  businessOffer: {
    eyebrow: string;
    title: string;
    body: string;
    points: string[];
  };
  process: {
    eyebrow: string;
    title: string;
    steps: Step[];
  };
  products: {
    eyebrow: string;
    title: string;
    body: string;
    featured: Product[];
    extras: Product[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    email: string;
    phone?: string;
    topics: string[];
  };
  footer: {
    note: string;
  };
};

/**
 * Zentrale Inhalte für die Bootlabs-Website.
 */
export const siteContent: SiteContent = {
  brand: {
    name: "Bootlabs",
    tagline: "Software · Hardware · Gaming",
  },
  meta: {
    title: "Bootlabs · Software, Hardware & Gaming",
    description:
      "IT-Reparatur, Gaming-PCs, Netzwerk, Betreuung und eigene Software. Dazu kleine Spiele, die wir selbst bauen.",
  },
  nav: [
    { label: "Leistungen", href: "#leistungen" },
    { label: "Gaming", href: "#gaming" },
    { label: "Eigenentwicklungen", href: "#tools" },
    { label: "Anfrage stellen", href: "#kontakt" },
  ],
  hero: {
    eyebrow: "Software · Hardware · Gaming",
    headline: "IT, die einfach läuft. Und jemand, der rangeht.",
    support:
      "Reparatur, Gaming-PCs, Netzwerk und laufende Betreuung — für Privatleute genauso wie für Betriebe. Dazu Software und kleine Spiele, die wir selbst bauen, wenn es von der Stange nichts Passendes gibt.",
    primaryCta: {
      label: "Kostenlose Einschätzung",
      href: "#kontakt",
    },
    secondaryCta: {
      label: "Was wir machen",
      href: "#leistungen",
    },
    notes: ["Vor Ort & Remote", "Festpreis nach Diagnose", "Rückmeldung am selben Tag"],
    status: [
      { label: "reparatur", value: "verfügbar" },
      { label: "gaming-pcs", value: "verfügbar" },
      { label: "netzwerk & wlan", value: "verfügbar" },
      { label: "it-betreuung", value: "verfügbar" },
      { label: "eigene software", value: "auf anfrage" },
      { label: "kleine spiele", value: "labs" },
    ],
  },
  marquee: [
    "PC & NOTEBOOK",
    "GAMING-PCS",
    "SPIELEENTWICKLUNG",
    "DISPLAY & AKKU",
    "SSD-AUFRÜSTUNG",
    "DATENRETTUNG",
    "WLAN-AUSLEUCHTUNG",
    "VPN & HOMEOFFICE",
    "SERVER & NAS",
    "BACKUP 3-2-1",
    "IT-BETREUUNG",
    "EIGENE SOFTWARE",
  ],
  services: {
    eyebrow: "Leistungen",
    title: "Vom kaputten Display bis zum Gaming-Rig.",
    items: [
      {
        title: "PC & Notebook",
        body: "Reparatur, Reinigung, SSD- und RAM-Aufrüstung, Datenrettung, Windows neu aufsetzen ohne Datenverlust.",
      },
      {
        title: "Gaming-PCs",
        body: "Konfiguriert, gebaut und getestet: Grafikkarte, Kühlung, Gehäuse nach Budget und Titel. Festpreis vorher, Übergabe mit kurzer Einweisung.",
      },
      {
        title: "Handy & Tablet",
        body: "Display- und Akkutausch, Ladebuchse, Wasserschaden, Datenübertragung auf ein neues Gerät.",
      },
      {
        title: "Netzwerk & WLAN",
        body: "Ausleuchtung, Access Points, VLANs, Gastnetz, VPN für Homeoffice und Außendienst.",
      },
      {
        title: "Server & Backup",
        body: "NAS und Server einrichten, Backup-Konzept nach 3-2-1, Wiederherstellung testen statt hoffen.",
      },
      {
        title: "IT-Betreuung",
        body: "Laufende Wartung, Updates, Monitoring und ein Ansprechpartner, der eure Umgebung kennt.",
      },
      {
        title: "Software nach Maß",
        body: "Wenn Standardsoftware nicht passt, entwickeln wir selbst: Weboberflächen, Apps, Schnittstellen.",
      },
      {
        title: "Kleine Spiele",
        body: "Eigene Prototypen und kurze Indie-Games. Kein AAA-Studio, sondern Sachen, die wir selbst bauen und die du spielen kannst.",
      },
    ],
  },
  gaming: {
    eyebrow: "Gaming",
    title: "PCs zum Spielen. Spiele zum Ausprobieren.",
    body: "Wir verkaufen keine Fertigkisten von der Stange. Gaming-PCs bauen wir selbst, kleine Spiele ebenfalls — beides mit dem Anspruch, dass es danach einfach läuft.",
    items: [
      {
        title: "Custom Gaming-PCs",
        body: "Du sagst Budget, Auflösung und welche Titel du spielst. Wir legen die Teile fest, bauen das System, spielen es einmal durch und übergeben es mit Festpreis.",
      },
      {
        title: "Aufrüsten statt neu kaufen",
        body: "Alte Kiste, neue Grafikkarte, bessere Kühlung, stilleres Netzteil. Wenn sich ein Upgrade lohnt, machen wir das — bevor jemand einen kompletten Rechner ersetzt.",
      },
      {
        title: "Kleine Spiele & Prototypen",
        body: "Kurze Games, Game-Jam-Ideen und Auftragsarbeiten für kleine Spielprojekte. Wir bleiben bewusst klein: spielbar, fertig, ohne 80-Stunden-Kampagne.",
      },
    ],
  },
  privateOffer: {
    eyebrow: "Für Privat",
    title: "Erst gucken, dann Preis, dann machen.",
    body: "Du bekommst nach der Diagnose einen festen Preis und eine ehrliche Aussage, ob sich Reparatur, Upgrade oder ein neuer Gaming-PC lohnt. Kein Fachchinesisch, keine Überraschung auf der Rechnung.",
    points: [
      "Diagnose kostenlos, Kostenvoranschlag vor jeder Arbeit",
      "Gaming-PCs konfiguriert nach Budget und den Spielen, die du wirklich startest",
      "Daten bleiben bei dir, nichts wandert in eine Cloud",
      "Reparieren oder aufrüsten, wenn es sich rechnet",
    ],
  },
  businessOffer: {
    eyebrow: "Für Unternehmen",
    title: "Ein Ansprechpartner für Hardware, Netzwerk und Software.",
    body: "Wir betreuen kleine und mittlere Betriebe komplett: Arbeitsplätze beschaffen und einrichten, Netzwerk und Backup absichern, und dort eigene Software bauen, wo Standardlösungen den Ablauf nicht abbilden.",
    points: [
      "Wartungspaket mit fester monatlicher Rate",
      "Hosting in Deutschland, DSGVO-konform",
      "Schnittstellen zu vorhandenen Systemen statt Insellösungen",
    ],
  },
  process: {
    eyebrow: "Ablauf",
    title: "In vier Schritten erledigt.",
    steps: [
      {
        n: "01",
        title: "Anfrage",
        body: "Formular, Anruf oder Mail. Du beschreibst das Problem oder den Wunsch in eigenen Worten.",
      },
      {
        n: "02",
        title: "Diagnose",
        body: "Wir prüfen vor Ort, per Fernzugriff oder als Konfiguration und sagen dir, was wirklich nötig ist.",
      },
      {
        n: "03",
        title: "Festpreis",
        body: "Ein Preis, eine Dauer, eine Empfehlung. Du entscheidest, ob es losgeht.",
      },
      {
        n: "04",
        title: "Umsetzung",
        body: "Reparatur, Gaming-PC, Einrichtung oder Entwicklung, inklusive kurzer Übergabe, was gemacht wurde.",
      },
    ],
  },
  products: {
    eyebrow: "Eigenentwicklungen",
    title: "Software aus echten Baustellen. Spiele aus dem Labs.",
    body: "Nicht am Reißbrett gedacht, sondern gebaut, weil ein Betrieb oder wir selbst es gebraucht haben. Business-Tools laufen auf Servern in Deutschland. Kleine Spiele bleiben bewusst klein.",
    featured: [
      {
        title: "Volt ERP",
        badge: "In Betrieb",
        body: "Modulares ERP fürs Elektrohandwerk: Projekte, Aufmaß, Rechnungen, Anbindung an die Buchhaltung. Gehostet in Deutschland.",
      },
      {
        title: "MonteurHub",
        badge: "Mobile App",
        body: "Baustellen-App für Monteure: Bautagebuch, Zeiterfassung, Aufmaß und Nachträge direkt vom Handy.",
      },
    ],
    extras: [
      {
        title: "IP-Changer",
        body: "Netzwerkprofile für Windows: Adapter erkennen, Profile speichern, mit einem Klick umschalten.",
      },
      {
        title: "openbridge",
        body: "Projektpläne aus Excel, CSV oder MS Project per Schnittstelle nach OpenProject übernehmen.",
      },
      {
        title: "Kranprüfung",
        body: "Digitales Prüfprotokoll statt Papier: ausfüllen, dokumentieren, archivieren.",
      },
      {
        title: "Kleine Spiele",
        badge: "Labs",
        body: "Eigene Prototypen und kurze Indie-Ideen. Kein AAA, sondern Sachen, die wir selbst spielen wollen — und auf Anfrage auch für andere bauen.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Schreib uns, was nicht läuft. Oder was gebaut werden soll.",
    body: "Ein paar Sätze reichen. Wir melden uns innerhalb eines Werktags mit einer ersten Einschätzung, kostenlos und unverbindlich.",
    email: "info@bootlabs.de",
    phone: "Telefon auf Anfrage",
    topics: [
      "PC oder Notebook",
      "Gaming-PC konfigurieren",
      "Kleines Spiel / Game",
      "Handy oder Tablet",
      "Netzwerk und WLAN",
      "Server und Backup",
      "IT-Betreuung für den Betrieb",
      "Software nach Maß",
      "Etwas anderes",
    ],
  },
  footer: {
    note: "© 2026 Bootlabs · Software · Hardware · Gaming",
  },
};
