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
 *  · New project in the work gallery (/projects + home preview):
 *      → push to `projectsIndex` (name, href, year, role, industry,
 *        impact, summary + Arabic siblings). Set `clientSite: true`
 *        for a brand/client site to keep it off the home preview.
 *
 *  · New deep-dive case study:
 *      → create `src/app/projects/<slug>/page.tsx` that uses
 *        `CaseStudyLayout` from `src/components/case-study/`.
 *      → point the matching `projectsIndex` entry's `href` to
 *        `/projects/<slug>`.
 *
 *  · New process step:
 *      → push to `processContent.steps` (step / title / body / example).
 *
 *  · New certification:
 *      → push to `educationChapter.certifications`
 *        ({ title, issuer, year }). Education itself is a single
 *        fixed object on the same export.
 *
 *  · New contact link:
 *      → push to `outroContent.contacts`.
 *
 *  · Adjust the bio or "Open to" list:
 *      → edit `aboutContent` below.
 * ============================================================ */

/* ------------------------------------------------------------ */
/*  Hero — top of the home page                                  */
/* ------------------------------------------------------------ */

export const heroContent = {
  name: "Mozn Jamous",
  nameAr: "مزن جاموس",
  /** Sits under the name in the nav wordmark. */
  subtitle: "Software Engineer",
  subtitleAr: "مهندسة برمجيات",
  /** Small label above the headline. */
  eyebrow: "Software Engineer",
  eyebrowAr: "مهندسة برمجيات",
  location: "Damascus, Syria",
  locationAr: "دمشق، سوريا",
  /** Status pill at the top of the hero. */
  status: "Building product at Santa Media",
  statusAr: "أبني المنتج في Santa Media",
  /** Big headline — `accent` renders in the rose→blue gradient. */
  headlineLead: "Software",
  headlineLeadAr: "مهندسة",
  headlineAccent: "Engineer.",
  headlineAccentAr: "برمجيات.",
  subheading:
    "I build mobile apps, web platforms, AI features, and the business systems companies run on.",
  subheadingAr:
    "أبني تطبيقات الجوال ومنصّات الويب وميزات الذكاء الاصطناعي وأنظمة الأعمال التي تشتغل عليها الشركات.",
  intro:
    "My work has covered Flutter apps, Vue and vanilla web front-ends, Python services, AI integration, Shopify storefronts, and Odoo ERP. I'm not tied to one stack. What stays the same is that I design a thing before I build it, and I stay with it until it runs in production.",
  introAr:
    "شمل عملي تطبيقات Flutter، وواجهات ويب بـVue وبـHTML/CSS/JS، وخدمات Python، ودمج الذكاء الاصطناعي، ومتاجر Shopify، وأنظمة Odoo. لستُ مرتبطة بتقنيةٍ واحدة. الثابت أنني أصمّم الشيء قبل أن أبنيه، وأبقى معه حتى يعمل في الإنتاج.",
  /** Credibility row — honest, defensible proof points (no invented metrics). */
  stats: [
    { key: "projects", value: "3", valueAr: "3", label: "Products designed & built", labelAr: "منتجات صمّمتها وبنيتها" },
    { key: "fullstack", value: "1", valueAr: "1", label: "Production ERP implementation", labelAr: "نظام ERP يعمل في شركة" },
    { key: "domains", value: "3", valueAr: "3", label: "AI-powered product experiences", labelAr: "منتجات فيها ذكاء اصطناعي" },
    { key: "years", value: "Full stack", valueAr: "المكدّس كاملاً", label: "Interface, services, and data", labelAr: "الواجهة والخدمات والبيانات" },
  ],
  ctas: {
    primary: { label: "View Case Studies", labelAr: "استعرض دراسات الحالة", href: "#work" },
    secondary: { label: "Download Resume", labelAr: "حمّل السيرة الذاتية", href: "/cv" },
  },
  socials: [
    { label: "GitHub", labelAr: "GitHub", href: "https://github.com/Mozn-jamous", icon: "github" },
    { label: "LinkedIn", labelAr: "LinkedIn", href: "https://linkedin.com/in/mozn-jamous", icon: "linkedin" },
    { label: "Email Me", labelAr: "راسلني", href: "mailto:moznjamous9@gmail.com", icon: "email" },
  ],
  /** "Let's Talk" nav CTA target. */
  contactHref: "#contact",
  trustedBy: {
    label: "Trusted by · collaborated with",
    labelAr: "تعاونتُ مع",
    items: ["Santa Media", "Techno Solution", "ASPU", "Odoo", "Supabase"],
  },
};

/* ------------------------------------------------------------ */
/*  About — short bio + what I'm open to                         */
/* ------------------------------------------------------------ */

export const aboutContent = {
  eyebrow: "About",
  paragraphs: [
    "I'm a software engineer with a degree in Information Technology Engineering. My first real system was my graduation project: a healthcare app I designed in Figma and wrote in Flutter, with three AI models running behind an Arabic interface.",
    "Since then the work has moved around a lot. A native mobile rebuild on a bilingual design system, an Odoo ERP running inside a company, Shopify storefronts, Vue and plain HTML front-ends, Python services with AI wired into them. Different stacks, same job: understand the problem, choose a structure that holds, then write it.",
    "The part I'm best at is being the person who can follow a problem across layers instead of handing it over at the boundary. That tends to matter most on small teams, and on Arabic products, where the language shapes the interface rather than getting translated onto it.",
  ],
  paragraphsAr: [
    "أنا مهندسة برمجيات، خرّيجة هندسة تقنية المعلومات. أول نظامٍ حقيقي بنيته كان مشروع تخرّجي: تطبيق صحّي صمّمته في Figma وكتبته بـFlutter، وخلف واجهته العربية ثلاثة نماذج ذكاء اصطناعي.",
    "بعدها تنقّل عملي كثيراً. إعادة بناء تطبيق جوال أصلي على نظام تصميم ثنائي اللغة، ونظام Odoo يعمل داخل شركة، ومتاجر Shopify، وواجهات بـVue وبـHTML صِرف، وخدمات Python موصولة بالذكاء الاصطناعي. تقنيات مختلفة والعمل نفسه: أفهم المشكلة، وأختار بنيةً تصمد، ثم أكتبها.",
    "أفضل ما أُجيده أن أتابع المشكلة عبر الطبقات بدل أن أسلّمها عند الحدّ الفاصل. وهذا ينفع أكثر ما ينفع في الفرق الصغيرة، وفي المنتجات العربية التي تُبنى واجهتها على اللغة بدل أن تُترجَم إليها.",
  ],
  openTo: [
    "Software engineering roles, remote",
    "Mobile, web, or backend work",
    "Small teams shipping real products",
    "ERP and internal business systems",
  ],
  openToAr: [
    "أدوار هندسة برمجيات عن بُعد",
    "عمل على الجوال أو الويب أو الخادم",
    "فرق صغيرة تُطلق منتجات حقيقية",
    "أنظمة ERP والأنظمة الداخلية للشركات",
  ],
};

