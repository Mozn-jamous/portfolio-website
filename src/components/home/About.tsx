import { aboutContent } from "@/lib/scenes-content";
import { Orb } from "@/components/site/Orb";
import { SceneBackground } from "@/components/site/SceneBackground";
import { Reveal } from "@/components/site/Reveal";

export function About() {
  const { eyebrow, paragraphs, openTo } = aboutContent;

  return (
    <section id="bio" className="relative isolate scroll-mt-16 overflow-hidden">
      <SceneBackground src="/scenes/about.png" position="center 28%" scrim={0} />
      {/* left light wash so ink stays readable, scene shows on the right */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(100deg, rgba(248,244,250,0.94) 0%, rgba(248,244,250,0.7) 40%, rgba(248,244,250,0.15) 72%, transparent 88%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 py-28 lg:px-8 lg:py-36">
        <Reveal>
          <div className="flex items-center gap-3">
            <Orb src="/orb/reading.png" size={42} className="shrink-0" />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--accent)]">
              {eyebrow}
            </span>
          </div>
        </Reveal>

        {/* big editorial lead */}
        <Reveal>
          <p className="font-display mt-8 max-w-3xl text-[1.7rem] font-medium leading-[1.28] text-[var(--ink)] sm:text-4xl lg:text-[2.6rem] lg:leading-[1.22]">
            {paragraphs[0]}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <p className="max-w-2xl text-lg leading-relaxed text-[var(--ink-muted)]">
              {paragraphs[1]}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-[var(--ink-faint)]">
                Open to
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {openTo.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[var(--border-strong)] bg-white/65 px-3.5 py-1.5 text-sm text-[var(--ink)] backdrop-blur transition hover:border-[var(--accent)] hover:text-[var(--accent-deep)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
