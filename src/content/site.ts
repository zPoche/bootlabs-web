export type NavLink = {
  label: string;
  href: string;
};

export type Cta = {
  label: string;
  href: string;
};

export const siteContent = {
  brand: {
    name: "Bootlabs",
    markLeft: "BOOT",
    markRight: "LABS",
  },
  meta: {
    title: "Bootlabs · Software & Hardware",
    description:
      "Reparatur, Aufrüstung, Netzwerk und laufende Betreuung — für Privatleute und Betriebe. Dazu Software, die wir selbst bauen, wenn es von der Stange nichts Passendes gibt.",
  },
  url: "https://bootlabs.de",
  email: "info@bootlabs.de",
  nav: [
    { label: "Leistungen", href: "/#leistungen" },
    { label: "Ablauf", href: "/#ablauf" },
    { label: "Eigenentwicklungen", href: "/#tools" },
  ] satisfies NavLink[],
  headerCta: {
    label: "Anfrage stellen",
    href: "/#kontakt",
  } satisfies Cta,
  hero: {
    line1Prefix: "IT, die",
    rotating: [
      "einfach läuft.",
      "nicht diskutiert.",
      "niemand erklären muss.",
      "auch morgen noch läuft.",
    ],
    line2: "Und jemand, der rangeht.",
    support:
      "Reparatur, Aufrüstung, Netzwerk und laufende Betreuung, für Privatleute genauso wie für Betriebe. Dazu Software, die wir selbst bauen, wenn es von der Stange nichts Passendes gibt.",
    primaryCta: {
      label: "Kostenlose Einschätzung",
      href: "/#kontakt",
    } satisfies Cta,
    secondaryCta: {
      label: "Was wir machen",
      href: "/#leistungen",
    } satisfies Cta,
    facts: [
      "Vor Ort & Remote",
      "Festpreis nach Diagnose",
      "Rückmeldung am selben Tag",
    ],
    terminal: {
      title: "bootlabs@service: ~",
      command: "bootlabs status",
      rows: [
        { label: "reparatur", value: "verfügbar" },
        { label: "netzwerk & wlan", value: "verfügbar" },
        { label: "it-betreuung", value: "verfügbar" },
        { label: "eigene software", value: "auf anfrage" },
      ],
      loadLabel: "auslastung diese woche",
      loadHint: "reaktion < 1 werktag",
    },
  },
  ticker: [
    "PC & NOTEBOOK",
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
    id: "leistungen",
    kicker: "LEISTUNGEN",
    title: "Vom kaputten Display bis zum Serverschrank.",
    items: [
      {
        title: "PC & Notebook",
        body: "Reparatur, Reinigung, SSD- und RAM-Aufrüstung, Datenrettung, Windows neu aufsetzen ohne Datenverlust.",
        icon: "pc",
      },
      {
        title: "Handy & Tablet",
        body: "Display- und Akkutausch, Ladebuchse, Wasserschaden, Datenübertragung auf ein neues Gerät.",
        icon: "phone",
      },
      {
        title: "Netzwerk & WLAN",
        body: "Ausleuchtung, Access Points, VLANs, Gastnetz, VPN für Homeoffice und Außendienst.",
        icon: "wifi",
      },
      {
        title: "Server & Backup",
        body: "NAS und Server einrichten, Backup-Konzept nach 3-2-1, Wiederherstellung testen statt hoffen.",
        icon: "server",
      },
      {
        title: "IT-Betreuung",
        body: "Laufende Wartung, Updates, Monitoring und ein Ansprechpartner, der eure Umgebung kennt.",
        icon: "shield",
      },
      {
        title: "Software nach Maß",
        body: "Wenn Standardsoftware nicht passt, entwickeln wir selbst: Weboberflächen, Apps, Schnittstellen.",
        icon: "code",
      },
    ],
  },
  private: {
    kicker: "FÜR PRIVAT",
    title: "Erst gucken, dann Preis, dann reparieren.",
    body: "Du bekommst nach der Diagnose einen festen Preis und eine ehrliche Aussage, ob sich die Reparatur noch lohnt. Kein Fachchinesisch, keine Überraschung auf der Rechnung.",
    points: [
      "Diagnose kostenlos, Kostenvoranschlag vor jeder Reparatur",
      "Daten bleiben bei dir, nichts wandert in eine Cloud",
      "Reparieren statt ersetzen, wenn es sich rechnet",
    ],
    image: {
      src: "/images/privat.png",
      alt: "Werkstatt und Reparaturplatz",
    },
  },
  business: {
    kicker: "FÜR UNTERNEHMEN",
    title: "Ein Ansprechpartner für Hardware, Netzwerk und Software.",
    body: "Wir betreuen kleine und mittlere Betriebe komplett: Arbeitsplätze beschaffen und einrichten, Netzwerk und Backup absichern, und dort eigene Software bauen, wo Standardlösungen den Ablauf nicht abbilden.",
    points: [
      "Wartungspaket mit fester monatlicher Rate",
      "Hosting in Deutschland, DSGVO-konform",
      "Schnittstellen zu vorhandenen Systemen statt Insellösungen",
    ],
    image: {
      src: "/images/unternehmen.png",
      alt: "Serverschrank und Arbeitsplätze",
    },
  },
  process: {
    id: "ablauf",
    kicker: "ABLAUF",
    title: "In vier Schritten erledigt.",
    steps: [
      {
        num: "01",
        title: "Anfrage",
        body: "Formular, Anruf oder Mail. Du beschreibst das Problem in eigenen Worten.",
      },
      {
        num: "02",
        title: "Diagnose",
        body: "Wir prüfen vor Ort oder per Fernzugriff und sagen dir, was tatsächlich kaputt ist.",
      },
      {
        num: "03",
        title: "Festpreis",
        body: "Ein Preis, eine Dauer, eine Empfehlung. Du entscheidest, ob es losgeht.",
      },
      {
        num: "04",
        title: "Umsetzung",
        body: "Reparatur, Einrichtung oder Entwicklung, inklusive kurzer Übergabe, was gemacht wurde.",
      },
    ],
  },
  products: {
    id: "tools",
    kicker: "EIGENENTWICKLUNGEN",
    title: "Software, die aus echten Baustellen entstanden ist.",
    body: "Nicht am Reißbrett gedacht, sondern gebaut, weil ein Betrieb es gebraucht hat. Alles läuft auf Servern in Deutschland.",
    featured: [
      {
        title: "Volt ERP",
        badge: "IN BETRIEB",
        body: "Modulares ERP fürs Elektrohandwerk: Projekte, Aufmaß, Rechnungen, Anbindung an die Buchhaltung. Gehostet in Deutschland.",
        image: {
          src: "/images/volt.png",
          alt: "Screenshot Volt ERP",
        },
      },
      {
        title: "MonteurHub",
        badge: "MOBILE APP",
        body: "Baustellen-App für Monteure: Bautagebuch, Zeiterfassung, Aufmaß und Nachträge direkt vom Handy.",
        image: {
          src: "/images/monteurhub.png",
          alt: "Screenshot MonteurHub",
        },
      },
    ],
    compact: [
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
    ],
  },
  trust: [
    {
      mark: "DE",
      text: "Hosting und Daten ausschließlich in Deutschland",
    },
    {
      mark: "DSGVO",
      text: "Auftragsverarbeitung und Löschkonzept inklusive",
    },
    {
      mark: "FIX",
      text: "Festpreis nach Diagnose, keine offenen Stundenzettel",
    },
    {
      mark: "24 h",
      text: "Rückmeldung auf jede Anfrage innerhalb eines Werktags",
    },
  ],
  contact: {
    id: "kontakt",
    kicker: "KONTAKT",
    title: "Schreib uns, was nicht läuft.",
    body: "Ein paar Sätze reichen. Wir melden uns innerhalb eines Werktags mit einer ersten Einschätzung, kostenlos und unverbindlich.",
    phoneNote: "Telefon auf Anfrage",
    successTitle: "Anfrage ist raus.",
    successBody:
      "Wir melden uns innerhalb eines Werktags. Bei etwas Dringendem schreib uns direkt an info@bootlabs.de.",
    endpoint: "/api/contact.php",
    topics: [
      "PC oder Notebook",
      "Handy oder Tablet",
      "Netzwerk und WLAN",
      "Server und Backup",
      "IT-Betreuung für den Betrieb",
      "Software nach Maß",
      "Etwas anderes",
    ],
    privacyLabel:
      "Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung der Anfrage verarbeitet werden. Details in der",
    privacyLink: "Datenschutzerklärung",
    submit: "Anfrage absenden",
    note: "Versand über den eigenen Webspace, kein Drittanbieter. Fällt das aus, öffnet sich das Mailprogramm an info@bootlabs.de.",
  },
  footer: {
    note: "© 2026 Bootlabs · Software & Hardware",
    links: [
      { label: "Kontakt", href: "/#kontakt" },
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ] satisfies NavLink[],
  },
} as const;

/**
 * Nur veröffentlichte Angaben. Fehlende Impressumsfelder bleiben leer
 * und werden nicht gerendert — nichts erfinden.
 */
export const legal = {
  email: "info@bootlabs.de",
  siteUrl: "https://bootlabs.de",
  lastUpdated: "2026-09-04",
  provider: {
    name: "",
    street: "",
    postalCode: "",
    city: "",
    country: "",
  },
  vatId: "",
  register: "",
  contentResponsible: "",
} as const;
