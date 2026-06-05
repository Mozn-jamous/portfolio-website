import Link from "next/link";
import { scenes } from "@/lib/scenes-content";
import { Orb } from "@/components/site/Orb";
import { SceneBackground } from "@/components/site/SceneBackground";
import { Reveal } from "@/components/site/Reveal";

/**
 * "Selected Work" — project cards.
 *
 * Card hierarchy (top to bottom):
 *   index · year
 *   eyebrow (stack category)
 *   NAME (h3)
 *   tagline (one line)
 *   body description
 *   tags
 *   CTA (if `cta` is set on the scene)
 *
 * Add a project: push to `scenes` in scenes-content.ts.
 */
export function SelectedWork() {
  const mobile = scenes.filter((s) => s.track === "mobile");
  const odoo = scenes.filter((s) => s.track === "odoo");

  return (
    <section id="work" className="relative isolate scroll-mt-16 overflow-hidden">
      <SceneBackground src="/scenes/work.png" scrim={0.16} />
      <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-28">
        <Reveal>
          <header className="mb-12 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Orb src="/orb/present.png" size={46} className="shrink-0" />
              <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--accent)]">
                Selected work
              </h2>
            </div>
            <p className="rounded-full bg-white/55 px-3 py-1 text-sm text-[var(--ink-muted)] backdrop-blur">
              {scenes.length} projects · 2024 — Present
            </p>
          </header>
        </Reveal>

        <TrackGroup
          label="Mobile · Flutter & AI"
          projects={mobile}
          startIndex={1}
        />
        <TrackGroup
          label="ERP · Odoo"
          projects={odoo}
          startIndex={mobile.length + 1}
          className="mt-16"
        />
      </div>
    </section>
  );
}

function TrackGroup({
  label,
  projects,
  startIndex,
  className = "",
}: {
  label: string;
  projects: typeof scenes;
  startIndex: number;
  className?: string;
}) {
  return (
    <div className={className}>
      <Reveal>
        <div className="mb-6 flex items-center gap-4">
          <h3 className="font-display text-2xl font-medium text-[var(--ink)] lg:text-3xl">
            {label}
          </h3>
          <span
            aria-hidden
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(90deg, var(--accent), transparent)",
            }}
          />
          <span className="font-mono text-[0.65rem] text-[var(--ink-faint)]">
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>
      </Reveal>

      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <li key={p.id} id={p.id} className="scroll-mt-16">
            <Reveal delay={(i % 3) * 0.08} className="h-full">
              <ProjectCard project={p} index={startIndex + i} />
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof scenes)[number];
  index: number;
}) {
  const href = project.cta?.href;
  const external = project.cta?.external;
  const isClickable = !!href;

  const cardInner = (
    <article className="card-sheen panel group flex h-full flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-1.5 hover:border-[var(--accent)] hover:shadow-soft-lg">
      {/* warm accent bar at the top edge */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 rounded-t-2xl opacity-70"
        style={{
          background:
            "linear-gradient(90deg, var(--c-rose), var(--c-mauve), var(--c-blue))",
        }}
      />
      <header className="flex items-baseline justify-between">
        <span className="font-mono text-[0.65rem] tracking-[0.18em] text-[var(--ink-faint)]">
          {String(index).padStart(2, "0")}
        </span>
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[var(--accent)]">
          {project.year}
        </span>
      </header>

      <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
        {project.eyebrow}
      </p>

      <h3 className="font-display mt-2 text-xl font-semibold leading-tight tracking-tight text-[var(--ink)] transition group-hover:text-[var(--accent-deep)]">
        {project.name}
      </h3>

      <p className="mt-2 text-sm font-medium text-[var(--ink)]">
        {project.tagline}
      </p>

      <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-[var(--ink-muted)]">
        {project.body}
      </p>

      <ul className="mt-6 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 5).map((t) => (
          <li
            key={t.label}
            className={`rounded-md border px-2 py-0.5 font-mono text-[0.62rem] ${
              t.variant === "highlight"
                ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent-deep)]"
                : "border-[var(--border)] bg-[var(--surface-2)] text-[var(--ink-muted)]"
            }`}
          >
            {t.label}
          </li>
        ))}
      </ul>

      {isClickable && (
        <p className="mt-6 inline-flex items-center gap-1 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[var(--accent-deep)]">
          {project.cta!.label}
          <span aria-hidden className="transition group-hover:translate-x-1">
            →
          </span>
        </p>
      )}
    </article>
  );

  if (isClickable && href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          {cardInner}
        </a>
      );
    }
    return (
      <Link href={href} className="block h-full">
        {cardInner}
      </Link>
    );
  }
  return cardInner;
}
