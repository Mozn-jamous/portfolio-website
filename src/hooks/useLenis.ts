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

    // Height of the sticky nav — sections stop just below it, not tucked
    // underneath. Matches the `scroll-mt-16` (64px) used on section wrappers.
    const NAV_OFFSET = -72;

    /**
     * Intercept clicks on internal anchor links so Lenis performs a
     * controlled smooth scroll. Without this, native anchor clicks jump
     * instantly — which can make multiple `whileInView` animations fire
     * mid-jump and look like every section is appearing at once.
     *
     * Handles both bare `#section` links and `/#section` nav links — the
     * latter only when we're already on the home page (otherwise we let
     * Next.js route to home first, then it scrolls there).
     */
    function handleAnchorClick(e: MouseEvent) {
      const target = (e.target as HTMLElement | null)?.closest(
        "a[href^='#'], a[href^='/#']"
      ) as HTMLAnchorElement | null;
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href) return;

      let id: string | null = null;
      if (href.startsWith("#") && href.length > 1) {
        id = href.slice(1);
      } else if (href.startsWith("/#") && window.location.pathname === "/") {
        id = href.slice(2);
      }
      if (!id) return;

      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, {
        offset: NAV_OFFSET,
        duration: 1.6,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
      });
      // keep the URL hash in sync without jumping
      if (window.history.replaceState) {
        window.history.replaceState(null, "", `#${id}`);
      }
    }
    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, [reduced]);
}
