import type { Metadata } from "next";
import PrintTrigger from "./PrintTrigger";
import { aboutContent } from "@/lib/scenes-content";
import { Orb } from "@/components/site/Orb";
import { T } from "@/components/i18n/T";

export const metadata: Metadata = {
  title: "CV — Mozn Jamous",
  description:
    "Mozn Jamous — End-to-End Product Builder based in Damascus. Designs products, builds Flutter apps, and engineers the Odoo/ERP systems behind them. Curriculum vitae.",
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
    title: "UI/UX Designer & Flutter Lead",
    titleAr: "مصمّمة UI/UX وقائدة Flutter",
    org: "Santa Media — Mademoiselle (MDMZL)",
    orgAr: "Santa Media — Mademoiselle (MDMZL)",
    period: "Mar 2026 — Present",
    periodAr: "آذار 2026 — حتى الآن",
    location: "Damascus",
    locationAr: "دمشق",
    bullets: [
      "Leading UI/UX design and native Flutter rebuild of Mademoiselle — from FlutterFlow prototype to production-grade app.",
      "Designed and shipped a complete Design System: multi-theme, full RTL, 17 typography variants, 9 button variants.",
      "Owned the full product design lifecycle: wireframes, design system, implementation, QA, and AI module integration.",
    ],
    bulletsAr: [
      "أقود تصميم UI/UX وإعادة بناء Mademoiselle أصلياً في Flutter — من نموذج FlutterFlow إلى تطبيقٍ بمستوى الإنتاج.",
      "صمّمتُ وأطلقتُ نظام تصميمٍ كاملاً: متعدّد السمات، بدعمٍ كامل لليمين-لليسار، 17 خياراً للخطوط، 9 خيارات للأزرار.",
      "تولّيتُ دورة حياة تصميم المنتج كاملةً: المخططات الهيكلية، ونظام التصميم، والتنفيذ، وضمان الجودة، ودمج وحدات الذكاء الاصطناعي.",
    ],
  },
  {
    title: "Freelance UI/UX Designer & Flutter Developer",
    titleAr: "مصمّمة UI/UX ومطوّرة Flutter — عمل حر",
    org: "Independent",
    orgAr: "عمل مستقل",
    period: "Oct 2025 — Mar 2026",
    periodAr: "تشرين الأول 2025 — آذار 2026",
    location: "Damascus",
    locationAr: "دمشق",
    bullets: [
      "Designed interfaces and collaborated on a client mobile project with a senior engineer.",
      "Owned QA across the full application surface — screens, flows, and edge cases.",
    ],
    bulletsAr: [
      "صمّمتُ الواجهات وتعاونتُ على مشروع جوالٍ لعميلٍ مع مهندسٍ خبير.",
      "تولّيتُ ضمان الجودة عبر سطح التطبيق كاملاً — الشاشات والتدفّقات والحالات الحديّة.",
    ],
  },
  {
    title: "Software Developer & ERP Specialist",
    titleAr: "مطوّرة برمجيات وأخصّائية ERP",
    org: "Techno Solution",
    orgAr: "Techno Solution",
    period: "Feb 2025 — Sep 2025",
    periodAr: "شباط 2025 — أيلول 2025",
    location: "Damascus",
    locationAr: "دمشق",
    bullets: [
      "Owned end-to-end Odoo Online implementation across a multi-activity company (import, warehousing, solar).",
      "Deployed a live Odoo POS in a restaurant; onboarded cashier and supervisory staff into daily production.",
      "Configured a custom Chart of Accounts linked across HR, payroll, accounting, manufacturing, and purchase modules.",
      "Built workflow automations with Odoo Studio + custom Python/XML extensions to replace manual reporting.",
    ],
    bulletsAr: [
      "تولّيتُ تنفيذ Odoo Online من البداية إلى النهاية لشركةٍ متعدّدة الأنشطة (استيراد، تخزين، طاقة شمسية).",
      "أطلقتُ نقاط بيع Odoo حيّة في مطعم؛ ودرّبتُ الكاشيرين والمشرفين على التشغيل اليومي.",
      "هيّأتُ شجرة حسابات مخصّصة مرتبطة عبر وحدات الموارد البشرية والرواتب والمحاسبة والتصنيع والمشتريات.",
      "بنيتُ أتمتةً لسير العمل بـOdoo Studio مع امتدادات Python/XML مخصّصة لاستبدال التقارير اليدوية.",
    ],
  },
];

const openSource = [
  {
    title: "Smart Expense Manager",
    titleAr: "Smart Expense Manager",
    org: "Odoo 19 · LGPL-3.0",
    orgAr: "Odoo 19 · LGPL-3.0",
    period: "May 2026 — Present",
    periodAr: "أيار 2026 — حتى الآن",
    bullets: [
      "Token-secured one-click email approvals routed via hr.employee hierarchy — no login required.",
      "Auto-generated journal entries on finance sign-off; QWeb PDF reports emailed by cron.",
      "Three-tier RBAC at record-rule layer; full EN/AR translations.",
    ],
    bulletsAr: [
      "موافقات بريديّة بنقرةٍ واحدة مؤمّنة برمز، تُوجَّه عبر تسلسل hr.employee — دون الحاجة لتسجيل الدخول.",
      "قيود محاسبية مُولّدة تلقائياً عند اعتماد المالية؛ وتقارير PDF عبر QWeb تُرسَل بالبريد عبر cron.",
      "تحكّمٌ بالوصول بثلاث طبقات على مستوى قواعد السجلات؛ مع ترجمةٍ كاملة بالعربية والإنجليزية.",
    ],
    link: "https://github.com/Mozn-jamous/smart-expense-manager",
  },
];

