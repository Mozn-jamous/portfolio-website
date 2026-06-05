"use client";

export default function PrintTrigger() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent-deep)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
    >
      Print / Save PDF
    </button>
  );
}
