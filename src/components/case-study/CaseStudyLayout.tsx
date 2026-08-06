import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Orb } from "@/components/site/Orb";
import { T } from "@/components/i18n/T";

export type CaseStudyMeta = {
  eyebrow: ReactNode;
  title: ReactNode;
  lede: ReactNode;
  year: ReactNode;
  role: ReactNode;
  status?: ReactNode;
  stack: string[];
  links?: { label: ReactNode; href: string; external?: boolean; primary?: boolean }[];
};

export type CaseStudyMetric = {
  value: ReactNode;
  label: ReactNode;
};

export type CaseStudySection = {
  heading: ReactNode;
  kicker?: ReactNode;
  body: ReactNode;
};

/**
 * Per-case-study color identity. When set, the whole article re-tints to the
 * real app's signature hue — accent threads (links, kickers, metrics, pills,
 * callouts) plus a soft radial glow behind the hero — while the dark twilight
 * ground stays. This is how each case study "feels" like the app it documents.
 */
export type CaseStudyTheme = {
  /** --accent override (bright enough to read on the dark ground). */
  accent: string;
  /** --accent-deep override (hover / headings / big metric numbers). */
  accentDeep: string;
  /** --accent-soft override — an rgba() string for translucent fills. */
  accentSoft: string;
  /** rgba() for the radial hero glow. */
  glow: string;
  /** Architecture-diagram accent (the diagram is a light card, so tune these
   *  DEEPER/more saturated than the on-dark accents above to read on white). */
  diagramAccent?: string;
  diagramAccentDeep?: string;
  /** A LIGHT (near-white, app-tinted) fill for the diagram's highlight boxes. */
  diagramAccentSoft?: string;
};

type Props = {
  meta: CaseStudyMeta;
  metrics?: CaseStudyMetric[];
  sections: CaseStudySection[];
  nextProject?: { label: ReactNode; href: string };
  theme?: CaseStudyTheme;
};

