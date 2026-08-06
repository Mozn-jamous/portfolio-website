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
  "Designed and built the brand website for Noodlna, an instant-noodles product by Syria Macarna — an Arabic-first consumer storefront plus a B2B wholesale/export funnel, built from scratch in vanilla HTML/CSS/JS and deployed on Vercel.";

export const metadata: Metadata = {
  title: "Noodlna — brand & B2B website (design + build) — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "Noodlna — a food brand's storefront, designed and built",
    description: DESCRIPTION,
    type: "article",
    url: siteUrl("/projects/noodlna"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Noodlna — a food brand's storefront, designed and built",
    description: DESCRIPTION,
  },
};

export default function NoodlnaPage() {
  return (
    <>
      <StructuredData
        data={caseStudyStructuredData({
          name: "Noodlna — brand & B2B website",
          description: DESCRIPTION,
          path: "/projects/noodlna",
          year: "2026",
        })}
      />
      <CaseStudyLayout
        meta={{
          eyebrow: <T en="Web · Brand · Design + Build" ar="ويب · علامة تجارية · تصميم وبناء" />,
          status: <T en="Client work · Live" ar="عمل لعميل · منشور" />,
          title: (
            <T
              en="Noodlna — a food brand's storefront, designed and built."
              ar="Noodlna — واجهة متجرٍ لعلامةٍ غذائية، مُصمَّمة ومبنيّة."
            />
          ),
          lede: (
            <T
              en="Noodlna is an instant-noodles brand by Syria Macarna. I designed and built its website from scratch — an Arabic-first consumer storefront that sells the product, plus a separate B2B page that opens wholesale, export, and private-label partnerships. Vanilla HTML, CSS, and JavaScript; no framework, no page builder; deployed on Vercel."
              ar="Noodlna علامة شعيريةٍ سريعة التحضير من شركة سيريا ماكارنا. صمّمتُ وبنيتُ موقعها من الصفر — واجهة متجرٍ عربيّة أولاً تبيع المنتج، وصفحة B2B منفصلة تفتح شراكات الجملة والتصدير والعلامة الخاصة. بُني بـ HTML وCSS وJavaScript صِرف؛ دون إطارٍ أو منشئ صفحات؛ ومنشورٌ على Vercel."
            />
          ),
          year: "2026",
          role: <T en="Designer + Front-end Developer" ar="مصمّمة + مطوّرة واجهة أمامية" />,
          stack: [
            "HTML",
            "CSS",
            "JavaScript",
            "Arabic / RTL",
            "Vercel",
          ],
        }}
        metrics={[
          { value: "2", label: <T en="Audiences — consumer storefront + B2B" ar="جمهوران — متجر للمستهلك + B2B" /> },
          { value: <T en="Arabic-first" ar="عربيّ أولاً" />, label: <T en="Full RTL, designed in Arabic" ar="من اليمين لليسار بالكامل، مصمّم بالعربية" /> },
          { value: <T en="Vanilla" ar="بلا إطار" />, label: <T en="No framework or page builder" ar="دون إطارٍ أو منشئ صفحات" /> },
          { value: <T en="Live" ar="منشور" />, label: <T en="Deployed on Vercel" ar="منشورٌ على Vercel" /> },
        ]}
        sections={[
          {
            kicker: <T en="Overview" ar="نظرة عامة" />,
            heading: <T en="What it is, and what I did." ar="ما هو، وما الذي فعلته." />,
            body: (
              <>
                <Lead>
                  <T
                    en="A Syrian food manufacturer needed a real home for its instant-noodles brand — something that both sells to shoppers and opens the door to distributors and exporters. I owned the design and the front-end build end to end: the brand storefront and the B2B partnership funnel, in one coherent site."
                    ar="احتاجت شركة أغذيةٍ سورية بيتاً حقيقياً لعلامة الشعيرية سريعة التحضير — موقعٌ يبيع للمتسوّقين ويفتح الباب للموزّعين والمصدّرين في آنٍ واحد. تولّيتُ التصميم وبناء الواجهة من البداية للنهاية: متجر العلامة وقُمع شراكات الـB2B، في موقعٍ واحدٍ متماسك."
                  />
                </Lead>
                <FactGrid
                  items={[
                    { label: <T en="My role" ar="دوري" />, value: <T en="Design + front-end build" ar="تصميم + بناء الواجهة" /> },
                    { label: <T en="Client" ar="العميل" />, value: <T en="Syria Macarna" ar="سيريا ماكارنا" /> },
                    { label: <T en="Product" ar="المنتج" />, value: <T en="Instant noodles" ar="شعيرية سريعة التحضير" /> },
                    { label: <T en="Build" ar="البناء" />, value: <T en="Vanilla HTML / CSS / JS" ar="HTML / CSS / JS صِرف" /> },
                    { label: <T en="Language" ar="اللغة" />, value: <T en="Arabic · RTL" ar="عربية · من اليمين لليسار" /> },
                    { label: <T en="Hosting" ar="الاستضافة" />, value: "Vercel" },
                  ]}
                />
              </>
            ),
          },
          {
            kicker: <T en="The brief" ar="الموجز" />,
            heading: <T en="Two audiences, one site." ar="جمهوران، موقعٌ واحد." />,
            body: (
              <>
                <p>
                  <T
                    en="A food brand's site has to do two jobs that pull in different directions. A shopper wants appetite, story, and trust — is this tasty, is it for my family, where do I buy it. A distributor wants terms — minimum order, carton specs, shelf life, export readiness. Trying to serve both on one page serves neither, so I split the site: a warm consumer storefront, and a focused B2B page reached by its own clear call-to-action."
                    ar="موقع العلامة الغذائية عليه إنجاز وظيفتين تتجاذبان باتجاهين مختلفين. المتسوّق يريد الشهيّة والقصّة والثقة — أهو لذيذ، أيناسب عائلتي، أين أشتريه. والموزّع يريد الشروط — الحدّ الأدنى للطلب، ومواصفات الكرتونة، ومدّة الصلاحية، والجاهزية للتصدير. خدمةُ الاثنين في صفحةٍ واحدة لا تخدم أحدهما، لذا قسّمتُ الموقع: متجرٌ دافئ للمستهلك، وصفحة B2B مركّزة تُبلَغ عبر دعوةٍ واضحةٍ خاصّة بها."
                  />
                </p>
              </>
            ),
          },
          {
            kicker: <T en="The storefront" ar="واجهة المتجر" />,
            heading: <T en="Selling a three-minute meal." ar="بيعُ وجبةٍ في ثلاث دقائق." />,
            body: (
              <>
                <p>
                  <T
                    en="The consumer site is built to make you hungry and make you trust the brand. It opens on the product and the promise — “a meal for every moment, ready in three minutes” — then walks through why the product, the flavor range, a playful three-minute cooking ritual, recipes, real customer reviews, and the “made in Syria” heritage story. Every section is designed in Arabic, right-to-left, with motion that reveals content as you scroll."
                    ar="بُني موقع المستهلك ليُشهّيك ويجعلك تثق بالعلامة. يفتتح بالمنتج والوعد — «وجبة كل الأوقات، جاهزة في ثلاث دقائق» — ثم يمرّ بلماذا هذا المنتج، ومدى النكهات، وطقس طهيٍ مرحٍ في ثلاث دقائق، ووصفات، وآراء عملاء حقيقية، وقصّة «صُنع في سوريا». كلّ قسمٍ مصمَّم بالعربية، من اليمين لليسار، بحركةٍ تكشف المحتوى أثناء التمرير."
                  />
                </p>
                <Figure
                  src="/work/noodlna/home.webp"
                  label="Noodlna — consumer storefront"
                  caption={<T en="The Arabic-first homepage: product hero, the three-minute promise, and a spec card." ar="الصفحة الرئيسية عربيّة أولاً: واجهة المنتج، ووعد الثلاث دقائق، وبطاقة المواصفات." />}
                />
                <FactGrid
                  items={[
                    { label: <T en="Hero" ar="الواجهة" />, value: <T en="Product + “3-minute meal” promise" ar="المنتج + وعد «وجبة في 3 دقائق»" /> },
                    { label: <T en="Range" ar="التشكيلة" />, value: <T en="Flavor variants carousel" ar="عرض دوّار للنكهات" /> },
                    { label: <T en="Ritual" ar="الطقس" />, value: <T en="3-step cooking animation" ar="حركة طهيٍ بثلاث خطوات" /> },
                    { label: <T en="Trust" ar="الثقة" />, value: <T en="Reviews + heritage story" ar="آراء + قصّة الإرث" /> },
                  ]}
                />
              </>
            ),
          },
          {
            kicker: <T en="The B2B layer" ar="طبقة الـB2B" />,
            heading: <T en="From shelf appeal to purchase orders." ar="من جاذبية الرفّ إلى أوامر الشراء." />,
            body: (
              <>
                <Lead>
                  <T
                    en="The same brand, addressed to a completely different reader: the buyer who orders by the carton."
                    ar="العلامة ذاتها، مُوجَّهةً لقارئٍ مختلفٍ تماماً: المشتري الذي يطلب بالكرتونة."
                  />
                </Lead>
                <p>
                  <T
                    en="The B2B page drops the appetite copy and gives a distributor what they actually need to make a decision: the four ways to partner — wholesale, export, private label, delivery — the commercial specs (carton size, units per carton, shelf life, SKUs, minimum order quantities), and two ways to start a conversation: a direct WhatsApp line, or a structured export-request form that captures country, monthly volume, and request type."
                    ar="تتخلّى صفحة الـB2B عن لغة الشهيّة وتمنح الموزّع ما يحتاجه فعلاً لاتخاذ قرار: الطرق الأربع للشراكة — جملة، تصدير، علامة خاصة، توصيل — والمواصفات التجارية (حجم الكرتونة، الوحدات في الكرتونة، مدّة الصلاحية، الأصناف، الحدّ الأدنى للطلب)، وطريقتان لبدء الحديث: خطّ واتساب مباشر، أو نموذج طلب تصديرٍ منظَّم يلتقط الدولة والكمية الشهرية ونوع الطلب."
                  />
                </p>
                <Figure
                  src="/work/noodlna/b2b.webp"
                  label="Noodlna — B2B / wholesale & export"
                  caption={<T en="A separate page for distributors: partnership types, commercial specs, and an export-request funnel." ar="صفحة منفصلة للموزّعين: أنواع الشراكة، والمواصفات التجارية، وقُمع طلب التصدير." />}
                />
                <Callout kicker={<T en="Why split it out" ar="لماذا فُصِلت" />}>
                  <T
                    en="A consumer scrolling for dinner and a buyer pricing a container are not the same visit. Giving B2B its own page kept the storefront clean and gave serious buyers a page that speaks their language — specs and terms, not flavor stories."
                    ar="المستهلك الذي يتصفّح بحثاً عن عشاء، والمشتري الذي يسعّر حاوية، ليسا الزيارة نفسها. منحُ الـB2B صفحته الخاصة أبقى المتجر نظيفاً، وأعطى المشترين الجادّين صفحةً تتحدّث لغتهم — مواصفات وشروط، لا قصص نكهات."
                  />
                </Callout>
              </>
            ),
          },
          {
            kicker: <T en="Build & craft" ar="البناء والحِرفة" />,
            heading: <T en="Vanilla, on purpose." ar="بلا إطار، عن قصد." />,
            body: (
              <>
                <p>
                  <T
                    en="I built the whole thing in plain HTML, CSS, and JavaScript — no framework, no page builder, no build step. For a marketing site that has to load fast on a phone over a Syrian mobile connection, that's a feature, not a shortcut: the page is just the page. The Arabic layout is right-to-left by design, the scroll reveals and the flavor carousel are hand-written, and the whole site is deployed on Vercel with long-lived caching on its assets."
                    ar="بنيتُ كلّ شيءٍ بـHTML وCSS وJavaScript صِرف — دون إطارٍ أو منشئ صفحاتٍ أو خطوة بناء. لموقعٍ تسويقي يجب أن يُحمَّل بسرعةٍ على الهاتف عبر اتصالٍ سوريّ، هذا ميزةٌ لا اختصار: الصفحة هي الصفحة فحسب. التخطيط العربي من اليمين لليسار بالتصميم، وكشوفات التمرير وعرض النكهات مكتوبةٌ يدوياً، والموقع كلّه منشورٌ على Vercel مع تخزينٍ مؤقّتٍ طويل لأصوله."
                  />
                </p>
                <FactGrid
                  items={[
                    { label: <T en="Stack" ar="التقنيات" />, value: "HTML · CSS · JS" },
                    { label: <T en="Direction" ar="الاتجاه" />, value: <T en="RTL, logical layout" ar="من اليمين لليسار، تخطيط منطقي" /> },
                    { label: <T en="Motion" ar="الحركة" />, value: <T en="Hand-written scroll reveals" ar="كشوفات تمريرٍ يدوية" /> },
                    { label: <T en="Deploy" ar="النشر" />, value: <T en="Vercel · cached assets" ar="Vercel · أصول مُخزَّنة" /> },
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
                    en="Noodlna was an exercise in writing one site for two readers without letting either feel like an afterthought — and in proving that a fast, polished, Arabic-first brand site doesn't need a framework to feel modern. The habit it left: decide who each page is for before designing a pixel of it."
                    ar="كان Noodlna تمريناً في كتابة موقعٍ واحدٍ لقارئين دون أن يشعر أيٌّ منهما بأنه فكرةٌ لاحقة — وفي إثبات أن موقع علامةٍ سريعاً ومصقولاً وعربيّاً أولاً لا يحتاج إطاراً ليبدو عصرياً. والعادة التي تركها: قرّري لمن كلّ صفحة قبل تصميم أيّ بكسلٍ منها."
                  />
                </p>
              </>
            ),
          },
        ]}
        nextProject={{
          label: (
            <T
              en="Pharmacology — a 25-page bilingual brand & service site →"
              ar="Pharmacology — موقع علامةٍ وخدماتٍ ثنائي اللغة من 25 صفحة →"
            />
          ),
          href: "/projects/pharmacology",
        }}
      />
    </>
  );
}
