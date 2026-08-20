"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DirectoryCard } from "@/components/projects/DirectoryCard";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { T } from "@/components/i18n/T";
import type { ProjectIndexEntry } from "@/lib/scenes-content";

const EASE = [0.22, 1, 0.36, 1] as const;

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

/**
 * ProjectsGrid — the directory cards, revealed as a staggered cascade when the
 * grid scrolls into view. Isolated as a client island so the surrounding
 * section stays a server component. Under prefers-reduced-motion it renders a
 * plain, fully-visible grid (no animation).
 *
 * `initialCount` caps how many cards show at first; the rest sit behind a
 * "See more" toggle (cards mount into the same cascade when expanded).
 */
export function ProjectsGrid({
  projects,
  initialCount,
}: {
  projects: ProjectIndexEntry[];
  initialCount?: number;
}) {
  const reduced = useReducedMotion();
  const [expanded, setExpanded] = useState(false);

  const collapsible = !!initialCount && projects.length > initialCount;
  const visible =
    collapsible && !expanded ? projects.slice(0, initialCount) : projects;

  const seeMore = collapsible && !expanded && (
    <div className="mt-8 flex justify-center">
      <button
        type="button"
        onClick={() => setExpanded(true)}
        className="group inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--glass)] px-6 py-3 text-sm font-semibold text-[var(--ink)] backdrop-blur transition hover:border-[var(--accent)] hover:text-[var(--accent-deep)]"
      >
        <T en="See more projects" ar="عرض بقية المشاريع" />
        <span aria-hidden className="transition group-hover:translate-y-0.5">
          ↓
        </span>
      </button>
    </div>
  );

  if (reduced) {
    return (
      <>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((p) => (
            <li key={p.href} className="h-full">
              <DirectoryCard project={p} />
            </li>
          ))}
        </ul>
        {seeMore}
      </>
    );
  }

  return (
    <>
      <motion.ul
        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {visible.map((p) => (
          <motion.li key={p.href} variants={cardVariants} className="h-full">
            <DirectoryCard project={p} />
          </motion.li>
        ))}
      </motion.ul>
      {seeMore}
    </>
  );
}
