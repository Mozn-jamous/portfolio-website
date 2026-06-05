/**
 * SceneAtmosphere — fixed, full-page ambient layer behind all content.
 *
 * Builds the "calm pastel cosmos" the sections float over: a warm sun glow,
 * drifting clouds, twinkling stars, soft bokeh light-orbs, occasional
 * shooting stars, and a fine film grain that warms up the flat gradient.
 * Mounted once in the root layout at -z-10. Purely decorative; all motion
 * is CSS and respects prefers-reduced-motion.
 */

// deterministic placement (avoids hydration mismatch)
const STARS = Array.from({ length: 56 }, (_, i) => ({
  x: (i * 97) % 100,
  y: (i * 59) % 100,
  size: 1 + ((i * 7) % 3),
  dur: 3 + ((i * 11) % 5),
  delay: (i % 9) * 0.5,
}));

const BOKEH = [
  { x: "12%", y: "20%", s: 320, c: "rgba(168,195,212,0.40)", d: 22 },
  { x: "82%", y: "12%", s: 300, c: "rgba(255,214,178,0.40)", d: 26 },
  { x: "72%", y: "78%", s: 360, c: "rgba(219,136,164,0.34)", d: 30 },
  { x: "18%", y: "72%", s: 280, c: "rgba(204,142,177,0.30)", d: 24 },
];

const CLOUDS = [
  { top: "14%", w: 300, h: 96, o: 0.55, dur: 90, delay: 0 },
  { top: "30%", w: 220, h: 72, o: 0.4, dur: 120, delay: 18 },
  { top: "58%", w: 360, h: 110, o: 0.35, dur: 105, delay: 40 },
  { top: "78%", w: 240, h: 80, o: 0.45, dur: 135, delay: 8 },
];

const SHOOTERS = [
  { top: "12%", left: "8%", dur: 11, delay: 4 },
  { top: "22%", left: "62%", dur: 14, delay: 9 },
];

// fine film grain (warms the flat gradient, kills the "cold digital" feel)
const GRAIN =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export function SceneAtmosphere() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* warm sun core, upper right */}
      <span
        className="absolute rounded-full"
        style={{
          right: "-6%",
          top: "-10%",
          width: 460,
          height: 460,
          background:
            "radial-gradient(circle, rgba(255,233,205,0.75) 0%, rgba(255,214,178,0.35) 38%, transparent 68%)",
          filter: "blur(6px)",
        }}
      />

      {/* drifting clouds */}
      {CLOUDS.map((c, i) => (
        <span
          key={`c${i}`}
          className="absolute rounded-full"
          style={{
            top: c.top,
            left: 0,
            width: c.w,
            height: c.h,
            opacity: c.o,
            background:
              "radial-gradient(closest-side, rgba(255,255,255,0.9), rgba(255,255,255,0.2) 70%, transparent)",
            filter: "blur(14px)",
            animation: `t-cloud ${c.dur}s linear infinite`,
            animationDelay: `-${c.delay}s`,
          }}
        />
      ))}

      {/* soft bokeh light-orbs */}
      {BOKEH.map((b, i) => (
        <span
          key={`b${i}`}
          className="absolute rounded-full"
          style={{
            left: b.x,
            top: b.y,
            width: b.s,
            height: b.s,
            background: `radial-gradient(circle, ${b.c}, transparent 70%)`,
            filter: "blur(8px)",
            animation: `t-float ${b.d}s ease-in-out infinite`,
            animationDelay: `${i * 1.5}s`,
          }}
        />
      ))}

      {/* twinkling stars */}
      {STARS.map((s, i) => (
        <span
          key={`s${i}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animation: `t-twinkle ${s.dur}s ease-in-out infinite`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      {/* occasional shooting stars */}
      {SHOOTERS.map((sh, i) => (
        <span
          key={`sh${i}`}
          className="absolute"
          style={{
            top: sh.top,
            left: sh.left,
            width: 120,
            height: 2,
            borderRadius: 9999,
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 100%)",
            boxShadow: "0 0 8px 1px rgba(255,255,255,0.7)",
            animation: `t-shoot ${sh.dur}s ease-in infinite`,
            animationDelay: `${sh.delay}s`,
          }}
        />
      ))}

      {/* film grain */}
      <span
        className="absolute inset-0"
        style={{
          backgroundImage: `url("${GRAIN}")`,
          backgroundSize: "160px 160px",
          opacity: 0.045,
          mixBlendMode: "soft-light",
        }}
      />
    </div>
  );
}
