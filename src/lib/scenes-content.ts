/* ============================================================
 *  Portfolio content — single source of truth
 * ============================================================
 *
 *  Everything visible on the site lives in this file. To change
 *  any copy, project, role, or contact, edit the data below.
 *  No component code should need to change.
 *
 *  HOW TO ADD THINGS
 *  -----------------
 *  · New project on the home grid:
 *      → push to `scenes` (give it an `id`, `name`, `eyebrow`,
 *        `body`, `tags`, and optionally `cta` if it has a case
 *        study or external link).
 *
 *  · New deep-dive case study:
 *      → create `src/app/projects/<slug>/page.tsx` that uses
 *        `CaseStudyLayout` from `src/components/case-study/`.
 *      → set `cta: { label: "Read case study",
 *                     href: "/projects/<slug>" }` on the scene.
 *
 *  · New stack item:
 *      → push to the right `layers[i].items` in `stackChapter`.
 *
 *  · New trajectory milestone:
 *      → push to `journeyChapter.milestones`. Optional `href`
 *        can point at `#scene-<id>` to scroll there.
 *
 *  · New credential:
 *      → push to `journeyChapter.credentials` (plain string).
 *
 *  · New contact link:
 *      → push to `outroContent.contacts`.
 *
 *  · Adjust the bio or "Open to" list:
 *      → edit `aboutContent` below.
 * ============================================================ */

export type SceneTag = {
  label: string;
  variant?: "default" | "highlight";
};

export type SceneContent = {
  /** Used for anchor scroll target (`#<id>`). */
  id: string;
  /** Which track this belongs to — splits the work grid into two groups. */
  track: "mobile" | "odoo";
  /** Project name shown as card heading — e.g. "BloomBelly". */
  name: string;
  /** Year or year range — shown top-right of the card. */
  year?: string;
  /** Small uppercase eyebrow — e.g. "Mobile · Healthcare". */
  eyebrow: string;
  /** One-line tagline shown under the name. Keep it short. */
  tagline: string;
  /** Two-or-three-line description shown on the card. */
  body: string;
  tags: SceneTag[];
  /** Optional CTA — case study link or external (GitHub etc). */
  cta?: { label: string; href: string; external?: boolean };
};

/* ------------------------------------------------------------ */
/*  Hero — top of the home page                                  */
/* ------------------------------------------------------------ */

export const heroContent = {
  location: "Damascus, Syria",
  status: "Open to Flutter & Odoo roles",
  name: "Mozn Jamous",
  taglineLead: "Mobile & ERP systems developer.",
  taglineTrail: "I turn broken or missing systems into ones that run.",
  currentRole:
    "Currently at Santa Media — rebuilding a commercial Flutter app and building an Odoo 19 expense module.",
  socials: [
    { label: "GitHub", href: "https://github.com/Mozn-jamous" },
    { label: "LinkedIn", href: "https://linkedin.com/in/mozn-jamous" },
  ],
  ctas: {
    primary: { label: "See my work", href: "#work" },
    secondary: { label: "View CV", href: "/cv" },
  },
};

/* ------------------------------------------------------------ */
/*  About — short bio + what I'm open to                         */
/* ------------------------------------------------------------ */

export const aboutContent = {
  eyebrow: "About",
  paragraphs: [
    "I started by learning Odoo from scratch with no local support network, built a live ERP for a real company, then moved into mobile — shipping a full healthcare app as my graduation project and rebuilding a dormant commercial product from the ground up.",
    "I don't specialize in a single technology. I specialize in taking something broken or missing and making it work — across mobile, ERP, and AI in the same year. The tech was always the means, never the goal.",
  ],
  openTo: [
    "Flutter roles — remote",
    "Odoo — functional + technical",
    "Early-stage product teams",
    "Digital-health collaborations",
  ],
};

/* ------------------------------------------------------------ */
/*  Stats — "by the numbers" credibility band                    */
/* ------------------------------------------------------------ */

