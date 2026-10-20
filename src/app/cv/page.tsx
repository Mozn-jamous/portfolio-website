import type { Metadata } from "next";
import PrintTrigger from "./PrintTrigger";
import { aboutContent } from "@/lib/scenes-content";
import { Orb } from "@/components/site/Orb";
import { T } from "@/components/i18n/T";

export const metadata: Metadata = {
  title: "CV — Mozn Jamous",
  description:
    "Mozn Jamous, software engineer in Damascus. Mobile, web, backend, AI features, and Odoo ERP systems. Curriculum vitae.",
};

type Role = {
  title: string;
  titleAr?: string;
  org: string;
  orgAr?: string;
  period: string;
  periodAr?: string;
  location?: string;
  locationAr?: string;
  bullets: string[];
  bulletsAr?: string[];
};

const experience: Role[] = [
  {
    title: "Product Designer & Developer",
    titleAr: "مصمّمة منتج ومطوّرة",
    org: "Santa Media",
    orgAr: "Santa Media",
    period: "Mar 2026 — Present",
    periodAr: "آذار 2026 — حتى الآن",
    location: "Damascus",
    locationAr: "دمشق",
    bullets: [
      "Redesigned Mademoiselle, a live beauty-commerce app, and work on its rebuild from FlutterFlow to native Flutter in a three-person team: I own the customer-facing app on Supabase (PostgreSQL functions, row-level security) and co-author the shared design system (three themes, RTL + LTR; Arabic, English and French).",
      "Redesigned and built Veghnar Tonvair, a fragrance brand's Shopify storefront, from the client's brand book: one governing identity stylesheet, a four-typeface Arabic/Latin system, and perfume-specific product UX. Live, Arabic-first.",
      "Led the redesign of Divano, a Dubai interior-design firm's bilingual site (14 EN + 14 AR pages, 13 project galleries): a licensed bilingual typeface replacing 86 external font links, a 4K hero video in three resolution tiers, and an image performance pass.",
      "Front-end and redesign work on ahmedelkhateeb.com (home page, phone UX, supplements and legal pages, Arabic version) and mademoizelle.co (phone layout and the Journal).",
    ],
    bulletsAr: [
      "أعدتُ تصميم Mademoiselle، تطبيق تجارة تجميل حيّ، وأعمل على إعادة بنائه من FlutterFlow إلى Flutter أصلي ضمن فريقٍ من ثلاثة: أتولّى تطبيق الزبونة على Supabase (دوال PostgreSQL وأمان مستوى الصف) وأشارك في نظام التصميم المشترك (ثلاث سمات، RTL + LTR؛ بالعربية والإنجليزية والفرنسية).",
      "أعدتُ تصميم وبناء متجر Veghnar Tonvair على Shopify لعلامة عطور، انطلاقاً من دليل هوية العميل: ملف أنماط واحد يحكم الهوية، ونظام طباعي من أربعة خطوط عربية ولاتينية، وتجربة منتج تناسب العطر. حيّ، وبالعربية أولاً.",
      "قدتُ إعادة تصميم موقع Divano، شركة تصميم داخلي في دبي، بنسختيه (14 صفحة إنجليزية و14 عربية و13 معرض مشاريع): خطّ ثنائي اللغة مرخَّص حلّ محلّ 86 رابط خطوط خارجياً، وفيديو رئيسي بدقة 4K بثلاث درجات، وتحسين أداء الصور.",
      "عمل واجهة وإعادة تصميم على ahmedelkhateeb.com (الصفحة الرئيسية، وتجربة الهاتف، وصفحتا المكمّلات والشروط، والنسخة العربية) وعلى mademoizelle.co (تخطيط الهاتف وقسم Journal).",
    ],
  },
  {
    title: "Freelance Product Designer & QA Engineer",
    titleAr: "مصمّمة منتج ومهندسة اختبار — عمل حر",
    org: "Independent",
    orgAr: "عمل مستقل",
    period: "Dec 2025 — Mar 2026",
    periodAr: "كانون الأول 2025 — آذار 2026",
    location: "Damascus",
    locationAr: "دمشق",
    bullets: [
      "Owned UI/UX design (Figma) and QA for a multi-tenant clinics platform (three Flutter apps over a NestJS backend), including testing tenant isolation between clinics.",
    ],
    bulletsAr: [
      "تولّيتُ تصميم UI/UX (Figma) والاختبار لمنصّة عيادات متعدّدة المستأجرين (ثلاثة تطبيقات Flutter على خادم NestJS)، ومنه اختبار عزل البيانات بين العيادات.",
    ],
  },
  {
    title: "Odoo / ERP Developer",
    titleAr: "مطوّرة Odoo / ERP",
    org: "Techno Solution",
    orgAr: "Techno Solution",
    period: "Feb 2025 — Nov 2025",
    periodAr: "شباط 2025 — تشرين الثاني 2025",
    location: "Damascus",
    locationAr: "دمشق",
    bullets: [
      "Implemented Odoo (17, upgraded through 19, self-hosted) with one colleague for a three-division company (import, warehousing, solar) and Burgasm restaurant, set up as two companies on one instance.",
      "My modules: accounting and the chart of accounts (dual-currency books for the restaurant), point of sale with ingredient-level inventory, and purchasing and stock. A colleague owned HR, attendance and payroll.",
      "Trained the restaurant's cashiers and supervisors on the new POS and supported them in daily use; wrote the Python/XML automations within my modules.",
      "In production at handoff: 18 employees, 6,514 tracked hours, 140 purchase orders and 884 stock moves; 500+ POS orders, 10,000+ ingredient moves, 68 accounts and 30+ modules.",
    ],
    bulletsAr: [
      "نفّذتُ Odoo (من 17 مع ترقية حتى 19، على خادم خاص) مع زميل لشركةٍ بثلاثة أقسام (استيراد، تخزين، طاقة شمسية) ولمطعم Burgasm، كشركتين على نسخة واحدة.",
      "وحداتي: المحاسبة وشجرة الحسابات (دفاتر بعملتين للمطعم)، ونقاط البيع مع مخزون على مستوى المكوّنات، والمشتريات والمخزون. وتولّى زميل الموارد البشرية والحضور والرواتب.",
      "درّبتُ كاشيرات المطعم ومشرفيه على نقاط البيع الجديدة ودعمتهم في الاستخدام اليومي؛ وكتبتُ أتمتة Python/XML ضمن وحداتي.",
      "في الإنتاج عند التسليم: 18 موظفاً، و6,514 ساعة مسجَّلة، و140 أمر شراء، و884 حركة مخزون؛ وأكثر من 500 طلب على نقاط البيع، و10,000 حركة مكوّنات، و68 حساباً، و30 وحدة.",
    ],
  },
];

