"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gradient progress bar pinned to the top — a quiet storytelling cue. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });
  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left"
      style={{
        scaleX: x,
        background:
          "linear-gradient(90deg, var(--c-rose), var(--c-mauve), var(--c-blue))",
      }}
    />
  );
}
