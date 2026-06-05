"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Reveal — gentle scroll-in animation (fade + rise) for content blocks.
 *
 * Uses whileInView with `once` so it fires the first time the block scrolls
 * into view and then stays put. Keep it on inner content, not on full-bleed
 * section wrappers, so the page never has hidden empty sections.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduced = useReducedMotion();

  // Reduced motion → render in place, no rise. (CSS keyframes are already
  // neutralised globally; this covers the JS-driven Reveal too.)
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      // opacity stays 1 — content is ALWAYS visible even if the
      // IntersectionObserver never fires (bfcache / headless). We only
      // animate a gentle rise. (See CLAUDE.md "Motion".)
      initial={{ y }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
