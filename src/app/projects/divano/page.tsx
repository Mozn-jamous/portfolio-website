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
  "Redesigned a Dubai interior-design firm's website page by page off its WordPress origins. An editorial redesign, a licensed bilingual typeface that took 86 Google Fonts links down to zero external requests, and a strict rule for every before/after pair. Built with the Santa Media team.";

export const metadata: Metadata = {
  title: "Divano — interior-design firm site (design + build) — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "Divano — an interior-design firm's site, retyped and retold",
    description: DESCRIPTION,
    type: "article",
    url: siteUrl("/projects/divano"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Divano — an interior-design firm's site, retyped and retold",
    description: DESCRIPTION,
  },
};

export default function DivanoPage() {
  return (
    <>
      <StructuredData
        data={caseStudyStructuredData({
          name: "Divano — interior-design firm website",
          description: DESCRIPTION,
          path: "/projects/divano",
          year: "2026",
        })}
      />
      <CaseStudyLayout
        theme={{
          accent: "#C39A76",
          accentDeep: "#DDBC9A",
          accentSoft: "rgba(195, 154, 118, 0.16)",
          glow: "rgba(150, 105, 72, 0.28)",
          diagramAccent: "#96674A",
          diagramAccentDeep: "#7A5238",
          diagramAccentSoft: "#F5EAE2",
        }}
        meta={{
          eyebrow: <T en="Web · Client work · Design + Build" ar="ويب · عمل لعميل · تصميم وبناء" />,
          status: <T en="Client work · Pre-launch" ar="عمل لعميل · قبل الإطلاق" />,
          title: (
            <T
              en="Divano — an interior-design firm's site, retyped and retold."
              ar="Divano — موقع شركة تصميمٍ داخلي، أُعيدت طباعته وروايته."
            />
          ),
          lede: (
            <T
              en="Divano Bespoke Interiors is a design, fit-out, and custom-furniture firm in Dubai. Its old site was a WordPress theme wearing the company's name. Working with the Santa Media team, I redesigned it page by page into an editorial, bilingual site. Two quieter layers got rebuilt along the way: the typography, and the credibility of the project photos."
              ar="Divano Bespoke Interiors شركة تصميمٍ داخلي وتنفيذٍ وأثاثٍ مخصّص في دبي. كان موقعها القديم ثيم ووردبريس يحمل اسم الشركة ليس إلا. اشتغلتُ مع فريق Santa Media وأعدتُ تصميمه صفحةً صفحة حتى صار موقعاً تحريرياً بلغتين. وفي الطريق أُعيد بناء طبقتين أهدأ من ذلك: الطباعة، ومصداقية صور المشاريع."
            />
          ),
          year: "2026",
          role: <T en="Designer + Front-end Developer" ar="مصمّمة + مطوّرة واجهة" />,
          stack: [
            "HTML",
            "CSS",
            "JavaScript",
            "Typography",
            "Arabic / RTL",
          ],
        }}
        metrics={[
          {
            value: "86 → 0",
            label: <T en="External font requests, across 28 pages" ar="طلبات الخطوط الخارجية، عبر 28 صفحة" />,
          },
          {
            value: "28",
            label: <T en="Pages — 14 English + 14 Arabic" ar="صفحة: 14 إنجليزية و14 عربية" />,
          },
          {
            value: "1",
            label: <T en="Licensed typeface carrying both alphabets" ar="خطٌّ مرخَّصٌ واحد للأبجديتين" />,
          },
          {
            value: "67/85",
            label: <T en="Commits mine, over the redesign" ar="كوميت لي في إعادة التصميم" />,
          },
        ]}
        sections={[
          {
            kicker: <T en="Overview" ar="نظرة عامة" />,
            heading: <T en="The client, the inherited site, and my part." ar="العميل، والموقع الموروث، ونصيبي." />,
            body: (
              <>
                <Lead>
                  <T
                    en="A real client with a live business in Dubai. The work was to make the site argue for the firm the way its showrooms do. I led the redesign; 67 of the project's 85 commits are mine."
                    ar="عميل حقيقي وعمل قائم في دبي. كانت المهمة أن يدافع الموقع عن الشركة كما تدافع عنها صالات عرضها. قدتُ إعادة التصميم، و67 من كوميتات المشروع الـ85 لي."
                  />
                </Lead>
                <FactGrid
                  items={[
                    { label: <T en="Client" ar="العميل" />, value: <T en="Divano Bespoke Interiors — Dubai" ar="Divano Bespoke Interiors — دبي" /> },
                    { label: <T en="My role" ar="دوري" />, value: <T en="Design lead + front-end" ar="قيادة التصميم + الواجهة" /> },
                    { label: <T en="Team" ar="الفريق" />, value: <T en="With Santa Media" ar="مع فريق Santa Media" /> },
                    { label: <T en="Base" ar="الأساس" />, value: <T en="Static rebuild of a WordPress site" ar="بناء ثابت بديل عن ووردبريس" /> },
                    { label: <T en="Languages" ar="اللغات" />, value: <T en="English + Arabic (RTL)" ar="الإنجليزية والعربية (RTL)" /> },
                    { label: <T en="Build" ar="البناء" />, value: <T en="Vanilla HTML / CSS / JS" ar="HTML / CSS / JS صِرف" /> },
                  ]}
                />
                <Callout kicker={<T en="Credit, precisely" ar="النسبة بدقة" />}>
                  <T
                    en="Mine: the page-by-page redesign (home, about, contact, projects, the editorial service pages), the typography system, the before/after audit, real reviews replacing placeholder ones, and two new service offerings. The team's: the original WordPress-to-static capture, the Arabic /ar/ mirror and its i18n wiring, performance and motion passes, and deployment."
                    ar="لي: إعادة تصميم الصفحات واحدةً واحدة (الرئيسية، عن الشركة، التواصل، المشاريع، وصفحات الخدمات التحريرية)، ونظام الطباعة، وتدقيق صور «قبل/بعد»، ومراجعات حقيقية بدل الوهمية، وخدمتان جديدتان. وللفريق: التحويل الأصلي من ووردبريس إلى موقع ثابت، والنسخة العربية /ar/ بوصلاتها، وجولات الأداء والحركة، والنشر."
                  />
                </Callout>
              </>
            ),
          },
          {
            kicker: <T en="The redesign" ar="إعادة التصميم" />,
            heading: <T en="Reframing the offer, then the pages." ar="أولاً صياغة العرض، ثم الصفحات." />,
            body: (
              <>
                <p>
                  <T
                    en="The inherited hero said “Interior Design”, which undersold a firm that also manufactures and installs. The new hero sells the full promise: “From Concept to Completion — Design, Fit-Out, Joinery & Turnkey Solutions”. Around it I rebuilt home, about, contact and projects, wrote editorial service pages for each discipline, and added two new offerings (Smart Solutions and Flooring) as designed pages of their own. Placeholder testimonials went out. Real Google reviews went in, with the reviewers' names."
                    ar="كانت واجهة الموقع الموروث تقول «تصميم داخلي»، وهذا يبخس شركةً تُصنّع وتُركّب أيضاً. الواجهة الجديدة تبيع الوعد كاملاً: «من الفكرة إلى الإنجاز: تصميم، تنفيذ، نجارة، وحلول تسليم مفتاح». وحولها أعدتُ بناء الرئيسية وعن الشركة والتواصل والمشاريع، وكتبتُ صفحة خدمةٍ تحريرية لكل تخصّص، وأضفتُ خدمتين جديدتين (الحلول الذكية والأرضيات) كصفحتين مصمّمتين. خرجت التوصيات الوهمية، ودخلت مراجعات Google حقيقية بأسماء أصحابها."
                  />
                </p>
                <Figure
                  label="Divano — home, redesigned"
                  caption={<T en="The redesigned home: the turnkey headline over real project photography — export to add." ar="الرئيسية بعد إعادة التصميم: عنوان تسليم المفتاح فوق تصوير مشاريع حقيقي — تُضاف اللقطة." />}
                />
              </>
            ),
          },
          {
            kicker: <T en="Typography" ar="الطباعة" />,
            heading: <T en="The type system." ar="نظام الخطوط." />,
            body: (
              <>
                <p>
                  <T
                    en="The old theme loaded fonts the way old WordPress themes do: 86 Google Fonts links across 28 pages, feeding more than fifty scattered font-family rules. I replaced all of it with self-hosted type, then installed the client's licensed face: Shubbak, by Archetype Foundry, eight weights in 232 KB of woff2. It carries Latin and Arabic in one family with proper shaping, so both language editions now speak in one typographic voice and the site makes zero external font requests."
                    ar="كان الثيم القديم يُحمّل الخطوط على طريقة ثيمات ووردبريس القديمة: 86 رابط Google Fonts في 28 صفحة، تُغذّي أكثر من خمسين قاعدة font-family متناثرة. استبدلتُ بذلك كلِّه خطوطاً مستضافةً ذاتياً، ثم ركّبتُ خطّ العميل المرخَّص: Shubbak من Archetype Foundry، ثمانية أوزان في 232 كيلوبايت. الخط يحمل العربية واللاتينية معاً بتشكيل سليم، فصار للنسختين صوت طباعي واحد، وصار الموقع بلا أي طلب خطوط خارجي."
                  />
                </p>
                <DesignDecision
                  number={1}
                  title={<T en="Alias the old families instead of editing fifty rules." ar="تعريف العائلات القديمة بدل تحرير خمسين قاعدة." />}
                  challenge={
                    <T
                      en="The theme's CSS referenced its old families (Dosis, Cormorant Garamond, Open Sans, Almarai and more) in over fifty scattered rules. Editing every rule risks breaking pages one at a time, and the icon fonts had to survive untouched."
                      ar="أنماط الثيم كانت تشير إلى عائلاتها القديمة (Dosis وCormorant Garamond وOpen Sans وAlmarai وغيرها) في أكثر من خمسين قاعدة متناثرة. وتحرير كل قاعدة يخاطر بكسر الصفحات واحدةً بعد أخرى، وكان على خطوط الأيقونات أن تنجو دون مساس."
                    />
                  }
                  decision={
                    <T
                      en="Alias every legacy family name onto the same self-hosted woff2 files via @font-face. The scattered rules then inherit the new face without a single edit."
                      ar="عرّفتُ كل اسم عائلة قديم على ملفات woff2 المستضافة نفسها عبر @font-face، فورثت القواعد المتناثرة الخط الجديد دون تعديل واحد."
                    />
                  }
                  outcome={
                    <T
                      en="One swap point for the whole site. When the licensed Shubbak arrived, installing it meant dropping files in and changing one variable. A re-fit pass followed: the old tracking values were tuned for a condensed face, so uppercase tracking came down about 40%, faux italics were removed since Shubbak ships upright only, and display line-heights opened up for Kufic ascenders."
                      ar="نقطة تبديل واحدة للموقع كله. لمّا وصل Shubbak المرخَّص كان تركيبه إسقاطَ ملفات وتغييرَ متغيّر واحد. تلت ذلك جولة معايرة: قيم التتبّع القديمة كانت مضبوطة لخط مكثَّف، فانخفض تتبّع الحروف الكبيرة نحو 40٪، وأُلغي المائل المزيّف لأن Shubbak يُشحن قائماً فقط، واتّسعت ارتفاعات أسطر العرض لصواعد الخط الكوفي."
                    />
                  }
                />
              </>
            ),
          },
          {
            kicker: <T en="The photo audit" ar="تدقيق الصور" />,
            heading: <T en="Every before/after pair, re-checked against the photos." ar="كل زوج «قبل/بعد» رُوجع على الصور الأصلية." />,
            body: (
              <>
                <Lead>
                  <T
                    en="Interior-design portfolios live on before/after sliders, and most of them cheat: frames that were never the same room, paired because they look good."
                    ar="معارض التصميم الداخلي تعيش على منزلقات «قبل/بعد»، وأكثرها يغشّ: إطاران لم يكونا الغرفة نفسها يوماً، قُرنا لأن المنظر جميل."
                  />
                </Lead>
                <p>
                  <T
                    en="I rebuilt every pair in the galleries against the actual photo sets, under one rule: a pair ships only when both frames share real architectural landmarks, so the wipe lines up. Pairs with no photographic partner were dropped rather than faked. The same audit removed gallery work that belonged to other firms, confined AI-generated imagery to the decorative hero, kept real photography everywhere it stands as evidence, and trimmed crew photos down to a proof point."
                    ar="أعدتُ بناء كل زوج في المعارض على مجموعات الصور الفعلية، بقاعدة واحدة: لا يُنشر الزوج إلا إذا اشترك الإطاران في معالم معمارية حقيقية يستقيم عليها المسح. والأزواج التي لا شريك لها حُذفت ولم تُلفَّق. التدقيق نفسه أزال من المعارض أعمالاً تعود لشركات أخرى، وحصر صور الذكاء الاصطناعي في الواجهة الزخرفية، وأبقى التصوير الحقيقي في كل موضع يقوم فيه مقام الدليل، وقلّص صور الفريق إلى حدّ الإثبات."
                  />
                </p>
                <Figure
                  label="Divano — before/after slider"
                  caption={<T en="A shipped pair: first fix and completion of the same wall — export to add." ar="زوج منشور: التأسيس والإنجاز للجدار نفسه — تُضاف اللقطة." />}
                />
                <Callout kicker={<T en="The stakes" ar="الرهان" />}>
                  <T
                    en="A fit-out client is about to trust this firm with their home, and the galleries are the argument. One slider that fails to line up costs more trust than ten beautiful pages can buy back."
                    ar="عميل التنفيذ يوشك أن يأتمن الشركة على بيته، والمعارض هي الحجّة. منزلقٌ واحد لا يستقيم يُكلّف من الثقة أكثر مما تشتريه عشر صفحات جميلة."
                  />
                </Callout>
              </>
            ),
          },
        ]}
        nextProject={{
          label: (
            <T
              en="Veghnar Tonvair — an Arabic-first Shopify storefront →"
              ar="Veghnar Tonvair — متجر Shopify عربيّ أولاً →"
            />
          ),
          href: "/projects/veghnar-tonvair",
        }}
      />
    </>
  );
}
