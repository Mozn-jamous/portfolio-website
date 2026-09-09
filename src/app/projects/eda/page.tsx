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
  "Designer and QA engineer on a multi-tenant clinics platform: three Flutter apps over a NestJS backend, built with a collaborator. I designed the screens across the apps and ran the testing, including whether the separation between clinics actually held.";

export const metadata: Metadata = {
  title: "Eda — a multi-tenant clinics platform — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "Eda — three apps, one isolated tenant per clinic",
    description: DESCRIPTION,
    type: "article",
    url: siteUrl("/projects/eda"),
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
          name: "Eda — a multi-tenant clinics platform",
          description: DESCRIPTION,
          path: "/projects/eda",
          year: "2026",
        })}
      />
      <CaseStudyLayout
        meta={{
          eyebrow: <T en="Healthcare · Multi-tenant · Design and QA" ar="رعاية صحية · متعدّد المستأجرين · تصميم واختبار" />,
          status: <T en="Team build" ar="بناء جماعي" />,
          title: (
            <T
              en="Eda: three apps, and one isolated tenant per clinic."
              ar="Eda: ثلاثة تطبيقات، ومستأجِر معزول لكل عيادة."
            />
          ),
          lede: (
            <T
              en="A multi-tenant clinics platform built with a collaborator (@xvtu2003): three Flutter apps over a NestJS and TypeScript backend. He wrote the backend and the apps. My two jobs were design and testing. Working from the project requirements, I designed the screens across all three apps, and I was the person who verified the system, including whether one clinic could reach another's data."
              ar="منصّة عيادات متعدّدة المستأجرين بُنيت مع متعاون (@xvtu2003): ثلاثة تطبيقات Flutter فوق خادم NestJS وTypeScript. هو كتب الخادم والتطبيقات. ومهمّتاي كانتا التصميم والاختبار. انطلاقاً من متطلبات المشروع صمّمتُ الشاشات عبر التطبيقات الثلاثة، وكنتُ من تحقّق من النظام، ومنه ما إذا كانت عيادة تستطيع الوصول إلى بيانات أخرى."
            />
          ),
          year: "2026",
          role: <T en="Designer + QA engineer" ar="مصمّمة + مهندسة اختبار" />,
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
          { value: "3", label: <T en="Flutter apps, from patient to clinic admin" ar="تطبيقات Flutter، من المريض إلى إدارة العيادة" /> },
          { value: <T en="Multi-tenant" ar="متعدّد المستأجرين" />, label: <T en="Every clinic isolated as its own tenant" ar="كل عيادة معزولة كمستأجِر خاص بها" /> },
          { value: "NestJS", label: <T en="One TypeScript backend behind the apps" ar="خادم TypeScript واحد خلف التطبيقات" /> },
          { value: <T en="Tested" ar="مُختبَر" />, label: <T en="Verified, the separation between clinics included" ar="تحقّقتُ منه، ومنه الفصل بين العيادات" /> },
        ]}
        sections={[
          {
            kicker: <T en="Overview" ar="نظرة عامة" />,
            heading: <T en="What it is, and what I did." ar="ما هو، وما الذي فعلته." />,
            body: (
              <>
                <Lead>
                  <T
                    en="Every clinic shares one system while staying walled off from the rest, and that is where the difficulty sits. Of my two responsibilities, the testing is the one that mattered most here."
                    ar="كل عيادة تتشارك نظاماً واحداً مع بقائها معزولة عن الباقي، وهنا تقع الصعوبة. ومن مسؤوليّتَيّ، الاختبار هو ما كان الأهمّ هنا."
                  />
                </Lead>
                <FactGrid
                  items={[
                    { label: <T en="My role" ar="دوري" />, value: <T en="Designed the screens, ran the testing" ar="صمّمتُ الشاشات، وتوليتُ الاختبار" /> },
                    { label: <T en="Team" ar="الفريق" />, value: <T en="Built with @xvtu2003" ar="بُني مع @xvtu2003" /> },
                    { label: <T en="Domain" ar="المجال" />, value: <T en="Healthcare, clinic operations" ar="رعاية صحية، وعمليات العيادات" /> },
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
            heading: <T en="Many clinics on one system, with nothing leaking." ar="عيادات كثيرة على نظام واحد، ولا شيء يتسرّب." />,
            body: (
              <>
                <p>
                  <T
                    en="The point of a multi-tenant platform is leverage: build it once and serve every clinic. The risk sits on the other side of the same coin. Everyone shares the same software, so the boundary between one clinic's patients and another's has to be absolute. In healthcare, a leak across that line is a breach rather than a bug, and that is why somebody had to test for it deliberately."
                    ar="جوهر المنصّة متعدّدة المستأجرين هو الرافعة: ابنِها مرة واحدة واخدم كل عيادة. والخطر يقف على الوجه الآخر للعملة نفسها. الجميع يتشارك البرمجية ذاتها، فالحدّ بين مرضى عيادة ومرضى أخرى يجب أن يكون مطلقاً. وفي الرعاية الصحية التسرّب عبر هذا الخطّ خرقٌ لا خلل، ولهذا كان على أحدٍ أن يختبره عن قصد."
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
                    en="The platform splits into separate apps for separate users instead of loading one app with modes. Working from the project requirements, I designed the screens across all of them, keeping shared patterns and shared language so they still feel like one product while each stays focused on its own job."
                    ar="تنقسم المنصّة إلى تطبيقات منفصلة لمستخدمين منفصلين بدل أن يُثقَل تطبيق واحد بأوضاع. انطلاقاً من متطلبات المشروع صمّمتُ الشاشات عبرها كلها، محافظةً على أنماط ولغة مشتركة كي تبقى منتجاً واحداً في الإحساس، مع بقاء كل واحد مركّزاً على وظيفته."
                  />
                </p>
                <FactGrid
                  items={[
                    { label: <T en="Patient app" ar="تطبيق المريض" />, value: <T en="The clinic's end users" ar="المستخدمون النهائيون للعيادة" /> },
                    { label: <T en="Clinic admin" ar="إدارة العيادة" />, value: <T en="Day-to-day operations" ar="العمليات اليومية" /> },
                    { label: <T en="Second admin" ar="مشرف ثانٍ" />, value: <T en="Platform-level oversight" ar="إشراف على مستوى المنصّة" /> },
                    { label: <T en="Shared" ar="مشترك" />, value: <T en="One design language across all three" ar="لغة تصميم واحدة عبر الثلاثة" /> },
                  ]}
                />
                <Figure
                  label="App screens"
                  caption={<T en="Patient and clinic-admin screens. Export still to add." ar="شاشات المريض وإدارة العيادة. التصدير لم يُضَف بعد." />}
                />
              </>
            ),
          },
          {
            kicker: <T en="Testing" ar="الاختبار" />,
            heading: (
              <T
                en="My job was to make sure it worked, and stayed separate."
                ar="كانت مهمّتي أن أتأكّد أنه يعمل، ويبقى منفصلاً."
              />
            ),
            body: (
              <>
                <Lead>
                  <T
                    en="Alongside the design, I did the testing. In a multi-tenant system the everyday flows matter, and so does one thing most apps never have to think about: whether the wall between tenants holds."
                    ar="إلى جانب التصميم توليتُ الاختبار. في نظام متعدّد المستأجرين تهمّ التدفّقات اليومية، ويهمّ أيضاً أمر لا تفكّر فيه معظم التطبيقات: هل يصمد الجدار بين المستأجرين."
                  />
                </Lead>
                <p>
                  <T
                    en="I worked through the platform across all three apps, checking the normal flows against the spec and then verifying the part that matters most here: that data, actions and views stayed scoped to the right clinic, and that nothing from one tenant showed up in another. Wherever the behaviour did not match the requirements, I wrote it up to be fixed."
                    ar="عملتُ خلال المنصّة عبر التطبيقات الثلاثة، أراجع التدفّقات الطبيعية مقابل المواصفة ثم أتحقّق من الجزء الأهمّ هنا: أن تبقى البيانات والإجراءات والعروض محصورة في العيادة الصحيحة، وألّا يظهر شيء من مستأجِر في آخر. وحيثما لم يطابق السلوك المتطلبات كتبتُه ليُصلَح."
                  />
                </p>
                <Callout kicker={<T en="Why this is the testing that counts" ar="لماذا هذا هو الاختبار الذي يهمّ" />}>
                  <T
                    en="In a single-tenant app a missed bug annoys a user. In a multi-tenant healthcare app, a missed isolation bug exposes one clinic's patients to another. That asymmetry is why the boundary got tested as carefully as the features did."
                    ar="في تطبيق بمستأجِر واحد، خلل فائت يُزعج مستخدماً. وفي تطبيق رعاية صحية متعدّد المستأجرين، خلل عزل فائت يكشف مرضى عيادة لأخرى. هذا التفاوت هو سبب اختبار الحدّ بالعناية نفسها التي نالتها الميزات."
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
                    en="Eda is where designing across several surfaces, and testing a system whose hardest requirement is invisible, became concrete for me. The habit it left me with is to find the one guarantee a product cannot break, then make sure somebody has actually tested that it doesn't."
                    ar="في Eda صار التصميم عبر عدّة أسطح، واختبار نظام أصعبُ متطلّباته غير مرئي، أمراً ملموساً لي. والعادة التي تركها لي أن أجد الضمان الوحيد الذي لا يمكن للمنتج كسره، ثم أتأكّد أن أحداً اختبر فعلاً أنه لا يُكسَر."
                  />
                </p>
              </>
            ),
          },
        ]}
        nextProject={{
          label: (
            <T
              en="CareConnect: three apps on a backend you can check →"
              ar="CareConnect: ثلاثة تطبيقات على خادم يمكنك التحقّق منه →"
            />
          ),
          href: "/projects/careconnect",
        }}
      />
    </>
  );
}
