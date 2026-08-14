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
  "Redesigned a Dubai interior-design firm's website page by page off its WordPress origins — an editorial redesign, a licensed bilingual typeface replacing 86 Google Fonts links with zero external font requests, and an honesty rule for every before/after pair. Built with the Santa Media team.";

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
              en="Divano Bespoke Interiors is a design, fit-out, and custom-furniture firm in Dubai. Its site was a WordPress theme wearing the company's name. Working with the Santa Media team, I redesigned it page by page into an editorial, bilingual site — and rebuilt two invisible layers that decide whether a portfolio site is believed: the typography and the truthfulness of its project photography."
              ar="Divano Bespoke Interiors شركة تصميمٍ وتنفيذٍ وأثاثٍ مخصّص في دبي. كان موقعها ثيم ووردبريس يرتدي اسم الشركة. بالعمل مع فريق Santa Media أعدتُ تصميمه صفحةً صفحة إلى موقعٍ تحريريٍّ ثنائي اللغة — وأعدتُ بناء طبقتين خفيّتين تُقرّران هل يُصدَّق موقعُ أعمالٍ أم لا: الطباعة، وصدقُ صور المشاريع."
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
            label: <T en="Pages — 14 English + 14 Arabic" ar="صفحة — 14 إنجليزية + 14 عربية" />,
          },
          {
            value: "1",
            label: <T en="Licensed typeface carrying both alphabets" ar="خطٌّ مرخَّصٌ واحد يحمل الأبجديتين" />,
          },
          {
            value: "67/85",
            label: <T en="Commits mine, over the redesign" ar="كوميت لي، عبر إعادة التصميم" />,
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
                    en="A real client, a live business, and a site that had to stop looking like its theme. I led the redesign — 67 of the project's 85 commits are mine — across the visual language, the typography system, the services architecture, and the credibility of the project galleries."
                    ar="عميلٌ حقيقي، وعملٌ قائم، وموقعٌ كان عليه أن يكفّ عن الشبه بثيمه. قدتُ إعادة التصميم — 67 من كوميتات المشروع الـ85 لي — عبر اللغة البصرية، ونظام الطباعة، وهيكلة الخدمات، ومصداقية معارض المشاريع."
                  />
                </Lead>
                <FactGrid
                  items={[
                    { label: <T en="Client" ar="العميل" />, value: <T en="Divano Bespoke Interiors — Dubai" ar="Divano Bespoke Interiors — دبي" /> },
                    { label: <T en="My role" ar="دوري" />, value: <T en="Design lead + front-end" ar="قيادة التصميم + الواجهة" /> },
                    { label: <T en="Team" ar="الفريق" />, value: <T en="With Santa Media" ar="مع فريق Santa Media" /> },
                    { label: <T en="Base" ar="الأساس" />, value: <T en="Static rebuild of a WordPress site" ar="بناء ثابت بديل عن ووردبريس" /> },
                    { label: <T en="Languages" ar="اللغات" />, value: <T en="English + Arabic (RTL)" ar="الإنجليزية + العربية (RTL)" /> },
                    { label: <T en="Build" ar="البناء" />, value: <T en="Vanilla HTML / CSS / JS" ar="HTML / CSS / JS صِرف" /> },
                  ]}
                />
                <Callout kicker={<T en="What was mine, and what was the team's" ar="ما كان لي، وما كان للفريق" />}>
                  <T
                    en="Mine: the page-by-page redesign (home, about, contact, projects, the editorial service pages), the typography system, the before/after honesty pass, the real-review replacement, and the services expansion. The team's: the original WordPress-to-static capture, the Arabic /ar/ mirror and its i18n wiring, performance and motion passes, and deployment."
                    ar="لي: إعادة التصميم صفحةً صفحة (الرئيسية، وعن الشركة، والتواصل، والمشاريع، وصفحات الخدمات التحريرية)، ونظام الطباعة، ومراجعة صدق «قبل/بعد»، واستبدال المراجعات الحقيقية، وتوسيع الخدمات. وللفريق: التحويل الأصلي من ووردبريس إلى موقعٍ ثابت، ومرآة /ar/ العربية ووصلات الترجمة، وجولات الأداء والحركة، والنشر."
                  />
                </Callout>
              </>
            ),
          },
          {
            kicker: <T en="The redesign" ar="إعادة التصميم" />,
            heading: <T en="From theme-shaped to editorial." ar="من شكل الثيم إلى التحرير." />,
            body: (
              <>
                <p>
                  <T
                    en="The inherited site said 'Interior Design' and looked like a template. The redesign reframed the offer itself — the hero now sells the full turnkey promise, 'From Concept to Completion: Design, Fit-Out, Joinery & Turnkey Solutions' — and rebuilt the pages around it: a redesigned home, about, contact, and projects, editorial service pages for each discipline, and two new subcontracted offerings (Smart Solutions and Flooring) written and designed from scratch. Placeholder testimonials went out; real Google reviews, by name, went in."
                    ar="الموقع الموروث كان يقول «تصميم داخلي» ويبدو قالباً. أعادت إعادةُ التصميم صياغةَ العرض نفسه — فالواجهة الآن تبيع وعد التسليم الكامل: «من الفكرة إلى الإنجاز: تصميم، تنفيذ، نجارة، وحلول تسليم مفتاح» — وأعادت بناء الصفحات حوله: رئيسيةٌ وعنّا وتواصلٌ ومشاريع أعيد تصميمها، وصفحاتُ خدماتٍ تحريرية لكل تخصّص، وخدمتان جديدتان بالتعاقد الفرعي (الحلول الذكية والأرضيات) كُتبتا وصُمّمتا من الصفر. وخرجت التوصيات الوهمية؛ ودخلت مراجعات Google حقيقية بأسماء أصحابها."
                  />
                </p>
                <Figure
                  label="Divano — home, redesigned"
                  caption={<T en="The editorial home: turnkey hero, project galleries, and named real reviews — screen export to add." ar="الرئيسية التحريرية: واجهة تسليم المفتاح، ومعارض المشاريع، ومراجعات حقيقية بأسماء — تُضاف لقطة الشاشة." />}
                />
              </>
            ),
          },
          {
            kicker: <T en="Typography" ar="الطباعة" />,
            heading: <T en="One typeface, two alphabets, zero external requests." ar="خطٌّ واحد، أبجديتان، وصفرُ طلبٍ خارجي." />,
            body: (
              <>
                <p>
                  <T
                    en="The inherited theme loaded fonts the way old WordPress themes do: 86 Google Fonts links across the site's 28 pages, feeding 50-plus scattered font-family rules. I replaced all of it with self-hosted type, then installed the client's licensed face — Shubbak (Archetype Foundry), eight weights, 232 KB of woff2 — which carries Latin and Arabic in one family with proper shaping. Both language editions now share one typographic voice, and the site makes zero external font requests."
                    ar="كان الثيم الموروث يُحمّل الخطوط كما تفعل ثيمات ووردبريس القديمة: 86 رابط Google Fonts عبر صفحات الموقع الـ28، تُغذّي أكثر من 50 قاعدة font-family متناثرة. استبدلتُ ذلك كلَّه بخطوطٍ مستضافةٍ ذاتياً، ثم ركّبتُ خطّ العميل المرخَّص — Shubbak من Archetype Foundry، بثمانية أوزان و232 كيلوبايت woff2 — وهو يحمل اللاتينية والعربية في عائلةٍ واحدة بتشكيلٍ سليم. فصارت النسختان اللغويتان تتشاركان صوتاً طباعياً واحداً، وصار الموقع بلا أيّ طلب خطوطٍ خارجي."
                  />
                </p>
                <DesignDecision
                  number={1}
                  title={<T en="Alias the old families instead of editing fifty rules." ar="تعريف العائلات القديمة بدل تحرير خمسين قاعدة." />}
                  challenge={
                    <T
                      en="The theme's CSS referenced its old families — Dosis, Cormorant Garamond, Open Sans, Almarai and more — in 50+ scattered rules. Editing every rule risks breaking pages one by one, and icon fonts must survive untouched."
                      ar="كانت أنماط الثيم تُشير إلى عائلاتها القديمة — Dosis وCormorant Garamond وOpen Sans وAlmarai وغيرها — في أكثر من 50 قاعدة متناثرة. وتحرير كلّ قاعدةٍ يخاطر بكسر الصفحات واحدةً واحدة، وخطوط الأيقونات يجب أن تنجو بلا مساس."
                    />
                  }
                  decision={
                    <T
                      en="Alias every legacy family name onto the same self-hosted woff2 files via @font-face, so the scattered rules inherit the new face without a single edit."
                      ar="تعريفُ كلّ اسم عائلةٍ قديم على ملفات woff2 المستضافة نفسها عبر @font-face، فترث القواعدُ المتناثرة الخطَّ الجديد دون تعديلٍ واحد."
                    />
                  }
                  outcome={
                    <T
                      en="One swap point for the whole site — when the licensed Shubbak arrived, installing it was dropping files in and changing one variable. Then a re-fit pass: the old tracking values were tuned for a condensed face, so uppercase tracking came down ~40%, faux italics were killed (Shubbak ships upright only), and display line-heights opened for Kufic ascenders."
                      ar="نقطةُ تبديلٍ واحدة للموقع كلّه — فلمّا وصل Shubbak المرخَّص كان تركيبُه إسقاطَ ملفاتٍ وتغييرَ متغيّرٍ واحد. ثم جولةُ إعادة معايرة: قيمُ التتبّع القديمة كانت مضبوطةً لخطٍّ مكثَّف، فخُفّض تتبّع الحروف الكبيرة نحو 40٪، وأُلغي المائل المزيّف (Shubbak يُشحن قائماً فقط)، وفُتحت ارتفاعات أسطر العرض لصواعد الخط الكوفي."
                    />
                  }
                />
              </>
            ),
          },
          {
            kicker: <T en="The honesty pass" ar="مراجعة الصدق" />,
            heading: <T en="A before/after only ships if it's real." ar="«قبل/بعد» لا يُنشر إلا إذا كان حقيقياً." />,
            body: (
              <>
                <Lead>
                  <T
                    en="Interior-design portfolios live or die on before/after sliders — and most cheat, pairing frames that were never the same room."
                    ar="معارضُ التصميم الداخلي تحيا أو تموت على منزلقات «قبل/بعد» — وأكثرُها يغشّ، فيقرن إطارين لم يكونا الغرفة نفسها قطّ."
                  />
                </Lead>
                <p>
                  <T
                    en="I rebuilt every pair in the galleries against the actual photo sets, under one rule: a pair ships only when both frames share real architectural landmarks, so the wipe lines up. Pairs with no photographic partner were dropped, not faked. The pass also removed work that wasn't the client's from the galleries, confined AI-generated imagery to the decorative hero only — real photography everywhere it stands as evidence — and balanced crew photos to a proof point instead of a flood."
                    ar="أعدتُ بناء كلّ زوجٍ في المعارض على مجموعات الصور الفعلية، بقاعدةٍ واحدة: لا يُنشر الزوج إلا إذا اشترك الإطاران في معالم معماريةٍ حقيقية، كي يستقيم المسح بينهما. والأزواج التي لا شريك لها فوتوغرافياً حُذفت ولم تُفبرك. وأزالت المراجعةُ أيضاً أعمالاً ليست للعميل من المعارض، وحصرت صورَ الذكاء الاصطناعي في الواجهة الزخرفية فقط — والتصوير الحقيقي في كلّ موضعٍ يقوم فيه مقام الدليل — ووازنت صور الفريق لتكون نقطة إثباتٍ لا فيضاً."
                  />
                </p>
                <Figure
                  label="Divano — before/after gallery"
                  caption={<T en="Rebuilt pairs: both frames share real landmarks, so the wipe tells the truth — screen export to add." ar="أزواج أعيد بناؤها: الإطاران يتشاركان معالم حقيقية، فيصدُق المسح — تُضاف لقطة الشاشة." />}
                />
                <Callout kicker={<T en="Why it matters" ar="لماذا يهمّ" />}>
                  <T
                    en="A fit-out client is about to trust this firm with their home. The galleries are the argument. A slider that doesn't line up — or a 'project' that isn't theirs — costs more trust than ten beautiful pages can buy back."
                    ar="عميلُ التنفيذ يوشك أن يأتمن هذه الشركة على بيته. والمعارض هي الحجّة. ومنزلقٌ لا يستقيم — أو «مشروعٌ» ليس لهم — يُكلّف من الثقة أكثر مما تشتريه عشرُ صفحاتٍ جميلة."
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
                    en="Divano taught me that a client site's hardest problems are rarely the visible ones. The redesign mattered, but the project's real leverage was in two quiet layers: type that behaves like one voice across two alphabets, and image galleries a skeptical customer can test. Both are the kind of work nobody requests and everybody feels."
                    ar="علّمني Divano أن أصعب مشكلات موقع العميل نادراً ما تكون المرئية. أهمّت إعادةُ التصميم، لكن الرافعة الحقيقية للمشروع كانت في طبقتين هادئتين: طباعةٍ تتصرّف كصوتٍ واحدٍ عبر أبجديتين، ومعارضِ صورٍ يستطيع عميلٌ مرتابٌ اختبارها. وكلاهما من ذلك العمل الذي لا يطلبه أحد ويشعر به الجميع."
                  />
                </p>
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
