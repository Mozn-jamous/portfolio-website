import type { Metadata } from "next";
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
  "Replaced a three-division company's Excel operation — import, warehousing, and solar energy — with one live Odoo ERP: HR, payroll, attendance, purchasing, inventory, and accounting. Built solo in Damascus; still in daily production after handoff.";

export const metadata: Metadata = {
  title: "Techno Solution — Odoo ERP for a 3-division company — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "Techno Solution — from Excel to a live ERP",
    description: DESCRIPTION,
    type: "article",
    url: siteUrl("/projects/techno-solution"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Techno Solution — from Excel to a live ERP",
    description: DESCRIPTION,
  },
};

export default function TechnoSolutionPage() {
  return (
    <>
      <StructuredData
        data={caseStudyStructuredData({
          name: "Techno Solution — Odoo ERP implementation",
          description: DESCRIPTION,
          path: "/projects/techno-solution",
          year: "2025",
        })}
      />
      <CaseStudyLayout
        meta={{
          eyebrow: <T en="Odoo ERP · Full implementation" ar="نظام Odoo ERP · تطبيق كامل" />,
          status: <T en="Live in production" ar="حيّ في الإنتاج" />,
          title: <T en="Techno Solution — from Excel to a live ERP." ar="Techno Solution — من Excel إلى نظام ERP حيّ." />,
          lede: (
            <T
              en="Techno Solution (Eyad Mahfouz Trading) runs three divisions — import, warehousing, and solar energy. When I arrived, the whole operation lived in spreadsheets. I designed, configured, and deployed a single Odoo system the company runs on: HR, payroll, attendance, purchasing, inventory, and accounting. Built solo, with no local Odoo support to lean on."
              ar="تدير Techno Solution (إياد محفوظ للتجارة) ثلاثة أقسام — الاستيراد، والتخزين، والطاقة الشمسية. حين وصلتُ، كانت العملية كلّها تعيش في جداول Excel. صمّمتُ وهيّأتُ وأطلقتُ نظام Odoo واحداً تعمل عليه الشركة: الموارد البشرية، والرواتب، والحضور، والمشتريات، والمخزون، والمحاسبة. بُني منفردةً، دون دعم Odoo محلّي أتّكئ عليه."
            />
          ),
          year: <T en="Feb – Sep 2025" ar="شباط – أيلول 2025" />,
          role: <T en="Sole Odoo implementer · Systems designer" ar="مُنفّذة Odoo الوحيدة · مصمّمة أنظمة" />,
          stack: [
            "Odoo 16/17",
            "Python",
            "PostgreSQL",
            "QWeb",
            "OWL",
            "HR & Payroll",
            "Accounting",
            "Inventory",
            "Purchase",
          ],
        }}
        metrics={[
          { value: "18", label: <T en="Employees onboarded across 3 divisions" ar="موظفاً أُدخلوا عبر 3 أقسام" /> },
          { value: "6,514", label: <T en="Working hours tracked" ar="ساعة عملٍ متتبَّعة" /> },
          { value: "140", label: <T en="Purchase orders managed" ar="أمر شراءٍ مُدار" /> },
          { value: <T en="Still live" ar="ما زال حيّاً" />, label: <T en="In daily production after handoff" ar="في الإنتاج اليومي بعد التسليم" /> },
        ]}
        sections={[
          {
            kicker: <T en="The situation" ar="الوضع" />,
            heading: <T en="A three-division company running on Excel." ar="شركةٌ بثلاثة أقسام تعمل على Excel." />,
            body: (
              <>
                <Lead>
                  <T
                    en="Techno Solution runs three divisions — import, warehousing, and solar energy. When I arrived, the entire operation lived in spreadsheets, with a single secretary entering data for all of it. There was no real-time visibility, no unified accounting, and no way to see the business as one system."
                    ar="تدير Techno Solution ثلاثة أقسام — الاستيراد، والتخزين، والطاقة الشمسية. حين وصلتُ، كانت العملية كلّها تعيش في جداول Excel، بسكرتيرةٍ واحدة تُدخل البيانات لكل ذلك. لم تكن هناك رؤيةٌ لحظية، ولا محاسبةٌ موحّدة، ولا طريقةٌ لرؤية المشروع كنظامٍ واحد."
                  />
                </Lead>
                <FactGrid
                  items={[
                    { label: <T en="Company" ar="الشركة" />, value: <T en="Techno Solution · 3 divisions" ar="Techno Solution · 3 أقسام" /> },
                    { label: <T en="Industry" ar="القطاع" />, value: <T en="Import · warehousing · solar" ar="استيراد · تخزين · طاقة شمسية" /> },
                    { label: <T en="Before" ar="قبل" />, value: <T en="Excel + one secretary" ar="Excel + سكرتيرة واحدة" /> },
                    { label: <T en="Engagement" ar="مدة التكليف" />, value: <T en="Feb – Sep 2025" ar="شباط – أيلول 2025" /> },
                    { label: <T en="Role" ar="الدور" />, value: <T en="Sole Odoo implementer" ar="مُنفّذة Odoo الوحيدة" /> },
                    { label: <T en="Location" ar="المكان" />, value: <T en="Damascus, Syria" ar="دمشق، سوريا" /> },
                  ]}
                />
              </>
            ),
          },
          {
            kicker: <T en="The challenge" ar="التحدّي" />,
            heading: (
              <T
                en="Learning Odoo and shipping it — at the same time."
                ar="تعلّم Odoo وإطلاقه — في الوقت نفسه."
              />
            ),
            body: (
              <>
                <p>
                  <T
                    en="At the time there was no local Odoo expertise in Syria to call on and no support network to fall back to. The learning curve and the build happened simultaneously — I was teaching myself the platform while standing up a live system that real people depended on every day."
                    ar="في ذلك الوقت لم تكن هناك خبرة Odoo محلّية في سوريا أستعين بها، ولا شبكة دعمٍ أرجع إليها. حدث منحنى التعلّم والبناء في آنٍ معاً — كنتُ أُعلّم نفسي المنصّة بينما أُقيم نظاماً حيّاً يعتمد عليه أناسٌ حقيقيون كل يوم."
                  />
                </p>
                <Callout kicker={<T en="The constraint" ar="القيد" />}>
                  <T
                    en="There was no margin for a long sandbox phase. Whatever I configured had to be correct enough to put in front of staff the same week — accounting that has to balance, payroll that has to pay people, purchasing that has to track real money."
                    ar="لم يكن هناك هامشٌ لمرحلة تجربةٍ طويلة. كلّ ما أُهيّئه كان يجب أن يكون صحيحاً بما يكفي لوضعه أمام الموظفين في الأسبوع نفسه — محاسبةٌ يجب أن تتوازن، ورواتب يجب أن تدفع للناس، ومشترياتٌ يجب أن تتتبّع أموالاً حقيقية."
                  />
                </Callout>
              </>
            ),
          },
          {
            kicker: <T en="What I built" ar="ما الذي بنيته" />,
            heading: <T en="One system the company runs on." ar="نظامٌ واحد تعمل عليه الشركة." />,
            body: (
              <>
                <p>
                  <T
                    en="I replaced the spreadsheets with a single Odoo system built around how Techno Solution actually works — HR and payroll, attendance, purchasing, inventory, and accounting, all on one source of truth. The first step was getting the whole company into it: 18 employees onboarded across the three divisions."
                    ar="استبدلتُ جداول Excel بنظام Odoo واحد مبنيٍّ حول طريقة عمل Techno Solution فعلاً — الموارد البشرية والرواتب، والحضور، والمشتريات، والمخزون، والمحاسبة، كلّها على مصدرٍ واحد للحقيقة. كانت الخطوة الأولى إدخال الشركة كلّها إليه: 18 موظفاً عبر الأقسام الثلاثة."
                  />
                </p>
                <Figure
                  src="/work/techno-solution/employees.webp"
                  label="Employees"
                  caption={<T en="Employees — 18 staff onboarded across all divisions" ar="الموظفون — 18 موظفاً أُدخلوا عبر كل الأقسام" />}
                />
                <FactGrid
                  items={[
                    { label: <T en="HR & Payroll" ar="الموارد البشرية والرواتب" />, value: <T en="18 employees · salary rules" ar="18 موظفاً · قواعد رواتب" /> },
                    { label: <T en="Attendance" ar="الحضور" />, value: <T en="Per-employee · linked to payroll" ar="لكل موظف · مرتبط بالرواتب" /> },
                    { label: <T en="Purchase" ar="المشتريات" />, value: <T en="Dual-currency purchase orders" ar="أوامر شراء بعملة مزدوجة" /> },
                    { label: <T en="Inventory" ar="المخزون" />, value: <T en="Multi-division stock moves" ar="حركات مخزون متعدّدة الأقسام" /> },
                    { label: <T en="Accounting" ar="المحاسبة" />, value: <T en="Unified company books" ar="دفاتر شركةٍ موحّدة" /> },
                    { label: <T en="Reporting" ar="التقارير" />, value: <T en="Live dashboards, not Excel" ar="لوحات حيّة، لا Excel" /> },
                  ]}
                />
              </>
            ),
          },
          {
            kicker: <T en="In daily use" ar="في الاستخدام اليومي" />,
            heading: <T en="Real data, every day." ar="بياناتٌ حقيقية، كل يوم." />,
            body: (
              <>
                <Lead>
                  <T
                    en="An ERP is only real once people put their daily work into it. These are the live reports — attendance, purchasing, and stock — running on the company's actual operations."
                    ar="لا يصير نظام ERP حقيقياً إلا حين يضع الناس عملهم اليومي فيه. هذه هي التقارير الحيّة — الحضور، والمشتريات، والمخزون — تعمل على عمليات الشركة الفعلية."
                  />
                </Lead>
                <Figure
                  src="/work/techno-solution/attendance.webp"
                  label="Attendance report"
                  caption={<T en="Attendance Report — 6,514+ working hours tracked, per-employee breakdown" ar="تقرير الحضور — 6,514+ ساعة عملٍ متتبَّعة، بتفصيلٍ لكل موظف" />}
                />
                <FactGrid
                  items={[
                    { label: <T en="Working hours" ar="ساعات العمل" />, value: <T en="6,514+ tracked" ar="6,514+ متتبَّعة" /> },
                    { label: <T en="Purchase orders" ar="أوامر الشراء" />, value: <T en="140+ managed" ar="140+ مُدار" /> },
                    { label: <T en="Inventory moves" ar="حركات المخزون" />, value: <T en="884 across divisions" ar="884 عبر الأقسام" /> },
                    { label: <T en="Currencies" ar="العملات" />, value: <T en="SYP & USD" ar="الليرة السورية والدولار" /> },
                  ]}
                />
                <Figure
                  src="/work/techno-solution/purchase-orders.webp"
                  label="Purchase orders"
                  caption={<T en="Purchase Orders — 140+ orders, dual-currency (SYP & USD)" ar="أوامر الشراء — 140+ أمراً، بعملة مزدوجة (الليرة والدولار)" />}
                />
                <p>
                  <T
                    en="The inventory is real solar and electrical stock — cables, inverters, breakers, changeover switches — moving through the warehouse division, every movement tracked."
                    ar="المخزون مخزونٌ شمسي وكهربائي حقيقي — كابلات، عاكسات، قواطع، مفاتيح تحويل — يتحرّك عبر قسم المستودع، وكل حركةٍ متتبَّعة."
                  />
                </p>
                <Figure
                  src="/work/techno-solution/inventory-moves.webp"
                  label="Inventory moves"
                  caption={<T en="Inventory Moves — 884 movements (solar / electrical stock)" ar="حركات المخزون — 884 حركة (مخزون شمسي / كهربائي)" />}
                />
              </>
            ),
          },
          {
            kicker: <T en="The proof" ar="الدليل" />,
            heading: <T en="It outlived my involvement." ar="استمرّ بعد انتهاء عملي." />,
            body: (
              <>
                <Callout kicker={<T en="The signal it worked" ar="إشارة أنه نجح" />}>
                  <T
                    en="“When I left, the company didn't go back to Excel. They hired a dedicated Odoo developer to maintain and grow what I built.”"
                    ar="«حين غادرتُ، لم تعد الشركة إلى Excel. بل وظّفت مطوّر Odoo متفرّغاً لصيانة وتنمية ما بنيته.»"
                  />
                </Callout>
                <p>
                  <T
                    en="The screenshots above aren't a demo — they're the live system as it runs today, captured nine months after I handed it off. The sales report below covers twelve continuous months of activity. The strongest signal that an implementation worked is that there's something solid enough to hand off, and that it keeps running once you're gone."
                    ar="اللقطات أعلاه ليست عرضاً تجريبياً — بل هي النظام الحيّ كما يعمل اليوم، التُقطت بعد تسعة أشهرٍ من تسليمه. ويغطّي تقرير المبيعات أدناه اثني عشر شهراً متواصلاً من النشاط. أقوى إشارةٍ على نجاح أي تطبيق هي وجود شيءٍ متينٍ بما يكفي ليُسلَّم، وأن يستمرّ في العمل بعد رحيلك."
                  />
                </p>
                <Figure
                  src="/work/techno-solution/sales-analysis.webp"
                  label="Sales analysis"
                  caption={<T en="Sales Analysis — 12 months of activity after handoff" ar="تحليل المبيعات — 12 شهراً من النشاط بعد التسليم" />}
                />
              </>
            ),
          },
          {
            kicker: <T en="Reflection" ar="تأمّل" />,
            heading: <T en="What I'd carry forward." ar="ما سأحمله معي." />,
            body: (
              <>
                <p>
                  <T
                    en="The lesson wasn't technical — it was that an ERP succeeds or fails on whether the people using it can do their jobs without thinking about the software. Building it solo, with no local support, is where the habit of designing systems around the business — and then making them simple enough to hand off — came from."
                    ar="لم يكن الدرس تقنياً — بل أن نظام ERP ينجح أو يفشل بناءً على ما إذا كان مستخدموه يستطيعون أداء عملهم دون التفكير في البرمجية. بناؤه منفردةً، دون دعمٍ محلّي، هو منشأ عادة تصميم الأنظمة حول المشروع — ثم جعلها بسيطةً بما يكفي لتُسلَّم."
                  />
                </p>
              </>
            ),
          },
        ]}
        nextProject={{
          label: <T en="Burgasm — a restaurant, fully on Odoo →" ar="Burgasm — مطعمٌ بالكامل على Odoo →" />,
          href: "/projects/burgasm",
        }}
      />
    </>
  );
}