const openSource = [
  {
    title: "Smart Expense Manager",
    titleAr: "Smart Expense Manager",
    org: "Odoo 19 · LGPL-3.0 · personal project",
    orgAr: "Odoo 19 · LGPL-3.0 · مشروع شخصي",
    period: "May 2026",
    periodAr: "أيار 2026",
    bullets: [
      "Token-secured one-click email approvals (approve, reject, request revision) routed via the hr.employee hierarchy; no login required.",
      "Journal entries post automatically on finance approval; monthly QWeb PDF reports emailed by cron.",
      "Three security groups (Employee, Manager, Finance) with record rules; full EN/AR translations.",
    ],
    bulletsAr: [
      "موافقات بريدية بنقرة واحدة مؤمّنة برمز (موافقة، رفض، طلب تعديل)، تُوجَّه عبر تسلسل hr.employee؛ دون تسجيل دخول.",
      "تُرحَّل القيود المحاسبية تلقائياً عند اعتماد المالية؛ وتُرسَل تقارير PDF شهرية عبر QWeb بالبريد عبر cron.",
      "ثلاث مجموعات صلاحيات (موظف، مدير، مالية) مع قواعد سجلات؛ وترجمة كاملة بالعربية والإنجليزية.",
    ],
    link: "https://github.com/Mozn-jamous/smart-expense-manager",
  },
];

