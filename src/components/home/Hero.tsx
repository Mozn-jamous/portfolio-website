"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { heroContent } from "@/lib/scenes-content";
import { Orb } from "@/components/site/Orb";

export function Hero() {
  const { location, status, name, taglineLead, taglineTrail, currentRole, socials, ctas } =
    heroContent;

  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 18 });
  const sy = useSpring(my, { stiffness: 55, damping: 18 });

  // depth layers — further-back moves less
  const sceneX = useTransform(sx, (v) => v * -12);
  const sceneY = useTransform(sy, (v) => v * -8);
  const planetX = useTransform(sx, (v) => v * 34);
  const planetY = useTransform(sy, (v) => v * 24);
  const orbX = useTransform(sx, (v) => v * -20);
  const orbY = useTransform(sy, (v) => v * -14);
  const fgX = useTransform(sx, (v) => v * -28);

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
      className="relative isolate flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-5 py-24 text-center lg:px-8"
    >
      {/* illustrated scene (parallax) */}
      <motion.div className="absolute inset-0 -z-10" style={{ x: sceneX, y: sceneY, scale: 1.08 }} aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/demo/scene-bg.png"
          alt=""
          className="h-full w-full object-cover"
          style={{ objectPosition: "center 58%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(63,58,90,0.22) 0%, transparent 24%, transparent 56%, rgba(241,236,247,0.5) 88%, #f1ecf4 100%)",
          }}
        />
      </motion.div>

      {/* foreground cloud strip (parallax, closer) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img
        src="/scenes/hero-foreground.png"
        alt=""
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 w-full"
        style={{ x: fgX }}
      />

      {/* floating ringed-planet accent */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img
        src="/props/planet-ring.png"
        alt=""
        aria-hidden
        className="t-float pointer-events-none absolute left-[8%] top-[16%] hidden w-[120px] lg:block"
        style={{ x: planetX, y: planetY }}
      />

      {/* the guide orb — first appearance */}
      <motion.div style={{ x: orbX, y: orbY }} className="mb-8">
        <Orb size={168} alt="Mozn's guide — a glowing orb" />
      </motion.div>

      {/* copy integrated on the scene — soft focus scrim, no hard box */}
      <div className="relative max-w-3xl">
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 -z-10 h-[160%] w-[150%] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(63,58,90,0.5) 0%, rgba(63,58,90,0.16) 46%, transparent 72%)",
            filter: "blur(22px)",
          }}
        />
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-white/85">
          {location} · {status}
        </p>

        <h1
          className="font-display mt-5 text-6xl font-semibold leading-[0.98] tracking-tight text-white sm:text-7xl lg:text-[5.5rem]"
          style={{ textShadow: "0 4px 36px rgba(63,58,90,0.5)" }}
        >
          {name}
        </h1>

        <p
          className="mx-auto mt-6 max-w-xl text-lg font-light leading-snug text-white sm:text-2xl"
          style={{ textShadow: "0 2px 20px rgba(63,58,90,0.6)" }}
        >
          {taglineLead}{" "}
          <span className="font-display italic text-[var(--c-pink)]">{taglineTrail}</span>
        </p>

        <p
          className="mx-auto mt-4 max-w-xl text-sm text-white/85"
          style={{ textShadow: "0 1px 14px rgba(63,58,90,0.6)" }}
        >
          {currentRole}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={ctas.primary.href}
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-[var(--accent-deep)] focus:outline-none focus:ring-2 focus:ring-white/70"
          >
            {ctas.primary.label}
            <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
          </Link>
          <Link
            href={ctas.secondary.href}
            className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/25"
          >
            {ctas.secondary.label}
          </Link>

          <span aria-hidden className="mx-1 hidden h-6 w-px bg-white/40 sm:block" />
          <ul className="flex flex-wrap items-center justify-center gap-4">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/90 underline-offset-4 transition hover:text-white hover:underline"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#bio"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full border border-white/50 bg-white/10 text-white/90 backdrop-blur-sm transition hover:bg-white/20"
        style={{ animation: "t-bob 2.2s ease-in-out infinite" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
