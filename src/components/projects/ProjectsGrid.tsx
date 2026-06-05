"use client";

import { motion } from "framer-motion";
import { DirectoryCard } from "@/components/projects/DirectoryCard";
import { useReducedMotion } from "@/hooks/useReducedMotion";
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
 */
export function ProjectsGrid({ projects }: { projects: ProjectIndexEntry[] }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p) => (
          <li key={p.href} className="h-full">
            <DirectoryCard project={p} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <motion.ul
      className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      variants={gridVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {projects.map((p) => (
        <motion.li key={p.href} variants={cardVariants} className="h-full">
          <DirectoryCard project={p} />
        </motion.li>
      ))}
    </motion.ul>
  );
}
