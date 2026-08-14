import type { Metadata } from "next";
import {
  CaseStudyLayout,
  Callout,
  DesignDecision,
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
  "Redesigned a fragrance maison's Shopify storefront from scratch — the client supplied the brand identity, I turned it into a live Arabic-first storefront: one identity stylesheet as the single source of truth, a four-face bilingual type system, and product patterns built for perfume.";

export const metadata: Metadata = {
  title: "Veghnar Tonvair — Arabic-first Shopify storefront (design + build) — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "Veghnar Tonvair — a brand book, turned into a live Arabic-first storefront",
    description: DESCRIPTION,
    type: "article",
    url: siteUrl("/projects/veghnar-tonvair"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Veghnar Tonvair — a brand book, turned into a live Arabic-first storefront",
    description: DESCRIPTION,
  },
};

export default function VeghnarTonvairPage() {
  return (
    <>
      <StructuredData
        data={caseStudyStructuredData({
          name: "Veghnar Tonvair — Arabic-first Shopify storefront",
          description: DESCRIPTION,
          path: "/projects/veghnar-tonvair",
          year: "2026",
        })}
      />
      <CaseStudyLayout
        theme={{
          accent: "#D9B382",
          accentDeep: "#EBD0AA",
          accentSoft: "rgba(217, 179, 130, 0.16)",
          glow: "rgba(180, 138, 88, 0.28)",
          diagramAccent: "#A87B45",
          diagramAccentDeep: "#8A6334",
          diagramAccentSoft: "#F6EEE2",
        }}
        meta={{
          eyebrow: <T en="E-commerce · Shopify · Design + Build" ar="تجارة إلكترونية · Shopify · تصميم وبناء" />,
          status: <T en="Client work · Live" ar="عمل لعميل · منشور" />,
          title: (
            <T
              en="Veghnar Tonvair — a brand book, turned into a living storefront."
              ar="Veghnar Tonvair — دليل هويةٍ، تحوّل إلى متجرٍ حيّ."
            />
          ),
          lede: (
            <T
              en="A fragrance maison, delivered to me as a pale, generic Shopify store plus the client's own brand identity file. I redesigned the storefront completely, from scratch: the identity became one stylesheet that governs the whole shop, Arabic became the store's primary language rather than a translation of it, and the product pages got patterns that fit perfume specifically. It is live, and it opens in Arabic."
              ar="بيت عطورٍ وصلني متجراً باهتاً عامّاً على Shopify، ومعه ملف الهوية البصرية الخاص بالعميل. أعدتُ تصميم المتجر كاملاً من الصفر: صارت الهوية ملفَّ أنماطٍ واحداً يحكم المتجر بأكمله، وصارت العربية لغةَ المتجر الأساسية لا ترجمةً عنه، ونالت صفحات المنتج أنماطاً تناسب العطر تحديداً. والمتجر منشورٌ الآن، ويُفتح بالعربية."
            />
          ),
          year: "2026",
          role: <T en="Designer + Storefront Developer" ar="مصمّمة + مطوّرة متجر" />,
          stack: [
            "Shopify",
            "Liquid",
            "Dawn 14",
            "CSS",
            "Arabic / RTL",
          ],
          links: [
            {
              label: <T en="Visit the live store" ar="زيارة المتجر" />,
              href: "https://veghnartonvair.com",
              external: true,
              primary: true,
            },
          ],
        }}
        metrics={[
          {
            value: <T en="Arabic-first" ar="عربيّ أولاً" />,
            label: <T en="The live store's primary locale — RTL by default" ar="اللغة الأساسية للمتجر الحيّ — من اليمين لليسار افتراضياً" />,
          },
          {
            value: <T en="One file" ar="ملفٌ واحد" />,
            label: <T en="Identity stylesheet governing the whole shop" ar="ملف هويةٍ واحد يحكم المتجر كلّه" />,
          },
          {
            value: "4",
            label: <T en="Type faces — Arabic and Latin, paired" ar="أربعة خطوط — عربية ولاتينية، مقترنة" />,
          },
          {
            value: <T en="Live" ar="منشور" />,
            label: <T en="veghnartonvair.com" ar="veghnartonvair.com" />,
          },
        ]}
        sections={[
          {
            kicker: <T en="Overview" ar="نظرة عامة" />,
            heading: <T en="What it is, and what I did." ar="ما هو، وما الذي فعلته." />,
            body: (
              <>
                <Lead>
                  <T
                    en="Veghnar Tonvair is a fragrance house selling online. I was handed two things: a Shopify store that worked but looked like every other Shopify store, and the client's brand identity file. My job was the distance between them — turning a static identity document into a storefront that actually behaves like the brand, in Arabic, on a real shop taking real orders."
                    ar="Veghnar Tonvair بيتُ عطورٍ يبيع عبر الإنترنت. سُلّمتُ شيئين: متجراً على Shopify يعمل لكنه يشبه كلّ متاجر Shopify الأخرى، وملفَ الهوية البصرية الخاص بالعميل. وكان عملي هو المسافة بينهما — تحويلُ مستند هويةٍ ثابت إلى متجرٍ يتصرّف فعلاً كالعلامة، بالعربية، على متجرٍ حقيقيٍّ يستقبل طلباتٍ حقيقية."
                  />
                </Lead>
                <FactGrid
                  items={[
                    { label: <T en="My role" ar="دوري" />, value: <T en="Storefront redesign + build" ar="إعادة تصميم المتجر وبناؤه" /> },
                    { label: <T en="Given to me" ar="ما سُلِّم لي" />, value: <T en="A pale store + the client's identity file" ar="متجر باهت + ملف هوية العميل" /> },
                    { label: <T en="Industry" ar="القطاع" />, value: <T en="Fragrance · Retail" ar="عطور · تجزئة" /> },
                    { label: <T en="Platform" ar="المنصّة" />, value: <T en="Shopify — Dawn 14 base" ar="Shopify — على أساس Dawn 14" /> },
                    { label: <T en="Primary language" ar="اللغة الأساسية" />, value: <T en="Arabic · RTL (English second)" ar="العربية · من اليمين لليسار (والإنجليزية ثانياً)" /> },
                    { label: <T en="Support" ar="مساندة" />, value: <T en="An assisting engineer fixed some logic bugs" ar="مهندس مساعد أصلح بعض أخطاء المنطق" /> },
                  ]}
                />
                <Callout kicker={<T en="What was mine, and what wasn't" ar="ما كان لي، وما لم يكن" />}>
                  <T
                    en="The brand identity — the marks, the palette direction, the Latin typographic voice — came from the client's own file; I did not invent the brand. Everything you see working on the store is mine: the redesign, the layout system, the Arabic typography, the product patterns, and the CSS that holds it together. At the end, an assisting engineer fixed a number of logic bugs."
                    ar="الهوية البصرية — الشعارات، واتجاه الألوان، والصوت الطباعي اللاتيني — جاءت من ملف العميل نفسه؛ فأنا لم أخترع العلامة. وكلّ ما تراه يعمل على المتجر لي: إعادة التصميم، ونظام التخطيط، والطباعة العربية، وأنماط المنتج، وملف الأنماط الذي يجمعها. وفي النهاية أصلح مهندس مساعد عدداً من أخطاء المنطق."
                  />
                </Callout>
              </>
            ),
          },
          {
            kicker: <T en="The brief" ar="الموجز" />,
            heading: <T en="A brand book stops where the shop begins." ar="دليل الهوية ينتهي حيث يبدأ المتجر." />,
            body: (
              <>
                <p>
                  <T
                    en="An identity file tells you what the brand looks like standing still: a logo, a palette, a serif, a mood. It does not tell you what a two-column product grid looks like on a phone, how a customer compares two perfumes, what the checkout bar should feel like under a thumb — and it almost never says anything about Arabic. That gap is the actual work, and it is where a store either becomes the brand or stays a template wearing its colors."
                    ar="ملفُّ الهوية يخبرك كيف تبدو العلامة واقفةً ساكنة: شعارٌ، ولوحةُ ألوان، وخطٌّ سيريفي، ومزاج. لكنه لا يخبرك كيف تبدو شبكةُ منتجاتٍ بعمودين على الهاتف، ولا كيف يوازن العميل بين عطرين، ولا بأيّ إحساسٍ ينبغي أن يكون شريط الشراء تحت الإبهام — ولا يقول شيئاً عن العربية تقريباً أبداً. تلك الفجوة هي العمل الحقيقي، وفيها إمّا أن يصبح المتجر هو العلامة، أو يبقى قالباً يلبس ألوانها."
                  />
                </p>
                <FactGrid
                  items={[
                    { label: <T en="Came with the brief" ar="جاء مع الموجز" />, value: <T en="Marks, palette, Latin type" ar="الشعارات، الألوان، الخط اللاتيني" /> },
                    { label: <T en="Missing entirely" ar="غائب تماماً" />, value: <T en="Arabic type, RTL, product UX" ar="الخط العربي، الاتجاه، تجربة المنتج" /> },
                    { label: <T en="Starting point" ar="نقطة البداية" />, value: <T en="A generic Shopify theme" ar="ثيم Shopify عامّ" /> },
                    { label: <T en="Target" ar="الهدف" />, value: <T en="A store that reads as a maison" ar="متجر يُقرأ كبيت عطورٍ" /> },
                  ]}
                />
              </>
            ),
          },
          {
            kicker: <T en="The identity layer" ar="طبقة الهوية" />,
            heading: <T en="One stylesheet, one source of truth." ar="ملفُ أنماطٍ واحد، ومصدرُ حقيقةٍ واحد." />,
            body: (
              <>
                <p>
                  <T
                    en="Shopify themes rot in a predictable way: a colour here, an override there, until the same button exists in five slightly different versions. So the redesign is not scattered across the theme editor — it lives in a single identity stylesheet, versioned and commented, that the whole shop reads from. Warm off-white ground, slate ink, a large centred serif display, underlined discover links, rounded chips. One place to change the brand; every page follows."
                    ar="ثيمات Shopify تتعفّن على نحوٍ متوقّع: لونٌ هنا، وتجاوزٌ هناك، حتى يوجد الزرُّ نفسه بخمس نسخٍ متفاوتةٍ قليلاً. لذا لم تتوزّع إعادة التصميم في محرّر الثيم — بل تعيش في ملف هويةٍ واحد، مُرقَّمِ الإصدار ومُعلَّق، يقرأ منه المتجر كلّه. أرضيةٌ بيضاء دافئة، وحبرٌ سليتيّ، وعرضٌ سيريفيٌّ كبير موسّط، وروابط استكشافٍ مسطَّرة، ورقاقاتٌ مستديرة. مكانٌ واحد لتغيير العلامة، وكلّ الصفحات تتبع."
                  />
                </p>
                <DesignDecision
                  number={1}
                  title={<T en="The identity lives in code, not in the theme editor." ar="الهوية تعيش في الكود، لا في محرّر الثيم." />}
                  challenge={
                    <T
                      en="Theme-editor settings are invisible, unversioned, and easy for anyone to nudge. Left there, a brand drifts: the same button ends up in five slightly different versions."
                      ar="إعدادات محرّر الثيم غير مرئية، وبلا إصدارات، ويسهل على أيّ أحد تحريكها. وإن تُركت الهوية فيها انزاحت: فينتهي الزرُّ نفسه بخمس نسخٍ متفاوتةٍ قليلاً."
                    />
                  }
                  decision={
                    <T
                      en="Govern the whole shop from one versioned, commented identity stylesheet — a single source of truth that every page reads from."
                      ar="حُكْمُ المتجر كلّه من ملف هويةٍ واحد مُرقَّمِ الإصدار ومُعلَّق — مصدرُ حقيقةٍ واحد تقرأ منه كلّ صفحة."
                    />
                  }
                  outcome={
                    <T
                      en="One place to change the brand, and every page follows. The trade is deliberate: a non-technical editor can no longer restyle the brand from the admin — which is exactly what stops it drifting."
                      ar="مكانٌ واحد لتغيير العلامة، وكلّ الصفحات تتبع. والمقايضة مقصودة: لم يعد بإمكان محرّرٍ غير تقنيٍّ إعادة تنسيق العلامة من لوحة الإدارة — وهذا بالضبط ما يوقف انزياحها."
                    />
                  }
                />
                <Figure
                  label="Veghnar Tonvair — home, as delivered"
                  caption={<T en="The live storefront: warm ground, centred serif display, and the maison rhythm carried across every page — screen export to add." ar="المتجر الحيّ: أرضيةٌ دافئة، وعرضٌ سيريفيّ موسّط، وإيقاعُ البيت محمولٌ في كلّ صفحة — تُضاف لقطة الشاشة." />}
                />
              </>
            ),
          },
          {
            kicker: <T en="Arabic-first" ar="عربيّ أولاً" />,
            heading: <T en="Not a translated store. An Arabic one." ar="ليس متجراً مترجَماً. بل متجراً عربياً." />,
            body: (
              <>
                <Lead>
                  <T
                    en="Most Arabic Shopify stores are an English store flipped: the layout mirrors, but the type stays a default face that was never drawn for Arabic. The result reads as a translation, and customers feel it before they can name it."
                    ar="أكثر متاجر Shopify العربية متجرٌ إنجليزيٌّ مقلوب: ينعكس التخطيط، لكن الخطّ يبقى خطاً افتراضياً لم يُرسم للعربية قطّ. فتُقرأ النتيجة كترجمة، ويشعر العميل بذلك قبل أن يعرف كيف يسمّيه."
                  />
                </Lead>
                <p>
                  <T
                    en="Because the identity file only spoke Latin, the Arabic voice was mine to build. The store runs on four faces, paired deliberately: an Arabic display face for headings, a serif for Latin display, an Arabic body face for reading, and a script for the brand's signature moments. The Arabic locale file is by far the largest in the theme — the copy is written in Arabic, not filled in from English — and the live store opens right-to-left by default, with English as the second edition."
                    ar="ولأن ملف الهوية لم يتحدّث إلا اللاتينية، كان بناء الصوت العربي لي. يعمل المتجر على أربعة خطوط، مقترنةٍ بقصد: خطٌّ عربيٌّ للعناوين، وسيريفيٌّ للعرض اللاتيني، وخطُّ متنٍ عربيٌّ للقراءة، وخطٌّ راقنٌ للحظات توقيع العلامة. وملفُّ اللغة العربية هو الأكبر في الثيم بفارقٍ واسع — فالنصوص مكتوبةٌ بالعربية لا معبَّأةٌ عن الإنجليزية — والمتجر الحيّ يُفتح من اليمين لليسار افتراضياً، والإنجليزية نسخته الثانية."
                  />
                </p>
                <FactGrid
                  items={[
                    { label: <T en="Arabic display" ar="عرض عربي" />, value: "Arabic Typesetting" },
                    { label: <T en="Arabic body" ar="متن عربي" />, value: "Tajawal" },
                    { label: <T en="Latin display" ar="عرض لاتيني" />, value: "Cormorant" },
                    { label: <T en="Signature script" ar="خط التوقيع" />, value: "Roundhand" },
                    { label: <T en="Default direction" ar="الاتجاه الافتراضي" />, value: <T en="RTL — Arabic is primary" ar="من اليمين لليسار — العربية أساسية" /> },
                    { label: <T en="Second edition" ar="النسخة الثانية" />, value: <T en="English" ar="الإنجليزية" /> },
                  ]}
                />
                <Callout kicker={<T en="Why this is the differentiator" ar="لماذا هذا هو الفارق" />}>
                  <T
                    en="Plenty of people can style a Shopify theme. Far fewer can make an Arabic store read like it was designed in Arabic — because that needs type pairing, not translation. On a Gulf-facing fragrance brand, that is the difference between a shop that feels imported and one that feels local."
                    ar="كثيرون يستطيعون تنسيق ثيم Shopify. وقليلون جداً يستطيعون أن يجعلوا متجراً عربياً يُقرأ كأنه صُمّم بالعربية — لأن ذلك يحتاج اقتران خطوطٍ لا ترجمة. ولعلامة عطورٍ موجَّهةٍ للخليج، هذا هو الفرق بين متجرٍ يبدو مستورداً وآخر يبدو محلياً."
                  />
                </Callout>
              </>
            ),
          },
          {
            kicker: <T en="Product patterns" ar="أنماط المنتج" />,
            heading: <T en="You cannot smell a photo." ar="لا يمكنك أن تشمّ صورة." />,
            body: (
              <>
                <p>
                  <T
                    en="Perfume has a problem no product photo solves: the thing that decides the purchase — how strong it is, how long it stays — is invisible. So the product grid carries intensity dots, a small readable scale that lets a customer compare two bottles at a glance instead of reading two paragraphs; the grid itself runs two columns so each bottle keeps its presence on a phone; and the product page ends in a dark order bar that stays legible against the warm ground. These are decisions the brand book had no reason to contain."
                    ar="للعطر مشكلةٌ لا تحلّها صورةُ منتجٍ: فما يحسم الشراء — قوّتُه، وبقاؤه — غيرُ مرئيّ. لذا تحمل شبكةُ المنتجات نقاطَ كثافةٍ، مقياساً صغيراً مقروءاً يتيح للعميل الموازنة بين قارورتين بنظرةٍ بدل قراءة فقرتين؛ وتجري الشبكةُ نفسها بعمودين ليحتفظ كلُّ عطرٍ بحضوره على الهاتف؛ وتنتهي صفحةُ المنتج بشريط طلبٍ داكنٍ يبقى مقروءاً على الأرضية الدافئة. وهذه قراراتٌ لم يكن لدليل الهوية سببٌ ليحتويها."
                  />
                </p>
                <Figure
                  label="Veghnar Tonvair — product page & grid"
                  caption={<T en="Intensity dots on the two-column grid, and the dark order bar on the product page — screen export to add." ar="نقاط الكثافة على شبكة العمودين، وشريط الطلب الداكن في صفحة المنتج — تُضاف لقطة الشاشة." />}
                />
                <FactGrid
                  items={[
                    { label: <T en="Compare" ar="الموازنة" />, value: <T en="Intensity dots, not paragraphs" ar="نقاط كثافة، لا فقرات" /> },
                    { label: <T en="Grid" ar="الشبكة" />, value: <T en="Two columns — presence on mobile" ar="عمودان — حضورٌ على الجوال" /> },
                    { label: <T en="Buy" ar="الشراء" />, value: <T en="Dark order bar on the PDP" ar="شريط طلب داكن في صفحة المنتج" /> },
                    { label: <T en="Measurement" ar="القياس" />, value: <T en="GTM + social pixels wired" ar="GTM وبكسلات التواصل موصولة" /> },
                  ]}
                />
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
                    en="This is the project that taught me the commercial half of design. A brand file is an opinion about how something should look; a live store is a place where that opinion meets a thumb, a slow connection, and a customer deciding in four seconds. Working inside someone else's identity — respecting it, then extending it exactly where it ran out, in Arabic — turned out to be a harder and more useful skill than designing from a blank page."
                    ar="هذا المشروع هو الذي علّمني النصفَ التجاريَّ من التصميم. ملفُّ الهوية رأيٌ في كيف ينبغي أن يبدو شيء؛ أمّا المتجر الحيُّ فمكانٌ يلتقي فيه ذلك الرأي بإبهامٍ، واتصالٍ بطيء، وعميلٍ يقرّر في أربع ثوانٍ. والعملُ داخل هوية شخصٍ آخر — احترامُها، ثم تمديدُها في الموضع الذي نفدت فيه بالضبط، بالعربية — تبيّن أنه مهارةٌ أصعبُ وأنفعُ من التصميم على صفحةٍ بيضاء."
                  />
                </p>
              </>
            ),
          },
        ]}
        nextProject={{
          label: (
            <T
              en="Pharmacology — a bilingual clinical-nutrition brand site →"
              ar="Pharmacology — موقع علامة تغذيةٍ سريرية ثنائي اللغة →"
            />
          ),
          href: "/projects/pharmacology",
        }}
      />
    </>
  );
}
