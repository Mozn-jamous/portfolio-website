import type { Metadata } from "next";
import PrintTrigger from "./PrintTrigger";
import { aboutContent } from "@/lib/scenes-content";
import { Orb } from "@/components/site/Orb";

export const metadata: Metadata = {
  title: "CV — Mozn Jamous",
  description:
    "Mozn Jamous — Flutter, Odoo, and AI engineer based in Damascus. Curriculum vitae.",
};

type Role = {
  title: string;
  org: string;
  period: string;
  location?: string;
  bullets: string[];
};

const experience: Role[] = [
  {
    title: "Flutter Developer · Lead",
    org: "Santa Media — Mademoiselle (MDMZL)",
    period: "Mar 2026 — Present",
    location: "Damascus",
    bullets: [
      "Sole Flutter developer rebuilding Mademoiselle from a FlutterFlow prototype to native Flutter, end-to-end.",
      "Revived a dormant production-track app: full architecture rewrite, UI rebuild, and AI module integration coordinated with a parallel engineer.",
      "Shipped a production Design System: 17 text variants, 9 button variants, multi-theme, full RTL support.",
    ],
  },
  {
    title: "Freelance Flutter Developer",
    org: "Independent",
    period: "Oct 2025 — Mar 2026",
    location: "Damascus",
    bullets: [
      "Paired with a senior engineer on a client mobile project across UI/UX design and quality assurance.",
      "Full responsibility for QA across the application surface.",
    ],
  },
  {
    title: "Software Developer & ERP Specialist",
    org: "Techno Solution",
    period: "Feb 2025 — Sep 2025",
    location: "Damascus",
    bullets: [
      "Owned end-to-end Odoo Online implementation across a multi-activity company (import, warehousing, solar).",
      "Deployed a live Odoo POS in a restaurant; onboarded cashier and supervisory staff into daily production.",
      "Configured a custom Chart of Accounts linked across HR, payroll, accounting, manufacturing, and purchase modules.",
      "Built workflow automations with Odoo Studio + custom Python/XML extensions to replace manual reporting.",
    ],
  },
];

const openSource = [
  {
    title: "Smart Expense Manager",
    org: "Odoo 19 · LGPL-3.0",
    period: "May 2026 — Present",
    bullets: [
      "Token-secured one-click email approvals routed via hr.employee hierarchy — no login required.",
      "Auto-generated journal entries on finance sign-off; QWeb PDF reports emailed by cron.",
      "Three-tier RBAC at record-rule layer; full EN/AR translations.",
    ],
    link: "https://github.com/Mozn-jamous/smart-expense-manager",
  },
];

const featuredProjects = [
  {
    title: "BloomBelly",
    org: "Pregnancy & Childcare Platform · 2025",
    bullets: [
      "Designed and developed a healthcare mobile platform: pregnancy tracking, child growth, nutrition, fetal movement.",
      "Integrated three AI components — Gemini for medical imaging, LoRA-tuned transformer for Arabic Q&A, Random Forest for nutrition.",
      "Documented to IEEE 830 standards. Built as the graduation thesis at ASPU.",
    ],
    stack: "Flutter · Dart · Flask · Supabase · Gemini · LoRA",
  },
  {
    title: "CareConnect",
    org: "Babysitter Booking & Session Management · 2025",
    bullets: [
      "Built a cross-platform booking marketplace as three Flutter apps (Mother, Babysitter, Admin) on one Supabase backend.",
      "Owned the full product lifecycle end-to-end: architecture, state management, screens, and the Supabase integration layer.",
      "IEEE 830 SRS authored before UI work; Supabase RLS enforces role boundaries at the database layer.",
    ],
    stack: "Flutter · Dart · Supabase · PostgreSQL · RLS · REST",
  },
];

const education = [
  {
    title: "B.Sc. Information Technology Engineering",
    org: "Al-Sham Private University (ASPU)",
    period: "2025",
    location: "Damascus, Syria",
  },
];

