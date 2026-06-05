import Link from "next/link";
import { withBase } from "@/lib/base-path";
import "./demo.css";

export const metadata = {
  title: "Demo — pastel immersive scene",
};

/* deterministic atmosphere (avoids hydration mismatch) */
const STARS = Array.from({ length: 60 }, (_, i) => {
  const x = (i * 97) % 100;
  const y = (i * 53) % 62; // keep stars in the upper sky
  const size = 1 + ((i * 7) % 3);
  const dur = 3 + ((i * 11) % 5);
  const delay = (i % 9) * 0.4;
  return { x, y, size, dur, delay };
});

const DUST = Array.from({ length: 14 }, (_, i) => {
  const x = (i * 67) % 100;
  const y = 30 + ((i * 41) % 60);
  const size = 2 + ((i * 5) % 4);
  const dur = 14 + ((i * 13) % 10);
  const delay = (i % 7) * 1.6;
  return { x, y, size, dur, delay };
});

export default function DemoPage() {
  return (
    <div className="demo-root">
      {/* ---------- top nav ---------- */}
      <nav className="demo-nav">
        <span className="demo-brand demo-mono">aurora</span>
        <div className="demo-nav-links demo-mono">
          <span>Product</span>
          <span>Company</span>
          <span>Latest</span>
          <span>Pricing</span>
          <span>Contact</span>
        </div>
        <button className="demo-nav-cta demo-mono">Sign up</button>
      </nav>

      {/* ============================== HERO ============================== */}
      <header className="demo-hero">
        {/* twinkling stars */}
        <div className="demo-stars" aria-hidden>
          {STARS.map((s, i) => (
            <span
              key={i}
              className="demo-star"
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                width: s.size,
                height: s.size,
                // @ts-expect-error custom props
                "--dur": `${s.dur}s`,
                "--delay": `${s.delay}s`,
              }}
            />
          ))}
          {DUST.map((d, i) => (
            <span
              key={`d${i}`}
              className="demo-dust"
              style={{
                left: `${d.x}%`,
                top: `${d.y}%`,
                width: d.size,
                height: d.size,
                // @ts-expect-error custom props
                "--dur": `${d.dur}s`,
                "--delay": `${d.delay}s`,
              }}
            />
          ))}
        </div>

        {/* illustrated background */}
        <div className="demo-bg" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={withBase("/demo/scene-bg.png")} alt="" />
        </div>

        {/* soft halo behind copy */}
        <div className="demo-scrim" aria-hidden />

        {/* the orb character */}
        <div className="demo-orb-wrap">
          <div className="demo-orb-glow" aria-hidden />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="demo-orb-img" src={withBase("/demo/character.png")} alt="Aurora, a glowing orb mascot" />
        </div>

        {/* copy */}
        <div className="demo-hero-copy">
          <h1 className="demo-title">
            Hello, I&apos;m <span className="accent">Aurora.</span>
          </h1>
          <p className="demo-sub demo-mono">A calmer kind of intelligence.</p>
          <div className="demo-underline" />
        </div>

        <div className="demo-scroll" aria-hidden>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </header>

      {/* ============================== SECTION 2 ============================== */}
      <section className="demo-section">
        {/* orbiting devices */}
        <div className="demo-orbit" aria-hidden>
          <span className="demo-orbit-ring r1" />
          <span className="demo-orbit-ring r2" />

          {/* eslint-disable @next/next/no-img-element */}
          <span className="demo-chip c1">
            <img src={withBase("/demo/chips/monitor.png")} alt="" />
          </span>
          <span className="demo-chip c2">
            <img src={withBase("/demo/chips/graph.png")} alt="" />
          </span>
          <span className="demo-chip c3">
            <img src={withBase("/demo/chips/clock.png")} alt="" />
          </span>
          <span className="demo-chip c4">
            <img src={withBase("/demo/chips/spark.png")} alt="" />
          </span>

          <div className="demo-mini-orb">
            <div className="demo-orb-glow" aria-hidden />
            <img className="demo-orb-img" src={withBase("/demo/character.png")} alt="" />
          </div>
          {/* eslint-enable @next/next/no-img-element */}
        </div>

        {/* copy */}
        <div>
          <p className="demo-eyebrow demo-mono">01 · Why Aurora</p>
          <h2 className="demo-h2">
            Organize and access
            <br />
            what matters, calmly.
          </h2>
          <p className="demo-body">
            Aurora connects to your internal and public sources, runs the
            workflows you care about, and surfaces high-value insight — wrapped
            in a soft, unhurried interface that never shouts.
          </p>
          <div className="demo-dots">
            <span className="demo-dot active demo-mono">1</span>
            <span className="demo-dot demo-mono">2</span>
            <span className="demo-dot demo-mono">3</span>
          </div>
        </div>
      </section>

      {/* back to the real site */}
      <Link href="/" className="demo-exit demo-mono">
        ← back to portfolio
      </Link>
    </div>
  );
}