const featuredProjects = [
  {
    title: "BloomBelly",
    titleAr: "BloomBelly",
    org: "Maternal & Child Health App · 2025 · two-person graduation project",
    orgAr: "تطبيق صحّة الأم والطفل · 2025 · مشروع تخرّج بفريق من اثنتين",
    bullets: [
      "Owned the Python/Flask backend and the three AI models: Gemini for medical images, a LoRA-tuned LLM (Qwen2.5) that answers baby-care questions in Arabic (perplexity 3.05), and Random Forest nutrition scoring.",
      "Co-designed the Arabic-first, bilingual interface in Figma; my classmate led the Flutter front end.",
      "Documented to IEEE 830; Supabase for auth, data and conversation history.",
    ],
    bulletsAr: [
      "تولّيتُ خادم Python/Flask ونماذج الذكاء الاصطناعي الثلاثة: Gemini للصور الطبية، ونموذج لغوي مضبوط بـLoRA (Qwen2.5) يجيب عن أسئلة رعاية الطفل بالعربية (perplexity 3.05)، وRandom Forest لتقييم التغذية.",
      "شاركتُ في تصميم الواجهة العربية أولاً وثنائية اللغة في Figma؛ وقادت زميلتي واجهة Flutter.",
      "وثّقتُ المشروع وفق IEEE 830؛ وSupabase للمصادقة والبيانات وسجلّ المحادثة.",
    ],
    stack: "Python · Flask · Gemini · LoRA/PEFT · scikit-learn · Supabase · Figma",
  },
  {
    title: "CareConnect",
    titleAr: "CareConnect",
    org: "Babysitter Booking Platform · 2024 · lead",
    orgAr: "منصّة حجز جليسات أطفال · 2024 · قيادة",
    bullets: [
      "Led a booking platform of three Flutter apps (Mother, Babysitter, Admin) on one Supabase backend; the Babysitter app was co-developed with @shaha123s.",
      "IEEE 830 SRS before any UI; row-level security enforces role boundaries in the database.",
    ],
    bulletsAr: [
      "قدتُ منصّة حجز من ثلاثة تطبيقات Flutter (أمّ، جليسة، مشرف) على خادم Supabase واحد؛ وطُوّر تطبيق الجليسة بالاشتراك مع @shaha123s.",
      "وثيقة متطلبات IEEE 830 قبل أي واجهة؛ ويفرض أمان مستوى الصف حدود الأدوار في قاعدة البيانات.",
    ],
    stack: "Figma · Flutter · Dart · Supabase · PostgreSQL · RLS",
  },
  {
    title: "Takhrjy",
    titleAr: "Takhrjy",
    org: "Graduation-Gifts ERP · 2026 · team build",
    orgAr: "نظام ERP لهدايا التخرّج · 2026 · عمل فريق",
    bullets: [
      "Designer and front-end developer (Vue 3, TypeScript): designed and built the web views for a 7-role permission model (orders, inventory, employees, reporting). In production at the client.",
    ],
    bulletsAr: [
      "مصمّمة ومطوّرة واجهة (Vue 3، TypeScript): صمّمتُ وبنيتُ واجهات الويب لنموذج صلاحيات بسبعة أدوار (الطلبات، والمخزون، والموظفون، والتقارير). يعمل عند العميل.",
    ],
    stack: "Vue 3 · TypeScript · PostgreSQL/PL/pgSQL",
  },
  {
    title: "Blatos",
    titleAr: "Blatos",
    org: "AI Multi-Tenant Store SaaS · 2026 · two-person build",
    orgAr: "SaaS متاجر متعدّد المستأجرين بالذكاء الاصطناعي · 2026 · بناء ثنائي",
    bullets: [
      "A web dashboard plus an AI Telegram bot per shop (15 function-call tools) in five languages. The collaborating engineer designed the core AI architecture; implementation was shared. Built, not deployed.",
    ],
    bulletsAr: [
      "لوحة ويب ومعها بوت Telegram بالذكاء الاصطناعي لكل متجر (15 أداة استدعاء دوال) بخمس لغات. صمّم المهندس المشارك بنية الذكاء الأساسية؛ وتقاسمنا التنفيذ. مبنيّ، وغير منشور.",
    ],
    stack: "FastAPI · PostgreSQL · SQLAlchemy · Redis · Vue 3 · Groq LLM",
  },
];

