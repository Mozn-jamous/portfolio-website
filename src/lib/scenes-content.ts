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
 *  · New process step:
 *      → push to `processContent.steps` (step / title / body / example).
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
  name: "Mozn Jamous",
  /** Sits under the name in the nav wordmark. */
  subtitle: "End-to-End Product Builder",
  /** Small label above the headline. */
  eyebrow: "Product Designer + Engineer",
  location: "Damascus, Syria",
  /** Status pill at the top of the hero. */
  status: "Designing & building product at Santa Media",
  /** Big headline — `accent` renders in the rose→blue gradient. */
  headlineLead: "End-to-End",
  headlineAccent: "Product Builder.",
  subheading:
    "I design products, build the mobile apps, and engineer the systems behind them.",
  intro:
    "From research and UX through Flutter development, AI integration, and business operations systems — I take products from idea to shipped reality.",
  /** Credibility row — honest, defensible proof points (no invented metrics). */
  stats: [
    { key: "projects", value: "3", label: "Shipped products" },
    { key: "fullstack", value: "1", label: "Production ERP implementation" },
    { key: "domains", value: "3", label: "AI-powered product experiences" },
    { key: "years", value: "Design → Dev → Deploy", label: "Owned end-to-end" },
  ],
  ctas: {
    primary: { label: "View Case Studies", href: "#work" },
    secondary: { label: "Download Resume", href: "/cv" },
  },
  socials: [
    { label: "GitHub", href: "https://github.com/Mozn-jamous", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/mozn-jamous", icon: "linkedin" },
    { label: "Email Me", href: "mailto:moznjamous9@gmail.com", icon: "email" },
  ],
  /** "Let's Talk" nav CTA target. */
  contactHref: "#contact",
  trustedBy: {
    label: "Trusted by · collaborated with",
    items: ["Santa Media", "Techno Solution", "ASPU", "Odoo", "Supabase"],
  },
};

/* ------------------------------------------------------------ */
/*  About — short bio + what I'm open to                         */
/* ------------------------------------------------------------ */

export const aboutContent = {
  eyebrow: "About",
  paragraphs: [
    "I'm a product builder with an Information Technology Engineering degree and a design-first way of working. I started by shipping a healthcare app for my graduation thesis — designed in Figma, built end-to-end in Flutter, with three AI models behind an Arabic-first interface.",
    "Since then I've worked across the full line of a product: the interface, the Flutter app, the backend, the AI integration, and the business systems products run on — a bilingual Design System, a mobile rebuild, and a production Odoo ERP, all within the last year.",
    "I'm most useful to small teams that need one person who can research a problem, design the solution, and ship it — especially for Arabic-first or bilingual products.",
  ],
  openTo: [
    "Product engineer / product designer — remote",
    "Mobile product design & Flutter development",
    "Early-stage product teams",
    "ERP / Odoo & business systems",
  ],
};

/* ------------------------------------------------------------ */
/*  Product thinking process — HOW I work, with real examples    */
/*  Each step pairs a method with a concrete decision from a     */
/*  shipped project (no new claims — drawn from the case studies).*/
/* ------------------------------------------------------------ */

export const processContent = {
  eyebrow: "How I work",
  heading: "From a problem to a shipped product.",
  intro:
    "I don't start with screens. I start with the problem, decide what to build and why, then take it all the way to production — and keep it running.",
  steps: [
    {
      step: "01",
      title: "Discover",
      body: "Work out who has the problem and what's actually at stake — before any UI.",
      deliverables: ["User journeys", "Requirements spec", "Problem framing"],
      tools: ["Figma", "IEEE 830"],
      outcome: "BloomBelly: four maternal-health journeys mapped before a line of code.",
    },
    {
      step: "02",
      title: "Design",
      body: "Decide the architecture and the tradeoffs first; information architecture before pixels.",
      deliverables: ["IA & user flows", "Design System", "Hi-fi screens"],
      tools: ["Figma", "Design tokens", "RTL"],
      outcome: "CareConnect: three audiences → three focused apps, not one role-switcher.",
    },
    {
      step: "03",
      title: "Build",
      body: "Implement what I designed — the Flutter front-end, the backend and data model, the AI or business logic.",
      deliverables: ["Flutter app", "Backend & schema", "AI / logic"],
      tools: ["Flutter", "Python", "Supabase", "Odoo"],
      outcome: "Mademoiselle: stalled prototype rebuilt natively on a 26+ component system.",
    },
    {
      step: "04",
      title: "Improve",
      body: "Shipping is the start — access control, edge cases, and whether the next person can keep it alive.",
      deliverables: ["Access control", "Audit & logging", "Docs"],
      tools: ["RLS", "Record rules", "Git"],
      outcome: "Smart Expense: role-based access at the data layer, open-sourced under LGPL-3.0.",
    },
  ],
};

