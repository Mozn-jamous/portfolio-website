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
  "A restaurant running its entire operation on Odoo — a 68-account dual-currency chart of accounts across three partners, a live point of sale (500+ orders), kitchen display, and ingredient-level inventory (10,000+ moves linked to POS). Built solo; still live in daily service.";

export const metadata: Metadata = {
  title: "Burgasm — a restaurant, fully on Odoo — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "Burgasm — a restaurant, fully on Odoo",
    description: DESCRIPTION,
    type: "article",
    url: siteUrl("/projects/burgasm"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Burgasm — a restaurant, fully on Odoo",
    description: DESCRIPTION,
  },
};

export default function BurgasmPage() {
  return (
    <>
      <StructuredData
        data={caseStudyStructuredData({
          name: "Burgasm — restaurant Odoo implementation",
          description: DESCRIPTION,
          path: "/projects/burgasm",
          year: "2025",
        })}
      />
      <CaseStudyLayout
        meta={{
          eyebrow: <T en="Odoo · Restaurant · POS" ar="Odoo · مطعم · نقاط بيع" />,
          status: <T en="Live in production" ar="حيّ في الإنتاج" />,
          title: <T en="Burgasm: a restaurant running entirely on Odoo." ar="Burgasm: مطعم يعمل بالكامل على Odoo." />,
          lede: (
            <T
              en="A restaurant running its whole operation on one Odoo system: proper books across three partners, a live point of sale, a kitchen display, and inventory tracked down to the ingredient. I built and configured it on my own, during the same engagement as the Techno Solution rollout, and it is still in daily service."
              ar="مطعم يدير عمليّته كاملة على نظام Odoo واحد: دفاتر محاسبية سليمة عبر ثلاثة شركاء، ونقطة بيع حيّة، وشاشة مطبخ، ومخزون متتبَّع حتى مستوى المكوّن. بنيتُه وهيّأتُه وحدي، خلال التكليف نفسه الذي شمل تطبيق Techno Solution، وما زال في الخدمة اليومية."
            />
          ),
          year: "2025",
          role: <T en="Sole Odoo implementer · Systems designer" ar="مُنفّذة Odoo الوحيدة · مصمّمة أنظمة" />,
          stack: [
            "Odoo 16/17",
            "Point of Sale",
            "Kitchen Display",
            "Accounting",
            "Inventory",
            "PostgreSQL",
            "QWeb",
          ],
        }}
        metrics={[
          { value: "68", label: <T en="GL accounts across 3 partners, in two currencies" ar="حساب أستاذ عبر 3 شركاء، بعملتين" /> },
          { value: "500+", label: <T en="POS orders processed" ar="طلب نقاط بيع مُعالَج" /> },
          { value: "10K+", label: <T en="Ingredient moves linked to POS" ar="حركة مكوّنات مرتبطة بنقاط البيع" /> },
          { value: "30+", label: <T en="Odoo modules configured" ar="وحدة Odoo مُهيّأة" /> },
        ]}
        sections={[
          {
            kicker: <T en="Overview" ar="نظرة عامة" />,
            heading: <T en="A restaurant, run like a real business." ar="مطعمٌ يُدار كشركةٍ حقيقية." />,
            body: (
              <>
                <Lead>
                  <T
                    en="Plenty of restaurants run a till and call it software. Here the accounting, the point of sale, the kitchen display and the inventory all read from the same place, across thirty-odd modules configured around how the place actually operates."
                    ar="كثير من المطاعم تُشغّل صندوقاً وتسمّيه برمجية. هنا تقرأ المحاسبة ونقاط البيع وشاشة المطبخ والمخزون كلها من المكان نفسه، عبر ثلاثين وحدة وأكثر مُهيّأة حول طريقة عمل المكان فعلاً."
                  />
                </Lead>
                <Figure
                  src="/work/burgasm/system-overview.webp"
                  label="System overview"
                  caption={<T en="System overview: 30+ active modules configured for the restaurant" ar="نظرة عامة على النظام: أكثر من 30 وحدة نشطة مُهيّأة للمطعم" />}
                />
                <FactGrid
                  items={[
                    { label: <T en="Business" ar="المشروع" />, value: <T en="Restaurant (Burgasm)" ar="مطعم (Burgasm)" /> },
                    { label: <T en="Role" ar="الدور" />, value: <T en="Sole Odoo implementer" ar="مُنفّذة Odoo الوحيدة" /> },
                    { label: <T en="Books" ar="الدفاتر" />, value: <T en="68 accounts · 3 partners" ar="68 حساباً · 3 شركاء" /> },
                    { label: <T en="Point of sale" ar="نقاط البيع" />, value: <T en="Live · per-cashier" ar="حيّة · لكل كاشير" /> },
                    { label: <T en="Kitchen" ar="المطبخ" />, value: <T en="Kitchen Display System" ar="نظام شاشة المطبخ" /> },
                    { label: <T en="Inventory" ar="المخزون" />, value: <T en="Ingredient-level" ar="على مستوى المكوّن" /> },
                  ]}
                />
              </>
            ),
          },
          {
            kicker: <T en="The books" ar="الدفاتر" />,
            heading: <T en="Real accounting behind the cash drawer." ar="محاسبة حقيقية خلف درج النقود." />,
            body: (
              <>
                <p>
                  <T
                    en="The foundation is a custom chart of accounts: 68 accounts, a dual-currency setup in Syrian pounds and dollars, and a three-partner structure that mirrors the restaurant's real ownership. Dedicated cash accounts and a point-of-sale receivable line tie the daily till straight into the books."
                    ar="الأساس شجرة حسابات مخصّصة: 68 حساباً، وإعداد عملتين بالليرة السورية والدولار، وبنية ثلاثة شركاء تعكس الملكية الحقيقية للمطعم. وتربط حسابات نقد مخصّصة وبند ذمم مدينة لنقاط البيع الصندوقَ اليومي مباشرة بالدفاتر."
                  />
                </p>
                <Figure
                  src="/work/burgasm/chart-of-accounts.webp"
                  label="Chart of accounts"
                  caption={<T en="Chart of accounts: 68 accounts, two currencies, three partners" ar="شجرة الحسابات: 68 حساباً، وعملتان، وثلاثة شركاء" />}
                />
              </>
            ),
          },
          {
            kicker: <T en="The point of sale" ar="نقاط البيع" />,
            heading: <T en="A till anyone could run on day one." ar="صندوقٌ يستطيع أيّ أحدٍ تشغيله من اليوم الأول." />,
            body: (
              <>
                <p>
                  <T
                    en="Cashiers who had never touched an ERP were running the POS from day one. Over 500 orders went through it, with revenue broken down per session and per cashier, so the owners can see what each shift actually brought in."
                    ar="كاشيرون لم يلمسوا نظام ERP من قبل كانوا يشغّلون نقاط البيع من اليوم الأول. ومرّ أكثر من 500 طلب عبرها، مع تفصيل الإيرادات لكل جلسة ولكل كاشير، فيرى المُلّاك ما جنته كل وردية فعلاً."
                  />
                </p>
                <Figure
                  src="/work/burgasm/pos-orders.webp"
                  label="POS orders"
                  caption={<T en="POS orders analysis, with revenue per session" ar="تحليل طلبات نقاط البيع، والإيراد لكل جلسة" />}
                />
                <Figure
                  src="/work/burgasm/pos-by-cashier.webp"
                  label="POS by cashier"
                  caption={<T en="POS by cashier, with 500+ orders across sessions" ar="نقاط البيع حسب الكاشير، وأكثر من 500 طلب موزّعة على الجلسات" />}
                />
              </>
            ),
          },
          {
            kicker: <T en="Inventory" ar="المخزون" />,
            heading: <T en="Tracked down to the ingredient." ar="متتبَّعٌ حتى مستوى المكوّن." />,
            body: (
              <>
                <Lead>
                  <T
                    en="This is the part most restaurant POS rollouts skip, and it is the part that actually controls food cost."
                    ar="هذا هو الجزء الذي تتجاوزه معظم تطبيقات نقاط البيع في المطاعم، وهو الجزء الذي يضبط تكلفة الطعام فعلاً."
                  />
                </Lead>
                <p>
                  <T
                    en={
                      <>
                        Every order decrements food inventory at the ingredient level,
                        so a burger sold at the till draws down the buns, the patty, and
                        the toppings automatically. Over{" "}
                        <strong>10,000 ingredient movements</strong> are linked
                        directly to POS sales — the kitchen&apos;s stock stays accurate
                        without anyone counting it by hand.
                      </>
                    }
                    ar={
                      <>
                        كلّ طلبٍ يخصم مخزون الطعام على مستوى المكوّن، فالبرغر المُباع
                        على الصندوق يخصم الأرغفة والقطعة والإضافات تلقائياً. أكثر من{" "}
                        <strong>10,000 حركة مكوّنات</strong> مرتبطة مباشرةً بمبيعات
                        نقاط البيع — يبقى مخزون المطبخ دقيقاً دون أن يَعُدّه أحدٌ يدوياً.
                      </>
                    }
                  />
                </p>
                <Figure
                  src="/work/burgasm/restaurant-inventory.webp"
                  label="Restaurant inventory"
                  caption={<T en="Restaurant inventory, with 10,000+ ingredient movements linked to POS orders" ar="مخزون المطعم، وأكثر من 10,000 حركة مكوّنات مرتبطة بطلبات نقاط البيع" />}
                />
                <Callout kicker={<T en="Why it matters" ar="لماذا يهمّ" />}>
                  <T
                    en={
                      <>
                        A POS that doesn&apos;t touch inventory tells you what you sold.
                        A POS wired into ingredient-level stock tells you what it{" "}
                        <em>cost</em> — which is the number a restaurant actually lives
                        or dies on.
                      </>
                    }
                    ar={
                      <>
                        نقطة بيعٍ لا تمسّ المخزون تُخبرك بما بِعت. أما نقطة بيعٍ
                        موصولة بالمخزون على مستوى المكوّن فتُخبرك بما{" "}
                        <em>كلّف</em> — وهو الرقم الذي يحيا عليه المطعم أو يموت.
                      </>
                    }
                  />
                </Callout>
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
                    en="Burgasm is still live in daily service. What stuck with me was how much of a restaurant's real problem is invisible at the counter, because it sits in the books and the stockroom. Wiring the till all the way through to ingredients is what turned a cash register into an actual operating system for the business."
                    ar="ما زال Burgasm في الخدمة اليومية. وما علق في ذهني هو كم أن المشكلة الحقيقية للمطعم غير مرئية عند الصندوق، لأنها تقع في الدفاتر والمستودع. ووصلُ الصندوق حتى المكوّنات هو ما حوّل آلة تسجيل النقد إلى نظام تشغيل فعلي للمشروع."
                  />
                </p>
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
