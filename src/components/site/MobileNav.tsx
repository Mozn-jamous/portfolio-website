"use client";

import { useState } from "react";
import Link from "next/link";
import { Modal } from "./Modal";

type Item = { href: string; label: string };

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
        panelClassName="flex h-full w-[80vw] max-w-xs flex-col gap-1 border-l border-[var(--glass-border)] bg-[var(--surface)] p-6 shadow-soft-lg"
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-[var(--ink-faint)]">
            Menu
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
              className="border-b border-[var(--border)] py-3.5 text-lg text-[var(--ink)] transition hover:text-[var(--accent-deep)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={contactHref}
          onClick={() => setOpen(false)}
          className="mt-6 inline-flex items-center justify-center gap-1.5 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-[var(--accent-deep)]"
        >
          Let&apos;s Talk
          <span aria-hidden>→</span>
        </Link>
      </Modal>
    </div>
  );
}
