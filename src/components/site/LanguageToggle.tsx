"use client";

import { useEffect, useState } from "react";

type Lang = "en" | "ar";

/**
 * EN/AR switch. The active language lives on <html lang> + <html dir> (set by an
 * inline script in layout.tsx before paint, so no flash). Bilingual text is
 * rendered by <T>; CSS keyed on <html lang> shows only the active language, so
 * this button just flips the attributes and persists the choice. Default: en.
 */
export function LanguageToggle() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    setLang(document.documentElement.lang === "ar" ? "ar" : "en");
  }, []);

  function toggle() {
    const next: Lang = lang === "en" ? "ar" : "en";
    document.documentElement.lang = next;
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem("lang", next);
    } catch {
      /* private mode — ignore */
    }
    setLang(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={lang === "en" ? "التبديل إلى العربية" : "Switch to English"}
      className="grid h-9 min-w-9 place-items-center rounded-full border border-[var(--glass-border)] bg-[var(--glass)] px-2.5 font-semibold text-[var(--ink-muted)] backdrop-blur transition hover:border-[var(--accent)] hover:text-[var(--ink)]"
    >
      <span className="text-[0.8rem] leading-none">
        {lang === "en" ? "ع" : "EN"}
      </span>
    </button>
  );
}
