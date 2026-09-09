"use client";

import { useState } from "react";
import Link from "next/link";
import { architectureStack, type ArchLayer } from "@/lib/scenes-content";
import { SceneBackground } from "@/components/site/SceneBackground";
import { Reveal } from "@/components/site/Reveal";
import { T } from "@/components/i18n/T";

/**
 * SystemArchitecture — an interactive, full-stack viewer.
 *
 * The five layers (Frontend → Backend → Data → AI → Systems) are the real
 * stack behind the shipped products; selecting one reveals what lives in it
 * and the project that proves it. Master-detail throughout: a vertical stack
 * beside a sticky panel on desktop, a swipeable tab strip above that same
 * panel on phones. Only the selected layer's contents are ever rendered, so
 * nothing depends on JS/observers to be readable.
 */
export function SystemArchitecture() {
  const { eyebrow, eyebrowAr, heading, headingAr, intro, introAr, layers } =
    architectureStack;
  const [activeId, setActiveId] = useState(layers[0].id);
  const activeLayer = layers.find((l) => l.id === activeId) ?? layers[0];

  return (
    <section
      id="architecture"
      className="relative isolate scroll-mt-16 overflow-hidden"
    >
      <SceneBackground src="/scenes/trajectory.webp" position="center 40%" scrim={0} />
      <div aria-hidden className="veil-v absolute inset-0 -z-10" />

      <div className="mx-auto max-w-5xl px-5 py-10 sm:py-20 lg:px-8 lg:py-28">
        <Reveal>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--accent)]">
            <T en={eyebrow} ar={eyebrowAr} />
          </span>
          <h2 className="font-display mt-4 max-w-3xl text-[1.55rem] font-medium leading-[1.24] tracking-normal sm:leading-[1.12] sm:tracking-tight text-[var(--ink)] sm:text-[2rem] lg:text-[2.75rem]">
            <T en={heading} ar={headingAr} />
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-[1.65] text-[var(--ink-muted)] sm:mt-5 sm:text-lg sm:leading-[1.7]">
            <T en={intro} ar={introAr} />
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
            {/* The layer picker. On desktop it's a vertical stack that reads as
                the stack itself, data flowing top → down through the
                connectors. On phones that shape doesn't fit: five expandable
                rows meant five screens of scroll. So it becomes a swipeable
                tab strip feeding the one detail panel below — same select-a-
                layer interaction, phone-shaped. */}
            <ol
              role="tablist"
              aria-label="Stack layers"
              className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-2.5 overflow-x-auto px-5 pb-1 lg:mx-0 lg:block lg:overflow-visible lg:px-0 lg:pb-0"
            >
              {layers.map((layer, i) => {
                const selected = layer.id === activeId;
                return (
                  <li key={layer.id} className="w-[58vw] max-w-[220px] shrink-0 snap-start lg:w-auto lg:max-w-none">
                    <button
                      type="button"
                      role="tab"
                      onClick={() => setActiveId(layer.id)}
                      aria-selected={selected}
                      aria-controls="layer-panel"
                      className={`group flex h-full w-full items-center gap-3 rounded-2xl border p-3.5 text-start transition lg:gap-4 lg:px-5 lg:py-4 ${
                        selected
                          ? "border-[var(--accent)] bg-[var(--accent-soft)] shadow-soft"
                          : "border-[var(--border)] bg-[var(--glass)] hover:border-[var(--border-strong)]"
                      }`}
                    >
                      <span
                        className={`font-mono text-[0.7rem] tabular-nums tracking-[0.1em] ${
                          selected ? "text-[var(--accent-deep)]" : "text-[var(--ink-faint)]"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-baseline gap-x-3">
                          <span className="font-display text-[0.95rem] font-medium leading-snug text-[var(--ink)] lg:text-lg">
                            <T en={layer.label} ar={layer.labelAr ?? layer.label} />
                          </span>
                          <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[var(--accent-deep)] lg:text-[0.66rem]">
                            {layer.tech}
                          </span>
                        </span>
                        {/* the one-line role only earns its space in the wide
                            vertical rows; on a tab the label + tech say it */}
                        <span className="mt-1 hidden text-[0.86rem] leading-snug text-[var(--ink-muted)] lg:block">
                          <T en={layer.summary} ar={layer.summaryAr ?? layer.summary} />
                        </span>
                      </span>
                      <span
                        aria-hidden
                        className={`hidden shrink-0 text-[var(--accent)] transition rtl:-scale-x-100 lg:block ${
                          selected ? "translate-x-0.5 opacity-100" : "opacity-40 group-hover:opacity-70"
                        }`}
                      >
                        →
                      </span>
                    </button>

                    {/* connector — a glow travels down it, like data flowing.
                        Only meaningful in the vertical desktop stack. */}
                    {i < layers.length - 1 && (
                      <div
                        aria-hidden
                        className="hidden h-8 items-center justify-center text-[var(--ink-faint)] lg:flex"
                      >
                        <span
                          className="t-flow text-sm leading-none"
                          style={{ animationDelay: `${i * 0.45}s` }}
                        >
                          ↓
                        </span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>

            {/* Detail panel — below the strip on phones, sticky beside the
                stack on desktop. One panel either way, so only the selected
                layer's contents are ever in the page. */}
            <div
              id="layer-panel"
              role="tabpanel"
              aria-live="polite"
              className="panel rounded-2xl p-4 sm:p-6 lg:sticky lg:top-24 lg:self-start lg:rounded-3xl lg:p-7"
            >
              <LayerDetail layer={activeLayer} showIndex />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** The expanded contents of one layer — what's in it + the proof. */
function LayerDetail({
  layer,
  showIndex = false,
}: {
  layer: ArchLayer;
  showIndex?: boolean;
}) {
  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-[var(--ink-faint)]">
            <T en={layer.label} ar={layer.labelAr ?? layer.label} />
          </span>
          <h3 className="font-display mt-1 text-lg font-medium text-[var(--ink)] sm:text-xl lg:text-2xl">
            {layer.tech}
          </h3>
        </div>
        {showIndex && (
          <span className="rounded-full border border-[var(--border-strong)] px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-[var(--accent-deep)]">
            <T en="Layer" ar="طبقة" />
          </span>
        )}
      </div>

      <ul className="mt-4 space-y-2 sm:mt-5 sm:space-y-2.5">
        {layer.items.map((item, i) => (
          <li
            key={item}
            className="flex gap-2.5 text-[0.86rem] leading-[1.55] text-[var(--ink-muted)] sm:gap-3 sm:text-[0.92rem] sm:leading-relaxed"
          >
            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
            <span>
              <T en={item} ar={layer.itemsAr?.[i] ?? item} />
            </span>
          </li>
        ))}
      </ul>

      <Link
        href={layer.example.href}
        className="group mt-5 block rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-3.5 transition hover:border-[var(--accent)] sm:mt-6 sm:p-4"
      >
        <span className="flex items-center justify-between">
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
            <T en="In production" ar="في الإنتاج" />
          </span>
          <span aria-hidden className="text-[var(--accent)] transition group-hover:translate-x-0.5 rtl:-scale-x-100">
            →
          </span>
        </span>
        <span className="mt-1.5 block font-display text-base font-medium text-[var(--ink)] transition group-hover:text-[var(--accent-deep)]">
          {layer.example.project}
        </span>
        <span className="mt-1 block text-[0.84rem] leading-snug text-[var(--ink-muted)]">
          <T en={layer.example.note} ar={layer.example.noteAr ?? layer.example.note} />
        </span>
      </Link>
    </div>
  );
}
