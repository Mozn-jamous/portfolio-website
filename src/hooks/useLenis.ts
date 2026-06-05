"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "./useReducedMotion";

export function useLenis() {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    /**
     * Intercept clicks on internal anchor links so Lenis performs a
     * controlled smooth scroll. Without this, native anchor clicks jump
     * instantly — which can make multiple `whileInView` animations fire
     * mid-jump and look like every section is appearing at once.
     */
    function handleAnchorClick(e: MouseEvent) {
      const target = (e.target as HTMLElement | null)?.closest(
        "a[href^='#']"
      ) as HTMLAnchorElement | null;
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href === "#" || href.length < 2) return;
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, {
        offset: 0,
        duration: 1.6,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
      });
      // keep the URL hash in sync without jumping
      if (window.history.replaceState) {
        window.history.replaceState(null, "", href);
      }
    }
    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, [reduced]);
}
