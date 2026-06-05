import { stackChapter } from "@/lib/scenes-content";
import { Orb } from "@/components/site/Orb";
import { SceneBackground } from "@/components/site/SceneBackground";
import { Reveal } from "@/components/site/Reveal";

export function Stack() {
  return (
    <section id="stack" className="relative isolate overflow-hidden">
      <SceneBackground src="/scenes/stack.png" position="center 40%" scrim={0} />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(248,244,250,0.88) 0%, rgba(248,244,250,0.6) 45%, rgba(248,244,250,0.85) 100%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-5 py-28 lg:px-8 lg:py-32">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Orb src="/orb/stargaze.png" size={42} className="shrink-0" />
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--accent)]">
                Stack
              </span>
            </div>
            <span className="font-mono text-sm text-[var(--ink-muted)]">
              Tools I&apos;ve shipped with
            </span>
          </div>
        </Reveal>

        <div className="space-y-7">
          {stackChapter.layers.map((layer, li) => (
            <Reveal key={layer.id} delay={li * 0.05}>
              <div className="grid items-baseline gap-3 border-b border-[var(--border-strong)] pb-7 md:grid-cols-[150px_1fr] md:gap-10">
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                  {layer.label}
                </span>
                <ul className="flex flex-wrap gap-2">
                  {layer.items.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full border border-[var(--border-strong)] bg-white/60 px-3.5 py-1.5 text-sm text-[var(--ink)] backdrop-blur transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent-deep)]"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
