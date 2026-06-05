"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { heroContent } from "@/lib/scenes-content";
import { Orb } from "@/components/site/Orb";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { CountUp } from "@/components/site/CountUp";

const EASE = [0.22, 1, 0.36, 1] as const;

// Orchestrated entrance: each block rises + fades in sequence on mount.
// Mount-based (not scroll), so it always resolves to visible.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/* ---- inline icons (stroke = currentColor, so they inherit text colour) ---- */
const statIcons: Record<string, React.ReactNode> = {
  projects: (
    <path d="M3 7l9-4 9 4-9 4-9-4zm0 5l9 4 9-4M3 17l9 4 9-4" />
  ),
  years: (
    <>
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M3 9h18M8 2v4M16 2v4" />
    </>
  ),
  domains: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" />,
  fullstack: <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />,
};

const socialIcons: Record<string, React.ReactNode> = {
  github: (
    <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z" />
  ),
  linkedin: (
    <>
      <rect x="2" y="3" width="20" height="18" rx="2" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 014 0v4M11 10v7" />
    </>
  ),
  email: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M3 6l9 7 9-7" />
    </>
  ),
};

export function Hero() {
  const {
    location,
    status,
    eyebrow,
    headlineLead,
    headlineAccent,
    subheading,
    intro,
    stats,
    ctas,
    socials,
    trustedBy,
  } = heroContent;

  const reduced = useReducedMotion();
  // When reduced, the entrance props are no-ops → static, fully visible.
  const parentProps = reduced
    ? {}
    : ({ variants: container, initial: "hidden", animate: "show" } as const);
  const itemProps = reduced ? {} : ({ variants: item } as const);

  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 18 });
  const sy = useSpring(my, { stiffness: 55, damping: 18 });

  const sceneX = useTransform(sx, (v) => v * -12);
  const sceneY = useTransform(sy, (v) => v * -8);
  const orbX = useTransform(sx, (v) => v * 30);
  const orbY = useTransform(sy, (v) => v * 22);

  function onMove(e: React.MouseEvent) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - (r.left + r.width / 2)) / (r.width / 2));
    my.set((e.clientY - (r.top + r.height / 2)) / (r.height / 2));
  }
  function reset() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section
      ref={ref}
      id="top"
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="relative isolate flex min-h-[92vh] flex-col overflow-hidden"
    >
      {/* illustrated scene (parallax) */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ x: sceneX, y: sceneY, scale: 1.08 }}
        aria-hidden
      >
        <Image
          src="/demo/scene-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 55%", opacity: 0.62 }}
        />
        {/* bottom melt into the page background (theme-aware) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 55%, rgba(var(--paper-rgb),0.55) 86%, var(--paper) 100%)",
          }}
        />
      </motion.div>

      {/* left readability veil — token-driven, so it darkens in dark mode and
          lightens in light mode; keeps the text column legible either way */}
      <div aria-hidden className="veil-l absolute inset-0 -z-10" />

      {/* the guide orb, floating top-right over the scene */}
      <motion.div
        style={{ x: orbX, y: orbY }}
        className="pointer-events-none absolute right-[6%] top-[14%] hidden lg:block"
      >
        <Orb size={150} alt="Mozn's guide — a glowing orb" />
        <span
          aria-hidden
          className="absolute -left-8 top-2 h-1.5 w-1.5 rounded-full bg-white"
          style={{ animation: "t-twinkle 3.5s ease-in-out infinite" }}
        />
      </motion.div>

      {/* main hero content */}
      <div className="flex flex-1 items-center">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
          <motion.div className="max-w-3xl" {...parentProps}>
            {/* status pill */}
            <motion.span
              {...itemProps}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--glass)] px-3.5 py-1.5 text-[0.78rem] text-[var(--ink-muted)] backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--success)] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--success)]" />
              </span>
              {status}
            </motion.span>

            {/* eyebrow */}
            <motion.p
              {...itemProps}
              className="mt-7 font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[var(--accent)]"
            >
              {eyebrow}
            </motion.p>

            {/* headline — Clash Display 600, tight */}
            <motion.h1
              {...itemProps}
              className="font-display mt-3 text-[2.5rem] font-semibold leading-[1.0] tracking-[-0.025em] text-[var(--ink)] sm:text-[3.5rem] lg:text-[5.25rem]"
            >
              {headlineLead}{" "}
              <span className="text-gradient">{headlineAccent}</span>
            </motion.h1>

            {/* subheading — Inter 400, 24/160% */}
            <motion.p
              {...itemProps}
              className="mt-6 max-w-[650px] text-xl font-normal leading-[1.6] text-[var(--ink)] sm:text-2xl"
            >
              {subheading}
            </motion.p>

            {/* intro */}
            <motion.p
              {...itemProps}
              className="mt-4 max-w-[650px] text-base leading-[1.7] text-[var(--ink-muted)]"
            >
              {intro}
            </motion.p>

            {/* stats */}
            <motion.dl {...itemProps} className="mt-10 flex flex-wrap gap-x-9 gap-y-6">
              {stats.map((s) => (
                <div key={s.key} className="flex items-start gap-2.5">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0"
                    aria-hidden
                  >
                    {statIcons[s.key]}
                  </svg>
                  <div>
                    <dt className="font-display text-2xl font-semibold leading-none text-[var(--ink)]">
                      <CountUp value={s.value} />
                    </dt>
                    <dd className="mt-1 text-[0.72rem] leading-tight text-[var(--ink-muted)]">
                      {s.label}
                    </dd>
                  </div>
                </div>
              ))}
            </motion.dl>

            {/* CTAs */}
            <motion.div {...itemProps} className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href={ctas.primary.href}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--c-mauve)] to-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-transparent"
              >
                {ctas.primary.label}
                <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href={ctas.secondary.href}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--glass)] px-6 py-3 text-sm font-semibold text-[var(--ink)] backdrop-blur transition hover:border-[var(--accent)] hover:text-[var(--accent-deep)]"
              >
                {ctas.secondary.label}
                <span aria-hidden>↓</span>
              </Link>
            </motion.div>

            {/* socials */}
            <motion.ul {...itemProps} className="mt-8 flex flex-wrap items-center gap-6">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.icon === "email" ? undefined : "_blank"}
                    rel={s.icon === "email" ? undefined : "noopener noreferrer"}
                    className="group inline-flex items-center gap-2 text-sm text-[var(--ink-muted)] transition hover:text-[var(--ink)]"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill={s.icon === "github" ? "currentColor" : "none"}
                      stroke={s.icon === "github" ? "none" : "currentColor"}
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      {socialIcons[s.icon]}
                    </svg>
                    {s.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>

      {/* trusted-by bar */}
      <div className="mx-auto w-full max-w-6xl px-5 pb-10 lg:px-8">
        <div className="panel flex flex-wrap items-center gap-x-8 gap-y-3 rounded-2xl px-6 py-4">
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
            {trustedBy.label}
          </span>
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-2">
            {trustedBy.items.map((item) => (
              <li
                key={item}
                className="text-sm font-medium text-[var(--ink-muted)]"
              >
                {item}
              </li>
            ))}
          </ul>
          <span className="ml-auto font-mono text-[0.62rem] text-[var(--ink-faint)]">
            {location}
          </span>
        </div>
      </div>
    </section>
  );
}