export const statsContent = {
  eyebrow: "By the numbers",
  items: [
    { value: "6+", label: "Daily users on a live production ERP" },
    { value: "3", label: "Divisions unified into one system" },
    { value: "2", label: "Mobile apps shipped end-to-end" },
    { value: "1", label: "Dead commercial product revived" },
  ],
};

/* ------------------------------------------------------------ */
/*  Capabilities — "what I can do for you", per audience         */
/* ------------------------------------------------------------ */

export const capabilitiesContent = {
  eyebrow: "What I can do for you",
  items: [
    {
      audience: "If you're building a mobile product",
      body: "I can take your app from Figma to production — or inherit a broken codebase and bring it back to life. I've done both.",
    },
    {
      audience: "If you're implementing Odoo",
      body: "I can configure, customize, and deploy a system your team will actually use — not a demo that looks good in a meeting. I've onboarded real users into daily operations.",
    },
    {
      audience: "If you're an early-stage startup",
      body: "I think in systems, not just features. I've worked across mobile, ERP, and AI in the same year — so I can contribute beyond a single lane.",
    },
  ],
};

/* ------------------------------------------------------------ */
/*  Selected work — project cards                                */
/*  Order = display order. Newest first reads as momentum.       */
/* ------------------------------------------------------------ */

export const scenes: SceneContent[] = [
  {
    id: "scene-flutter",
    track: "mobile",
    name: "Mademoiselle — Santa Media",
    year: "2026 — Present",
    eyebrow: "Flutter · Full ownership",
    tagline: "Returning a dead commercial product to production.",
    body: "Full migration from a dormant FlutterFlow app to native Flutter — architecture rewrite, complete UI redesign, AI module integration, and a production Design System (multi-theme, full RTL, 17 text + 9 button variants). One of two core developers.",
    tags: [
      { label: "Flutter" },
      { label: "Dart" },
      { label: "Design System" },
      { label: "RTL" },
      { label: "AI Integration" },
    ],
  },
  {
    id: "scene-oss",
    track: "odoo",
    name: "Smart Expense Manager",
    year: "2026",
    eyebrow: "Open source · Odoo 19",
    tagline: "Approvals at the speed of one email click.",
    body: "Token-secured approvals routed via hr.employee hierarchy — no login required. Auto-generated journal entries on finance sign-off. Three-tier RBAC at record-rule layer. Full EN/AR translations.",
    tags: [
      { label: "Python" },
      { label: "Odoo ORM" },
      { label: "QWeb" },
      { label: "OWL" },
      { label: "Open Source", variant: "highlight" },
    ],
    cta: {
      label: "Read case study",
      href: "/projects/smart-expense",
    },
  },
  {
    id: "scene-bloombelly",
    track: "mobile",
    name: "BloomBelly",
    year: "2025",
    eyebrow: "Graduation thesis · AI integration",
    tagline: "Arabic-first maternal health, three AI models behind one phone.",
    body: "Gemini reads the medical image. A LoRA-tuned transformer answers in Arabic. Random Forest guides nutrition. Orchestrated by Flask, delivered through Flutter, calibrated to refuse when uncertain.",
    tags: [
      { label: "Flutter" },
      { label: "Flask" },
      { label: "Gemini" },
      { label: "LoRA" },
      { label: "Random Forest" },
      { label: "Supabase" },
    ],
    cta: {
      label: "Read case study",
      href: "/projects/bloombelly",
    },
  },
  {
    id: "scene-careconnect",
    track: "mobile",
    name: "CareConnect",
    year: "2024",
    eyebrow: "Mobile · Full-stack",
    tagline: "One Supabase backend. Three Flutter apps. Three audiences.",
    body: "Mother, Babysitter, Admin — each a focused app on a shared Postgres backend. Role boundaries enforced by Supabase RLS at the database layer. IEEE 830 SRS authored before any UI.",
    tags: [
      { label: "Flutter" },
      { label: "Supabase" },
      { label: "PostgreSQL" },
      { label: "RLS" },
      { label: "REST" },
      { label: "IEEE 830" },
    ],
    cta: {
      label: "Read case study",
      href: "/projects/careconnect",
    },
  },
  {
    id: "scene-erp",
    track: "odoo",
    name: "Techno Solution — Odoo",
    year: "2025",
    eyebrow: "ERP · Production",
    tagline: "End-to-end Odoo across a three-division company.",
    body: "Replaced a fully Excel-based operation with one unified Odoo system — inventory, HR, payroll, a custom Chart of Accounts built around real business logic, and a live POS in the owner's restaurant. The signal: after I left, they hired a dedicated Odoo developer to maintain it.",
    tags: [
      { label: "Odoo 19" },
      { label: "Python" },
      { label: "PostgreSQL" },
      { label: "POS" },
      { label: "Odoo Studio" },
    ],
  },
];

