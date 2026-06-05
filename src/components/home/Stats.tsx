import { statsContent } from "@/lib/scenes-content";
import { Orb } from "@/components/site/Orb";
import { Reveal } from "@/components/site/Reveal";

export function Stats() {
  const { eyebrow, items } = statsContent;

  return (
    <section className="relative scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-24">
        <Reveal>
          <div className="mb-12 flex items-center gap-3">
            <Orb src="/orb/curious.png" size={38} className="shrink-0" />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--accent)]">
              {eyebrow}
            </span>
          </div>
        </Reveal>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {items.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={
                i % 4 !== 0
                  ? "md:border-l md:border-[var(--border-strong)] md:pl-7"
                  : ""
              }
            >
              <dt className="font-display text-gradient text-6xl font-semibold leading-none tracking-tight lg:text-7xl">
                {s.value}
              </dt>
              <dd className="mt-4 max-w-[14ch] text-sm leading-snug text-[var(--ink-muted)]">
                {s.label}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
