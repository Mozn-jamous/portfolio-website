"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Modal } from "./Modal";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** Event other components dispatch to open the palette (e.g. the nav hint). */
export const OPEN_COMMAND_PALETTE = "open-command-palette";

type Command = {
  label: string;
  hint: string;
  /** Internal href (may include a #hash) or external URL. */
  href: string;
  external?: boolean;
};

const COMMANDS: Command[] = [
  { label: "Home", hint: "Top of page", href: "/" },
  { label: "All projects", hint: "Directory", href: "/projects" },
  { label: "About", hint: "Page", href: "/about" },
  { label: "Contact", hint: "Page", href: "/contact" },
  { label: "Process", hint: "Section", href: "/#process" },
  { label: "System architecture", hint: "Section", href: "/#architecture" },
  { label: "Decision log", hint: "Section", href: "/#decisions" },
  { label: "Mademoiselle", hint: "Case study", href: "/projects/mademoiselle" },
  { label: "BloomBelly", hint: "Case study", href: "/projects/bloombelly" },
  { label: "CareConnect", hint: "Case study", href: "/projects/careconnect" },
  { label: "Smart Expense Manager", hint: "Case study", href: "/projects/smart-expense" },
  { label: "ERP & Odoo systems", hint: "Hub", href: "/odoo" },
  { label: "Download résumé / CV", hint: "Page", href: "/cv" },
  { label: "GitHub", hint: "External", href: "https://github.com/Mozn-jamous", external: true },
  { label: "LinkedIn", hint: "External", href: "https://linkedin.com/in/mozn-jamous", external: true },
  { label: "Email", hint: "External", href: "mailto:moznjamous9@gmail.com", external: true },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const listRef = useRef<HTMLUListElement>(null);

  // ⌘K / Ctrl-K to open; custom event so the nav hint can open it too.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    }
    function onOpen() {
      setOpen(true);
    }
    document.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_COMMAND_PALETTE, onOpen);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_COMMAND_PALETTE, onOpen);
    };
  }, []);

  // reset query/selection whenever it opens
  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
    }
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COMMANDS;
    return COMMANDS.filter(
      (c) =>
        c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q)
    );
  }, [query]);

  const run = useCallback(
    (cmd: Command | undefined) => {
      if (!cmd) return;
      setOpen(false);
      if (cmd.external) {
        window.open(cmd.href, "_blank", "noopener,noreferrer");
        return;
      }
      const [path, hash] = cmd.href.split("#");
      // In-page anchor on the page we're already on → smooth scroll.
      if (hash && (path === "" || path === pathname)) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
          return;
        }
      }
      router.push(cmd.href);
    },
    [pathname, reduced, router]
  );

  function onInputKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      run(results[active]);
    }
  }

  // keep the active row scrolled into view
  useEffect(() => {
    const node = listRef.current?.children[active] as HTMLElement | undefined;
    node?.scrollIntoView({ block: "nearest" });
  }, [active]);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      label="Command menu"
      placement="top"
      panelClassName="w-full max-w-lg overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--surface)] shadow-soft-lg"
    >
      <div className="flex items-center gap-3 border-b border-[var(--border)] px-4">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ink-faint)" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4-4" />
        </svg>
        {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
        <input
          autoFocus
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
          }}
          onKeyDown={onInputKey}
          placeholder="Jump to a section, case study, or link…"
          aria-label="Search destinations"
          className="w-full bg-transparent py-4 text-[0.95rem] text-[var(--ink)] placeholder:text-[var(--ink-faint)] focus:outline-none"
        />
      </div>

      <ul ref={listRef} className="max-h-[52vh] overflow-y-auto p-2">
        {results.length === 0 && (
          <li className="px-3 py-6 text-center text-sm text-[var(--ink-muted)]">
            No matches
          </li>
        )}
        {results.map((cmd, i) => (
          <li key={cmd.label}>
            <button
              type="button"
              onClick={() => run(cmd)}
              onMouseMove={() => setActive(i)}
              className={`flex w-full items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-left transition ${
                i === active
                  ? "bg-[var(--accent-soft)] text-[var(--ink)]"
                  : "text-[var(--ink-muted)]"
              }`}
            >
              <span className="text-[0.92rem]">{cmd.label}</span>
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                {cmd.hint}
                {cmd.external && <span aria-hidden> ↗</span>}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </Modal>
  );
}
