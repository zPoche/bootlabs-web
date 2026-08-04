import { siteContent } from "@/content/site";

export function SiteHeader() {
  const { brand, nav } = siteContent;

  return (
    <header className="site-header">
      <a className="brand" href="#top">
        {brand.name}
      </a>
      <nav aria-label="Hauptnavigation">
        <ul>
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
