import Image from "next/image";

/**
 * SceneBackground — a faint, full-bleed illustrated scene behind a section.
 *
 * Each section becomes a "place" in the pastel world. The image is masked to
 * fade into its neighbours (top + bottom) so the scenes blend into one another
 * and into the global aurora, with a soft white scrim on top so glass cards and
 * text stay readable. Optimised + lazy-loaded via next/image.
 *
 * Place inside a `relative isolate overflow-hidden` section; renders at -z-10.
 */
export function SceneBackground({
  src,
  position = "center",
  opacity = 0.95,
  scrim = 0.12,
  priority = false,
}: {
  src: string;
  position?: string;
  /** Image opacity over the aurora (0–1). */
  opacity?: number;
  /** White readability scrim opacity (0–1). */
  scrim?: number;
  priority?: boolean;
}) {
  const fade =
    "linear-gradient(180deg, transparent 0%, #000 12%, #000 88%, transparent 100%)";
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
        style={{
          objectPosition: position,
          opacity,
          WebkitMaskImage: fade,
          maskImage: fade,
        }}
      />
      {scrim > 0 && (
        <div
          className="absolute inset-0 bg-white"
          style={{ opacity: scrim }}
        />
      )}
    </div>
  );
}
