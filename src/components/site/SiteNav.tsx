"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { heroContent } from "@/lib/scenes-content";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { LanguageToggle } from "@/components/site/LanguageToggle";
import { T } from "@/components/i18n/T";
import { MobileNav } from "@/components/site/MobileNav";
import { OPEN_COMMAND_PALETTE } from "@/components/site/CommandPalette";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Top-nav scrolls within the unified home page (sections), not to the
// standalone pages. The standalone /projects, /about, /contact, /odoo pages
// remain reachable as deep-dives via each section's CTA.
const items = [
  { href: "/#work", id: "work", label: "Projects", labelAr: "المشاريع" },
  { href: "/#process", id: "process", label: "Process", labelAr: "المنهجية" },
  { href: "/#systems", id: "systems", label: "Systems", labelAr: "الأنظمة" },
  { href: "/#about", id: "about", label: "About", labelAr: "عنّي" },
  { href: "/#contact", id: "contact", label: "Contact", labelAr: "تواصل" },
];

export function SiteNav() {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const [activeId, setActiveId] = useState<string | null>(null);

  // Scroll-spy — highlight the nav item for the section in the centre band.
  // Home page only (that's where these sections live).
  useEffect(() => {
    if (pathname !== "/") {
      setActiveId(null);
      return;
    }
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--glass-border)] bg-[var(--glass)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:gap-6 sm:px-5 sm:py-3.5 lg:px-8">
        {/* wordmark — monogram + name + role. The role line is a second line of
            small mono text: it only fits from sm up, so below that the wordmark
            is monogram + name alone rather than a wrapped, overlapping stack. */}
        <Link href="/" className="group inline-flex min-w-0 items-center gap-2 sm:gap-2.5">
          <span
            aria-hidden
            className="font-display grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[var(--c-mauve)] to-[var(--accent)] text-base font-semibold text-white shadow-soft sm:h-9 sm:w-9 sm:text-lg"
          >
            M
          </span>
          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate text-sm font-semibold tracking-tight text-[var(--ink)]">
              <T en={heroContent.name} ar={heroContent.nameAr} />
            </span>
            <span className="mt-1 hidden font-mono text-[0.58rem] uppercase tracking-[0.16em] text-[var(--ink-faint)] sm:block">
              <T en={heroContent.subtitle} ar={heroContent.subtitleAr} />
            </span>
          </span>
        </Link>

        {/* primary nav */}
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {items.map((item) => {
            const active = pathname === "/" && activeId === item.id;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "true" : undefined}
                className={`relative text-[0.85rem] transition hover:text-[var(--ink)] ${
                  active ? "text-[var(--ink)]" : "text-[var(--ink-muted)]"
                }`}
              >
                <T en={item.label} ar={item.labelAr} />
                {active &&
                  (reduced ? (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-[var(--accent)]" />
                  ) : (
                    <motion.span
                      layoutId="nav-active-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-px rounded-full bg-[var(--accent)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ))}
              </Link>
            );
          })}
        </nav>

        {/* actions */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
          {/* ⌘K command palette hint (desktop) */}
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event(OPEN_COMMAND_PALETTE))}
            aria-label="Open command menu"
            className="hidden items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--glass)] px-3 py-2 text-[0.78rem] text-[var(--ink-muted)] backdrop-blur transition hover:border-[var(--accent)] hover:text-[var(--ink)] md:inline-flex"
          >
            <span><T en="Search" ar="بحث" /></span>
            <kbd className="font-mono text-[0.62rem] text-[var(--ink-faint)]">⌘K</kbd>
          </button>
          <Link
            href={heroContent.contactHref}
            className="hidden items-center gap-1.5 rounded-full border border-[var(--border-strong)] bg-[var(--glass)] px-4 py-2 text-[0.8rem] font-semibold text-[var(--ink)] backdrop-blur transition hover:border-[var(--accent)] hover:text-[var(--accent-deep)] sm:inline-flex"
          >
            <T en="Let's Talk" ar="لنتحدّث" />
            <span aria-hidden className="rtl:-scale-x-100">→</span>
          </Link>
          <LanguageToggle />
          <ThemeToggle />
          <MobileNav items={items} contactHref={heroContent.contactHref} />
        </div>
      </div>
    </header>
  );
}
