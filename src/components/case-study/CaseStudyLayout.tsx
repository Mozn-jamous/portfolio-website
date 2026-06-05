import Link from "next/link";
import type { ReactNode } from "react";
import { Orb } from "@/components/site/Orb";

export type CaseStudyMeta = {
  eyebrow: string;
  title: string;
  lede: string;
  year: string;
  role: string;
  status?: string;
  stack: string[];
  links?: { label: string; href: string; external?: boolean; primary?: boolean }[];
};

export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudySection = {
  heading: string;
  kicker?: string;
  body: ReactNode;
};

type Props = {
  meta: CaseStudyMeta;
  metrics?: CaseStudyMetric[];
  sections: CaseStudySection[];
  nextProject?: { label: string; href: string };
};

export function CaseStudyLayout({ meta, metrics, sections, nextProject }: Props) {
  return (
    <article className="relative text-[var(--ink)]">
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-5xl px-5 pb-16 pt-16 lg:px-8 lg:pb-24 lg:pt-24">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--ink-muted)] transition hover:text-[var(--accent-deep)]"
          >
            <span aria-hidden>←</span>
            Back to work
          </Link>

          <div className="mt-10 flex items-center gap-2.5">
            <Orb size={28} className="shrink-0" />
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--accent)]">
              {meta.eyebrow}
              {meta.status && (
                <span className="ml-3 inline-flex items-center gap-1 rounded-full border border-[var(--accent)]/30 bg-[var(--accent-soft)] px-2 py-0.5 text-[0.6rem] tracking-[0.18em] text-[var(--accent-deep)]">
                  ● {meta.status}
                </span>
              )}
            </p>
          </div>

          <h1 className="font-display mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.025em] text-[var(--ink)] sm:text-5xl lg:text-6xl">
            {meta.title}
          </h1>

          <p className="mt-7 max-w-2xl text-balance text-lg leading-relaxed text-[var(--ink-muted)] sm:text-xl">
            {meta.lede}
          </p>

          {/* Meta strip */}
          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-[var(--border)] pt-8 sm:grid-cols-4">
            <div>
              <dt className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
                Year
              </dt>
              <dd className="mt-2 text-base font-medium text-[var(--ink)]">
                {meta.year}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
                Role
              </dt>
              <dd className="mt-2 text-base font-medium text-[var(--ink)]">
                {meta.role}
              </dd>
            </div>
            <div className="col-span-2">
              <dt className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
                Stack
              </dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {meta.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[var(--border)] bg-[var(--paper)] px-2.5 py-0.5 font-mono text-[0.65rem] text-[var(--ink-muted)]"
                  >
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          {meta.links && meta.links.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-3">
              {meta.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 ${
                    l.primary
                      ? "bg-[var(--accent)] text-white shadow-soft hover:bg-[var(--accent-deep)]"
                      : "glass text-[var(--ink)] hover:border-[var(--accent)] hover:text-[var(--accent-deep)]"
                  }`}
                >
                  {l.label}
                  {l.external && (
                    <span aria-hidden className="text-xs">
                      ↗
                    </span>
                  )}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Metrics */}
      {metrics && metrics.length > 0 && (
        <section className="relative">
          <div className="mx-auto max-w-5xl px-5 py-12 lg:px-8 lg:py-14">
            <div className="glass grid grid-cols-2 gap-x-6 gap-y-10 rounded-2xl p-8 shadow-soft md:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.label}>
                  <div className="font-display text-4xl font-semibold tracking-[-0.02em] text-[var(--accent-deep)] md:text-5xl">
                    {m.value}
                  </div>
                  <div className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sections */}
      <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8 lg:py-24">
        {sections.map((s, i) => (
          <section key={i} className="mb-20 last:mb-0">
            {s.kicker && (
              <p className="mb-3 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--accent)]">
                § {s.kicker}
              </p>
            )}
            <h2 className="mb-7 font-display text-3xl font-medium leading-[1.1] tracking-tight text-[var(--ink)] sm:text-[2.5rem]">
              {s.heading}
            </h2>
            <div className="space-y-5 text-[1.0625rem] leading-[1.75] text-[var(--ink-muted)]">
              {s.body}
            </div>
          </section>
        ))}
      </div>

      {/* Next project */}
      {nextProject && (
        <section className="relative">
          <div className="mx-auto max-w-5xl px-5 py-14 lg:px-8 lg:py-16">
            <Link
              href={nextProject.href}
              className="glass group flex items-center justify-between gap-6 rounded-2xl p-8 shadow-soft transition hover:-translate-y-0.5 hover:shadow-soft-lg"
            >
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
                  Next case study
                </p>
                <p className="mt-2 font-display text-2xl font-medium tracking-tight text-[var(--ink)] transition group-hover:text-[var(--accent-deep)] sm:text-3xl">
                  {nextProject.label}
                </p>
              </div>
              <span
                aria-hidden
                className="text-2xl text-[var(--accent)] transition group-hover:translate-x-2"
              >
                →
              </span>
            </Link>
          </div>
        </section>
      )}
    </article>
  );
}

/* ---------- Reusable body components — Pitch/Notion light theme ---------- */

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="text-xl font-normal leading-[1.6] text-[var(--ink)]">
      {children}
    </p>
  );
}

export function Callout({
  kicker,
  children,
}: {
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-8 border-l-2 border-[var(--accent)] bg-[var(--accent-soft)]/40 py-5 pl-6 pr-4">
      {kicker && (
        <p className="mb-2 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-[var(--accent-deep)]">
          {kicker}
        </p>
      )}
      <div className="text-lg font-normal leading-[1.6] text-[var(--ink)]">
        {children}
      </div>
    </aside>
  );
}

export function FactGrid({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <dl className="my-8 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-[var(--border)] py-8 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-faint)]">
            {item.label}
          </dt>
          <dd className="mt-1.5 text-base font-medium text-[var(--ink)]">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* Captioned visual slot + lightbox — client component, see ./Figure. */
export { Figure, ScreensPlaceholder } from "./Figure";

/* UX-focused design decision card */
export function DesignDecision({
  number,
  title,
  challenge,
  decision,
  outcome,
}: {
  number: number;
  title: string;
  challenge: ReactNode;
  decision: ReactNode;
  outcome: ReactNode;
}) {
  return (
    <article className="glass my-10 rounded-2xl p-6 shadow-soft">
      <header className="flex items-baseline gap-3 border-b border-[var(--border)] pb-4">
        <span className="font-mono text-[0.7rem] tracking-[0.18em] text-[var(--accent)]">
          {String(number).padStart(2, "0")}
        </span>
        <h3 className="text-xl font-medium tracking-tight text-[var(--ink)]">{title}</h3>
      </header>
      <div className="mt-5 grid gap-4 text-[0.95rem] leading-relaxed text-[var(--ink-muted)] sm:grid-cols-[120px_1fr]">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
          Challenge
        </p>
        <div>{challenge}</div>
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--accent)]">
          Decision
        </p>
        <div className="text-[var(--ink)]">{decision}</div>
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
          Outcome
        </p>
        <div>{outcome}</div>
      </div>
    </article>
  );
}

/* Architecture Decision Record — proof of engineering depth */
export function ADR({
  number,
  title,
  context,
  decision,
  consequences,
}: {
  number: number;
  title: string;
  context: ReactNode;
  decision: ReactNode;
  consequences: ReactNode;
}) {
  return (
    <article className="glass my-10 rounded-2xl p-6 shadow-soft">
      <header className="flex items-baseline gap-3 border-b border-[var(--border)] pb-4">
        <span className="font-mono text-[0.7rem] tracking-[0.18em] text-[var(--accent)]">
          ADR-{String(number).padStart(3, "0")}
        </span>
        <h3 className="text-xl font-medium tracking-tight text-[var(--ink)]">
          {title}
        </h3>
      </header>
      <div className="mt-5 grid gap-4 text-[0.95rem] leading-relaxed text-[var(--ink-muted)] sm:grid-cols-[120px_1fr]">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
          Context
        </p>
        <div>{context}</div>

        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--accent)]">
          Decision
        </p>
        <div className="text-[var(--ink)]">{decision}</div>

        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
          Consequences
        </p>
        <div>{consequences}</div>
      </div>
    </article>
  );
}
