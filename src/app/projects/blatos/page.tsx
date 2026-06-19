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

const DESCRIPTION =
  "A solo, full-stack multi-tenant SaaS — FastAPI + PostgreSQL + Vue 3 — where every tenant gets an isolated workspace and its own AI assistant over Telegram (Groq, function-calling). Designed and built end-to-end; not yet deployed.";

export const metadata: Metadata = {
  title: "Blatos — multi-tenant SaaS with a per-tenant AI assistant — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "Blatos — a multi-tenant SaaS with an AI assistant per tenant",
    description: DESCRIPTION,
    type: "article",
    url: "https://moznjamous.com/projects/blatos",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blatos — a multi-tenant SaaS with an AI assistant per tenant",
    description: DESCRIPTION,
  },
};

export default function BlatosPage() {
  return (
    <>
      <StructuredData
        data={caseStudyStructuredData({
          name: "Blatos — multi-tenant SaaS",
          description: DESCRIPTION,
          path: "/projects/blatos",
          year: "2026",
        })}
      />
      <CaseStudyLayout
        meta={{
          eyebrow: <T en="SaaS · Full-stack · AI" ar="SaaS · Full-stack · ذكاء اصطناعي" />,
          status: <T en="Built · not yet deployed" ar="مبنيّ · لم يُنشَر بعد" />,
          title: (
            <T
              en="Blatos — a multi-tenant SaaS, with an AI assistant per tenant."
              ar="Blatos — نظام SaaS متعدّد المستأجرين، بمساعد ذكاء اصطناعي لكل مستأجر."
            />
          ),
          lede: (
            <T
              en="A full-stack SaaS I designed and built on my own: every tenant gets its own isolated workspace and its own AI assistant over Telegram. I built the whole stack — a FastAPI + PostgreSQL backend, a Vue 3 front-end, and a Groq-powered bot that answers in each tenant's context using function-calling. It's built end-to-end; it isn't deployed yet."
              ar="نظام SaaS متكامل صمّمتُه وبنيتُه وحدي: لكلّ مستأجرٍ مساحته المعزولة ومساعده الذكي عبر Telegram. بنيتُ الطبقات كلّها — خلفية FastAPI + PostgreSQL، وواجهة Vue 3، وبوت مدعوم بـGroq يُجيب ضمن سياق كلّ مستأجرٍ عبر استدعاء الدوال. مبنيّ من الطرف إلى الطرف؛ لم يُنشَر بعد."
            />
          ),
          year: "2026",
          role: <T en="Solo Full-stack Developer" ar="مطوّرة Full-stack منفردة" />,
          stack: [
            "FastAPI",
            "PostgreSQL",
            "Vue 3",
            "Groq / LLM",
            "Telegram Bot API",
            "Multi-tenant",
          ],
        }}
        metrics={[
          { value: <T en="Multi-tenant" ar="متعدّد المستأجرين" />, label: <T en="Isolated workspace per tenant" ar="مساحة معزولة لكل مستأجر" /> },
          { value: <T en="Solo" ar="منفردة" />, label: <T en="Designed & built the full stack" ar="صمّمتُ وبنيتُ الطبقات كلّها" /> },
          { value: <T en="AI" ar="ذكاء اصطناعي" />, label: <T en="Per-tenant assistant, function-calling" ar="مساعد لكل مستأجر، باستدعاء الدوال" /> },
          { value: "Vue 3 · FastAPI", label: <T en="Front-end + backend, end-to-end" ar="واجهة + خلفية، من الطرف إلى الطرف" /> },
        ]}
        sections={[
          {
            kicker: <T en="Overview" ar="نظرة عامة" />,
            heading: <T en="What it is, and what I did." ar="ما هو، وما الذي فعلته." />,
            body: (
              <>
                <Lead>
                  <T
                    en="Blatos is a SaaS where each customer (tenant) runs in its own isolated space, and each tenant has its own AI assistant reachable over Telegram. I built all of it solo — the data model and API, the web front-end, and the AI layer — as one coherent system."
                    ar="Blatos نظام SaaS يعمل فيه كلّ عميل (مستأجر) ضمن مساحته المعزولة، ولكلّ مستأجرٍ مساعده الذكي الذي يصله عبر Telegram. بنيتُه كاملاً وحدي — نموذج البيانات وواجهة الـAPI، وواجهة الويب، وطبقة الذكاء الاصطناعي — كنظامٍ واحدٍ متماسك."
                  />
                </Lead>
                <FactGrid
                  items={[
                    { label: <T en="My role" ar="دوري" />, value: <T en="Solo full-stack" ar="Full-stack منفردة" /> },
                    { label: <T en="Status" ar="الحالة" />, value: <T en="Built, not yet deployed" ar="مبنيّ، لم يُنشَر بعد" /> },
                    { label: <T en="Backend" ar="الخلفية" />, value: "FastAPI · PostgreSQL" },
                    { label: <T en="Frontend" ar="الواجهة" />, value: "Vue 3" },
                    { label: <T en="AI" ar="الذكاء" />, value: <T en="Groq LLM · function-calling" ar="نموذج Groq · استدعاء دوال" /> },
                    { label: <T en="Model" ar="النموذج" />, value: <T en="Multi-tenant" ar="متعدّد المستأجرين" /> },
                  ]}
                />
              </>
            ),
          },
          {
            kicker: <T en="Architecture" ar="البنية" />,
            heading: <T en="One codebase, many isolated tenants." ar="قاعدة كودٍ واحدة، مستأجرون معزولون." />,
            body: (
              <>
                <p>
                  <T
                    en="The hard part of a multi-tenant system is keeping every tenant's data cleanly separated while still running one codebase. Blatos is built around that: a FastAPI + PostgreSQL backend serves a Vue 3 front-end, and tenancy runs through the data layer so one customer never sees another's data."
                    ar="الجزء الصعب في نظامٍ متعدّد المستأجرين هو إبقاء بيانات كلّ مستأجرٍ منفصلةً بنظافة مع تشغيل قاعدة كودٍ واحدة. بُني Blatos حول ذلك: خلفية FastAPI + PostgreSQL تخدم واجهة Vue 3، ويمرّ فصل المستأجرين عبر طبقة البيانات بحيث لا يرى عميلٌ بيانات آخر."
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
            heading: <T en="An assistant that answers in each tenant's context." ar="مساعدٌ يُجيب ضمن سياق كلّ مستأجر." />,
            body: (
              <>
                <p>
                  <T
                    en="Each tenant gets an AI assistant over Telegram, powered by a Groq-hosted LLM. Rather than just chatting, the assistant uses function-calling to act on that tenant's own data — so the answer is grounded in their workspace, not a generic response."
                    ar="لكلّ مستأجرٍ مساعدٌ ذكيّ عبر Telegram، مدعومٌ بنموذج لغةٍ على Groq. وبدل المحادثة فقط، يستخدم المساعد استدعاء الدوال للتعامل مع بيانات ذلك المستأجر نفسه — فيكون الجواب مبنيّاً على مساحته، لا ردّاً عامّاً."
                  />
                </p>
                <Callout kicker={<T en="Why it's interesting" ar="لماذا هو مثير للاهتمام" />}>
                  <T
                    en="Wiring an LLM to a multi-tenant backend with function-calling means the AI has to respect the same tenant boundaries as the rest of the system — the assistant is a first-class part of the architecture, not a bolt-on."
                    ar="ربط نموذج لغةٍ بخلفيةٍ متعدّدة المستأجرين عبر استدعاء الدوال يعني أن على الذكاء احترام الحدود نفسها بين المستأجرين كبقية النظام — فالمساعد جزءٌ أصيلٌ من البنية، لا إضافةً ملحقة."
                  />
                </Callout>
              </>
            ),
          },
          {
            kicker: <T en="Status & reflection" ar="الحالة والتأمّل" />,
            heading: <T en="Built end-to-end — the honest status." ar="مبنيّ من الطرف إلى الطرف — الحالة بصدق." />,
            body: (
              <>
                <p>
                  <T
                    en="Blatos is a complete build, not a deployed product — I haven't launched it. What it shows is range: designing a data model, shipping an API, building the web client, and integrating an AI layer that respects the system's boundaries — all as one person. That end-to-end ownership is the point."
                    ar="Blatos بناءٌ مكتمل، لا منتجٌ منشور — لم أُطلقه بعد. ما يُظهره هو السعة: تصميم نموذج بيانات، وبناء API، وبناء عميل الويب، ودمج طبقة ذكاءٍ تحترم حدود النظام — كلّه بشخصٍ واحد. وهذه الملكية من الطرف إلى الطرف هي المقصد."
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
