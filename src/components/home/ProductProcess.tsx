import { processContent } from "@/lib/scenes-content";
import { SceneBackground } from "@/components/site/SceneBackground";
import { Reveal } from "@/components/site/Reveal";
import { T } from "@/components/i18n/T";

/**
 * "Product thinking process" — replaces the old "What I can do for you"
 * pitch. Instead of promises, it shows HOW the work happens: each step
 * pairs a method with a concrete decision from a shipped project, so a
 * hiring manager can see product judgment, not just output.
 */
export function ProductProcess() {
  const { eyebrow, heading, intro, steps } = processContent;

  return (
    <section
      id="process"
      className="relative isolate scroll-mt-16 overflow-hidden"
    >
      <SceneBackground src="/scenes/stack.webp" position="center 60%" scrim={0} />
      <div aria-hidden className="veil-v absolute inset-0 -z-10" />

      <div className="mx-auto max-w-5xl px-5 py-10 sm:py-20 lg:px-8 lg:py-28">
        <Reveal>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--accent)]">
            <T en={eyebrow} ar={processContent.eyebrowAr} />
          </span>
          <h2 className="font-display mt-4 max-w-3xl text-[1.55rem] font-medium leading-[1.24] tracking-normal sm:leading-[1.12] sm:tracking-tight text-[var(--ink)] sm:text-[2rem] lg:text-[2.75rem]">
            <T en={heading} ar={processContent.headingAr} />
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-[1.65] text-[var(--ink-muted)] sm:mt-5 sm:text-[1.02rem] sm:leading-relaxed">
            <T en={intro} ar={processContent.introAr} />
          </p>
        </Reveal>

        {/* Phones get the same four-across row as the desktop, but swiped
            instead of stacked: four full-width cards ran to four screens of
            scroll. The negative margin lets the rail bleed to the screen edge
            while the first card still lines up with the text above it, and the
            next card peeks in so the swipe is discoverable. */}
        <ol className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.step}
              className="w-[74vw] max-w-[290px] shrink-0 snap-start sm:w-auto sm:max-w-none"
            >
              <Reveal delay={(i % 4) * 0.08} className="h-full">
                <div className="panel flex h-full flex-col rounded-2xl p-4 sm:p-6">
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[var(--accent)]">
                    {s.step}
                  </span>
                  <h3 className="font-display mt-1.5 text-lg font-medium leading-snug text-[var(--ink)] sm:mt-2 sm:text-xl">
                    <T en={s.title} ar={s.titleAr} />
                  </h3>
                  <p className="mt-2 text-[0.86rem] leading-[1.55] text-[var(--ink-muted)] sm:mt-3 sm:text-[0.92rem] sm:leading-relaxed">
                    <T en={s.body} ar={s.bodyAr} />
                  </p>

                  <dl className="mt-4 space-y-2.5 text-[0.82rem] sm:mt-5 sm:space-y-3">
                    <div>
                      <dt className="font-mono text-[0.56rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
                        <T en="Deliverables" ar="المُخرجات" />
                      </dt>
                      <dd className="mt-1.5 flex flex-wrap gap-1.5">
                        {s.deliverables.map((d) => (
                          <span
                            key={d}
                            className="lang-en rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-2 py-0.5 text-[0.7rem] text-[var(--ink-muted)]"
                          >
                            {d}
                          </span>
                        ))}
                        {s.deliverablesAr.map((d) => (
                          <span
                            key={d}
                            className="lang-ar rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-2 py-0.5 text-[0.7rem] text-[var(--ink-muted)]"
                          >
                            {d}
                          </span>
                        ))}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[0.56rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
                        <T en="Tools" ar="الأدوات" />
                      </dt>
                      <dd className="mt-1.5 flex flex-wrap gap-1.5">
                        {s.tools.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-[var(--accent)]/25 bg-[var(--accent-soft)] px-2 py-0.5 font-mono text-[0.66rem] text-[var(--accent-deep)]"
                          >
                            {t}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>

                  <p className="mt-4 border-t border-[var(--border)] pt-3 text-[0.8rem] leading-[1.55] text-[var(--ink-muted)] sm:mt-5 sm:pt-4 sm:text-[0.84rem] sm:leading-relaxed">
                    <span className="font-mono text-[0.56rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
                      <T en="Outcome · " ar="النتيجة · " />
                    </span>
                    <T en={s.outcome} ar={s.outcomeAr} />
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
