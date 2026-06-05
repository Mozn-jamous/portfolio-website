import { outroContent } from "@/lib/scenes-content";
import { Orb } from "@/components/site/Orb";
import { SceneBackground } from "@/components/site/SceneBackground";
import { Reveal } from "@/components/site/Reveal";

export function Contact() {
  const { eyebrow, title, body, contacts } = outroContent;

  return (
    <section id="contact" className="relative isolate scroll-mt-16 overflow-hidden">
      <SceneBackground src="/scenes/contact.png" position="center 42%" scrim={0} />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(25deg, rgba(248,244,250,0.92) 0%, rgba(248,244,250,0.55) 42%, transparent 72%)",
        }}
      />
      {/* farewell orb, waving */}
      <Orb
        src="/orb/wave.png"
        size={300}
        className="pointer-events-none absolute -right-10 top-24 -z-10 hidden opacity-95 lg:block"
      />

      <div className="mx-auto max-w-5xl px-5 py-32 lg:px-8 lg:py-40">
        <Reveal>
          <div className="flex items-center gap-3">
            <Orb src="/orb/wave.png" size={42} className="shrink-0" />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--accent)]">
              {eyebrow}
            </span>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="font-display mt-7 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight text-[var(--ink)] sm:text-6xl lg:text-7xl">
            {title}
          </h2>
        </Reveal>

        <Reveal>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--ink-muted)]">
            {body}
          </p>
        </Reveal>

        <Reveal>
          <ul className="mt-12 space-y-1">
            {contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="group flex flex-wrap items-baseline gap-x-4 border-b border-[var(--border-strong)] py-4 transition hover:border-[var(--accent)]"
                >
                  <span className="w-20 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-[var(--ink-faint)]">
                    {c.label}
                  </span>
                  <span className="font-display text-2xl font-medium text-[var(--ink)] transition group-hover:text-[var(--accent-deep)] sm:text-3xl">
                    {c.value}
                  </span>
                  <span
                    aria-hidden
                    className="ml-auto text-xl text-[var(--accent)] opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
