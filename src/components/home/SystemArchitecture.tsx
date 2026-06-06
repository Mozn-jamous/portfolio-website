"use client";

import { useState } from "react";
import Link from "next/link";
import { architectureStack, type ArchLayer } from "@/lib/scenes-content";
import { SceneBackground } from "@/components/site/SceneBackground";
import { Reveal } from "@/components/site/Reveal";

/**
 * SystemArchitecture — an interactive, full-stack viewer.
 *
 * The five layers (Frontend → Backend → Data → AI → Systems) are the real
 * stack behind the shipped products; selecting one reveals what lives in it
 * and the project that proves it. Master-detail on desktop, accordion on
 * mobile. Content is conditionally clipped (CSS grid-rows), never hidden by
 * opacity, so nothing depends on JS/observers to be readable.
 */
export function SystemArchitecture() {
  const { eyebrow, heading, intro, layers } = architectureStack;
  const [activeId, setActiveId] = useState(layers[0].id);
  const activeLayer = layers.find((l) => l.id === activeId) ?? layers[0];

  return (
    <section
      id="architecture"
      className="relative isolate scroll-mt-16 overflow-hidden"
    >
      <SceneBackground src="/scenes/trajectory.png" position="center 40%" scrim={0} />
      <div aria-hidden className="veil-v absolute inset-0 -z-10" />

      <div className="mx-auto max-w-5xl px-5 py-24 lg:px-8 lg:py-28">
        <Reveal>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--accent)]">
            {eyebrow}
          </span>
          <h2 className="font-display mt-4 max-w-3xl text-[2rem] font-medium leading-[1.1] tracking-tight text-[var(--ink)] lg:text-[2.75rem]">
            {heading}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-[1.7] text-[var(--ink-muted)]">
            {intro}
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
            {/* Left — the layer stack (data flows top → down) */}
            <ol className="relative">
              {layers.map((layer, i) => {
                const selected = layer.id === activeId;
                return (
                  <li key={layer.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(layer.id)}
                      aria-expanded={selected}
                      aria-controls={`layer-panel-${layer.id}`}
                      className={`group flex w-full items-center gap-4 rounded-2xl border px-4 py-4 text-left transition lg:px-5 ${
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
                          <span className="font-display text-lg font-medium text-[var(--ink)]">
                            {layer.label}
                          </span>
                          <span className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-[var(--accent-deep)]">
                            {layer.tech}
                          </span>
                        </span>
                        <span className="mt-1 block text-[0.86rem] leading-snug text-[var(--ink-muted)]">
                          {layer.summary}
                        </span>
                      </span>
                      <span
                        aria-hidden
                        className={`shrink-0 text-[var(--accent)] transition ${
                          selected ? "translate-x-0.5 opacity-100" : "opacity-40 group-hover:opacity-70"
                        }`}
                      >
                        →
                      </span>
                    </button>

                    {/* Mobile inline detail (desktop uses the right panel) */}
                    <div
                      id={`layer-panel-${layer.id}`}
                      className="grid transition-[grid-template-rows] duration-300 ease-out lg:hidden"
                      style={{ gridTemplateRows: selected ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <div className="px-1 pb-2 pt-3">
                          <LayerDetail layer={layer} />
                        </div>
                      </div>
                    </div>

                    {/* connector — a glow travels down it, like data flowing */}
                    {i < layers.length - 1 && (
                      <div
                        aria-hidden
                        className="flex h-7 items-center justify-center text-[var(--ink-faint)] lg:h-8"
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

            {/* Right — sticky detail panel (desktop) */}
            <div className="hidden lg:block">
              <div className="panel sticky top-24 rounded-3xl p-7" aria-live="polite">
                <LayerDetail layer={activeLayer} showIndex />
              </div>
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
            {layer.label}
          </span>
          <h3 className="font-display mt-1 text-xl font-medium text-[var(--ink)] lg:text-2xl">
            {layer.tech}
          </h3>
        </div>
        {showIndex && (
          <span className="rounded-full border border-[var(--border-strong)] px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-[var(--accent-deep)]">
            Layer
          </span>
        )}
      </div>

      <ul className="mt-5 space-y-2.5">
        {layer.items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-[0.92rem] leading-relaxed text-[var(--ink-muted)]"
          >
            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Link
        href={layer.example.href}
        className="group mt-6 block rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-4 transition hover:border-[var(--accent)]"
      >
        <span className="flex items-center justify-between">
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
            In production
          </span>
          <span aria-hidden className="text-[var(--accent)] transition group-hover:translate-x-0.5">
            →
          </span>
        </span>
        <span className="mt-1.5 block font-display text-base font-medium text-[var(--ink)] transition group-hover:text-[var(--accent-deep)]">
          {layer.example.project}
        </span>
        <span className="mt-1 block text-[0.84rem] leading-snug text-[var(--ink-muted)]">
          {layer.example.note}
        </span>
      </Link>
    </div>
  );
}
