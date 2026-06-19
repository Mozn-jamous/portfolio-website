import Link from "next/link";
import {
  aboutPageContent,
  aboutContent,
  heroContent,
  educationChapter,
} from "@/lib/scenes-content";
import { SceneBackground } from "@/components/site/SceneBackground";
import { Reveal } from "@/components/site/Reveal";
import { Credentials } from "@/components/about/Credentials";
import { T } from "@/components/i18n/T";

/**
 * Full "About" — portrait, summary, trajectory, philosophy, and tools
 * ecosystem. Rendered both as the home "About" section (id=about) and as the
 * standalone /about page, so they're identical. CTAs use "/#anchor" form so
 * they scroll on the home page and navigate-then-scroll from anywhere else.
 */
export function AboutFull() {
  const { eyebrow, eyebrowAr, title, titleAr, summary, summaryAr, philosophy, tools } =
    aboutPageContent;
  const { openTo, openToAr } = aboutContent;
  const { socials, location, locationAr } = heroContent;
  const { education, certifications } = educationChapter;

  // Honest at-a-glance facts — no invented data (all from heroContent).
  const glance = [
    { k: "Now", kAr: "الآن", v: "Building product @ Santa Media", vAr: "أبني منتجاً في Santa Media" },
    { k: "Based in", kAr: "المقر", v: location, vAr: locationAr },
    { k: "Focus", kAr: "التركيز", v: "Mobile · AI · ERP", vAr: "جوال · ذكاء اصطناعي · ERP" },
    { k: "Stack", kAr: "التقنيات", v: "Flutter · Python · Odoo", vAr: "Flutter · Python · Odoo" },
  ];

  return (
    <section id="about" className="relative isolate scroll-mt-16 overflow-hidden">
      <SceneBackground src="/scenes/about.webp" position="center 28%" scrim={0} />
      <div aria-hidden className="veil-v absolute inset-0 -z-10" />

      <div className="mx-auto max-w-5xl px-5 py-24 lg:px-8 lg:py-28">
        {/* Intro — statement (left) + honest at-a-glance card (right) */}
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <Reveal>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--accent)]">
              <T en={eyebrow} ar={eyebrowAr} />
            </span>
            <h2 className="font-display mt-4 text-[2rem] font-medium leading-[1.1] tracking-tight text-[var(--ink)] sm:text-[2.75rem] lg:text-[3.25rem]">
              <T en={title} ar={titleAr} />
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-[1.7] text-[var(--ink-muted)]">
              <T en={summary} ar={summaryAr} />
            </p>

            {/* Open to — scannable, not prose */}
            <div className="mt-8">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-[var(--ink-faint)]">
                <T en="Open to" ar="منفتحة على" />
              </span>
              <ul className="mt-3 flex flex-wrap gap-2">
                {openTo.map((item) => (
                  <li
                    key={item}
                    className="lang-en rounded-full border border-[var(--border-strong)] bg-white/10 px-3.5 py-1.5 text-sm text-[var(--ink)] backdrop-blur"
                  >
                    {item}
                  </li>
                ))}
                {openToAr.map((item) => (
                  <li
                    key={item}
                    className="lang-ar rounded-full border border-[var(--border-strong)] bg-white/10 px-3.5 py-1.5 text-sm text-[var(--ink)] backdrop-blur"
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
              <T en="View résumé / CV" ar="عرض السيرة الذاتية" />
              <span aria-hidden>↓</span>
            </Link>
          </Reveal>

          {/* At a glance — replaces the empty portrait placeholder with real facts */}
          <Reveal delay={0.1}>
            <div className="panel rounded-3xl p-6 lg:p-7">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-[var(--ink-faint)]">
                  <T en="At a glance" ar="لمحة سريعة" />
                </span>
              </div>
              <dl className="mt-4">
                {glance.map((row) => (
                  <div key={row.k} className="border-t border-[var(--border)] py-3.5">
                    <dt className="font-mono text-[0.56rem] uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                      <T en={row.k} ar={row.kAr} />
                    </dt>
                    <dd className="mt-1 text-[0.95rem] font-medium text-[var(--ink)]">
                      <T en={row.v} ar={row.vAr} />
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

        {/* Education & certifications */}
        <div className="mt-24">
          <Reveal>
            <h3 className="font-display text-2xl font-medium text-[var(--ink)] lg:text-3xl">
              <T en={<>Education &amp; certifications</>} ar="التعليم والشهادات" />
            </h3>
          </Reveal>

          <Credentials education={education} certifications={certifications} />
        </div>

        {/* Philosophy */}
        <div className="mt-24">
          <Reveal>
            <h3 className="font-display text-2xl font-medium text-[var(--ink)] lg:text-3xl">
              <T en="How I work" ar="كيف أعمل" />
            </h3>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {philosophy.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.08} className="h-full">
                <div className="panel h-full rounded-2xl p-6">
                  <h4 className="font-display text-lg font-medium text-[var(--ink)]">
                    <T en={p.title} ar={p.titleAr} />
                  </h4>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--ink-muted)]">
                    <T en={p.body} ar={p.bodyAr} />
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
              <T en={<>Tools &amp; technologies</>} ar="الأدوات والتقنيات" />
            </h3>
          </Reveal>
          <div className="mt-8 space-y-6">
            {tools.map((group, i) => (
              <Reveal key={group.area} delay={(i % 3) * 0.05}>
                <div className="grid gap-3 border-t border-[var(--border)] pt-5 md:grid-cols-[120px_1fr] md:gap-8">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                    <T en={group.area} ar={group.areaAr} />
                  </span>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((t, ti) => (
                      <li
                        key={t}
                        className="rounded-full border border-[var(--border-strong)] bg-white/10 px-3.5 py-1.5 text-sm text-[var(--ink)] backdrop-blur"
                      >
                        <T en={t} ar={group.itemsAr?.[ti] ?? t} />
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
              <T en="Get in touch" ar="تواصل معي" />
              <span aria-hidden className="transition group-hover:translate-x-0.5 rtl:-scale-x-100">→</span>
            </Link>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--glass)] px-6 py-3 text-sm font-semibold text-[var(--ink)] backdrop-blur transition hover:border-[var(--accent)] hover:text-[var(--accent-deep)]"
            >
              <T en="See the work" ar="شاهد العمل" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