/* ------------------------------------------------------------ */
/*  Product thinking process — HOW I work, with real examples    */
/*  Each step pairs a method with a concrete decision from a     */
/*  shipped project (no new claims — drawn from the case studies).*/
/* ------------------------------------------------------------ */

export const processContent = {
  eyebrow: "How I work",
  eyebrowAr: "كيف أعمل",
  heading: "From a problem to a shipped product.",
  headingAr: "من مشكلة إلى منتجٍ جاهز للإطلاق.",
  intro:
    "Screens are the last thing I draw. I start with the problem and follow it all the way into production.",
  introAr:
    "الشاشات آخر ما أرسمه. أبدأ من المشكلة وأتابعها حتى الإنتاج.",
  steps: [
    {
      step: "01",
      title: "Discover",
      titleAr: "اكتشاف",
      body: "Who has the problem, and what it costs them, before any UI exists.",
      bodyAr: "من يعاني المشكلة، وما الذي تكلّفه، قبل وجود أي واجهة.",
      deliverables: ["User journeys", "Requirements spec", "Problem framing"],
      deliverablesAr: ["رحلات المستخدم", "وثيقة المتطلبات", "تأطير المشكلة"],
      tools: ["Figma", "IEEE 830"],
      outcome: "BloomBelly: four journeys mapped before a line of code.",
      outcomeAr: "BloomBelly: أربع رحلات رُسمت قبل أي سطر برمجي.",
    },
    {
      step: "02",
      title: "Design",
      titleAr: "تصميم",
      body: "Architecture and tradeoffs come before pixels.",
      bodyAr: "البنية والمفاضلات تسبق البكسل.",
      deliverables: ["IA & user flows", "Design System", "Hi-fi screens"],
      deliverablesAr: ["هندسة المعلومات والتدفقات", "نظام تصميم", "شاشات عالية الدقة"],
      tools: ["Figma", "Design tokens", "RTL"],
      outcome: "CareConnect: three audiences → three focused apps.",
      outcomeAr: "CareConnect: ثلاثة جماهير ← ثلاثة تطبيقات مركّزة.",
    },
    {
      step: "03",
      title: "Build",
      titleAr: "بناء",
      body: "I write what I designed: the front-end, the backend, the data model, the logic.",
      bodyAr: "أكتب ما صمّمته: الواجهة، والخادم، ونموذج البيانات، والمنطق.",
      deliverables: ["Flutter app", "Backend & schema", "AI / logic"],
      deliverablesAr: ["تطبيق Flutter", "الخادم والمخطّط", "ذكاء اصطناعي / منطق"],
      tools: ["Flutter", "Python", "Supabase", "Odoo"],
      outcome: "Mademoiselle: stalled prototype rebuilt on a 26+ component system.",
      outcomeAr: "Mademoiselle: نموذج متعثّر أُعيد بناؤه على نظام من 26+ مكوّناً.",
    },
    {
      step: "04",
      title: "Improve",
      titleAr: "تحسين",
      body: "Launch is where the real work starts: permissions, edge cases, handover.",
      bodyAr: "الإطلاق هو حيث يبدأ العمل الحقيقي: الصلاحيات، والحالات الحديّة، والتسليم.",
      deliverables: ["Access control", "Audit & logging", "Docs"],
      deliverablesAr: ["التحكّم بالوصول", "التدقيق والتسجيل", "توثيق"],
      tools: ["RLS", "Record rules", "Git"],
      outcome: "Smart Expense: role-based access at the data layer, open-sourced.",
      outcomeAr: "Smart Expense: وصول قائم على الأدوار في طبقة البيانات، مفتوح المصدر.",
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
  eyebrowAr: "الأنظمة والعمق التقني",
  heading: "The systems a company actually runs on.",
  headingAr: "الأنظمة التي تدير بها الشركة عملها فعلاً.",
  body: "Behind the apps sit the unglamorous systems: expenses, HR, payroll, attendance, point of sale, approval chains. I've built these in Odoo 19 for real companies, shaped around how each one already works rather than how the software wishes they did. One of them is open source and running today.",
  bodyAr:
    "خلف التطبيقات تقف الأنظمة غير البرّاقة: النفقات، والموارد البشرية، والرواتب، والحضور، ونقاط البيع، وسلاسل الموافقات. بنيتُ هذه بـOdoo 19 لشركاتٍ حقيقية، مصوغةً على طريقة عمل كل شركة كما هي لا كما يتمنّاها البرنامج. أحدها مفتوح المصدر ويعمل اليوم.",
  systems: [
    "Expense Management",
    "HR",
    "Payroll",
    "Attendance",
    "POS",
    "Approval Workflows",
  ],
  systemsAr: [
    "إدارة النفقات",
    "الموارد البشرية",
    "الرواتب",
    "الحضور",
    "نقاط البيع",
    "تدفّقات الموافقات",
  ],
  results: [
    { value: "Days → Secs", valueAr: "أيام ← ثوانٍ", label: "Expense approval time", labelAr: "زمن الموافقة على النفقات" },
    { value: "3-division", valueAr: "3 أقسام", label: "Company centralized", labelAr: "شركة موحّدة" },
    { value: "Open source", valueAr: "مفتوح المصدر", label: "Live on GitHub", labelAr: "حيّ على GitHub" },
  ],
  cta: { label: "Explore the systems work", labelAr: "استكشف أعمال الأنظمة", href: "/odoo" },
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
  labelAr?: string;
  /** Primary tech shown on the collapsed row. */
  tech: string;
  /** One-line role of this layer. */
  summary: string;
  summaryAr?: string;
  /** What lives in this layer — revealed on select. */
  items: string[];
  itemsAr?: string[];
  /** A real, shipped example that proves this layer. */
  example: { project: string; href: string; note: string; noteAr?: string };
};

export const architectureStack: {
  eyebrow: string;
  eyebrowAr: string;
  heading: string;
  headingAr: string;
  intro: string;
  introAr: string;
  layers: ArchLayer[];
} = {
  eyebrow: "Under the hood",
  eyebrowAr: "تحت الغطاء",
  heading: "Every layer, and where I built it.",
  headingAr: "كل طبقة، وأين بنيتُها.",
  intro:
    "Pick a layer to see what lives in it and which product it came from. Nothing here is theoretical; each one shipped.",
  introAr:
    "اختر طبقةً لترى ما فيها ومن أي منتجٍ جاءت. لا شيء هنا نظري؛ كل واحدةٍ منها أُطلقت فعلاً.",
  layers: [
    {
      id: "frontend",
      label: "Frontend",
      labelAr: "الواجهة الأمامية",
      tech: "Flutter · Dart",
      summary: "One codebase, iOS + Android, Arabic-first and RTL.",
      summaryAr: "قاعدة كود واحدة، iOS + Android، بالعربية أولاً ومن اليمين لليسار.",
      items: [
        "Cross-platform UI from a single Dart codebase",
        "Arabic-first RTL layouts, designed that way from the start",
        "A shared design system so screens don't drift apart",
        "State management, navigation, and offline-aware flows",
      ],
      itemsAr: [
        "واجهة متعدّدة المنصّات من قاعدة Dart واحدة",
        "تخطيطات عربية من اليمين لليسار، مصمّمة هكذا من البداية",
        "نظام تصميم مشترك كي لا تتباعد الشاشات",
        "إدارة الحالة، والتنقّل، وتدفّقات واعية بالعمل دون اتصال",
      ],
      example: {
        project: "CareConnect",
        href: "/projects/careconnect",
        note: "Three Flutter apps (mother, babysitter, admin) off one design system.",
        noteAr: "ثلاثة تطبيقات Flutter (أمّ، جليسة، مشرف) من نظام تصميم واحد.",
      },
    },
    {
      id: "backend",
      label: "Backend",
      labelAr: "الخادم",
      tech: "Python · Flask",
      summary: "An orchestration layer between the app and everything behind it.",
      summaryAr: "طبقة تنسيق بين التطبيق وكلّ ما خلفه.",
      items: [
        "REST APIs the mobile client talks to",
        "Request routing: intent → the right service",
        "Auth-gated endpoints and input validation",
        "Business logic kept off the client",
      ],
      itemsAr: [
        "واجهات REST يتحدّث إليها تطبيق الجوال",
        "توجيه الطلبات: النيّة ← الخدمة المناسبة",
        "نقاط نهاية محميّة بالمصادقة والتحقّق من المدخلات",
        "منطق العمل بعيداً عن العميل",
      ],
      example: {
        project: "BloomBelly",
        href: "/projects/bloombelly",
        note: "A Flask orchestrator routes each request to one of three AI models.",
        noteAr: "منسّق Flask يوجّه كل طلب إلى واحد من ثلاثة نماذج ذكاء اصطناعي.",
      },
    },
    {
      id: "data",
      label: "Database & Access",
      labelAr: "قاعدة البيانات والوصول",
      tech: "Supabase · PostgreSQL",
      summary: "One source of truth, with access rules the apps can't bypass.",
      summaryAr: "مصدر واحد للحقيقة، بقواعد وصولٍ لا تستطيع التطبيقات تجاوزها.",
      items: [
        "Relational schema as the single source of truth",
        "Row-level security (RLS) enforcing role boundaries",
        "Role-based access for mother, babysitter and admin",
        "Rules enforced in the database rather than in each app",
      ],
      itemsAr: [
        "مخطّط علائقي كمصدرٍ وحيد للحقيقة",
        "أمان على مستوى الصفّ (RLS) يفرض حدود الأدوار",
        "وصول قائم على الأدوار للأمّ والجليسة والمشرف",
        "القواعد مفروضة في قاعدة البيانات بدل كل تطبيق على حدة",
      ],
      example: {
        project: "CareConnect",
        href: "/projects/careconnect",
        note: "One Postgres + RLS, so three apps physically can't read each other's data.",
        noteAr: "قاعدة Postgres واحدة + RLS، فلا تستطيع التطبيقات الثلاثة فيزيائياً قراءة بيانات بعضها.",
      },
    },
    {
      id: "ai",
      label: "AI",
      labelAr: "الذكاء الاصطناعي",
      tech: "Gemini · LoRA · Random Forest",
      summary: "Three models, each for the job it's actually good at.",
      summaryAr: "ثلاثة نماذج، كلٌّ للمهمّة التي يجيدها فعلاً.",
      items: [
        "Vision understanding with Google Gemini",
        "Arabic Q&A via a LoRA-tuned transformer with calibrated refusals",
        "Nutrition scoring with a Random Forest model",
        "All orchestrated behind one Arabic-first interface",
      ],
      itemsAr: [
        "فهم بصري عبر Google Gemini",
        "أسئلة وأجوبة بالعربية عبر محوّل مضبوط بـLoRA مع رفضٍ معاير",
        "تقييم تغذوي بنموذج Random Forest",
        "الكلّ منسّق خلف واجهة عربية أولاً",
      ],
      example: {
        project: "BloomBelly",
        href: "/projects/bloombelly",
        note: "Three AI models behind a single maternal-health interface.",
        noteAr: "ثلاثة نماذج ذكاء اصطناعي خلف واجهة واحدة لصحة الأم.",
      },
    },
    {
      id: "systems",
      label: "Business Systems",
      labelAr: "أنظمة الأعمال",
      tech: "Odoo 19 · ORM · QWeb · OWL",
      summary: "The ERP and operations a business runs on day to day.",
      summaryAr: "نظام ERP والعمليات التي تدير بها الشركة يومها.",
      items: [
        "Custom Odoo modules: ORM models, QWeb, OWL components",
        "Token-secured email approval flows",
        "Auto-journaling on finance sign-off (account.move)",
        "Scheduled jobs and QWeb PDF digests",
      ],
      itemsAr: [
        "وحدات Odoo مخصّصة: نماذج ORM وQWeb ومكوّنات OWL",
        "تدفّقات موافقة بالبريد مؤمّنة برمز",
        "قيد محاسبي تلقائي عند اعتماد المالية (account.move)",
        "مهامّ مجدولة وملخّصات PDF عبر QWeb",
      ],
      example: {
        project: "Smart Expense Manager",
        href: "/projects/smart-expense",
        note: "Submit → approve → post, with the journal entry generated automatically.",
        noteAr: "تقديم ← موافقة ← ترحيل، مع توليد القيد المحاسبي تلقائياً.",
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
  tagAr?: string;
  /** The hook, phrased as a question. */
  question: string;
  questionAr?: string;
  /** The cheaper/common default I rejected. */
  easy: string;
  easyAr?: string;
  /** What I actually did, and why. */
  chose: string;
  choseAr?: string;
  /** The cost or trade-off I accepted. */
  tradeoff: string;
  tradeoffAr?: string;
  project: string;
  href: string;
};

export const decisionLog: {
  eyebrow: string;
  eyebrowAr: string;
  heading: string;
  headingAr: string;
  intro: string;
  introAr: string;
  decisions: Decision[];
} = {
  eyebrow: "Decision log",
  eyebrowAr: "سجلّ القرارات",
  heading: "The judgment behind the work.",
  headingAr: "الحُكم وراء العمل.",
  intro:
    "Anyone can list technologies. These are actual decisions from the projects: the cheap default I turned down, what I did instead, and what it cost me. Open any one.",
  introAr:
    "يستطيع أيّ أحدٍ سرد التقنيات. هذه قرارات فعلية من المشاريع: الخيار السهل الذي رفضته، وما فعلته بدلاً منه، وما كلّفني ذلك. افتح أيّاً منها.",
  decisions: [
    {
      id: "three-apps",
      tag: "Product",
      tagAr: "منتج",
      question: "Why three separate apps instead of one role-switching app?",
      questionAr: "لماذا ثلاثة تطبيقات منفصلة بدل تطبيق واحد بتبديل الأدوار؟",
      easy: "One app with a role switch is cheaper. You get a single codebase, one store listing, one onboarding flow. Most marketplaces ship exactly this way.",
      easyAr: "تطبيق واحد فيه مبدّل أدوار أرخص. قاعدة كودٍ واحدة، وإدراج واحد في المتجر، وتهيئة واحدة. هكذا تُطلق معظم المنصّات.",
      chose: "Three apps. A mother, a babysitter and an admin each open the app to do a completely different thing, and they don't share a vocabulary. Separating them meant each app could have navigation built for one job and a store listing that says what it does, with nobody reading “you are logged in as: Mother”.",
      choseAr: "ثلاثة تطبيقات. الأمّ والجليسة والمشرف يفتح كلٌّ منهم التطبيق لغرضٍ مختلف تماماً، ولا يتشاركون المفردات نفسها. فصلُهم سمح لكل تطبيقٍ بتنقّلٍ مبنيّ لمهمّةٍ واحدة وبإدراجٍ في المتجر يقول ما يفعله، دون أن يقرأ أحدٌ «أنتِ مسجَّلة الدخول كـ: أمّ».",
      tradeoff: "Higher initial build cost, but every surface stays honest to its audience.",
      tradeoffAr: "كلفة بناءٍ أولية أعلى، لكن كلّ واجهة تبقى أمينةً لجمهورها.",
      project: "CareConnect",
      href: "/projects/careconnect",
    },
    {
      id: "rls",
      tag: "Backend",
      tagAr: "خادم",
      question: "Why Supabase + RLS over Firebase + client-side guards?",
      questionAr: "لماذا Supabase + RLS بدل Firebase وحُرّاسٍ من جهة العميل؟",
      easy: "Firebase is what most student projects reach for, and auth plus Firestore is quick to wire up. Its security rules are a JSON dialect that's easy to get subtly wrong, though, and the client is something a determined user can modify.",
      easyAr: "Firebase ما تلجأ إليه معظم مشاريع الطلاب، وربط المصادقة مع Firestore سريع. لكن قواعد أمانه لهجة JSON يسهل أن تُخطئ فيها دون أن تنتبه، والعميل شيء يستطيع مستخدمٌ مصرّ أن يعدّله.",
      chose: "Postgres with Supabase row-level security. The policies are ordinary SQL, they run on every single query, and there's no client-side path around them. A mother's query cannot return another mother's bookings, no matter what the app asks for.",
      choseAr: "Postgres مع أمان مستوى الصف في Supabase. السياسات SQL عادية، تُنفَّذ مع كل استعلام، ولا يوجد طريق من جهة العميل يلتفّ حولها. استعلام أمٍّ لا يمكنه إعادة حجوزات أمٍّ أخرى مهما طلب التطبيق.",
      tradeoff: "More to operate, but the security model is something I can audit, and it's what made the three-app split safe to do at all.",
      tradeoffAr: "تشغيلٌ أثقل، لكن نموذج الأمان شيء أستطيع تدقيقه، وهو ما جعل فصل التطبيقات الثلاثة آمناً أصلاً.",
      project: "CareConnect",
      href: "/projects/careconnect",
    },
    {
      id: "three-models",
      tag: "AI",
      tagAr: "ذكاء اصطناعي",
      question: "Why three AI models instead of one capable LLM?",
      questionAr: "لماذا ثلاثة نماذج ذكاء اصطناعي بدل نموذجٍ لغوي واحد قادر؟",
      easy: "One fine-tuned LLM can answer questions, classify nutrition and describe images. That's a single model to train, a single screen, a single thing to deploy.",
      easyAr: "نموذج لغوي واحد مضبوط يستطيع الإجابة وتصنيف التغذية ووصف الصور. نموذج واحد تدرّبه، وشاشة واحدة، وشيء واحد تنشره.",
      chose: "Three specialized models: Gemini reads images, a LoRA-tuned transformer handles Arabic questions, and a Random Forest scores nutrition. Each one got its own screen, built around how that particular capability is actually used.",
      choseAr: "ثلاثة نماذج متخصّصة: Gemini يقرأ الصور، ومحوّل مضبوط بـLoRA يتولّى الأسئلة العربية، وRandom Forest يقيّم التغذية. لكل واحدٍ شاشته الخاصة، مبنيّة على الطريقة التي تُستخدم بها تلك القدرة فعلاً.",
      tradeoff: "Three things to maintain instead of one. In exchange each model can be audited on its own, which matters a lot in healthcare, and users reach for the right tool instead of one box that claims to do everything.",
      tradeoffAr: "ثلاثة أشياء تصونها بدل واحد. في المقابل يمكن تدقيق كل نموذجٍ على حدة، وهذا يهمّ كثيراً في الرعاية الصحية، ويذهب المستخدمون إلى الأداة الصحيحة بدل صندوقٍ واحد يدّعي أنه يفعل كل شيء.",
      project: "BloomBelly",
      href: "/projects/bloombelly",
    },
    {
      id: "refusals",
      tag: "AI",
      tagAr: "ذكاء اصطناعي",
      question: "Why design the AI's refusal as a feature, not an error?",
      questionAr: "لماذا صُمّم رفض الذكاء الاصطناعي كميزة، لا كخطأ؟",
      easy: "A confident chatbot that always answers demos well. But one that hallucinates dosages is dangerous in maternal care.",
      easyAr: "روبوت محادثة واثق يجيب دائماً يبدو جيداً في العروض. لكن الذي يهلوس الجرعات خطيرٌ في رعاية الأمومة.",
      chose: "Under a confidence threshold the bot says “Consult your doctor / استشيري طبيبتك”. I drew that state in Figma as a warm, proper screen with the same care as any other, so it reads as the app doing its job rather than a red error box.",
      choseAr: "تحت عتبة ثقةٍ معيّنة يقول الروبوت «استشيري طبيبتك». رسمتُ هذه الحالة في Figma كشاشةٍ دافئة كاملة بالعناية نفسها التي أعطيها لأي شاشة، لتُقرأ كأداءٍ سليم للتطبيق لا كصندوق خطأ أحمر.",
      tradeoff: "It demos less impressively. It's also the version I'd be willing to put in front of a real pregnant woman, which is the only test that mattered here.",
      tradeoffAr: "يبدو أقلّ إبهاراً في العرض. وهو أيضاً النسخة التي أقبل أن أضعها أمام امرأةٍ حاملٍ حقيقية، وهذا الاختبار الوحيد الذي كان يهمّ هنا.",
      project: "BloomBelly",
      href: "/projects/bloombelly",
    },
    {
      id: "journal-on-approval",
      tag: "Systems",
      tagAr: "أنظمة",
      question: "Why post the journal entry on approval, not on submission?",
      questionAr: "لماذا يُرحَّل القيد المحاسبي عند الموافقة، لا عند التقديم؟",
      easy: "Creating the journal entry the moment an employee hits submit gives you a simpler state machine.",
      easyAr: "توليد القيد لحظة يضغط الموظّف «تقديم» يمنحك آلة حالاتٍ أبسط.",
      chose: "The account.move only appears when finance approves. Before that the request is an HR record and nothing more.",
      choseAr: "لا يظهر account.move إلا عندما توافق المالية. قبل ذلك الطلب سجلّ موارد بشرية ولا شيء غير ذلك.",
      tradeoff: "One more state to manage. In return the ledger stays clean: an accountant only ever sees entries that represent a real liability, and never has to reverse something that was never approved.",
      tradeoffAr: "حالةٌ إضافية تديرها. في المقابل يبقى دفتر الأستاذ نظيفاً: لا يرى المحاسب إلا قيوداً تمثّل التزاماً حقيقياً، ولا يحتاج أبداً إلى عكس قيدٍ لم يُعتمد أصلاً.",
      project: "Smart Expense Manager",
      href: "/projects/smart-expense",
    },
    {
      id: "rtl-native",
      tag: "Design",
      tagAr: "تصميم",
      question: "Why design RTL-native instead of mirroring the LTR layout?",
      questionAr: "لماذا التصميم بالعربية أصلاً بدل عكس تخطيط اليسار لليمين؟",
      easy: "Most teams ship RTL as a mirror of the English layout. You flip the direction, swap a few icons, and call it done. Arabic readers can always tell.",
      easyAr: "معظم الفرق تُطلق العربية كمرآةٍ للتخطيط الإنجليزي. تقلب الاتجاه، وتبدّل بعض الأيقونات، وتعتبر الأمر منتهياً. والقارئ العربي يعرف ذلك دائماً.",
      chose: "I drew the Figma file and every Flutter screen in Arabic first. Reading order, hierarchy, spacing and icon choices were all decided while looking at Arabic, and English came afterwards.",
      choseAr: "رسمتُ ملف Figma وكل شاشة Flutter بالعربية أولاً. ترتيب القراءة والتسلسل والتباعد واختيار الأيقونات كلها قُرّرت وأنا أنظر إلى العربية، والإنجليزية جاءت بعدها.",
      tradeoff: "Designing in two directions takes longer. The payoff is that the Arabic version reads like the original, because that's what it is.",
      tradeoffAr: "التصميم باتجاهين يستغرق وقتاً أطول. والمقابل أن النسخة العربية تُقرأ كالأصل، لأنها هي الأصل.",
      project: "Mademoiselle",
      href: "/projects/mademoiselle",
    },
  ],
};

/* ------------------------------------------------------------ */
/*  Education & certifications                                    */
/*  Replaces the old growing milestone timeline. Education is     */
/*  fixed; certifications is a bounded, naturally-short list.     */
/* ------------------------------------------------------------ */

export type CredentialLink = { label: string; labelAr?: string; href: string };

export type Certification = {
  title: string;
  titleAr?: string;
  issuer: string;
  issuerAr?: string;
  year: string;
  /** Certificate scan — drop in /public, e.g. /work/certs/odoo.webp. Until it
   *  exists the modal shows a labelled placeholder. */
  image?: string;
  /** Work this credential is backed by — shown beside the certificate. */
  related?: CredentialLink[];
};

export type Education = {
  degree: string;
  degreeAr?: string;
  school: string;
  schoolAr?: string;
  year: string;
  note?: string;
  noteAr?: string;
  /** Optional diploma/transcript image (e.g. /work/certs/degree.webp). */
  image?: string;
  related?: CredentialLink[];
};

export const educationChapter: {
  education: Education;
  certifications: Certification[];
} = {
  education: {
    degree: "B.Sc. Information Technology Engineering",
    degreeAr: "بكالوريوس هندسة تقنية المعلومات",
    school: "Al-Sham Private University (ASPU)",
    schoolAr: "جامعة الشام الخاصة (ASPU)",
    year: "2025",
    note: "Graduation thesis: BloomBelly, an Arabic maternal-health app with three AI models behind it, designed in Figma and written in Flutter.",
    noteAr: "مشروع التخرّج: BloomBelly، تطبيق صحّة أمومة عربي خلفه ثلاثة نماذج ذكاء اصطناعي، صُمّم في Figma وكُتب بـFlutter.",
    // image: "/work/certs/degree.webp",
    related: [
      { label: "BloomBelly — graduation thesis", labelAr: "BloomBelly — مشروع التخرّج", href: "/projects/bloombelly" },
    ],
  },
  certifications: [
    {
      title: "Odoo Functional Certification",
      titleAr: "شهادة Odoo الوظيفية",
      issuer: "Odoo S.A.",
      issuerAr: "Odoo S.A.",
      year: "2025",
      // image: "/work/certs/odoo.webp",
      related: [
        { label: "Techno Solution — ERP", labelAr: "Techno Solution — نظام ERP", href: "/projects/techno-solution" },
        { label: "Burgasm — restaurant on Odoo", labelAr: "Burgasm — مطعم على Odoo", href: "/projects/burgasm" },
        { label: "ERP & Odoo systems hub", labelAr: "مركز أنظمة ERP وOdoo", href: "/odoo" },
      ],
    },
    {
      title: "1 Million Prompters",
      titleAr: "مليون مُحفِّز (1 Million Prompters)",
      issuer: "Dubai Future Foundation",
      issuerAr: "مؤسسة دبي للمستقبل",
      year: "2025",
      // image: "/work/certs/prompters.webp",
      related: [
        { label: "BloomBelly — three AI models", labelAr: "BloomBelly — ثلاثة نماذج ذكاء اصطناعي", href: "/projects/bloombelly" },
      ],
    },
    {
      title: "AI Fluency: Framework & Foundations",
      titleAr: "AI Fluency: الإطار والأسس",
      issuer: "Anthropic",
      issuerAr: "Anthropic",
      year: "2026",
    },
  ],
};

/* ------------------------------------------------------------ */
/*  Contact                                                      */
/* ------------------------------------------------------------ */

export const outroContent = {
  eyebrow: "Contact",
  title: "Let's talk.",
  body: "I'm open to software engineering roles, remote ones especially, and to small teams building something real. Email reaches me fastest.",
  contacts: [
    {
      label: "Email",
      labelAr: "البريد",
      value: "moznjamous9@gmail.com",
      href: "mailto:moznjamous9@gmail.com",
    },
    {
      label: "LinkedIn",
      labelAr: "LinkedIn",
      value: "linkedin.com/in/mozn-jamous",
      href: "https://linkedin.com/in/mozn-jamous",
      external: true,
    },
    {
      label: "GitHub",
      labelAr: "GitHub",
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
  /** Arabic siblings (rendered via <T>; fall back to English if absent). */
  roleAr?: string;
  industryAr?: string;
  impactAr?: string;
  summaryAr?: string;
  /** Optional mockup image path (else a labelled Figure slot renders). */
  cover?: string;
  /** Client/brand website (vanilla HTML/CSS/JS). Shown in the full /projects
   *  gallery, but filtered OUT of the home "Selected work" grid so the home
   *  preview stays focused on the core product apps. */
  clientSite?: boolean;
};

export const projectsIndex: ProjectIndexEntry[] = [
  {
    name: "Mademoiselle",
    href: "/projects/mademoiselle",
    cover: "/work/mademoiselle/cover.webp",
    year: "2026",
    role: "Lead engineer + designer",
    roleAr: "مهندسة رئيسية + مصمّمة",
    industry: "Commerce · Beauty",
    industryAr: "تجارة · تجميل",
    impact: "Stalled FlutterFlow prototype → live native app",
    impactAr: "نموذج FlutterFlow متعثّر ← تطبيق أصلي حيّ",
    summary:
      "A dormant FlutterFlow prototype rewritten as a native Flutter app, on a bilingual design system of 26+ components across three themes.",
    summaryAr:
      "نموذج FlutterFlow خامل أُعيد كتابته تطبيقَ Flutter أصلياً، على نظام تصميم ثنائي اللغة من أكثر من 26 مكوّناً بثلاث سمات.",
  },
  {
    name: "BloomBelly",
    href: "/projects/bloombelly",
    cover: "/work/bloombelly/cover.webp",
    year: "2025",
    role: "Engineer + designer",
    roleAr: "مهندسة + مصمّمة",
    industry: "Healthcare",
    industryAr: "رعاية صحية",
    impact: "Three AI models behind one Arabic app",
    impactAr: "ثلاثة نماذج ذكاء اصطناعي خلف تطبيق عربي",
    summary:
      "My graduation project: an Arabic maternal-health app I designed in Figma and wrote in Flutter, with a Python service and three AI models behind it.",
    summaryAr:
      "مشروع تخرّجي: تطبيق صحّة أمومة عربي صمّمته في Figma وكتبته بـFlutter، وخلفه خدمة Python وثلاثة نماذج ذكاء اصطناعي.",
  },
  {
    name: "CareConnect",
    href: "/projects/careconnect",
    cover: "/work/careconnect/cover.webp",
    year: "2024",
    role: "Engineer + designer",
    roleAr: "مهندسة + مصمّمة",
    industry: "Childcare marketplace",
    industryAr: "سوق رعاية أطفال",
    impact: "Three apps, one backend, isolation proved in SQL",
    impactAr: "ثلاثة تطبيقات، خادم واحد، والعزل مُثبت بـSQL",
    summary:
      "A childcare marketplace built as three separate apps over one Supabase backend, where the permission rules live in the database instead of the client.",
    summaryAr:
      "سوق رعاية أطفال بُني كثلاثة تطبيقات منفصلة على خادم Supabase واحد، وقواعد الصلاحيات فيه تعيش في قاعدة البيانات لا في العميل.",
  },
  {
    name: "Eda",
    href: "/projects/eda",
    cover: "/work/eda/cover.webp",
    year: "2026",
    role: "Designer + QA engineer",
    roleAr: "مصمّمة + مهندسة اختبار",
    industry: "Healthcare · Multi-tenant",
    industryAr: "رعاية صحية · متعدّد المستأجرين",
    impact: "Verified one clinic can't read another's data",
    impactAr: "تحقّقتُ أن عيادةً لا تستطيع قراءة بيانات أخرى",
    summary:
      "A multi-tenant clinics platform: three Flutter apps on a NestJS backend. I designed the screens and ran the testing, including whether the separation between clinics actually held.",
    summaryAr:
      "منصّة عيادات متعدّدة المستأجرين: ثلاثة تطبيقات Flutter على خادم NestJS. صمّمتُ الشاشات وتوليتُ الاختبار، ومنه ما إذا كان الفصل بين العيادات صامداً فعلاً.",
  },
  {
    name: "Blatos",
    href: "/projects/blatos",
    cover: "/work/blatos/cover.webp",
    year: "2026",
    role: "Full-stack engineer (team of two)",
    roleAr: "مهندسة Full-stack (فريق من اثنين)",
    industry: "SaaS · AI",
    industryAr: "SaaS · ذكاء اصطناعي",
    impact: "An AI bot per shop, 15 tools, five languages",
    impactAr: "بوت ذكاء لكل متجر، 15 أداة، بخمس لغات",
    summary:
      "A multi-tenant SaaS for online shops, built by two of us. The core logic and the AI design belong to a collaborating engineer. I wrote the FastAPI and PostgreSQL backend, the Vue 3 dashboard, and the integration of each shop's Telegram assistant.",
    summaryAr:
      "نظام SaaS متعدّد المستأجرين للمتاجر الإلكترونية، بنيناه اثنين. منطق النظام وتصميم الذكاء لمهندسٍ مشارك. أنا كتبتُ خادم FastAPI وPostgreSQL، ولوحة Vue 3، ودمج مساعد Telegram لكل متجر.",
  },
  {
    name: "Veghnar Tonvair",
    href: "/projects/veghnar-tonvair",
    cover: "/work/veghnar/cover.webp",
    year: "2026",
    role: "Designer + storefront engineer",
    roleAr: "مصمّمة + مهندسة متجر",
    industry: "Fragrance · E-commerce",
    industryAr: "عطور · تجارة إلكترونية",
    impact: "A client brand book turned into a live Arabic store",
    impactAr: "دليل هوية العميل صار متجراً عربياً حيّاً",
    summary:
      "A fragrance house's Shopify storefront, redesigned from scratch. I turned the client's brand book into a single stylesheet the whole shop reads from, built a four-face Arabic and Latin type system, and wrote product patterns that suit perfume.",
    summaryAr:
      "واجهة متجر Shopify لبيت عطور، أُعيد تصميمها من الصفر. حوّلتُ دليل هوية العميل إلى ملف أنماطٍ واحد يقرأ منه المتجر كله، وبنيتُ نظاماً طباعياً من أربعة خطوط عربية ولاتينية، وكتبتُ أنماط منتجٍ تناسب العطر.",
    clientSite: true,
  },
  {
    name: "Pharmacology",
    href: "/projects/pharmacology",
    cover: "/work/pharmacology/cover.webp",
    year: "2026",
    role: "Designer + front-end engineer",
    roleAr: "مصمّمة + مهندسة واجهة",
    industry: "Clinical nutrition · Web",
    industryAr: "تغذية سريرية · ويب",
    impact: "25 bilingual RTL pages on one token system",
    impactAr: "25 صفحة ثنائية اللغة على نظام رموزٍ واحد",
    summary:
      "A clinical-nutrition brand's site, redesigned and rewritten from scratch in plain HTML, CSS and JavaScript. Arabic first, bilingual throughout, with the forms wired to Supabase.",
    summaryAr:
      "موقع علامة تغذية سريرية، أُعيد تصميمه وكتابته من الصفر بـHTML وCSS وJavaScript صِرف. عربي أولاً، ثنائي اللغة في كل صفحة، ونماذجه موصولة بـSupabase.",
    clientSite: true,
  },
  {
    name: "Divano",
    href: "/projects/divano",
    year: "2026",
    role: "Designer + front-end engineer",
    roleAr: "مصمّمة + مهندسة واجهة",
    industry: "Interior design · Web",
    industryAr: "تصميم داخلي · ويب",
    impact: "86 external font requests down to zero",
    impactAr: "86 طلب خطوط خارجياً نزلت إلى صفر",
    summary:
      "A Dubai interior-design firm's site, taken page by page off its WordPress origins with the Santa Media team. An editorial redesign, a self-hosted bilingual typeface that replaced 86 Google Fonts links, and a rule that every before/after pair had to be the same room.",
    summaryAr:
      "موقع شركة تصميم داخلي في دبي، نقلناه صفحةً صفحة عن أصله الووردبريسي مع فريق Santa Media. إعادة تصميم تحريرية، وخطّ ثنائي اللغة مستضاف ذاتياً حلّ محلّ 86 رابط Google Fonts، وقاعدة تفرض أن يكون كل زوج «قبل/بعد» للغرفة نفسها.",
    cover: "/work/divano/cover.webp",
    clientSite: true,
  },
  // NOTE: ERP/Odoo work (Techno Solution, Burgasm, Smart Expense, Takhrjy) is
  // kept SEPARATE from this product/design grid — it lives on the /odoo hub, NOT
  // here. Never mix ERP entries into this developer-projects index or its grid;
  // the /projects page links to the hub via a labelled CTA only.
];

/* ------------------------------------------------------------ */
/*  About page — full story (/about)                             */
/*  Intro is `summary` below (aboutContent.paragraphs is a       */
/*  longer-form spare, not currently rendered); timeline reuses   */
/*  journeyChapter. Tools are an ecosystem (chips), NOT bars.     */
/* ------------------------------------------------------------ */

export const aboutPageContent = {
  eyebrow: "About",
  eyebrowAr: "عنّي",
  title: "The person behind the work.",
  titleAr: "الشخص وراء العمل.",
  /** Short summary beside the portrait slot. */
  summary:
    "I'm a software engineer and an Information Technology Engineering graduate. I've worked on mobile apps, web front-ends, Python services, AI features, and the ERP systems companies run their operations on. I'm at my most useful on a small team, where the person who designs a thing is also the one who has to make it work.",
  summaryAr:
    "أنا مهندسة برمجيات وخرّيجة هندسة تقنية المعلومات. عملتُ على تطبيقات الجوال، وواجهات الويب، وخدمات Python، وميزات الذكاء الاصطناعي، وأنظمة ERP التي تدير بها الشركات عملياتها. أنفع ما أكون في فريقٍ صغير، حيث يكون من يصمّم الشيء هو نفسه من عليه أن يجعله يعمل.",
  philosophy: [
    {
      title: "Start with the problem",
      titleAr: "ابدأ من المشكلة",
      body: "Before I open Figma or an editor I want to know who's stuck and what it costs them. Most of the choices I make later are answers to that.",
      bodyAr: "قبل أن أفتح Figma أو المحرّر أريد أن أعرف من المتعثّر وما الذي يكلّفه ذلك. معظم قراراتي بعد ذلك إجابات على هذا السؤال.",
    },
    {
      title: "Follow it across layers",
      titleAr: "تابعها عبر الطبقات",
      body: "A screen sits on an API, a data model, and a permission rule. I'd rather understand all four than fix one and hand the rest over.",
      bodyAr: "الشاشة تقف على واجهة برمجية ونموذج بيانات وقاعدة صلاحيات. أفضّل أن أفهم الأربعة على أن أُصلح واحداً وأسلّم الباقي.",
    },
    {
      title: "Put rules where they hold",
      titleAr: "ضع القواعد حيث تصمد",
      body: "If a rule matters, it belongs in the database or the server, somewhere a client can't talk its way around it.",
      bodyAr: "إن كانت القاعدة مهمّة فمكانها قاعدة البيانات أو الخادم، حيث لا يستطيع العميل الالتفاف عليها.",
    },
    {
      title: "Leave it maintainable",
      titleAr: "اتركه قابلاً للصيانة",
      body: "I design the failure states, and I try to leave code the next person can keep running without calling me.",
      bodyAr: "أصمّم حالات الفشل، وأحاول أن أترك كوداً يستطيع من يأتي بعدي أن يبقيه شغّالاً دون أن يتّصل بي.",
    },
  ],
  /** Tools grouped by area — rendered as chips, never progress bars. */
  tools: [
    { area: "Design", areaAr: "تصميم", items: ["Figma", "Design Systems", "Prototyping", "Arabic UX", "RTL", "Accessibility"], itemsAr: ["Figma", "أنظمة تصميم", "نماذج أولية", "تجربة عربية", "RTL", "إتاحة"] },
    { area: "Mobile", areaAr: "جوال", items: ["Flutter", "Dart", "iOS + Android", "FlutterFlow", "Capacitor", "PWA"], itemsAr: ["Flutter", "Dart", "iOS + Android", "FlutterFlow", "Capacitor", "PWA"] },
    { area: "Web", areaAr: "ويب", items: ["Vue 3", "HTML/CSS/JS", "Tailwind"], itemsAr: ["Vue 3", "HTML/CSS/JS", "Tailwind"] },
    { area: "Backend", areaAr: "خادم", items: ["Python", "FastAPI", "Flask", "SQLAlchemy", "Supabase", "Firebase", "PostgreSQL", "Redis", "JWT", "REST APIs"], itemsAr: ["Python", "FastAPI", "Flask", "SQLAlchemy", "Supabase", "Firebase", "PostgreSQL", "Redis", "JWT", "واجهات REST"] },
    { area: "AI", areaAr: "ذكاء اصطناعي", items: ["Google Gemini", "LoRA-tuned models", "scikit-learn", "Function-calling LLMs"], itemsAr: ["Google Gemini", "نماذج مضبوطة بـLoRA", "scikit-learn", "استدعاء دوال LLM"] },
    { area: "Systems", areaAr: "أنظمة", items: ["Odoo 19", "ORM", "QWeb", "OWL", "POS · HR · Payroll"], itemsAr: ["Odoo 19", "ORM", "QWeb", "OWL", "نقاط بيع · موارد بشرية · رواتب"] },
  ],
};

/* ------------------------------------------------------------ */
/*  Contact page — dedicated (/contact)                          */
/* ------------------------------------------------------------ */

export const contactPageContent = {
  eyebrow: "Contact",
  eyebrowAr: "تواصل",
  title: "Let's build something meaningful.",
  titleAr: "لنصنع شيئاً ذا معنى.",
  body: "I'm open to software engineering roles, remote ones especially. Mobile, web, backend, or internal systems all interest me, and I'm glad to talk about anything Arabic or bilingual.",
  bodyAr:
    "منفتحة على أدوار هندسة البرمجيات، وخصوصاً عن بُعد. يهمّني العمل على الجوال أو الويب أو الخادم أو الأنظمة الداخلية، ويسعدني الحديث عن أي منتجٍ عربي أو ثنائي اللغة.",
  availability: "Open to new roles & freelance",
  availabilityAr: "متاحة لأدوار جديدة وعمل حر",
  responseTime: "Usually replies within a day",
  responseTimeAr: "أردّ عادةً خلال يوم",
  /** Reuses the same contact links as the home outro. */
  contacts: outroContent.contacts,
  resume: { label: "Download résumé", labelAr: "حمّل السيرة الذاتية", href: "/cv" },
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

