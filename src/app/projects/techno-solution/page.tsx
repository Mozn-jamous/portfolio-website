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
  "Moved a three-division company's Excel operation (import, warehousing, and solar energy) onto one self-hosted Odoo ERP in Damascus. I owned accounting, purchasing and inventory; a colleague owned HR, attendance and payroll. In production when I handed it off in November 2025.";

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
          status: <T en="In production at handoff" ar="في الإنتاج عند التسليم" />,
          title: <T en="Techno Solution: from spreadsheets to one ERP for the whole company." ar="Techno Solution: من جداول Excel إلى نظام ERP واحد للشركة كلها." />,
          lede: (
            <T
              en="Techno Solution (Eyad Mahfouz Trading) runs three divisions: import, warehousing and solar energy. When I arrived the whole operation lived in spreadsheets. With one colleague I moved it onto a self-hosted Odoo system covering HR, payroll, attendance, purchasing, inventory and accounting. I owned accounting, purchasing and inventory; my colleague owned HR, attendance and payroll."
              ar="تدير Techno Solution (إياد محفوظ للتجارة) ثلاثة أقسام: الاستيراد، والتخزين، والطاقة الشمسية. حين وصلتُ كانت العملية كلها تعيش في جداول Excel. مع زميلٍ واحد نقلتُها إلى نظام Odoo مستضاف ذاتياً يغطّي الموارد البشرية والرواتب والحضور والمشتريات والمخزون والمحاسبة. تولّيتُ أنا المحاسبة والمشتريات والمخزون، وتولّى زميلي الموارد البشرية والحضور والرواتب."
            />
          ),
          year: <T en="Feb – Nov 2025" ar="شباط – تشرين الثاني 2025" />,
          role: <T en="Odoo / ERP developer · Systems designer" ar="مطوّرة Odoo / ERP · مصمّمة أنظمة" />,
          stack: [
            "Odoo 17–19",
            "Python",
            "PostgreSQL",
            "QWeb",
            "OWL",
            "Accounting",
            "Inventory",
            "Purchase",
          ],
        }}
        metrics={[
          { value: "18", label: <T en="Employees onboarded across 3 divisions" ar="موظفاً أُدخلوا عبر 3 أقسام" /> },
          { value: "6,514", label: <T en="Working hours tracked" ar="ساعة عملٍ متتبَّعة" /> },
          { value: "140", label: <T en="Purchase orders managed" ar="أمر شراءٍ مُدار" /> },
          { value: <T en="Nov 2025" ar="تشرين الثاني 2025" />, label: <T en="In production when I handed it off" ar="في الإنتاج حين سلّمته" /> },
        ]}
        sections={[
          {
            kicker: <T en="The situation" ar="الوضع" />,
            heading: <T en="A three-division company running on Excel." ar="شركةٌ بثلاثة أقسام تعمل على Excel." />,
            body: (
              <>
                <Lead>
                  <T
                    en="One secretary was entering the data for all three divisions by hand. Nobody had real-time visibility, the accounting was not unified, and there was no way to see the business as a single system."
                    ar="كانت سكرتيرة واحدة تُدخل بيانات الأقسام الثلاثة يدوياً. ولم يكن لأحد رؤية لحظية، ولم تكن المحاسبة موحّدة، ولا طريقة لرؤية المشروع نظاماً واحداً."
                  />
                </Lead>
                <FactGrid
                  items={[
                    { label: <T en="Company" ar="الشركة" />, value: <T en="Techno Solution · 3 divisions" ar="Techno Solution · 3 أقسام" /> },
                    { label: <T en="Industry" ar="القطاع" />, value: <T en="Import · warehousing · solar" ar="استيراد · تخزين · طاقة شمسية" /> },
                    { label: <T en="Before" ar="قبل" />, value: <T en="Excel + one secretary" ar="Excel + سكرتيرة واحدة" /> },
                    { label: <T en="Engagement" ar="مدة التكليف" />, value: <T en="Feb – Nov 2025" ar="شباط – تشرين الثاني 2025" /> },
                    { label: <T en="Role" ar="الدور" />, value: <T en="Odoo developer, in a team of two" ar="مطوّرة Odoo، ضمن فريق من اثنين" /> },
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
                en="Learning Odoo while shipping it."
                ar="أن أتعلّم Odoo وأُطلقه في الوقت نفسه."
              />
            ),
            body: (
              <>
                <p>
                  <T
                    en="The learning curve and the build happened at once: I was teaching myself the platform while standing up a live system real people depended on every day."
                    ar="حدث منحنى التعلّم والبناء في آنٍ واحد: كنتُ أُعلّم نفسي المنصّة بينما أُقيم نظاماً حيّاً يعتمد عليه أناس حقيقيون كل يوم."
                  />
                </p>
                <Callout kicker={<T en="The constraint" ar="القيد" />}>
                  <T
                    en="There was no margin for a long sandbox phase. Whatever I configured had to be correct enough to put in front of staff that same week: accounting that has to balance, purchasing that has to track real money, stock that has to match the warehouse."
                    ar="لم يكن هناك هامش لمرحلة تجربة طويلة. كل ما أُهيّئه كان يجب أن يكون صحيحاً بما يكفي لوضعه أمام الموظفين في الأسبوع نفسه: محاسبة يجب أن تتوازن، ومشتريات يجب أن تتتبّع أموالاً حقيقية، ومخزون يجب أن يطابق المستودع."
                  />
                </Callout>
              </>
            ),
          },
          {
            kicker: <T en="What we built" ar="ما الذي بنيناه" />,
            heading: <T en="One system for the whole company." ar="نظامٌ واحد للشركة كلها." />,
            body: (
              <>
                <p>
                  <T
                    en="Together we replaced the spreadsheets with one Odoo system shaped around how Techno Solution actually works: HR and payroll, attendance, purchasing, inventory and accounting, all reading from the same place. My side was accounting and the chart of accounts, purchasing and inventory, with the custom Python and XML automations those modules needed; my colleague took HR, attendance and payroll. The first step was getting the whole company into it, which meant onboarding 18 employees across the three divisions."
                    ar="استبدلنا معاً جداول Excel بنظام Odoo واحد مصوغ حول طريقة عمل Techno Solution فعلاً: الموارد البشرية والرواتب، والحضور، والمشتريات، والمخزون، والمحاسبة، كلها تقرأ من المكان نفسه. وكان جانبي المحاسبة وشجرة الحسابات، والمشتريات، والمخزون، مع أتمتة Python وXML المخصّصة التي احتاجتها تلك الوحدات؛ وتولّى زميلي الموارد البشرية والحضور والرواتب. وكانت الخطوة الأولى إدخال الشركة كلها إليه، أي إدخال 18 موظفاً عبر الأقسام الثلاثة."
                  />
                </p>
                <Figure
                  src="/work/techno-solution/employees.webp"
                  label="Employees"
                  caption={<T en="Employees: 18 staff onboarded across all divisions" ar="الموظفون: 18 موظفاً أُدخلوا عبر كل الأقسام" />}
                />
                <FactGrid
                  items={[
                    { label: <T en="HR & Payroll" ar="الموارد البشرية والرواتب" />, value: <T en="18 employees · salary rules" ar="18 موظفاً · قواعد رواتب" /> },
                    { label: <T en="Attendance" ar="الحضور" />, value: <T en="Per-employee · linked to payroll" ar="لكل موظف · مرتبط بالرواتب" /> },
                    { label: <T en="Purchase" ar="المشتريات" />, value: <T en="Dual-currency purchase orders" ar="أوامر شراء بعملة مزدوجة" /> },
                    { label: <T en="Inventory" ar="المخزون" />, value: <T en="Multi-division stock moves" ar="حركات مخزون متعدّدة الأقسام" /> },
                    { label: <T en="Accounting" ar="المحاسبة" />, value: <T en="Unified company books" ar="دفاتر شركةٍ موحّدة" /> },
                    { label: <T en="Reporting" ar="التقارير" />, value: <T en="Live dashboards instead of spreadsheets" ar="لوحات حيّة بدل جداول Excel" /> },
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
                    en="An ERP only becomes real once people put their daily work into it. These are the live reports for attendance, purchasing and stock, running on the company's actual operations, captured while I was still on the project."
                    ar="لا يصير نظام ERP حقيقياً إلا حين يضع الناس عملهم اليومي فيه. وهذه هي التقارير الحيّة للحضور والمشتريات والمخزون، تعمل على عمليات الشركة الفعلية، التُقطت وأنا ما زلتُ على المشروع."
                  />
                </Lead>
                <Figure
                  src="/work/techno-solution/attendance.webp"
                  label="Attendance report"
                  caption={<T en="Attendance report: 6,514+ working hours tracked, broken down per employee" ar="تقرير الحضور: أكثر من 6,514 ساعة عمل متتبَّعة، بتفصيل لكل موظف" />}
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
                  caption={<T en="Purchase orders: 140+ orders in Syrian pounds and dollars" ar="أوامر الشراء: أكثر من 140 أمراً، بالليرة والدولار" />}
                />
                <p>
                  <T
                    en="The inventory is real solar and electrical stock: cables, inverters, breakers, changeover switches, all moving through the warehouse division with every movement tracked."
                    ar="المخزون مخزون شمسي وكهربائي حقيقي: كابلات، وعاكسات، وقواطع، ومفاتيح تحويل، يتحرّك كله عبر قسم المستودع وكل حركة متتبَّعة."
                  />
                </p>
                <Figure
                  src="/work/techno-solution/inventory-moves.webp"
                  label="Inventory moves"
                  caption={<T en="Inventory moves: 884 movements of solar and electrical stock" ar="حركات المخزون: 884 حركة من المخزون الشمسي والكهربائي" />}
                />
              </>
            ),
          },
          {
            kicker: <T en="The proof" ar="الدليل" />,
            heading: <T en="What happened after I left." ar="ما حدث بعد رحيلي." />,
            body: (
              <>
                <Callout kicker={<T en="The signal it worked" ar="إشارة أنه نجح" />}>
                  <T
                    en="When I left in November 2025, the company did not go back to Excel. They hired a dedicated Odoo developer to maintain and grow the system."
                    ar="حين غادرتُ في تشرين الثاني 2025، لم تعد الشركة إلى Excel. بل وظّفت مطوّر Odoo متفرّغاً لصيانة النظام وتنميته."
                  />
                </Callout>
                <p>
                  <T
                    en="The screenshots above are not a demo. They are the live system, captured while I was still on the project. The strongest signal that an implementation worked is that there was something solid enough to hand over, and that the company chose to keep it."
                    ar="اللقطات أعلاه ليست عرضاً تجريبياً. هي النظام الحيّ، التُقطت وأنا ما زلتُ على المشروع. وأقوى إشارة على نجاح أي تطبيق أن يوجد شيء متين بما يكفي ليُسلَّم، وأن تختار الشركة الإبقاء عليه."
                  />
                </p>
                <Figure
                  src="/work/techno-solution/sales-analysis.webp"
                  label="Sales analysis"
                  caption={<T en="Sales analysis, captured while I was still on the project" ar="تحليل المبيعات، التُقط وأنا ما زلتُ على المشروع" />}
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
                    en="The lesson was not a technical one. An ERP succeeds or fails on whether the people using it can do their jobs without thinking about the software. Building it in a team of two, learning the platform as we went, is where I picked up the habit of designing systems around the business and then making them simple enough to hand over."
                    ar="لم يكن الدرس تقنياً. نظام ERP ينجح أو يفشل بناءً على ما إذا كان مستخدموه يستطيعون أداء عملهم دون التفكير في البرمجية. وبناؤه ضمن فريق من اثنين، ونحن نتعلّم المنصّة في الطريق، هو حيث اكتسبتُ عادة تصميم الأنظمة حول المشروع ثم جعلها بسيطة بما يكفي لتُسلَّم."
                  />
                </p>
              </>
            ),
          },
        ]}
        nextProject={{
          label: <T en="Burgasm: a restaurant running entirely on Odoo →" ar="Burgasm: مطعم يعمل بالكامل على Odoo →" />,
          href: "/projects/burgasm",
        }}
      />
    </>
  );
}
