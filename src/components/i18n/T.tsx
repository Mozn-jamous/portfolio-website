import type { ReactNode } from "react";

/**
 * T — bilingual text. Renders BOTH languages; CSS (keyed on <html lang>) shows
 * only the active one. This keeps the whole site server-rendered with no
 * hydration mismatch and no flash (the language toggle just flips an attribute
 * on <html>, like the theme toggle). Use for any visible string:
 *
 *   <p><T en="Hello" ar="مرحبا" /></p>
 *   <T en={<>Bold <strong>here</strong></>} ar={<>عريض <strong>هنا</strong></>} />
 *
 * Untranslated text (not wrapped in <T>) simply stays as-is in both languages,
 * so the site can be translated incrementally without breaking.
 */
export function T({ en, ar }: { en: ReactNode; ar: ReactNode }) {
  return (
    <>
      <span className="lang-en">{en}</span>
      <span className="lang-ar">{ar}</span>
    </>
  );
}
