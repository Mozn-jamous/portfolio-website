import type { Metadata } from "next";
import {
  CaseStudyLayout,
  Callout,
  DesignDecision,
  FactGrid,
  Figure,
  Lead,
} from "@/components/case-study/CaseStudyLayout";
import { PhoneDemo } from "@/components/case-study/PhoneDemo";
import {
  StructuredData,
  caseStudyStructuredData,
} from "@/components/site/StructuredData";
import { T } from "@/components/i18n/T";
import { siteUrl } from "@/lib/base-path";

const DESCRIPTION =
  "A stalled FlutterFlow prototype rewritten as a native Flutter app at Santa Media, on a bilingual design system with three themes, 17 text styles and 9 button variants.";

export const metadata: Metadata = {
  title: "Mademoiselle — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "Mademoiselle — rebuilt from the ground up",
    description: DESCRIPTION,
    type: "article",
    url: siteUrl("/projects/mademoiselle"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Mademoiselle — redesigned from the ground up",
    description: DESCRIPTION,
  },
};

export default function MademoisellePage() {
  return (
    <>
      <StructuredData
        data={caseStudyStructuredData({
          name: "Mademoiselle",
          description: DESCRIPTION,
          path: "/projects/mademoiselle",
          year: "2026",
        })}
      />
      <CaseStudyLayout
      meta={{
        eyebrow: <T en="Mobile · Flutter · Design system" ar="جوال · Flutter · نظام تصميم" />,
        status: <T en="Active, 2026" ar="نشط، 2026" />,
        title: <T en="Mademoiselle: rebuilt from the ground up." ar="Mademoiselle: أُعيد بناؤه من الأساس." />,
        lede: (
          <T
            en="A dormant FlutterFlow prototype taken back into production as a fully native Flutter app. I redesigned the interface, built a bilingual design system with three themes and full RTL, and integrated the AI module. Design and development were both mine."
            ar="نموذج FlutterFlow خامل أُعيد إلى الإنتاج تطبيقَ Flutter أصلياً بالكامل. أعدتُ تصميم الواجهة، وبنيتُ نظام تصميم ثنائي اللغة بثلاث سمات ودعم كامل لليمين لليسار، ودمجتُ وحدة الذكاء الاصطناعي. التصميم والتطوير كانا لي."
          />
        ),
        year: <T en="2026 to now" ar="2026 حتى الآن" />,
        role: <T en="Lead engineer + designer" ar="مهندسة رئيسية + مصمّمة" />,
        stack: [
          "Figma",
          "Flutter",
          "Dart",
          "Design Systems",
          "RTL",
          "Multi-theme",
          "AI Integration",
        ],
      }}
      metrics={[
        { value: <T en="Stalled to live" ar="من متعثّر إلى حيّ" />, label: <T en="A FlutterFlow prototype now shipping as native Flutter" ar="نموذج FlutterFlow يُطلق الآن بـFlutter أصلي" /> },
        { value: "26+", label: <T en="Design system components, reused on every screen" ar="مكوّن نظام تصميم، يُعاد استخدامها في كل شاشة" /> },
        { value: <T en="RTL-first" ar="العربية أولاً" />, label: <T en="Designed in Arabic, then adapted to English" ar="صُمّم بالعربية ثم كُيّف للإنجليزية" /> },
        { value: <T en="Multi-theme" ar="متعدّد السمات" />, label: <T en="Light, dark and brand from one set of semantic tokens" ar="فاتح وداكن وعلامة من مجموعة رموز دلالية واحدة" /> },
      ]}
      sections={[
        {
          kicker: <T en="Overview" ar="نظرة عامة" />,
          heading: <T en="What it is, and what I owned." ar="ما هو، وما الذي تولّيته." />,
          body: (
            <>
              <Lead>
                <T
                  en="Mademoiselle is a commercial mobile product at Santa Media. It had stalled as a FlutterFlow prototype and I was brought in to get it to production. I chose to redesign it before rebuilding it."
                  ar="Mademoiselle منتج تجاري للجوال في Santa Media. كان متعثّراً كنموذج FlutterFlow واستُقدمتُ لأوصله إلى الإنتاج. واخترتُ أن أعيد تصميمه قبل أن أعيد بناءه."
                />
              </Lead>
              <FactGrid
                items={[
                  { label: <T en="Role" ar="الدور" />, value: <T en="Lead engineer, and the designer" ar="مهندسة رئيسية، والمصمّمة" /> },
                  { label: <T en="Timeline" ar="الإطار الزمني" />, value: <T en="2026 to now" ar="2026 حتى الآن" /> },
                  { label: <T en="Platform" ar="المنصّة" />, value: "Flutter · iOS + Android" },
                  { label: <T en="Audience" ar="الجمهور" />, value: <T en="Arabic-speaking, bilingual" ar="ناطق بالعربية، ثنائي اللغة" /> },
                  { label: <T en="Team" ar="الفريق" />, value: <T en="Me, plus an engineer on the AI module" ar="أنا، ومهندس على وحدة الذكاء" /> },
                  { label: <T en="Scope" ar="النطاق" />, value: <T en="Redesign, design system, native rewrite" ar="إعادة تصميم، ونظام تصميم، وإعادة كتابة أصلية" /> },
                ]}
              />
            </>
          ),
        },
        {
          kicker: <T en="Problem" ar="المشكلة" />,
          heading: (
            <T
              en="A dormant product, and a prototype that couldn't grow."
              ar="منتجٌ خامل، ونموذجٌ عاجزٌ عن النمو."
            />
          ),
          body: (
            <>
              <p>
                <T
                  en="Mademoiselle had stalled with no clear path forward. FlutterFlow output is hard to extend and hard to maintain once an app grows, and the original interface had never really been designed for the Arabic-speaking audience actually using it."
                  ar="كان Mademoiselle متعثّراً دون مسار واضح للأمام. مُخرَجات FlutterFlow صعبة التوسعة وصعبة الصيانة حين يكبر التطبيق، والواجهة الأصلية لم تُصمَّم فعلاً للجمهور العربي الذي يستخدمها."
                />
              </p>
              <p>
                <T
                  en="The team needed someone to decide what to keep, what to rewrite, and how to leave the product in a state where the next feature would not mean starting over."
                  ar="احتاج الفريق من يقرّر ما يُبقيه، وما يعيد كتابته، وكيف يترك المنتج في حالٍ لا تعني فيه الميزة التالية البدء من جديد."
                />
              </p>
            </>
          ),
        },
        {
          kicker: <T en="Research" ar="البحث" />,
          heading: <T en="Why the rewrite was worth its cost." ar="لماذا استحقّت إعادة الكتابة كلفتها." />,
          body: (
            <>
              <p>
                <T
                  en="I audited the prototype against where the product had to go: more screens, an AI module, continuous iteration, and an Arabic experience that felt native. The FlutterFlow base failed on all four. Every new screen added maintenance cost, and RTL had clearly been handled at the end."
                  ar="دقّقتُ النموذج مقابل وجهة المنتج المطلوبة: شاشات أكثر، ووحدة ذكاء اصطناعي، وتكرار مستمرّ، وتجربة عربية تبدو أصيلة. فشلت قاعدة FlutterFlow في الأربعة جميعاً. كل شاشة جديدة كانت تضيف كلفة صيانة، وكان واضحاً أن اليمين لليسار عُومل في النهاية."
                />
              </p>
              <Callout kicker={<T en="Decision" ar="القرار" />}>
                <T
                  en="Rewrite it natively, and design the system before touching the codebase. That order is the difference between a rewrite that pays the debt down and one that just relocates it."
                  ar="أعِد كتابته أصلياً، وصمّم النظام قبل أن تلمس قاعدة الكود. هذا الترتيب هو الفرق بين إعادة كتابة تسدّد الدَّين وأخرى تنقله فقط."
                />
              </Callout>
            </>
          ),
        },
        {
          kicker: <T en="Design strategy" ar="استراتيجية التصميم" />,
          heading: <T en="Build the grammar before the sentences." ar="ابنِ القواعد قبل الجُمل." />,
          body: (
            <>
              <Lead>
                <T
                  en="I treated the rewrite as the one chance to set the product up to grow. Build the system first, and every screen after it, including the AI module being built in parallel, inherits it for free."
                  ar="تعاملتُ مع إعادة الكتابة كالفرصة الوحيدة لتهيئة المنتج للنمو. ابنِ النظام أولاً، فترثه كل شاشة بعده بلا مقابل، ومنها وحدة الذكاء التي كانت تُبنى بالتوازي."
                />
              </Lead>
              <FactGrid
                items={[
                  { label: <T en="Goal" ar="الهدف" />, value: <T en="An Arabic-first product that stays maintainable as it grows" ar="منتج عربي أولاً يبقى قابلاً للصيانة وهو ينمو" /> },
                  { label: <T en="Hypothesis" ar="الفرضية" />, value: <T en="Starting from a system beats patching FlutterFlow" ar="البدء من نظام يتفوّق على ترقيع FlutterFlow" /> },
                  { label: <T en="Priority" ar="الأولوية" />, value: <T en="Token grammar before screens" ar="قواعد الرموز قبل الشاشات" /> },
                  { label: <T en="Tradeoff" ar="المفاضلة" />, value: <T en="A slower start, and no design debt to pay later" ar="بداية أبطأ، ولا دَين تصميمي يُسدَّد لاحقاً" /> },
                ]}
              />
            </>
          ),
        },
        {
          kicker: <T en="Design process" ar="عملية التصميم" />,
          heading: <T en="Design System first. Screens second." ar="نظام التصميم أولاً. الشاشات ثانياً." />,
          body: (
            <>
              <p>
                <T
                  en="Building the design system before the screens was deliberate. A system assembled after the screens are finished is a retrofit, and it never quite fits. Built first, it becomes the grammar everything else gets written in."
                  ar="بناء نظام التصميم قبل الشاشات كان مقصوداً. النظام الذي يُجمَع بعد انتهاء الشاشات ترقيعٌ لاحق، ولا يلائم تماماً أبداً. أما المبنيّ أولاً فيصير القواعد التي يُكتَب بها كل شيء بعده."
                />
              </p>

              <DesignDecision
                number={1}
                title={<T en="Three themes from day one." ar="ثلاث سمات من اليوم الأول." />}
                challenge={
                  <T
                    en="Most apps ship one theme and add dark mode once users complain. Doing it in that order leaves hardcoded colours buried in every component."
                    ar="معظم التطبيقات تُطلق سمة واحدة وتضيف الوضع الداكن حين يشتكي المستخدمون. وهذا الترتيب يترك ألواناً مضمّنة مدفونة في كل مكوّن."
                  />
                }
                decision={
                  <T
                    en={<>Every token in the Design System is{" "}<strong>semantic, not literal</strong> — <code>surface</code>,{" "}<code>on-surface</code>, <code>primary</code>,{" "}<code>on-primary</code> — never a raw hex value. Themes swap by switching the token layer.</>}
                    ar={<>كلّ رمزٍ في نظام التصميم{" "}<strong>دلاليّ، لا حرفيّ</strong> — <code>surface</code>،{" "}<code>on-surface</code>، <code>primary</code>،{" "}<code>on-primary</code> — لا قيمة hex خام أبداً. تتبدّل السمات بتبديل طبقة الرموز.</>}
                  />
                }
                outcome={
                  <T
                    en="Light, dark and brand coexist without touching a single component. Adding a theme means writing a token file."
                    ar="تتعايش سمات الفاتح والداكن والعلامة دون لمس مكوّن واحد. وإضافة سمة تعني كتابة ملف رموز."
                  />
                }
              />

              <DesignDecision
                number={2}
                title={<T en="Arabic as the source layout." ar="العربية هي التخطيط الأصل." />}
                challenge={
                  <T
                    en="RTL usually arrives as a mirror of the English layout: flip the direction, swap some icons, call it finished. Arabic readers can always tell."
                    ar="عادةً تأتي العربية كمرآة للتخطيط الإنجليزي: اقلب الاتجاه، وبدّل بعض الأيقونات، واعتبره منتهياً. والقارئ العربي يعرف ذلك دائماً."
                  />
                }
                decision={
                  <T
                    en={<>I drew the Figma file and every Flutter screen{" "}<strong>in Arabic first</strong>. Reading order, type hierarchy, spacing and icon choices were all decided while looking at Arabic, and English came after.</>}
                    ar={<>رسمتُ ملف Figma وكل شاشة Flutter{" "}<strong>بالعربية أولاً</strong>. ترتيب القراءة، وتسلسل الخطوط، والتباعد، واختيار الأيقونات كلها قُرّرت وأنا أنظر إلى العربية، والإنجليزية جاءت بعدها.</>}
                  />
                }
                outcome={
                  <T
                    en="The Arabic interface reads like the original, because that is what it is. English is the adaptation."
                    ar="تُقرأ الواجهة العربية كالأصل، لأنها هي الأصل. والإنجليزية هي التكييف."
                  />
                }
              />

              <Callout kicker={<T en="Typography system" ar="نظام الطباعة" />}>
                <T
                  en="17 text styles cover display, headline, title, body, label and caption, each with size, weight, line-height and letter-spacing tokens calibrated for Arabic and Latin separately. Arabic wants tighter leading and Latin wants wider letter-spacing, and one token set carries both."
                  ar="17 نمط نصّ تغطّي العرض والعنوان الكبير والعنوان والمتن والتسمية والتعليق، لكل واحد رموز للحجم والوزن وارتفاع السطر وتباعد الأحرف، معايَرة للعربية واللاتينية كلٍّ على حدة. العربية تريد تباعد أسطر أضيق واللاتينية تريد تباعد أحرف أوسع، ومجموعة رموز واحدة تحمل الاثنين."
                />
              </Callout>

              <PhoneDemo
                screens={[
                  {
                    src: "/work/mademoiselle/home.webp",
                    alt: "Mademoiselle home: greeting, search, saved looks, offers and map shortcuts, review nudges",
                    title: "Beauty, from the front door.",
                    titleAr: "الجمال، من الباب الأول.",
                    blurb:
                      "Home opens on her city, with a search across salons, services and looks. Saved looks, offers and a review prompt after each visit sit underneath.",
                    blurbAr:
                      "تفتح الرئيسية على مدينتها، وفيها بحث في الصالونات والخدمات والإطلالات. وتحتها الإطلالات المحفوظة والعروض ودعوة لتقييم كل زيارة.",
                  },
                  {
                    src: "/work/mademoiselle/styling.webp",
                    alt: "Occasion styling: Date, Work and Wedding looks, plus AI 'on you' previews",
                    title: "What are you styling for?",
                    titleAr: "لأي مناسبةٍ تتجهزين؟",
                    blurb:
                      "Styling starts from the occasion: a date, work, a wedding. The 'For you' shelf previews each look on her own photo rather than a model's.",
                    blurbAr:
                      "ينطلق التنسيق من المناسبة: موعد، أو عمل، أو عرس. ويعرض رفّ «لأجلك» كل إطلالة على صورتها هي لا على عارضة.",
                  },
                  {
                    src: "/work/mademoiselle/ai-hub.webp",
                    alt: "The three AI try-on modules: hairstyle, Smart Closet outfits, and makeup",
                    title: "Try it before you book it.",
                    titleAr: "جرّبيها قبل أن تحجزيها.",
                    blurb:
                      "The AI module's three doors: a new hairstyle on your own face, a Smart Closet that fits outfits to your measurements, and makeup previewed before you decide.",
                    blurbAr:
                      "أبواب وحدة الذكاء الثلاثة: تسريحة جديدة على وجهك أنت، وخزانة ذكية تقيس الملابس على مقاساتك، ومكياج يُعايَن قبل القرار.",
                  },
                  {
                    src: "/work/mademoiselle/community-hub.webp",
                    alt: "Style Community hub: Hair Studio, Dressing Room, Makeup AI, and trending looks",
                    title: "A community around the looks.",
                    titleAr: "مجتمعٌ حول الإطلالات.",
                    blurb:
                      "Style Club gathers the AI studios in one place and shows what's trending, like Soft Bob or Korean Waves, each counted by real uses.",
                    blurbAr:
                      "يجمع نادي الأناقة استوديوهات الذكاء في مكان واحد ويُظهر الرائج، مثل Soft Bob وKorean Waves، وكل إطلالة بعدد استخداماتها الحقيقي.",
                  },
                  {
                    src: "/work/mademoiselle/community-post.webp",
                    alt: "A community post: an A/B hair try-on with live voting and a 'Try this look' action",
                    title: "Should I book this hair?",
                    titleAr: "أأحجز هذه التسريحة؟",
                    blurb:
                      "A post here is a decision rather than a photo: an A/B try-on the community votes on, and a 'Try this look' button that puts the same style on your own face.",
                    blurbAr:
                      "المنشور هنا قرار أكثر منه صورة: تجربة A/B يصوّت عليها المجتمع، وزرّ «جرّبي الإطلالة» ينقل التسريحة نفسها إلى وجهك.",
                  },
                  {
                    src: "/work/mademoiselle/near-you.webp",
                    alt: "Nearby beauty centers, referral rewards, and subscription plans",
                    title: "From screen to salon chair.",
                    titleAr: "من الشاشة إلى كرسي الصالون.",
                    blurb:
                      "The loop closes offline, with centres near you, referral rewards and plans, because every try-on is meant to end in an actual booking.",
                    blurbAr:
                      "تكتمل الدائرة خارج الشاشة، بمراكز قريبة منك ومكافآت إحالة وباقات، لأن غاية كل تجربة حجزٌ فعلي.",
                  },
                ]}
              />
            </>
          ),
        },
        {
          kicker: <T en="Design system" ar="نظام التصميم" />,
          heading: <T en="26+ components. Two scripts. Three themes." ar="26+ مكوّناً. خطّان. ثلاث سمات." />,
          body: (
            <>
              <FactGrid
                items={[
                  { label: <T en="Text variants" ar="خيارات النصّ" />, value: "17" },
                  { label: <T en="Button variants" ar="خيارات الأزرار" />, value: <T en="9, every state" ar="9، بكل حالة" /> },
                  { label: <T en="Themes" ar="السمات" />, value: <T en="Light · Dark · Brand" ar="فاتح · داكن · العلامة" /> },
                  { label: <T en="Direction" ar="الاتجاه" />, value: "RTL + LTR" },
                  { label: <T en="Scripts" ar="الخطوط" />, value: <T en="Arabic · Latin" ar="عربي · لاتيني" /> },
                  { label: <T en="Tokens" ar="الرموز" />, value: <T en="Semantic, never a raw hex" ar="دلالية، ولا hex خام أبداً" /> },
                ]}
              />
              <p>
                <T
                  en="The nine button variants cover the whole interaction matrix: primary, secondary, ghost, destructive and icon, each with default, hover, pressed, disabled and loading states, in Arabic and Latin type, across all three themes. Every state was designed before any state was coded."
                  ar="تغطّي خيارات الأزرار التسعة مصفوفة التفاعل كاملة: أساسي وثانوي وشبحي وتدميري وأيقونة، لكل واحد حالات افتراضية ومرور وضغط وتعطيل وتحميل، بالخطّين العربي واللاتيني، وعبر السمات الثلاث. وكل حالة صُمّمت قبل أن تُبرمَج أي حالة."
                />
              </p>
              <Figure
                label="Component library"
                caption={<T en="Buttons across states and themes, from the Figma component sheet. Export still to add." ar="الأزرار عبر الحالات والسمات، من ورقة مكوّنات Figma. التصدير لم يُضَف بعد." />}
              />
            </>
          ),
        },
        {
          kicker: <T en="Challenges" ar="التحدّيات" />,
          heading: (
            <T
              en="Running a parallel workstream without collecting design debt."
              ar="إدارة مسار عمل موازٍ دون جمع دَين تصميمي."
            />
          ),
          body: (
            <>
              <p>
                <T
                  en="A second engineer built the AI module in parallel while I drove the redesign and the rewrite. The risk in any parallel workstream is divergence: two people inventing two visual languages that somebody has to reconcile later."
                  ar="بنى مهندس ثانٍ وحدة الذكاء بالتوازي بينما قدتُ إعادة التصميم وإعادة الكتابة. والخطر في أي مسار عمل موازٍ هو التباعد: شخصان يخترعان لغتين بصريتين على أحدٍ أن يوفّق بينهما لاحقاً."
                />
              </p>
              <p>
                <T
                  en="The design system absorbed that risk. Because the token grammar already existed, the AI screens were built as instances of the same system instead of a separate look, and there was nothing to reconcile when the branches met."
                  ar="امتصّ نظام التصميم ذلك الخطر. ولأن قواعد الرموز كانت موجودة أصلاً، بُنيت شاشات الذكاء كنسخ من النظام نفسه لا كمظهر منفصل، ولم يكن هناك ما يُوفَّق عند التقاء الفرعين."
                />
              </p>
            </>
          ),
        },
        {
          kicker: <T en="Outcomes" ar="النتائج" />,
          heading: <T en="The system is the product." ar="النظام هو المنتج." />,
          body: (
            <>
              <p>
                <T
                  en="Mademoiselle is active and shipping as a native Flutter app on a bilingual, three-theme design system. Every screen is an instance of that system rather than a one-off, so an inconsistency shows up in the system before it reaches production."
                  ar="Mademoiselle نشط ويُطلق تطبيقَ Flutter أصلياً على نظام تصميم ثنائي اللغة بثلاث سمات. وكل شاشة نسخة من ذلك النظام لا حالة فردية، فيظهر أي تناقض في النظام قبل أن يصل الإنتاج."
                />
              </p>
              <p>
                <T
                  en="Building the system first inverts the usual order, where a design system is documentation someone writes at the end. Here it was the foundation, and that is why a second engineer's parallel work landed without adding design debt."
                  ar="بناء النظام أولاً يقلب الترتيب المعتاد، حيث يكون نظام التصميم توثيقاً يكتبه أحدهم في النهاية. هنا كان الأساس، ولهذا نزل عمل المهندس الثاني الموازي دون أن يضيف دَيناً تصميمياً."
                />
              </p>
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
                  en="Inheriting a stalled codebase settled the argument for me. The system is what let one person redesign and rewrite alongside a second engineer without the two halves drifting. I treat it as the first deliverable now."
                  ar="وراثة قاعدة كود متعثّرة حسمت المسألة عندي. النظام هو ما أتاح لشخص واحد أن يعيد التصميم والكتابة إلى جانب مهندس ثانٍ دون أن ينحرف النصفان. وأنا أعامله الآن كأول مُسلَّم."
                />
              </p>
              <p>
                <T
                  en="With more time I would document the system as a living reference with usage examples, so whoever comes next extends it instead of quietly working around it."
                  ar="بمزيد من الوقت سأوثّق النظام مرجعاً حيّاً مع أمثلة استخدام، كي يوسّعه من يأتي بعدي بدل أن يلتفّ حوله بصمت."
                />
              </p>
            </>
          ),
        },
      ]}
      nextProject={{
        label: <T en="BloomBelly: Arabic health, three AI models →" ar="BloomBelly: صحّة عربية، وثلاثة نماذج ذكاء →" />,
        href: "/projects/bloombelly",
      }}
      />
    </>
  );
}