const certifications = [
  {
    name: "Odoo Functional Certification",
    org: "Odoo S.A.",
    year: "2025",
  },
  {
    name: "1 Million Prompters AI Program",
    org: "Dubai Future Foundation",
    year: "2025",
  },
];

const skills = {
  mobile: ["Flutter", "Dart", "Design Systems", "RTL"],
  backend: ["Python", "Flask", "PostgreSQL", "MySQL", "Supabase", "REST APIs"],
  erp: ["Odoo 17–19", "Odoo Studio", "Python/XML", "ORM", "QWeb", "OWL", "POS"],
  modules: [
    "POS",
    "Inventory",
    "HR",
    "Payroll",
    "CRM",
    "Accounting",
    "Manufacturing",
    "Purchase",
  ],
  frontend: ["Vue.js", "Figma", "OOP"],
  tools: ["Git", "GitHub", "Jira", "Trello", "Postman", "Linux", "Docker", "Agile"],
};

const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Professional working — B2" },
];

export default function CVPage() {
  return (
    <div className="text-[var(--ink)] print:bg-white">
      {/* Action bar (hidden in print) */}
      <div className="border-b border-[var(--glass-border)] bg-white/45 backdrop-blur-xl print:hidden">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4 lg:px-8">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
            Curriculum Vitae
          </p>
          <PrintTrigger />
        </div>
      </div>

      <article className="mx-auto my-10 max-w-4xl rounded-2xl bg-white/70 px-6 py-12 shadow-soft backdrop-blur-md print:my-0 print:max-w-none print:rounded-none print:bg-white print:px-0 print:py-0 print:shadow-none lg:px-12">
        {/* CV header */}
        <header className="border-b border-[var(--border)] pb-10">
          <div className="flex items-center gap-2.5">
            <Orb size={26} className="shrink-0 print:hidden" />
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--accent)]">
              Curriculum Vitae · 2026
            </p>
          </div>
          <h1 className="mt-4 text-5xl font-light leading-tight tracking-tight text-[var(--ink)] sm:text-6xl">
            Mozn Jamous
          </h1>
          <p className="mt-3 max-w-2xl text-balance text-lg leading-relaxed text-[var(--ink-muted)]">
            Software engineer — Flutter, Odoo, and AI. Turning research-grade
            ideas into production systems for problems that matter.
          </p>
          <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3 font-mono text-xs sm:grid-cols-4">
            <Field label="Email">
              <a
                href="mailto:moznjamous9@gmail.com"
                className="underline decoration-[var(--accent)]/40 underline-offset-4 hover:decoration-[var(--accent)]"
              >
                moznjamous9@gmail.com
              </a>
            </Field>
            <Field label="Phone">+963 956 959 722</Field>
            <Field label="LinkedIn">
              <a
                href="https://linkedin.com/in/mozn-jamous"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[var(--accent)]/40 underline-offset-4 hover:decoration-[var(--accent)]"
              >
                /in/mozn-jamous
              </a>
            </Field>
            <Field label="GitHub">
              <a
                href="https://github.com/Mozn-jamous"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[var(--accent)]/40 underline-offset-4 hover:decoration-[var(--accent)]"
              >
                @Mozn-jamous
              </a>
            </Field>
          </dl>
          <p className="mt-3 font-mono text-xs text-[var(--ink-faint)]">
            Damascus, Syria · open to roles, contracts, and grants
          </p>
        </header>

        {/* Body — two-column on desktop */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_260px] lg:gap-16">
          {/* Main column */}
          <div>
            <Section title="Experience">
              <div className="space-y-9">
                {experience.map((r) => (
                  <RoleEntry key={`${r.org}-${r.period}`} role={r} />
                ))}
              </div>
            </Section>

            <Section title="Featured projects">
              <div className="space-y-9">
                {featuredProjects.map((p) => (
                  <article key={p.title}>
                    <header className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="text-lg font-medium tracking-tight text-[var(--ink)]">
                        {p.title}{" "}
                        <span className="font-normal text-[var(--ink-muted)]">
                          — {p.org}
                        </span>
                      </h3>
                    </header>
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[0.95rem] leading-relaxed text-[var(--ink-muted)] marker:text-[var(--accent)]">
                      {p.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                    <p className="mt-2 font-mono text-xs text-[var(--ink-faint)]">
                      {p.stack}
                    </p>
                  </article>
                ))}
              </div>
            </Section>

            <Section title="Open source">
              <div className="space-y-9">
                {openSource.map((r) => (
                  <article key={r.title}>
                    <header className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="text-lg font-medium tracking-tight text-[var(--ink)]">
                        {r.title}{" "}
                        <span className="font-normal text-[var(--ink-muted)]">
                          — {r.org}
                        </span>
                      </h3>
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
                        {r.period}
                      </span>
                    </header>
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[0.95rem] leading-relaxed text-[var(--ink-muted)] marker:text-[var(--accent)]">
                      {r.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                    {r.link && (
                      <p className="mt-2 font-mono text-xs">
                        <a
                          href={r.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--accent-deep)] underline decoration-[var(--accent)]/40 underline-offset-4 hover:decoration-[var(--accent)]"
                        >
                          github.com/Mozn-jamous/smart-expense-manager ↗
                        </a>
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </Section>

            <Section title="Education">
              <div className="space-y-5">
                {education.map((e) => (
                  <div key={e.title}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="text-lg font-medium tracking-tight text-[var(--ink)]">
                        {e.title}
                      </h3>
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
                        {e.period}
                      </span>
                    </div>
                    <p className="mt-1 text-[var(--ink-muted)]">
                      {e.org} · {e.location}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Certifications">
              <ul className="space-y-4">
                {certifications.map((c) => (
                  <li
                    key={c.name}
                    className="flex flex-wrap items-baseline justify-between gap-x-4"
                  >
                    <span className="text-base font-medium text-[var(--ink)]">
                      {c.name}
                    </span>
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
                      {c.org} · {c.year}
                    </span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          {/* Side column */}
          <aside className="space-y-10">
            <SideSection title="Skills">
              <SkillGroup label="Mobile" items={skills.mobile} />
              <SkillGroup label="Backend" items={skills.backend} />
              <SkillGroup label="ERP — Odoo" items={skills.erp} />
              <SkillGroup label="Odoo modules" items={skills.modules} />
              <SkillGroup label="Frontend" items={skills.frontend} />
              <SkillGroup label="Tools" items={skills.tools} />
            </SideSection>

            <SideSection title="Languages">
              <ul className="space-y-1.5 text-sm">
                {languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-baseline justify-between gap-2"
                  >
                    <span className="text-[var(--ink)]">{l.name}</span>
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
                      {l.level}
                    </span>
                  </li>
                ))}
              </ul>
            </SideSection>

            <SideSection title="Open to">
              <ul className="space-y-1.5 text-sm text-[var(--ink-muted)]">
                {aboutContent.openTo.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </SideSection>
          </aside>
        </div>

        <footer className="mt-16 border-t border-[var(--border)] pt-6 text-center font-mono text-[0.6rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
          References available on request · Last updated 2026
        </footer>
      </article>
    </div>
  );
}

/* --- helpers --- */

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="text-[0.6rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
        {label}
      </dt>
      <dd className="mt-1 text-[var(--ink)]">{children}</dd>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12 last:mb-0">
      <h2 className="mb-7 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--accent)]">
        {title}
      </h2>
      {children}
    </section>
  );
}

function SideSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--accent)]">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function RoleEntry({ role }: { role: Role }) {
  return (
    <article>
      <header className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="text-lg font-medium tracking-tight text-[var(--ink)]">
          {role.title}{" "}
          <span className="font-normal text-[var(--ink-muted)]">— {role.org}</span>
        </h3>
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
          {role.period}
          {role.location ? ` · ${role.location}` : ""}
        </span>
      </header>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[0.95rem] leading-relaxed text-[var(--ink-muted)] marker:text-[var(--accent)]">
        {role.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </article>
  );
}

function SkillGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
        {label}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-[var(--ink)]">
        {items.join(" · ")}
      </p>
    </div>
  );
}