const education = [
  {
    title: "B.Sc. Information Technology Engineering",
    titleAr: "بكالوريوس هندسة تقنية المعلومات",
    org: "Al-Sham Private University (ASPU)",
    orgAr: "جامعة الشام الخاصة (ASPU)",
    period: "2025",
    location: "Damascus, Syria",
    locationAr: "دمشق، سوريا",
  },
];

const certifications = [
  {
    name: "Odoo Functional Certification",
    nameAr: "شهادة Odoo الوظيفية",
    org: "Odoo S.A.",
    orgAr: "Odoo S.A.",
    year: "2025",
  },
  {
    name: "1 Million Prompters AI Program",
    nameAr: "برنامج مليون مُحفِّز للذكاء الاصطناعي",
    org: "Dubai Future Foundation",
    orgAr: "مؤسسة دبي للمستقبل",
    year: "2025",
  },
  {
    name: "AI Fluency: Framework & Foundations",
    nameAr: "AI Fluency: الإطار والأسس",
    org: "Anthropic",
    orgAr: "Anthropic",
    year: "2026",
  },
];

type SkillGroupData = { label: string; labelAr: string; items: string[]; itemsAr: string[] };

const skills: SkillGroupData[] = [
  {
    label: "Design",
    labelAr: "التصميم",
    items: ["Figma", "Design Systems", "Wireframing", "Prototyping", "User Flows", "RTL / Arabic UX", "Accessibility", "Bilingual interfaces"],
    itemsAr: ["Figma", "أنظمة تصميم", "مخططات هيكلية", "نماذج أولية", "تدفّقات المستخدم", "تجربة عربية / RTL", "إتاحة", "واجهات ثنائية اللغة"],
  },
  {
    label: "Mobile",
    labelAr: "الجوال",
    items: ["Flutter", "Dart", "iOS + Android", "Material 3", "Provider", "BLoC", "GoRouter", "FlutterFlow", "Capacitor", "PWA"],
    itemsAr: ["Flutter", "Dart", "iOS + Android", "Material 3", "Provider", "BLoC", "GoRouter", "FlutterFlow", "Capacitor", "PWA"],
  },
  {
    label: "Web & e-commerce",
    labelAr: "الويب والتجارة الإلكترونية",
    items: ["Vue 3", "Next.js", "TypeScript", "HTML/CSS/JS", "Tailwind", "Shopify (Liquid, Dawn)"],
    itemsAr: ["Vue 3", "Next.js", "TypeScript", "HTML/CSS/JS", "Tailwind", "Shopify (Liquid، Dawn)"],
  },
  {
    label: "Backend",
    labelAr: "الخادم",
    items: ["Python", "FastAPI", "Flask", "SQLAlchemy", "PostgreSQL", "MySQL", "Supabase (RLS, Edge Functions)", "Firebase", "Redis", "JWT", "REST APIs"],
    itemsAr: ["Python", "FastAPI", "Flask", "SQLAlchemy", "PostgreSQL", "MySQL", "Supabase (RLS، Edge Functions)", "Firebase", "Redis", "JWT", "واجهات REST"],
  },
  {
    label: "AI",
    labelAr: "الذكاء الاصطناعي",
    items: ["Google Gemini (vision)", "LoRA/PEFT fine-tuning", "scikit-learn", "Function-calling LLM agents", "Prompt engineering"],
    itemsAr: ["Google Gemini (رؤية)", "ضبط LoRA/PEFT", "scikit-learn", "وكلاء LLM باستدعاء الدوال", "هندسة الأوامر"],
  },
  {
    label: "ERP — Odoo",
    labelAr: "أنظمة ERP — Odoo",
    items: ["Odoo 17–19 (self-hosted)", "Odoo Studio", "Python/XML", "ORM", "QWeb", "OWL"],
    itemsAr: ["Odoo 17–19 (خادم خاص)", "Odoo Studio", "Python/XML", "ORM", "QWeb", "OWL"],
  },
  {
    label: "Odoo modules",
    labelAr: "وحدات Odoo",
    items: ["Accounting", "POS", "Inventory", "Purchase", "HR", "Payroll", "CRM", "Manufacturing"],
    itemsAr: ["المحاسبة", "نقاط البيع", "المخزون", "المشتريات", "الموارد البشرية", "الرواتب", "إدارة العلاقات", "التصنيع"],
  },
  {
    label: "Tools",
    labelAr: "الأدوات",
    items: ["Git", "GitHub", "Jira", "Trello", "Postman", "Linux", "Docker", "Agile"],
    itemsAr: ["Git", "GitHub", "Jira", "Trello", "Postman", "Linux", "Docker", "Agile"],
  },
];

