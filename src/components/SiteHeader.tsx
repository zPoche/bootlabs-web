"use client";

import type { MouseEvent } from "react";
import { siteContent } from "@/content/site";
import { BootLogo } from "./BootLogo";

function closeMobileNav(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest("details")?.removeAttribute("open");
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <BootLogo />
        <nav className="nav-desktop" aria-label="Hauptnavigation">
          {siteContent.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="button button-primary header-cta" href={siteContent.headerCta.href}>
            {siteContent.headerCta.label}
          </a>
        </nav>
        <details className="nav-mobile-wrap">
          <summary className="nav-toggle">
            <span className="nav-toggle-bars" aria-hidden="true" />
            <span className="sr-only">Menü</span>
          </summary>
          <nav className="nav-mobile" aria-label="Mobile Navigation">
            {siteContent.nav.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMobileNav}>
                {item.label}
              </a>
            ))}
            <a
              className="button button-primary"
              href={siteContent.headerCta.href}
              onClick={closeMobileNav}
            >
              {siteContent.headerCta.label}
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
