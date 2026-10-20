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
import { siteUrl } from "@/lib/base-path";

const DESCRIPTION =
  "Odoo ERP work for two companies at one employer: accounting, point of sale, purchasing and inventory on a self-hosted instance that went from Odoo 17 to 19. Plus an open-source Odoo 19 expense module with one-click email approvals.";

export const metadata: Metadata = {
  title: "ERP & Odoo Systems — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "ERP & Odoo Systems — business operations, engineered",
    description: DESCRIPTION,
    type: "article",
    url: siteUrl("/odoo"),
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
            en="Odoo systems for two companies at one employer: accounting, point of sale, purchasing and inventory on a self-hosted instance that went from Odoo 17 to 19, with a colleague on HR, attendance and payroll. Each one is shaped around how the business already works rather than around Odoo's defaults. On my own time I also wrote an Odoo 19 expense module, open source on GitHub."
            ar="أنظمة Odoo لشركتين لدى جهة عمل واحدة: المحاسبة، ونقاط البيع، والمشتريات، والمخزون على نسخة مستضافة ذاتياً انتقلت من Odoo 17 إلى 19، مع زميلٍ تولّى الموارد البشرية والحضور والرواتب. وكل واحد منها مصوغ حول طريقة عمل الشركة القائمة بدل إعدادات Odoo الافتراضية. وفي وقتي الخاص كتبتُ أيضاً وحدة نفقات لـOdoo 19، مفتوحة المصدر على GitHub."
          />
        ),
        year: <T en="2025 to now" ar="2025 حتى الآن" />,
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
          value: "2",
          label: <T en="Companies on one multi-company Odoo instance, 17 to 19" ar="شركتان على نسخة Odoo واحدة متعدّدة الشركات، من 17 إلى 19" />,
        },
        {
          value: "3",
          label: <T en="Divisions of one company run on one Odoo system" ar="أقسام لشركة واحدة تُدار بنظام Odoo واحد" />,
        },
        {
          value: <T en="1-click" ar="نقرة واحدة" />,
          label: <T en="Email approvals in the Smart Expense module, no login" ar="موافقات بريدية في وحدة Smart Expense، بلا تسجيل دخول" />,
        },
        {
          value: <T en="Open source" ar="مفتوح المصدر" />,
          label: <T en="Smart Expense Manager, LGPL-3.0 on GitHub" ar="Smart Expense Manager، برخصة LGPL-3.0 على GitHub" />,
        },
      ]}
      sections={[
        {
          kicker: <T en="Featured implementations" ar="تطبيقات مختارة" />,
          heading: <T en="Two businesses, on one Odoo instance." ar="شركتان، على نسخة Odoo واحدة." />,
          body: (
            <>
              <Lead>
                <T
                  en="This is the fullest version of the work: two separate businesses at one employer, each its own company on one self-hosted deployment, which a colleague and I moved onto Odoo. Both were in daily production when I handed them off in November 2025. Real screenshots and real numbers."
                  ar="هذه أكمل نسخة من هذا العمل: شركتان منفصلتان لدى جهة عمل واحدة، كل واحدة شركة مستقلّة على نشر واحد مستضاف ذاتياً، نقلتُهما مع زميلٍ إلى Odoo. وكانت كلتاهما في الإنتاج اليومي حين سلّمتهما في تشرين الثاني 2025. لقطات حقيقية وأرقام حقيقية."
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
                    en="Techno Solution: a three-division company, from spreadsheets to ERP"
                    ar="Techno Solution: شركة بثلاثة أقسام، من Excel إلى ERP"
                  />
                </h3>
                <p className="mt-3">
                  <T
                    en={
                      <>
                        One Odoo system replacing a scattered Excel operation for an
                        import / warehousing / solar company: HR, payroll, attendance,
                        purchasing, inventory and accounting. I owned accounting,
                        purchasing and inventory; a colleague owned HR, attendance and
                        payroll.{" "}
                        <strong>18 employees · 6,514 hours · 140 purchase orders</strong>.
                        In production when I handed it off.
                      </>
                    }
                    ar={
                      <>
                        نظام Odoo واحد يحلّ محلّ عمليةٍ مبعثرة على Excel لشركة استيراد /
                        تخزين / طاقة شمسية: الموارد البشرية، والرواتب، والحضور،
                        والمشتريات، والمخزون، والمحاسبة. تولّيتُ المحاسبة والمشتريات
                        والمخزون؛ وتولّى زميلٌ الموارد البشرية والحضور والرواتب.{" "}
                        <strong>18 موظفاً · 6,514 ساعة · 140 أمر شراء</strong>. في
                        الإنتاج حين سلّمته.
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
                  <T en="Burgasm: a restaurant running entirely on Odoo" ar="Burgasm: مطعم يعمل بالكامل على Odoo" />
                </h3>
                <p className="mt-3">
                  <T
                    en={
                      <>
                        Proper books (68 accounts, 3 partners, dual-currency), a live
                        point of sale (<strong>500+ orders</strong>), and inventory
                        tracked down to the ingredient —{" "}
                        <strong>10,000+ moves linked to POS</strong>.
                      </>
                    }
                    ar={
                      <>
                        دفاتر محاسبية سليمة (68 حساباً، 3 شركاء، عملة مزدوجة)، ونقطة
                        بيعٍ حيّة (<strong>500+ طلب</strong>)، ومخزونٌ
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
                  en="These are systems that survived contact with daily operations rather than demos that look good in a meeting. At one employer, two companies on one Odoo instance with a colleague; on my own time, one open-source module. The implementation covered:"
                  ar="هذه أنظمة صمدت أمام العمليات اليومية، لا عروضاً تبدو جيدة في اجتماع. لدى جهة عمل واحدة، شركتان على نسخة Odoo واحدة مع زميل؛ وفي وقتي الخاص، وحدة واحدة مفتوحة المصدر. وغطّى التطبيق:"
                />
              </Lead>
              <FactGrid
                items={[
                  { label: <T en="Accounting" ar="المحاسبة" />, value: <T en="Chart of accounts · dual-currency books" ar="شجرة حسابات · دفاتر بعملتين" /> },
                  { label: <T en="Point of sale" ar="نقاط البيع" />, value: <T en="Restaurant POS · ingredient-level stock" ar="نقاط بيع مطعم · مخزون على مستوى المكوّن" /> },
                  { label: <T en="Purchase & inventory" ar="المشتريات والمخزون" />, value: <T en="Purchase orders · stock moves across divisions" ar="أوامر شراء · حركات مخزون عبر الأقسام" /> },
                  { label: <T en="HR · attendance · payroll" ar="الموارد البشرية · الحضور · الرواتب" />, value: <T en="A colleague's modules, same instance" ar="وحدات زميلٍ، على النسخة نفسها" /> },
                  { label: <T en="Expense management" ar="إدارة النفقات" />, value: <T en="Open-source module · receipt → approval → journal entry" ar="وحدة مفتوحة المصدر · إيصال ← موافقة ← قيد محاسبي" /> },
                  { label: <T en="Approval workflows" ar="تدفّقات الموافقات" />, value: <T en="Email-based · no login (Smart Expense)" ar="عبر البريد · دون تسجيل دخول (Smart Expense)" /> },
                ]}
              />
              <p>
                <T
                  en="What these have in common is not a feature list. Each one was shaped around the people who use it. A manager who never opens Odoo can still approve an expense from email. A cashier who had never touched an ERP ran the till on day one. The system bends to the business rather than the other way around."
                  ar="ما يجمع هذه الأنظمة ليس قائمة ميزات. كل واحد منها صِيغ حول من يستخدمه. مديرٌ لا يفتح Odoo أبداً يستطيع مع ذلك الموافقة على نفقة من بريده. وكاشيرٌ لم يلمس نظام ERP من قبل أدار الصندوق في يومه الأول. والنظام ينحني للشركة بدل أن ينحني العكس."
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
                  en="Under these systems is real Odoo engineering, not just configuration in the UI. The modules are written in Python and XML, access is enforced at the data layer, and the expense module ships in English and Arabic."
                  ar="تحت هذه الأنظمة هندسة Odoo حقيقية، لا مجرّد إعداد في الواجهة. الوحدات مكتوبة بـPython وXML، والوصول مفروض في طبقة البيانات، ووحدة النفقات تُطلق بالإنجليزية والعربية."
                />
              </p>
              <FactGrid
                items={[
                  { label: <T en="Custom Odoo modules" ar="وحدات Odoo مخصّصة" />, value: "Python · XML · ORM" },
                  { label: <T en="Workflow automation" ar="أتمتة سير العمل" />, value: <T en="Server actions · cron · Studio" ar="إجراءات الخادم · cron · Studio" /> },
                  { label: <T en="Access control" ar="التحكّم بالوصول" />, value: <T en="Record rules · 3-tier RBAC" ar="قواعد السجلات · تحكّم بثلاث طبقات" /> },
                  { label: <T en="Reporting" ar="التقارير" />, value: <T en="QWeb PDF · scheduled email" ar="QWeb PDF · بريد مجدول" /> },
                  { label: <T en="Deployment" ar="النشر" />, value: <T en="Self-hosted Odoo on Linux · 17 to 19" ar="Odoo مستضاف ذاتياً على Linux · من 17 إلى 19" /> },
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
                  en="The point of a business system is not the technology. It is what changes for the company once the thing is running."
                  ar="جوهر نظام الأعمال ليس التقنية. بل ما الذي يتغيّر للشركة بمجرّد أن يعمل."
                />
              </p>
              <Callout kicker={<T en="Approvals" ar="الموافقات" />}>
                <T
                  en={
                    <>
                      In the Smart Expense module, an approval is{" "}
                      <strong>one click from an email link, no login</strong>. Approve,
                      reject or request a revision, straight from the inbox.
                    </>
                  }
                  ar={
                    <>
                      في وحدة Smart Expense، الموافقة{" "}
                      <strong>نقرةٌ واحدة من رابط بريدي، بلا تسجيل دخول</strong>.
                      موافقة أو رفض أو طلب تعديل، مباشرة من البريد.
                    </>
                  }
                />
              </Callout>
              <Callout kicker={<T en="Manual work" ar="العمل اليدوي" />}>
                <T
                  en={
                    <>
                      The module is built to <strong>take the paper out of the loop</strong>:
                      receipts upload from a phone, the journal entry posts on finance
                      approval, and a monthly PDF report goes out by cron.
                    </>
                  }
                  ar={
                    <>
                      الوحدة مبنيّة لـ<strong>إخراج الورق من الحلقة</strong>: الإيصالات
                      تُرفع من الجوّال، والقيد المحاسبي يُرحَّل عند موافقة المالية،
                      وتقرير PDF شهري يخرج عبر cron.
                    </>
                  }
                />
              </Callout>
              <Callout kicker={<T en="Operations" ar="العمليات" />}>
                <T
                  en={
                    <>
                      <strong>Moved two businesses onto Odoo</strong> with one colleague:
                      a three-division company (accounting, purchasing and inventory on
                      my side; HR, attendance and payroll on the colleague's) and a
                      restaurant (POS, ingredient-level stock, dual-currency books),
                      each its own company on one self-hosted deployment, replacing
                      scattered Excel operations.
                    </>
                  }
                  ar={
                    <>
                      <strong>نقلتُ شركتين إلى Odoo</strong> مع زميلٍ واحد: شركة بثلاثة
                      أقسام (المحاسبة والمشتريات والمخزون من جانبي؛ والموارد البشرية
                      والحضور والرواتب من جانب الزميل) ومطعماً (نقاط بيع، مخزون على
                      مستوى المكوّن، دفاتر بعملتين)، كلٌّ شركةً مستقلّة على نشرٍ واحد
                      مستضاف ذاتياً، تحلّ محلّ عملياتٍ مبعثرة على Excel.
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
                    en="Takhrjy: an ERP that is not Odoo (design and front-end)"
                    ar="Takhrjy: نظام ERP بغير Odoo (تصميم وواجهة)"
                  />
                </h3>
                <p className="mt-3">
                  <T
                    en="Not every ERP is Odoo. Takhrjy is a Vue system a team built in 2026 for a custom graduation-gifts business: seven roles, a six-stage order pipeline, retail and wholesale, and both local and international fulfillment, now in production at the client. I was the designer and front-end developer on the team. Working from the team's requirements I designed the web views and built them in Vue, while a teammate handled the backend."
                    ar="ليس كل نظام ERP هو Odoo. Takhrjy نظام بناه فريق بـVue عام 2026 لمشروع هدايا تخرّج مخصّص: سبعة أدوار، وخطّ طلبات بستّ مراحل، وبيع بالتجزئة والجملة، وتنفيذ محلّي ودولي، وهو الآن في الإنتاج لدى العميل. كنتُ المصمّمة ومطوّرة الواجهة الأمامية في الفريق. انطلاقاً من متطلبات الفريق صمّمتُ واجهات الويب وبنيتُها بـVue، بينما تكفّل زميل بالـbackend."
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
                  <T en="Smart Expense Manager, open source" ar="Smart Expense Manager، مفتوح المصدر" />
                </h3>
                <p className="mt-3">
                  <T
                    en="A personal Odoo 19 module I wrote in May 2026, after leaving Techno Solution, built to replace paper expense flows with token-secured email links to approve, reject or request a revision, routed to the direct manager through hr.employee, so nobody has to log in. The journal entry posts on finance approval, and a monthly PDF report goes out by cron. Three security groups are enforced at the record-rule layer, and everything ships in full English and Arabic. Licensed LGPL-3.0 and open source on GitHub."
                    ar="وحدة Odoo 19 شخصية كتبتُها في أيار 2026، بعد مغادرة Techno Solution، مبنيّة لتحلّ محلّ تدفّقات النفقات الورقية بروابط بريدية مؤمّنة برمز للموافقة أو الرفض أو طلب تعديل، تُوجَّه إلى المدير المباشر عبر hr.employee، فلا يحتاج أحد إلى تسجيل الدخول. ويُرحَّل القيد المحاسبي عند موافقة المالية، ويخرج تقرير PDF شهري عبر cron. وتُفرَض ثلاث مجموعات أمان على مستوى قواعد السجلات، وكل شيء يُطلق بالإنجليزية والعربية كاملة. مرخّص LGPL-3.0 ومفتوح المصدر على GitHub."
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
            en="Smart Expense Manager: the full story of email as the interface →"
            ar="Smart Expense Manager: القصة الكاملة للبريد كواجهة →"
          />
        ),
        href: "/projects/smart-expense",
      }}
      />
    </>
  );
}
