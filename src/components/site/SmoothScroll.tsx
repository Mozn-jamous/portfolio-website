"use client";

import { useLenis } from "@/hooks/useLenis";

/**
 * SmoothScroll — mounts Lenis (smooth wheel + smooth anchor jumps) for the
 * whole app. Renders nothing. Lives here as a client island so the root
 * layout can stay a server component. Disables itself under
 * prefers-reduced-motion (handled inside useLenis).
 */
export function SmoothScroll() {
  useLenis();
  return null;
}
