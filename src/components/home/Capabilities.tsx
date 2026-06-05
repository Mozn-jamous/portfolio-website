import { capabilitiesContent } from "@/lib/scenes-content";
import { Orb } from "@/components/site/Orb";
import { SceneBackground } from "@/components/site/SceneBackground";
import { Reveal } from "@/components/site/Reveal";

export function Capabilities() {
  const { eyebrow, items } = capabilitiesContent;

  return (
    <section className="relative isolate scroll-mt-16 overflow-hidden">
      <SceneBackground src="/scenes/work.png" position="center 72%" scrim={0} />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(248,244,250,0.9) 0%, rgba(248,244,250,0.62) 45%, rgba(248,244,250,0.82) 100%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-5 py-28 lg:px-8 lg:py-32">
        <Reveal>
          <div className="flex items-center gap-3">
            <Orb src="/orb/present.png" size={42} className="shrink-0" />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--accent)]">
              {eyebrow}
            </span>
          </div>
        </Reveal>

        <div className="mt-10 border-t border-[var(--border-strong)]">
          {items.map((c, i) => (
            <Reveal key={c.audience} delay={i * 0.08}>
              <div className="grid gap-3 border-b border-[var(--border-strong)] py-9 md:grid-cols-[auto_1fr] md:gap-12">
                <span className="font-display text-5xl font-semibold leading-none text-[var(--accent)]/45 lg:text-6xl">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium leading-snug text-[var(--ink)] lg:text-3xl">
                    {c.audience}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[1.05rem] leading-relaxed text-[var(--ink-muted)]">
                    {c.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
