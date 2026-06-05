import type { ReactNode } from "react";

type Props = {
  title: string;
  caption?: string;
  children: ReactNode;
};

/* Pitch/Notion light-themed architecture diagram frame */
export function ArchitectureDiagram({ title, caption, children }: Props) {
  return (
    <figure className="my-10 overflow-hidden rounded-md border border-[var(--border)] bg-[var(--surface)]">
      <header className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface-2)] px-4 py-2.5">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--accent-deep)]">
          ▦ Architecture · {title}
        </p>
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
          SVG
        </p>
      </header>
      <div className="overflow-x-auto p-6">{children}</div>
      {caption && (
        <figcaption className="border-t border-[var(--border)] bg-[var(--surface-2)] px-4 py-2 font-mono text-[0.7rem] text-[var(--ink-muted)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* Color tokens — Salmverse pastel theme */
const colors = {
  primary: "#3f3a5a",      // ink (deep plum)
  secondary: "#6a6488",    // ink-muted
  faint: "#9a93b5",        // ink-faint
  accent: "#cf7a99",       // accent (rose)
  accentDeep: "#b4628a",   // accent-deep
  accentSoft: "#f7e4ea",   // accent-soft
  surface: "#ffffff",
  border: "#e7e0f0",
};

const FONT_SANS = "Inter, system-ui, sans-serif";
const FONT_MONO = "JetBrains Mono, monospace";

/* --- Project-specific diagrams --- */

export function BloomBellyDiagram() {
  return (
    <ArchitectureDiagram
      title="BloomBelly system topology"
      caption="Flutter client → Flask orchestrator → 3 AI models, auth-gated by Supabase."
    >
      <svg
        viewBox="0 0 720 320"
        className="mx-auto h-auto w-full max-w-[680px]"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="BloomBelly architecture diagram"
      >
        <defs>
          <marker
            id="arrow-b"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 z" fill={colors.secondary} />
          </marker>
        </defs>

        {/* Client */}
        <g>
          <rect x="20" y="120" width="140" height="80" rx="6" fill={colors.surface} stroke={colors.accent} strokeWidth="1.5" />
          <text x="90" y="148" textAnchor="middle" fontFamily={FONT_MONO} fontSize="10" fill={colors.accent}>CLIENT</text>
          <text x="90" y="170" textAnchor="middle" fontFamily={FONT_SANS} fontSize="15" fontWeight="500" fill={colors.primary}>Flutter App</text>
          <text x="90" y="188" textAnchor="middle" fontFamily={FONT_MONO} fontSize="9" fill={colors.secondary}>iOS · Android · RTL</text>
        </g>

        {/* Orchestrator */}
        <g>
          <rect x="240" y="120" width="170" height="80" rx="6" fill={colors.surface} stroke={colors.primary} strokeWidth="1.5" />
          <text x="325" y="148" textAnchor="middle" fontFamily={FONT_MONO} fontSize="10" fill={colors.primary}>ORCHESTRATOR</text>
          <text x="325" y="170" textAnchor="middle" fontFamily={FONT_SANS} fontSize="15" fontWeight="500" fill={colors.primary}>Python · Flask</text>
          <text x="325" y="188" textAnchor="middle" fontFamily={FONT_MONO} fontSize="9" fill={colors.secondary}>intent → routing</text>
        </g>

        {/* Three AI models */}
        <g>
          <rect x="490" y="20" width="200" height="60" rx="6" fill={colors.accentSoft} stroke={colors.accentDeep} strokeWidth="1.5" />
          <text x="590" y="42" textAnchor="middle" fontFamily={FONT_MONO} fontSize="10" fill={colors.accentDeep}>VISION</text>
          <text x="590" y="62" textAnchor="middle" fontFamily={FONT_SANS} fontSize="14" fontWeight="500" fill={colors.primary}>Google Gemini</text>

          <rect x="490" y="125" width="200" height="70" rx="6" fill={colors.accentSoft} stroke={colors.accentDeep} strokeWidth="1.5" />
          <text x="590" y="148" textAnchor="middle" fontFamily={FONT_MONO} fontSize="10" fill={colors.accentDeep}>Q&amp;A · ARABIC</text>
          <text x="590" y="168" textAnchor="middle" fontFamily={FONT_SANS} fontSize="14" fontWeight="500" fill={colors.primary}>LoRA Transformer</text>
          <text x="590" y="184" textAnchor="middle" fontFamily={FONT_MONO} fontSize="9" fill={colors.secondary}>calibrated refusals</text>

          <rect x="490" y="230" width="200" height="60" rx="6" fill={colors.accentSoft} stroke={colors.accentDeep} strokeWidth="1.5" />
          <text x="590" y="252" textAnchor="middle" fontFamily={FONT_MONO} fontSize="10" fill={colors.accentDeep}>NUTRITION</text>
          <text x="590" y="272" textAnchor="middle" fontFamily={FONT_SANS} fontSize="14" fontWeight="500" fill={colors.primary}>Random Forest</text>
        </g>

        {/* Data layer */}
        <g>
          <rect x="240" y="240" width="170" height="60" rx="6" fill={colors.surface} stroke={colors.primary} strokeWidth="1.5" />
          <text x="325" y="262" textAnchor="middle" fontFamily={FONT_MONO} fontSize="10" fill={colors.primary}>DATA · AUTH</text>
          <text x="325" y="282" textAnchor="middle" fontFamily={FONT_SANS} fontSize="14" fontWeight="500" fill={colors.primary}>Supabase · Postgres</text>
        </g>

        {/* Arrows */}
        <line x1="160" y1="160" x2="240" y2="160" stroke={colors.secondary} strokeWidth="1.2" markerEnd="url(#arrow-b)" />
        <line x1="410" y1="140" x2="490" y2="50" stroke={colors.secondary} strokeWidth="1.2" markerEnd="url(#arrow-b)" />
        <line x1="410" y1="160" x2="490" y2="160" stroke={colors.secondary} strokeWidth="1.2" markerEnd="url(#arrow-b)" />
        <line x1="410" y1="180" x2="490" y2="260" stroke={colors.secondary} strokeWidth="1.2" markerEnd="url(#arrow-b)" />
        <line x1="325" y1="200" x2="325" y2="240" stroke={colors.faint} strokeWidth="1.2" strokeDasharray="3 3" markerEnd="url(#arrow-b)" />
        <line x1="90" y1="200" x2="240" y2="260" stroke={colors.faint} strokeWidth="1.2" strokeDasharray="3 3" markerEnd="url(#arrow-b)" />
      </svg>
    </ArchitectureDiagram>
  );
}

export function CareConnectDiagram() {
  return (
    <ArchitectureDiagram
      title="CareConnect — three apps, one backend"
      caption="Single Postgres + Supabase RLS enforces role boundaries. Apps cannot drift."
    >
      <svg viewBox="0 0 720 320" className="mx-auto h-auto w-full max-w-[680px]" xmlns="http://www.w3.org/2000/svg" aria-label="CareConnect architecture diagram">
        <defs>
          <marker id="arrow-c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill={colors.secondary} />
          </marker>
        </defs>

        {[
          { x: 40, label: "MOTHER APP", desc: "Discover · Book · Pay" },
          { x: 270, label: "BABYSITTER APP", desc: "Profile · Schedule" },
          { x: 500, label: "ADMIN APP", desc: "Moderate · Audit" },
        ].map((app) => (
          <g key={app.label}>
            <rect x={app.x} y={30} width={180} height={90} rx={6} fill={colors.surface} stroke={colors.accent} strokeWidth={1.5} />
            <text x={app.x + 90} y={56} textAnchor="middle" fontFamily={FONT_MONO} fontSize="10" fill={colors.accent}>{app.label}</text>
            <text x={app.x + 90} y={80} textAnchor="middle" fontFamily={FONT_SANS} fontSize="15" fontWeight="500" fill={colors.primary}>Flutter App</text>
            <text x={app.x + 90} y={100} textAnchor="middle" fontFamily={FONT_MONO} fontSize="9" fill={colors.secondary}>{app.desc}</text>
            <line x1={app.x + 90} y1={120} x2={app.x + 90} y2={170} stroke={colors.secondary} strokeWidth="1.2" markerEnd={`url(#arrow-c)`} />
          </g>
        ))}

        <rect x="20" y="180" width="680" height="120" rx="6" fill={colors.surface} stroke={colors.primary} strokeWidth="1.5" />
        <text x="40" y="205" fontFamily={FONT_MONO} fontSize="10" fill={colors.primary}>SHARED BACKEND · POSTGRES + RLS</text>
        <text x="40" y="232" fontFamily={FONT_SANS} fontSize="18" fontWeight="500" fill={colors.primary}>Supabase</text>
        <text x="40" y="256" fontFamily={FONT_MONO} fontSize="11" fill={colors.secondary}>row-level security · role-based access · single source of truth</text>
        <text x="40" y="280" fontFamily={FONT_MONO} fontSize="11" fill={colors.accentDeep}>policy: mother → only active babysitters in radius</text>
      </svg>
    </ArchitectureDiagram>
  );
}

export function SmartExpenseDiagram() {
  return (
    <ArchitectureDiagram
      title="Smart Expense Manager — approval flow"
      caption="Token-secured email approvals · auto-journal on finance sign-off."
    >
      <svg viewBox="0 0 720 280" className="mx-auto h-auto w-full max-w-[680px]" xmlns="http://www.w3.org/2000/svg" aria-label="Smart Expense Manager approval flow">
        <defs>
          <marker id="arrow-s" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill={colors.secondary} />
          </marker>
        </defs>

        {[
          { x: 20, label: "EMPLOYEE", title: "Submit", note: "mobile receipt" },
          { x: 195, label: "MANAGER", title: "Approve", note: "1-click · email" },
          { x: 370, label: "FINANCE", title: "Post", note: "1-click · email" },
          { x: 545, label: "JOURNAL", title: "account.move", note: "auto-generated" },
        ].map((step, i, arr) => (
          <g key={step.label}>
            <rect x={step.x} y={70} width={155} height={100} rx={6} fill={i === 3 ? colors.accentSoft : colors.surface} stroke={i === 3 ? colors.accentDeep : colors.accent} strokeWidth={1.5} />
            <text x={step.x + 77.5} y={94} textAnchor="middle" fontFamily={FONT_MONO} fontSize="10" fill={i === 3 ? colors.accentDeep : colors.accent}>{step.label}</text>
            <text x={step.x + 77.5} y={120} textAnchor="middle" fontFamily={FONT_SANS} fontSize="15" fontWeight="500" fill={colors.primary}>{step.title}</text>
            <text x={step.x + 77.5} y={142} textAnchor="middle" fontFamily={FONT_MONO} fontSize="9" fill={colors.secondary}>{step.note}</text>

            {i < arr.length - 1 && (
              <>
                <line x1={step.x + 155} y1={120} x2={arr[i + 1].x} y2={120} stroke={colors.secondary} strokeWidth="1.2" markerEnd="url(#arrow-s)" />
                <text x={step.x + 165} y={111} fontFamily={FONT_MONO} fontSize="8" fill={colors.primary}>
                  {i === 0 ? "hr.employee" : i === 1 ? "token-secured" : "post"}
                </text>
              </>
            )}
          </g>
        ))}

        <line x1="36" y1="220" x2="700" y2="220" stroke={colors.accent} strokeWidth="1" strokeDasharray="4 3" />
        <text x="360" y="240" textAnchor="middle" fontFamily={FONT_MONO} fontSize="10" fill={colors.accentDeep}>
          ⏱ cron job · QWeb PDF monthly digest emailed to managers
        </text>
      </svg>
    </ArchitectureDiagram>
  );
}
