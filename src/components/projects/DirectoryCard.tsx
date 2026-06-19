import Link from "next/link";
import Image from "next/image";
import type { ProjectIndexEntry } from "@/lib/scenes-content";
import { withBase } from "@/lib/base-path";
import { T } from "@/components/i18n/T";

/**
 * DirectoryCard — a project tile for the /projects directory.
 *
 * The cover shows a real mockup when `project.cover` is set; otherwise it
 * renders a branded gradient cover with the project name (an intentional
 * cover, not an empty "image missing" box). Drop a path into `cover` in
 * scenes-content.ts to swap in a screenshot.
 */
export function DirectoryCard({ project }: { project: ProjectIndexEntry }) {
  return (
    <Link
      href={project.href}
      className="card-sheen panel group flex h-full flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1.5 hover:border-[var(--accent)] hover:shadow-soft-lg"
    >
      {/* cover */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {project.cover ? (
          <Image
            src={withBase(project.cover)}
            alt={`${project.name} cover`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="absolute inset-0 grid place-items-center"
            style={{
              background:
                "linear-gradient(135deg, var(--surface-2) 0%, var(--surface) 55%, rgba(232,155,182,0.12) 100%)",
            }}
          >
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-1 opacity-70"
              style={{
                background:
                  "linear-gradient(90deg, var(--c-rose), var(--c-mauve), var(--c-blue))",
              }}
            />
            <span className="font-display px-4 text-center text-xl font-semibold leading-tight text-[var(--ink)]/85">
              {project.name}
            </span>
          </div>
        )}
      </div>

      {/* meta */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between font-mono text-[0.58rem] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
          <span><T en={project.industry} ar={project.industryAr ?? project.industry} /></span>
          <span className="text-[var(--accent)]">{project.year}</span>
        </div>

        <h3 className="font-display mt-2.5 text-lg font-semibold tracking-tight text-[var(--ink)] transition group-hover:text-[var(--accent-deep)]">
          {project.name}
        </h3>
        <p className="mt-1 text-[0.8rem] font-medium text-[var(--ink-muted)]">
          <T en={project.role} ar={project.roleAr ?? project.role} />
        </p>

        <p className="mt-2.5 line-clamp-2 text-[0.82rem] leading-relaxed text-[var(--ink-muted)]">
          <T en={project.summary} ar={project.summaryAr ?? project.summary} />
        </p>

        <p className="mt-3 border-s-2 border-[var(--accent)]/35 ps-3 text-[0.78rem] leading-snug text-[var(--ink)]">
          <T en={project.impact} ar={project.impactAr ?? project.impact} />
        </p>

        <span className="mt-4 inline-flex items-center gap-1 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-[var(--accent-deep)]">
          <T en="Read case study" ar="اقرأ دراسة الحالة" />
          <span aria-hidden className="transition group-hover:translate-x-1 rtl:-scale-x-100">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
