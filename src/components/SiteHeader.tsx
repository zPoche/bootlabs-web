"use client";

import { useEffect, useId, useState } from "react";
import { siteContent } from "@/content/site";
import { BootLogo } from "./BootLogo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

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
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav-toggle-bars" aria-hidden="true" />
          <span className="sr-only">{open ? "Menü schließen" : "Menü öffnen"}</span>
        </button>
      </div>
      <nav
        id={menuId}
        className={`nav-mobile${open ? " is-open" : ""}`}
        aria-label="Mobile Navigation"
        hidden={!open}
      >
        {siteContent.nav.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a
          className="button button-primary"
          href={siteContent.headerCta.href}
          onClick={() => setOpen(false)}
        >
          {siteContent.headerCta.label}
        </a>
      </nav>
    </header>
  );
}
