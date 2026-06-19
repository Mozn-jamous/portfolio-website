"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { Modal } from "@/components/site/Modal";
import { withBase } from "@/lib/base-path";
import { T } from "@/components/i18n/T";

type Screen = {
  src: string;
  alt: string;
  /** Side copy that crossfades in sync with the screen — bilingual. */
  title: ReactNode;
  titleAr: ReactNode;
  blurb: ReactNode;
  blurbAr: ReactNode;
};

/**
 * PhoneDemo — an ad-style product showcase: a device on one side, a line of
 * marketing copy beside it, both auto-advancing through the real screens like a
 * landing-page reel. The screen aspect matches the source screenshots (≈9/18)
 * so nothing is cropped. The bezel uses the twilight --paper and the glow +
 * step accent pick up the page's themed --accent, so the demo reads as the app.
 * It always auto-advances; hover/focus pauses; tapping the phone zooms; screen
 * 0 is always painted. Under prefers-reduced-motion the global CSS rule reduces
 * the crossfade to an instant swap, so it still cycles without animating motion.
 * The grid auto-mirrors in RTL — phone moves to the reading-start side.
 */
export function PhoneDemo({
  screens,
  interval = 3800,
}: {
  screens: Screen[];
  interval?: number;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (paused || zoomed || screens.length < 2) return;
    const t = setInterval(
      () => setActive((i) => (i + 1) % screens.length),
      interval
    );
    return () => clearInterval(t);
  }, [paused, zoomed, screens.length, interval]);

  const cur = screens[active];

  return (
    <figure
      className="my-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="grid items-center gap-9 lg:grid-cols-[248px_1fr] lg:gap-12">
        {/* device */}
        <div className="relative mx-auto w-full max-w-[248px]">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] opacity-25 blur-3xl"
          />
          <button
            type="button"
            onClick={() => setZoomed(true)}
            aria-label="Zoom current screen"
            className="focus-ring relative block aspect-[9/18] w-full rounded-[2.2rem] border-[3px] border-[var(--border-strong)] bg-[var(--paper)] p-1.5 shadow-soft-lg"
          >
            <span
              aria-hidden
              className="absolute left-1/2 top-[6px] z-20 h-4 w-20 -translate-x-1/2 rounded-full bg-[var(--paper)]"
            />
            <span className="relative block h-full w-full overflow-hidden rounded-[1.7rem]">
              {screens.map((s, i) => (
                <Image
                  key={s.src}
                  src={withBase(s.src)}
                  alt={s.alt}
                  fill
                  sizes="248px"
                  priority={i === 0}
                  className={`object-cover object-top transition-opacity duration-700 ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </span>
          </button>
        </div>

        {/* copy — changes with the screen */}
        <div className="text-start">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-start">
            <span dir="ltr" className="inline-block tabular-nums">
              <span className="text-[var(--accent)]">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="text-[var(--ink-faint)]">
                {" "}
                / {String(screens.length).padStart(2, "0")}
              </span>
            </span>
          </p>
          <div key={active} style={{ animation: "cs-fade 0.5s ease both" }}>
            <h3 className="font-display mt-3 text-2xl font-medium leading-tight text-[var(--ink)] sm:text-[1.75rem]">
              <T en={cur.title} ar={cur.titleAr} />
            </h3>
            <p className="mt-3 max-w-md text-[1.0625rem] leading-relaxed text-[var(--ink-muted)]">
              <T en={cur.blurb} ar={cur.blurbAr} />
            </p>
          </div>
          <div className="mt-7 flex items-center gap-2">
            {screens.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show screen ${i + 1}`}
                aria-current={i === active}
                className={`h-2 rounded-full transition-all ${
                  i === active
                    ? "w-7 bg-[var(--accent)]"
                    : "w-2 bg-[var(--border-strong)] hover:bg-[var(--accent)]/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <Modal
        open={zoomed}
        onClose={() => setZoomed(false)}
        label={cur.alt}
        placement="center"
        panelClassName="relative h-[86vh] w-[90vw] max-w-sm"
      >
        <Image
          src={withBase(cur.src)}
          alt={cur.alt}
          fill
          sizes="90vh"
          className="rounded-2xl object-contain"
        />
        <button
          type="button"
          onClick={() => setZoomed(false)}
          aria-label="Close image"
          className="focus-ring absolute -top-1 end-0 grid h-10 w-10 -translate-y-full place-items-center rounded-full border border-[var(--border-strong)] bg-[var(--glass)] text-[var(--ink)] backdrop-blur transition hover:border-[var(--accent)]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </Modal>
    </figure>
  );
}
