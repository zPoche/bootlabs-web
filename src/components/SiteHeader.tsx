"use client";

import type { MouseEvent } from "react";
import { siteContent } from "@/content/site";

function closeMobileNav(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest("details")?.removeAttribute("open");
}

export function SiteHeader() {
  const { brand, nav } = siteContent;

  return (
    <header className="site-header">
      <a className="brand" href="#top">
        {brand.name}
      </a>
      <nav className="nav-desktop" aria-label="Hauptnavigation">
        <ul>
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <details className="nav-mobile">
        <summary className="nav-toggle">
          <span className="nav-toggle-bars" aria-hidden="true" />
          <span className="sr-only">Menü</span>
        </summary>
        <nav aria-label="Mobile Navigation">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMobileNav}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </details>
    </header>
  );
}
