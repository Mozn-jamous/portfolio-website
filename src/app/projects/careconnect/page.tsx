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

const DESCRIPTION =
  "Three Flutter apps designed for three distinct audiences — Mother, Babysitter, Admin — on one Supabase backend. UX-first, then built.";

export const metadata: Metadata = {
  title: "CareConnect — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "CareConnect — one backend, three audiences",
    description: DESCRIPTION,
    type: "article",
    url: "https://moznjamous.com/projects/careconnect",
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
        eyebrow: <T en="UI/UX · Mobile · 3-app marketplace" ar="UI/UX · جوال · سوقٌ بثلاثة تطبيقات" />,
        status: <T en="Built — 2024" ar="مبنيّ — 2024" />,
        title: <T en="CareConnect — one backend, three audiences." ar="CareConnect — خادمٌ واحد، ثلاثة جماهير." />,
        lede: (
          <T
            en="A childcare marketplace designed and built as three native Flutter apps — each shaped around a different user's mental model — on a single Supabase backend. The information architecture came before the first Figma frame."
            ar="سوقٌ لرعاية الأطفال صُمّم وبُني كثلاثة تطبيقات Flutter أصلية — كلٌّ مُشكَّل حول النموذج الذهني لمستخدمٍ مختلف — على خادم Supabase واحد. جاءت هندسة المعلومات قبل أول إطارٍ في Figma."
          />
        ),
        year: "2024",
        role: <T en="UI/UX Designer + Developer" ar="مصمّمة UI/UX + مطوّرة" />,
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
        { value: <T en="3 apps" ar="3 تطبيقات" />, label: <T en="One per audience — no role-switching compromises" ar="واحدٌ لكل جمهور — دون تنازلات تبديل الأدوار" /> },
        { value: <T en="1 backend" ar="خادمٌ واحد" />, label: <T en="Supabase RLS enforces access at the database layer" ar="يفرض Supabase RLS الوصول في طبقة قاعدة البيانات" /> },
        { value: <T en="Spec-first" ar="المواصفة أولاً" />, label: <T en="IEEE 830 requirements written before any wireframe" ar="متطلبات IEEE 830 كُتبت قبل أي مخطّطٍ هيكلي" /> },
        { value: <T en="Auditable" ar="قابل للتدقيق" />, label: <T en="Every admin action logged; access provable in SQL" ar="كل إجراء مشرفٍ مُسجَّل؛ والوصول قابل للإثبات بـSQL" /> },
      ]}
      sections={[
        {
          kicker: <T en="Overview" ar="نظرة عامة" />,
          heading: <T en="What it is, and what I owned." ar="ما هو، وما الذي تولّيته." />,
          body: (
            <>
              <Lead>
                <T
                  en="CareConnect is a childcare marketplace with three sides — mothers booking care, babysitters offering it, and admins moderating the platform. I designed and built all three as separate Flutter apps over one shared backend."
                  ar="CareConnect سوقٌ لرعاية الأطفال بثلاثة أطراف — أمّهاتٌ يحجزن الرعاية، وجليساتٌ يعرضنها، ومشرفون يديرون المنصّة. صمّمتُ وبنيتُ الثلاثة جميعاً كتطبيقات Flutter منفصلة على خادمٍ مشترك واحد."
                />
              </Lead>
              <FactGrid
                items={[
                  { label: <T en="Role" ar="الدور" />, value: <T en="Designer + developer (solo)" ar="مصمّمة + مطوّرة (منفردة)" /> },
                  { label: <T en="Timeline" ar="الإطار الزمني" />, value: "2024" },
                  { label: <T en="Platform" ar="المنصّة" />, value: "3× Flutter · iOS + Android" },
                  { label: <T en="Audiences" ar="الجماهير" />, value: <T en="Mother · Babysitter · Admin" ar="أمّ · جليسة · مشرف" /> },
                  { label: <T en="Backend" ar="الخادم" />, value: "Supabase · Postgres · RLS" },
                  { label: <T en="Scope" ar="النطاق" />, value: <T en="SRS → Figma → Flutter" ar="وثيقة متطلبات ← Figma ← Flutter" /> },
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
                  en="You can't solve childcare with a single app. Mothers need quick, vetted matches. Babysitters need a schedule and reliable payment visibility. Admins need control — who is verified, who is flagged, and how to intervene without breaking the platform."
                  ar="لا يمكن حلّ رعاية الأطفال بتطبيقٍ واحد. الأمّهات يحتجن تطابقاً سريعاً ومُدقَّقاً. والجليسات يحتجن جدولاً ووضوحاً موثوقاً في الدفع. والمشرفون يحتاجون تحكّماً — مَن مُوثَّق، ومَن مُبلَّغ عنه، وكيف يتدخّلون دون كسر المنصّة."
                />
              </p>
              <p>
                <T
                  en="Each side trusts the platform only if the other two are held to rules they can't see but can feel. That trust is an information-architecture and access-control problem long before it's a UI one."
                  ar="كلّ طرفٍ يأتمن المنصّة فقط إن كان الطرفان الآخران مُلزَمَين بقواعد لا يرونها لكن يشعرون بها. وتلك الثقة مشكلة هندسة معلوماتٍ وتحكّمٍ بالوصول قبل أن تكون مشكلة واجهة بزمنٍ طويل."
                />
              </p>
            </>
          ),
        },
        {
          kicker: <T en="Research" ar="البحث" />,
          heading: <T en="One spec, three mental models." ar="مواصفةٌ واحدة، ثلاثة نماذج ذهنية." />,
          body: (
            <>
              <p>
                <T
                  en={<>I started with an IEEE 830 software requirements spec — every entity, every relation, every user flow — before any screen was designed. Writing it forced the core insight: a mother is{" "}<em>shopping</em>, a babysitter is <em>selling time</em>, and an admin is <em>moderating</em>. Three fundamentally different tasks that produce three fundamentally different information architectures.</>}
                  ar={<>بدأتُ بوثيقة متطلبات برمجية IEEE 830 — كلّ كيان، وكلّ علاقة، وكلّ تدفّق مستخدم — قبل تصميم أي شاشة. فرضت كتابتها الاستنتاج الجوهري: الأمّ <em>تتسوّق</em>، والجليسة <em>تبيع وقتاً</em>، والمشرف <em>يُدير</em>. ثلاث مهامّ مختلفة جوهرياً تُنتج ثلاث هندسات معلوماتٍ مختلفة جوهرياً.</>}
                />
              </p>
              <Callout kicker={<T en="Key insight" ar="الاستنتاج الأساسي" />}>
                <T
                  en="The most important design decision wasn't a screen — it was the data model. If the schema is wrong, no amount of good UI fixes it. So the spec came before Figma."
                  ar="أهمّ قرارٍ تصميمي لم يكن شاشة — بل نموذج البيانات. إن كان المخطّط خاطئاً، فلا قدرَ من الواجهة الجيدة يُصلحه. لذا جاءت المواصفة قبل Figma."
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
                  en="The user types I defined in the IEEE 830 spec became three personas — each with a different primary task, a one-line story, and the frustration that shaped its app."
                  ar="فئات المستخدمين التي عرّفتها في وثيقة IEEE 830 صارت ثلاثة personas — لكلٍّ مهمةٌ أساسية مختلفة، وقصةٌ من سطر، والإحباط الذي شكّل تطبيقها."
                />
              </p>

              <Persona
                initial={<T en="H" ar="ه" />}
                name={<T en="Huda — working mother" ar="هُدى — أمٌّ عاملة" />}
                role={<T en="Mother app · books care" ar="تطبيق الأمّ · تحجز الرعاية" />}
                story={
                  <T
                    en="I want to find a babysitter I can actually trust, quickly — not gamble on a stranger with my child."
                    ar="أريد أن أجد جليسةً أثق بها فعلاً، وبسرعة — لا أن أقامر بغريبةٍ مع طفلي."
                  />
                }
                goals={
                  <T
                    en="Vetted matches near her, fast booking, and a clear sense of who's verified."
                    ar="تطابقاتٌ مُدقَّقة قريبةٌ منها، وحجزٌ سريع، وإحساسٌ واضح بمن هو موثَّق."
                  />
                }
                frustrations={
                  <T
                    en="Not knowing who to trust; platforms where anyone can list themselves with no checks."
                    ar="عدم معرفة بمن تثق؛ ومنصّاتٌ يُدرج فيها أيٌّ كان نفسه دون تدقيق."
                  />
                }
              />

              <Persona
                initial={<T en="S" ar="س" />}
                name={<T en="Sara — babysitter" ar="سارة — جليسة أطفال" />}
                role={<T en="Babysitter app · offers care" ar="تطبيق الجليسة · تعرض الرعاية" />}
                story={
                  <T
                    en="I want a steady schedule and to know exactly what each booking expects of me before I accept."
                    ar="أريد جدولاً ثابتاً وأن أعرف بالضبط ما يتوقّعه كلّ حجزٍ منّي قبل أن أقبله."
                  />
                }
                goals={
                  <T
                    en="Reliable bookings, a clear schedule, and the right context for each child."
                    ar="حجوزاتٌ موثوقة، وجدولٌ واضح، والسياق الصحيح لكل طفل."
                  />
                }
                frustrations={
                  <T
                    en="No-shows, unclear expectations, and seeing personal data she shouldn't."
                    ar="عدم الحضور، وتوقّعاتٌ غامضة، ورؤية بياناتٍ شخصية لا ينبغي أن تراها."
                  />
                }
              />

              <Persona
                initial={<T en="M" ar="م" />}
                name={<T en="Maya — platform moderator" ar="مايا — مشرفة المنصّة" />}
                role={<T en="Admin app · moderates" ar="تطبيق المشرف · يُدير" />}
                story={
                  <T
                    en="I want to verify, flag, and intervene without breaking the platform — and to prove every action I took."
                    ar="أريد أن أوثّق وأُبلّغ وأتدخّل دون كسر المنصّة — وأن أُثبت كلّ إجراءٍ اتخذته."
                  />
                }
                goals={
                  <T
                    en="Control over who's verified or flagged, with a clean audit trail."
                    ar="تحكّمٌ بمن هو موثَّق أو مُبلَّغ عنه، مع سجلّ تدقيقٍ نظيف."
                  />
                }
                frustrations={
                  <T
                    en="Abuse slipping through; not being able to see why a decision was made."
                    ar="تجاوزاتٌ تتسلّل؛ وعدم القدرة على رؤية سبب اتخاذ قرارٍ ما."
                  />
                }
              />

              <Callout kicker={<T en="Problem statements" ar="بيانات المشكلة" />}>
                <T
                  en={<><strong>Huda</strong> needs to trust a babysitter before she books, because handing over her child is the highest-stakes decision the product asks of anyone. <strong>Sara</strong> needs a reliable schedule with the right context, and <strong>Maya</strong> needs provable control — each side trusts the platform only if the other two are held to rules they can feel.</>}
                  ar={<><strong>هُدى</strong> تحتاج أن تثق بالجليسة قبل أن تحجز، لأن تسليم طفلها أعلى قرارٍ مخاطرةً يطلبه المنتج من أحد. و<strong>سارة</strong> تحتاج جدولاً موثوقاً بالسياق الصحيح، و<strong>مايا</strong> تحتاج تحكّماً قابلاً للإثبات — كلّ طرفٍ يأتمن المنصّة فقط إن كان الطرفان الآخران مُلزَمَين بقواعد يشعرون بها.</>}
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
              ar="احسم البنية قبل رسم شاشةٍ واحدة."
            />
          ),
          body: (
            <>
              <Lead>
                <T
                  en="The strategic bet was that a marketplace's hardest problem is keeping three audiences and one backend coherent — so the schema and permission model had to lead, and the UI follow."
                  ar="كان الرهان الاستراتيجي أن أصعب مشكلة في سوقٍ هي إبقاء ثلاثة جماهير وخادمٍ واحد متماسكين — فكان على المخطّط ونموذج الصلاحيات أن يقودا، والواجهة أن تتبع."
                />
              </Lead>
              <FactGrid
                items={[
                  { label: <T en="Goal" ar="الهدف" />, value: <T en="Trust across all three sides of the marketplace" ar="الثقة عبر أطراف السوق الثلاثة" /> },
                  { label: <T en="Hypothesis" ar="الفرضية" />, value: <T en="Three focused apps beat one role-switching app" ar="ثلاثة تطبيقات مركّزة تتفوّق على تطبيقٍ واحد بتبديل الأدوار" /> },
                  { label: <T en="Priority" ar="الأولوية" />, value: <T en="Data model & access rules before UI" ar="نموذج البيانات وقواعد الوصول قبل الواجهة" /> },
                  { label: <T en="Tradeoff" ar="المفاضلة" />, value: <T en="Higher build cost for honest, focused surfaces" ar="كلفة بناءٍ أعلى مقابل واجهاتٍ أمينة ومركّزة" /> },
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
                  en="The decision to build three separate apps instead of one with role-switching is a design decision before it's an engineering one. I designed each app in its own Figma file, with its own navigation and vocabulary."
                  ar="قرار بناء ثلاثة تطبيقات منفصلة بدل واحدٍ بتبديل الأدوار قرارٌ تصميمي قبل أن يكون هندسياً. صمّمتُ كلّ تطبيقٍ في ملف Figma خاصٍّ به، بتنقّله ومفرداته."
                />
              </p>

              <DesignDecision
                number={1}
                title={<T en="Three dedicated apps over one role-switching app." ar="ثلاثة تطبيقات مخصّصة بدل تطبيقٍ واحد بتبديل الأدوار." />}
                challenge={
                  <T
                    en="A single app with role-switching is cheaper to build and maintain. Many marketplaces ship this way — one codebase, one store listing, one onboarding flow."
                    ar="تطبيقٌ واحد بتبديل الأدوار أرخص في البناء والصيانة. كثيرٌ من الأسواق تُطلق هكذا — قاعدة كودٍ واحدة، إدراج واحد في المتجر، تدفّق تهيئةٍ واحد."
                  />
                }
                decision={
                  <T
                    en={<>Three apps. Each audience has a different primary action, a different vocabulary, and different expectations.{" "}<strong>No &ldquo;you are logged in as: Mother&rdquo; cognitive load.</strong></>}
                    ar={<>ثلاثة تطبيقات. لكلّ جمهور فعلٌ أساسي مختلف، ومفرداتٌ مختلفة، وتوقّعاتٌ مختلفة.{" "}<strong>دون عبءٍ ذهني من نوع «أنتِ مسجَّلة الدخول كـ: أمّ».</strong></>}
                  />
                }
                outcome={
                  <T
                    en="Each app has a focused navigation structure and a store listing that describes exactly what it does for that user. Higher initial cost, but each surface stays honest to its audience."
                    ar="لكلّ تطبيقٍ بنية تنقّلٍ مركّزة وإدراجٌ في المتجر يصف بالضبط ما يفعله لذلك المستخدم. كلفةٌ أولية أعلى، لكن كلّ واجهة تبقى أمينةً لجمهورها."
                  />
                }
              />

              <PhoneDemo
                screens={[
                  {
                    src: "/work/careconnect/login.webp",
                    alt: "CareConnect login — the axolotl mascot over a pale sky-blue ground, bilingual Arabic/English with full RTL",
                    title: "A friendly face to start",
                    titleAr: "وجهٌ ودود للبداية",
                    blurb: "The mascot and a calm sky-blue palette set the tone — reassuring, not clinical — and the whole app works in both Arabic and English.",
                    blurbAr: "الشخصية ولوحةٌ زرقاء هادئة تضبط النبرة — مُطمئنة لا سريرية — والتطبيق كلّه يعمل بالعربية والإنجليزية.",
                  },
                  {
                    src: "/work/careconnect/home.webp",
                    alt: "CareConnect home — feature tiles for meals, sleep, vaccinations, activities, booking and appointments",
                    title: "A day of care, in one grid",
                    titleAr: "يوم رعايةٍ في شبكةٍ واحدة",
                    blurb: "Meals, sleep, vaccinations, activities, booking and appointments — the mother's app gathers everything in one place.",
                    blurbAr: "الوجبات، والنوم، واللقاحات، والأنشطة، والحجز، والمواعيد — تطبيق الأمّ يجمع كل شيء في مكانٍ واحد.",
                  },
                  {
                    src: "/work/careconnect/activity.webp",
                    alt: "CareConnect activity detail — guided steps and age/interactive tags for a child activity",
                    title: "Guided activities by age",
                    titleAr: "أنشطة موجَّهة حسب العمر",
                    blurb: "Each activity comes with simple steps and age tags, so play stays safe and developmentally right.",
                    blurbAr: "كل نشاطٍ يأتي بخطواتٍ بسيطة ووسومِ عمر، فيبقى اللعب آمناً ومناسباً للنموّ.",
                  },
                  {
                    src: "/work/careconnect/booking.webp",
                    alt: "CareConnect booking details — child info, health notes and parent contact for a babysitter booking",
                    title: "Bookings with full context",
                    titleAr: "حجوزاتٌ بسياقٍ كامل",
                    blurb: "A booking carries the child's info, health notes and parent contact — everything a babysitter needs, nothing she shouldn't see.",
                    blurbAr: "يحمل الحجز معلومات الطفل، وملاحظاتٍ صحّية، وتواصل الوالدين — كل ما تحتاجه الجليسة، ولا شيء لا ينبغي أن تراه.",
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
              en="One Postgres. Three clients. Zero shared-state hacks."
              ar="قاعدة Postgres واحدة. ثلاثة عملاء. صفر حِيَل للحالة المشتركة."
            />
          ),
          body: (
            <>
              <p>
                <T
                  en="Every read and write goes through Supabase RLS. A mother can only see active babysitters within her search radius. A babysitter can only see and modify her own profile and bookings. An admin sees everything — but every admin action is logged. The role enforcement lives in the database, not the client."
                  ar="كلّ قراءةٍ وكتابة تمرّ عبر Supabase RLS. الأمّ ترى فقط الجليسات النشطات ضمن نطاق بحثها. والجليسة ترى وتُعدّل فقط ملفّها وحجوزاتها. والمشرف يرى كل شيء — لكن كلّ إجراء مشرفٍ مُسجَّل. فرضُ الأدوار يعيش في قاعدة البيانات، لا في العميل."
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
                title={<T en="Supabase + RLS over Firebase + client-side guards." ar="Supabase + RLS بدل Firebase وحُرّاسٍ من جهة العميل." />}
                context={
                  <T
                    en="Firebase is the default for student marketplaces. Auth + Firestore is fast to wire. But security rules in Firestore are a JSON DSL that's easy to get subtly wrong — and the client can be modified."
                    ar="Firebase هو الخيار الافتراضي لأسواق الطلاب. المصادقة + Firestore سريعة الربط. لكن قواعد الأمان في Firestore لغة JSON يسهل الخطأ فيها بدقّة — والعميل قابل للتعديل."
                  />
                }
                decision={
                  <T
                    en={<>Postgres + Supabase RLS. RLS policies are real SQL, run on every query, and{" "}<strong>impossible to bypass from the client</strong>. A mother&apos;s query physically cannot return another mother&apos;s bookings.</>}
                    ar={<>Postgres + Supabase RLS. سياسات RLS هي SQL حقيقية، تُنفَّذ مع كل استعلام، و<strong>يستحيل تجاوزها من العميل</strong>. استعلام أمٍّ لا يمكنه فيزيائياً إعادة حجوزات أمٍّ أخرى.</>}
                  />
                }
                consequences={
                  <T
                    en="The security model is auditable and reviewable. It's also what made the three-app design viable — each client just asks the database for what it can see; the database is the access layer."
                    ar="نموذج الأمان قابلٌ للتدقيق والمراجعة. وهو أيضاً ما جعل تصميم التطبيقات الثلاثة ممكناً — كلّ عميلٍ يسأل قاعدة البيانات عمّا يستطيع رؤيته فقط؛ قاعدة البيانات هي طبقة الوصول."
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
              ar="إبقاء ثلاثة تطبيقات وخادمٍ واحد من التباعد."
            />
          ),
          body: (
            <>
              <p>
                <T
                  en="Three apps are tempting to think of as three projects. In practice the apps are the easy part; the hard part is keeping a schema and permission model consistent across three distinct experiences without forking into three copies of the same code."
                  ar="من المُغري التفكير في ثلاثة تطبيقات كثلاثة مشاريع. عملياً، التطبيقات هي الجزء السهل؛ والصعب هو إبقاء المخطّط ونموذج الصلاحيات متّسقَين عبر ثلاث تجارب متمايزة دون التشعّب إلى ثلاث نسخٍ من الكود نفسه."
                />
              </p>

              <ADR
                number={2}
                title={<T en="IEEE 830 SRS before a single screen was designed." ar="وثيقة متطلبات IEEE 830 قبل تصميم شاشةٍ واحدة." />}
                context={
                  <T
                    en="Most projects skip the SRS and discover the spec through implementation. Faster start, painful middle."
                    ar="معظم المشاريع تتخطّى وثيقة المتطلبات وتكتشف المواصفة عبر التنفيذ. بدايةٌ أسرع، ووسطٌ مؤلم."
                  />
                }
                decision={
                  <T
                    en="A full IEEE 830 SRS first — every entity, relation, and user flow. Then Figma. Then Flutter."
                    ar="وثيقة متطلبات IEEE 830 كاملة أولاً — كلّ كيان وعلاقة وتدفّق مستخدم. ثم Figma. ثم Flutter."
                  />
                }
                consequences={
                  <T
                    en="When a payments change landed mid-development, the spec told me exactly which six screens across two apps needed to update. Refactoring became a search, not an excavation."
                    ar="حين طرأ تغييرٌ في الدفع منتصف التطوير، أخبرتني المواصفة بالضبط أيّ ستّ شاشاتٍ عبر تطبيقين تحتاج تحديثاً. صارت إعادة الهيكلة بحثاً، لا تنقيباً."
                  />
                }
              />
            </>
          ),
        },
        {
          kicker: <T en="Outcomes" ar="النتائج" />,
          heading: <T en="Three honest surfaces on one provable backend." ar="ثلاث واجهاتٍ أمينة على خادمٍ واحد قابل للإثبات." />,
          body: (
            <>
              <p>
                <T
                  en="CareConnect shipped as three focused apps on a single Supabase backend, with access control enforced in the database rather than trusted to the client — so each side's data boundaries are provable in SQL, and every admin action is auditable."
                  ar="أُطلق CareConnect كثلاثة تطبيقات مركّزة على خادم Supabase واحد، بتحكّمٍ بالوصول مفروضٍ في قاعدة البيانات بدل ائتمان العميل عليه — فحدود بيانات كل طرفٍ قابلة للإثبات بـSQL، وكلّ إجراء مشرفٍ قابل للتدقيق."
                />
              </p>
              <p>
                <T
                  en="The three-app decision wasn't an engineering call; it was a UX call that engineering had to honour. The spec-first habit isn't academic — it's the cheapest insurance against drift between three apps and one backend."
                  ar="قرار التطبيقات الثلاثة لم يكن قراراً هندسياً؛ بل قرار تجربةٍ كان على الهندسة احترامه. وعادة المواصفة-أولاً ليست أكاديمية — بل هي أرخص تأمينٍ ضدّ التباعد بين ثلاثة تطبيقات وخادمٍ واحد."
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
                  en="Because trust runs across all three sides, I'd run a usability study per app around its primary task — a mother finding and booking vetted care, a babysitter accepting a booking, a moderator verifying and flagging — then cluster the findings in an affinity diagram and prioritize the fixes that unblock the marketplace loop first."
                  ar="لأن الثقة تسري عبر الأطراف الثلاثة، سأُجري دراسة قابلية استخدامٍ لكل تطبيقٍ حول مهمّته الأساسية — أمٌّ تجد وتحجز رعايةً مُدقَّقة، وجليسةٌ تقبل حجزاً، ومشرفةٌ توثّق وتُبلّغ — ثم أعنقد النتائج في مخطّط تقارب وأرتّب الإصلاحات التي تفكّ حلقة السوق أولاً."
                />
              </p>
              <Priorities
                items={[
                  {
                    tier: "P0",
                    label: (
                      <T
                        en="Trust signals in the mother's app — verification badges and what they mean — must be unmistakable, or she won't book at all."
                        ar="إشارات الثقة في تطبيق الأمّ — شارات التوثيق ومعناها — يجب أن تكون لا تُخطئ، وإلا فلن تحجز أصلاً."
                      />
                    ),
                  },
                  {
                    tier: "P1",
                    label: (
                      <T
                        en="The babysitter's schedule and booking context must be readable at a glance before she accepts."
                        ar="جدول الجليسة وسياق الحجز يجب أن يكونا مقروءَين بلمحةٍ قبل أن تقبل."
                      />
                    ),
                  },
                  {
                    tier: "P2",
                    label: (
                      <T
                        en="The admin's moderation actions should be fast and obviously reversible, with the audit trail one tap away."
                        ar="إجراءات الإدارة لدى المشرف ينبغي أن تكون سريعةً وقابلةً للتراجع بوضوح، وسجلّ التدقيق على بُعد نقرةٍ واحدة."
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
                  en="The lesson that stuck: most of a multi-sided product's difficulty is information architecture and access control, not screen count. Writing the spec first felt slow and turned out to be the fastest path — it's now my default for anything with more than one type of user."
                  ar="الدرس الذي علق: معظم صعوبة منتجٍ متعدّد الأطراف هندسة معلوماتٍ وتحكّمٌ بالوصول، لا عدد الشاشات. بدا كتابة المواصفة أولاً بطيئاً وتبيّن أنه أسرع طريق — وصار خياري الافتراضي لأي شيءٍ بأكثر من نوع مستخدمٍ واحد."
                />
              </p>
              <p>
                <T
                  en="Next time I'd invest earlier in a shared component layer across the three apps, so visual consistency is enforced by code and not just by discipline."
                  ar="في المرة القادمة سأستثمر مبكراً في طبقة مكوّناتٍ مشتركة عبر التطبيقات الثلاثة، كي يُفرَض الاتّساق البصري بالكود لا بالانضباط وحده."
                />
              </p>
            </>
          ),
        },
      ]}
      nextProject={{
        label: <T en="Smart Expense Manager — Odoo 19 open source →" ar="Smart Expense Manager — Odoo 19 مفتوح المصدر →" />,
        href: "/projects/smart-expense",
      }}
      />
    </>
  );
}
