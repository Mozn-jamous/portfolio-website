"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Route transition. Next.js re-mounts `template.tsx` on every navigation, so
 * this gives each page a gentle enter fade — smoothing the jump between the
 * home page and case studies.
 *
 * Opacity ONLY (no transform): a transformed ancestor would become the
 * containing block for `position: fixed`/`sticky` descendants (e.g. the
 * architecture viewer's sticky panel), so we deliberately avoid `y` here.
 * Under prefers-reduced-motion we render the page as-is.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  if (reduced) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
