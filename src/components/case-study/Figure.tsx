"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { Modal } from "@/components/site/Modal";
import { withBase } from "@/lib/base-path";
import { T } from "@/components/i18n/T";

/**
 * Figure — a captioned visual slot.
 *
 * Pass `src` to render a real screenshot / Figma export (drop the file in
 * /public and reference it, e.g. src="/work/bloombelly/flows.webp"). The image
 * is served through next/image (AVIF/WebP, lazy) and becomes click-to-zoom in
 * an accessible lightbox. With no `src` it renders a clearly-labeled dashed
 * placeholder so the layout reads as "visual goes here" until the asset lands.
 */
export function Figure({
  src,
  alt,
  caption,
  label = "Visual",
  aspect = "16 / 10",
}: {
  src?: string;
  alt?: string;
  caption?: ReactNode;
  label?: string;
  /** CSS aspect-ratio for the inline frame, e.g. "16 / 10" or "9 / 16". */
  aspect?: string;
}) {
  const [zoomed, setZoomed] = useState(false);
  const altText = alt ?? (typeof caption === "string" ? caption : label);

  return (
    <figure className="my-8">
      {src ? (
        <button
          type="button"
          onClick={() => setZoomed(true)}
          aria-label={`Expand image: ${altText}`}
          className="group relative block w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-2)]/40 shadow-soft focus-ring"
          style={{ aspectRatio: aspect }}
        >
          <Image
            src={withBase(src)}
            alt={altText}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-contain"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-2 end-2 rounded-md bg-black/55 px-2 py-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-white opacity-0 backdrop-blur transition group-hover:opacity-100"
          >
            <T en="Click to zoom" ar="اضغط للتكبير" />
          </span>
        </button>
      ) : (
        <div className="flex min-h-[220px] items-center justify-center rounded-2xl border border-dashed border-[var(--border-strong)] bg-[var(--surface-2)]/50">
          <div className="text-center">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
              {label}
            </p>
            <p className="mt-1.5 text-sm text-[var(--ink-muted)]">
              <T en="Visual placeholder · add export" ar="صورة مؤقتة · أضف التصدير" />
            </p>
          </div>
        </div>
      )}

      {caption && (
        <figcaption className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
          {caption}
        </figcaption>
      )}

      {src && (
        <Modal
          open={zoomed}
          onClose={() => setZoomed(false)}
          label={altText}
          placement="center"
          panelClassName="relative h-[82vh] w-[92vw] max-w-6xl"
        >
          <Image
            src={withBase(src)}
            alt={altText}
            fill
            sizes="92vw"
            className="object-contain"
          />
          <button
            type="button"
            onClick={() => setZoomed(false)}
            aria-label="Close image"
            className="focus-ring absolute -top-1 end-0 grid h-10 w-10 -translate-y-full place-items-center rounded-full border border-[var(--border-strong)] bg-[var(--glass)] text-[var(--ink)] backdrop-blur transition hover:border-[var(--accent)] sm:end-0"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </Modal>
      )}
    </figure>
  );
}

/* Back-compat alias — older pages call ScreensPlaceholder. */
export function ScreensPlaceholder({ label = "UI screens" }: { label?: string }) {
  return <Figure label={label} />;
}
