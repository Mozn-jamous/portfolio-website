import type { Metadata } from "next";
import Link from "next/link";
import {
  CaseStudyLayout,
  Callout,
  FactGrid,
  Figure,
  Lead,
} from "@/components/case-study/CaseStudyLayout";
import {
  StructuredData,
  caseStudyStructuredData,
} from "@/components/site/StructuredData";
import { T } from "@/components/i18n/T";

const DESCRIPTION =
  "Custom Odoo 19 business systems — expense management, HR, payroll, POS, and approval workflows. Built around how a company actually works. Reduced approval time from days to seconds; one module is open source and live.";

export const metadata: Metadata = {
  title: "ERP & Odoo Systems — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "ERP & Odoo Systems — business operations, engineered",
    description: DESCRIPTION,
    type: "article",
    url: "https://moznjamous.com/odoo",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP & Odoo Systems — business operations, engineered",
    description: DESCRIPTION,
  },
};

export default function OdooPage() {
  return (
    <>
      <StructuredData
        data={caseStudyStructuredData({
          name: "ERP & Odoo Systems",
          description: DESCRIPTION,
          path: "/odoo",
          year: "2025",
        })}
      />
      <CaseStudyLayout
      meta={{
        eyebrow: <T en="ERP & Odoo Systems" ar="أنظمة ERP وOdoo" />,
        status: <T en="Production · Open source" ar="إنتاج · مفتوح المصدر" />,
        title: <T en="Business operations, engineered." ar="عمليات الأعمال، مهندَسة." />,
        lede: (
          <T
            en="Custom Odoo 19 systems for real companies — expense management, HR, payroll, POS, and approval workflows. Built around how a business actually works, not Odoo's defaults. One module is open source and live on GitHub."
            ar="أنظمة Odoo 19 مخصّصة لشركاتٍ حقيقية — إدارة النفقات، والموارد البشرية، والرواتب، ونقاط البيع، وتدفّقات الموافقات. مبنيّة حول طريقة عمل الشركة فعلاً، لا حول إعدادات Odoo الافتراضية. إحدى الوحدات مفتوحة المصدر وحيّة على GitHub."
          />
        ),
        year: <T en="2025 — Present" ar="2025 — حتى الآن" />,
        role: <T en="Odoo Developer · Systems Designer" ar="مطوّرة Odoo · مصمّمة أنظمة" />,
        stack: [
          "Odoo 19",
          "Python",
          "PostgreSQL",
          "Odoo ORM",
          "QWeb",
          "OWL",
          "XML",
          "Odoo Studio",
          "REST APIs",
        ],
        links: [
          {
            label: <T en="Smart Expense on GitHub" ar="Smart Expense على GitHub" />,
            href: "https://github.com/Mozn-jamous/smart-expense-manager",
            external: true,
            primary: true,
          },
        ],
      }}
      metrics={[
        {
          value: <T en="Days → Secs" ar="أيام ← ثوانٍ" />,
          label: <T en="Expense approval time — login requirement removed" ar="زمن الموافقة على النفقات — أُلغيت الحاجة لتسجيل الدخول" />,
        },
        {
          value: <T en="3-division" ar="3 أقسام" />,
          label: <T en="Company run on one centralized Odoo system" ar="شركة تُدار بنظام Odoo مركزي واحد" />,
        },
        {
          value: <T en="1-click" ar="نقرة واحدة" />,
          label: <T en="Manager & finance approvals — straight from email" ar="موافقات المدير والمالية — مباشرةً من البريد" />,
        },
        {
          value: <T en="LGPL-3.0" ar="LGPL-3.0" />,
          label: <T en="Smart Expense Manager — open source & live" ar="Smart Expense Manager — مفتوح المصدر وحيّ" />,
        },
      ]}
      sections={[
        {
          kicker: <T en="Featured implementations" ar="تطبيقات مختارة" />,
          heading: <T en="Two businesses, live on Odoo." ar="شركتان، حيّتان على Odoo." />,
          body: (
            <>
              <Lead>
                <T
                  en="The fullest expression of this work — two separate businesses I moved onto Odoo, each its own company on one deployment, both still running in daily production. Real screenshots, real numbers."
                  ar="أكمل تعبيرٍ عن هذا العمل — شركتان منفصلتان نقلتهما إلى Odoo، كلٌّ شركةً مستقلّة على نشرٍ واحد، وكلتاهما ما زالتا تعملان في الإنتاج اليومي. لقطاتٌ حقيقية، أرقامٌ حقيقية."
                />
              </Lead>

              <article className="mt-8">
                <Figure
                  src="/work/techno-solution/employees.webp"
                  label="Techno Solution"
                  caption="Techno Solution — 18 staff across import, warehousing & solar"
                />
                <h3 className="mt-2 text-xl font-medium tracking-tight text-[var(--ink)]">
                  <T
                    en="Techno Solution — a 3-division company, Excel to ERP"
                    ar="Techno Solution — شركة بثلاثة أقسام، من Excel إلى ERP"
                  />
                </h3>
                <p className="mt-3">
                  <T
                    en={
                      <>
                        HR, payroll, attendance, purchasing, inventory, and accounting
                        for an import / warehousing / solar company — one Odoo system
                        replacing a scattered Excel operation.{" "}
                        <strong>18 employees · 6,514 hours · 140 purchase orders</strong>.
                        Still live after handoff.
                      </>
                    }
                    ar={
                      <>
                        الموارد البشرية، والرواتب، والحضور، والمشتريات، والمخزون،
                        والمحاسبة لشركة استيراد / تخزين / طاقة شمسية — نظام Odoo واحد
                        يحلّ محلّ عمليةٍ مبعثرة على Excel.{" "}
                        <strong>18 موظفاً · 6,514 ساعة · 140 أمر شراء</strong>. ما زال
                        حيّاً بعد التسليم.
                      </>
                    }
                  />
                </p>
                <Link
                  href="/projects/techno-solution"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-[var(--accent-deep)]"
                >
                  <T en="Read the Techno Solution case study" ar="اقرأ دراسة حالة Techno Solution" />
                  <span aria-hidden className="rtl:-scale-x-100">→</span>
                </Link>
              </article>

              <article className="mt-12">
                <Figure
                  src="/work/burgasm/system-overview.webp"
                  label="Burgasm"
                  caption="Burgasm — 30+ Odoo modules configured for the restaurant"
                />
                <h3 className="mt-2 text-xl font-medium tracking-tight text-[var(--ink)]">
                  <T en="Burgasm — a restaurant, fully on Odoo" ar="Burgasm — مطعمٌ بالكامل على Odoo" />
                </h3>
                <p className="mt-3">
                  <T
                    en={
                      <>
                        Proper books (68 accounts, 3 partners, dual-currency), a live
                        point of sale (<strong>500+ orders</strong>), a kitchen display,
                        and inventory tracked down to the ingredient —{" "}
                        <strong>10,000+ moves linked to POS</strong>.
                      </>
                    }
                    ar={
                      <>
                        دفاتر محاسبية سليمة (68 حساباً، 3 شركاء، عملة مزدوجة)، ونقطة
                        بيعٍ حيّة (<strong>500+ طلب</strong>)، وشاشة مطبخ، ومخزونٌ
                        متتبَّع حتى مستوى المكوّن —{" "}
                        <strong>10,000+ حركة مرتبطة بنقاط البيع</strong>.
                      </>
                    }
                  />
                </p>
                <Link
                  href="/projects/burgasm"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-[var(--accent-deep)]"
                >
                  <T en="Read the Burgasm case study" ar="اقرأ دراسة حالة Burgasm" />
                  <span aria-hidden className="rtl:-scale-x-100">→</span>
                </Link>
              </article>
            </>
          ),
        },
        {
          kicker: <T en="What I've built" ar="ما الذي بنيته" />,
          heading: <T en="Systems people actually use." ar="أنظمة يستخدمها الناس فعلاً." />,
          body: (
            <>
              <Lead>
                <T
                  en="Not demos that look good in a meeting — systems that survive contact with daily operations. Across multiple companies I've designed, built, and deployed:"
                  ar="ليست عروضاً تبدو جيدة في اجتماع — بل أنظمة تصمد أمام العمليات اليومية. عبر عدّة شركات، صمّمتُ وبنيتُ وأطلقتُ:"
                />
              </Lead>
              <FactGrid
                items={[
                  { label: <T en="Expense management" ar="إدارة النفقات" />, value: <T en="Receipt → approval → journal entry" ar="إيصال ← موافقة ← قيد محاسبي" /> },
                  { label: <T en="HR systems" ar="أنظمة الموارد البشرية" />, value: <T en="Employees · contracts · hierarchy" ar="الموظفون · العقود · التسلسل" /> },
                  { label: <T en="Attendance" ar="الحضور" />, value: <T en="Check-in/out, linked to payroll" ar="تسجيل دخول/خروج، مرتبط بالرواتب" /> },
                  { label: <T en="Payroll" ar="الرواتب" />, value: <T en="Salary rules · automated runs" ar="قواعد الرواتب · تشغيل آلي" /> },
                  { label: <T en="Point of sale" ar="نقاط البيع" />, value: <T en="Live restaurant POS" ar="نقاط بيع مطعمٍ حيّة" /> },
                  { label: <T en="Approval workflows" ar="تدفّقات الموافقات" />, value: <T en="Email-based · no login" ar="عبر البريد · دون تسجيل دخول" /> },
                ]}
              />
              <p>
                <T
                  en="The common thread isn't a feature list — it's that each one was shaped around the people who use it. A manager who never opens Odoo still approves expenses. A cashier who never touched an ERP runs the till on day one. The system bends to the business, not the other way around."
                  ar="الخيط المشترك ليس قائمة ميزات — بل أن كلّ نظامٍ صِيغ حول من يستخدمه. مديرٌ لا يفتح Odoo أبداً يوافق على النفقات رغم ذلك. وكاشيرٌ لم يلمس نظام ERP من قبل يدير الصندوق في يومه الأول. النظام ينحني للشركة، لا العكس."
                />
              </p>
            </>
          ),
        },
        {
          kicker: <T en="Capabilities" ar="القدرات" />,
          heading: <T en="What goes into them." ar="ممّا تتكوّن." />,
          body: (
            <>
              <p>
                <T
                  en="Under the systems is real Odoo engineering — not just configuration in the UI. Modules are written in Python and XML, access is enforced at the data layer, and everything ships bilingual."
                  ar="تحت هذه الأنظمة هندسة Odoo حقيقية — لا مجرّد إعدادٍ في الواجهة. الوحدات مكتوبة بـPython وXML، والوصول مفروضٌ في طبقة البيانات، وكلّ شيء يُطلق ثنائي اللغة."
                />
              </p>
              <FactGrid
                items={[
                  { label: <T en="Custom Odoo modules" ar="وحدات Odoo مخصّصة" />, value: "Python · XML · ORM" },
                  { label: <T en="Workflow automation" ar="أتمتة سير العمل" />, value: <T en="Server actions · cron · Studio" ar="إجراءات الخادم · cron · Studio" /> },
                  { label: <T en="Access control" ar="التحكّم بالوصول" />, value: <T en="Record rules · 3-tier RBAC" ar="قواعد السجلات · تحكّم بثلاث طبقات" /> },
                  { label: <T en="Reporting" ar="التقارير" />, value: <T en="QWeb PDF · scheduled email" ar="QWeb PDF · بريد مجدول" /> },
                  { label: <T en="API integrations" ar="تكاملات API" />, value: <T en="REST · external systems" ar="REST · أنظمة خارجية" /> },
                  { label: <T en="Localization" ar="التعريب" />, value: <T en="Full EN / AR · RTL" ar="إنجليزي / عربي كامل · RTL" /> },
                ]}
              />
            </>
          ),
        },
        {
          kicker: <T en="Results" ar="النتائج" />,
          heading: <T en="The outcomes that matter." ar="النتائج التي تهمّ." />,
          body: (
            <>
              <p>
                <T
                  en="The point of a business system is not the technology — it's what changes for the company once it's running."
                  ar="جوهر نظام الأعمال ليس التقنية — بل ما الذي يتغيّر للشركة بمجرّد تشغيله."
                />
              </p>
              <Callout kicker={<T en="Approval time" ar="زمن الموافقة" />}>
                <T
                  en={
                    <>
                      Cut expense approvals from <strong>days to seconds</strong> — by
                      removing the login requirement entirely. The approval lives in
                      the email; one click moves the request forward.
                    </>
                  }
                  ar={
                    <>
                      اختصرتُ موافقات النفقات من <strong>أيامٍ إلى ثوانٍ</strong> —
                      بإلغاء الحاجة لتسجيل الدخول كليّاً. الموافقة موجودة داخل البريد؛
                      ونقرةٌ واحدة تدفع الطلب للأمام.
                    </>
                  }
                />
              </Callout>
              <Callout kicker={<T en="Manual work" ar="العمل اليدوي" />}>
                <T
                  en={
                    <>
                      Replaced <strong>paper-based workflows with automated ones</strong>
                      {" "}— receipts, approvals, journal entries, and monthly
                      department reports that used to be typed by hand now generate
                      themselves.
                    </>
                  }
                  ar={
                    <>
                      استبدلتُ <strong>التدفّقات الورقية بأخرى مؤتمتة</strong>{" "}
                      — الإيصالات، والموافقات، والقيود المحاسبية، والتقارير الشهرية
                      للأقسام التي كانت تُكتب يدوياً صارت تتولّد بنفسها.
                    </>
                  }
                />
              </Callout>
              <Callout kicker={<T en="Operations" ar="العمليات" />}>
                <T
                  en={
                    <>
                      <strong>Moved two businesses onto Odoo</strong> — a three-division
                      company (inventory, HR, payroll, accounting) and a restaurant
                      (POS, kitchen, ingredient-level stock), each its own company on
                      one deployment, replacing scattered Excel operations.
                    </>
                  }
                  ar={
                    <>
                      <strong>نقلتُ شركتين إلى Odoo</strong> — شركة بثلاثة أقسام
                      (مخزون، موارد بشرية، رواتب، محاسبة) ومطعماً (نقاط بيع، مطبخ،
                      مخزون على مستوى المكوّن)، كلٌّ شركةً مستقلّة على نشرٍ واحد، تحلّ
                      محلّ عملياتٍ مبعثرة على Excel.
                    </>
                  }
                />
              </Callout>
            </>
          ),
        },
        {
          kicker: <T en="Selected systems" ar="أنظمة مختارة" />,
          heading: <T en="Two more, in depth." ar="اثنان آخران، بالتفصيل." />,
          body: (
            <>
              <article className="mb-10">
                <h3 className="text-xl font-medium tracking-tight text-[var(--ink)]">
                  <T
                    en="Takhrjy — a non-Odoo ERP (design & verification)"
                    ar="Takhrjy — نظام ERP بغير Odoo (تصميم وتحقّق)"
                  />
                </h3>
                <p className="mt-3">
                  <T
                    en="Not every ERP is Odoo. Takhrjy is a Vue system a team built for a custom graduation-gifts business — a seven-role permission model, a six-stage order pipeline, retail and wholesale, and local plus international fulfillment. Here my role was design and testing: working from the team's requirements I designed the system's screens, and I was the tester who verified it worked before launch."
                    ar="ليس كلّ نظام ERP هو Odoo. Takhrjy نظامٌ بُني بـVue من قِبل فريق لمشروع هدايا تخرّجٍ مخصّص — نموذج صلاحياتٍ بسبعة أدوار، وخطّ طلباتٍ بستّ مراحل، وبيعٌ بالتجزئة والجملة، وتنفيذٌ محلّي ودولي. هنا كان دوري التصميم والاختبار: انطلاقاً من متطلبات الفريق صمّمتُ شاشات النظام، وكنتُ المختبِرة التي تحقّقت من أنه يعمل قبل الإطلاق."
                  />
                </p>
                <p className="mt-4 font-mono text-[0.8rem]">
                  <Link
                    href="/projects/takhrjy"
                    className="text-[var(--accent-deep)] underline decoration-[var(--accent)]/40 underline-offset-4 transition hover:decoration-[var(--accent)]"
                  >
                    <T en="Read the full case study →" ar="اقرأ دراسة الحالة كاملة ←" />
                  </Link>
                </p>
              </article>

              <article>
                <h3 className="text-xl font-medium tracking-tight text-[var(--ink)]">
                  <T en="Smart Expense Manager — open source" ar="Smart Expense Manager — مفتوح المصدر" />
                </h3>
                <p className="mt-3">
                  <T
                    en="A custom Odoo 19 module that replaces paper expense flows with token-secured, one-click email approvals routed through the hr.employee hierarchy — no login required. Journal entries are generated automatically on finance sign-off; monthly PDF reports are emailed by cron. Three-tier RBAC is enforced at the record-rule layer, and everything ships in full English and Arabic. Licensed LGPL-3.0 and live on GitHub."
                    ar="وحدة Odoo 19 مخصّصة تحلّ محلّ تدفّقات النفقات الورقية بموافقاتٍ بريديّة بنقرةٍ واحدة مؤمّنة برمز، تُوجَّه عبر تسلسل hr.employee — دون الحاجة لتسجيل الدخول. تُولَّد القيود المحاسبية تلقائياً عند اعتماد المالية؛ وتُرسَل تقارير PDF الشهرية بالبريد عبر cron. ويُفرَض تحكّمٌ بالوصول بثلاث طبقات على مستوى قواعد السجلات، وكلّ شيء يُطلق بالإنجليزية والعربية كاملةً. مرخّص LGPL-3.0 وحيّ على GitHub."
                  />
                </p>
                <p className="mt-4 font-mono text-[0.8rem]">
                  <Link
                    href="/projects/smart-expense"
                    className="text-[var(--accent-deep)] underline decoration-[var(--accent)]/40 underline-offset-4 transition hover:decoration-[var(--accent)]"
                  >
                    <T en="Read the full case study →" ar="اقرأ دراسة الحالة كاملة ←" />
                  </Link>
                </p>
              </article>
            </>
          ),
        },
      ]}
      nextProject={{
        label: (
          <T
            en="Smart Expense Manager — the email-as-UI deep dive →"
            ar="Smart Expense Manager — الغوص في «البريد كواجهة» →"
          />
        ),
        href: "/projects/smart-expense",
      }}
      />
    </>
  );
}
