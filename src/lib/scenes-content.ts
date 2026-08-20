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
  subtitle: "End-to-End Product Builder",
  subtitleAr: "صناعة منتجات من الفكرة إلى الإطلاق",
  /** Small label above the headline. */
  eyebrow: "Product Designer + Engineer",
  eyebrowAr: "مصمِّمة ومهندسة منتجات",
  location: "Damascus, Syria",
  locationAr: "دمشق، سوريا",
  /** Status pill at the top of the hero. */
  status: "Designing & building product at Santa Media",
  statusAr: "أصمّم وأبني المنتج في Santa Media",
  /** Big headline — `accent` renders in the rose→blue gradient. */
  headlineLead: "End-to-End",
  headlineLeadAr: "من الفكرة",
  headlineAccent: "Product Builder.",
  headlineAccentAr: "إلى منتجٍ حيّ.",
  subheading:
    "I design products, build the mobile apps, and engineer the systems behind them.",
  subheadingAr:
    "أُصمّم المنتجات، وأبني تطبيقات الجوال، وأهندس الأنظمة التي تقف خلفها.",
  intro:
    "From research and UX through Flutter development, AI integration, and business operations systems — I take products from idea to shipped reality.",
  introAr:
    "من البحث وتجربة المستخدم، إلى تطوير Flutter ودمج الذكاء الاصطناعي وأنظمة إدارة الأعمال — آخذ المنتج من الفكرة إلى واقعٍ مُطلَق.",
  /** Credibility row — honest, defensible proof points (no invented metrics). */
  stats: [
    { key: "projects", value: "3", valueAr: "3", label: "Products designed & built", labelAr: "منتجات صُمّمت وبُنيت" },
    { key: "fullstack", value: "1", valueAr: "1", label: "Production ERP implementation", labelAr: "نظام ERP في الإنتاج" },
    { key: "domains", value: "3", valueAr: "3", label: "AI-powered product experiences", labelAr: "تجارب منتج بالذكاء الاصطناعي" },
    { key: "years", value: "Design → Dev → Deploy", valueAr: "تصميم ← تطوير ← إطلاق", label: "Owned end-to-end", labelAr: "ملكية كاملة من البداية للنهاية" },
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
    "I'm a product builder with an Information Technology Engineering degree and a design-first way of working. I started by building a healthcare app for my graduation thesis — designed in Figma, built end-to-end in Flutter, with three AI models behind an Arabic-first interface.",
    "Since then I've worked across the full line of a product: the interface, the Flutter app, the backend, the AI integration, and the business systems products run on — a bilingual Design System, a mobile rebuild, and a production Odoo ERP, all within the last year.",
    "I'm most useful to small teams that need one person who can research a problem, design the solution, and ship it — especially for Arabic-first or bilingual products.",
  ],
  openTo: [
    "Product engineer / product designer — remote",
    "Mobile product design & Flutter development",
    "Early-stage product teams",
    "ERP / Odoo & business systems",
  ],
  openToAr: [
    "مهندسة / مصمّمة منتجات — عن بُعد",
    "تصميم منتجات الجوال وتطوير Flutter",
    "فرق المنتجات الناشئة",
    "أنظمة ERP / Odoo وأنظمة الأعمال",
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
    "I don't start with screens. I start with the problem, decide what to build and why, then take it all the way to production — and keep it running.",
  introAr:
    "لا أبدأ بالشاشات. أبدأ بالمشكلة، وأقرّر ما الذي أبنيه ولماذا، ثم آخذه حتى الإنتاج — وأبقيه يعمل.",
  steps: [
    {
      step: "01",
      title: "Discover",
      titleAr: "اكتشاف",
      body: "Work out who has the problem and what's actually at stake — before any UI.",
      bodyAr: "أحدّد من يعاني المشكلة وما المعرّض للخطر فعلاً — قبل أي واجهة.",
      deliverables: ["User journeys", "Requirements spec", "Problem framing"],
      deliverablesAr: ["رحلات المستخدم", "وثيقة المتطلبات", "تأطير المشكلة"],
      tools: ["Figma", "IEEE 830"],
      outcome: "BloomBelly: four maternal-health journeys mapped before a line of code.",
      outcomeAr: "BloomBelly: أربع رحلات لصحة الأم رُسمت قبل أي سطر برمجي.",
    },
    {
      step: "02",
      title: "Design",
      titleAr: "تصميم",
      body: "Decide the architecture and the tradeoffs first; information architecture before pixels.",
      bodyAr: "أحسم البنية والمفاضلات أولاً؛ هندسة المعلومات قبل البكسل.",
      deliverables: ["IA & user flows", "Design System", "Hi-fi screens"],
      deliverablesAr: ["هندسة المعلومات والتدفقات", "نظام تصميم", "شاشات عالية الدقة"],
      tools: ["Figma", "Design tokens", "RTL"],
      outcome: "CareConnect: three audiences → three focused apps, not one role-switcher.",
      outcomeAr: "CareConnect: ثلاثة جماهير ← ثلاثة تطبيقات مركّزة، لا تطبيقاً واحداً بتبديل الأدوار.",
    },
    {
      step: "03",
      title: "Build",
      titleAr: "بناء",
      body: "Implement what I designed — the Flutter front-end, the backend and data model, the AI or business logic.",
      bodyAr: "أنفّذ ما صمّمته — واجهة Flutter، والخادم ونموذج البيانات، والذكاء الاصطناعي أو منطق العمل.",
      deliverables: ["Flutter app", "Backend & schema", "AI / logic"],
      deliverablesAr: ["تطبيق Flutter", "الخادم والمخطّط", "ذكاء اصطناعي / منطق"],
      tools: ["Flutter", "Python", "Supabase", "Odoo"],
      outcome: "Mademoiselle: stalled prototype rebuilt natively on a 26+ component system.",
      outcomeAr: "Mademoiselle: نموذج متعثّر أُعيد بناؤه أصلياً على نظام من 26+ مكوّناً.",
    },
    {
      step: "04",
      title: "Improve",
      titleAr: "تحسين",
      body: "Shipping is the start — access control, edge cases, and whether the next person can keep it alive.",
      bodyAr: "الإطلاق هو البداية — التحكّم بالوصول، والحالات الحديّة، وهل يستطيع من يأتي بعدي إبقاءه حياً.",
      deliverables: ["Access control", "Audit & logging", "Docs"],
      deliverablesAr: ["التحكّم بالوصول", "التدقيق والتسجيل", "توثيق"],
      tools: ["RLS", "Record rules", "Git"],
      outcome: "Smart Expense: role-based access at the data layer, open-sourced under LGPL-3.0.",
      outcomeAr: "Smart Expense: وصول قائم على الأدوار في طبقة البيانات، مفتوح المصدر تحت LGPL-3.0.",
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
  heading: "I build the systems products run on, not just their screens.",
  headingAr: "أبني الأنظمة التي تشتغل عليها المنتجات، لا شاشاتها فقط.",
  body: "The same products need backends, data models, access control, and the business operations behind them. I've built production Odoo 19 systems for real companies — expense management, HR, payroll, attendance, POS, and approval workflows — designed around how each business actually works. One is open source and live.",
  bodyAr:
    "تحتاج المنتجات ذاتها إلى خوادم ونماذج بيانات وتحكّمٍ بالوصول وعمليات الأعمال خلفها. بنيتُ أنظمة Odoo 19 إنتاجية لشركات حقيقية — إدارة النفقات، والموارد البشرية، والرواتب، والحضور، ونقاط البيع، وتدفّقات الموافقات — مصمّمة حول طريقة عمل كل شركة فعلاً. أحدها مفتوح المصدر وقيد التشغيل.",
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
  heading: "I design the whole line, not just the screens.",
  headingAr: "أصمّم الخطّ كاملاً، لا الشاشات وحدها.",
  intro:
    "Select a layer to see what's in it — and the product it came from. This is one stack; every layer is something I've actually built, not theory.",
  introAr:
    "اختر طبقةً لترى ما فيها — والمنتج الذي جاءت منه. هذه طبقة واحدة؛ كل طبقة شيء بنيته فعلاً، لا نظريّة.",
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
        "Arabic-first / RTL layouts — not bolted-on translation",
        "A shared design system so screens never drift",
        "State management, navigation, and offline-aware flows",
      ],
      itemsAr: [
        "واجهة متعدّدة المنصّات من قاعدة Dart واحدة",
        "تخطيطات عربية أولاً / من اليمين لليسار — لا ترجمة مُلصَقة لاحقاً",
        "نظام تصميم مشترك كي لا تنحرف الشاشات أبداً",
        "إدارة الحالة، والتنقّل، وتدفّقات واعية بالعمل دون اتصال",
      ],
      example: {
        project: "CareConnect",
        href: "/projects/careconnect",
        note: "Three Flutter apps — mother · babysitter · admin — from one design system.",
        noteAr: "ثلاثة تطبيقات Flutter — أمّ · جليسة · مشرف — من نظام تصميم واحد.",
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
        "Role-based access — mother / babysitter / admin",
        "Rules enforced in the database, not in each app",
      ],
      itemsAr: [
        "مخطّط علائقي كمصدرٍ وحيد للحقيقة",
        "أمان على مستوى الصفّ (RLS) يفرض حدود الأدوار",
        "وصول قائم على الأدوار — أمّ / جليسة / مشرف",
        "القواعد مفروضة في قاعدة البيانات، لا في كل تطبيق",
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
        "Custom Odoo modules — ORM models, QWeb, OWL components",
        "Token-secured email approval flows",
        "Auto-journaling on finance sign-off (account.move)",
        "Scheduled jobs and QWeb PDF digests",
      ],
      itemsAr: [
        "وحدات Odoo مخصّصة — نماذج ORM وQWeb ومكوّنات OWL",
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
    "Anyone can list technologies. These are real decisions from the projects — the cheaper default I turned down, the call I made instead, and what it cost. Open any one.",
  introAr:
    "يستطيع أيّ أحدٍ سرد التقنيات. هذه قرارات حقيقية من المشاريع — الخيار الأرخص الذي رفضته، والقرار الذي اتخذته بدلاً منه، وما كلّفني. افتح أيّاً منها.",
  decisions: [
    {
      id: "three-apps",
      tag: "Product",
      tagAr: "منتج",
      question: "Why three separate apps instead of one role-switching app?",
      questionAr: "لماذا ثلاثة تطبيقات منفصلة بدل تطبيق واحد بتبديل الأدوار؟",
      easy: "A single app with role-switching is cheaper to build — one codebase, one store listing, one onboarding. Most marketplaces ship this way.",
      easyAr: "تطبيق واحد بتبديل الأدوار أرخص في البناء — قاعدة كودٍ واحدة، إدراج واحد في المتجر، تهيئة واحدة. معظم المنصّات تُطلق هكذا.",
      chose: "Three apps. Each audience has a different primary action and vocabulary, so each gets a focused navigation and a store listing that says exactly what it does — no “you are logged in as: Mother” cognitive load.",
      choseAr: "ثلاثة تطبيقات. لكلّ جمهور فعلٌ أساسي ومفردات مختلفة، فيحصل كلٌّ على تنقّلٍ مركّز وإدراجٍ في المتجر يقول تماماً ما يفعله — دون عبءٍ ذهني من نوع «أنتِ مسجَّلة الدخول كـ: أمّ».",
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
      easy: "Firebase is the default for student marketplaces — auth + Firestore is fast to wire. But its security rules are a JSON DSL that's easy to get subtly wrong, and the client can be modified.",
      easyAr: "Firebase هو الخيار الافتراضي لمنصّات الطلاب — المصادقة + Firestore سريعة الربط. لكن قواعد أمانها لغة JSON يسهل الخطأ فيها بدقّة، والعميل قابل للتعديل.",
      chose: "Postgres + Supabase RLS. Policies are real SQL, run on every query, and can't be bypassed from the client — a mother's query physically cannot return another mother's bookings.",
      choseAr: "Postgres + Supabase RLS. السياسات SQL حقيقية، تُنفَّذ مع كلّ استعلام، ولا يمكن تجاوزها من العميل — استعلام أمٍّ لا يمكنه فيزيائياً إعادة حجوزات أمٍّ أخرى.",
      tradeoff: "More operational overhead, but the security model is auditable, and it's what made the three-app design viable.",
      tradeoffAr: "عبءٌ تشغيلي أكبر، لكن نموذج الأمان قابلٌ للتدقيق، وهو ما جعل تصميم التطبيقات الثلاثة ممكناً.",
      project: "CareConnect",
      href: "/projects/careconnect",
    },
    {
      id: "three-models",
      tag: "AI",
      tagAr: "ذكاء اصطناعي",
      question: "Why three AI models instead of one capable LLM?",
      questionAr: "لماذا ثلاثة نماذج ذكاء اصطناعي بدل نموذجٍ لغوي واحد قادر؟",
      easy: "A single fine-tuned LLM could answer questions, classify nutrition, and describe images — one model, one screen, one deployment surface.",
      easyAr: "نموذج لغوي واحد مضبوط يمكنه الإجابة وتصنيف التغذية ووصف الصور — نموذج واحد، شاشة واحدة، سطح نشرٍ واحد.",
      chose: "Three specialized models — Gemini for vision, a LoRA-tuned transformer for Arabic Q&A, Random Forest for nutrition — each with a purpose-built screen designed around how that capability is actually used.",
      choseAr: "ثلاثة نماذج متخصّصة — Gemini للرؤية، ومحوّل مضبوط بـLoRA للأسئلة العربية، وRandom Forest للتغذية — لكلٍّ شاشة مبنية لغرضها حول كيفية استخدام تلك القدرة فعلاً.",
      tradeoff: "More to maintain, but each model stays auditable in isolation — critical in healthcare — and users pick the right tool instead of one modal that does everything.",
      tradeoffAr: "صيانةٌ أكثر، لكن كلّ نموذج يبقى قابلاً للتدقيق منفرداً — أمرٌ حاسم في الرعاية الصحية — ويختار المستخدمون الأداة الصحيحة بدل نافذة واحدة تفعل كلّ شيء.",
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
      chose: "Below a confidence threshold the bot returns “Consult your doctor / استشيري طبيبتك” — designed as a warm, first-class state in Figma, not a red error box.",
      choseAr: "تحت عتبة ثقةٍ معيّنة يردّ الروبوت بـ«استشيري طبيبتك» — مصمَّمة كحالةٍ دافئة من الدرجة الأولى في Figma، لا صندوق خطأ أحمر.",
      tradeoff: "Fewer impressive demo answers, but the product is safe to put in front of real mothers. Trust over benchmark.",
      tradeoffAr: "إجاباتُ عرضٍ مبهرة أقلّ، لكن المنتج آمنٌ ليوضع أمام أمّهاتٍ حقيقيات. الثقة قبل المقياس.",
      project: "BloomBelly",
      href: "/projects/bloombelly",
    },
    {
      id: "journal-on-approval",
      tag: "Systems",
      tagAr: "أنظمة",
      question: "Why post the journal entry on approval, not on submission?",
      questionAr: "لماذا يُرحَّل القيد المحاسبي عند الموافقة، لا عند التقديم؟",
      easy: "Auto-creating the journal entry the moment an employee submits is a simpler state machine.",
      easyAr: "توليد القيد لحظة تقديم الموظّف أبسطُ كآلة حالات.",
      chose: "The account.move is generated only on the finance-approval transition. Until then the request is just an HR record.",
      choseAr: "لا يُولَّد account.move إلا عند انتقال موافقة المالية. حتى ذلك الحين يبقى الطلب مجرّد سجلّ موارد بشرية.",
      tradeoff: "An extra state to manage, but the ledger stays clean — accountants only ever see entries that are real liabilities, never unapproved ones to reverse.",
      tradeoffAr: "حالةٌ إضافية للإدارة، لكن دفتر الأستاذ يبقى نظيفاً — لا يرى المحاسبون إلا قيوداً تمثّل التزاماتٍ حقيقية، لا قيوداً غير معتمدة يلزم عكسها.",
      project: "Smart Expense Manager",
      href: "/projects/smart-expense",
    },
    {
      id: "rtl-native",
      tag: "Design",
      tagAr: "تصميم",
      question: "Why design RTL-native instead of mirroring the LTR layout?",
      questionAr: "لماذا التصميم بالعربية أصلاً بدل عكس تخطيط اليسار لليمين؟",
      easy: "RTL is usually shipped as a visual mirror of an LTR layout — flip direction, swap icons, done. It always feels foreign to Arabic readers.",
      easyAr: "عادةً يُطلق اتجاه اليمين لليسار كمرآةٍ بصرية لتخطيط اليسار لليمين — اقلب الاتجاه، بدّل الأيقونات، انتهى. ويبقى غريباً دائماً على القارئ العربي.",
      chose: "The Figma file and every Flutter screen was designed in Arabic first — reading direction, hierarchy, spacing, and icon choices all made in RTL context, then adapted for LTR.",
      choseAr: "صُمّم ملف Figma وكلّ شاشة Flutter بالعربية أولاً — اتجاه القراءة والتسلسل والتباعد واختيار الأيقونات كلّها في سياق اليمين لليسار، ثم كُيّفت لليسار لليمين.",
      tradeoff: "Slower to design two-directionally, but the Arabic interface reads as the primary version. Because it is — LTR is the adaptation.",
      tradeoffAr: "أبطأ في التصميم باتجاهين، لكن الواجهة العربية تُقرأ كالنسخة الأساسية. لأنها كذلك — اليسار لليمين هو التكييف.",
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
    note: "Graduation thesis: BloomBelly — an Arabic-first maternal-health app with three AI models, designed in Figma and built end-to-end in Flutter.",
    noteAr: "مشروع التخرّج: BloomBelly — تطبيق صحة أمّ بالعربية أولاً بثلاثة نماذج ذكاء اصطناعي، صُمّم في Figma وبُني بالكامل في Flutter.",
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
  body: "I'm open to product engineering, product design, and Flutter roles — especially remote and early-stage teams, and bilingual or Arabic-first products. Email is the fastest way to reach me.",
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
    role: "Designer + Lead Flutter Dev",
    roleAr: "مصمِّمة + مطوّرة Flutter رئيسية",
    industry: "Commerce · Beauty",
    industryAr: "تجارة · تجميل",
    impact: "Stalled FlutterFlow prototype → live native app",
    impactAr: "نموذج FlutterFlow متعثّر ← تطبيق أصلي حيّ",
    summary:
      "Full redesign and native Flutter rebuild on a bilingual, multi-theme Design System of 26+ components.",
    summaryAr:
      "إعادة تصميم كاملة وإعادة بناء أصلية بـ Flutter على نظام تصميم ثنائي اللغة متعدّد الثيمات يضمّ أكثر من 26 مكوّناً.",
  },
  {
    name: "BloomBelly",
    href: "/projects/bloombelly",
    cover: "/work/bloombelly/cover.webp",
    year: "2025",
    role: "Designer + Developer",
    roleAr: "مصمِّمة + مطوّرة",
    industry: "Healthcare",
    industryAr: "رعاية صحية",
    impact: "Three AI models behind one Arabic-first app",
    impactAr: "ثلاثة نماذج ذكاء اصطناعي خلف تطبيق عربيّ أولاً",
    summary:
      "Graduation project: an Arabic-first maternal-health companion, designed in Figma and built end-to-end in Flutter.",
    summaryAr:
      "مشروع التخرّج: رفيق لصحّة الأمومة عربيّ أولاً، مُصمَّم في Figma ومبنيّ بالكامل بـ Flutter.",
  },
  {
    name: "CareConnect",
    href: "/projects/careconnect",
    cover: "/work/careconnect/cover.webp",
    year: "2024",
    role: "Designer + Developer",
    roleAr: "مصمِّمة + مطوّرة",
    industry: "Childcare marketplace",
    industryAr: "سوق رعاية أطفال",
    impact: "Three focused apps on one provable backend",
    impactAr: "ثلاثة تطبيقات مركّزة على خلفية واحدة موثوقة",
    summary:
      "A childcare marketplace built as three native apps over a single Supabase backend, access enforced in the database.",
    summaryAr:
      "سوق رعاية أطفال بُني كثلاثة تطبيقات أصلية على خلفية Supabase واحدة، مع فرض الصلاحيات في قاعدة البيانات.",
  },
  {
    name: "Eda",
    href: "/projects/eda",
    cover: "/work/eda/cover.webp",
    year: "2026",
    role: "Designer + QA tester",
    roleAr: "مصمِّمة + مختبِرة (QA)",
    industry: "Healthcare · Multi-tenant",
    industryAr: "رعاية صحية · متعدّد المستأجرين",
    impact: "Tested the wall between clinics holds",
    impactAr: "تحقّقتُ أن الجدار بين العيادات صامد",
    summary:
      "A multi-tenant clinics platform — three Flutter apps over a NestJS backend. Designed the screens and tested it, including data isolation between clinics.",
    summaryAr:
      "منصّة عيادات متعدّدة المستأجرين — ثلاثة تطبيقات Flutter على خلفية NestJS. صمّمتُ الشاشات واختبرتُها، بما في ذلك عزل البيانات بين العيادات.",
  },
  {
    name: "Blatos",
    href: "/projects/blatos",
    cover: "/work/blatos/cover.webp",
    year: "2026",
    role: "Full-stack Developer (duo)",
    roleAr: "مطوّرة Full-stack (بناء ثنائي)",
    industry: "SaaS · AI",
    industryAr: "SaaS · ذكاء اصطناعي",
    impact: "Per-shop AI bot — 15 function-call tools, five languages",
    impactAr: "بوت ذكاء اصطناعي لكل متجر — 15 أداة استدعاء، بخمس لغات",
    summary:
      "A full-stack multi-tenant SaaS for online shops, built by two — the core logic and AI design are a collaborating engineer's; the FastAPI + PostgreSQL + Vue 3 build and the integration of the per-shop AI Telegram bot (Groq llama-3.3-70b, 15 function-call tools, five languages) are mine.",
    summaryAr:
      "نظام SaaS متعدّد المستأجرين للمتاجر الإلكترونية، بُني باثنين — منطق النظام وتصميم الذكاء لمهندسٍ مشارك؛ وبناء FastAPI + PostgreSQL + Vue 3 ودمج بوت Telegram الذكي لكل متجر (Groq llama-3.3-70b، 15 أداة استدعاء دوال، بخمس لغات) عملي أنا.",
  },
  {
    name: "Veghnar Tonvair",
    href: "/projects/veghnar-tonvair",
    cover: "/work/veghnar/cover.webp",
    year: "2026",
    role: "Designer + Storefront Developer",
    roleAr: "مصمّمة + مطوّرة متجر",
    industry: "Fragrance · E-commerce",
    industryAr: "عطور · تجارة إلكترونية",
    impact: "A client brand book → a live Arabic-first Shopify store",
    impactAr: "دليل هوية العميل ← متجر Shopify حيّ عربيّ أولاً",
    summary:
      "A fragrance maison's storefront redesigned from scratch on Shopify: the client's identity turned into one governing stylesheet, a four-face Arabic/Latin type system, and product patterns built for perfume.",
    summaryAr:
      "واجهة متجرٍ لبيت عطورٍ أُعيد تصميمها من الصفر على Shopify: هويةُ العميل تحوّلت إلى ملف أنماطٍ واحدٍ حاكم، ونظامٍ طباعيٍّ رباعيٍّ عربيٍّ ولاتيني، وأنماطِ منتجٍ مبنيّةٍ للعطر.",
    clientSite: true,
  },
  {
    name: "Pharmacology",
    href: "/projects/pharmacology",
    cover: "/work/pharmacology/cover.webp",
    year: "2026",
    role: "Designer + Front-end Developer",
    roleAr: "مصمّمة + مطوّرة واجهة",
    industry: "Clinical nutrition · Web",
    industryAr: "تغذية سريرية · ويب",
    impact: "25 bilingual RTL pages on one locked design-token system",
    impactAr: "25 صفحة ثنائية اللغة (RTL) على نظام رموز تصميم واحد محكم",
    summary:
      "A complete redesign and from-scratch rebuild of a clinical-nutrition brand in vanilla HTML/CSS/JS — Arabic-first, bilingual, with Supabase-wired forms.",
    summaryAr:
      "إعادة تصميم كاملة وبناء من الصفر لعلامة تغذية سريرية بـHTML/CSS/JS صِرف — عربيّة أولاً، ثنائية اللغة، بنماذج موصولة بـSupabase.",
    clientSite: true,
  },
  {
    name: "Divano",
    href: "/projects/divano",
    year: "2026",
    role: "Designer + Front-end Developer",
    roleAr: "مصمّمة + مطوّرة واجهة",
    industry: "Interior design · Web",
    industryAr: "تصميم داخلي · ويب",
    impact: "86 external font links → 0, on one licensed bilingual typeface",
    impactAr: "86 رابط خطوط خارجياً ← صفر، على خطٍّ مرخَّصٍ واحدٍ ثنائي اللغة",
    summary:
      "A Dubai interior-design firm's site, redesigned page by page off its WordPress origins: an editorial redesign, a self-hosted bilingual type system replacing 86 Google Fonts links, and an honesty rule for every before/after pair — built with the Santa Media team.",
    summaryAr:
      "موقع شركة تصميمٍ داخلي في دبي، أُعيد تصميمه صفحةً صفحة بعيداً عن أصله الووردبريسي: إعادة تصميمٍ تحريرية، ونظامُ خطوطٍ ثنائي اللغة مستضافٌ ذاتياً حلّ محلّ 86 رابط Google Fonts، وقاعدةُ صدقٍ لكل زوج «قبل/بعد» — بُني مع فريق Santa Media.",
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
/*  Intro reuses aboutContent.paragraphs; timeline reuses        */
/*  journeyChapter. Tools are an ecosystem (chips), NOT bars.     */
/* ------------------------------------------------------------ */

export const aboutPageContent = {
  eyebrow: "About",
  eyebrowAr: "عنّي",
  title: "The person behind the work.",
  titleAr: "الشخص وراء العمل.",
  /** Short summary beside the portrait slot. */
  summary:
    "I'm an Information Technology Engineering graduate who works as an end-to-end product builder — research and UX through Flutter, AI integration, and the business systems products run on. I'm most useful to small teams that need one person who can take a product from idea to shipped reality.",
  summaryAr:
    "أنا خريجة هندسة تقنية المعلومات أعمل بانيةَ منتجاتٍ من الفكرة إلى الإطلاق — من البحث وتجربة المستخدم مروراً بـFlutter ودمج الذكاء الاصطناعي وصولاً إلى أنظمة الأعمال التي تشتغل عليها المنتجات. أنفعُ ما أكون للفرق الصغيرة التي تحتاج شخصاً واحداً يأخذ المنتج من الفكرة إلى واقعٍ مُطلَق.",
  philosophy: [
    {
      title: "Product thinking",
      titleAr: "تفكير المنتج",
      body: "Start with the problem and who has it. Every design choice is a tradeoff I can explain, not a default I reached for.",
      bodyAr: "ابدأ بالمشكلة ومن يعاني منها. كلّ خيارٍ تصميمي مفاضلةٌ أستطيع شرحها، لا خياراً افتراضياً لجأتُ إليه.",
    },
    {
      title: "Systems thinking",
      titleAr: "تفكير الأنظمة",
      body: "Screens sit on backends, data models, and access control. I design the whole line so the parts don't fight each other.",
      bodyAr: "الشاشات تستند إلى خوادم ونماذج بيانات وتحكّمٍ بالوصول. أصمّم الخطّ كاملاً كي لا تتصارع الأجزاء.",
    },
    {
      title: "Design principles",
      titleAr: "مبادئ التصميم",
      body: "Clarity over decoration, Arabic-first when the audience is, and a system before the screens so nothing drifts.",
      bodyAr: "الوضوح قبل الزخرفة، والعربية أولاً حين يكون الجمهور كذلك، ونظامٌ قبل الشاشات كي لا ينحرف شيء.",
    },
    {
      title: "Engineering principles",
      titleAr: "مبادئ الهندسة",
      body: "Enforce rules where they can't be bypassed, design the failure states, and leave code the next person can keep alive.",
      bodyAr: "افرض القواعد حيث لا يمكن تجاوزها، وصمّم حالات الفشل، واترك كوداً يستطيع من يأتي بعدك إبقاءه حياً.",
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
  body: "Open to product engineering, product design, and Flutter roles — remote and early-stage especially, and bilingual or Arabic-first products.",
  bodyAr:
    "منفتحة على أدوار هندسة المنتجات وتصميم المنتجات وتطوير Flutter — خصوصاً عن بُعد والفرق الناشئة، والمنتجات ثنائية اللغة أو العربية أولاً.",
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

