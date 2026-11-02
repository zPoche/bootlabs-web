# Bootlabs Web

Website für **Bootlabs** — Next.js (App Router), TypeScript, Tailwind CSS.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Entwicklung

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000).

## Inhalte

Zentrale Texte und Struktur liegen in:

```text
src/content/site.ts
```

Dort brand, Navigation, Hero, Sections, Kontakt und Footer pflegen.

## Kontaktformular

Das Formular postet auf `/api/contact.php`. Die Skripte liegen in `deploy/api/` und gehören auf den Plesk-Webspace nach `httpdocs/api/`. PHP muss für die Domain aktiv sein, der Mailversand läuft über `mail()` an `info@bootlabs.de`.

Ohne Schlüsseldatei bleiben Honeypot und Rate-Limit (5 Anfragen pro IP und Stunde, hinter Cloudflare über `CF-Connecting-IP`). Fällt der Versand aus, öffnet der Browser das Mailprogramm.

### Spam-Schutz mit Cloudflare Turnstile

Widget-Typ im Dashboard: **Managed**, damit das Häkchen sichtbar ist. Hostname `bootlabs.de` (und `www`, falls genutzt) zulassen. Die Schlüssel von HomePower gelten hier nicht.

Beide Schlüssel stehen in `httpdocs/turnstile-secret.php`, eine Ebene über `api/`. Ein neuer Build ersetzt diese Datei nicht. In `deploy/api/turnstile-secret.example.php` liegt nur die leere Vorlage:

```php
<?php
return [
    'sitekey' => '0x...',
    'secret' => '0x...',
];
```

Die Vorlage einmal nach `httpdocs/turnstile-secret.php` kopieren und dort die Werte eintragen. Solange die Datei fehlt oder leer ist, bleibt das Häkchen aus. Ist das Secret gesetzt, lehnt `contact.php` jede Anfrage ohne gültiges Häkchen ab. Das Skript von `challenges.cloudflare.com` lädt erst, wenn das Formular benutzt wird.

## Scripts

| Befehl | Zweck |
| --- | --- |
| `npm run dev` | Dev-Server |
| `npm run build` | Production-Build |
| `npm run start` | Production-Server |
| `npm run lint` | ESLint |
