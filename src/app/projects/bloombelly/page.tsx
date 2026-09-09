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
  "An Arabic maternal health app, designed in Figma and written in Flutter, with three AI models behind one bilingual RTL interface.";

export const metadata: Metadata = {
  title: "BloomBelly — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "BloomBelly — three AI models behind one app",
    description: DESCRIPTION,
    type: "article",
    url: siteUrl("/projects/bloombelly"),
  },
  twitter: {
    card: "summary_large_image",
    title: "BloomBelly — three AI models behind one app",
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
        eyebrow: <T en="Mobile · AI · Graduation project" ar="جوال · ذكاء اصطناعي · مشروع تخرّج" />,
        status: <T en="Graduation project, 2025" ar="مشروع تخرّج، 2025" />,
        title: <T en="BloomBelly: three AI models behind one app." ar="BloomBelly: ثلاثة نماذج ذكاء اصطناعي خلف تطبيقٍ واحد." />,
        lede: (
          <T
            en="An Arabic health companion for pregnant women and new mothers. I drew every screen in Figma before writing any Flutter, in Arabic, with four user roles and full RTL. Behind it sit three specialized AI models that a Flask service routes between."
            ar="رفيق صحّي عربي للحوامل والأمّهات الجُدد. رسمتُ كل شاشة في Figma قبل أن أكتب أي Flutter، بالعربية، بأربعة أدوار للمستخدمين ودعمٍ كامل لليمين لليسار. وخلفه ثلاثة نماذج ذكاء اصطناعي متخصّصة توجّه بينها خدمة Flask."
          />
        ),
        year: "2025",
        role: <T en="Engineer + designer" ar="مهندسة + مصمّمة" />,
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
        { value: <T en="Built" ar="مبنيّ" />, label: <T en="A working bilingual app rather than a prototype" ar="تطبيق ثنائي اللغة يعمل، لا نموذجاً أولياً" /> },
        { value: <T en="3 models" ar="3 نماذج" />, label: <T en="Vision, chat and nutrition under one interface" ar="رؤية ومحادثة وتغذية تحت واجهة واحدة" /> },
        { value: <T en="Arabic-first" ar="عربي أولاً" />, label: <T en="Designed in RTL before any Flutter code existed" ar="صُمّم بالعربية قبل وجود أي كود Flutter" /> },
        { value: <T en="Refuses" ar="يرفض" />, label: <T en="Sends you to a doctor instead of guessing" ar="يحيلك إلى طبيبة بدل أن يخمّن" /> },
      ]}
      sections={[
        {
          kicker: <T en="Overview" ar="نظرة عامة" />,
          heading: <T en="What it is, and what I owned." ar="ما هو، وما الذي تولّيته." />,
          body: (
            <>
              <Lead>
                <T
                  en="It carries three capabilities: a chatbot, a medical-image helper and a nutrition guide. This was my graduation project at ASPU, where the requirement was a working product rather than a slide deck."
                  ar="يحمل ثلاث قدرات: روبوت محادثة، ومساعداً للصور الطبية، ودليل تغذية. وكان مشروع تخرّجي في ASPU، والمطلوب فيه منتجٌ يعمل لا عرض شرائح."
                />
              </Lead>
              <FactGrid
                items={[
                  { label: <T en="Role" ar="الدور" />, value: <T en="Designed and built it on my own" ar="صمّمته وبنيته وحدي" /> },
                  { label: <T en="Timeline" ar="الإطار الزمني" />, value: <T en="Graduation project · 2025" ar="مشروع تخرّج · 2025" /> },
                  { label: <T en="Platform" ar="المنصّة" />, value: "Flutter · iOS + Android" },
                  { label: <T en="Users" ar="المستخدمون" />, value: <T en="Arabic-speaking mothers" ar="أمّهات ناطقات بالعربية" /> },
                  { label: <T en="Scope" ar="النطاق" />, value: <T en="Research, Figma, Flutter, AI" ar="بحث، وFigma، وFlutter، وذكاء اصطناعي" /> },
                  { label: <T en="User roles" ar="أدوار المستخدمين" />, value: <T en="Four, designed separately" ar="أربعة، صُمّمت منفصلة" /> },
                ]}
              />
            </>
          ),
        },
        {
          kicker: <T en="Problem" ar="المشكلة" />,
          heading: (
            <T
              en="Arabic maternal health, in a market built in English."
              ar="صحّة أمومة بالعربية، في سوقٍ مبنيّ بالإنجليزية."
            />
          ),
          body: (
            <>
              <p>
                <T
                  en="If you're pregnant in the Arab world, there's a wide gap between the question you can type in Arabic and an answer you can trust. Digital health runs on English. The Arabic resources that do exist tend to be static articles, or general chatbots that will happily invent medical advice. In maternal care that's worse than getting no answer at all."
                  ar="إن كنتِ حاملاً في العالم العربي فهناك فجوة واسعة بين السؤال الذي تستطيعين كتابته بالعربية وجوابٍ تثقين به. الصحة الرقمية تعمل بالإنجليزية. والموارد العربية الموجودة إمّا مقالات ثابتة أو روبوتات عامة لا تتردّد في اختراع نصيحة طبية. وهذا في رعاية الأمومة أسوأ من ألّا تحصلي على جواب أصلاً."
                />
              </p>
              <p>
                <T
                  en="I picked an ambitious brief on purpose: a real Arabic health app for mothers in Damascus. That made the language problem a design problem first and an engineering problem second."
                  ar="اخترتُ مطلباً طموحاً عن قصد: تطبيق صحّة عربي حقيقي لأمّهات دمشق. وهذا جعل مشكلة اللغة مشكلةَ تصميمٍ أولاً ومشكلةَ هندسةٍ ثانياً."
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
                  en="Before any UI I mapped four user journeys in Figma and spent time on where the existing Arabic health tools fall apart. Two findings shaped everything after that."
                  ar="قبل أي واجهة رسمتُ أربع رحلات مستخدم في Figma، وأمضيتُ وقتاً على المواضع التي تتفكّك فيها أدوات الصحة العربية الموجودة. اكتشافان شكّلا كل ما جاء بعد ذلك."
                />
              </p>
              <p>
                <T
                  en={<><strong>Arabic has registers.</strong> Medical information needs the precision of Modern Standard Arabic. A woman asking about her own pregnancy needs warmth. The same app has to manage both.</>}
                  ar={<><strong>للعربية مستويات.</strong> المعلومة الطبية تحتاج دقّة الفصحى. والمرأة التي تسأل عن حملها تحتاج دفئاً. والتطبيق نفسه عليه أن يتولّى الاثنين.</>}
                />
              </p>
              <p>
                <T
                  en={<><strong>A wrong answer here is a safety problem.</strong>{" "}A chatbot that invents a dosage is a liability, so the product had to be built to recognize the edge of what it knows and say so.</>}
                  ar={<><strong>الجواب الخاطئ هنا مشكلة سلامة.</strong>{" "}الروبوت الذي يخترع جرعة مسؤوليةٌ خطيرة، فكان على المنتج أن يُبنى بحيث يعرف حدّ ما يعرفه ويقوله.</>}
                />
              </p>
              <Figure
                src="/work/bloombelly/usecase.webp"
                alt="BloomBelly use-case diagram, written in Arabic: the first-time-mother services, from sign-in and weight tracking to the AI chat bot"
                aspect="4 / 5"
                label="Use-case map"
                caption={<T en="The use-case map of the first-time-mother services, written in Arabic." ar="مخطط حالات الاستخدام لخدمات الأم لأول مرة، مكتوباً بالعربية." />}
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
                  en="From those four journeys I worked out who was actually behind them: a short story each, what they wanted, and the thing that was frustrating them."
                  ar="من تلك الرحلات الأربع استخرجتُ مَن يقف خلفها فعلاً: قصة قصيرة لكل واحدة، وما تريده، والشيء الذي كان يُحبطها."
                />
              </p>

              <Persona
                initial={<T en="L" ar="ل" />}
                name={<T en="Lina, pregnant for the first time" ar="لينا، حامل لأوّل مرّة" />}
                role={<T en="Primary user · 28 · Damascus" ar="المستخدمة الأساسية · 28 · دمشق" />}
                story={
                  <T
                    en="I want to ask about my pregnancy in Arabic and actually trust what comes back, instead of choosing between a stiff article and a chatbot that might be wrong."
                    ar="أريد أن أسأل عن حملي بالعربية وأثق فعلاً بما يعود إليّ، بدل أن أختار بين مقال متيبّس وروبوت قد يكون مخطئاً."
                  />
                }
                goals={
                  <T
                    en="Clear, warm guidance for each week of the pregnancy, and a quick read on whether a symptom needs a doctor."
                    ar="إرشاد واضح ودافئ لكل أسبوع من الحمل، وقراءة سريعة لما إذا كان عَرَضٌ ما يحتاج طبيبة."
                  />
                }
                frustrations={
                  <T
                    en="Apps built in English that don't speak her language, and Arabic chatbots that invent medical advice with total confidence."
                    ar="تطبيقات مبنيّة بالإنجليزية لا تتحدّث لغتها، وروبوتات عربية تخترع نصائح طبية بثقة تامة."
                  />
                }
              />

              <Persona
                initial={<T en="R" ar="ر" />}
                name={<T en="Dr. Rana, the OB-GYN the app defers to" ar="د. رنا، طبيبة النساء التي يحيل إليها التطبيق" />}
                role={<T en="Secondary user · clinician" ar="مستخدمة ثانوية · طبيبة" />}
                story={
                  <T
                    en="When the app isn't sure, I want it to send my patient to me, so she arrives informed instead of misinformed."
                    ar="حين لا يكون التطبيق متأكّداً أريده أن يرسل مريضتي إليّ، فتصل مطّلعة بدل أن تصل مضلَّلة."
                  />
                }
                goals={
                  <T
                    en="Patients who show up with good questions instead of myths, and a tool that knows where it stops."
                    ar="مريضات يأتين بأسئلة جيدة بدل الخرافات، وأداة تعرف حيث تتوقّف."
                  />
                }
                frustrations={
                  <T
                    en="Spending the appointment undoing something frightening a patient read somewhere unreliable."
                    ar="أن تمضي الموعد في تفنيد شيء مخيف قرأته المريضة في مكان غير موثوق."
                  />
                }
              />

              <Callout kicker={<T en="Problem statements" ar="بيانات المشكلة" />}>
                <T
                  en={<><strong>Lina</strong> needs maternal guidance in Arabic she can rely on, because a confidently wrong answer in maternal care is a safety risk rather than an inconvenience. <strong>Dr. Rana</strong> needs the app to hand her patient over when its confidence drops, because an AI that guesses spends the trust the whole product runs on.</>}
                  ar={<><strong>لينا</strong> تحتاج إرشاداً أموميّاً بالعربية تعتمد عليه، لأن جواباً واثقاً خاطئاً في رعاية الأمومة خطر على السلامة لا مجرّد إزعاج. و<strong>د. رنا</strong> تحتاج أن يسلّمها التطبيق مريضتَه حين تنخفض ثقته، لأن ذكاءً اصطناعياً يخمّن يُنفق الثقة التي يقوم عليها المنتج كله.</>}
                />
              </Callout>
            </>
          ),
        },
        {
          kicker: <T en="Design strategy" ar="استراتيجية التصميم" />,
          heading: (
            <T
              en="Trust was the constraint everything else bent around."
              ar="كانت الثقة القيد الذي انحنى حوله كل شيء آخر."
            />
          ),
          body: (
            <>
              <Lead>
                <T
                  en="Every decision came back to one question: would a mother trust this with a question about her pregnancy? That question decided the models, the tone, and what happens when the app doesn't know."
                  ar="كل قرار كان يعود إلى سؤال واحد: هل تأتمن أمٌّ هذا على سؤال عن حملها؟ ذلك السؤال قرّر النماذج والنبرة وما يحدث حين لا يعرف التطبيق."
                />
              </Lead>
              <FactGrid
                items={[
                  { label: <T en="Goal" ar="الهدف" />, value: <T en="A health companion mothers trust in Arabic" ar="رفيق صحّي تأتمنه الأمّهات بالعربية" /> },
                  { label: <T en="Hypothesis" ar="الفرضية" />, value: <T en="Specialized models plus an explicit refusal beat one general model" ar="نماذج متخصّصة مع رفض صريح تتفوّق على نموذج عام واحد" /> },
                  { label: <T en="Priority" ar="الأولوية" />, value: <T en="Safety and tone ahead of answer coverage" ar="السلامة والنبرة قبل تغطية الإجابات" /> },
                  { label: <T en="Tradeoff" ar="المفاضلة" />, value: <T en="Less impressive demos in exchange for trust" ar="عروض أقل إبهاراً مقابل الثقة" /> },
                ]}
              />
            </>
          ),
        },
        {
          kicker: <T en="Design process" ar="عملية التصميم" />,
          heading: <T en="RTL is a design language, not a setting you switch on." ar="اليمين لليسار لغة تصميم، لا إعداداً تُشغّله." />,
          body: (
            <>
              <p>
                <T
                  en="Every screen existed in Figma, in Arabic, before there was a single Flutter widget. Designing that way forced decisions that an English-first process never puts in front of you."
                  ar="كل شاشة وُجدت في Figma، بالعربية، قبل أن يوجد عنصر Flutter واحد. والتصميم بهذه الطريقة فرض قرارات لا تضعها أمامك عمليةٌ تبدأ بالإنجليزية."
                />
              </p>

              <DesignDecision
                number={1}
                title={<T en="Standard Arabic for medicine, Levantine for conversation." ar="فصحى للطبّ، وشامية للمحادثة." />}
                challenge={
                  <T
                    en="Medical information needs the precision of Modern Standard Arabic. But a chatbot that answers in formal MSA comes across cold, which is the wrong tone for someone asking about her own pregnancy."
                    ar="المعلومة الطبية تحتاج دقّة الفصحى. لكن روبوتاً يجيب بفصحى رسمية يبدو بارداً، وهذه نبرة خاطئة لمن تسأل عن حملها."
                  />
                }
                decision={
                  <T
                    en={<><strong>MSA for anything medical</strong>: diagnoses, nutrition figures, image descriptions. A{" "}<strong>warmer register leaning Levantine</strong> for the chatbot&apos;s conversational parts.</>}
                    ar={<><strong>الفصحى لكل ما هو طبي</strong>: التشخيصات، وأرقام التغذية، وأوصاف الصور. و<strong>مستوى أدفأ يميل للشامية</strong> لأجزاء المحادثة في الروبوت.</>}
                  />
                }
                outcome={
                  <T
                    en="Users never notice the rule, but they feel it. The chatbot reads like a friend who happens to know medicine, rather than a disclaimer."
                    ar="لا يلاحظ المستخدمون القاعدة أبداً لكنهم يحسّونها. يُقرأ الروبوت كصديقة تعرف الطبّ، لا كإخلاء مسؤولية."
                  />
                }
              />

              <Callout kicker={<T en="Design constraint" ar="قيد التصميم" />}>
                <T
                  en="Mixed content turned out to be the hardest rendering problem: Arabic sentences with English drug names, dosages and abbreviations inside them. Flutter's BiDi engine needed an explicit direction marker for every mixed string, and I checked each one on real iOS and Android devices."
                  ar="تبيّن أن المحتوى المختلط أصعب مشكلة عرض: جمل عربية داخلها أسماء أدوية وجرعات واختصارات إنجليزية. احتاج محرّك BiDi في Flutter علامة اتجاه صريحة لكل نصّ مختلط، وتحقّقتُ من كل واحدة على أجهزة iOS وAndroid حقيقية."
                />
              </Callout>

              <PhoneDemo
                screens={[
                  {
                    src: "/work/bloombelly/login.webp",
                    alt: "BloomBelly login screen: cursive logo over a lavender watercolor ground, bilingual Arabic and English with full RTL",
                    title: "Bilingual, Arabic first",
                    titleAr: "ثنائي اللغة، عربي أولاً",
                    blurb: "Arabic and English both complete, with full RTL. Because the Arabic came first, neither language reads like it was added later.",
                    blurbAr: "العربية والإنجليزية كاملتان، بدعم RTL تامّ. ولأن العربية جاءت أولاً، لا تبدو أي لغة كأنها أُضيفت لاحقاً.",
                  },
                  {
                    src: "/work/bloombelly/home.webp",
                    alt: "BloomBelly home screen: week 38 of pregnancy with a fruit size comparison and bottom navigation",
                    title: "Your week, at a glance",
                    titleAr: "أسبوعكِ بلمحة",
                    blurb: "The pregnancy week, a friendly size comparison, and what's changing right now. Home meets a mother where she already is.",
                    blurbAr: "أسبوع الحمل، ومقارنة حجم ودودة، وما الذي يتغيّر الآن. الرئيسية تلتقي الأمّ حيث هي أصلاً.",
                  },
                  {
                    src: "/work/bloombelly/tracker.webp",
                    alt: "BloomBelly pregnancy tracker: week selector with the baby's weight and length",
                    title: "Track every week",
                    titleAr: "تتبّعي كل أسبوع",
                    blurb: "A week-by-week tracker with the baby's weight and length, written in plain, warm Arabic.",
                    blurbAr: "متتبّع أسبوعاً بأسبوع بوزن الطفل وطوله، مكتوب بعربية بسيطة ودافئة.",
                  },
                  {
                    src: "/work/bloombelly/nutrition.webp",
                    alt: "BloomBelly growth assessment: weight and head-circumference inputs with percentile results",
                    title: "Growth, checked by a model",
                    titleAr: "النموّ، يراجعه نموذج",
                    blurb: "Enter weight and head circumference and a Random Forest model returns percentile guidance. It never returns a diagnosis.",
                    blurbAr: "أدخلي الوزن ومحيط الرأس فيعيد نموذج Random Forest إرشاداً مئوياً. ولا يعيد تشخيصاً أبداً.",
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
              en="One Flutter app. Three specialized models. One Flask service in between."
              ar="تطبيق Flutter واحد. ثلاثة نماذج متخصّصة. وخدمة Flask واحدة بينهما."
            />
          ),
          body: (
            <>
              <p>
                <T
                  en="I treated the AI layer as three independent capabilities, because the questions mothers actually ask don't fit one model. Flask classifies the intent of an incoming request, sends it to the right model, and formats the Arabic response with its source. Supabase handles auth, the profile, pregnancy-week tracking, and it keeps conversation history so a session picks up where the last one ended."
                  ar="تعاملتُ مع طبقة الذكاء الاصطناعي كثلاث قدرات مستقلّة، لأن الأسئلة التي تطرحها الأمّهات فعلاً لا تناسب نموذجاً واحداً. يصنّف Flask نيّة الطلب الوارد، ويرسله إلى النموذج المناسب، وينسّق الجواب العربي مع مصدره. ويتولّى Supabase المصادقة والملف الشخصي وتتبّع أسبوع الحمل، ويحفظ سجلّ المحادثة لتُكمل الجلسة من حيث انتهت السابقة."
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
                title={<T en="Three models, each with a screen built for it." ar="ثلاثة نماذج، لكل واحد شاشة مبنيّة له." />}
                context={
                  <T
                    en="One fine-tuned LLM could have answered questions, classified nutrition and described images. That's a single model, a single screen, a single thing to deploy."
                    ar="نموذج لغوي واحد مضبوط كان يمكنه الإجابة وتصنيف التغذية ووصف الصور. نموذج واحد، وشاشة واحدة، وشيء واحد تنشره."
                  />
                }
                decision={
                  <T
                    en={<>Three specialized models instead: Gemini for vision, a LoRA-tuned transformer for questions, Random Forest for nutrition. Each one got a <strong>screen built around how that capability is actually used</strong>: a camera for imaging, a chat for questions, a guided form for nutrition.</>}
                    ar={<>ثلاثة نماذج متخصّصة بدلاً من ذلك: Gemini للرؤية، ومحوّل مضبوط بـLoRA للأسئلة، وRandom Forest للتغذية. ولكل واحد <strong>شاشة مبنيّة حول الطريقة التي تُستخدم بها تلك القدرة فعلاً</strong>: كاميرا للتصوير، ومحادثة للأسئلة، ونموذج موجَّه للتغذية.</>}
                  />
                }
                consequences={
                  <T
                    en="Each model can be audited on its own, which matters in a health context. The interface came out cleaner too, because users reach for the tool that fits the question rather than one box that tries to cover everything."
                    ar="يمكن تدقيق كل نموذج على حدة، وهذا يهمّ في سياق صحّي. وخرجت الواجهة أنظف أيضاً، لأن المستخدمين يذهبون إلى الأداة التي تناسب السؤال بدل صندوق واحد يحاول تغطية كل شيء."
                  />
                }
              />

              <ADR
                number={2}
                title={<T en="Supabase and Flask, so sessions remember." ar="Supabase وFlask، لتتذكّر الجلسات." />}
                context={
                  <T
                    en="Firebase is what student healthcare apps usually pick. Cheaper to start, faster auth, no servers to look after."
                    ar="Firebase ما تختاره عادةً تطبيقات الصحة الطلابية. أرخص في البداية، ومصادقة أسرع، ولا خوادم تعتني بها."
                  />
                }
                decision={
                  <T
                    en={<>Supabase on Postgres with a Flask orchestrator. The clinical side needed real relational data for cycles, conditions and visits, and it needed{" "}<strong>conversation history that survives</strong> between sessions.</>}
                    ar={<>Supabase على Postgres مع منسّق Flask. الجانب السريري احتاج بيانات علائقية حقيقية للدورات والحالات والزيارات، واحتاج{" "}<strong>سجلّ محادثة يبقى</strong> بين الجلسات.</>}
                  />
                }
                consequences={
                  <T
                    en="Nobody has to explain themselves to the chatbot twice, and that continuity is most of the experience. Row-level security gave per-profile isolation for free, which made the extra operational work worth doing."
                    ar="لا أحد مضطرّ أن يشرح نفسه للروبوت مرتين، وتلك الاستمرارية هي معظم التجربة. وأعطى أمان مستوى الصف عزلاً لكل ملف شخصي بلا مقابل، وهذا ما جعل العمل التشغيلي الإضافي يستحقّ."
                  />
                }
              />
            </>
          ),
        },
        {
          kicker: <T en="Challenges" ar="التحدّيات" />,
          heading: <T en="What was hard, and what I traded away." ar="ما كان صعباً، وما تنازلتُ عنه." />,
          body: (
            <>
              <p>
                <T
                  en={<><strong>Arabic rendering took longer than the AI did.</strong>{" "}Calling a model is a few lines. Numbers, punctuation and English drug names sitting inside Arabic sentences each needed explicit BiDi handling, checked on real devices on both platforms.</>}
                  ar={<><strong>استغرق عرض العربية وقتاً أطول من الذكاء الاصطناعي.</strong>{" "}استدعاء نموذجٍ بضعة أسطر. أما الأرقام وعلامات الترقيم وأسماء الأدوية الإنجليزية داخل الجمل العربية فاحتاج كل منها معالجة BiDi صريحة، مفحوصة على أجهزة حقيقية على المنصّتين.</>}
                />
              </p>

              <ADR
                number={3}
                title={<T en="A refusal designed as a real state, not an error." ar="رفضٌ مصمَّم كحالة حقيقية، لا كخطأ." />}
                context={
                  <T
                    en="A confident LLM that hallucinates a dosage is dangerous in maternal care, and general Arabic chatbots fail badly at exactly this."
                    ar="نموذج لغوي واثق يهلوس جرعةً خطيرٌ في رعاية الأمومة، والروبوتات العربية العامة تفشل في هذا تحديداً فشلاً ذريعاً."
                  />
                }
                decision={
                  <T
                    en={<>Under a confidence threshold the chatbot answers{" "}<strong>&ldquo;استشيري طبيبتك / Consult your doctor&rdquo;</strong>{" "}instead of guessing. I drew it in Figma as a{" "}<strong>warm, ordinary state</strong> with the same care as any other screen, so it never looks like a red warning box.</>}
                    ar={<>تحت عتبة ثقة معيّنة يجيب الروبوت بـ{" "}<strong>«استشيري طبيبتك»</strong>{" "}بدل أن يخمّن. رسمتُها في Figma كـ<strong>حالة دافئة عادية</strong> بالعناية نفسها التي أعطيها لأي شاشة، فلا تبدو أبداً كصندوق تحذير أحمر.</>}
                  />
                }
                consequences={
                  <T
                    en="It demos less impressively, and it's the version I'd be willing to put in front of a real pregnant woman. How the refusal was designed mattered as much as where I set the threshold."
                    ar="يبدو أقلّ إبهاراً في العرض، وهو النسخة التي أقبل أن أضعها أمام امرأة حامل حقيقية. وكيفية تصميم الرفض كانت بأهمية موضع العتبة نفسها."
                  />
                }
              />
            </>
          ),
        },
        {
          kicker: <T en="Outcomes" ar="النتائج" />,
          heading: <T en="A product I can defend, and a way of working." ar="منتج أستطيع الدفاع عنه، وطريقة عمل." />,
          body: (
            <>
              <p>
                <T
                  en="BloomBelly shipped as a working Arabic app and carried my graduation project: three AI capabilities under one bilingual interface, tuned to hand a question to a clinician rather than guess at it. Nothing in it invents medical advice, by design."
                  ar="أُطلق BloomBelly تطبيقاً عربياً يعمل، وحمل مشروع تخرّجي: ثلاث قدرات ذكاء اصطناعي تحت واجهة واحدة ثنائية اللغة، مضبوطة لتسلّم السؤال إلى طبيبة بدل أن تخمّنه. ولا شيء فيه يخترع نصيحة طبية، بحكم التصميم."
                />
              </p>
              <p>
                <T
                  en={<>What stayed with me is the method. The Figma file, Arabic screens first and English after, became the spec; when something looked wrong in Flutter, Figma was the reference I checked against.{" "}<strong>Designing before building saved weeks</strong>, and I&apos;ve worked that way on everything since.</>}
                  ar={<>ما بقي معي هو المنهج. ملف Figma، شاشاته العربية أولاً والإنجليزية بعدها، صار هو المواصفة؛ وحين بدا شيء خطأً في Flutter كان Figma هو المرجع الذي أراجعه.{" "}<strong>التصميم قبل البناء وفّر أسابيع</strong>، وعملتُ بهذه الطريقة في كل شيء بعده.</>}
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
                  en="The architecture is ready to be evaluated; the evidence is what's missing. My plan is a moderated usability study with Arabic-speaking mothers around three tasks: ask a medical question, read a refusal, run a growth check. Then I'd pull the sessions into an affinity diagram and turn the clusters into a prioritized list."
                  ar="البنية جاهزة للتقييم؛ والناقص هو الدليل. خطّتي دراسة قابلية استخدام موجَّهة مع أمّهات ناطقات بالعربية حول ثلاث مهامّ: طرح سؤال طبي، وقراءة رفض، وإجراء فحص نموّ. ثم أجمع الجلسات في مخطّط تقارب وأحوّل العناقيد إلى قائمة مرتّبة بالأولوية."
                />
              </p>
              <Priorities
                items={[
                  {
                    tier: "P0",
                    label: (
                      <T
                        en="The refusal has to read as care rather than failure. That's the moment trust is won or lost."
                        ar="على الرفض أن يُقرأ عنايةً لا فشلاً. تلك هي اللحظة التي تُكسَب فيها الثقة أو تُفقَد."
                      />
                    ),
                  },
                  {
                    tier: "P1",
                    label: (
                      <T
                        en="Mixed Arabic and English medical terms have to render correctly on real devices before any answer can be judged at all."
                        ar="على المصطلحات الطبية المختلطة عربي وإنجليزي أن تُعرَض صحيحة على أجهزة حقيقية قبل أن يُحكَم على أي جواب أصلاً."
                      />
                    ),
                  },
                  {
                    tier: "P2",
                    label: (
                      <T
                        en="Onboarding should get the four user roles across without a wall of text."
                        ar="على التهيئة أن توصّل أدوار المستخدمين الأربعة دون جدار من النصّ."
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
                  en="BloomBelly taught me that in a regulated domain the interesting work is restraint: deciding what the product should refuse to do. The refusal pattern and the Figma-first habit are the two things I've reused on every project since."
                  ar="علّمني BloomBelly أن العمل المثير في مجال منظَّم هو الانضباط: أن تقرّر ما ينبغي للمنتج أن يرفض فعله. ونمط الرفض وعادة البدء من Figma هما الشيئان اللذان أعدتُ استخدامهما في كل مشروع بعده."
                />
              </p>
              <p>
                <T
                  en="Taking it further would mean real clinical validation and structured testing with mothers. The architecture can take it; the evidence is what a production health product would need next."
                  ar="المضيّ به أبعد يعني تحقّقاً سريرياً حقيقياً واختباراً منظَّماً مع الأمّهات. البنية تتحمّل ذلك؛ والدليل هو ما سيحتاجه تالياً منتجٌ صحّي في الإنتاج."
                />
              </p>
            </>
          ),
        },
      ]}
      nextProject={{
        label: <T en="CareConnect: one backend, three audiences →" ar="CareConnect: خادم واحد، ثلاثة جماهير →" />,
        href: "/projects/careconnect",
      }}
      />
    </>
  );
}
