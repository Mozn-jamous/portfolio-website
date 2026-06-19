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
  "Designer and QA tester on a multi-tenant clinics platform — three Flutter apps over a NestJS backend, built with a collaborator. Working from the project's requirements, I designed the screens across the apps and tested the system, including the separation between clinics.";

export const metadata: Metadata = {
  title: "Eda — multi-tenant clinics platform (design & QA) — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "Eda — three apps, one isolated tenant per clinic",
    description: DESCRIPTION,
    type: "article",
    url: "https://moznjamous.com/projects/eda",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eda — three apps, one isolated tenant per clinic",
    description: DESCRIPTION,
  },
};

export default function EdaPage() {
  return (
    <>
      <StructuredData
        data={caseStudyStructuredData({
          name: "Eda — multi-tenant clinics platform",
          description: DESCRIPTION,
          path: "/projects/eda",
          year: "2026",
        })}
      />
      <CaseStudyLayout
        meta={{
          eyebrow: <T en="Healthcare · Multi-tenant · Design & QA" ar="رعاية صحية · متعدّد المستأجرين · تصميم وضمان جودة" />,
          status: <T en="Team build" ar="بناء جماعي" />,
          title: (
            <T
              en="Eda — three apps, one isolated tenant per clinic."
              ar="Eda — ثلاثة تطبيقات، ومستأجِرٌ معزول لكل عيادة."
            />
          ),
          lede: (
            <T
              en="A multi-tenant clinics platform, built with a collaborator (@xvtu2003): three Flutter apps over a NestJS/TypeScript backend. The backend and apps were built by my collaborator; my two roles were design and testing — working from the project's requirements, I designed the screens across the apps and I was the tester who verified the system, including the separation between clinics."
              ar="منصّة عياداتٍ متعدّدة المستأجرين، بُنيت مع متعاون (@xvtu2003): ثلاثة تطبيقات Flutter فوق خادم NestJS/TypeScript. بنى المتعاون الخادم والتطبيقات؛ وكان دوراي التصميم والاختبار — انطلاقاً من متطلبات المشروع، صمّمتُ الشاشات عبر التطبيقات، وكنتُ المختبِرة التي تحقّقت من النظام، بما في ذلك الفصل بين العيادات."
            />
          ),
          year: "2026",
          role: <T en="Designer + QA tester" ar="مصمّمة + مختبِرة جودة" />,
          stack: [
            "Flutter",
            "NestJS",
            "TypeScript",
            "Multi-tenant",
            "Figma",
            "Manual QA",
          ],
        }}
        metrics={[
          { value: "3", label: <T en="Flutter apps — patient + clinic admin" ar="تطبيقات Flutter — مريض + إدارة عيادة" /> },
          { value: <T en="Multi-tenant" ar="متعدّد المستأجرين" />, label: <T en="Each clinic isolated as its own tenant" ar="كل عيادة معزولة كمستأجِرٍ خاص" /> },
          { value: "NestJS", label: <T en="One TypeScript backend behind the apps" ar="خادم TypeScript واحد خلف التطبيقات" /> },
          { value: <T en="Tested" ar="مُختبَر" />, label: <T en="Verified, including clinic separation" ar="تمّ التحقّق، بما في ذلك فصل العيادات" /> },
        ]}
        sections={[
          {
            kicker: <T en="Overview" ar="نظرة عامة" />,
            heading: <T en="What it is, and what I did." ar="ما هو، وما الذي فعلته." />,
            body: (
              <>
                <Lead>
                  <T
                    en="Eda is a platform that lets many clinics run on one system while each stays walled off from the others — three Flutter apps over a shared NestJS backend. I built it with a collaborator (@xvtu2003), who owned the backend and the apps. My two responsibilities were the design and the testing."
                    ar="Eda منصّةٌ تتيح لعياداتٍ كثيرة العمل على نظامٍ واحد مع بقاء كلٍّ منها معزولةً عن الأخريات — ثلاثة تطبيقات Flutter فوق خادم NestJS مشترك. بنيتها مع متعاون (@xvtu2003) تولّى الخادم والتطبيقات. وكانت مسؤوليّتاي التصميم والاختبار."
                  />
                </Lead>
                <FactGrid
                  items={[
                    { label: <T en="My role" ar="دوري" />, value: <T en="Designer + QA tester" ar="مصمّمة + مختبِرة جودة" /> },
                    { label: <T en="Team" ar="الفريق" />, value: <T en="Built with @xvtu2003" ar="بُني مع @xvtu2003" /> },
                    { label: <T en="Domain" ar="المجال" />, value: <T en="Healthcare · clinics" ar="رعاية صحية · عيادات" /> },
                    { label: <T en="Apps" ar="التطبيقات" />, value: <T en="3 Flutter apps" ar="3 تطبيقات Flutter" /> },
                    { label: <T en="Backend" ar="الخادم" />, value: "NestJS · TypeScript" },
                    { label: <T en="Architecture" ar="البنية" />, value: <T en="Multi-tenant" ar="متعدّد المستأجرين" /> },
                  ]}
                />
              </>
            ),
          },
          {
            kicker: <T en="The problem" ar="المشكلة" />,
            heading: <T en="Many clinics, one system, zero leakage." ar="عيادات كثيرة، نظامٌ واحد، صفر تسرّب." />,
            body: (
              <>
                <p>
                  <T
                    en="The point of a multi-tenant platform is leverage: build once, serve every clinic. The risk is the flip side of that same coin — everyone shares the same software, so the boundary between one clinic's patients and another's has to be absolute. In healthcare, a leak across that line isn't a bug, it's a breach — which is exactly why it mattered that someone tested for it specifically."
                    ar="جوهر المنصّة متعدّدة المستأجرين هو الرافعة: ابنِ مرّةً واحدة، واخدم كل عيادة. والخطر هو الوجه الآخر للعملة ذاتها — الجميع يتشارك البرمجية نفسها، فالحدّ بين مرضى عيادةٍ ومرضى أخرى يجب أن يكون مطلقاً. في الرعاية الصحية، التسرّب عبر هذا الخطّ ليس خللاً، بل خرقاً — وهذا بالضبط سبب أهمّية أن يختبره أحدٌ تحديداً."
                  />
                </p>
              </>
            ),
          },
          {
            kicker: <T en="Three apps" ar="ثلاثة تطبيقات" />,
            heading: <T en="Different users, one coherent system." ar="مستخدمون مختلفون، نظامٌ واحد متماسك." />,
            body: (
              <>
                <p>
                  <T
                    en="The platform splits into separate apps for separate users rather than overloading one app with modes. Working from the project's requirements, I designed the screens across the apps — keeping them feeling like one product, with shared patterns and language, while each stayed focused on its own job."
                    ar="تنقسم المنصّة إلى تطبيقاتٍ منفصلة لمستخدمين منفصلين بدل إثقال تطبيقٍ واحد بأوضاعٍ متعدّدة. انطلاقاً من متطلبات المشروع، صمّمتُ الشاشات عبر التطبيقات — مع الحفاظ على إحساسٍ بأنها منتجٌ واحد، بأنماطٍ ولغةٍ مشتركة، مع بقاء كلٍّ مركّزاً على وظيفته."
                  />
                </p>
                <FactGrid
                  items={[
                    { label: <T en="Patient app" ar="تطبيق المريض" />, value: <T en="The clinic's end users" ar="المستخدمون النهائيون للعيادة" /> },
                    { label: <T en="Clinic admin" ar="إدارة العيادة" />, value: <T en="Day-to-day operations" ar="العمليات اليومية" /> },
                    { label: <T en="Admin (2nd)" ar="مشرف (ثانٍ)" />, value: <T en="Platform / oversight" ar="المنصّة / الإشراف" /> },
                    { label: <T en="Shared" ar="مشترك" />, value: <T en="One design language" ar="لغة تصميمٍ واحدة" /> },
                  ]}
                />
                <Figure
                  label="App screens"
                  caption={<T en="Patient + clinic-admin screens — export to add" ar="شاشات المريض وإدارة العيادة — يُضاف التصدير لاحقاً" />}
                />
              </>
            ),
          },
          {
            kicker: <T en="Testing" ar="الاختبار" />,
            heading: (
              <T
                en="My job: make sure it all worked — and stayed separate."
                ar="مهمّتي: التأكّد أن كل شيء يعمل — ويبقى منفصلاً."
              />
            ),
            body: (
              <>
                <Lead>
                  <T
                    en="Alongside the design, I was the tester. With a multi-tenant system the everyday flows matter, but so does one thing most apps never have to worry about: that the wall between tenants holds."
                    ar="إلى جانب التصميم، كنتُ المختبِرة. في نظامٍ متعدّد المستأجرين تهمّ التدفّقات اليومية، لكن يهمّ أيضاً أمرٌ لا تقلق منه معظم التطبيقات: أن يصمد الجدار بين المستأجرين."
                  />
                </Lead>
                <p>
                  <T
                    en="I worked through the platform across the three apps, checking that the normal flows behaved as specified — and verifying the part that mattered most in this domain: that data, actions, and views stayed scoped to the right clinic, and that nothing from one tenant surfaced in another. Where behavior didn't match the requirements, I flagged it to be fixed."
                    ar="عملتُ خلال المنصّة عبر التطبيقات الثلاثة، أتحقّق من أن التدفّقات الطبيعية تتصرّف كما هو محدّد — وأتأكّد من الجزء الأهمّ في هذا المجال: أن تبقى البيانات والإجراءات والعروض محصورةً في العيادة الصحيحة، وألّا يظهر شيءٌ من مستأجِرٍ في آخر. وحيثما لم يطابق السلوك المتطلبات، كنتُ أُبلّغ عنه ليُصلَح."
                  />
                </p>
                <Callout kicker={<T en="Why this is the testing that counts" ar="لماذا هذا هو الاختبار الذي يهمّ" />}>
                  <T
                    en="In a single-tenant app a missed bug annoys a user. In a multi-tenant healthcare app, a missed isolation bug exposes one clinic's patients to another. That asymmetry is why testing the boundary, not just the features, was the priority."
                    ar="في تطبيقٍ بمستأجِرٍ واحد، خللٌ فائت يُزعج مستخدماً. وفي تطبيق رعايةٍ صحية متعدّد المستأجرين، خللُ عزلٍ فائت يكشف مرضى عيادةٍ لأخرى. هذا التفاوت هو سبب أولوية اختبار الحدّ، لا الميزات فقط."
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
                    en="Eda is where designing across multiple surfaces — and testing a system whose hardest requirement is invisible — became concrete for me. The habit it left: find the one guarantee a product can't break, and make sure someone has actually tested that it doesn't."
                    ar="في Eda صار التصميمُ عبر أسطحٍ متعدّدة — واختبارُ نظامٍ أصعبُ متطلّباته غير مرئي — أمراً ملموساً لي. والعادة التي تركها: ابحثي عن الضمان الوحيد الذي لا يمكن للمنتج كسره، وتأكّدي أن أحداً اختبر فعلاً أنه لا يُكسَر."
                  />
                </p>
              </>
            ),
          },
        ]}
        nextProject={{
          label: (
            <T
              en="CareConnect — three apps on one provable backend →"
              ar="CareConnect — ثلاثة تطبيقات على خادمٍ واحد قابل للإثبات →"
            />
          ),
          href: "/projects/careconnect",
        }}
      />
    </>
  );
}
