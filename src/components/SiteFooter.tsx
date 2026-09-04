import { siteContent } from "@/content/site";
import { BootLogo } from "./BootLogo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-row">
        <BootLogo size={21} className="boot-logo-footer" />
        <nav aria-label="Fußzeile">
          {siteContent.footer.links.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <p>{siteContent.footer.note}</p>
      </div>
    </footer>
  );
}
