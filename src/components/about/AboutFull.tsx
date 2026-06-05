import Link from "next/link";
import {
  aboutPageContent,
  aboutContent,
  heroContent,
  journeyChapter,
} from "@/lib/scenes-content";
import { SceneBackground } from "@/components/site/SceneBackground";
import { Reveal } from "@/components/site/Reveal";
import { Orb } from "@/components/site/Orb";

/**
 * Full "About" — portrait, summary, trajectory, philosophy, and tools
 * ecosystem. Rendered both as the home "About" section (id=about) and as the
 * standalone /about page, so they're identical. CTAs use "/#anchor" form so
 * they scroll on the home page and navigate-then-scroll from anywhere else.
 */
export function AboutFull() {
  const { eyebrow, title, summary, philosophy, tools } = aboutPageContent;
  const { openTo } = aboutContent;
  const { socials, location } = heroContent;

  // Honest at-a-glance facts — no invented data (all from heroContent).
  const glance = [
    { k: "Now", v: "Building product @ Santa Media" },
    { k: "Based in", v: location },
    { k: "Focus", v: "Mobile · AI · ERP" },
    { k: "Stack", v: "Flutter · Python · Odoo" },
  ];

  return (
    <section id="about" className="relative isolate scroll-mt-16 overflow-hidden">
      <SceneBackground src="/scenes/about.png" position="center 28%" scrim={0} />
      <div aria-hidden className="veil-v absolute inset-0 -z-10" />

      <div className="mx-auto max-w-5xl px-5 py-24 lg:px-8 lg:py-28">
        {/* Intro — statement (left) + honest at-a-glance card (right) */}
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <Reveal>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--accent)]">
              {eyebrow}
            </span>
            <h2 className="font-display mt-4 text-[2rem] font-medium leading-[1.1] tracking-tight text-[var(--ink)] sm:text-[2.75rem] lg:text-[3.25rem]">
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-[1.7] text-[var(--ink-muted)]">
              {summary}
            </p>

            {/* Open to — scannable, not prose */}
            <div className="mt-8">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-[var(--ink-faint)]">
                Open to
              </span>
              <ul className="mt-3 flex flex-wrap gap-2">
                {openTo.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[var(--border-strong)] bg-white/10 px-3.5 py-1.5 text-sm text-[var(--ink)] backdrop-blur"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/cv"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--glass)] px-5 py-2.5 text-sm font-semibold text-[var(--ink)] backdrop-blur transition hover:border-[var(--accent)] hover:text-[var(--accent-deep)]"
            >
              View résumé / CV
              <span aria-hidden>↓</span>
            </Link>
          </Reveal>

          {/* At a glance — replaces the empty portrait placeholder with real facts */}
          <Reveal delay={0.1}>
            <div className="panel rounded-3xl p-6 lg:p-7">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-[var(--ink-faint)]">
                  At a glance
                </span>
                <Orb size={40} />
              </div>
              <dl className="mt-4">
                {glance.map((row) => (
                  <div key={row.k} className="border-t border-[var(--border)] py-3.5">
                    <dt className="font-mono text-[0.56rem] uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                      {row.k}
                    </dt>
                    <dd className="mt-1 text-[0.95rem] font-medium text-[var(--ink)]">
                      {row.v}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-[var(--border)] pt-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-mono text-[0.64rem] uppercase tracking-[0.14em] text-[var(--ink-muted)] transition hover:text-[var(--accent-deep)]"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Trajectory */}
        <div className="mt-24">
          <Reveal>
            <h3 className="font-display text-2xl font-medium text-[var(--ink)] lg:text-3xl">
              Trajectory
            </h3>
          </Reveal>
          <ol className="relative ml-2 mt-10 space-y-9 pl-9">
            <span
              aria-hidden
              className="absolute bottom-2 left-0 top-2 w-[2px] rounded"
              style={{
                background:
                  "linear-gradient(180deg, var(--c-rose), var(--c-mauve), var(--c-blue))",
              }}
            />
            {journeyChapter.milestones.map((m, i) => (
              <li key={i} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[2.45rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white"
                  style={{
                    background: "var(--accent)",
                    boxShadow: "0 0 0 4px rgba(207,122,153,0.18)",
                  }}
                />
                <Reveal delay={i * 0.05}>
                  <div className="grid gap-1 md:grid-cols-[110px_1fr] md:gap-8">
                    <span className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-[var(--accent-deep)]">
                      {m.year}
                    </span>
                    <div>
                      <h4 className="font-display text-lg font-medium leading-snug text-[var(--ink)] lg:text-xl">
                        {m.href ? (
                          <Link href={m.href} className="link-underline transition hover:text-[var(--accent-deep)]">
                            {m.title}
                          </Link>
                        ) : (
                          m.title
                        )}
                      </h4>
                      <p className="mt-1.5 max-w-2xl text-[0.95rem] leading-relaxed text-[var(--ink-muted)]">
                        {m.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal>
            <div className="mt-12 flex flex-wrap items-baseline gap-x-3 gap-y-2">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-[var(--ink-faint)]">
                Credentials
              </span>
              <span aria-hidden className="rule-accent hidden h-px w-12 self-center sm:block" />
              {journeyChapter.credentials.map((c, i) => (
                <span key={i} className="text-sm text-[var(--ink-muted)]">
                  {c}
                  {i < journeyChapter.credentials.length - 1 && (
                    <span aria-hidden className="mx-2 text-[var(--ink-faint)]">·</span>
                  )}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Philosophy */}
        <div className="mt-24">
          <Reveal>
            <h3 className="font-display text-2xl font-medium text-[var(--ink)] lg:text-3xl">
              How I work
            </h3>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {philosophy.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.08} className="h-full">
                <div className="panel h-full rounded-2xl p-6">
                  <h4 className="font-display text-lg font-medium text-[var(--ink)]">
                    {p.title}
                  </h4>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--ink-muted)]">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Tools ecosystem — chips, not progress bars */}
        <div className="mt-24">
          <Reveal>
            <h3 className="font-display text-2xl font-medium text-[var(--ink)] lg:text-3xl">
              Tools &amp; technologies
            </h3>
          </Reveal>
          <div className="mt-8 space-y-6">
            {tools.map((group, i) => (
              <Reveal key={group.area} delay={(i % 3) * 0.05}>
                <div className="grid gap-3 border-t border-[var(--border)] pt-5 md:grid-cols-[120px_1fr] md:gap-8">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                    {group.area}
                  </span>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-[var(--border-strong)] bg-white/10 px-3.5 py-1.5 text-sm text-[var(--ink)] backdrop-blur"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA — anchors so they work on home and from standalone pages */}
        <Reveal>
          <div className="mt-24 flex flex-wrap items-center gap-3">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--c-mauve)] to-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:opacity-90"
            >
              Get in touch
              <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
            </Link>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--glass)] px-6 py-3 text-sm font-semibold text-[var(--ink)] backdrop-blur transition hover:border-[var(--accent)] hover:text-[var(--accent-deep)]"
            >
              See the work
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