export function CaseStudyLayout({ meta, metrics, sections, nextProject, theme }: Props) {
  const themeStyle = theme
    ? ({
        "--accent": theme.accent,
        "--accent-deep": theme.accentDeep,
        "--accent-soft": theme.accentSoft,
        ...(theme.diagramAccent && {
          "--dgm-accent": theme.diagramAccent,
          "--dgm-accent-deep": theme.diagramAccentDeep,
          "--dgm-accent-soft": theme.diagramAccentSoft,
        }),
      } as CSSProperties)
    : undefined;

  return (
    <article className="relative text-[var(--ink)]" style={themeStyle}>
      {/* Hero */}
      <section className="relative isolate">
        {theme?.glow && (
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] overflow-hidden">
            <div
              className="absolute left-1/2 top-[-120px] h-[480px] w-[1100px] -translate-x-1/2 rounded-full blur-3xl"
              style={{ background: `radial-gradient(closest-side, ${theme.glow}, transparent)` }}
            />
          </div>
        )}
        <div className="mx-auto max-w-5xl px-5 pb-16 pt-16 lg:px-8 lg:pb-24 lg:pt-24">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--ink-muted)] transition hover:text-[var(--accent-deep)]"
          >
            <span aria-hidden className="rtl:-scale-x-100">←</span>
            <T en="Back to work" ar="عودة إلى الأعمال" />
          </Link>

          <div className="mt-10 flex items-center gap-2.5">
            <Orb size={28} className="shrink-0" />
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--accent)]">
              {meta.eyebrow}
              {meta.status && (
                <span className="ms-3 inline-flex items-center gap-1 rounded-full border border-[var(--accent)]/30 bg-[var(--accent-soft)] px-2 py-0.5 text-[0.6rem] tracking-[0.18em] text-[var(--accent-deep)]">
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
                <T en="Year" ar="السنة" />
              </dt>
              <dd className="mt-2 text-base font-medium text-[var(--ink)]">
                {meta.year}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
                <T en="Role" ar="الدور" />
              </dt>
              <dd className="mt-2 text-base font-medium text-[var(--ink)]">
                {meta.role}
              </dd>
            </div>
            <div className="col-span-2">
              <dt className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
                <T en="Stack" ar="التقنيات" />
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
                  key={l.href}
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
                    <span aria-hidden className="text-xs rtl:-scale-x-100">
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
              {metrics.map((m, i) => (
                <div key={i}>
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
                  <T en="Next case study" ar="دراسة الحالة التالية" />
                </p>
                <p className="mt-2 font-display text-2xl font-medium tracking-tight text-[var(--ink)] transition group-hover:text-[var(--accent-deep)] sm:text-3xl">
                  {nextProject.label}
                </p>
              </div>
              <span
                aria-hidden
                className="text-2xl text-[var(--accent)] transition group-hover:translate-x-2 rtl:-scale-x-100"
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
  kicker?: ReactNode;
  children: ReactNode;
}) {
  return (
    <aside className="my-8 border-s-2 border-[var(--accent)] bg-[var(--accent-soft)]/40 py-5 pe-4 ps-6">
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
  items: { label: ReactNode; value: ReactNode }[];
}) {
  return (
    <dl className="my-8 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-[var(--border)] py-8 sm:grid-cols-3">
      {items.map((item, i) => (
        <div key={i}>
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
export { PhoneDemo } from "./PhoneDemo";

/* UX-focused design decision card */
export function DesignDecision({
  number,
  title,
  challenge,
  decision,
  outcome,
}: {
  number: number;
  title: ReactNode;
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
          <T en="Challenge" ar="التحدّي" />
        </p>
        <div>{challenge}</div>
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--accent)]">
          <T en="Decision" ar="القرار" />
        </p>
        <div className="text-[var(--ink)]">{decision}</div>
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
          <T en="Outcome" ar="النتيجة" />
        </p>
        <div>{outcome}</div>
      </div>
    </article>
  );
}

/* User persona — Empathize/Define artifact (UX research) */
export function Persona({
  initial,
  name,
  role,
  story,
  goals,
  frustrations,
}: {
  initial: ReactNode;
  name: ReactNode;
  role: ReactNode;
  story: ReactNode;
  goals: ReactNode;
  frustrations: ReactNode;
}) {
  return (
    <article className="glass my-8 rounded-2xl p-6 shadow-soft">
      <header className="flex items-center gap-4 border-b border-[var(--border)] pb-4">
        <span
          aria-hidden
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] font-display text-xl font-semibold text-[var(--accent-deep)]"
        >
          {initial}
        </span>
        <div>
          <h3 className="text-lg font-medium tracking-tight text-[var(--ink)]">{name}</h3>
          <p className="mt-0.5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
            {role}
          </p>
        </div>
      </header>
      <p className="mt-4 text-[0.98rem] italic leading-relaxed text-[var(--ink)]">
        &ldquo;{story}&rdquo;
      </p>
      <div className="mt-5 grid gap-x-5 gap-y-3 text-[0.92rem] leading-relaxed text-[var(--ink-muted)] sm:grid-cols-[110px_1fr]">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[var(--accent)]">
          <T en="Goals" ar="الأهداف" />
        </p>
        <div>{goals}</div>
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
          <T en="Frustrations" ar="الإحباطات" />
        </p>
        <div>{frustrations}</div>
      </div>
    </article>
  );
}

/* Usability-insight prioritization — P0/P1/P2 buckets (Test phase) */
export function Priorities({
  items,
}: {
  items: { tier: string; label: ReactNode }[];
}) {
  return (
    <ul className="my-8 space-y-3">
      {items.map((item, i) => (
        <li key={i} className="glass flex items-start gap-4 rounded-xl p-4 shadow-soft">
          <span className="mt-0.5 shrink-0 rounded-md bg-[var(--accent-soft)] px-2.5 py-1 font-mono text-[0.65rem] font-semibold tracking-[0.12em] text-[var(--accent-deep)]">
            {item.tier}
          </span>
          <span className="text-[0.95rem] leading-relaxed text-[var(--ink-muted)]">
            {item.label}
          </span>
        </li>
      ))}
    </ul>
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
  title: ReactNode;
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
          <T en="Context" ar="السياق" />
        </p>
        <div>{context}</div>

        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--accent)]">
          <T en="Decision" ar="القرار" />
        </p>
        <div className="text-[var(--ink)]">{decision}</div>

        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
          <T en="Consequences" ar="النتائج" />
        </p>
        <div>{consequences}</div>
      </div>
    </article>
  );
}
