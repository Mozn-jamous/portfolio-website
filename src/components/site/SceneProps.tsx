/**
 * SceneProps — decorative pastel set-dressing for sections.
 *
 * Soft planets, a constellation, and a comet trail. All are aria-hidden and
 * meant to be absolutely positioned by the parent (which should be
 * `relative isolate`, with these placed at `-z-10` so content stays above).
 * Pure CSS/SVG, palette-tokened, motion via the global t-* keyframes.
 */

type Hue = "rose" | "blue" | "mauve" | "peach";

const PLANET: Record<Hue, [string, string, string]> = {
  rose: ["#f6dbe6", "#db88a4", "#b4628a"],
  blue: ["#e2edf7", "#a8c3d4", "#738fbd"],
  mauve: ["#efe1ef", "#cc8eb1", "#9b6f9e"],
  peach: ["#ffe9d6", "#ffc89e", "#e89a6b"],
};

export function Planet({
  size = 120,
  hue = "rose",
  ring = false,
  float = true,
  className = "",
}: {
  size?: number;
  hue?: Hue;
  ring?: boolean;
  float?: boolean;
  className?: string;
}) {
  const [hi, mid, low] = PLANET[hue];
  return (
    <div
      aria-hidden
      className={`${float ? "t-float" : ""} ${className}`}
      style={{ width: size, height: size, position: "absolute" }}
    >
      <div
        className="h-full w-full rounded-full"
        style={{
          background: `radial-gradient(circle at 34% 28%, #fff 0%, transparent 22%),
            radial-gradient(circle at 50% 45%, ${hi} 0%, ${mid} 52%, ${low} 100%)`,
          boxShadow: `inset -8px -10px 22px rgba(67,64,94,0.25), 0 14px 40px -10px ${mid}`,
        }}
      />
      {ring && (
        <span
          className="absolute left-1/2 top-1/2 rounded-[50%] border"
          style={{
            width: size * 1.7,
            height: size * 0.5,
            borderColor: `${mid}88`,
            transform: "translate(-50%,-50%) rotate(-24deg)",
          }}
        />
      )}
    </div>
  );
}

export function Constellation({ className = "" }: { className?: string }) {
  // node positions in a 220×150 box
  const nodes = [
    [18, 120],
    [60, 70],
    [110, 96],
    [150, 40],
    [196, 70],
    [120, 20],
  ];
  const links = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [3, 5],
  ];
  return (
    <svg
      aria-hidden
      viewBox="0 0 220 150"
      className={className}
      fill="none"
    >
      {links.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="var(--c-blue)"
          strokeWidth="1"
          strokeOpacity="0.45"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="3"
          fill="var(--c-rose)"
          style={{
            animation: `t-twinkle ${3 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
            transformOrigin: `${x}px ${y}px`,
          }}
        />
      ))}
    </svg>
  );
}

export function CometTrail({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 320 260" className={className} fill="none">
      <path
        d="M12 240 C 90 200, 70 120, 150 100 S 260 70, 300 24"
        stroke="var(--c-mauve)"
        strokeWidth="1.5"
        strokeOpacity="0.5"
        strokeDasharray="4 7"
        strokeLinecap="round"
      />
      <circle cx="300" cy="24" r="6" fill="var(--c-rose)" className="t-pulse" />
      <circle cx="300" cy="24" r="12" fill="var(--c-rose)" fillOpacity="0.18" />
    </svg>
  );
}