/* ------------------------------------------------------------ */
/*  Stack — what I've shipped with                               */
/* ------------------------------------------------------------ */

export type StackLayer = {
  id: string;
  label: string;
  items: string[];
};

export const stackChapter = {
  id: "stack",
  eyebrow: "Stack",
  title: "Tools I've shipped with.",
  layers: [
    {
      id: "mobile",
      label: "Mobile",
      items: ["Flutter", "Dart", "Design Systems", "RTL", "iOS + Android"],
    },
    {
      id: "backend",
      label: "Backend",
      items: ["Python", "Flask", "Supabase", "PostgreSQL", "REST APIs"],
    },
    {
      id: "erp",
      label: "ERP",
      items: ["Odoo 19", "ORM", "QWeb", "OWL", "POS · HR · Payroll · CRM"],
    },
    {
      id: "ai",
      label: "AI integration",
      items: ["Google Gemini", "LoRA-tuned models", "Random Forest"],
    },
    {
      id: "design",
      label: "Design",
      items: ["Figma", "Design Systems", "Arabic UX", "Bilingual interfaces"],
    },
  ] satisfies StackLayer[],
};

/* ------------------------------------------------------------ */
/*  Trajectory — timeline + credentials                          */
/* ------------------------------------------------------------ */

export type JourneyMilestone = {
  year: string;
  title: string;
  body: string;
  /** Optional anchor — usually `#<scene-id>`. */
  href?: string;
};

export const journeyChapter = {
  id: "about",
  eyebrow: "Trajectory",
  milestones: [
    {
      year: "2024",
      title: "CareConnect",
      body: "3 Flutter apps · 1 Supabase backend · full ownership.",
      href: "#scene-careconnect",
    },
    {
      year: "2025",
      title: "BloomBelly — graduation thesis",
      body: "3 AI models behind one Flutter app. Documented to IEEE 830.",
      href: "#scene-bloombelly",
    },
    {
      year: "2025",
      title: "Odoo at Techno Solution",
      body: "Three-division company · live POS · daily production users.",
      href: "#scene-erp",
    },
    {
      year: "2026",
      title: "Flutter Lead — Santa Media",
      body: "Sole Flutter developer · native rewrite · complete design system.",
      href: "#scene-flutter",
    },
    {
      year: "2026",
      title: "Smart Expense Manager",
      body: "Open source · LGPL-3.0 · Odoo 19 module.",
      href: "#scene-oss",
    },
  ] satisfies JourneyMilestone[],
  credentials: [
    "B.Sc. Information Technology Engineering · ASPU · 2025",
    "Odoo Functional Certification · Odoo S.A. · 2025",
    "1 Million Prompters · Dubai Future Foundation · 2025",
  ],
};

/* ------------------------------------------------------------ */
/*  Contact                                                      */
/* ------------------------------------------------------------ */

export const outroContent = {
  eyebrow: "Contact",
  title: "Let's talk.",
  body: "Hiring for Flutter or Odoo? Running a digital-health grant? Or just curious about something here — email is the fastest way in.",
  contacts: [
    {
      label: "Email",
      value: "moznjamous9@gmail.com",
      href: "mailto:moznjamous9@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/mozn-jamous",
      href: "https://linkedin.com/in/mozn-jamous",
      external: true,
    },
    {
      label: "GitHub",
      value: "github.com/Mozn-jamous",
      href: "https://github.com/Mozn-jamous",
      external: true,
    },
  ],
};
