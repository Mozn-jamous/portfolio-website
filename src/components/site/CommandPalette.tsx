"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Modal } from "./Modal";
import { T } from "@/components/i18n/T";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** Event other components dispatch to open the palette (e.g. the nav hint). */
export const OPEN_COMMAND_PALETTE = "open-command-palette";

type Command = {
  label: string;
  labelAr: string;
  hint: string;
  hintAr: string;
  /** Internal href (may include a #hash) or external URL. */
  href: string;
  external?: boolean;
};

const COMMANDS: Command[] = [
  { label: "Home", labelAr: "الرئيسية", hint: "Top of page", hintAr: "أعلى الصفحة", href: "/" },
  { label: "All projects", labelAr: "كل المشاريع", hint: "Directory", hintAr: "الدليل", href: "/projects" },
  { label: "About", labelAr: "عنّي", hint: "Page", hintAr: "صفحة", href: "/about" },
  { label: "Contact", labelAr: "تواصل", hint: "Page", hintAr: "صفحة", href: "/contact" },
  { label: "Process", labelAr: "المنهجية", hint: "Section", hintAr: "قسم", href: "/#process" },
  { label: "System architecture", labelAr: "بنية النظام", hint: "Section", hintAr: "قسم", href: "/#architecture" },
  { label: "Decision log", labelAr: "سجلّ القرارات", hint: "Section", hintAr: "قسم", href: "/#decisions" },
  { label: "Mademoiselle", labelAr: "Mademoiselle", hint: "Case study", hintAr: "دراسة حالة", href: "/projects/mademoiselle" },
  { label: "BloomBelly", labelAr: "BloomBelly", hint: "Case study", hintAr: "دراسة حالة", href: "/projects/bloombelly" },
  { label: "CareConnect", labelAr: "CareConnect", hint: "Case study", hintAr: "دراسة حالة", href: "/projects/careconnect" },
  { label: "Eda — clinics platform", labelAr: "Eda — منصّة العيادات", hint: "Case study", hintAr: "دراسة حالة", href: "/projects/eda" },
  { label: "Smart Expense Manager", labelAr: "Smart Expense Manager", hint: "Case study", hintAr: "دراسة حالة", href: "/projects/smart-expense" },
  { label: "Techno Solution — Odoo ERP (company)", labelAr: "Techno Solution — نظام Odoo ERP (شركة)", hint: "Case study", hintAr: "دراسة حالة", href: "/projects/techno-solution" },
  { label: "Burgasm — restaurant on Odoo", labelAr: "Burgasm — مطعم على Odoo", hint: "Case study", hintAr: "دراسة حالة", href: "/projects/burgasm" },
  { label: "Takhrjy — graduation-gifts ERP", labelAr: "Takhrjy — نظام ERP لهدايا التخرّج", hint: "Case study", hintAr: "دراسة حالة", href: "/projects/takhrjy" },
  { label: "ERP & Odoo systems", labelAr: "أنظمة ERP وOdoo", hint: "Hub", hintAr: "مركز", href: "/odoo" },
  { label: "Pharmacology — brand & service site", labelAr: "Pharmacology — موقع علامة وخدمات", hint: "Case study", hintAr: "دراسة حالة", href: "/projects/pharmacology" },
  { label: "Noodlna — brand & B2B site", labelAr: "Noodlna — موقع علامة وB2B", hint: "Case study", hintAr: "دراسة حالة", href: "/projects/noodlna" },
  { label: "Download résumé / CV", labelAr: "تحميل السيرة الذاتية", hint: "Page", hintAr: "صفحة", href: "/cv" },
  { label: "GitHub", labelAr: "GitHub", hint: "External", hintAr: "خارجي", href: "https://github.com/Mozn-jamous", external: true },
  { label: "LinkedIn", labelAr: "LinkedIn", hint: "External", hintAr: "خارجي", href: "https://linkedin.com/in/mozn-jamous", external: true },
  { label: "Email", labelAr: "البريد", hint: "External", hintAr: "خارجي", href: "mailto:moznjamous9@gmail.com", external: true },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [isAr, setIsAr] = useState(false);
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

  // reset query/selection whenever it opens; sync the active language
  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      setIsAr(document.documentElement.lang === "ar");
    }
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COMMANDS;
    return COMMANDS.filter((c) =>
      [c.label, c.hint, c.labelAr, c.hintAr].some((s) =>
        s.toLowerCase().includes(q)
      )
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
      label={isAr ? "قائمة الأوامر" : "Command menu"}
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
          placeholder={
            isAr
              ? "انتقل إلى قسم أو دراسة حالة أو رابط…"
              : "Jump to a section, case study, or link…"
          }
          aria-label={isAr ? "ابحث في الوجهات" : "Search destinations"}
          className="w-full bg-transparent py-4 text-[0.95rem] text-[var(--ink)] placeholder:text-[var(--ink-faint)] focus:outline-none"
        />
      </div>

      <ul ref={listRef} className="max-h-[52vh] overflow-y-auto p-2">
        {results.length === 0 && (
          <li className="px-3 py-6 text-center text-sm text-[var(--ink-muted)]">
            <T en="No matches" ar="لا نتائج" />
          </li>
        )}
        {results.map((cmd, i) => (
          <li key={cmd.label}>
            <button
              type="button"
              onClick={() => run(cmd)}
              onMouseMove={() => setActive(i)}
              className={`flex w-full items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-start transition ${
                i === active
                  ? "bg-[var(--accent-soft)] text-[var(--ink)]"
                  : "text-[var(--ink-muted)]"
              }`}
            >
              <span className="text-[0.92rem]"><T en={cmd.label} ar={cmd.labelAr} /></span>
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                <T en={cmd.hint} ar={cmd.hintAr} />
                {cmd.external && <span aria-hidden className="inline-block rtl:-scale-x-100"> ↗</span>}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </Modal>
  );
}
