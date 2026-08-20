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
  "Full product design and Flutter rebuild of Mademoiselle at Santa Media. Production Design System — multi-theme, full RTL, 17 text variants, 9 button variants.";

export const metadata: Metadata = {
  title: "Mademoiselle — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "Mademoiselle — redesigned from the ground up",
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
        eyebrow: <T en="UI/UX · Flutter · Design System" ar="UI/UX · Flutter · نظام تصميم" />,
        status: <T en="Active — 2026" ar="نشط — 2026" />,
        title: <T en="Mademoiselle — redesigned from the ground up." ar="Mademoiselle — أُعيد تصميمه من الأساس." />,
        lede: (
          <T
            en="A dormant FlutterFlow prototype brought back to production as a fully native Flutter app — with a complete UI redesign, a bilingual Design System (multi-theme, full RTL), and an AI module integration. Full design and development ownership."
            ar="نموذج FlutterFlow خامل أُعيد إلى الإنتاج كتطبيق Flutter أصلي بالكامل — مع إعادة تصميمٍ كاملة للواجهة، ونظام تصميمٍ ثنائي اللغة (متعدّد السمات، دعمٌ كامل لليمين-لليسار)، ودمج وحدة ذكاء اصطناعي. ملكيةٌ كاملة للتصميم والتطوير."
          />
        ),
        year: <T en="2026 — Present" ar="2026 — حتى الآن" />,
        role: <T en="UI/UX Designer + Lead Flutter Developer" ar="مصمّمة UI/UX + مطوّرة Flutter رئيسية" />,
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
        { value: <T en="Stalled → live" ar="متعثّر ← حيّ" />, label: <T en="FlutterFlow prototype → native Flutter, now shipping" ar="نموذج FlutterFlow ← Flutter أصلي، يُطلق الآن" /> },
        { value: "26+", label: <T en="Design System components — reused across every screen" ar="مكوّن نظام تصميم — يُعاد استخدامها في كل شاشة" /> },
        { value: <T en="RTL-first" ar="اليمين-لليسار أولاً" />, label: <T en="Arabic-native, not an LTR mirror" ar="عربيّ أصيل، لا مرآةٌ لليسار-لليمين" /> },
        { value: <T en="Multi-theme" ar="متعدّد السمات" />, label: <T en="Light · Dark · Brand from one semantic token set" ar="فاتح · داكن · العلامة من مجموعة رموزٍ دلالية واحدة" /> },
      ]}
      sections={[
        {
          kicker: <T en="Overview" ar="نظرة عامة" />,
          heading: <T en="What it is, and what I owned." ar="ما هو، وما الذي تولّيته." />,
          body: (
            <>
              <Lead>
                <T
                  en="Mademoiselle is a commercial mobile product at Santa Media. It had stalled as a FlutterFlow prototype; I was brought in to take it to production — and chose to redesign it before rebuilding it."
                  ar="Mademoiselle منتجٌ تجاري للجوال في Santa Media. كان متعثّراً كنموذج FlutterFlow؛ استُقدمتُ لأخذه إلى الإنتاج — واخترتُ إعادة تصميمه قبل إعادة بنائه."
                />
              </Lead>
              <FactGrid
                items={[
                  { label: <T en="Role" ar="الدور" />, value: <T en="Designer + lead Flutter dev" ar="مصمّمة + مطوّرة Flutter رئيسية" /> },
                  { label: <T en="Timeline" ar="الإطار الزمني" />, value: <T en="2026 — present" ar="2026 — حتى الآن" /> },
                  { label: <T en="Platform" ar="المنصّة" />, value: "Flutter · iOS + Android" },
                  { label: <T en="Audience" ar="الجمهور" />, value: <T en="Arabic-speaking, bilingual" ar="ناطق بالعربية، ثنائي اللغة" /> },
                  { label: <T en="Team" ar="الفريق" />, value: <T en="Me + one AI-module engineer" ar="أنا + مهندس وحدة ذكاء اصطناعي" /> },
                  { label: <T en="Scope" ar="النطاق" />, value: <T en="Redesign → DS → native rebuild" ar="إعادة تصميم ← نظام تصميم ← إعادة بناء أصلية" /> },
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
                  en="Mademoiselle had stalled in production with no clear path forward. FlutterFlow output is hard to extend and impossible to maintain at scale — and, more importantly, the original UI had never been designed for the app's actual Arabic-speaking audience."
                  ar="كان Mademoiselle متعثّراً في الإنتاج دون مسارٍ واضح للأمام. مُخرَجات FlutterFlow صعبة التوسعة ويستحيل صيانتها على نطاقٍ واسع — والأهمّ أن الواجهة الأصلية لم تُصمَّم قطّ لجمهور التطبيق الفعلي الناطق بالعربية."
                />
              </p>
              <p>
                <T
                  en="The team needed someone who could make the call on what to keep, what to rebuild, and how to set the product up so the next feature wouldn't require starting over again."
                  ar="احتاج الفريق شخصاً يستطيع اتخاذ القرار حول ما يُبقي، وما يُعيد بناءه، وكيف يُهيّئ المنتج بحيث لا تتطلّب الميزة التالية البدء من جديد."
                />
              </p>
            </>
          ),
        },
        {
          kicker: <T en="Research" ar="البحث" />,
          heading: <T en="Why a rewrite was the right call, not the easy one." ar="لماذا كانت إعادة الكتابة القرار الصحيح، لا السهل." />,
          body: (
            <>
              <p>
                <T
                  en="I audited the existing prototype against where the product needed to go: more screens, an AI module, ongoing iteration, and a first-class Arabic experience. The FlutterFlow base failed on all four — every new screen compounded the maintenance cost, and RTL had been treated as an afterthought."
                  ar="دقّقتُ النموذج القائم مقابل وجهة المنتج المطلوبة: شاشاتٌ أكثر، ووحدة ذكاء اصطناعي، وتكرارٌ مستمرّ، وتجربةٌ عربية من الدرجة الأولى. فشلت قاعدة FlutterFlow في الأربعة جميعاً — كلّ شاشةٍ جديدة كانت تُراكم كلفة الصيانة، وعُومل اليمين-لليسار كفكرةٍ لاحقة."
                />
              </p>
              <Callout kicker={<T en="Decision" ar="القرار" />}>
                <T
                  en="Rebuild natively — but design the system first. Opening Figma before the codebase was the difference between a rewrite that pays down debt and one that just moves it."
                  ar="أعِد البناء أصلياً — لكن صمّم النظام أولاً. فتحُ Figma قبل قاعدة الكود كان الفرق بين إعادة كتابةٍ تسدّد الدَّيْن وأخرى تنقله فقط."
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
                  en="The strategic call was to treat the rebuild as a chance to set the product up to grow — a system first, so every later screen and the parallel AI module would inherit it for free."
                  ar="كان القرار الاستراتيجي معاملة إعادة البناء كفرصةٍ لتهيئة المنتج للنمو — نظامٌ أولاً، كي ترث كلّ شاشةٍ لاحقة ووحدة الذكاء الاصطناعي الموازية ذلك مجاناً."
                />
              </Lead>
              <FactGrid
                items={[
                  { label: <T en="Goal" ar="الهدف" />, value: <T en="A maintainable, Arabic-first product that can keep growing" ar="منتجٌ قابل للصيانة، عربيٌّ أولاً، يستطيع الاستمرار في النمو" /> },
                  { label: <T en="Hypothesis" ar="الفرضية" />, value: <T en="A system-first rebuild beats patching FlutterFlow" ar="إعادة بناءٍ بالنظام-أولاً تتفوّق على ترقيع FlutterFlow" /> },
                  { label: <T en="Priority" ar="الأولوية" />, value: <T en="Token grammar before screens" ar="قواعد الرموز قبل الشاشات" /> },
                  { label: <T en="Tradeoff" ar="المفاضلة" />, value: <T en="Slower start in exchange for zero design debt" ar="بدايةٌ أبطأ مقابل صفر دَيْن تصميمي" /> },
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
                  en="Building the Design System before building screens was a deliberate sequence. A system built after the screens are done is a retrofit — it never quite fits. Built first, it becomes the grammar everything else is written in."
                  ar="بناء نظام التصميم قبل بناء الشاشات كان تسلسلاً مقصوداً. نظامٌ يُبنى بعد إنجاز الشاشات تحديثٌ لاحق — لا يلائم تماماً أبداً. أما المبنيّ أولاً فيصير القواعد التي يُكتَب بها كل شيءٍ آخر."
                />
              </p>

              <DesignDecision
                number={1}
                title={<T en="Multi-theme from day one — not added later." ar="متعدّد السمات من اليوم الأول — لا يُضاف لاحقاً." />}
                challenge={
                  <T
                    en="Most apps start with one theme and bolt on dark mode when users complain. Adding theming after the fact means hardcoded colours buried in every component."
                    ar="معظم التطبيقات تبدأ بسمةٍ واحدة وتُلصق الوضع الداكن حين يشتكي المستخدمون. وإضافة السمات لاحقاً تعني ألواناً مُضمَّنة مدفونةً في كل مكوّن."
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
                    en="Light, Dark, and Brand themes coexist with zero component changes. A new theme is a token file, not a refactor."
                    ar="تتعايش سمات الفاتح والداكن والعلامة دون أي تغييرٍ في المكوّنات. السمة الجديدة ملفّ رموز، لا إعادة هيكلة."
                  />
                }
              />

              <DesignDecision
                number={2}
                title={<T en="RTL-native, not RTL-mirrored." ar="عربيٌّ أصيل، لا منعكسٌ عن اليسار-لليمين." />}
                challenge={
                  <T
                    en="RTL support is commonly implemented as a visual mirror of an LTR layout — flip the direction, swap some icons, call it done. The result always feels foreign to Arabic readers."
                    ar="عادةً يُنفَّذ دعم اليمين-لليسار كمرآةٍ بصرية لتخطيط اليسار-لليمين — اقلب الاتجاه، بدّل بعض الأيقونات، اعتبره منتهياً. والنتيجة تبقى غريبةً دائماً على القارئ العربي."
                  />
                }
                decision={
                  <T
                    en={<>The Figma file and every Flutter screen was{" "}<strong>designed in Arabic first</strong>. Reading direction, typographic hierarchy, spacing, and icon choices were all made in RTL context — then adapted for LTR.</>}
                    ar={<>صُمّم ملف Figma وكلّ شاشة Flutter{" "}<strong>بالعربية أولاً</strong>. اتجاه القراءة، والتسلسل الطباعي، والتباعد، واختيار الأيقونات كلّها اتُّخذت في سياق اليمين-لليسار — ثم كُيّفت لليسار-لليمين.</>}
                  />
                }
                outcome={
                  <T
                    en="The Arabic interface reads as the primary version. It is. LTR is the adaptation, not the source of truth."
                    ar="تُقرأ الواجهة العربية كالنسخة الأساسية. وهي كذلك فعلاً. اليسار-لليمين هو التكييف، لا مصدر الحقيقة."
                  />
                }
              />

              <Callout kicker={<T en="Typography system" ar="نظام الطباعة" />}>
                <T
                  en="17 text-style variants covering display, headline, title, body, label, and caption — each with size, weight, line-height, and letter-spacing tokens calibrated for both Arabic and Latin scripts. Arabic type needs tighter leading; Latin needs wider letter-spacing. One token set handles both."
                  ar="17 خياراً لأنماط النصّ تغطّي العرض والعنوان الكبير والعنوان والمتن والتسمية والتعليق — لكلٍّ رموزٌ للحجم والوزن وارتفاع السطر وتباعد الأحرف مُعايرة للخطّين العربي واللاتيني. الخطّ العربي يحتاج تباعد أسطرٍ أضيق؛ واللاتيني يحتاج تباعد أحرفٍ أوسع. ومجموعة رموزٍ واحدة تتولّى الاثنين."
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
                      "Home opens on the user's city, a search over salons, services and looks, and gentle nudges — saved looks, offers, and a review prompt after every visit.",
                    blurbAr:
                      "تفتح الرئيسية على مدينة المستخدمة، وبحثٍ في الصالونات والخدمات والإطلالات، وإيماءاتٍ لطيفة — إطلالات محفوظة، وعروض، ودعوة لتقييم كل زيارة.",
                  },
                  {
                    src: "/work/mademoiselle/styling.webp",
                    alt: "Occasion styling: Date, Work and Wedding looks, plus AI 'on you' previews",
                    title: "What are you styling for?",
                    titleAr: "لأي مناسبةٍ تتجهزين؟",
                    blurb:
                      "Styling starts from the occasion — a date, work, a wedding — and the 'For you' shelf previews every look on the user's own photo, not a model's.",
                    blurbAr:
                      "ينطلق التنسيق من المناسبة — موعد، عمل، عرس — ويعرض رفّ «لأجلك» كل إطلالةٍ على صورة المستخدمة نفسها، لا على عارضة.",
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
                      "Style Club gathers the AI studios in one place and surfaces what's trending — Soft Bob, Korean Waves — each look counted by real uses.",
                    blurbAr:
                      "يجمع نادي الأناقة استوديوهات الذكاء في مكانٍ واحد ويُظهر الرائج — Soft Bob وKorean Waves — وكل إطلالةٍ بعدد استخداماتها الحقيقي.",
                  },
                  {
                    src: "/work/mademoiselle/community-post.webp",
                    alt: "A community post: an A/B hair try-on with live voting and a 'Try this look' action",
                    title: "Should I book this hair?",
                    titleAr: "أأحجز هذه التسريحة؟",
                    blurb:
                      "Posts are decisions, not just photos: an A/B try-on the community votes on, and a one-tap 'Try this look' that puts the same style on your face.",
                    blurbAr:
                      "المنشورات قراراتٌ لا صورٌ فحسب: تجربة A/B يصوّت عليها المجتمع، وزرّ «جرّبي الإطلالة» ينقل التسريحة نفسها إلى وجهك بلمسة.",
                  },
                  {
                    src: "/work/mademoiselle/near-you.webp",
                    alt: "Nearby beauty centers, referral rewards, and subscription plans",
                    title: "From screen to salon chair.",
                    titleAr: "من الشاشة إلى كرسي الصالون.",
                    blurb:
                      "The loop closes offline: centers near you, referral rewards, and plans — because every try-on is meant to end in a real booking.",
                    blurbAr:
                      "تكتمل الدائرة خارج الشاشة: مراكز قريبة منك، ومكافآت إحالة، وباقات — لأن كل تجربةٍ غايتها حجزٌ حقيقي.",
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
                  { label: <T en="Button variants" ar="خيارات الأزرار" />, value: <T en="9 — all states" ar="9 — كل الحالات" /> },
                  { label: <T en="Themes" ar="السمات" />, value: <T en="Light · Dark · Brand" ar="فاتح · داكن · العلامة" /> },
                  { label: <T en="Direction" ar="الاتجاه" />, value: "RTL + LTR" },
                  { label: <T en="Scripts" ar="الخطوط" />, value: <T en="Arabic · Latin" ar="عربي · لاتيني" /> },
                  { label: <T en="Tokens" ar="الرموز" />, value: <T en="Semantic — never raw hex" ar="دلالية — لا hex خام أبداً" /> },
                ]}
              />
              <p>
                <T
                  en="The 9 button variants cover the full interaction matrix — Primary, Secondary, Ghost, Destructive, and Icon — each with Default, Hover, Pressed, Disabled, and Loading states, in both Arabic and Latin type, across all three themes. Every state designed before any state was coded."
                  ar="تغطّي خيارات الأزرار التسعة مصفوفة التفاعل كاملةً — أساسي، وثانوي، وشبحي، وتدميري، وأيقونة — لكلٍّ حالات افتراضية ومرور وضغط وتعطيل وتحميل، بالخطّين العربي واللاتيني، عبر السمات الثلاث جميعاً. كلّ حالةٍ صُمّمت قبل أن تُبرمَج أي حالة."
                />
              </p>
              <Figure
                label="Component library"
                caption={<T en="Buttons × states × themes — Figma component sheet — add export" ar="أزرار × حالات × سمات — ورقة مكوّنات Figma — يُضاف التصدير" />}
              />
            </>
          ),
        },
        {
          kicker: <T en="Challenges" ar="التحدّيات" />,
          heading: (
            <T
              en="Coordinating a parallel workstream without design debt."
              ar="تنسيق مسار عملٍ موازٍ دون دَيْنٍ تصميمي."
            />
          ),
          body: (
            <>
              <p>
                <T
                  en="The AI module was built in parallel by a second engineer while I drove the redesign and rebuild. The risk in any parallel workstream is divergence — two people inventing two visual languages that have to be reconciled later."
                  ar="بُنيت وحدة الذكاء الاصطناعي بالتوازي على يد مهندسٍ ثانٍ بينما قُدتُ إعادة التصميم والبناء. والخطر في أي مسار عملٍ موازٍ هو التباعد — شخصان يخترعان لغتين بصريّتين يجب التوفيق بينهما لاحقاً."
                />
              </p>
              <p>
                <T
                  en="The Design System absorbed that risk. Because the token grammar existed first, the AI-specific screens were built as instances of the same system rather than a separate look — so there was nothing to reconcile at the merge."
                  ar="امتصّ نظام التصميم ذلك الخطر. ولأن قواعد الرموز وُجدت أولاً، بُنيت الشاشات الخاصة بالذكاء الاصطناعي كنُسخٍ من النظام نفسه لا كمظهرٍ منفصل — فلم يكن هناك ما يُوفَّق عند الدمج."
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
                  en="Mademoiselle is active and shipping as a native Flutter app on a bilingual, multi-theme Design System — a stalled prototype turned into a maintainable product. Every screen is an instance of the system, not a one-off, so inconsistencies surface in the system before they reach production."
                  ar="Mademoiselle نشطٌ ويُطلق كتطبيق Flutter أصلي على نظام تصميمٍ ثنائي اللغة متعدّد السمات — نموذجٌ متعثّر تحوّل إلى منتجٍ قابل للصيانة. كلّ شاشةٍ نسخةٌ من النظام، لا حالةً فردية، فتظهر التناقضات في النظام قبل أن تصل الإنتاج."
                />
              </p>
              <p>
                <T
                  en="Building the system first inverts the usual order, where a Design System is documentation written at the end. Here it was the foundation — and it's why a second engineer's parallel work landed without accumulating design debt."
                  ar="بناء النظام أولاً يقلب الترتيب المعتاد، حيث يكون نظام التصميم توثيقاً يُكتَب في النهاية. هنا كان الأساس — وهو سبب نزول عمل المهندس الثاني الموازي دون تراكم دَيْنٍ تصميمي."
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
                  en="Inheriting a stalled codebase made the case for design-system-first undeniable: the system was what let one person redesign and rebuild in parallel with a second engineer without the work drifting. I now treat the system as the first deliverable, not the last."
                  ar="وراثة قاعدة كودٍ متعثّرة جعلت الحجّة لنظام-التصميم-أولاً لا تُنكَر: النظام هو ما أتاح لشخصٍ واحد إعادة التصميم والبناء بالتوازي مع مهندسٍ ثانٍ دون أن ينحرف العمل. وصرتُ الآن أعامل النظام كأول مُسلَّم، لا آخره."
                />
              </p>
              <p>
                <T
                  en="With more time I'd document the system as a living reference with usage examples, so future contributors extend it instead of quietly working around it."
                  ar="بمزيدٍ من الوقت سأوثّق النظام كمرجعٍ حيّ مع أمثلة استخدام، كي يوسّعه المساهمون مستقبلاً بدل الالتفاف حوله بصمت."
                />
              </p>
            </>
          ),
        },
      ]}
      nextProject={{
        label: <T en="BloomBelly — Arabic-first AI healthcare →" ar="BloomBelly — رعاية صحية بالذكاء الاصطناعي عربية أولاً →" />,
        href: "/projects/bloombelly",
      }}
      />
    </>
  );
}
