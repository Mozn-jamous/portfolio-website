import { projectsIndex } from "@/lib/scenes-content";
import { DirectoryCard } from "@/components/projects/DirectoryCard";
import { SceneBackground } from "@/components/site/SceneBackground";
import { Reveal } from "@/components/site/Reveal";

export const projectsDescription =
  "Products, systems, and experiences designed and built across healthcare, childcare, commerce, and business operations.";

/**
 * Projects directory — the modern grid of all shipped work. Rendered both as
 * the home page's "Projects" section (id=work) and as the standalone /projects
 * page, so the two are identical (no "different page" feel).
 */
export function ProjectsDirectory() {
  return (
    <section id="work" className="relative isolate scroll-mt-16 overflow-hidden">
      <SceneBackground src="/scenes/work.png" scrim={0.16} />

      <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-28">
        <Reveal>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--accent)]">
            Selected work
          </span>
          <h2 className="font-display mt-4 max-w-3xl text-[2rem] font-medium leading-[1.1] tracking-tight text-[var(--ink)] lg:text-[2.75rem]">
            Every project, designed and built end-to-end.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-[1.7] text-[var(--ink-muted)]">
            {projectsDescription}
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projectsIndex.map((p, i) => (
            <li key={p.href}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <DirectoryCard project={p} />
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <div className="panel mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl p-6 lg:p-8">
            <div>
              <h3 className="font-display text-xl font-medium text-[var(--ink)] lg:text-2xl">
                ERP &amp; Odoo systems
              </h3>
              <p className="mt-1 text-sm text-[var(--ink-muted)]">
                The full systems-engineering competence — its own focused hub.
              </p>
            </div>
            <a
              href="/odoo"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-[var(--accent-deep)]"
            >
              Explore the systems work
              <span aria-hidden className="transition group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
