import { siteContent } from "@/content/site";
import { BrandMark } from "@/components/BrandMark";

export function SiteHeader() {
  const { nav } = siteContent;

  return (
    <header className="site-header">
      <a href="#top" aria-label="Bootlabs, zum Seitenanfang">
        <BrandMark />
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
