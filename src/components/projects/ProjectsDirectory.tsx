import Link from "next/link";
import { projectsIndex } from "@/lib/scenes-content";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { SceneBackground } from "@/components/site/SceneBackground";
import { Reveal } from "@/components/site/Reveal";
import { T } from "@/components/i18n/T";

export const projectsDescription =
  "Products, systems, and experiences designed and built across healthcare, childcare, commerce, and business operations.";
const projectsDescriptionAr =
  "منتجات وأنظمة وتجارب صُمّمت وبُنيت في الرعاية الصحية ورعاية الأطفال والتجارة وإدارة الأعمال.";

/**
 * Projects directory — the DEVELOPER / product work only (Flutter, AI, design).
 * ERP / Odoo work is kept separate on the /odoo hub and is NOT mixed into this
 * grid — only a labelled CTA points there.
 *
 * - variant="home": the home "Selected work" section + a "See all projects" link
 *   to /projects + the (separate) ERP hub CTA.
 * - variant="full" (default, /projects): the same product grid + the ERP hub CTA.
 */
/**
 * The four strongest projects lead the grid (deepest ownership + impact);
 * everything else sits behind the "See more" toggle. Order here IS the
 * display order of the featured row.
 */
const FEATURED = [
  "/projects/mademoiselle",
  "/projects/bloombelly",
  "/projects/veghnar-tonvair",
  "/projects/pharmacology",
];

function featuredFirst(projects: typeof projectsIndex) {
  const rank = (p: (typeof projectsIndex)[number]) => {
    const i = FEATURED.indexOf(p.href);
    return i === -1 ? FEATURED.length : i;
  };
  return [...projects].sort((a, b) => rank(a) - rank(b));
}

export function ProjectsDirectory({
  variant = "full",
}: {
  variant?: "home" | "full";
}) {
  return (
    <section id="work" className="relative isolate scroll-mt-16 overflow-hidden">
      <SceneBackground src="/scenes/work.webp" scrim={0.16} />

      <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-28">
        <Reveal>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--accent)]">
            <T en="Selected work" ar="مختارات من العمل" />
          </span>
          <h2 className="font-display mt-4 max-w-3xl text-[2rem] font-medium leading-[1.1] tracking-tight text-[var(--ink)] lg:text-[2.75rem]">
            <T
              en="Every project, designed and built end-to-end."
              ar="كل مشروع: مُصمَّم ومبنيّ من الفكرة إلى الإطلاق."
            />
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-[1.7] text-[var(--ink-muted)]">
            <T en={projectsDescription} ar={projectsDescriptionAr} />
          </p>
        </Reveal>

        <ProjectsGrid
          projects={
            variant === "home"
              ? featuredFirst(projectsIndex.filter((p) => !p.clientSite)).slice(0, 4)
              : featuredFirst(projectsIndex)
          }
          initialCount={variant === "full" ? 4 : undefined}
        />

        {variant === "home" && (
          <Reveal>
            <div className="mt-10 flex justify-center">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--glass)] px-6 py-3 text-sm font-semibold text-[var(--ink)] backdrop-blur transition hover:border-[var(--accent)] hover:text-[var(--accent-deep)]"
              >
                <T en="See all projects" ar="كل المشاريع" />
                <span aria-hidden className="transition group-hover:translate-x-0.5 rtl:-scale-x-100">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        )}

        {/* ERP / Odoo work — kept SEPARATE, reached via its own hub, never mixed
            into the developer grid above. */}
        <Reveal>
          <div className="panel mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl p-6 lg:p-8">
            <div>
              <h3 className="font-display text-xl font-medium text-[var(--ink)] lg:text-2xl">
                <T en="ERP & Odoo systems" ar="أنظمة ERP وOdoo" />
              </h3>
              <p className="mt-1 text-sm text-[var(--ink-muted)]">
                <T
                  en="The systems-engineering work — Techno Solution, Burgasm & more — lives in its own focused hub."
                  ar="أعمال هندسة الأنظمة — Techno Solution وBurgasm وغيرها — في مركزها الخاص."
                />
              </p>
            </div>
            <Link
              href="/odoo"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-[var(--accent-deep)]"
            >
              <T en="Explore the systems work" ar="استكشف أعمال الأنظمة" />
              <span aria-hidden className="transition group-hover:translate-x-0.5 rtl:-scale-x-100">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
