import { journeyChapter } from "@/lib/scenes-content";
import { Orb } from "@/components/site/Orb";
import { SceneBackground } from "@/components/site/SceneBackground";
import { Reveal } from "@/components/site/Reveal";

export function Trajectory() {
  return (
    <section id="about" className="relative isolate scroll-mt-16 overflow-hidden">
      <SceneBackground src="/scenes/trajectory.png" position="center 35%" scrim={0} />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(100deg, rgba(248,244,250,0.92) 0%, rgba(248,244,250,0.66) 42%, rgba(248,244,250,0.2) 74%, transparent 90%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-5 py-28 lg:px-8 lg:py-32">
        <Reveal>
          <div className="flex items-center gap-3">
            <Orb src="/orb/journey.png" size={42} className="shrink-0" />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--accent)]">
              Trajectory
            </span>
          </div>
        </Reveal>

        {/* the journey line + nodes */}
        <ol className="relative ml-2 mt-14 space-y-11 pl-9">
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
              <Reveal delay={i * 0.06}>
                <div className="grid gap-1 md:grid-cols-[120px_1fr] md:gap-8">
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-[var(--accent-deep)]">
                    {m.year}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium leading-snug text-[var(--ink)] lg:text-2xl">
                      {m.href ? (
                        <a
                          href={m.href}
                          className="link-underline transition hover:text-[var(--accent-deep)]"
                        >
                          {m.title}
                        </a>
                      ) : (
                        m.title
                      )}
                    </h3>
                    <p className="mt-1.5 max-w-2xl text-[0.95rem] leading-relaxed text-[var(--ink-muted)]">
                      {m.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* credentials — inline, no box */}
        <Reveal>
          <div className="mt-16 flex flex-wrap items-baseline gap-x-3 gap-y-2">
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
    </section>
  );
}
