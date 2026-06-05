"use client";

import { useState } from "react";
import Link from "next/link";
import { decisionLog } from "@/lib/scenes-content";
import { SceneBackground } from "@/components/site/SceneBackground";
import { Reveal } from "@/components/site/Reveal";

/**
 * DecisionLog — an interactive record of real engineering/design decisions.
 *
 * Each row is a "Why …?" question; opening it reveals the arc the source
 * case-study ADR captures: the default that was rejected, the call made, and
 * the trade-off accepted. Independent toggles (open as many as you like).
 * Panels are clipped with CSS grid-rows, never opacity-hidden, so content is
 * always present for assistive tech and on bfcache restore.
 */
export function DecisionLog() {
  const { eyebrow, heading, intro, decisions } = decisionLog;
  // First decision open by default; the rest collapsed.
  const [open, setOpen] = useState<Set<string>>(new Set([decisions[0].id]));

  function toggle(id: string) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <section id="decisions" className="relative isolate scroll-mt-16 overflow-hidden">
      <SceneBackground src="/scenes/work.png" position="center 30%" scrim={0.18} />
      <div aria-hidden className="veil-v absolute inset-0 -z-10" />

      <div className="mx-auto max-w-3xl px-5 py-24 lg:px-8 lg:py-28">
        <Reveal>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--accent)]">
            {eyebrow}
          </span>
          <h2 className="font-display mt-4 text-[2rem] font-medium leading-[1.1] tracking-tight text-[var(--ink)] lg:text-[2.75rem]">
            {heading}
          </h2>
          <p className="mt-5 text-lg leading-[1.7] text-[var(--ink-muted)]">
            {intro}
          </p>
        </Reveal>

        <Reveal>
          <ul className="mt-12 space-y-3">
            {decisions.map((d) => {
              const isOpen = open.has(d.id);
              return (
                <li
                  key={d.id}
                  className={`panel overflow-hidden rounded-2xl transition ${
                    isOpen ? "border-[var(--accent)]" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(d.id)}
                    aria-expanded={isOpen}
                    aria-controls={`decision-${d.id}`}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left lg:px-6"
                  >
                    <span className="shrink-0 rounded-full border border-[var(--border-strong)] px-2.5 py-1 font-mono text-[0.56rem] uppercase tracking-[0.16em] text-[var(--accent-deep)]">
                      {d.tag}
                    </span>
                    <span className="font-display flex-1 text-[1.02rem] font-medium leading-snug text-[var(--ink)] lg:text-lg">
                      {d.question}
                    </span>
                    <span
                      aria-hidden
                      className={`shrink-0 text-xl leading-none text-[var(--accent)] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    id={`decision-${d.id}`}
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-4 px-5 pb-6 pt-1 lg:px-6">
                        <Reasoning label="The easy path" tone="muted" text={d.easy} />
                        <Reasoning label="What I chose" tone="accent" text={d.chose} />
                        <Reasoning label="The trade-off" tone="muted" text={d.tradeoff} />

                        <Link
                          href={d.href}
                          className="group inline-flex items-center gap-2 pt-1 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-[var(--accent-deep)]"
                        >
                          See it in {d.project}
                          <span aria-hidden className="transition group-hover:translate-x-1">
                            →
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/** One labelled reasoning block inside an open decision. */
function Reasoning({
  label,
  text,
  tone,
}: {
  label: string;
  text: string;
  tone: "muted" | "accent";
}) {
  return (
    <div
      className={`border-l-2 pl-4 ${
        tone === "accent" ? "border-[var(--accent)]" : "border-[var(--border-strong)]"
      }`}
    >
      <span className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-[var(--ink-faint)]">
        {label}
      </span>
      <p
        className={`mt-1 text-[0.95rem] leading-relaxed ${
          tone === "accent" ? "text-[var(--ink)]" : "text-[var(--ink-muted)]"
        }`}
      >
        {text}
      </p>
    </div>
  );
}
