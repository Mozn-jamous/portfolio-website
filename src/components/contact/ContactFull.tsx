import Link from "next/link";
import { contactPageContent } from "@/lib/scenes-content";
import { SceneBackground } from "@/components/site/SceneBackground";
import { Reveal } from "@/components/site/Reveal";
import { Orb } from "@/components/site/Orb";
import { Magnetic } from "@/components/site/Magnetic";

/**
 * Full contact finale — availability, response time, contact cards, résumé.
 * Rendered both as the home "Contact" section (id=contact) and the standalone
 * /contact page, so they're identical.
 */
export function ContactFull() {
  const { eyebrow, title, body, availability, responseTime, contacts, resume } =
    contactPageContent;

  return (
    <section id="contact" className="relative isolate scroll-mt-16 overflow-hidden">
      <SceneBackground src="/scenes/contact.png" position="center 42%" scrim={0} />
      <div aria-hidden className="veil-v absolute inset-0 -z-10" />

      <div className="mx-auto max-w-3xl px-5 pb-32 pt-24 text-center lg:px-8 lg:pb-40 lg:pt-28">
        <Reveal>
          <div className="flex justify-center">
            <Orb src="/orb/wave.png" size={72} />
          </div>
          <span className="mt-6 block font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--accent)]">
            {eyebrow}
          </span>
          <h2 className="font-display mx-auto mt-4 max-w-2xl text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.025em] text-[var(--ink)] sm:text-[3.5rem] lg:text-[4rem]">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-[1.7] text-[var(--ink-muted)]">
            {body}
          </p>
        </Reveal>

        {/* availability */}
        <Reveal>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="inline-flex items-center gap-2 text-sm text-[var(--ink-muted)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--success)] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--success)]" />
              </span>
              {availability}
            </span>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
              {responseTime}
            </span>
          </div>
        </Reveal>

        {/* contact links */}
        <Reveal>
          <div className="mx-auto mt-12 flex max-w-md flex-col gap-3">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-[var(--border-strong)] bg-[var(--glass)] px-5 py-4 text-left backdrop-blur transition hover:border-[var(--accent)]"
              >
                <span>
                  <span className="block font-mono text-[0.58rem] uppercase tracking-[0.24em] text-[var(--ink-faint)]">
                    {c.label}
                  </span>
                  <span className="mt-0.5 block text-[var(--ink)] transition group-hover:text-[var(--accent-deep)]">
                    {c.value}
                  </span>
                </span>
                <span aria-hidden className="text-[var(--accent)] transition group-hover:translate-x-1">
                  →
                </span>
              </a>
            ))}

            <Magnetic className="mt-2 w-full" strength={0.25}>
              <Link
                href={resume.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[var(--c-mauve)] to-[var(--accent)] px-5 py-4 text-sm font-semibold text-white shadow-soft transition hover:opacity-90"
              >
                {resume.label}
                <span aria-hidden>↓</span>
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
