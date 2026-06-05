import { processContent } from "@/lib/scenes-content";
import { SceneBackground } from "@/components/site/SceneBackground";
import { Reveal } from "@/components/site/Reveal";

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
      <SceneBackground src="/scenes/stack.png" position="center 60%" scrim={0} />
      <div aria-hidden className="veil-v absolute inset-0 -z-10" />

      <div className="mx-auto max-w-5xl px-5 py-24 lg:px-8 lg:py-28">
        <Reveal>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--accent)]">
            {eyebrow}
          </span>
          <h2 className="font-display mt-4 max-w-3xl text-[2rem] font-medium leading-[1.1] tracking-tight text-[var(--ink)] lg:text-[2.75rem]">
            {heading}
          </h2>
          <p className="mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-[var(--ink-muted)]">
            {intro}
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.step}>
              <Reveal delay={(i % 4) * 0.08} className="h-full">
                <div className="panel flex h-full flex-col rounded-2xl p-6">
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[var(--accent)]">
                    {s.step}
                  </span>
                  <h3 className="font-display mt-2 text-xl font-medium leading-snug text-[var(--ink)]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-[var(--ink-muted)]">
                    {s.body}
                  </p>

                  <dl className="mt-5 space-y-3 text-[0.82rem]">
                    <div>
                      <dt className="font-mono text-[0.56rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
                        Deliverables
                      </dt>
                      <dd className="mt-1.5 flex flex-wrap gap-1.5">
                        {s.deliverables.map((d) => (
                          <span
                            key={d}
                            className="rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-2 py-0.5 text-[0.7rem] text-[var(--ink-muted)]"
                          >
                            {d}
                          </span>
                        ))}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[0.56rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
                        Tools
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

                  <p className="mt-5 border-t border-[var(--border)] pt-4 text-[0.84rem] leading-relaxed text-[var(--ink-muted)]">
                    <span className="font-mono text-[0.56rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
                      Outcome ·{" "}
                    </span>
                    {s.outcome}
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
