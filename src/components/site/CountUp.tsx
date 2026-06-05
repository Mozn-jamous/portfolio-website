"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * CountUp — animates a whole number from 0 to its value when it scrolls into
 * view. Only animates *pure integers* (e.g. "3"); any other string (e.g.
 * "Design → Dev → Deploy") renders verbatim, so it's safe to wrap every stat.
 *
 * Safety: respects prefers-reduced-motion (shows the final value at once), and
 * a fallback timer guarantees the final value appears even if the
 * IntersectionObserver never fires — content is never stuck at 0.
 */
export function CountUp({
  value,
  duration = 1300,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const isNumeric = /^\d+$/.test(value.trim());
  const target = isNumeric ? parseInt(value, 10) : 0;

  const [display, setDisplay] = useState(isNumeric ? "0" : value);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!isNumeric || reduced) {
      setDisplay(value);
      return;
    }
    const el = ref.current;
    if (!el) return;

    function run() {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      function frame(now: number) {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        setDisplay(String(Math.round(eased * target)));
        if (t < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    // Guarantee the value appears even if the observer never fires.
    const fallback = setTimeout(() => {
      if (!started.current) setDisplay(String(target));
    }, 1600);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, [isNumeric, reduced, value, target, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
