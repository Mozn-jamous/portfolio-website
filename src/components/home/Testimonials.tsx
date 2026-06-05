import Image from "next/image";
import { testimonialsContent } from "@/lib/scenes-content";
import { SceneBackground } from "@/components/site/SceneBackground";
import { Reveal } from "@/components/site/Reveal";

/**
 * Testimonials — DATA-GATED. Renders nothing while `testimonialsContent` is
 * empty, so the live site never shows fabricated or placeholder quotes. Add
 * real entries (with permission) in scenes-content.ts and this section
 * appears automatically — no code change needed.
 */
export function Testimonials() {
  const items = testimonialsContent;
  if (!items.length) return null;

  return (
    <section className="relative isolate overflow-hidden">
      <SceneBackground src="/scenes/about.png" position="center 60%" scrim={0} />
      <div aria-hidden className="veil-v absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-28">
        <Reveal>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--accent)]">
            What people say
          </span>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08} className="h-full">
              <figure className="panel flex h-full flex-col rounded-2xl p-6">
                <blockquote className="flex-1 text-[1.02rem] leading-relaxed text-[var(--ink)]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-[var(--border)] pt-4">
                  {t.photo && (
                    <Image
                      src={t.photo}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  )}
                  <span>
                    <span className="block text-sm font-semibold text-[var(--ink)]">
                      {t.name}
                    </span>
                    <span className="block font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
