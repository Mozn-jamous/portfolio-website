"use client";

import { useState } from "react";
import Link from "next/link";
import { Modal } from "./Modal";
import { T } from "@/components/i18n/T";
import { heroContent } from "@/lib/scenes-content";

type Item = { href: string; label: string; labelAr?: string };

/**
 * Mobile navigation — a hamburger (visible < md) that opens an accessible
 * slide-in sheet built on the shared Modal (focus trap, Esc, scroll lock).
 * Fills the gap left by the desktop nav, which is `hidden md:flex`.
 */
export function MobileNav({
  items,
  contactHref,
}: {
  items: Item[];
  contactHref: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-haspopup="dialog"
        className="grid h-9 w-9 place-items-center rounded-full border border-[var(--glass-border)] bg-[var(--glass)] text-[var(--ink-muted)] backdrop-blur transition hover:border-[var(--accent)] hover:text-[var(--ink)]"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        label="Site menu"
        placement="right"
        panelClassName="flex h-full w-[82vw] max-w-xs flex-col gap-1 overflow-y-auto border-s border-[var(--glass-border)] bg-[var(--surface)] p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-soft-lg"
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-[var(--ink-faint)]">
            <T en="Menu" ar="القائمة" />
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--glass-border)] text-[var(--ink-muted)] transition hover:border-[var(--accent)] hover:text-[var(--ink)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile" className="flex flex-col">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-[var(--border)] py-3 text-base text-[var(--ink)] transition hover:text-[var(--accent-deep)]"
            >
              <T en={item.label} ar={item.labelAr ?? item.label} />
            </Link>
          ))}
        </nav>

        {/* Pinned to the foot of the sheet: the CTA plus the direct links, so
            the tall empty space below a five-item menu carries something. */}
        <div className="mt-auto pt-8">
          <Link
            href={contactHref}
            onClick={() => setOpen(false)}
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-[var(--accent-deep)]"
          >
            <T en="Let's Talk" ar="لنتحدّث" />
            <span aria-hidden className="rtl:-scale-x-100">→</span>
          </Link>

          <ul className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
            {heroContent.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.icon === "email" ? undefined : "_blank"}
                  rel={s.icon === "email" ? undefined : "noopener noreferrer"}
                  onClick={() => setOpen(false)}
                  className="text-[0.8rem] text-[var(--ink-muted)] transition hover:text-[var(--accent-deep)]"
                >
                  <T en={s.label} ar={s.labelAr} />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
            <T en={heroContent.location} ar={heroContent.locationAr} />
          </p>
        </div>
      </Modal>
    </div>
  );
}
