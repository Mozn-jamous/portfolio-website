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
  "Designer and front-end developer on a Vue ERP for a custom graduation-gifts business — a seven-role permission model, a six-stage order pipeline, retail + wholesale, and local + international fulfillment. Working from the team's requirements, I designed the screens and built the Vue front-end.";

export const metadata: Metadata = {
  title: "Takhrjy — graduation-gifts ERP (design & front-end) — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "Takhrjy — a seven-role ERP, designed and built",
    description: DESCRIPTION,
    type: "article",
    url: "https://moznjamous.com/projects/takhrjy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Takhrjy — a seven-role ERP, designed and built",
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
          year: "2026",
        })}
      />
      <CaseStudyLayout
        meta={{
          eyebrow: <T en="ERP · Vue · Design & Build" ar="ERP · Vue · تصميم وبناء" />,
          status: <T en="Team build" ar="بناء جماعي" />,
          title: (
            <T
              en="Takhrjy — a seven-role ERP, designed and built."
              ar="Takhrjy — نظام ERP بسبعة أدوار، مُصمَّم ومبنيّ."
            />
          ),
          lede: (
            <T
              en="An ERP a team built for a custom graduation-gifts business — personalized boxes that have to be produced, fulfilled locally or internationally, sold retail and wholesale, and accounted for. The front-end was mine: working from the team's requirements, I designed the system's screens and built them in Vue, while a teammate handled the backend."
              ar="نظام ERP بناه فريقٌ لمشروع هدايا تخرّجٍ مخصّص — صناديق مُخصّصة يجب إنتاجها، وتسليمها محليّاً أو دولياً، وبيعها بالتجزئة والجملة، وقيدها محاسبياً. كانت الواجهة الأمامية من نصيبي: انطلاقاً من متطلبات الفريق، صمّمتُ شاشات النظام وبنيتُها بـVue، بينما تكفّل زميلٌ بالـ backend."
            />
          ),
          year: "2026",
          role: <T en="Designer + Front-end Developer" ar="مصمّمة + مطوّرة واجهة" />,
          stack: [
            "Vue",
            "UI design",
            "Figma",
            "Front-end architecture",
            "Role-based UI",
          ],
        }}
        metrics={[
          { value: "7", label: <T en="User roles — screens designed & built for each" ar="أدوار مستخدمين — صُمّمت وبُنيت شاشات لكلٍّ منها" /> },
          { value: "6", label: <T en="Order-pipeline stages" ar="مراحل خطّ الطلبات" /> },
          { value: <T en="Retail + B2B" ar="تجزئة + جملة" />, label: <T en="Plus local & international fulfillment" ar="إضافةً للتنفيذ المحلّي والدولي" /> },
          { value: <T en="Front-end" ar="الواجهة" />, label: <T en="Designed & built in Vue" ar="صُمّمت وبُنيت بـVue" /> },
        ]}
        sections={[
          {
            kicker: <T en="Overview" ar="نظرة عامة" />,
            heading: <T en="What it is, and what I did." ar="ما هو، وما الذي فعلته." />,
            body: (
              <>
                <Lead>
                  <T
                    en="Takhrjy runs a business that sells personalized graduation gift boxes. Every order is a custom product — embroidery, photos, options — that has to be made, then shipped, then booked. The system models that whole operation across seven roles. I joined as the designer and front-end developer: I turned the team's requirements into the actual screens and built them in Vue."
                    ar="يدير Takhrjy مشروعاً يبيع صناديق هدايا تخرّجٍ مُخصّصة. كلّ طلبٍ منتجٌ مُخصّص — تطريز، صور، خيارات — يجب صناعته ثم شحنه ثم قيده محاسبياً. يُنمذج النظام هذه العملية كاملةً عبر سبعة أدوار. انضممتُ كمصمّمةٍ ومطوّرة واجهة: حوّلتُ متطلبات الفريق إلى الشاشات الفعلية وبنيتُها بـVue."
                  />
                </Lead>
                <FactGrid
                  items={[
                    { label: <T en="My role" ar="دوري" />, value: <T en="Designer + Front-end Developer" ar="مصمّمة + مطوّرة واجهة" /> },
                    { label: <T en="Team" ar="الفريق" />, value: <T en="Collaborative — I owned the front-end" ar="تعاوني — الواجهة من نصيبي" /> },
                    { label: <T en="Domain" ar="المجال" />, value: <T en="Custom graduation gifts" ar="هدايا تخرّج مخصّصة" /> },
                    { label: <T en="Frontend" ar="الواجهة" />, value: <T en="Vue — designed & built by me" ar="Vue — صُمّمت وبُنيت بيدي" /> },
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
                    en="Selling a personalized product isn't one transaction — it's a chain. An order comes in with custom details (embroidery text, photos, options). It has to be priced so the margin actually holds. It goes into production. Then it ships — by local delivery or international courier. And every step has to land in the books. The two product lines, retail and wholesale orders, and two fulfillment paths all run through the same system — which is exactly why it needed clear screens and a front-end that could hold all of it together."
                    ar="بيع منتجٍ مُخصّص ليس معاملةً واحدة — بل سلسلة. يصل الطلب بتفاصيل مخصّصة (نصّ تطريز، صور، خيارات). يجب تسعيره بحيث يصمد الهامش فعلاً. ثم يدخل الإنتاج. ثم يُشحَن — بتوصيلٍ محلّي أو بريدٍ دولي. وكل خطوة يجب أن تُسجَّل في الدفاتر. خطّا المنتجات، وطلبات التجزئة والجملة، ومساري التنفيذ، كلّها تمرّ عبر النظام نفسه — وهذا بالضبط سبب حاجته إلى شاشاتٍ واضحة وواجهةٍ تجمع ذلك كلّه."
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
                    en="The system is organized around who's using it — each role sees a different slice of the same operation. Working from the requirements I was given, I designed and built the screens for each of these roles so that every user got the view their job needed."
                    ar="النظام منظَّمٌ حول من يستخدمه — كلّ دورٍ يرى شريحةً مختلفة من العملية نفسها. انطلاقاً من المتطلبات التي أُعطيت لي، صمّمتُ وبنيتُ شاشات كلّ دورٍ من هذه الأدوار بحيث يحصل كلّ مستخدمٍ على العرض الذي تحتاجه وظيفته."
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
                  caption={<T en="Screens designed & built for the role-based views — export to add" ar="شاشات صُمّمت وبُنيت للعروض حسب الدور — يُضاف التصدير لاحقاً" />}
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
            kicker: <T en="Building it" ar="البناء" />,
            heading: <T en="Turning seven role-views into a working Vue front-end." ar="تحويل عروض الأدوار السبعة إلى واجهة Vue تعمل." />,
            body: (
              <>
                <Lead>
                  <T
                    en="Beyond the design, I built the front-end — the actual Vue screens every role uses, wired to the team's backend."
                    ar="إلى جانب التصميم، بنيتُ الواجهة الأمامية — شاشات Vue الفعلية التي يستخدمها كلّ دور، موصولةً بـ backend الفريق."
                  />
                </Lead>
                <p>
                  <T
                    en="I implemented the role-based views, the six-stage order-pipeline UI, the pricing-calculator screen, and the retail and wholesale flows — making sure each role reached the screens and actions its job required, the calculator returned the right numbers, and the wholesale cap and read-only accountant view behaved as specified. Building it also meant verifying the everyday flows held together before real users touched it."
                    ar="نفّذتُ العروض حسب الدور، وواجهة خطّ الطلبات بمراحله الستّ، وشاشة حاسبة التسعير، وتدفّقات التجزئة والجملة — مع التأكّد أن يصل كلّ دورٍ إلى الشاشات والإجراءات التي تتطلّبها وظيفته، وأن تُعيد الحاسبة الأرقام الصحيحة، وأن يتصرّف سقف الجملة ودور المحاسب للقراءة فقط كما هو محدّد. وبناؤه عنى أيضاً التحقّق من صمود التدفّقات اليومية قبل أن يلمسه مستخدمون حقيقيون."
                  />
                </p>
                <Callout kicker={<T en="Why the front-end mattered here" ar="لماذا تهمّ الواجهة هنا" />}>
                  <T
                    en="When seven roles share one order pipeline, the interface is what keeps each handoff clear — so an order never gets lost between departments. Building screens that match each role's job is what makes a system this complex actually usable."
                    ar="حين تتشارك سبعة أدوار خطّ طلباتٍ واحداً، الواجهة هي ما يُبقي كلّ تسليمٍ واضحاً — فلا يضيع طلبٌ بين الأقسام. بناء شاشاتٍ تطابق وظيفة كلّ دورٍ هو ما يجعل نظاماً بهذا التعقيد قابلاً للاستخدام فعلاً."
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
                        Designing the screens for seven roles and then building them
                        in Vue taught me to carry an idea from a requirement all the way
                        to a working interface — to think as both the designer deciding
                        what a screen should show and the developer making it real.
                        Owning both sides of that line is a habit I&apos;ve kept.
                      </>
                    }
                    ar={
                      <>
                        تصميمُ شاشات سبعة أدوار ثم بناؤها بـVue علّمني أن آخذ الفكرة
                        من المتطلَّب حتى واجهةٍ تعمل — أن أفكّر كمصمّمةٍ تقرّر ما تعرضه
                        الشاشة وكمطوّرةٍ تجعلها حقيقة. وامتلاكُ طرفَي هذا الخطّ عادةٌ
                        احتفظتُ بها.
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
