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
  "Designer and front-end engineer on a Vue ERP for a custom graduation-gifts business: seven roles, a six-stage order pipeline, retail and wholesale, and both local and international fulfillment. Working from the team's requirements, I designed the screens and wrote the Vue front-end.";

export const metadata: Metadata = {
  title: "Takhrjy — a seven-role graduation-gifts ERP — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "Takhrjy — a seven-role ERP, designed and built",
    description: DESCRIPTION,
    type: "article",
    url: siteUrl("/projects/takhrjy"),
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
          name: "Takhrjy — a graduation-gifts ERP",
          description: DESCRIPTION,
          path: "/projects/takhrjy",
          year: "2026",
        })}
      />
      <CaseStudyLayout
        meta={{
          eyebrow: <T en="ERP · Vue · Design and front-end" ar="ERP · Vue · تصميم وواجهة" />,
          status: <T en="Team build" ar="بناء جماعي" />,
          title: (
            <T
              en="Takhrjy: a seven-role ERP, designed and built."
              ar="Takhrjy: نظام ERP بسبعة أدوار، مُصمَّم ومبنيّ."
            />
          ),
          lede: (
            <T
              en="An ERP a team built for a custom graduation-gifts business: personalized boxes that have to be produced, fulfilled locally or internationally, sold retail and wholesale, and accounted for. The front-end was mine. Working from the team's requirements, I designed the system's screens and wrote them in Vue while a teammate handled the backend."
              ar="نظام ERP بناه فريق لمشروع هدايا تخرّج مخصّص: صناديق مخصّصة يجب إنتاجها، وتسليمها محلياً أو دولياً، وبيعها بالتجزئة والجملة، وقيدها محاسبياً. كانت الواجهة من نصيبي. انطلاقاً من متطلبات الفريق صمّمتُ شاشات النظام وكتبتُها بـVue بينما تكفّل زميل بالـbackend."
            />
          ),
          year: "2026",
          role: <T en="Designer + front-end engineer" ar="مصمّمة + مهندسة واجهة" />,
          stack: [
            "Vue",
            "UI design",
            "Figma",
            "Front-end architecture",
            "Role-based UI",
          ],
        }}
        metrics={[
          { value: "7", label: <T en="User roles, each with screens designed and built" ar="أدوار مستخدمين، لكل واحد شاشات صُمّمت وبُنيت" /> },
          { value: "6", label: <T en="Order-pipeline stages" ar="مراحل خطّ الطلبات" /> },
          { value: <T en="Retail + B2B" ar="تجزئة + جملة" />, label: <T en="With local and international fulfillment" ar="مع تنفيذ محلّي ودولي" /> },
          { value: <T en="Front-end" ar="الواجهة" />, label: <T en="Designed and written in Vue" ar="صُمّمت وكُتبت بـVue" /> },
        ]}
        sections={[
          {
            kicker: <T en="Overview" ar="نظرة عامة" />,
            heading: <T en="What it is, and what I did." ar="ما هو، وما الذي فعلته." />,
            body: (
              <>
                <Lead>
                  <T
                    en="Takhrjy runs a business selling personalized graduation gift boxes. Every order is a custom product with embroidery, photos and options, and it has to be made, then shipped, then booked. The system models that whole operation across seven roles. I joined as the designer and front-end engineer, and turned the team's requirements into the actual screens in Vue."
                    ar="يدير Takhrjy مشروعاً يبيع صناديق هدايا تخرّج مخصّصة. كل طلب منتج مخصّص فيه تطريز وصور وخيارات، ويجب صناعته ثم شحنه ثم قيده محاسبياً. ويُنمذج النظام هذه العملية كاملة عبر سبعة أدوار. انضممتُ مصمّمةً ومهندسةَ واجهة، وحوّلتُ متطلبات الفريق إلى الشاشات الفعلية بـVue."
                  />
                </Lead>
                <FactGrid
                  items={[
                    { label: <T en="My role" ar="دوري" />, value: <T en="Designed the screens, wrote the front-end" ar="صمّمتُ الشاشات، وكتبتُ الواجهة" /> },
                    { label: <T en="Team" ar="الفريق" />, value: <T en="A team, with the front-end mine" ar="فريق، والواجهة من نصيبي" /> },
                    { label: <T en="Domain" ar="المجال" />, value: <T en="Custom graduation gifts" ar="هدايا تخرّج مخصّصة" /> },
                    { label: <T en="Frontend" ar="الواجهة" />, value: <T en="Vue, designed and written by me" ar="Vue، صمّمتها وكتبتها بيدي" /> },
                    { label: <T en="Scope" ar="النطاق" />, value: <T en="7 roles · retail + wholesale" ar="7 أدوار · تجزئة + جملة" /> },
                    { label: <T en="Fulfillment" ar="التنفيذ" />, value: <T en="Local and international" ar="محلّي ودولي" /> },
                  ]}
                />
                <Figure
                  src="/work/takhrjy/cover.webp"
                  alt="Takhrjy wordmark — gold serif on deep academic green"
                  aspect="16 / 10"
                  label="Identity"
                  caption={<T en="The system's identity: graduation gold on academic green." ar="هوية النظام: ذهبُ التخرّج على أخضرَ جامعيّ." />}
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
                    en="Selling a personalized product is a chain rather than a transaction. An order arrives with custom details: embroidery text, photos, options. It has to be priced so the margin actually holds. It goes into production. Then it ships, by local delivery or international courier. And every step has to land in the books. Two product lines, retail and wholesale orders, and two fulfillment paths all run through the same system, which is why it needed clear screens and a front-end that could hold all of it together."
                    ar="بيع منتج مخصّص سلسلة لا معاملة واحدة. يصل الطلب بتفاصيل مخصّصة: نصّ تطريز، وصور، وخيارات. ويجب تسعيره بحيث يصمد الهامش فعلاً. ثم يدخل الإنتاج. ثم يُشحَن، بتوصيل محلّي أو بريد دولي. وكل خطوة يجب أن تُسجَّل في الدفاتر. خطّا المنتجات، وطلبات التجزئة والجملة، ومسارا التنفيذ، كلها تمرّ عبر النظام نفسه، ولهذا احتاج شاشات واضحة وواجهة تجمع ذلك كله."
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
                    en="The system is organized around who is using it, so each role sees a different slice of the same operation. Working from the requirements I was given, I designed and built the screens for each of these roles, so every user gets the view their job needs."
                    ar="النظام منظَّم حول من يستخدمه، فكل دور يرى شريحة مختلفة من العملية نفسها. وانطلاقاً من المتطلبات التي أُعطيت لي، صمّمتُ وبنيتُ شاشات كل دور من هذه الأدوار، فيحصل كل مستخدم على العرض الذي تحتاجه وظيفته."
                  />
                </p>
                <FactGrid
                  items={[
                    { label: <T en="Super admin" ar="مشرف عام" />, value: <T en="Full oversight" ar="إشراف كامل" /> },
                    { label: <T en="Sales" ar="المبيعات" />, value: <T en="Orders + pricing" ar="الطلبات + التسعير" /> },
                    { label: <T en="Production" ar="الإنتاج" />, value: <T en="Make the order" ar="صناعة الطلب" /> },
                    { label: <T en="Local delivery" ar="التوصيل المحلّي" />, value: <T en="Domestic fulfillment" ar="تنفيذ داخلي" /> },
                    { label: <T en="Intl. shipping" ar="الشحن الدولي" />, value: <T en="Cross-border fulfillment" ar="تنفيذ عابر للحدود" /> },
                    { label: <T en="Wholesale" ar="الجملة" />, value: <T en="B2B, with a monthly cap" ar="جملة، بسقف شهري" /> },
                    { label: <T en="Accountant" ar="المحاسب" />, value: <T en="Read-only books" ar="دفاتر للقراءة فقط" /> },
                  ]}
                />
                <Figure
                  label="Role screens"
                  caption={<T en="Screens designed and built for the role-based views. Export still to add." ar="شاشات صُمّمت وبُنيت للعروض حسب الدور. التصدير لم يُضَف بعد." />}
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
                    en="An order moves through six tracked stages, so anyone can see where a given box actually is. Sales captures the custom details and photos and runs them through a calculator that prices cost plus margin. Production picks it up. Fulfillment routes it to local delivery or international shipping. Wholesale follows the same pipeline, with a monthly order cap on top."
                    ar="يمرّ الطلب عبر ستّ مراحل متتبَّعة، فيستطيع أي أحد أن يرى أين يقع صندوق بعينه فعلاً. تلتقط المبيعات التفاصيل المخصّصة والصور وتمرّرها عبر حاسبة تسعّر التكلفة زائد الهامش. ثم يلتقطه الإنتاج. ثم يوجّهه التنفيذ إلى التوصيل المحلّي أو الشحن الدولي. وتتبع الجملة الخطّ نفسه، وفوقه سقف شهري للطلبات."
                  />
                </p>
                <Figure
                  label="Order pipeline"
                  caption={<T en="The six-stage order tracking. Screen export still to add." ar="تتبّع الطلبات بستّ مراحل. تصدير الشاشة لم يُضَف بعد." />}
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
                    en="Beyond the design, I wrote the front-end: the actual Vue screens every role uses, wired to the team's backend."
                    ar="إلى جانب التصميم كتبتُ الواجهة: شاشات Vue الفعلية التي يستخدمها كل دور، موصولة بـbackend الفريق."
                  />
                </Lead>
                <p>
                  <T
                    en="I implemented the role-based views, the six-stage pipeline UI, the pricing-calculator screen, and the retail and wholesale flows. That meant checking that each role reached the screens and actions its job required, that the calculator returned the right numbers, and that the wholesale cap and the read-only accountant view behaved as specified. It also meant verifying the everyday flows held together before real users touched them."
                    ar="نفّذتُ العروض حسب الدور، وواجهة خطّ الطلبات بمراحله الستّ، وشاشة حاسبة التسعير، وتدفّقات التجزئة والجملة. وهذا عنى التأكّد أن يصل كل دور إلى الشاشات والإجراءات التي تتطلّبها وظيفته، وأن تعيد الحاسبة الأرقام الصحيحة، وأن يتصرّف سقف الجملة ودور المحاسب للقراءة فقط كما هو محدّد. وعنى أيضاً التحقّق من صمود التدفّقات اليومية قبل أن يلمسها مستخدمون حقيقيون."
                  />
                </p>
                <Callout kicker={<T en="Why the front-end mattered here" ar="لماذا تهمّ الواجهة هنا" />}>
                  <T
                    en="When seven roles share one order pipeline, the interface is what keeps each handoff clear, and what stops an order getting lost between departments. Screens that match each role's job are what make a system this complex usable at all."
                    ar="حين تتشارك سبعة أدوار خطّ طلبات واحداً، الواجهة هي ما يُبقي كل تسليم واضحاً، وما يمنع طلباً من الضياع بين الأقسام. والشاشات التي تطابق وظيفة كل دور هي ما يجعل نظاماً بهذا التعقيد قابلاً للاستخدام أصلاً."
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
                        Designing the screens for seven roles and then writing them in
                        Vue taught me to carry an idea from a requirement through to a
                        working interface, and to think as both the person deciding what
                        a screen should show and the one who has to make it real. Holding
                        both sides of that line is a habit I&apos;ve kept.
                      </>
                    }
                    ar={
                      <>
                        تصميمُ شاشات سبعة أدوار ثم كتابتها بـVue علّمني أن آخذ الفكرة
                        من المتطلَّب إلى واجهة تعمل، وأن أفكّر كمن يقرّر ما تعرضه الشاشة
                        وكمن عليه أن يجعلها حقيقة. والإمساك بطرفَي هذا الخطّ عادة
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
