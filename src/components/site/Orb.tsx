/**
 * Orb — the recurring guide character.
 *
 * A glowing pearlescent mascot reused across the site as a calm visual
 * thread (hero, section accents, contact). Image carries the eyes; the
 * glow + float are added here. Decorative by default (aria-hidden).
 */

import { withBase } from "@/lib/base-path";

type OrbProps = {
  /** Rendered box size in px. */
  size?: number;
  /** Gentle vertical float (disabled under prefers-reduced-motion globally). */
  float?: boolean;
  /** Extra classes on the wrapper (positioning, etc.). */
  className?: string;
  /** Provide alt text to expose the orb to assistive tech. */
  alt?: string;
  /** Pose image — defaults to the neutral guide. e.g. "/orb/reading.webp". */
  src?: string;
};

export function Orb({
  size = 120,
  float = true,
  className = "",
  alt,
  src = "/demo/character.webp",
}: OrbProps) {
  return (
    <div
      className={`orb ${float ? "t-float" : ""} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden={alt ? undefined : true}
    >
      <span className="orb-glow" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="orb-img" src={withBase(src)} alt={alt ?? ""} />
    </div>
  );
}