/* ------------------------------------------------------------ */
/*  Business systems — gateway to the dedicated /odoo page       */
/*  The homepage shows the design/product work; this section     */
/*  surfaces the ERP/Odoo competence and links into its own      */
/*  case study so it reads as range, not a context switch.       */
/* ------------------------------------------------------------ */

export const businessSystemsContent = {
  eyebrow: "Systems & technical depth",
  heading: "I build the systems products run on, not just their screens.",
  body: "The same products need backends, data models, access control, and the business operations behind them. I've built production Odoo 19 systems for real companies — expense management, HR, payroll, attendance, POS, and approval workflows — designed around how each business actually works. One is open source and live.",
  systems: [
    "Expense Management",
    "HR",
    "Payroll",
    "Attendance",
    "POS",
    "Approval Workflows",
  ],
  results: [
    { value: "Days → Secs", label: "Expense approval time" },
    { value: "3-division", label: "Company centralized" },
    { value: "Open source", label: "Live on GitHub" },
  ],
  cta: { label: "Explore the systems work", href: "/odoo" },
};

/* ------------------------------------------------------------ */
/*  System architecture — the interactive full-stack viewer.     */
/*  Every layer + example is drawn from real shipped work        */
/*  (see the case-study diagrams in ArchitectureDiagram.tsx).    */
/*  No invented capabilities — if it's listed, it was built.     */
/* ------------------------------------------------------------ */

export type ArchLayer = {
  id: string;
  /** Layer name, e.g. "Frontend". */
  label: string;
  /** Primary tech shown on the collapsed row. */
  tech: string;
  /** One-line role of this layer. */
  summary: string;
  /** What lives in this layer — revealed on select. */
  items: string[];
  /** A real, shipped example that proves this layer. */
  example: { project: string; href: string; note: string };
};

export const architectureStack: {
  eyebrow: string;
  heading: string;
  intro: string;
  layers: ArchLayer[];
} = {
  eyebrow: "Under the hood",
  heading: "I design the whole line, not just the screens.",
  intro:
    "Select a layer to see what's in it — and the shipped product it came from. This is one stack; every layer is something I've actually built and put in production.",
  layers: [
    {
      id: "frontend",
      label: "Frontend",
      tech: "Flutter · Dart",
      summary: "One codebase, iOS + Android, Arabic-first and RTL.",
      items: [
        "Cross-platform UI from a single Dart codebase",
        "Arabic-first / RTL layouts — not bolted-on translation",
        "A shared design system so screens never drift",
        "State management, navigation, and offline-aware flows",
      ],
      example: {
        project: "CareConnect",
        href: "/projects/careconnect",
        note: "Three Flutter apps — mother · babysitter · admin — from one design system.",
      },
    },
    {
      id: "backend",
      label: "Backend",
      tech: "Python · Flask",
      summary: "An orchestration layer between the app and everything behind it.",
      items: [
        "REST APIs the mobile client talks to",
        "Request routing: intent → the right service",
        "Auth-gated endpoints and input validation",
        "Business logic kept off the client",
      ],
      example: {
        project: "BloomBelly",
        href: "/projects/bloombelly",
        note: "A Flask orchestrator routes each request to one of three AI models.",
      },
    },
    {
      id: "data",
      label: "Database & Access",
      tech: "Supabase · PostgreSQL",
      summary: "One source of truth, with access rules the apps can't bypass.",
      items: [
        "Relational schema as the single source of truth",
        "Row-level security (RLS) enforcing role boundaries",
        "Role-based access — mother / babysitter / admin",
        "Rules enforced in the database, not in each app",
      ],
      example: {
        project: "CareConnect",
        href: "/projects/careconnect",
        note: "One Postgres + RLS, so three apps physically can't read each other's data.",
      },
    },
    {
      id: "ai",
      label: "AI",
      tech: "Gemini · LoRA · Random Forest",
      summary: "Three models, each for the job it's actually good at.",
      items: [
        "Vision understanding with Google Gemini",
        "Arabic Q&A via a LoRA-tuned transformer with calibrated refusals",
        "Nutrition scoring with a Random Forest model",
        "All orchestrated behind one Arabic-first interface",
      ],
      example: {
        project: "BloomBelly",
        href: "/projects/bloombelly",
        note: "Three AI models behind a single maternal-health interface.",
      },
    },
    {
      id: "systems",
      label: "Business Systems",
      tech: "Odoo 19 · ORM · QWeb · OWL",
      summary: "The ERP and operations a business runs on day to day.",
      items: [
        "Custom Odoo modules — ORM models, QWeb, OWL components",
        "Token-secured email approval flows",
        "Auto-journaling on finance sign-off (account.move)",
        "Scheduled jobs and QWeb PDF digests",
      ],
      example: {
        project: "Smart Expense Manager",
        href: "/projects/smart-expense",
        note: "Submit → approve → post, with the journal entry generated automatically.",
      },
    },
  ],
};

