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
  "A full-stack multi-tenant SaaS for online shops, built by two — a collaborating engineer designed the core logic and the AI; I built the stack around it: FastAPI + PostgreSQL, a Vue 3 dashboard, and the wiring of an AI Telegram bot per shop (Groq llama-3.3-70b, 15 function-call tools) serving customers in five languages.";

export const metadata: Metadata = {
  title: "Blatos — multi-tenant store SaaS with a per-shop AI bot — Mozn Jamous",
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
          name: "Blatos — multi-tenant store SaaS",
          description: DESCRIPTION,
          path: "/projects/blatos",
          year: "2026",
        })}
      />
      <CaseStudyLayout
        meta={{
          eyebrow: <T en="SaaS · Full-stack · AI" ar="SaaS · Full-stack · ذكاء اصطناعي" />,
          status: <T en="Team of two · full-stack" ar="بناء ثنائي · Full-stack" />,
          title: (
            <T
              en="Blatos — a multi-tenant store SaaS, with an AI bot per shop."
              ar="Blatos — نظام SaaS متعدّد المستأجرين للمتاجر، ببوت ذكاء اصطناعي لكل متجر."
            />
          ),
          lede: (
            <T
              en="A full-stack SaaS built by two. A collaborating engineer designed the system's core logic and its AI; I built the stack around that design — the FastAPI + PostgreSQL backend, the Vue 3 dashboard, and the wiring of the AI layer into the product. Each shop gets its own isolated workspace and its own Telegram assistant, which uses 15 function-call tools on the shop's real data and answers customers in five languages — Arabic, English, Turkish, French, and German."
              ar="نظام SaaS متكامل بُني باثنين. مهندسٌ مشارك صمّم منطق النظام الجوهري وذكاءه الاصطناعي؛ وأنا بنيتُ الطبقات حول ذلك التصميم — خلفية FastAPI + PostgreSQL، ولوحة تحكّم Vue 3، ووصْل طبقة الذكاء بالمنتج. لكلّ متجرٍ مساحته المعزولة ومساعده عبر Telegram، يستخدم 15 أداة استدعاء دوال على بيانات المتجر الحقيقية، ويُجيب العملاء بخمس لغات — العربية والإنجليزية والتركية والفرنسية والألمانية."
            />
          ),
          year: "2026",
          role: <T en="Full-stack Developer — with a collaborating engineer" ar="مطوّرة Full-stack — مع مهندسٍ مشارك" />,
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
          { value: "5", label: <T en="Customer languages — AR · EN · TR · FR · DE" ar="لغات للعملاء — AR · EN · TR · FR · DE" /> },
          { value: <T en="Duo" ar="ثنائي" />, label: <T en="Core logic & AI design — a collaborating engineer" ar="منطق النظام وتصميم الذكاء — مهندس مشارك" /> },
        ]}
        sections={[
          {
            kicker: <T en="Overview" ar="نظرة عامة" />,
            heading: <T en="What it is, and what I did." ar="ما هو، وما الذي فعلته." />,
            body: (
              <>
                <Lead>
                  <T
                    en="Blatos is a SaaS for online shops: each shop (tenant) runs in its own isolated space and gets its own AI assistant reachable over Telegram. We built it as a pair — the core logic and the AI are a collaborating engineer's design; the build around them — API surface, the Vue 3 dashboard, and the integration that ties the layers into one coherent product — is mine."
                    ar="Blatos نظام SaaS للمتاجر الإلكترونية: كلّ متجرٍ (مستأجر) يعمل ضمن مساحته المعزولة وله مساعده الذكي عبر Telegram. بنيناه ثنائياً — منطق النظام الجوهري والذكاء الاصطناعي من تصميم مهندسٍ مشارك؛ والبناء حولهما — واجهة الـAPI، ولوحة تحكّم Vue 3، والدمج الذي يربط الطبقات في منتجٍ واحدٍ متماسك — عملي أنا."
                  />
                </Lead>
                <FactGrid
                  items={[
                    { label: <T en="My role" ar="دوري" />, value: <T en="Full-stack build & integration" ar="بناء Full-stack ودمج" /> },
                    { label: <T en="Collaborator" ar="المشارك" />, value: <T en="Core logic & AI design — an engineer" ar="منطق النظام وتصميم الذكاء — مهندس" /> },
                    { label: <T en="Backend" ar="الخلفية" />, value: "FastAPI · PostgreSQL · SQLAlchemy" },
                    { label: <T en="Frontend" ar="الواجهة" />, value: "Vue 3 · Tailwind" },
                    { label: <T en="AI" ar="الذكاء" />, value: <T en="Groq llama-3.3-70b · function-calling" ar="Groq llama-3.3-70b · استدعاء دوال" /> },
                    { label: <T en="Channel" ar="القناة" />, value: <T en="Telegram bot per shop" ar="بوت Telegram لكل متجر" /> },
                    { label: <T en="Infra" ar="البنية" />, value: <T en="Multi-tenant · JWT · Redis" ar="متعدّد المستأجرين · JWT · Redis" /> },
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
                    en="The hard part of a multi-tenant system is keeping every shop's data cleanly separated while running one codebase. The backend is FastAPI + PostgreSQL (via SQLAlchemy), with JWT auth and Redis; tenancy runs through the data layer so one shop never sees another's data. A Vue 3 + Tailwind dashboard sits on top for shop owners."
                    ar="الجزء الصعب في نظامٍ متعدّد المستأجرين هو إبقاء بيانات كلّ متجرٍ منفصلةً بنظافة مع تشغيل قاعدة كودٍ واحدة. الخلفية FastAPI + PostgreSQL (عبر SQLAlchemy)، مع مصادقة JWT وRedis؛ ويمرّ فصل المستأجرين عبر طبقة البيانات بحيث لا يرى متجرٌ بيانات آخر. وفوقها لوحة تحكّم Vue 3 + Tailwind لأصحاب المتاجر."
                  />
                </p>
                <Figure
                  label="Architecture"
                  caption={<T en="Multi-tenant data + AI layer — diagram to add" ar="طبقة البيانات والذكاء متعددة المستأجرين — يُضاف المخطّط لاحقاً" />}
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
                    en="Each shop gets an AI assistant over Telegram, powered by Groq's llama-3.3-70b. Rather than just chatting, it uses 15 function-call tools to act on that shop's own data — and it serves customers in five languages: Arabic, English, Turkish, French, and German. Because the tools run against the tenant's data, the AI respects the same boundaries as the rest of the system."
                    ar="لكلّ متجرٍ مساعدٌ ذكيّ عبر Telegram، مدعومٌ بنموذج Groq llama-3.3-70b. وبدل المحادثة فقط، يستخدم 15 أداة استدعاء دوال للتعامل مع بيانات ذلك المتجر — ويخدم العملاء بخمس لغات: العربية والإنجليزية والتركية والفرنسية والألمانية. ولأنّ الأدوات تعمل على بيانات المستأجر، يحترم الذكاء الحدود نفسها كبقية النظام."
                  />
                </p>
                <Callout kicker={<T en="Why it's interesting" ar="لماذا هو مثير للاهتمام" />}>
                  <T
                    en="Wiring an LLM to a multi-tenant backend through function-calling means the AI is a first-class part of the architecture — it has to respect the same tenant boundaries as every other request, not bolt on as a generic chatbot."
                    ar="ربط نموذج لغةٍ بخلفيةٍ متعدّدة المستأجرين عبر استدعاء الدوال يجعل الذكاء جزءاً أصيلاً من البنية — عليه احترام الحدود نفسها بين المستأجرين كأيّ طلبٍ آخر، لا أن يكون دردشةً عامّة ملحقة."
                  />
                </Callout>
              </>
            ),
          },
          {
            kicker: <T en="Reflection" ar="تأمّل" />,
            heading: <T en="Range, owned end-to-end." ar="سعةٌ مملوكةٌ من الطرف إلى الطرف." />,
            body: (
              <>
                <p>
                  <T
                    en="Blatos is the project where I worked across every layer of a real SaaS — a multi-tenant data model, a FastAPI backend, a Vue front-end, and an AI layer wired in with function-calling — alongside an engineer whose core-logic and AI design I was building against. Ranging end-to-end while integrating someone else's strongest thinking, in one product, is the point."
                    ar="Blatos هو المشروع الذي عملتُ فيه عبر كلّ طبقات نظام SaaS حقيقي — نموذج بيانات متعدّد المستأجرين، وخلفية FastAPI، وواجهة Vue، وطبقة ذكاءٍ موصولة عبر استدعاء الدوال — إلى جانب مهندسٍ كنتُ أبني على تصميمه لمنطق النظام وذكائه. والامتداد من الطرف إلى الطرف مع دمج أقوى تفكير شخصٍ آخر، في منتجٍ واحد، هو المقصد."
                  />
                </p>
              </>
            ),
          },
        ]}
        nextProject={{
          label: (
            <T
              en="CareConnect — three apps on one backend →"
              ar="CareConnect — ثلاثة تطبيقات على خلفية واحدة →"
            />
          ),
          href: "/projects/careconnect",
        }}
      />
    </>
  );
}
