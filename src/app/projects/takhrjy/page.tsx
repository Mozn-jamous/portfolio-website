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

const DESCRIPTION =
  "Designer and QA tester on a Vue ERP for a custom graduation-gifts business — a seven-role permission model, a six-stage order pipeline, retail + wholesale, and local + international fulfillment. Working from the team's requirements, I designed the screens and tested the system before it shipped.";

export const metadata: Metadata = {
  title: "Takhrjy — graduation-gifts ERP (design & QA) — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "Takhrjy — a seven-role ERP, designed and tested",
    description: DESCRIPTION,
    type: "article",
    url: "https://moznjamous.com/projects/takhrjy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Takhrjy — a seven-role ERP, designed and tested",
    description: DESCRIPTION,
  },
};

export default function TakhrjyPage() {
  return (
    <>
      <StructuredData
        data={caseStudyStructuredData({
          name: "Takhrjy — graduation-gifts ERP",
          description: DESCRIPTION,
          path: "/projects/takhrjy",
          year: "2025",
        })}
      />
      <CaseStudyLayout
        meta={{
          eyebrow: <T en="ERP · Vue · Design & QA" ar="ERP · Vue · تصميم وضمان جودة" />,
          status: <T en="Team build" ar="بناء جماعي" />,
          title: (
            <T
              en="Takhrjy — a seven-role ERP, designed and tested."
              ar="Takhrjy — نظام ERP بسبعة أدوار، مُصمَّم ومُختبَر."
            />
          ),
          lede: (
            <T
              en="An ERP a team built for a custom graduation-gifts business — personalized boxes that have to be produced, fulfilled locally or internationally, sold retail and wholesale, and accounted for. Two roles were mine: working from the team's requirements, I designed the system's screens, and I was the tester who made sure everything worked before it shipped."
              ar="نظام ERP بناه فريقٌ لمشروع هدايا تخرّجٍ مخصّص — صناديق مُخصّصة يجب إنتاجها، وتسليمها محليّاً أو دولياً، وبيعها بالتجزئة والجملة، وقيدها محاسبياً. كان لي دوران: انطلاقاً من متطلبات الفريق، صمّمتُ شاشات النظام، وكنتُ المختبِرة التي تأكّدت أن كل شيء يعمل قبل الإطلاق."
            />
          ),
          year: "2025",
          role: <T en="Designer + QA tester" ar="مصمّمة + مختبِرة جودة" />,
          stack: [
            "Vue",
            "UI design",
            "Figma",
            "Manual QA",
            "Test cases",
          ],
        }}
        metrics={[
          { value: "7", label: <T en="User roles — screens designed for each" ar="أدوار مستخدمين — صُمّمت شاشات لكلٍّ منها" /> },
          { value: "6", label: <T en="Order-pipeline stages" ar="مراحل خطّ الطلبات" /> },
          { value: <T en="Retail + B2B" ar="تجزئة + جملة" />, label: <T en="Plus local & international fulfillment" ar="إضافةً للتنفيذ المحلّي والدولي" /> },
          { value: <T en="Tester" ar="مختبِرة" />, label: <T en="Verified the system before launch" ar="تحقّقتُ من النظام قبل الإطلاق" /> },
        ]}
        sections={[
          {
            kicker: <T en="Overview" ar="نظرة عامة" />,
            heading: <T en="What it is, and what I did." ar="ما هو، وما الذي فعلته." />,
            body: (
              <>
                <Lead>
                  <T
                    en="Takhrjy runs a business that sells personalized graduation gift boxes. Every order is a custom product — embroidery, photos, options — that has to be made, then shipped, then booked. The system models that whole operation across seven roles. I joined as the designer and the tester: I turned the team's requirements into the actual screens, and I verified the system worked."
                    ar="يدير Takhrjy مشروعاً يبيع صناديق هدايا تخرّجٍ مُخصّصة. كلّ طلبٍ منتجٌ مُخصّص — تطريز، صور، خيارات — يجب صناعته ثم شحنه ثم قيده محاسبياً. يُنمذج النظام هذه العملية كاملةً عبر سبعة أدوار. انضممتُ كمصمّمةٍ ومختبِرة: حوّلتُ متطلبات الفريق إلى الشاشات الفعلية، وتحقّقتُ من أن النظام يعمل."
                  />
                </Lead>
                <FactGrid
                  items={[
                    { label: <T en="My role" ar="دوري" />, value: <T en="Designer + QA tester" ar="مصمّمة + مختبِرة جودة" /> },
                    { label: <T en="Team" ar="الفريق" />, value: <T en="Collaborative build" ar="بناء تعاوني" /> },
                    { label: <T en="Domain" ar="المجال" />, value: <T en="Custom graduation gifts" ar="هدايا تخرّج مخصّصة" /> },
                    { label: <T en="Frontend" ar="الواجهة" />, value: "Vue" },
                    { label: <T en="Scope" ar="النطاق" />, value: <T en="7 roles · retail + wholesale" ar="7 أدوار · تجزئة + جملة" /> },
                    { label: <T en="Fulfillment" ar="التنفيذ" />, value: <T en="Local + international" ar="محلّي + دولي" /> },
                  ]}
                />
              </>
            ),
          },
          {
            kicker: <T en="The business" ar="المشروع" />,
            heading: (
              <T
                en="A custom-products business is mostly operations."
                ar="مشروع المنتجات المخصّصة عملياتٌ في معظمه."
              />
            ),
            body: (
              <>
                <p>
                  <T
                    en="Selling a personalized product isn't one transaction — it's a chain. An order comes in with custom details (embroidery text, photos, options). It has to be priced so the margin actually holds. It goes into production. Then it ships — by local delivery or international courier. And every step has to land in the books. The two product lines, retail and wholesale orders, and two fulfillment paths all run through the same system — which is exactly why it needed clear screens and careful testing."
                    ar="بيع منتجٍ مُخصّص ليس معاملةً واحدة — بل سلسلة. يصل الطلب بتفاصيل مخصّصة (نصّ تطريز، صور، خيارات). يجب تسعيره بحيث يصمد الهامش فعلاً. ثم يدخل الإنتاج. ثم يُشحَن — بتوصيلٍ محلّي أو بريدٍ دولي. وكل خطوة يجب أن تُسجَّل في الدفاتر. خطّا المنتجات، وطلبات التجزئة والجملة، ومساري التنفيذ، كلّها تمرّ عبر النظام نفسه — وهذا بالضبط سبب حاجته إلى شاشاتٍ واضحة واختبارٍ دقيق."
                  />
                </p>
              </>
            ),
          },
          {
            kicker: <T en="The role model" ar="نموذج الأدوار" />,
            heading: <T en="Seven roles, seven different jobs." ar="سبعة أدوار، سبع وظائف مختلفة." />,
            body: (
              <>
                <p>
                  <T
                    en="The system is organized around who's using it — each role sees a different slice of the same operation. Working from the requirements I was given, I designed the screens for each of these roles so that every user got the view their job needed."
                    ar="النظام منظَّمٌ حول من يستخدمه — كلّ دورٍ يرى شريحةً مختلفة من العملية نفسها. انطلاقاً من المتطلبات التي أُعطيت لي، صمّمتُ شاشات كلّ دورٍ من هذه الأدوار بحيث يحصل كلّ مستخدمٍ على العرض الذي تحتاجه وظيفته."
                  />
                </p>
                <FactGrid
                  items={[
                    { label: <T en="Super admin" ar="مشرف عام" />, value: <T en="Full oversight" ar="إشراف كامل" /> },
                    { label: <T en="Sales" ar="المبيعات" />, value: <T en="Orders + pricing" ar="الطلبات + التسعير" /> },
                    { label: <T en="Production" ar="الإنتاج" />, value: <T en="Make the order" ar="صناعة الطلب" /> },
                    { label: <T en="Local delivery" ar="التوصيل المحلّي" />, value: <T en="Domestic fulfillment" ar="تنفيذ داخلي" /> },
                    { label: <T en="Intl. shipping" ar="الشحن الدولي" />, value: <T en="Cross-border fulfillment" ar="تنفيذ عابر للحدود" /> },
                    { label: <T en="Wholesale" ar="الجملة" />, value: <T en="B2B, with a monthly cap" ar="جملة، بسقفٍ شهري" /> },
                    { label: <T en="Accountant" ar="المحاسب" />, value: <T en="Read-only books" ar="دفاتر للقراءة فقط" /> },
                  ]}
                />
                <Figure
                  label="Role screens"
                  caption={<T en="Screens designed for the role-based views — export to add" ar="شاشات صُمّمت للعروض حسب الدور — يُضاف التصدير لاحقاً" />}
                />
              </>
            ),
          },
          {
            kicker: <T en="The order pipeline" ar="خطّ الطلبات" />,
            heading: <T en="From custom order to doorstep." ar="من طلبٍ مخصّص إلى عتبة الباب." />,
            body: (
              <>
                <p>
                  <T
                    en="An order moves through six tracked stages, so everyone can see exactly where any box is. Sales captures the custom details and photos and runs them through a calculator that prices cost plus margin; production picks it up; fulfillment routes it to local delivery or international shipping. Wholesale follows the same pipeline but is held to a monthly order cap."
                    ar="يمرّ الطلب عبر ستّ مراحل متتبَّعة، ليرى الجميع بالضبط أين يقع أي صندوق. تلتقط المبيعات التفاصيل المخصّصة والصور وتُمرّرها عبر حاسبةٍ تُسعّر التكلفة زائد الهامش؛ ثم يلتقطه الإنتاج؛ ويوجّهه التنفيذ إلى التوصيل المحلّي أو الشحن الدولي. تتبع الجملة الخطّ نفسه لكن بسقفٍ شهري للطلبات."
                  />
                </p>
                <Figure
                  label="Order pipeline"
                  caption={<T en="Six-stage order tracking — screen export to add" ar="تتبّع الطلبات بستّ مراحل — يُضاف تصدير الشاشة لاحقاً" />}
                />
              </>
            ),
          },
          {
            kicker: <T en="Testing" ar="الاختبار" />,
            heading: <T en="My job: make sure it all worked." ar="مهمّتي: التأكّد أن كل شيء يعمل." />,
            body: (
              <>
                <Lead>
                  <T
                    en="Alongside the design, I was the tester on the project — the person responsible for confirming the system actually did what it was supposed to before real users touched it."
                    ar="إلى جانب التصميم، كنتُ مختبِرة المشروع — المسؤولة عن التأكّد من أن النظام يفعل فعلاً ما يُفترض به قبل أن يلمسه مستخدمون حقيقيون."
                  />
                </Lead>
                <p>
                  <T
                    en="I worked through the system to check that the everyday flows held up: that each role reached the screens and actions its job required, that orders moved through the six stages correctly, that the pricing calculator returned the right numbers, and that the wholesale cap and the read-only accountant role behaved as specified. Where something didn't match the requirements, I flagged it to be fixed."
                    ar="عملتُ خلال النظام للتأكّد من صمود التدفّقات اليومية: أن يصل كلّ دورٍ إلى الشاشات والإجراءات التي تتطلّبها وظيفته، وأن تتحرّك الطلبات عبر المراحل الستّ بشكلٍ صحيح، وأن تُعيد حاسبة التسعير الأرقام الصحيحة، وأن يتصرّف سقف الجملة ودور المحاسب للقراءة فقط كما هو محدّد. وحيثما لم يطابق شيءٌ المتطلبات، كنتُ أُبلّغ عنه ليُصلَح."
                  />
                </p>
                <Callout kicker={<T en="Why a tester matters here" ar="لماذا يهمّ وجود مختبِرة هنا" />}>
                  <T
                    en="In a system where seven roles share one order pipeline, a small break in the wrong place is the difference between a smooth handoff and an order lost between departments. Testing is what catches that before a customer does."
                    ar="في نظامٍ تتشارك فيه سبعة أدوار خطّ طلباتٍ واحداً، عطلٌ صغير في المكان الخطأ هو الفرق بين تسليمٍ سلس وطلبٍ يضيع بين الأقسام. الاختبار هو ما يلتقط ذلك قبل أن يلتقطه العميل."
                  />
                </Callout>
              </>
            ),
          },
          {
            kicker: <T en="Reflection" ar="تأمّل" />,
            heading: <T en="What I took from it." ar="ما الذي خرجتُ به." />,
            body: (
              <>
                <p>
                  <T
                    en={
                      <>
                        Designing the screens for seven roles and then being the one to
                        test them taught me to read a requirement as both a designer and
                        a skeptic: not just &ldquo;what should this screen show&rdquo;
                        but &ldquo;how will I know it&apos;s right.&rdquo; Sitting on
                        both sides of that line is a habit I&apos;ve kept.
                      </>
                    }
                    ar={
                      <>
                        تصميمُ شاشات سبعة أدوار ثم كوني من يختبرها علّمني أن أقرأ
                        المتطلَّب كمصمّمةٍ ومتشكّكةٍ معاً: ليس فقط «ماذا ينبغي أن
                        تعرض هذه الشاشة» بل «كيف سأعرف أنها صحيحة». والوقوف على طرفَي
                        هذا الخطّ عادةٌ احتفظتُ بها.
                      </>
                    }
                  />
                </p>
              </>
            ),
          },
        ]}
        nextProject={{
          label: (
            <T
              en="Techno Solution — from Excel to a live ERP →"
              ar="Techno Solution — من Excel إلى نظام ERP حيّ →"
            />
          ),
          href: "/projects/techno-solution",
        }}
      />
    </>
  );
}