/* ------------------------------------------------------------ */
/*  Decision log — the judgment behind the work.                 */
/*  Each entry is a real decision lifted from a case-study ADR / */
/*  DesignDecision: the default I rejected, the call I made, and */
/*  what it cost. This is the "considered the easy path and      */
/*  chose deliberately" signal — kept faithful to the source.    */
/* ------------------------------------------------------------ */

export type Decision = {
  id: string;
  /** Discipline chip — Product / Backend / AI / Systems / Design. */
  tag: string;
  /** The hook, phrased as a question. */
  question: string;
  /** The cheaper/common default I rejected. */
  easy: string;
  /** What I actually did, and why. */
  chose: string;
  /** The cost or trade-off I accepted. */
  tradeoff: string;
  project: string;
  href: string;
};

export const decisionLog: {
  eyebrow: string;
  heading: string;
  intro: string;
  decisions: Decision[];
} = {
  eyebrow: "Decision log",
  heading: "The judgment behind the work.",
  intro:
    "Anyone can list technologies. These are real decisions from the projects — the cheaper default I turned down, the call I made instead, and what it cost. Open any one.",
  decisions: [
    {
      id: "three-apps",
      tag: "Product",
      question: "Why three separate apps instead of one role-switching app?",
      easy: "A single app with role-switching is cheaper to build — one codebase, one store listing, one onboarding. Most marketplaces ship this way.",
      chose: "Three apps. Each audience has a different primary action and vocabulary, so each gets a focused navigation and a store listing that says exactly what it does — no “you are logged in as: Mother” cognitive load.",
      tradeoff: "Higher initial build cost, but every surface stays honest to its audience.",
      project: "CareConnect",
      href: "/projects/careconnect",
    },
    {
      id: "rls",
      tag: "Backend",
      question: "Why Supabase + RLS over Firebase + client-side guards?",
      easy: "Firebase is the default for student marketplaces — auth + Firestore is fast to wire. But its security rules are a JSON DSL that's easy to get subtly wrong, and the client can be modified.",
      chose: "Postgres + Supabase RLS. Policies are real SQL, run on every query, and can't be bypassed from the client — a mother's query physically cannot return another mother's bookings.",
      tradeoff: "More operational overhead, but the security model is auditable, and it's what made the three-app design viable.",
      project: "CareConnect",
      href: "/projects/careconnect",
    },
    {
      id: "three-models",
      tag: "AI",
      question: "Why three AI models instead of one capable LLM?",
      easy: "A single fine-tuned LLM could answer questions, classify nutrition, and describe images — one model, one screen, one deployment surface.",
      chose: "Three specialized models — Gemini for vision, a LoRA-tuned transformer for Arabic Q&A, Random Forest for nutrition — each with a purpose-built screen designed around how that capability is actually used.",
      tradeoff: "More to maintain, but each model stays auditable in isolation — critical in healthcare — and users pick the right tool instead of one modal that does everything.",
      project: "BloomBelly",
      href: "/projects/bloombelly",
    },
    {
      id: "refusals",
      tag: "AI",
      question: "Why design the AI's refusal as a feature, not an error?",
      easy: "A confident chatbot that always answers demos well. But one that hallucinates dosages is dangerous in maternal care.",
      chose: "Below a confidence threshold the bot returns “Consult your doctor / استشيري طبيبتك” — designed as a warm, first-class state in Figma, not a red error box.",
      tradeoff: "Fewer impressive demo answers, but the product is safe to put in front of real mothers. Trust over benchmark.",
      project: "BloomBelly",
      href: "/projects/bloombelly",
    },
    {
      id: "journal-on-approval",
      tag: "Systems",
      question: "Why post the journal entry on approval, not on submission?",
      easy: "Auto-creating the journal entry the moment an employee submits is a simpler state machine.",
      chose: "The account.move is generated only on the finance-approval transition. Until then the request is just an HR record.",
      tradeoff: "An extra state to manage, but the ledger stays clean — accountants only ever see entries that are real liabilities, never unapproved ones to reverse.",
      project: "Smart Expense Manager",
      href: "/projects/smart-expense",
    },
    {
      id: "rtl-native",
      tag: "Design",
      question: "Why design RTL-native instead of mirroring the LTR layout?",
      easy: "RTL is usually shipped as a visual mirror of an LTR layout — flip direction, swap icons, done. It always feels foreign to Arabic readers.",
      chose: "The Figma file and every Flutter screen was designed in Arabic first — reading direction, hierarchy, spacing, and icon choices all made in RTL context, then adapted for LTR.",
      tradeoff: "Slower to design two-directionally, but the Arabic interface reads as the primary version. Because it is — LTR is the adaptation.",
      project: "Mademoiselle",
      href: "/projects/mademoiselle",
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
    eyebrow: "UI/UX + Flutter · Design System",
    tagline: "A stalled FlutterFlow product, redesigned and rebuilt natively in Flutter.",
    body: "A FlutterFlow prototype had stalled in production with no clear path forward. I started in Figma — a full UI redesign and a bilingual Design System of 26+ components across three themes and both writing directions — then rebuilt the app natively in Flutter. Now active and shipping.",
    tags: [
      { label: "Figma", variant: "highlight" },
      { label: "Flutter" },
      { label: "Design System" },
      { label: "RTL" },
      { label: "AI Integration" },
    ],
    cta: {
      label: "Read case study",
      href: "/projects/mademoiselle",
    },
  },
  {
    id: "scene-bloombelly",
    track: "mobile",
    name: "BloomBelly",
    year: "2025",
    eyebrow: "UI/UX + AI · Arabic-first",
    tagline: "Arabic-first maternal health — designed in Figma, three AI models behind one app.",
    body: "Arabic-speaking mothers had no AI health guide in their language. I mapped four user journeys in Figma, designed Arabic-first with full RTL, then integrated three AI models behind one Flutter interface — calibrated to refuse rather than hallucinate on health questions.",
    tags: [
      { label: "Figma", variant: "highlight" },
      { label: "Flutter" },
      { label: "Flask" },
      { label: "Gemini" },
      { label: "LoRA" },
      { label: "RTL" },
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
    eyebrow: "UI/UX + Mobile · Full-stack",
    tagline: "Designed and built for three distinct audiences — one Supabase backend, three Flutter apps.",
    body: "Childcare platforms fail by building one interface for three completely different users. Designed three separate Figma files — one per audience — each built around how that person actually thinks. Three focused apps, one shared Supabase backend, access enforced at the database layer.",
    tags: [
      { label: "Figma", variant: "highlight" },
      { label: "Flutter" },
      { label: "Supabase" },
      { label: "PostgreSQL" },
      { label: "RLS" },
      { label: "IEEE 830" },
    ],
    cta: {
      label: "Read case study",
      href: "/projects/careconnect",
    },
  },
];

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
      body: "Designed 3 apps in Figma for 3 distinct audiences · built on 1 shared Supabase backend.",
      href: "#scene-careconnect",
    },
    {
      year: "2025",
      title: "BloomBelly — graduation thesis",
      body: "Arabic-first UI/UX design · 3 AI models · Figma wireframes before any Flutter code.",
      href: "#scene-bloombelly",
    },
    {
      year: "2025",
      title: "Odoo at Techno Solution",
      body: "Three-division company · live POS · UX-configured dashboards for daily production users.",
      href: "/odoo",
    },
    {
      year: "2026",
      title: "UI/UX Lead — Santa Media",
      body: "Led full redesign · production Design System (17 text + 9 button variants) · native Flutter rebuild.",
      href: "#scene-flutter",
    },
    {
      year: "2026",
      title: "Smart Expense Manager",
      body: "UX insight: email is the UI. One-click approvals · open source · LGPL-3.0.",
      href: "/odoo",
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
  body: "I'm open to product engineering, product design, and Flutter roles — especially remote and early-stage teams, and bilingual or Arabic-first products. Email is the fastest way to reach me.",
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

/* ------------------------------------------------------------ */
/*  Projects directory — /projects index page                    */
/*  One row per shipped project. `cover` is optional — drop a     */
/*  real mockup path in /public to replace the Figure slot.       */
/* ------------------------------------------------------------ */

export type ProjectIndexEntry = {
  name: string;
  href: string;
  year: string;
  role: string;
  industry: string;
  /** Honest one-line outcome — no invented metrics. */
  impact: string;
  summary: string;
  /** Optional mockup image path (else a labelled Figure slot renders). */
  cover?: string;
};

export const projectsIndex: ProjectIndexEntry[] = [
  {
    name: "Mademoiselle",
    href: "/projects/mademoiselle",
    year: "2026",
    role: "Designer + Lead Flutter Dev",
    industry: "Commerce · Beauty",
    impact: "Stalled FlutterFlow prototype → live native app",
    summary:
      "Full redesign and native Flutter rebuild on a bilingual, multi-theme Design System of 26+ components.",
  },
  {
    name: "BloomBelly",
    href: "/projects/bloombelly",
    year: "2025",
    role: "Designer + Developer",
    industry: "Healthcare",
    impact: "Three AI models behind one Arabic-first app",
    summary:
      "Graduation project: an Arabic-first maternal-health companion, designed in Figma and built end-to-end in Flutter.",
  },
  {
    name: "CareConnect",
    href: "/projects/careconnect",
    year: "2024",
    role: "Designer + Developer",
    industry: "Childcare marketplace",
    impact: "Three focused apps on one provable backend",
    summary:
      "A childcare marketplace built as three native apps over a single Supabase backend, access enforced in the database.",
  },
  // NOTE: Smart Expense Manager is ERP/Odoo work — it belongs on the /odoo hub
  // (which links to its case study at /projects/smart-expense), NOT in this
  // product/design grid. Do not re-add it here.
];

/* ------------------------------------------------------------ */
/*  About page — full story (/about)                             */
/*  Intro reuses aboutContent.paragraphs; timeline reuses        */
/*  journeyChapter. Tools are an ecosystem (chips), NOT bars.     */
/* ------------------------------------------------------------ */

export const aboutPageContent = {
  eyebrow: "About",
  title: "The person behind the work.",
  /** Short summary beside the portrait slot. */
  summary:
    "I'm an Information Technology Engineering graduate who works as an end-to-end product builder — research and UX through Flutter, AI integration, and the business systems products run on. I'm most useful to small teams that need one person who can take a product from idea to shipped reality.",
  philosophy: [
    {
      title: "Product thinking",
      body: "Start with the problem and who has it. Every design choice is a tradeoff I can explain, not a default I reached for.",
    },
    {
      title: "Systems thinking",
      body: "Screens sit on backends, data models, and access control. I design the whole line so the parts don't fight each other.",
    },
    {
      title: "Design principles",
      body: "Clarity over decoration, Arabic-first when the audience is, and a system before the screens so nothing drifts.",
    },
    {
      title: "Engineering principles",
      body: "Enforce rules where they can't be bypassed, design the failure states, and leave code the next person can keep alive.",
    },
  ],
  /** Tools grouped by area — rendered as chips, never progress bars. */
  tools: [
    { area: "Design", items: ["Figma", "Design Systems", "Prototyping", "Arabic UX", "RTL", "Accessibility"] },
    { area: "Mobile", items: ["Flutter", "Dart", "iOS + Android"] },
    { area: "Backend", items: ["Python", "Flask", "Supabase", "PostgreSQL", "REST APIs"] },
    { area: "AI", items: ["Google Gemini", "LoRA-tuned models", "Random Forest"] },
    { area: "Systems", items: ["Odoo 19", "ORM", "QWeb", "OWL", "POS · HR · Payroll"] },
  ],
};

/* ------------------------------------------------------------ */
/*  Contact page — dedicated (/contact)                          */
/* ------------------------------------------------------------ */

export const contactPageContent = {
  eyebrow: "Contact",
  title: "Let's build something meaningful.",
  body: "Open to product engineering, product design, and Flutter roles — remote and early-stage especially, and bilingual or Arabic-first products.",
  availability: "Open to new roles & freelance",
  responseTime: "Usually replies within a day",
  /** Reuses the same contact links as the home outro. */
  contacts: outroContent.contacts,
  resume: { label: "Download résumé", href: "/cv" },
};

/* ------------------------------------------------------------ */
/*  Testimonials — DATA-GATED. Empty by design.                  */
/*  Add real entries (with permission) and the section appears   */
/*  automatically. Never invent quotes or people.                */
/* ------------------------------------------------------------ */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  /** Optional headshot path in /public. */
  photo?: string;
};

export const testimonialsContent: Testimonial[] = [];