const languages = [
  { name: "Arabic", nameAr: "العربية", level: "Native", levelAr: "اللغة الأم" },
  { name: "English", nameAr: "الإنجليزية", level: "Professional working — B2", levelAr: "احترافية للعمل — B2" },
];

export default function CVPage() {
  return (
    <>
      {/* Action bar (hidden in print). It floats on the site's own background,
          NOT on the white sheet, so it must stay OUTSIDE the paper-token scope
          below — inside it, the paper's pale ink and the dark --surface button
          both rendered as near-invisible text on the twilight ground. */}
      <div className="border-b border-[var(--glass-border)] bg-[var(--glass)] backdrop-blur-xl print:hidden">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-3 px-5 py-3 sm:py-4 lg:px-8">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
            <T en="Curriculum Vitae" ar="السيرة الذاتية" />
          </p>
          <PrintTrigger />
        </div>
      </div>

      <div
        className="text-[var(--ink)] print:bg-white"
        /* The CV is a paper document: scope light-on-white token values
           here so every var(--ink)/--border class below reads as dark ink
           on the white sheet, on screen and in print alike. */
        style={
          {
            "--ink": "#3F3A5A",
            "--ink-muted": "#6A6488",
            "--ink-faint": "#9A93B5",
            "--border": "#E7E0F0",
            "--border-strong": "#D3C9E1",
            "--accent": "#CF7A99",
            "--accent-deep": "#B4628A",
          } as React.CSSProperties
        }
      >
        <article className="mx-auto my-6 max-w-4xl rounded-2xl bg-white px-5 py-8 shadow-soft-lg print:my-0 print:max-w-none print:rounded-none print:bg-white print:px-0 print:py-0 print:shadow-none sm:my-10 sm:px-6 sm:py-12 lg:px-12">
          {/* CV header */}
          <header className="border-b border-[var(--border)] pb-10">
            <div className="flex items-center gap-2.5">
              <Orb size={26} className="shrink-0 print:hidden" />
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--accent)]">
                <T en="Curriculum Vitae · 2026" ar="السيرة الذاتية · 2026" />
              </p>
            </div>
            <h1 className="font-display mt-4 text-5xl font-semibold leading-tight tracking-[-0.02em] text-[var(--ink)] sm:text-6xl">
              <T en="Mozn Jamous" ar="مزن جاموس" />
            </h1>
            <p className="mt-3 max-w-2xl text-balance text-lg leading-relaxed text-[var(--ink-muted)]">
              <T
                en="Software engineer. I build mobile apps, web front-ends, Python services with AI in them, and the ERP systems companies run their operations on. Arabic-first by default."
                ar="مهندسة برمجيات. أبني تطبيقات الجوال، وواجهات الويب، وخدمات Python فيها ذكاء اصطناعي، وأنظمة ERP التي تدير بها الشركات عملياتها. العربية أولاً بشكل افتراضي."
              />
            </p>
            {/* No phone number here: this page is public and gets scraped;
                the number stays in the PDF she sends by hand. */}
            <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3 font-mono text-xs sm:grid-cols-3">
              <Field label={<T en="Email" ar="البريد" />}>
                <a
                  href="mailto:moznjamous9@gmail.com"
                  className="underline decoration-[var(--accent)]/40 underline-offset-4 hover:decoration-[var(--accent)]"
                >
                  moznjamous9@gmail.com
                </a>
              </Field>
              <Field label={<T en="LinkedIn" ar="لينكدإن" />}>
                <a
                  href="https://linkedin.com/in/mozn-jamous"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[var(--accent)]/40 underline-offset-4 hover:decoration-[var(--accent)]"
                >
                  /in/mozn-jamous
                </a>
              </Field>
              <Field label={<T en="GitHub" ar="جيت‑هَب" />}>
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
              <T
                en="Damascus, Syria · open to roles, contracts, and grants"
                ar="دمشق، سوريا · منفتحة على الوظائف والعقود والمِنح"
              />
            </p>
          </header>

          {/* Body — two-column on desktop */}
          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_260px] lg:gap-16">
            {/* Main column */}
            <div>
              <Section title={<T en="Experience" ar="الخبرات" />}>
                <div className="space-y-9">
                  {experience.map((r) => (
                    <RoleEntry key={`${r.org}-${r.period}`} role={r} />
                  ))}
                </div>
              </Section>

              <Section title={<T en="Featured projects" ar="مشاريع مختارة" />}>
                <div className="space-y-9">
                  {featuredProjects.map((p) => (
                    <article key={p.title}>
                      <header className="flex flex-wrap items-baseline justify-between gap-x-4">
                        <h3 className="text-lg font-medium tracking-tight text-[var(--ink)]">
                          <T en={p.title} ar={p.titleAr ?? p.title} />{" "}
                          <span className="font-normal text-[var(--ink-muted)]">
                            — <T en={p.org} ar={p.orgAr ?? p.org} />
                          </span>
                        </h3>
                      </header>
                      <ul className="mt-3 list-disc space-y-1.5 ps-5 text-[0.95rem] leading-relaxed text-[var(--ink-muted)] marker:text-[var(--accent)]">
                        {p.bullets.map((b, i) => (
                          <li key={i}>
                            <T en={b} ar={p.bulletsAr?.[i] ?? b} />
                          </li>
                        ))}
                      </ul>
                      <p className="mt-2 font-mono text-xs text-[var(--ink-faint)]">
                        {p.stack}
                      </p>
                    </article>
                  ))}
                </div>
              </Section>

              <Section title={<T en="Open source" ar="مفتوح المصدر" />}>
                <div className="space-y-9">
                  {openSource.map((r) => (
                    <article key={r.title}>
                      <header className="flex flex-wrap items-baseline justify-between gap-x-4">
                        <h3 className="text-lg font-medium tracking-tight text-[var(--ink)]">
                          <T en={r.title} ar={r.titleAr ?? r.title} />{" "}
                          <span className="font-normal text-[var(--ink-muted)]">
                            — <T en={r.org} ar={r.orgAr ?? r.org} />
                          </span>
                        </h3>
                        <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
                          <T en={r.period} ar={r.periodAr ?? r.period} />
                        </span>
                      </header>
                      <ul className="mt-3 list-disc space-y-1.5 ps-5 text-[0.95rem] leading-relaxed text-[var(--ink-muted)] marker:text-[var(--accent)]">
                        {r.bullets.map((b, i) => (
                          <li key={i}>
                            <T en={b} ar={r.bulletsAr?.[i] ?? b} />
                          </li>
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

              <Section title={<T en="Education" ar="التعليم" />}>
                <div className="space-y-5">
                  {education.map((e) => (
                    <div key={e.title}>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                        <h3 className="text-lg font-medium tracking-tight text-[var(--ink)]">
                          <T en={e.title} ar={e.titleAr ?? e.title} />
                        </h3>
                        <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
                          {e.period}
                        </span>
                      </div>
                      <p className="mt-1 text-[var(--ink-muted)]">
                        <T
                          en={`${e.org} · ${e.location}`}
                          ar={`${e.orgAr ?? e.org} · ${e.locationAr ?? e.location}`}
                        />
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title={<T en="Certifications" ar="الشهادات" />}>
                <ul className="space-y-4">
                  {certifications.map((c) => (
                    <li
                      key={c.name}
                      className="flex flex-wrap items-baseline justify-between gap-x-4"
                    >
                      <span className="text-base font-medium text-[var(--ink)]">
                        <T en={c.name} ar={c.nameAr ?? c.name} />
                      </span>
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
                        <T en={`${c.org} · ${c.year}`} ar={`${c.orgAr ?? c.org} · ${c.year}`} />
                      </span>
                    </li>
                  ))}
                </ul>
              </Section>
            </div>

            {/* Side column */}
            <aside className="space-y-10">
              <SideSection title={<T en="Skills" ar="المهارات" />}>
                {skills.map((g) => (
                  <SkillGroup
                    key={g.label}
                    label={<T en={g.label} ar={g.labelAr} />}
                    items={g.items}
                    itemsAr={g.itemsAr}
                  />
                ))}
              </SideSection>

              <SideSection title={<T en="Languages" ar="اللغات" />}>
                <ul className="space-y-1.5 text-sm">
                  {languages.map((l) => (
                    <li
                      key={l.name}
                      className="flex items-baseline justify-between gap-2"
                    >
                      <span className="text-[var(--ink)]">
                        <T en={l.name} ar={l.nameAr} />
                      </span>
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
                        <T en={l.level} ar={l.levelAr} />
                      </span>
                    </li>
                  ))}
                </ul>
              </SideSection>

              <SideSection title={<T en="Open to" ar="منفتحة على" />}>
                <ul className="space-y-1.5 text-sm text-[var(--ink-muted)]">
                  {aboutContent.openTo.map((item, i) => (
                    <li key={item}>
                      · <T en={item} ar={aboutContent.openToAr[i] ?? item} />
                    </li>
                  ))}
                </ul>
              </SideSection>
            </aside>
          </div>

          <footer className="mt-16 border-t border-[var(--border)] pt-6 text-center font-mono text-[0.6rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
            <T
              en="References available on request · Last updated 2026"
              ar="المراجع متاحة عند الطلب · آخر تحديث 2026"
            />
          </footer>
        </article>
      </div>
    </>
  );
}

/* --- helpers --- */

function Field({
  label,
  children,
}: {
  label: React.ReactNode;
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
  title: React.ReactNode;
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
  title: React.ReactNode;
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
          <T en={role.title} ar={role.titleAr ?? role.title} />{" "}
          <span className="font-normal text-[var(--ink-muted)]">
            — <T en={role.org} ar={role.orgAr ?? role.org} />
          </span>
        </h3>
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
          <T
            en={`${role.period}${role.location ? ` · ${role.location}` : ""}`}
            ar={`${role.periodAr ?? role.period}${
              role.location ? ` · ${role.locationAr ?? role.location}` : ""
            }`}
          />
        </span>
      </header>
      <ul className="mt-3 list-disc space-y-1.5 ps-5 text-[0.95rem] leading-relaxed text-[var(--ink-muted)] marker:text-[var(--accent)]">
        {role.bullets.map((b, i) => (
          <li key={i}>
            <T en={b} ar={role.bulletsAr?.[i] ?? b} />
          </li>
        ))}
      </ul>
    </article>
  );
}

function SkillGroup({
  label,
  items,
  itemsAr,
}: {
  label: React.ReactNode;
  items: string[];
  itemsAr?: string[];
}) {
  return (
    <div>
      <p className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
        {label}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-[var(--ink)]">
        <T en={items.join(" · ")} ar={(itemsAr ?? items).join(" · ")} />
      </p>
    </div>
  );
}
