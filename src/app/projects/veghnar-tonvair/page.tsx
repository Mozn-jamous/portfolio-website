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
  "A fragrance house's Shopify storefront, redesigned from scratch. The client supplied the brand identity and I turned it into a live Arabic storefront: one identity stylesheet the whole shop reads from, a four-face bilingual type system, and product patterns built for perfume.";

export const metadata: Metadata = {
  title: "Veghnar Tonvair — an Arabic Shopify storefront — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "Veghnar Tonvair — a brand book turned into a live Arabic storefront",
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
          name: "Veghnar Tonvair — an Arabic Shopify storefront",
          description: DESCRIPTION,
          path: "/projects/veghnar-tonvair",
          year: "2026",
        })}
      />
      <CaseStudyLayout
        theme={{
          accent: "#D98A97",
          accentDeep: "#EBB3BD",
          accentSoft: "rgba(217, 138, 151, 0.16)",
          glow: "rgba(150, 52, 66, 0.30)",
          diagramAccent: "#A03445",
          diagramAccentDeep: "#7E2231",
          diagramAccentSoft: "#F8E9EC",
        }}
        meta={{
          eyebrow: <T en="E-commerce · Shopify · Design and build" ar="تجارة إلكترونية · Shopify · تصميم وبناء" />,
          status: <T en="Client work, live" ar="عمل لعميل، منشور" />,
          title: (
            <T
              en="Veghnar Tonvair: a brand book, turned into a working shop."
              ar="Veghnar Tonvair: دليل هوية، تحوّل إلى متجر يعمل."
            />
          ),
          lede: (
            <T
              en="A fragrance house that reached me as a pale, generic Shopify store plus the client's brand identity file. I redesigned the storefront from scratch. The identity became one stylesheet the whole shop reads from, Arabic became the store's primary language instead of a translation of it, and the product pages got patterns that suit perfume. It is live, and it opens in Arabic."
              ar="بيت عطور وصلني متجراً باهتاً عامّاً على Shopify، ومعه ملف الهوية البصرية الخاص بالعميل. أعدتُ تصميم المتجر من الصفر. صارت الهوية ملف أنماط واحداً يقرأ منه المتجر كله، وصارت العربية لغة المتجر الأساسية بدل أن تكون ترجمة عنه، ونالت صفحات المنتج أنماطاً تناسب العطر. والمتجر منشور الآن، ويُفتح بالعربية."
            />
          ),
          year: "2026",
          role: <T en="Designer + storefront engineer" ar="مصمّمة + مهندسة متجر" />,
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
            label: <T en="The live store's primary locale, RTL by default" ar="اللغة الأساسية للمتجر الحيّ، من اليمين لليسار افتراضياً" />,
          },
          {
            value: <T en="One file" ar="ملفٌ واحد" />,
            label: <T en="An identity stylesheet the whole shop reads from" ar="ملف هوية واحد يقرأ منه المتجر كله" />,
          },
          {
            value: "4",
            label: <T en="Typefaces, Arabic and Latin, paired deliberately" ar="خطوط عربية ولاتينية، مقترنة بقصد" />,
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
                    en="Veghnar Tonvair is a fragrance house selling online. I was handed two things: a Shopify store that worked but looked like every other Shopify store, and the client's brand identity file. My job was the distance between them, which meant turning a static identity document into a storefront that behaves like the brand, in Arabic, on a shop taking real orders."
                    ar="Veghnar Tonvair بيت عطور يبيع عبر الإنترنت. سُلّمتُ شيئين: متجراً على Shopify يعمل لكنه يشبه كل متاجر Shopify الأخرى، وملف الهوية البصرية الخاص بالعميل. وكان عملي هو المسافة بينهما، أي تحويل مستند هوية ثابت إلى متجر يتصرّف كالعلامة، بالعربية، على متجر يستقبل طلبات حقيقية."
                  />
                </Lead>
                <FactGrid
                  items={[
                    { label: <T en="My role" ar="دوري" />, value: <T en="Redesigned and built the storefront" ar="أعدتُ تصميم المتجر وبنيته" /> },
                    { label: <T en="Given to me" ar="ما سُلِّم لي" />, value: <T en="A pale store and the client's identity file" ar="متجر باهت وملف هوية العميل" /> },
                    { label: <T en="Industry" ar="القطاع" />, value: <T en="Fragrance · Retail" ar="عطور · تجزئة" /> },
                    { label: <T en="Platform" ar="المنصّة" />, value: <T en="Shopify, on a Dawn 14 base" ar="Shopify، على أساس Dawn 14" /> },
                    { label: <T en="Primary language" ar="اللغة الأساسية" />, value: <T en="Arabic, RTL, with English second" ar="العربية، من اليمين لليسار، والإنجليزية ثانياً" /> },
                    { label: <T en="Support" ar="مساندة" />, value: <T en="An assisting engineer fixed some logic bugs" ar="مهندس مساعد أصلح بعض أخطاء المنطق" /> },
                  ]}
                />
                <Callout kicker={<T en="What was mine, and what wasn't" ar="ما كان لي، وما لم يكن" />}>
                  <T
                    en="The brand identity came from the client's own file: the marks, the palette direction, the Latin typographic voice. I did not invent the brand. What I did is everything you see working on the store: the redesign, the layout system, the Arabic typography, the product patterns, and the CSS holding it together. Near the end, an assisting engineer fixed a number of logic bugs."
                    ar="الهوية البصرية جاءت من ملف العميل نفسه: الشعارات، واتجاه الألوان، والصوت الطباعي اللاتيني. فأنا لم أخترع العلامة. وما فعلتُه هو كل ما تراه يعمل على المتجر: إعادة التصميم، ونظام التخطيط، والطباعة العربية، وأنماط المنتج، وملف الأنماط الذي يجمعها. وقُبيل النهاية أصلح مهندس مساعد عدداً من أخطاء المنطق."
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
                    en="An identity file tells you what a brand looks like standing still: a logo, a palette, a serif, a mood. It says nothing about what a two-column product grid looks like on a phone, how somebody compares two perfumes, or how the checkout bar should sit under a thumb. It almost never mentions Arabic at all. That gap is the actual work, and it decides whether a store becomes the brand or stays a template wearing its colours."
                    ar="ملف الهوية يخبرك كيف تبدو العلامة واقفة ساكنة: شعار، ولوحة ألوان، وخطّ سيريفي، ومزاج. ولا يقول شيئاً عن شكل شبكة منتجات بعمودين على الهاتف، ولا عن كيف يوازن أحدهم بين عطرين، ولا عن كيف ينبغي أن يجلس شريط الشراء تحت الإبهام. ولا يذكر العربية تقريباً أبداً. تلك الفجوة هي العمل الحقيقي، وهي التي تقرّر إن كان المتجر سيصبح العلامة أم سيبقى قالباً يلبس ألوانها."
                  />
                </p>
                <FactGrid
                  items={[
                    { label: <T en="Came with the brief" ar="جاء مع الموجز" />, value: <T en="Marks, palette, Latin type" ar="الشعارات، والألوان، والخط اللاتيني" /> },
                    { label: <T en="Missing entirely" ar="غائب تماماً" />, value: <T en="Arabic type, RTL, product UX" ar="الخط العربي، والاتجاه، وتجربة المنتج" /> },
                    { label: <T en="Starting point" ar="نقطة البداية" />, value: <T en="A generic Shopify theme" ar="ثيم Shopify عامّ" /> },
                    { label: <T en="Target" ar="الهدف" />, value: <T en="A store that reads like a fragrance house" ar="متجر يُقرأ كبيت عطور" /> },
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
                    en="Shopify themes rot in a predictable way. A colour here, an override there, and eventually the same button exists in five slightly different versions. So the redesign isn't scattered across the theme editor. It lives in one identity stylesheet, versioned and commented, that the whole shop reads from: a calm white canvas, a single deep burgundy kept for actions, a centred serif display, underlined links. Change the brand in one place and every page follows."
                    ar="ثيمات Shopify تتعفّن على نحو متوقّع. لون هنا، وتجاوز هناك، وينتهي الأمر بوجود الزرّ نفسه بخمس نسخ متفاوتة قليلاً. لذا لم تتوزّع إعادة التصميم في محرّر الثيم. هي تعيش في ملف هوية واحد، مرقّم الإصدار ومعلّق، يقرأ منه المتجر كله: قماشة بيضاء هادئة، وعنّابيّ عميق واحد محجوز للأفعال، وعرض سيريفي موسّط، وروابط مسطّرة. غيّر العلامة في مكان واحد فتتبعه كل الصفحات."
                  />
                </p>
                <DesignDecision
                  number={1}
                  title={<T en="The identity lives in code, not in the theme editor." ar="الهوية تعيش في الكود، لا في محرّر الثيم." />}
                  challenge={
                    <T
                      en="Theme-editor settings are invisible, unversioned and easy for anyone to nudge. Leave a brand in there and it drifts, until the same button exists in five slightly different versions."
                      ar="إعدادات محرّر الثيم غير مرئية، وبلا إصدارات، ويسهل على أي أحد تحريكها. واترك العلامة فيها فتنزاح، حتى يوجد الزرّ نفسه بخمس نسخ متفاوتة قليلاً."
                    />
                  }
                  decision={
                    <T
                      en="Run the whole shop from one versioned, commented identity stylesheet that every page reads from."
                      ar="أن يُدار المتجر كله من ملف هوية واحد مرقّم الإصدار ومعلّق تقرأ منه كل صفحة."
                    />
                  }
                  outcome={
                    <T
                      en="One place to change the brand, and every page follows. The cost is deliberate: a non-technical editor can no longer restyle the brand from the admin, and that is exactly what keeps it from drifting."
                      ar="مكان واحد لتغيير العلامة، وكل الصفحات تتبع. والكلفة مقصودة: لم يعد بإمكان محرّر غير تقني أن يعيد تنسيق العلامة من لوحة الإدارة، وهذا بالضبط ما يمنع انزياحها."
                    />
                  }
                />
                <Figure
                  src="/work/veghnar/home.webp"
                  alt="Veghnar Tonvair live homepage in Arabic: a perfume bottle held against soft light, with the Arabic tagline and a shop-the-perfumes link"
                  label="Veghnar Tonvair — home, live"
                  caption={<T en="The live homepage, opening in Arabic: the campaign hero and the underlined shop link." ar="الرئيسية الحيّة تُفتح بالعربية: بطل الحملة «تَنساه... ولا يَنسونك» والرابط المسطَّر لتسوّق العطور." />}
                />
              </>
            ),
          },
          {
            kicker: <T en="Arabic-first" ar="عربيّ أولاً" />,
            heading: <T en="An Arabic store, not a translated one." ar="متجر عربي، لا متجر مترجَم." />,
            body: (
              <>
                <Lead>
                  <T
                    en="Most Arabic Shopify stores are an English store flipped over. The layout mirrors, but the type stays a default face nobody drew for Arabic. It reads as a translation, and customers feel that before they can name it."
                    ar="أكثر متاجر Shopify العربية متجر إنجليزي مقلوب. ينعكس التخطيط، لكن الخطّ يبقى خطاً افتراضياً لم يرسمه أحد للعربية. فتُقرأ كترجمة، ويشعر العميل بذلك قبل أن يعرف كيف يسمّيه."
                  />
                </Lead>
                <p>
                  <T
                    en="The identity file only spoke Latin, so the Arabic voice was mine to build. The store runs on four faces, paired deliberately: an Arabic display face for headings, a serif for Latin display, an Arabic body face for reading, and a script for the brand's signature moments. The Arabic locale file is by far the largest in the theme, because the copy was written in Arabic rather than filled in from English. The live store opens right-to-left, and English is the second edition."
                    ar="ملف الهوية لم يتحدّث إلا اللاتينية، فكان بناء الصوت العربي لي. يعمل المتجر على أربعة خطوط مقترنة بقصد: خطّ عربي للعناوين، وسيريفي للعرض اللاتيني، وخطّ متن عربي للقراءة، وخطّ راقن للحظات توقيع العلامة. وملف اللغة العربية هو الأكبر في الثيم بفارق واسع، لأن النصوص كُتبت بالعربية بدل أن تُعبَّأ عن الإنجليزية. والمتجر الحيّ يُفتح من اليمين لليسار، والإنجليزية نسخته الثانية."
                  />
                </p>
                <FactGrid
                  items={[
                    { label: <T en="Arabic display" ar="عرض عربي" />, value: "Arabic Typesetting" },
                    { label: <T en="Arabic body" ar="متن عربي" />, value: "Tajawal" },
                    { label: <T en="Latin display" ar="عرض لاتيني" />, value: "Cormorant" },
                    { label: <T en="Signature script" ar="خط التوقيع" />, value: "Roundhand" },
                    { label: <T en="Default direction" ar="الاتجاه الافتراضي" />, value: <T en="RTL, with Arabic primary" ar="من اليمين لليسار، والعربية أساسية" /> },
                    { label: <T en="Second edition" ar="النسخة الثانية" />, value: <T en="English" ar="الإنجليزية" /> },
                  ]}
                />
                <Callout kicker={<T en="Why this is the differentiator" ar="لماذا هذا هو الفارق" />}>
                  <T
                    en="Plenty of people can style a Shopify theme. Far fewer can make an Arabic store read like it was designed in Arabic, because that takes type pairing rather than translation. For a fragrance brand selling into the Gulf, that is the difference between a shop that feels imported and one that feels local."
                    ar="كثيرون يستطيعون تنسيق ثيم Shopify. وقليلون جداً يستطيعون أن يجعلوا متجراً عربياً يُقرأ كأنه صُمّم بالعربية، لأن ذلك يحتاج اقتران خطوط لا ترجمة. ولعلامة عطور تبيع إلى الخليج، هذا هو الفرق بين متجر يبدو مستورداً وآخر يبدو محلياً."
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
                    en="Perfume gets bought as a gift about as often as for oneself, and the product page is built around that. Under the order block sits a gift layer, wrapping plus a hand-written card, so the ritual of giving is part of the purchase instead of an afterthought at checkout. The order block offers two clear paths, order or buy now, in the brand's burgundy. In the catalogue each bottle appears in clean studio photography with quick-add, letting the scripted bottle names carry the shelf. None of this is something a brand book would have had reason to contain."
                    ar="العطر يُشترى هديةً بقدر ما يُشترى للنفس، وصفحة المنتج مبنيّة حول ذلك. تحت كتلة الطلب تجلس طبقة إهداء، تغليف وبطاقة مكتوبة بخط اليد، فيصير طقس الإهداء جزءاً من الشراء بدل أن يكون فكرة متأخّرة عند الدفع. وتعرض كتلة الطلب مسارين واضحين، اطلب أو اشترِ الآن، بعنّابيّ العلامة. وفي الكتالوج تظهر كل قارورة بتصوير استوديو نظيف مع إضافة سريعة، تاركةً لأسماء القوارير المخطوطة أن تحمل الرفّ. ولا شيء من هذا كان لدليل الهوية سبب ليحتويه."
                  />
                </p>
                <Figure
                  src="/work/veghnar/product.webp"
                  alt="Veghnar Tonvair product page in Arabic: Kayan all-over spray with burgundy order and buy-now buttons and a gift-wrap plus hand-written card option"
                  label="Veghnar Tonvair — product page, live"
                  caption={<T en="The live product page: the two-path order block, and the gift layer with wrapping and a hand-written card." ar="صفحة المنتج الحيّة: كتلة الطلب بمسارَيها، وطبقة الإهداء بتغليفها وبطاقتها المكتوبة بخط اليد («لمسة خاصة»)." />}
                />
                <FactGrid
                  items={[
                    { label: <T en="Gift ritual" ar="طقس الإهداء" />, value: <T en="Wrapping + hand-written card" ar="تغليف + بطاقة بخط اليد" /> },
                    { label: <T en="Order block" ar="كتلة الطلب" />, value: <T en="Two paths: order, or buy now" ar="مساران: اطلب، أو اشترِ الآن" /> },
                    { label: <T en="Catalogue" ar="الكتالوج" />, value: <T en="Studio bottles with quick add" ar="قوارير استوديو مع إضافة سريعة" /> },
                    { label: <T en="Measurement" ar="القياس" />, value: <T en="GTM and social pixels wired up" ar="GTM وبكسلات التواصل موصولة" /> },
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
                    en="This is the project that taught me the commercial half of design. A brand file is an opinion about how something should look. A live store is where that opinion meets a thumb, a slow connection and a customer deciding in four seconds. Working inside someone else's identity, respecting it and then extending it exactly where it ran out, in Arabic, turned out to be harder and more useful than designing from a blank page."
                    ar="هذا المشروع هو الذي علّمني النصف التجاري من التصميم. ملف الهوية رأي في كيف ينبغي أن يبدو شيء. أما المتجر الحيّ فهو حيث يلتقي ذلك الرأي بإبهام، واتصال بطيء، وعميل يقرّر في أربع ثوانٍ. والعمل داخل هوية شخص آخر، باحترامها ثم تمديدها في الموضع الذي نفدت فيه بالضبط، بالعربية، تبيّن أنه أصعب وأنفع من التصميم على صفحة بيضاء."
                  />
                </p>
              </>
            ),
          },
        ]}
        nextProject={{
          label: (
            <T
              en="Pharmacology: a bilingual clinical-nutrition site →"
              ar="Pharmacology: موقع تغذية سريرية ثنائي اللغة →"
            />
          ),
          href: "/projects/pharmacology",
        }}
      />
    </>
  );
}