const featuredProjects = [
  {
    title: "BloomBelly",
    titleAr: "BloomBelly",
    org: "Pregnancy & Childcare Platform · 2025",
    orgAr: "منصّة حملٍ ورعاية أطفال · 2025",
    bullets: [
      "Designed the full product from scratch — user flows, wireframes, and Figma screens for a bilingual Arabic/English healthcare app.",
      "Integrated three AI models: Gemini for medical imaging, a LoRA-tuned Arabic transformer for Q&A, Random Forest for nutrition.",
      "Documented to IEEE 830 standards; built end-to-end as the graduation thesis at ASPU.",
    ],
    bulletsAr: [
      "صمّمتُ المنتج كاملاً من الصفر — تدفّقات المستخدم والمخططات الهيكلية وشاشات Figma لتطبيق رعايةٍ صحية ثنائي اللغة (عربي/إنجليزي).",
      "دمجتُ ثلاثة نماذج ذكاء اصطناعي: Gemini للتصوير الطبي، ومحوّل عربي مضبوط بـLoRA للأسئلة والأجوبة، وRandom Forest للتغذية.",
      "وثّقتُ المشروع وفق معيار IEEE 830؛ وبنيته من البداية للنهاية كمشروع تخرّجٍ في ASPU.",
    ],
    stack: "Figma · Flutter · Dart · Flask · Supabase · Gemini · LoRA",
  },
  {
    title: "CareConnect",
    titleAr: "CareConnect",
    org: "Babysitter Booking & Session Management · 2024",
    orgAr: "حجز جليسات الأطفال وإدارة الجلسات · 2024",
    bullets: [
      "Designed and built a cross-platform booking platform as three Flutter apps (Mother, Babysitter, Admin) on one Supabase backend.",
      "Owned the full product lifecycle: UX flows, wireframes, Figma screens, implementation, and Supabase integration.",
      "IEEE 830 SRS authored before any UI work; Supabase RLS enforces role boundaries at the database layer.",
    ],
    bulletsAr: [
      "صمّمتُ وبنيتُ منصّة حجزٍ متعدّدة المنصّات كثلاثة تطبيقات Flutter (أمّ، جليسة، مشرف) على خادم Supabase واحد.",
      "تولّيتُ دورة حياة المنتج كاملةً: تدفّقات التجربة، والمخططات الهيكلية، وشاشات Figma، والتنفيذ، والدمج مع Supabase.",
      "كتبتُ وثيقة متطلبات IEEE 830 قبل أي عملٍ على الواجهة؛ وتفرض Supabase RLS حدود الأدوار في طبقة قاعدة البيانات.",
    ],
    stack: "Figma · Flutter · Dart · Supabase · PostgreSQL · RLS",
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
    items: ["Flutter", "Dart", "iOS + Android"],
    itemsAr: ["Flutter", "Dart", "iOS + Android"],
  },
  {
    label: "Backend",
    labelAr: "الخادم",
    items: ["Python", "Flask", "PostgreSQL", "MySQL", "Supabase", "REST APIs"],
    itemsAr: ["Python", "Flask", "PostgreSQL", "MySQL", "Supabase", "واجهات REST"],
  },
  {
    label: "ERP — Odoo",
    labelAr: "أنظمة ERP — Odoo",
    items: ["Odoo 17–19", "Odoo Studio", "Python/XML", "ORM", "QWeb", "OWL", "POS"],
    itemsAr: ["Odoo 17–19", "Odoo Studio", "Python/XML", "ORM", "QWeb", "OWL", "نقاط البيع"],
  },
  {
    label: "Odoo modules",
    labelAr: "وحدات Odoo",
    items: ["POS", "Inventory", "HR", "Payroll", "CRM", "Accounting", "Manufacturing", "Purchase"],
    itemsAr: ["نقاط البيع", "المخزون", "الموارد البشرية", "الرواتب", "إدارة العلاقات", "المحاسبة", "التصنيع", "المشتريات"],
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
      {/* Action bar (hidden in print) */}
      <div className="border-b border-[var(--glass-border)] bg-white/45 backdrop-blur-xl print:hidden">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4 lg:px-8">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
            <T en="Curriculum Vitae" ar="السيرة الذاتية" />
          </p>
          <PrintTrigger />
        </div>
      </div>

      <article className="mx-auto my-10 max-w-4xl rounded-2xl bg-white px-6 py-12 shadow-soft-lg print:my-0 print:max-w-none print:rounded-none print:bg-white print:px-0 print:py-0 print:shadow-none lg:px-12">
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
              en="End-to-End Product Builder — I design products, build the mobile apps, and engineer the systems behind them. Arabic-first by default, from research and Figma through to production."
              ar="صناعة منتجاتٍ من الفكرة إلى الإطلاق — أصمّم المنتجات، وأبني تطبيقات الجوال، وأهندس الأنظمة التي تقف خلفها. العربية أولاً بشكلٍ افتراضي، من البحث وFigma وصولاً إلى الإنتاج."
            />
          </p>
          <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3 font-mono text-xs sm:grid-cols-4">
            <Field label={<T en="Email" ar="البريد" />}>
              <a
                href="mailto:moznjamous9@gmail.com"
                className="underline decoration-[var(--accent)]/40 underline-offset-4 hover:decoration-[var(--accent)]"
              >
                moznjamous9@gmail.com
              </a>
            </Field>
            <Field label={<T en="Phone" ar="الهاتف" />}>+963 956 959 722</Field>
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
