import Link from "next/link";
import { businessSystemsContent } from "@/lib/scenes-content";
import { SceneBackground } from "@/components/site/SceneBackground";
import { Reveal } from "@/components/site/Reveal";

/**
 * "ERP & Odoo Systems" — the gateway from the home page into the dedicated
 * /odoo case study. It surfaces the systems competence as range (a second
 * facet of the same engineer), then hands off to its own focused page so it
 * never competes with the product/design work above.
 */
export function BusinessSystems() {
  const { eyebrow, heading, body, systems, results, cta } =
    businessSystemsContent;

  return (
    <section
      id="systems"
      className="relative isolate scroll-mt-16 overflow-hidden"
    >
      <SceneBackground src="/scenes/stack.png" position="center 55%" scrim={0} />
      <div aria-hidden className="veil-v absolute inset-0 -z-10" />

      <div className="mx-auto max-w-5xl px-5 py-24 lg:px-8 lg:py-28">
        <Reveal>
          <span className="mb-8 block font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--accent)]">
            {eyebrow}
          </span>
        </Reveal>

        <Reveal>
          <div className="panel grid gap-10 rounded-3xl p-8 lg:grid-cols-[1.4fr_1fr] lg:p-12">
            {/* Left — the pitch */}
            <div>
              <h2 className="font-display text-[2rem] font-medium leading-[1.1] tracking-tight text-[var(--ink)] lg:text-[2.75rem]">
                {heading}
              </h2>
              <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-[var(--ink-muted)]">
                {body}
              </p>

              <ul className="mt-7 flex flex-wrap gap-2">
                {systems.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-[var(--border-strong)] bg-white/10 px-3.5 py-1.5 font-mono text-[0.72rem] text-[var(--ink)] backdrop-blur"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <Link
                href={cta.href}
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-[var(--accent-deep)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
              >
                {cta.label}
                <span aria-hidden className="transition group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>

            {/* Right — the results */}
            <dl className="flex flex-col justify-center gap-6 border-t border-[var(--border)] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              {results.map((r) => (
                <div key={r.label}>
                  <dt className="font-display text-gradient text-4xl font-semibold leading-none tracking-tight lg:text-5xl">
                    {r.value}
                  </dt>
                  <dd className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                    {r.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
