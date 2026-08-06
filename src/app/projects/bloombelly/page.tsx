import type { Metadata } from "next";
import {
  CaseStudyLayout,
  ADR,
  Callout,
  DesignDecision,
  FactGrid,
  Figure,
  Lead,
  Persona,
  PhoneDemo,
  Priorities,
} from "@/components/case-study/CaseStudyLayout";
import { BloomBellyDiagram } from "@/components/case-study/ArchitectureDiagram";
import {
  StructuredData,
  caseStudyStructuredData,
} from "@/components/site/StructuredData";
import { T } from "@/components/i18n/T";
import { siteUrl } from "@/lib/base-path";

const DESCRIPTION =
  "Arabic-first maternal health app. Designed in Figma, built in Flutter — three AI models behind one bilingual RTL interface.";

export const metadata: Metadata = {
  title: "BloomBelly — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "BloomBelly — three AIs behind one app",
    description: DESCRIPTION,
    type: "article",
    url: siteUrl("/projects/bloombelly"),
  },
  twitter: {
    card: "summary_large_image",
    title: "BloomBelly — three AIs behind one app",
    description: DESCRIPTION,
  },
};

export default function BloomBellyPage() {
  return (
    <>
      <StructuredData
        data={caseStudyStructuredData({
          name: "BloomBelly",
          description: DESCRIPTION,
          path: "/projects/bloombelly",
          year: "2025",
        })}
      />
      <CaseStudyLayout
      theme={{
        accent: "#BE8FE6",
        accentDeep: "#D6BAF2",
        accentSoft: "rgba(190, 143, 230, 0.16)",
        glow: "rgba(150, 100, 205, 0.30)",
        diagramAccent: "#9B5FC9",
        diagramAccentDeep: "#7A4AA8",
        diagramAccentSoft: "#EEE3F7",
      }}
      meta={{
        eyebrow: <T en="UI/UX · AI Healthcare · Graduation" ar="UI/UX · ذكاء اصطناعي صحّي · تخرّج" />,
        status: <T en="Graduation project — 2025" ar="مشروع تخرّج — 2025" />,
        title: <T en="BloomBelly — three AIs behind one app." ar="BloomBelly — ثلاثة نماذج ذكاء اصطناعي خلف تطبيقٍ واحد." />,
        lede: (
          <T
            en="An Arabic-first maternal and child health companion. Designed in Figma before a line of Flutter was written — full RTL, bilingual, four user roles — then backed by three specialized AI models orchestrated by Flask."
            ar="رفيقٌ لصحة الأم والطفل بالعربية أولاً. صُمّم في Figma قبل كتابة أي سطر Flutter — دعمٌ كامل لليمين-لليسار، ثنائي اللغة، أربعة أدوار للمستخدمين — ثم مدعومٌ بثلاثة نماذج ذكاء اصطناعي متخصّصة ينسّقها Flask."
          />
        ),
        year: "2025",
        role: <T en="UI/UX Designer + Developer" ar="مصمّمة UI/UX + مطوّرة" />,
        stack: [
          "Figma",
          "Flutter",
          "Dart",
          "Python",
          "Flask",
          "Supabase",
          "Google Gemini",
          "LoRA",
          "Random Forest",
          "IEEE 830",
        ],
        links: [
          {
            label: <T en="Figma prototype" ar="نموذج Figma" />,
            href: "https://figma.com/design/dxpDoQBHXpv6tiysUVUpSA",
            external: true,
            primary: true,
          },
        ],
      }}
      metrics={[
        { value: <T en="Built" ar="مبنيّ" />, label: <T en="Real bilingual app — designed and built end-to-end, not a demo" ar="تطبيقٌ ثنائي اللغة حقيقي — مُصمَّم ومبنيّ من البداية للنهاية، لا عرض" /> },
        { value: <T en="3 models" ar="3 نماذج" />, label: <T en="Vision, chat, and nutrition behind one interface" ar="رؤية، ومحادثة، وتغذية خلف واجهةٍ واحدة" /> },
        { value: <T en="Arabic-first" ar="عربي أولاً" />, label: <T en="Designed in RTL before any Flutter code" ar="صُمّم بالـRTL قبل أي كود Flutter" /> },
        { value: <T en="Refuses" ar="يرفض" />, label: <T en="Calibrated to defer to a doctor rather than guess" ar="مُعاير ليُحيل إلى طبيبة بدل التخمين" /> },
      ]}
      sections={[
        {
          kicker: <T en="Overview" ar="نظرة عامة" />,
          heading: <T en="What it is, and what I owned." ar="ما هو، وما الذي تولّيته." />,
          body: (
            <>
              <Lead>
                <T
                  en="BloomBelly is an Arabic-first health companion for expectant and new mothers: an AI chatbot, a medical-image helper, and a nutrition guide, behind one bilingual interface. It was my graduation project at ASPU — and the brief was to ship a real product, not a slide deck."
                  ar="BloomBelly رفيقٌ صحّي بالعربية أولاً للحوامل والأمّهات الجُدد: روبوت محادثةٍ ذكي، ومساعدٌ للصور الطبية، ودليلٌ تغذوي، خلف واجهةٍ واحدة ثنائية اللغة. كان مشروع تخرّجي في ASPU — وكان المطلوب إطلاق منتجٍ حقيقي، لا عرضَ شرائح."
                />
              </Lead>
              <FactGrid
                items={[
                  { label: <T en="Role" ar="الدور" />, value: <T en="Designer + developer (solo)" ar="مصمّمة + مطوّرة (منفردة)" /> },
                  { label: <T en="Timeline" ar="الإطار الزمني" />, value: <T en="Graduation project · 2025" ar="مشروع تخرّج · 2025" /> },
                  { label: <T en="Platform" ar="المنصّة" />, value: "Flutter · iOS + Android" },
                  { label: <T en="Users" ar="المستخدمون" />, value: <T en="Arabic-speaking mothers" ar="أمّهات ناطقات بالعربية" /> },
                  { label: <T en="Scope" ar="النطاق" />, value: <T en="Research → Figma → Flutter → AI" ar="بحث ← Figma ← Flutter ← ذكاء اصطناعي" /> },
                  { label: <T en="User roles" ar="أدوار المستخدمين" />, value: <T en="Four, designed separately" ar="أربعة، صُمّمت منفصلةً" /> },
                ]}
              />
            </>
          ),
        },
        {
          kicker: <T en="Problem" ar="المشكلة" />,
          heading: (
            <T
              en="Arabic-first maternal health — in a market of English-first tools."
              ar="صحة أمومةٍ بالعربية أولاً — في سوقٍ أدواته بالإنجليزية أولاً."
            />
          ),
          body: (
            <>
              <p>
                <T
                  en="For an expectant mother in the Arab world, the gap between an Arabic search query and a trustworthy clinical answer is enormous. English-language tools dominate digital health. The few Arabic resources that exist are static articles or generic chatbots that hallucinate medical advice — which, in maternal care, is worse than no answer at all."
                  ar="بالنسبة لحاملٍ في العالم العربي، الفجوة بين استعلام بحثٍ عربي وإجابةٍ سريرية موثوقة هائلة. تهيمن الأدوات الإنجليزية على الصحة الرقمية. والموارد العربية القليلة الموجودة إمّا مقالاتٌ ثابتة أو روبوتاتٌ عامة تهلوس نصائح طبية — وهو في رعاية الأمومة أسوأ من لا إجابةٍ على الإطلاق."
                />
              </p>
              <p>
                <T
                  en="The brief was deliberately ambitious: a real, Arabic-first health app for mothers in Damascus. That meant solving the language problem at the design level first, and the engineering level second."
                  ar="كان المطلوب طموحاً عن قصد: تطبيق صحّةٍ حقيقي بالعربية أولاً لأمّهات دمشق. وهذا يعني حلّ مشكلة اللغة على مستوى التصميم أولاً، ثم على مستوى الهندسة ثانياً."
                />
              </p>
            </>
          ),
        },
        {
          kicker: <T en="Research" ar="البحث" />,
          heading: <T en="Mapping the journeys before designing the screens." ar="رسم الرحلات قبل تصميم الشاشات." />,
          body: (
            <>
              <p>
                <T
                  en="Before any UI, I mapped four distinct user journeys in Figma and studied where existing Arabic health tools break down. Two findings shaped everything that followed."
                  ar="قبل أي واجهة، رسمتُ أربع رحلات مستخدمٍ متمايزة في Figma ودرستُ أين تنهار أدوات الصحة العربية الموجودة. شكّل اكتشافان كلّ ما تلا."
                />
              </p>
              <p>
                <T
                  en={<><strong>Language has registers.</strong> Medical information needs the precision of Modern Standard Arabic; a mother asking about her pregnancy needs warmth. The same app has to speak both.</>}
                  ar={<><strong>للّغة مستويات.</strong> المعلومة الطبية تحتاج دقّة العربية الفصحى؛ والأمّ التي تسأل عن حملها تحتاج دفئاً. والتطبيق نفسه عليه أن يتحدّث الاثنين.</>}
                />
              </p>
              <p>
                <T
                  en={<><strong>A wrong answer is a safety risk, not a UX papercut.</strong>{" "}A confident chatbot that invents a dosage is a liability. The product had to be designed to know — and show — when it doesn&apos;t know.</>}
                  ar={<><strong>الإجابة الخاطئة خطرٌ على السلامة، لا مجرّد عثرة تجربة.</strong>{" "}روبوتٌ واثق يخترع جرعةً مسؤوليةٌ خطيرة. كان على المنتج أن يُصمَّم ليعرف — ويُظهر — متى لا يعرف.</>}
                />
              </p>
              <Figure
                label="User journeys"
                caption={<T en="Four user-journey maps from Figma — add export" ar="أربع خرائط رحلات مستخدمٍ من Figma — يُضاف التصدير" />}
              />
            </>
          ),
        },
        {
          kicker: <T en="Users & personas" ar="المستخدمون والـ Personas" />,
          heading: <T en="Who I designed for." ar="لمن صمّمتُ." />,
          body: (
            <>
              <p>
                <T
                  en="From the four journeys I mapped in Figma, I distilled the people behind them into personas — each with a one-line story, a goal, and the frustration the product had to answer."
                  ar="من الرحلات الأربع التي رسمتها في Figma، استخلصتُ الأشخاص خلفها إلى personas — لكلٍّ قصةٌ من سطرٍ، وهدف، والإحباط الذي كان على المنتج أن يجيبه."
                />
              </p>

              <Persona
                initial={<T en="L" ar="ل" />}
                name={<T en="Lina — first-time expectant mother" ar="لينا — حاملٌ لأوّل مرّة" />}
                role={<T en="Primary user · 28 · Damascus" ar="المستخدمة الأساسية · 28 · دمشق" />}
                story={
                  <T
                    en="I want to ask about my pregnancy in Arabic and trust the answer — not get stuck between a stiff article and a chatbot that might be wrong."
                    ar="أريد أن أسأل عن حملي بالعربية وأثق بالجواب — لا أن أعلق بين مقالٍ متيبّس وروبوتٍ قد يخطئ."
                  />
                }
                goals={
                  <T
                    en="Clear, warm guidance for each pregnancy week; a quick read on whether a symptom needs a doctor."
                    ar="إرشادٌ واضحٌ ودافئ لكل أسبوع حمل؛ وقراءةٌ سريعة لما إذا كان عَرَضٌ ما يحتاج طبيبة."
                  />
                }
                frustrations={
                  <T
                    en="English-first apps that don't speak her language; Arabic chatbots that confidently invent medical advice."
                    ar="تطبيقاتٌ إنجليزية أولاً لا تتحدّث لغتها؛ وروبوتاتٌ عربية تخترع نصائح طبية بثقة."
                  />
                }
              />

              <Persona
                initial={<T en="R" ar="ر" />}
                name={<T en="Dr. Rana — OB-GYN the app defers to" ar="د. رنا — طبيبةُ نساءٍ يُحيل إليها التطبيق" />}
                role={<T en="Secondary user · clinician" ar="مستخدمة ثانوية · طبيبة" />}
                story={
                  <T
                    en="I want the app to send my patient to me when it isn't sure — so she arrives informed, not misinformed."
                    ar="أريد أن يُحيل التطبيق مريضتي إليّ حين لا يكون متأكّداً — فتصل مطّلعةً، لا مُضلَّلة."
                  />
                }
                goals={
                  <T
                    en="Patients who arrive with good questions, not myths; a tool that knows its limits."
                    ar="مريضاتٌ يأتين بأسئلةٍ جيدة، لا بخرافات؛ وأداةٌ تعرف حدودها."
                  />
                }
                frustrations={
                  <T
                    en="Undoing scary misinformation patients picked up from unreliable sources."
                    ar="تفنيد معلوماتٍ مخيفة مغلوطة التقطتها المريضات من مصادر غير موثوقة."
                  />
                }
              />

              <Callout kicker={<T en="Problem statements" ar="بيانات المشكلة" />}>
                <T
                  en={<><strong>Lina</strong> is a first-time expectant mother who needs trustworthy maternal guidance in Arabic, because a confidently wrong answer in maternal care is a safety risk — not a UX papercut. <strong>Dr. Rana</strong> needs the app to defer to her when its confidence is low, because an AI that guesses erodes the trust the whole product depends on.</>}
                  ar={<><strong>لينا</strong> حاملٌ لأوّل مرّة تحتاج إرشاداً أموميّاً موثوقاً بالعربية، لأن إجابةً واثقةً خاطئة في رعاية الأمومة خطرٌ على السلامة — لا مجرّد عثرة تجربة. و<strong>د. رنا</strong> تحتاج أن يُحيل التطبيق إليها حين تنخفض ثقته، لأن ذكاءً اصطناعياً يخمّن يُضعف الثقة التي يقوم عليها المنتج كلّه.</>}
                />
              </Callout>
            </>
          ),
        },
        {
          kicker: <T en="Design strategy" ar="استراتيجية التصميم" />,
          heading: (
            <T
              en="Trust was the design constraint everything bent around."
              ar="كانت الثقة القيد التصميمي الذي انحنى حوله كل شيء."
            />
          ),
          body: (
            <>
              <Lead>
                <T
                  en="Every decision traced back to one question: would a mother trust this with a question about her pregnancy? That ruled the model choices, the tone, and the failure states."
                  ar="كلّ قرارٍ يعود إلى سؤالٍ واحد: هل تأتمن أمٌّ هذا على سؤالٍ عن حملها؟ ذلك حكم اختيار النماذج، والنبرة، وحالات الفشل."
                />
              </Lead>
              <FactGrid
                items={[
                  { label: <T en="Goal" ar="الهدف" />, value: <T en="A health companion mothers trust in Arabic" ar="رفيقٌ صحّي تأتمنه الأمّهات بالعربية" /> },
                  { label: <T en="Hypothesis" ar="الفرضية" />, value: <T en="Specialized models + an explicit refusal beat one general model" ar="نماذج متخصّصة + رفضٌ صريح يتفوّقان على نموذجٍ عام واحد" /> },
                  { label: <T en="Priority" ar="الأولوية" />, value: <T en="Safety & tone over answer coverage" ar="السلامة والنبرة قبل تغطية الإجابات" /> },
                  { label: <T en="Tradeoff" ar="المفاضلة" />, value: <T en="Fewer impressive demo answers, in exchange for trust" ar="إجابات عرضٍ مبهرة أقل، مقابل الثقة" /> },
                ]}
              />
            </>
          ),
        },
        {
          kicker: <T en="Design process" ar="عملية التصميم" />,
          heading: <T en="RTL isn't a checkbox. It's a design language." ar="اليمين-لليسار ليس خانة تأشير. إنه لغة تصميم." />,
          body: (
            <>
              <p>
                <T
                  en="Every screen lived in Figma — in Arabic — before a single Flutter widget existed. Designing Arabic-first surfaced decisions that English-first tools never force you to make."
                  ar="كلّ شاشةٍ عاشت في Figma — بالعربية — قبل وجود أي عنصر Flutter واحد. التصميم بالعربية أولاً أظهر قراراتٍ لا تُجبرك أدوات الإنجليزية أولاً على اتخاذها أبداً."
                />
              </p>

              <DesignDecision
                number={1}
                title={<T en="MSA for medical, Levantine for conversational." ar="الفصحى للطبّي، والشامية للمحادثة." />}
                challenge={
                  <T
                    en="Medical information needs the precision of Modern Standard Arabic. But a chatbot that answers in stiff MSA feels cold — the wrong tone for a mother asking about her pregnancy."
                    ar="المعلومة الطبية تحتاج دقّة العربية الفصحى. لكن روبوتاً يجيب بفصحى متيبّسة يبدو بارداً — نبرةٌ خاطئة لأمٍّ تسأل عن حملها."
                  />
                }
                decision={
                  <T
                    en={<><strong>MSA for all medical content</strong> — diagnoses, nutrition data, image descriptions. A{" "}<strong>warmer, Levantine-leaning register</strong> for the chatbot&apos;s conversational surface.</>}
                    ar={<><strong>الفصحى لكل المحتوى الطبي</strong> — التشخيصات، وبيانات التغذية، وأوصاف الصور. و<strong>مستوًى أدفأ يميل للشامية</strong> لسطح المحادثة في الروبوت.</>}
                  />
                }
                outcome={
                  <T
                    en="The distinction is invisible to users but felt immediately. The chatbot reads like a knowledgeable friend, not a medical disclaimer."
                    ar="التمييز غير مرئيٍّ للمستخدمين لكنه مُحَسٌّ فوراً. يُقرأ الروبوت كصديقةٍ عليمة، لا كإخلاء مسؤوليةٍ طبي."
                  />
                }
              />

              <Callout kicker={<T en="Design constraint" ar="قيد التصميم" />}>
                <T
                  en="Mixed content was the hardest rendering problem: Arabic sentences containing English drug names, dosages, and abbreviations. Flutter's BiDi engine needed explicit direction markers for every mixed string — tested across iOS and Android on real devices."
                  ar="كان المحتوى المختلط أصعب مشكلة عرض: جملٌ عربية تحتوي أسماء أدويةٍ وجرعاتٍ واختصاراتٍ إنجليزية. احتاج محرّك BiDi في Flutter علاماتِ اتجاهٍ صريحة لكل نصٍّ مختلط — اختُبر على iOS وAndroid على أجهزةٍ حقيقية."
                />
              </Callout>

              <PhoneDemo
                screens={[
                  {
                    src: "/work/bloombelly/login.webp",
                    alt: "BloomBelly login screen — cursive logo over a lavender watercolor ground, bilingual Arabic/English with full RTL",
                    title: "Bilingual, Arabic-first",
                    titleAr: "ثنائيّ اللغة، عربيٌّ أولاً",
                    blurb: "Full Arabic and English with complete RTL — designed Arabic-first, so neither language reads like an afterthought.",
                    blurbAr: "عربيّة وإنجليزية كاملتان مع دعم RTL تامّ — صُمّم بالعربية أولاً، فلا تبدو أيّ لغةٍ إضافةً لاحقة.",
                  },
                  {
                    src: "/work/bloombelly/home.webp",
                    alt: "BloomBelly home — week 38 of pregnancy with a fruit size comparison and bottom navigation",
                    title: "Your week, at a glance",
                    titleAr: "أسبوعكِ بلمحة",
                    blurb: "The pregnancy week, a friendly size comparison, and what's changing — the home screen meets a mother where she is.",
                    blurbAr: "أسبوع الحمل، ومقارنة حجمٍ ودودة، وما الذي يتغيّر — الشاشة الرئيسية تلتقي الأمّ حيث هي.",
                  },
                  {
                    src: "/work/bloombelly/tracker.webp",
                    alt: "BloomBelly pregnancy tracker — week selector with the baby's weight and length",
                    title: "Track every week",
                    titleAr: "تتبّعي كل أسبوع",
                    blurb: "A week-by-week tracker with the baby's weight and length, written in clear, warm Arabic.",
                    blurbAr: "متتبّعٌ أسبوعاً بأسبوع بوزن الطفل وطوله، بعربيّةٍ واضحة ودافئة.",
                  },
                  {
                    src: "/work/bloombelly/nutrition.webp",
                    alt: "BloomBelly growth assessment — weight and head-circumference inputs with percentile results",
                    title: "Growth, checked by a model",
                    titleAr: "النموّ، يراجعه نموذج",
                    blurb: "Enter weight and head circumference; a Random Forest model returns percentile guidance — never a diagnosis.",
                    blurbAr: "أدخلي الوزن ومحيط الرأس؛ يعيد نموذج Random Forest إرشاداً مئوياً — لا تشخيصاً.",
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
              en="One Flutter app. Three specialized models. One Flask brain."
              ar="تطبيق Flutter واحد. ثلاثة نماذج متخصّصة. عقل Flask واحد."
            />
          ),
          body: (
            <>
              <p>
                <T
                  en="I treated the AI layer as three independent capabilities, because real maternal questions don't fit one model. Flask routes incoming requests to the right model based on intent classification, then formats Arabic responses with source citations. Supabase handles auth, profile, pregnancy-week tracking, and stores conversation history for continuity between sessions."
                  ar="تعاملتُ مع طبقة الذكاء الاصطناعي كثلاث قدراتٍ مستقلّة، لأن أسئلة الأمومة الحقيقية لا تناسب نموذجاً واحداً. يوجّه Flask الطلبات الواردة إلى النموذج المناسب بناءً على تصنيف النيّة، ثم يُنسّق الردود العربية مع استشهاداتٍ بالمصدر. ويتولّى Supabase المصادقة والملفّ الشخصي وتتبّع أسبوع الحمل، ويُخزّن سجلّ المحادثات للاستمرارية بين الجلسات."
                />
              </p>

              <BloomBellyDiagram />

              <FactGrid
                items={[
                  { label: <T en="Imaging model" ar="نموذج التصوير" />, value: "Google Gemini" },
                  { label: <T en="Chatbot model" ar="نموذج المحادثة" />, value: <T en="LoRA-tuned LLM" ar="نموذج لغوي مضبوط بـLoRA" /> },
                  { label: <T en="Nutrition model" ar="نموذج التغذية" />, value: "Random Forest" },
                  { label: <T en="Orchestrator" ar="المنسّق" />, value: "Python · Flask" },
                  { label: <T en="Auth & data" ar="المصادقة والبيانات" />, value: "Supabase" },
                  { label: <T en="Client" ar="العميل" />, value: "Flutter · iOS + Android" },
                ]}
              />

              <ADR
                number={1}
                title={<T en="Three models, each with its own purpose-built screen." ar="ثلاثة نماذج، لكلٍّ شاشةٌ مبنية لغرضها." />}
                context={
                  <T
                    en="A single fine-tuned LLM could answer questions, classify nutrition, and describe images. One model, one screen, one deployment surface."
                    ar="نموذج لغوي واحد مضبوط يمكنه الإجابة وتصنيف التغذية ووصف الصور. نموذج واحد، شاشة واحدة، سطح نشرٍ واحد."
                  />
                }
                decision={
                  <T
                    en={<>Three specialized models — Gemini for vision, a LoRA-tuned transformer for Q&amp;A, Random Forest for nutrition. Each gets a <strong>purpose-built screen</strong> designed around how that capability is actually used: camera for imaging, chat for Q&amp;A, a guided form for nutrition.</>}
                    ar={<>ثلاثة نماذج متخصّصة — Gemini للرؤية، ومحوّل مضبوط بـLoRA للأسئلة، وRandom Forest للتغذية. لكلٍّ <strong>شاشةٌ مبنية لغرضها</strong> مصمّمة حول كيفية استخدام تلك القدرة فعلاً: كاميرا للتصوير، ومحادثة للأسئلة، ونموذجٌ موجَّه للتغذية.</>}
                  />
                }
                consequences={
                  <T
                    en="Each model is auditable in isolation — critical for a healthcare context. The UX is cleaner too: users pick the right tool for the question instead of one modal that tries to do everything."
                    ar="كلّ نموذجٍ قابلٌ للتدقيق منفرداً — أمرٌ حاسم في سياقٍ صحّي. والتجربة أنظف أيضاً: يختار المستخدمون الأداة المناسبة للسؤال بدل نافذةٍ واحدة تحاول فعل كل شيء."
                  />
                }
              />

              <ADR
                number={2}
                title={<T en="Supabase + Flask for session continuity." ar="Supabase + Flask لاستمرارية الجلسات." />}
                context={
                  <T
                    en="Firebase is the default for student healthcare apps. Cheaper start, faster auth, no servers to manage."
                    ar="Firebase هو الخيار الافتراضي لتطبيقات الصحة الطلابية. بدايةٌ أرخص، مصادقةٌ أسرع، لا خوادم لإدارتها."
                  />
                }
                decision={
                  <T
                    en={<>Postgres-backed Supabase + a Flask orchestrator. The clinical context required real relational data (cycles, conditions, visits) and{" "}<strong>conversation history that persists</strong> across sessions.</>}
                    ar={<>Supabase مدعومٌ بـPostgres + منسّق Flask. تطلّب السياق السريري بياناتٍ علائقية حقيقية (دورات، حالات، زيارات) و<strong>سجلّ محادثاتٍ يستمرّ</strong> عبر الجلسات.</>}
                  />
                }
                consequences={
                  <T
                    en="Users don't repeat themselves to the chatbot — that continuity is the experience. RLS gave per-profile isolation for free; the operational overhead was worth it."
                    ar="لا يُكرّر المستخدمون أنفسهم للروبوت — تلك الاستمرارية هي التجربة. ومنح RLS عزلاً لكل ملفٍّ شخصي مجاناً؛ وكان العبء التشغيلي يستحقّ."
                  />
                }
              />
            </>
          ),
        },
        {
          kicker: <T en="Challenges" ar="التحدّيات" />,
          heading: <T en="What was hard, and the tradeoffs I took." ar="ما كان صعباً، والمفاضلات التي اتخذتها." />,
          body: (
            <>
              <p>
                <T
                  en={<><strong>Arabic rendering, not the AI, was the long pole.</strong>{" "}Calling a model is a few lines of code. Numbers, punctuation, and English drug names inside Arabic sentences each needed explicit BiDi handling, verified on real devices across both platforms.</>}
                  ar={<><strong>كان عرض العربية، لا الذكاء الاصطناعي، هو العقبة الكبرى.</strong>{" "}استدعاء نموذجٍ بضعة أسطر برمجية. أما الأرقام وعلامات الترقيم وأسماء الأدوية الإنجليزية داخل الجمل العربية فاحتاج كلٌّ منها معالجة BiDi صريحة، تحقّقتُ منها على أجهزةٍ حقيقية على المنصّتين.</>}
                />
              </p>

              <ADR
                number={3}
                title={<T en="Calibrated refusals — designed as a first-class state, not an error." ar="رفضٌ معاير — مُصمَّم كحالةٍ من الدرجة الأولى، لا كخطأ." />}
                context={
                  <T
                    en="A confident LLM that hallucinates dosages is dangerous in maternal care. Generic Arabic chatbots fail badly here."
                    ar="نموذجٌ لغوي واثق يهلوس الجرعات خطيرٌ في رعاية الأمومة. والروبوتات العربية العامة تفشل فشلاً ذريعاً هنا."
                  />
                }
                decision={
                  <T
                    en={<>Below a confidence threshold, the chatbot returns{" "}<strong>&ldquo;استشيري طبيبتك / Consult your doctor&rdquo;</strong>{" "}instead of guessing — designed in Figma as a{" "}<strong>warm, non-error state</strong>, not a red warning box.</>}
                    ar={<>تحت عتبة ثقةٍ معيّنة، يردّ الروبوت بـ{" "}<strong>«استشيري طبيبتك»</strong>{" "}بدل التخمين — مصمَّمةً في Figma كـ<strong>حالةٍ دافئة غير خطأ</strong>، لا صندوق تحذيرٍ أحمر.</>}
                  />
                }
                consequences={
                  <T
                    en="Trust over benchmark. Fewer impressive demo answers, but the product is safe to put in front of real mothers. The design treatment of the refusal mattered as much as the threshold."
                    ar="الثقة قبل المقياس. إجابات عرضٍ مبهرة أقل، لكن المنتج آمنٌ ليوضع أمام أمّهاتٍ حقيقيات. وعالجَ التصميمُ الرفضَ بأهمّيةٍ موازية للعتبة نفسها."
                  />
                }
              />
            </>
          ),
        },
        {
          kicker: <T en="Outcomes" ar="النتائج" />,
          heading: <T en="A real, defensible product — and a way of working." ar="منتجٌ حقيقي قابل للدفاع — وطريقة عمل." />,
          body: (
            <>
              <p>
                <T
                  en="BloomBelly shipped as a working Arabic-first app and was the basis of my graduation project: three AI capabilities behind one bilingual interface, calibrated to defer to a clinician rather than guess. No hallucinated medical advice by design."
                  ar="أُطلق BloomBelly كتطبيقٍ عربي أولاً يعمل، وكان أساس مشروع تخرّجي: ثلاث قدرات ذكاء اصطناعي خلف واجهةٍ واحدة ثنائية اللغة، مُعايرة لتُحيل إلى الطبيبة بدل التخمين. لا نصائح طبية مهلوسة، بحكم التصميم."
                />
              </p>
              <p>
                <T
                  en={<>The lasting result is a method. The Figma prototype — Arabic screens first, English second — became the spec; when something looked wrong in Flutter, the Figma file was the reference.{" "}<strong>Designing before building saved weeks</strong>, and it&apos;s how I&apos;ve worked on every product since.</>}
                  ar={<>النتيجة الباقية منهجية. صار نموذج Figma — شاشات عربية أولاً، إنجليزية ثانياً — هو المواصفة؛ وحين بدا شيءٌ خطأً في Flutter، كان ملف Figma هو المرجع.{" "}<strong>التصميم قبل البناء وفّر أسابيع</strong>، وهكذا عملتُ على كل منتجٍ منذ ذلك الحين.</>}
                />
              </p>
            </>
          ),
        },
        {
          kicker: <T en="Validation" ar="التحقّق" />,
          heading: <T en="How I'd test it with mothers." ar="كيف سأختبره مع الأمّهات." />,
          body: (
            <>
              <p>
                <T
                  en="The architecture is ready for evaluation; the evidence is the next step. The plan is a moderated usability study with Arabic-speaking mothers around three core tasks — ask a medical question, interpret a calibrated refusal, and run a growth check — then synthesize the sessions into an affinity diagram and translate the clusters into prioritized insights."
                  ar="البنية جاهزة للتقييم؛ والدليل هو الخطوة التالية. الخطة دراسة قابلية استخدامٍ موجَّهة مع أمّهاتٍ ناطقاتٍ بالعربية حول ثلاث مهامّ أساسية — طرح سؤالٍ طبي، وتفسير رفضٍ معاير، وإجراء فحص نموّ — ثم تركيب الجلسات في مخطّط تقارب (affinity diagram) وترجمة العناقيد إلى أفكارٍ مرتّبة الأولوية."
                />
              </p>
              <Priorities
                items={[
                  {
                    tier: "P0",
                    label: (
                      <T
                        en="The calibrated-refusal state must read as caring guidance, not an error — it's the moment trust is won or lost."
                        ar="حالة الرفض المعاير يجب أن تُقرأ كإرشادٍ عطوف، لا كخطأ — فهي اللحظة التي تُكسَب فيها الثقة أو تُفقَد."
                      />
                    ),
                  },
                  {
                    tier: "P1",
                    label: (
                      <T
                        en="Mixed Arabic/English medical terms must render correctly on real devices before any answer can be judged."
                        ar="المصطلحات الطبية المختلطة عربي/إنجليزي يجب أن تُعرَض صحيحةً على أجهزةٍ حقيقية قبل الحكم على أي إجابة."
                      />
                    ),
                  },
                  {
                    tier: "P2",
                    label: (
                      <T
                        en="Onboarding should explain the four user roles without a wall of text."
                        ar="التهيئة ينبغي أن تشرح أدوار المستخدمين الأربعة دون جدارٍ من النصّ."
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
                  en="BloomBelly taught me that in a regulated domain the interesting work is the restraint: deciding what the product should refuse to do. The calibrated-refusal pattern and the Figma-first method are the two things I've reused on every project since."
                  ar="علّمني BloomBelly أن العمل المثير للاهتمام في مجالٍ منظَّم هو الانضباط: تقرير ما الذي ينبغي للمنتج أن يرفض فعله. ونمطُ الرفض المعاير ومنهجُ Figma-أولاً هما الشيئان اللذان أعدتُ استخدامهما في كل مشروعٍ منذ ذلك الحين."
                />
              </p>
              <p>
                <T
                  en="If I took it further, the next step is real clinical validation and structured testing with mothers — the architecture is ready for it; the evidence is what a production health product would need next."
                  ar="لو مضيتُ به أبعد، فالخطوة التالية تحقّقٌ سريري حقيقي واختبارٌ منظَّم مع الأمّهات — البنية جاهزة لذلك؛ والدليل هو ما يحتاجه منتجٌ صحّي إنتاجي تالياً."
                />
              </p>
            </>
          ),
        },
      ]}
      nextProject={{
        label: <T en="CareConnect — one backend, three audiences →" ar="CareConnect — خادمٌ واحد، ثلاثة جماهير →" />,
        href: "/projects/careconnect",
      }}
      />
    </>
  );
}
