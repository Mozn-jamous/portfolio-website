import type { Metadata } from "next";
import {
  CaseStudyLayout,
  ADR,
  Callout,
  DesignDecision,
  FactGrid,
  Lead,
  Persona,
  PhoneDemo,
  Priorities,
} from "@/components/case-study/CaseStudyLayout";
import { CareConnectDiagram } from "@/components/case-study/ArchitectureDiagram";
import {
  StructuredData,
  caseStudyStructuredData,
} from "@/components/site/StructuredData";
import { T } from "@/components/i18n/T";
import { siteUrl } from "@/lib/base-path";

const DESCRIPTION =
  "Three Flutter apps for three different audiences (mother, babysitter, admin) on one Supabase backend, with the permission rules enforced in SQL.";

export const metadata: Metadata = {
  title: "CareConnect — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "CareConnect — one backend, three audiences",
    description: DESCRIPTION,
    type: "article",
    url: siteUrl("/projects/careconnect"),
  },
  twitter: {
    card: "summary_large_image",
    title: "CareConnect — one backend, three audiences",
    description: DESCRIPTION,
  },
};

export default function CareConnectPage() {
  return (
    <>
      <StructuredData
        data={caseStudyStructuredData({
          name: "CareConnect",
          description: DESCRIPTION,
          path: "/projects/careconnect",
          year: "2024",
        })}
      />
      <CaseStudyLayout
      theme={{
        accent: "#7FA8E0",
        accentDeep: "#AECCF2",
        accentSoft: "rgba(127, 168, 224, 0.16)",
        glow: "rgba(90, 135, 205, 0.30)",
        diagramAccent: "#4F7FC4",
        diagramAccentDeep: "#3A66AB",
        diagramAccentSoft: "#E0EBF8",
      }}
      meta={{
        eyebrow: <T en="Mobile · Backend · Three-app marketplace" ar="جوال · خادم · سوق بثلاثة تطبيقات" />,
        status: <T en="Built, 2024" ar="مبنيّ، 2024" />,
        title: <T en="CareConnect: one backend, three audiences." ar="CareConnect: خادم واحد، ثلاثة جماهير." />,
        lede: (
          <T
            en="A childcare marketplace built as three native Flutter apps, each shaped around a different person's mental model, all sitting on one Supabase backend. I wrote the information architecture before I opened Figma."
            ar="سوق لرعاية الأطفال بُني كثلاثة تطبيقات Flutter أصلية، كل واحد مصوغ حول النموذج الذهني لشخص مختلف، وكلها على خادم Supabase واحد. كتبتُ هندسة المعلومات قبل أن أفتح Figma."
          />
        ),
        year: "2024",
        role: <T en="Engineer + designer (lead)" ar="مهندسة + مصمّمة (قيادة)" />,
        stack: ["Figma", "Flutter", "Dart", "Supabase", "PostgreSQL", "RLS", "REST", "RBAC", "IEEE 830"],
        links: [
          {
            label: <T en="Figma prototype" ar="نموذج Figma" />,
            href: "https://figma.com/design/8nNCv2zMnDqGnqq0y9z0i0",
            external: true,
            primary: true,
          },
        ],
      }}
      metrics={[
        { value: <T en="3 apps" ar="3 تطبيقات" />, label: <T en="One per audience, with no role-switching compromises" ar="واحد لكل جمهور، دون تنازلات تبديل الأدوار" /> },
        { value: <T en="1 backend" ar="خادم واحد" />, label: <T en="Supabase RLS decides access at the database layer" ar="يقرّر Supabase RLS الوصول في طبقة قاعدة البيانات" /> },
        { value: <T en="Spec-first" ar="المواصفة أولاً" />, label: <T en="IEEE 830 requirements written before any wireframe" ar="متطلبات IEEE 830 كُتبت قبل أي مخطّط هيكلي" /> },
        { value: <T en="Auditable" ar="قابل للتدقيق" />, label: <T en="Admin actions logged, and access provable in SQL" ar="إجراءات المشرف مسجّلة، والوصول قابل للإثبات بـSQL" /> },
      ]}
      sections={[
        {
          kicker: <T en="Overview" ar="نظرة عامة" />,
          heading: <T en="What it is, and what I owned." ar="ما هو، وما الذي تولّيته." />,
          body: (
            <>
              <Lead>
                <T
                  en="The three sides are mothers booking care, babysitters offering it, and admins keeping the platform honest. I designed all three apps and led the build, with the babysitter app developed together with a collaborator."
                  ar="الأطراف الثلاثة هي أمّهات يحجزن الرعاية، وجليسات يعرضنها، ومشرفون يحفظون نزاهة المنصّة. صمّمتُ التطبيقات الثلاثة وقدتُ البناء، وطُوّر تطبيق الجليسة بالتعاون مع زميل."
                />
              </Lead>
              <FactGrid
                items={[
                  { label: <T en="Role" ar="الدور" />, value: <T en="Designed all three, led the build" ar="صمّمتُ الثلاثة، وقدتُ البناء" /> },
                  { label: <T en="Timeline" ar="الإطار الزمني" />, value: "2024" },
                  { label: <T en="Platform" ar="المنصّة" />, value: "3× Flutter · iOS + Android" },
                  { label: <T en="Audiences" ar="الجماهير" />, value: <T en="Mother · Babysitter · Admin" ar="أمّ · جليسة · مشرف" /> },
                  { label: <T en="Backend" ar="الخادم" />, value: "Supabase · Postgres · RLS" },
                  { label: <T en="Scope" ar="النطاق" />, value: <T en="Requirements, Figma, Flutter" ar="متطلبات، وFigma، وFlutter" /> },
                ]}
              />
            </>
          ),
        },
        {
          kicker: <T en="Problem" ar="المشكلة" />,
          heading: (
            <T
              en="A marketplace lives or dies on trust between three sides."
              ar="السوق يحيا أو يموت على الثقة بين أطرافه الثلاثة."
            />
          ),
          body: (
            <>
              <p>
                <T
                  en="Childcare doesn't fit in one app. A mother wants a vetted match quickly. A babysitter wants a schedule she can rely on and clarity about what she'll be paid. An admin wants control over who's verified, who's been flagged, and how to step in without breaking anything."
                  ar="رعاية الأطفال لا تتّسع لتطبيق واحد. الأمّ تريد تطابقاً مُدقَّقاً بسرعة. والجليسة تريد جدولاً تعتمد عليه ووضوحاً في ما ستُقبضه. والمشرف يريد تحكّماً بمن هو موثَّق، ومن أُبلغ عنه، وكيف يتدخّل دون أن يكسر شيئاً."
                />
              </p>
              <p>
                <T
                  en="Each side only trusts the platform if the other two are being held to rules they can't see but can feel. That makes trust an information-architecture and permissions problem long before it becomes a UI one."
                  ar="كل طرف لا يثق بالمنصّة إلا إن كان الطرفان الآخران مُلزَمَين بقواعد لا يرونها لكن يشعرون بها. وهذا يجعل الثقة مشكلة هندسة معلومات وصلاحيات قبل أن تصبح مشكلة واجهة بزمن طويل."
                />
              </p>
            </>
          ),
        },
        {
          kicker: <T en="Research" ar="البحث" />,
          heading: <T en="One spec, three mental models." ar="مواصفة واحدة، ثلاثة نماذج ذهنية." />,
          body: (
            <>
              <p>
                <T
                  en={<>I started with an IEEE 830 requirements document covering every entity, relation and user flow, before a single screen got designed. Writing it produced the insight the whole product rests on: a mother is{" "}<em>shopping</em>, a babysitter is <em>selling her time</em>, and an admin is <em>moderating</em>. Three different tasks, which means three different information architectures.</>}
                  ar={<>بدأتُ بوثيقة متطلبات IEEE 830 تغطّي كل كيان وعلاقة وتدفّق مستخدم، قبل أن تُصمَّم شاشة واحدة. وأنتجت كتابتها الاستنتاج الذي يقوم عليه المنتج كله: الأمّ <em>تتسوّق</em>، والجليسة <em>تبيع وقتها</em>، والمشرف <em>يُدير</em>. ثلاث مهامّ مختلفة، وهذا يعني ثلاث هندسات معلومات مختلفة.</>}
                />
              </p>
              <Callout kicker={<T en="Key insight" ar="الاستنتاج الأساسي" />}>
                <T
                  en="The most important design decision here was the data model rather than any screen. A wrong schema is something no amount of good UI can rescue, so the spec came before Figma."
                  ar="أهمّ قرار تصميمي هنا كان نموذج البيانات لا أي شاشة. المخطّط الخاطئ شيء لا تنقذه أي واجهة جيدة، فجاءت المواصفة قبل Figma."
                />
              </Callout>
            </>
          ),
        },
        {
          kicker: <T en="Users & personas" ar="المستخدمون والـ Personas" />,
          heading: <T en="Three audiences, three personas." ar="ثلاثة جماهير، ثلاثة personas." />,
          body: (
            <>
              <p>
                <T
                  en="The user types from the requirements document became three personas, each with a different primary task and the frustration that shaped its app."
                  ar="فئات المستخدمين من وثيقة المتطلبات صارت ثلاثة personas، لكل واحد مهمّة أساسية مختلفة والإحباط الذي شكّل تطبيقه."
                />
              </p>

              <Persona
                initial={<T en="H" ar="ه" />}
                name={<T en="Huda, a working mother" ar="هُدى، أمّ عاملة" />}
                role={<T en="Mother app · books care" ar="تطبيق الأمّ · تحجز الرعاية" />}
                story={
                  <T
                    en="I want to find a babysitter I can actually trust, and quickly, instead of gambling on a stranger with my child."
                    ar="أريد أن أجد جليسة أثق بها فعلاً، وبسرعة، بدل أن أقامر بغريبة مع طفلي."
                  />
                }
                goals={
                  <T
                    en="Vetted matches near her, a fast booking, and a clear sense of who has actually been verified."
                    ar="تطابقات مُدقَّقة قريبة منها، وحجز سريع، وإحساس واضح بمن تمّ توثيقه فعلاً."
                  />
                }
                frustrations={
                  <T
                    en="Not knowing who to trust, and platforms where anyone can list themselves with no checks at all."
                    ar="ألّا تعرف بمن تثق، ومنصّات يُدرج فيها أي أحد نفسه دون أي تدقيق."
                  />
                }
              />

              <Persona
                initial={<T en="S" ar="س" />}
                name={<T en="Sara, a babysitter" ar="سارة، جليسة أطفال" />}
                role={<T en="Babysitter app · offers care" ar="تطبيق الجليسة · تعرض الرعاية" />}
                story={
                  <T
                    en="I want a steady schedule, and I want to know exactly what a booking expects of me before I accept it."
                    ar="أريد جدولاً ثابتاً، وأريد أن أعرف بالضبط ما يتوقّعه الحجز منّي قبل أن أقبله."
                  />
                }
                goals={
                  <T
                    en="Bookings she can count on, a schedule she can read, and the right context about each child."
                    ar="حجوزات تعتمد عليها، وجدول تستطيع قراءته، والسياق الصحيح عن كل طفل."
                  />
                }
                frustrations={
                  <T
                    en="No-shows, vague expectations, and being shown personal data she has no business seeing."
                    ar="عدم الحضور، وتوقّعات غامضة، وأن تُعرَض عليها بيانات شخصية لا شأن لها برؤيتها."
                  />
                }
              />

              <Persona
                initial={<T en="M" ar="م" />}
                name={<T en="Maya, a platform moderator" ar="مايا، مشرفة المنصّة" />}
                role={<T en="Admin app · moderates" ar="تطبيق المشرف · يُدير" />}
                story={
                  <T
                    en="I want to verify people, flag problems and step in without breaking the platform, and I want a record of everything I did."
                    ar="أريد أن أوثّق الناس وأُبلّغ عن المشكلات وأتدخّل دون أن أكسر المنصّة، وأريد سجلاً بكل ما فعلته."
                  />
                }
                goals={
                  <T
                    en="Control over who's verified or flagged, with a clean trail behind every decision."
                    ar="تحكّم بمن هو موثَّق أو مُبلَّغ عنه، مع أثر نظيف خلف كل قرار."
                  />
                }
                frustrations={
                  <T
                    en="Abuse slipping through, and having no way to see why a past decision was made."
                    ar="تجاوزات تتسلّل، وألّا تجد طريقة لمعرفة سبب قرار سابق."
                  />
                }
              />

              <Callout kicker={<T en="Problem statements" ar="بيانات المشكلة" />}>
                <T
                  en={<><strong>Huda</strong> has to trust a babysitter before she books, because handing over her child is the highest-stakes thing this product ever asks of anyone. <strong>Sara</strong> needs a schedule she can rely on with the right context, and <strong>Maya</strong> needs control she can prove she used properly. Each side trusts the platform only when the other two are visibly held to rules.</>}
                  ar={<><strong>هُدى</strong> عليها أن تثق بالجليسة قبل أن تحجز، لأن تسليم طفلها أعلى ما يطلبه هذا المنتج من أحد مخاطرةً. و<strong>سارة</strong> تحتاج جدولاً تعتمد عليه بالسياق الصحيح، و<strong>مايا</strong> تحتاج تحكّماً تستطيع إثبات أنها استخدمته كما يجب. وكل طرف لا يثق بالمنصّة إلا حين يرى الطرفين الآخرين مُلزَمَين بقواعد."</>}
                />
              </Callout>
            </>
          ),
        },
        {
          kicker: <T en="Design strategy" ar="استراتيجية التصميم" />,
          heading: (
            <T
              en="Decide the structure before drawing a single screen."
              ar="احسم البنية قبل رسم شاشة واحدة."
            />
          ),
          body: (
            <>
              <Lead>
                <T
                  en="My bet was that the hardest problem in a marketplace is keeping three audiences and one backend coherent. So the schema and the permission model led, and the interface followed."
                  ar="كان رهاني أن أصعب مشكلة في سوق هي إبقاء ثلاثة جماهير وخادم واحد متماسكين. فقاد المخطّط ونموذج الصلاحيات، وتبعت الواجهة."
                />
              </Lead>
              <FactGrid
                items={[
                  { label: <T en="Goal" ar="الهدف" />, value: <T en="Trust across all three sides of the marketplace" ar="الثقة عبر أطراف السوق الثلاثة" /> },
                  { label: <T en="Hypothesis" ar="الفرضية" />, value: <T en="Three focused apps beat one app with a role switch" ar="ثلاثة تطبيقات مركّزة تتفوّق على تطبيق فيه مبدّل أدوار" /> },
                  { label: <T en="Priority" ar="الأولوية" />, value: <T en="Data model and access rules ahead of UI" ar="نموذج البيانات وقواعد الوصول قبل الواجهة" /> },
                  { label: <T en="Tradeoff" ar="المفاضلة" />, value: <T en="A costlier build for surfaces that stay honest" ar="بناء أكلف مقابل واجهات تبقى أمينة" /> },
                ]}
              />
            </>
          ),
        },
        {
          kicker: <T en="Design process" ar="عملية التصميم" />,
          heading: <T en="Three audiences. Three mental models. Three apps." ar="ثلاثة جماهير. ثلاثة نماذج ذهنية. ثلاثة تطبيقات." />,
          body: (
            <>
              <p>
                <T
                  en="Choosing three separate apps over one with a role switch is a design decision before it's an engineering one. Each app got its own Figma file, its own navigation and its own vocabulary."
                  ar="اختيار ثلاثة تطبيقات منفصلة بدل واحد فيه مبدّل أدوار قرار تصميمي قبل أن يكون هندسياً. ولكل تطبيق ملف Figma خاص به، وتنقّله ومفرداته."
                />
              </p>

              <DesignDecision
                number={1}
                title={<T en="Three dedicated apps rather than one with a role switch." ar="ثلاثة تطبيقات مخصّصة بدل واحد فيه مبدّل أدوار." />}
                challenge={
                  <T
                    en="One app with a role switch is cheaper to build and cheaper to maintain, and plenty of marketplaces ship exactly that: one codebase, one store listing, one onboarding flow."
                    ar="تطبيق واحد فيه مبدّل أدوار أرخص في البناء وأرخص في الصيانة، وكثير من الأسواق تُطلق هذا بالضبط: قاعدة كود واحدة، وإدراج واحد في المتجر، وتهيئة واحدة."
                  />
                }
                decision={
                  <T
                    en={<>Three apps. Each audience has a different primary action, a different vocabulary and different expectations.{" "}<strong>Nobody has to read &ldquo;you are logged in as: Mother&rdquo;.</strong></>}
                    ar={<>ثلاثة تطبيقات. لكل جمهور فعل أساسي مختلف، ومفردات مختلفة، وتوقّعات مختلفة.{" "}<strong>ولا أحد مضطرّ أن يقرأ «أنتِ مسجَّلة الدخول كـ: أمّ».</strong></>}
                  />
                }
                outcome={
                  <T
                    en="Each app ended up with navigation built for one job and a store listing that describes what it actually does. It cost more up front, and each surface stays honest to the person using it."
                    ar="انتهى كل تطبيق بتنقّل مبنيّ لمهمّة واحدة وإدراج في المتجر يصف ما يفعله فعلاً. كلّف أكثر في البداية، وتبقى كل واجهة أمينة لمن يستخدمها."
                  />
                }
              />

              <PhoneDemo
                screens={[
                  {
                    src: "/work/careconnect/login.webp",
                    alt: "CareConnect login: the axolotl mascot over a pale sky-blue ground, bilingual Arabic and English with full RTL",
                    title: "A friendly face to start",
                    titleAr: "وجه ودود للبداية",
                    blurb: "The mascot and a calm sky-blue palette set a reassuring tone rather than a clinical one, and the whole app works in Arabic and English.",
                    blurbAr: "الشخصية ولوحة زرقاء هادئة تضبطان نبرة مُطمئنة لا سريرية، والتطبيق كله يعمل بالعربية والإنجليزية.",
                  },
                  {
                    src: "/work/careconnect/home.webp",
                    alt: "CareConnect home: feature tiles for meals, sleep, vaccinations, activities, booking and appointments",
                    title: "A day of care, in one grid",
                    titleAr: "يوم رعاية في شبكة واحدة",
                    blurb: "Meals, sleep, vaccinations, activities, booking and appointments. The mother's app keeps the whole day in one place.",
                    blurbAr: "الوجبات، والنوم، واللقاحات، والأنشطة، والحجز، والمواعيد. تطبيق الأمّ يحفظ اليوم كله في مكان واحد.",
                  },
                  {
                    src: "/work/careconnect/activity.webp",
                    alt: "CareConnect activity detail: guided steps and age and interactive tags for a child activity",
                    title: "Guided activities by age",
                    titleAr: "أنشطة موجَّهة حسب العمر",
                    blurb: "Every activity comes with simple steps and an age tag, which keeps play both safe and appropriate to where the child is.",
                    blurbAr: "كل نشاط يأتي بخطوات بسيطة ووسم عمر، وهذا يجعل اللعب آمناً ومناسباً لمرحلة الطفل.",
                  },
                  {
                    src: "/work/careconnect/booking.webp",
                    alt: "CareConnect booking details: child info, health notes and parent contact for a babysitter booking",
                    title: "Bookings with full context",
                    titleAr: "حجوزات بسياق كامل",
                    blurb: "A booking carries the child's details, health notes and a parent contact: everything the babysitter needs and nothing beyond it.",
                    blurbAr: "يحمل الحجز تفاصيل الطفل وملاحظاته الصحّية وتواصل الوالدين: كل ما تحتاجه الجليسة ولا شيء بعده.",
                  },
                ]}
              />
            </>
          ),
        },
        {
          kicker: <T en="Technical architecture" ar="البنية التقنية" />,
          heading: (
            <T
              en="One Postgres, three clients, no shared-state tricks."
              ar="قاعدة Postgres واحدة، وثلاثة عملاء، وبلا حِيَل للحالة المشتركة."
            />
          ),
          body: (
            <>
              <p>
                <T
                  en="Every read and write goes through Supabase row-level security. A mother sees active babysitters inside her search radius. A babysitter sees and edits her own profile and bookings. An admin sees everything, and everything an admin does is written to a log. The role enforcement lives in the database, so the client never has to be trusted with it."
                  ar="كل قراءة وكتابة تمرّ عبر أمان مستوى الصف في Supabase. الأمّ ترى الجليسات النشطات داخل نطاق بحثها. والجليسة ترى وتحرّر ملفها وحجوزاتها. والمشرف يرى كل شيء، وكل ما يفعله المشرف يُكتب في سجلّ. وفرض الأدوار يعيش في قاعدة البيانات، فلا يُضطرّ أحد لائتمان العميل عليه."
                />
              </p>

              <CareConnectDiagram />

              <FactGrid
                items={[
                  { label: <T en="Mother app" ar="تطبيق الأمّ" />, value: <T en="Discover · Book · Pay" ar="اكتشاف · حجز · دفع" /> },
                  { label: <T en="Babysitter app" ar="تطبيق الجليسة" />, value: <T en="Profile · Schedule" ar="ملف · جدول" /> },
                  { label: <T en="Admin app" ar="تطبيق المشرف" />, value: <T en="Moderate · Audit" ar="إدارة · تدقيق" /> },
                  { label: <T en="Auth" ar="المصادقة" />, value: "Supabase Auth" },
                  { label: <T en="Realtime" ar="الزمن الحقيقي" />, value: "Postgres CDC" },
                  { label: <T en="Policies" ar="السياسات" />, value: "RLS · RBAC" },
                ]}
              />

              <ADR
                number={1}
                title={<T en="Supabase and RLS instead of Firebase with client-side guards." ar="Supabase وRLS بدل Firebase بحُرّاس من جهة العميل." />}
                context={
                  <T
                    en="Firebase is what student marketplaces usually reach for, and auth with Firestore is quick to wire. Its security rules are a JSON dialect that's easy to get subtly wrong, and the client is modifiable."
                    ar="Firebase ما تلجأ إليه عادة أسواق الطلاب، وربط المصادقة مع Firestore سريع. لكن قواعد أمانه لهجة JSON يسهل أن تُخطئ فيها دون أن تنتبه، والعميل قابل للتعديل."
                  />
                }
                decision={
                  <T
                    en={<>Postgres with Supabase RLS. The policies are ordinary SQL, they run on every query, and there is{" "}<strong>no client-side path around them</strong>. A mother&apos;s query cannot return another mother&apos;s bookings.</>}
                    ar={<>Postgres مع Supabase RLS. السياسات SQL عادية، تُنفَّذ مع كل استعلام، و<strong>لا يوجد طريق من جهة العميل يلتفّ حولها</strong>. استعلام أمّ لا يمكنه إعادة حجوزات أمّ أخرى.</>}
                  />
                }
                consequences={
                  <T
                    en="The security model is something a reviewer can read and check. It's also what made the three-app split safe: each client asks the database for what it's allowed to see, and the database is the access layer."
                    ar="نموذج الأمان شيء يستطيع المراجع أن يقرأه ويتحقّق منه. وهو أيضاً ما جعل فصل التطبيقات الثلاثة آمناً: كل عميل يسأل قاعدة البيانات عمّا يُسمح له برؤيته، وقاعدة البيانات هي طبقة الوصول."
                  />
                }
              />
            </>
          ),
        },
        {
          kicker: <T en="Challenges" ar="التحدّيات" />,
          heading: (
            <T
              en="Keeping three apps and one backend from drifting apart."
              ar="منع ثلاثة تطبيقات وخادم واحد من التباعد."
            />
          ),
          body: (
            <>
              <p>
                <T
                  en="It's tempting to treat three apps as three projects. The apps turned out to be the easy part. The hard part was holding one schema and one permission model steady across three quite different experiences without ending up with three copies of the same code."
                  ar="من المغري أن تتعامل مع ثلاثة تطبيقات كثلاثة مشاريع. تبيّن أن التطبيقات هي الجزء السهل. والصعب كان تثبيت مخطّط واحد ونموذج صلاحيات واحد عبر ثلاث تجارب مختلفة تماماً دون أن تنتهي بثلاث نسخ من الكود نفسه."
                />
              </p>

              <ADR
                number={2}
                title={<T en="A full requirements document before any screen." ar="وثيقة متطلبات كاملة قبل أي شاشة." />}
                context={
                  <T
                    en="Most projects skip the requirements document and discover the spec while implementing it. That starts faster and hurts in the middle."
                    ar="معظم المشاريع تتخطّى وثيقة المتطلبات وتكتشف المواصفة أثناء تنفيذها. يبدأ ذلك أسرع ويؤلم في الوسط."
                  />
                }
                decision={
                  <T
                    en="I wrote the IEEE 830 document first, covering every entity, relation and user flow. Then Figma. Then Flutter."
                    ar="كتبتُ وثيقة IEEE 830 أولاً، تغطّي كل كيان وعلاقة وتدفّق مستخدم. ثم Figma. ثم Flutter."
                  />
                }
                consequences={
                  <T
                    en="When a payments change came in mid-development, the document told me which six screens across two apps had to change. The refactor was a search instead of an excavation."
                    ar="حين وصل تغيير في الدفع منتصف التطوير، أخبرتني الوثيقة أي ست شاشات في تطبيقين يجب أن تتغيّر. وصارت إعادة الهيكلة بحثاً بدل تنقيب."
                  />
                }
              />
            </>
          ),
        },
        {
          kicker: <T en="Outcomes" ar="النتائج" />,
          heading: <T en="Three honest surfaces on a backend you can check." ar="ثلاث واجهات أمينة على خادم يمكنك التحقّق منه." />,
          body: (
            <>
              <p>
                <T
                  en="CareConnect shipped as three focused apps on one Supabase backend, with access decided in the database rather than trusted to the client. Each side's data boundary can be demonstrated in SQL, and every admin action leaves a record."
                  ar="أُطلق CareConnect كثلاثة تطبيقات مركّزة على خادم Supabase واحد، والوصول فيه يُقرَّر في قاعدة البيانات بدل أن يُؤتمَن عليه العميل. وحدّ بيانات كل طرف يمكن إظهاره بـSQL، وكل إجراء مشرف يترك سجلاً."
                />
              </p>
              <p>
                <T
                  en="The three-app split was a UX call that engineering then had to honour. And writing the spec first was the cheapest insurance I could buy against three apps and one backend drifting apart."
                  ar="كان فصل التطبيقات الثلاثة قراراً في التجربة كان على الهندسة بعده أن تحترمه. وكتابة المواصفة أولاً كانت أرخص تأمين أستطيع شراءه ضدّ تباعد ثلاثة تطبيقات وخادم واحد."
                />
              </p>
            </>
          ),
        },
        {
          kicker: <T en="Validation" ar="التحقّق" />,
          heading: <T en="How I'd test three apps at once." ar="كيف سأختبر ثلاثة تطبيقات معاً." />,
          body: (
            <>
              <p>
                <T
                  en="Since trust has to hold across all three sides, I'd run a usability study per app around its main task: a mother finding and booking vetted care, a babysitter accepting a booking, a moderator verifying and flagging. Then I'd cluster the findings and fix whatever blocks the marketplace loop first."
                  ar="بما أن الثقة يجب أن تصمد عبر الأطراف الثلاثة، سأُجري دراسة قابلية استخدام لكل تطبيق حول مهمّته الرئيسية: أمّ تجد وتحجز رعاية مُدقَّقة، وجليسة تقبل حجزاً، ومشرفة توثّق وتُبلّغ. ثم أعنقد النتائج وأُصلح ما يعيق حلقة السوق أولاً."
                />
              </p>
              <Priorities
                items={[
                  {
                    tier: "P0",
                    label: (
                      <T
                        en="The trust signals in the mother's app, the verification badges and what they actually mean, have to be unmistakable, or she won't book at all."
                        ar="إشارات الثقة في تطبيق الأمّ، شارات التوثيق ومعناها الفعلي، يجب أن تكون لا تُخطئ، وإلا فلن تحجز أصلاً."
                      />
                    ),
                  },
                  {
                    tier: "P1",
                    label: (
                      <T
                        en="The babysitter's schedule and the context of a booking have to be readable at a glance before she accepts it."
                        ar="جدول الجليسة وسياق الحجز يجب أن يُقرآ بلمحة قبل أن تقبله."
                      />
                    ),
                  },
                  {
                    tier: "P2",
                    label: (
                      <T
                        en="The admin's moderation actions should be quick and obviously reversible, with the log one tap away."
                        ar="إجراءات الإدارة لدى المشرف ينبغي أن تكون سريعة وقابلة للتراجع بوضوح، والسجلّ على بُعد نقرة."
                      />
                    ),
                  },
                ]}
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
                  en="What stuck with me is that most of the difficulty in a multi-sided product is information architecture and access control, not how many screens there are. Writing the spec first felt slow and turned out to be the fastest route. It's my default now for anything with more than one kind of user."
                  ar="ما بقي معي أن معظم الصعوبة في منتج متعدّد الأطراف هندسة معلومات وتحكّم بالوصول، لا عدد الشاشات. بدت كتابة المواصفة أولاً بطيئة وتبيّن أنها أسرع طريق. وهي الآن خياري الافتراضي لأي شيء فيه أكثر من نوع مستخدم."
                />
              </p>
              <p>
                <T
                  en="Next time I'd build a shared component layer across the three apps much earlier, so visual consistency is held by code instead of by discipline."
                  ar="في المرة القادمة سأبني طبقة مكوّنات مشتركة عبر التطبيقات الثلاثة أبكر بكثير، ليحفظ الكودُ الاتّساق البصري بدل الانضباط."
                />
              </p>
            </>
          ),
        },
      ]}
      nextProject={{
        label: <T en="Smart Expense Manager: an open-source Odoo module →" ar="Smart Expense Manager: وحدة Odoo مفتوحة المصدر →" />,
        href: "/projects/smart-expense",
      }}
      />
    </>
  );
}
