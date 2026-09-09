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
  "A multi-tenant SaaS for online shops, built by two of us. A collaborating engineer designed the core logic and the AI, and I wrote the stack around it: a FastAPI and PostgreSQL backend, a Vue 3 dashboard, and the integration of a Telegram assistant per shop with 15 function-call tools, answering customers in five languages.";

export const metadata: Metadata = {
  title: "Blatos — a multi-tenant store SaaS with an AI bot per shop — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "Blatos — a multi-tenant store SaaS with an AI bot per shop",
    description: DESCRIPTION,
    type: "article",
    url: siteUrl("/projects/blatos"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Blatos — a multi-tenant store SaaS with an AI bot per shop",
    description: DESCRIPTION,
  },
};

export default function BlatosPage() {
  return (
    <>
      <StructuredData
        data={caseStudyStructuredData({
          name: "Blatos — a multi-tenant store SaaS",
          description: DESCRIPTION,
          path: "/projects/blatos",
          year: "2026",
        })}
      />
      <CaseStudyLayout
        meta={{
          eyebrow: <T en="SaaS · Backend · AI integration" ar="SaaS · خادم · دمج ذكاء اصطناعي" />,
          status: <T en="Team of two" ar="فريق من اثنين" />,
          title: (
            <T
              en="Blatos: a multi-tenant store SaaS, with an AI bot per shop."
              ar="Blatos: نظام SaaS متعدّد المستأجرين للمتاجر، ببوت ذكاء لكل متجر."
            />
          ),
          lede: (
            <T
              en="A full-stack SaaS built by two of us. A collaborating engineer designed the core logic and the AI, and I built the stack around that design: the FastAPI and PostgreSQL backend, the Vue 3 dashboard, and the wiring that puts the AI layer inside the product. Each shop gets an isolated workspace and its own Telegram assistant, which uses 15 function-call tools against that shop's real data and answers customers in Arabic, English, Turkish, French and German."
              ar="نظام SaaS متكامل بنيناه اثنين. مهندس مشارك صمّم منطق النظام الجوهري وذكاءه، وأنا بنيتُ الطبقات حول ذلك التصميم: خادم FastAPI وPostgreSQL، ولوحة تحكّم Vue 3، والوصل الذي يضع طبقة الذكاء داخل المنتج. ولكل متجر مساحة معزولة ومساعده الخاص عبر Telegram، يستخدم 15 أداة استدعاء دوال على بيانات ذلك المتجر الحقيقية ويجيب العملاء بالعربية والإنجليزية والتركية والفرنسية والألمانية."
            />
          ),
          year: "2026",
          role: <T en="Full-stack engineer, with a collaborator" ar="مهندسة Full-stack، مع متعاون" />,
          stack: [
            "FastAPI",
            "PostgreSQL",
            "SQLAlchemy",
            "Redis",
            "Vue 3",
            "Tailwind",
            "Groq LLM",
            "Telegram Bot",
          ],
        }}
        metrics={[
          { value: <T en="Multi-tenant" ar="متعدّد المستأجرين" />, label: <T en="An isolated workspace per shop" ar="مساحة معزولة لكل متجر" /> },
          { value: "15", label: <T en="AI function-call tools" ar="أدوات استدعاء دوال للذكاء" /> },
          { value: "5", label: <T en="Customer languages: AR, EN, TR, FR, DE" ar="لغات للعملاء: عربية، إنجليزية، تركية، فرنسية، ألمانية" /> },
          { value: <T en="Duo" ar="ثنائي" />, label: <T en="Core logic and AI design belong to my collaborator" ar="منطق النظام وتصميم الذكاء لزميلي المشارك" /> },
        ]}
        sections={[
          {
            kicker: <T en="Overview" ar="نظرة عامة" />,
            heading: <T en="What it is, and what I did." ar="ما هو، وما الذي فعلته." />,
            body: (
              <>
                <Lead>
                  <T
                    en="Each shop is a tenant with its own isolated space and its own AI assistant reachable over Telegram. What I owned is the API surface, the Vue 3 dashboard, and the integration that ties the layers into one product."
                    ar="كل متجر مستأجر له مساحته المعزولة ومساعده الذكي عبر Telegram. وما كان لي هو واجهة الـAPI، ولوحة تحكّم Vue 3، والدمج الذي يربط الطبقات في منتج واحد."
                  />
                </Lead>
                <FactGrid
                  items={[
                    { label: <T en="My role" ar="دوري" />, value: <T en="Wrote the stack and the integration" ar="كتبتُ الطبقات والدمج" /> },
                    { label: <T en="Collaborator" ar="المشارك" />, value: <T en="An engineer, on core logic and AI design" ar="مهندس، على منطق النظام وتصميم الذكاء" /> },
                    { label: <T en="Backend" ar="الخلفية" />, value: "FastAPI · PostgreSQL · SQLAlchemy" },
                    { label: <T en="Frontend" ar="الواجهة" />, value: "Vue 3 · Tailwind" },
                    { label: <T en="AI" ar="الذكاء" />, value: <T en="Groq llama-3.3-70b · function-calling" ar="Groq llama-3.3-70b · استدعاء دوال" /> },
                    { label: <T en="Channel" ar="القناة" />, value: <T en="Telegram bot per shop" ar="بوت Telegram لكل متجر" /> },
                    { label: <T en="Infra" ar="البنية" />, value: <T en="Multi-tenant, with JWT and Redis" ar="متعدّد المستأجرين، مع JWT وRedis" /> },
                  ]}
                />
              </>
            ),
          },
          {
            kicker: <T en="Architecture" ar="البنية" />,
            heading: <T en="One codebase, an isolated workspace per shop." ar="قاعدة كودٍ واحدة، مساحة معزولة لكل متجر." />,
            body: (
              <>
                <p>
                  <T
                    en="The hard part of a multi-tenant system is keeping every shop's data cleanly separated while running one codebase. The backend is FastAPI with PostgreSQL through SQLAlchemy, plus JWT auth and Redis, and tenancy runs through the data layer so one shop never sees another's rows. A Vue 3 and Tailwind dashboard sits on top for the shop owners."
                    ar="الجزء الصعب في نظام متعدّد المستأجرين هو إبقاء بيانات كل متجر منفصلة بنظافة مع تشغيل قاعدة كود واحدة. الخادم FastAPI مع PostgreSQL عبر SQLAlchemy، ومعه مصادقة JWT وRedis، وفصل المستأجرين يمرّ عبر طبقة البيانات بحيث لا يرى متجر صفوف متجر آخر. وفوقها لوحة تحكّم Vue 3 وTailwind لأصحاب المتاجر."
                  />
                </p>
                <Figure
                  label="Architecture"
                  caption={<T en="The multi-tenant data layer and the AI layer. Diagram still to add." ar="طبقة البيانات متعدّدة المستأجرين وطبقة الذكاء. المخطّط لم يُضَف بعد." />}
                />
              </>
            ),
          },
          {
            kicker: <T en="The AI layer" ar="طبقة الذكاء" />,
            heading: <T en="A shop assistant that acts, not just chats." ar="مساعدُ متجرٍ يتصرّف، لا يحادث فقط." />,
            body: (
              <>
                <p>
                  <T
                    en="Each shop gets an AI assistant over Telegram, running on Groq's llama-3.3-70b. It does more than chat: 15 function-call tools let it act on that shop's own data, and it serves customers in Arabic, English, Turkish, French and German. Because those tools run against the tenant's data, the AI is held to the same boundaries as every other request."
                    ar="لكل متجر مساعد ذكي عبر Telegram، يعمل على نموذج Groq llama-3.3-70b. وهو يفعل أكثر من المحادثة: 15 أداة استدعاء دوال تتيح له التعامل مع بيانات ذلك المتجر، ويخدم العملاء بالعربية والإنجليزية والتركية والفرنسية والألمانية. ولأن تلك الأدوات تعمل على بيانات المستأجر، يخضع الذكاء للحدود نفسها التي يخضع لها أي طلب آخر."
                  />
                </p>
                <Callout kicker={<T en="Why it's interesting" ar="لماذا هو مثير للاهتمام" />}>
                  <T
                    en="Wiring an LLM into a multi-tenant backend through function-calling makes the AI a real part of the architecture. It has to respect the same tenant boundaries as every other request, which is a different problem from bolting a generic chatbot onto the side."
                    ar="وصل نموذج لغوي بخادم متعدّد المستأجرين عبر استدعاء الدوال يجعل الذكاء جزءاً حقيقياً من البنية. عليه أن يحترم الحدود نفسها بين المستأجرين كأي طلب آخر، وهذه مشكلة مختلفة عن إلحاق دردشة عامة بالجانب."
                  />
                </Callout>
              </>
            ),
          },
          {
            kicker: <T en="Reflection" ar="تأمّل" />,
            heading: <T en="Working across every layer of one product." ar="العمل عبر كل طبقة في منتج واحد." />,
            body: (
              <>
                <p>
                  <T
                    en="Blatos is where I worked across every layer of a real SaaS: a multi-tenant data model, a FastAPI backend, a Vue front-end, and an AI layer wired in with function-calling. I did it alongside an engineer whose core-logic and AI design I was building against, which turned out to be its own skill. Integrating someone else's strongest thinking without flattening it is harder than owning the whole thing."
                    ar="في Blatos عملتُ عبر كل طبقة في نظام SaaS حقيقي: نموذج بيانات متعدّد المستأجرين، وخادم FastAPI، وواجهة Vue، وطبقة ذكاء موصولة عبر استدعاء الدوال. وفعلتُ ذلك إلى جانب مهندس كنتُ أبني على تصميمه لمنطق النظام وذكائه، وتبيّن أن هذه مهارة بحدّ ذاتها. فدمج أقوى تفكير شخص آخر دون أن تُسطّحه أصعب من أن تملك الشيء كله."
                  />
                </p>
              </>
            ),
          },
        ]}
        nextProject={{
          label: (
            <T
              en="CareConnect: three apps on one backend →"
              ar="CareConnect: ثلاثة تطبيقات على خادم واحد →"
            />
          ),
          href: "/projects/careconnect",
        }}
      />
    </>
  );
}
