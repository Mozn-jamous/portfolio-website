import type { Metadata } from "next";
import {
  CaseStudyLayout,
  ADR,
  Callout,
  DesignDecision,
  FactGrid,
  Figure,
  Lead,
} from "@/components/case-study/CaseStudyLayout";
import { BloomBellyDiagram } from "@/components/case-study/ArchitectureDiagram";
import {
  StructuredData,
  caseStudyStructuredData,
} from "@/components/site/StructuredData";

const DESCRIPTION =
  "Arabic-first maternal health app. Designed in Figma, built in Flutter — three AI models behind one bilingual RTL interface.";

export const metadata: Metadata = {
  title: "BloomBelly — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "BloomBelly — three AIs behind one app",
    description: DESCRIPTION,
    type: "article",
    url: "https://moznjamous.com/projects/bloombelly",
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
      meta={{
        eyebrow: "UI/UX · AI Healthcare · Graduation",
        status: "Shipped — 2025",
        title: "BloomBelly — three AIs behind one app.",
        lede: "An Arabic-first maternal and child health companion. Designed in Figma before a line of Flutter was written — full RTL, bilingual, four user roles — then backed by three specialized AI models orchestrated by Flask.",
        year: "2025",
        role: "UI/UX Designer + Developer",
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
            label: "Figma prototype",
            href: "https://figma.com/design/dxpDoQBHXpv6tiysUVUpSA",
            external: true,
            primary: true,
          },
        ],
      }}
      metrics={[
        { value: "Shipped", label: "Real Arabic-first app — designed and built, not a demo" },
        { value: "3 models", label: "Vision, chat, and nutrition behind one interface" },
        { value: "Arabic-first", label: "Designed in RTL before any Flutter code" },
        { value: "Refuses", label: "Calibrated to defer to a doctor rather than guess" },
      ]}
      sections={[
        {
          kicker: "Overview",
          heading: "What it is, and what I owned.",
          body: (
            <>
              <Lead>
                BloomBelly is an Arabic-first health companion for expectant and
                new mothers: an AI chatbot, a medical-image helper, and a
                nutrition guide, behind one bilingual interface. It was my
                graduation project at ASPU — and the brief was to ship a real
                product, not a slide deck.
              </Lead>
              <FactGrid
                items={[
                  { label: "Role", value: "Designer + developer (solo)" },
                  { label: "Timeline", value: "Graduation project · 2025" },
                  { label: "Platform", value: "Flutter · iOS + Android" },
                  { label: "Users", value: "Arabic-speaking mothers" },
                  { label: "Scope", value: "Research → Figma → Flutter → AI" },
                  { label: "User roles", value: "Four, designed separately" },
                ]}
              />
            </>
          ),
        },
        {
          kicker: "Problem",
          heading: "Arabic-first maternal health — in a market of English-first tools.",
          body: (
            <>
              <p>
                For an expectant mother in the Arab world, the gap between an
                Arabic search query and a trustworthy clinical answer is
                enormous. English-language tools dominate digital health. The
                few Arabic resources that exist are static articles or generic
                chatbots that hallucinate medical advice — which, in maternal
                care, is worse than no answer at all.
              </p>
              <p>
                The brief was deliberately ambitious: a real, Arabic-first
                health app for mothers in Damascus. That meant solving the
                language problem at the design level first, and the engineering
                level second.
              </p>
            </>
          ),
        },
        {
          kicker: "Research",
          heading: "Mapping the journeys before designing the screens.",
          body: (
            <>
              <p>
                Before any UI, I mapped four distinct user journeys in Figma and
                studied where existing Arabic health tools break down. Two
                findings shaped everything that followed.
              </p>
              <p>
                <strong>Language has registers.</strong> Medical information
                needs the precision of Modern Standard Arabic; a mother asking
                about her pregnancy needs warmth. The same app has to speak both.
              </p>
              <p>
                <strong>A wrong answer is a safety risk, not a UX papercut.</strong>{" "}
                A confident chatbot that invents a dosage is a liability. The
                product had to be designed to know — and show — when it
                doesn&apos;t know.
              </p>
              <Figure
                label="User journeys"
                caption="Four user-journey maps from Figma — add export"
              />
            </>
          ),
        },
        {
          kicker: "Design strategy",
          heading: "Trust was the design constraint everything bent around.",
          body: (
            <>
              <Lead>
                Every decision traced back to one question: would a mother trust
                this with a question about her pregnancy? That ruled the model
                choices, the tone, and the failure states.
              </Lead>
              <FactGrid
                items={[
                  { label: "Goal", value: "A health companion mothers trust in Arabic" },
                  { label: "Hypothesis", value: "Specialized models + an explicit refusal beat one general model" },
                  { label: "Priority", value: "Safety & tone over answer coverage" },
                  { label: "Tradeoff", value: "Fewer impressive demo answers, in exchange for trust" },
                ]}
              />
            </>
          ),
        },
        {
          kicker: "Design process",
          heading: "RTL isn't a checkbox. It's a design language.",
          body: (
            <>
              <p>
                Every screen lived in Figma — in Arabic — before a single
                Flutter widget existed. Designing Arabic-first surfaced decisions
                that English-first tools never force you to make.
              </p>

              <DesignDecision
                number={1}
                title="MSA for medical, Levantine for conversational."
                challenge={
                  <>
                    Medical information needs the precision of Modern Standard
                    Arabic. But a chatbot that answers in stiff MSA feels cold —
                    the wrong tone for a mother asking about her pregnancy.
                  </>
                }
                decision={
                  <>
                    <strong>MSA for all medical content</strong> — diagnoses,
                    nutrition data, image descriptions. A{" "}
                    <strong>warmer, Levantine-leaning register</strong> for the
                    chatbot&apos;s conversational surface.
                  </>
                }
                outcome={
                  <>
                    The distinction is invisible to users but felt immediately.
                    The chatbot reads like a knowledgeable friend, not a medical
                    disclaimer.
                  </>
                }
              />

              <Callout kicker="Design constraint">
                Mixed content was the hardest rendering problem: Arabic sentences
                containing English drug names, dosages, and abbreviations.
                Flutter&apos;s BiDi engine needed explicit direction markers for
                every mixed string — tested across iOS and Android on real
                devices.
              </Callout>

              <Figure
                label="BloomBelly UI"
                caption="Key screens — chatbot, imaging, nutrition (RTL) — add export"
              />
            </>
          ),
        },
        {
          kicker: "Technical architecture",
          heading: "One Flutter app. Three specialized models. One Flask brain.",
          body: (
            <>
              <p>
                I treated the AI layer as three independent capabilities, because
                real maternal questions don&apos;t fit one model. Flask routes
                incoming requests to the right model based on intent
                classification, then formats Arabic responses with source
                citations. Supabase handles auth, profile, pregnancy-week
                tracking, and stores conversation history for continuity between
                sessions.
              </p>

              <BloomBellyDiagram />

              <FactGrid
                items={[
                  { label: "Imaging model", value: "Google Gemini" },
                  { label: "Chatbot model", value: "LoRA-tuned LLM" },
                  { label: "Nutrition model", value: "Random Forest" },
                  { label: "Orchestrator", value: "Python · Flask" },
                  { label: "Auth & data", value: "Supabase" },
                  { label: "Client", value: "Flutter · iOS + Android" },
                ]}
              />

              <ADR
                number={1}
                title="Three models, each with its own purpose-built screen."
                context={
                  <>
                    A single fine-tuned LLM could answer questions, classify
                    nutrition, and describe images. One model, one screen, one
                    deployment surface.
                  </>
                }
                decision={
                  <>
                    Three specialized models — Gemini for vision, a LoRA-tuned
                    transformer for Q&amp;A, Random Forest for nutrition. Each
                    gets a <strong>purpose-built screen</strong> designed around
                    how that capability is actually used: camera for imaging,
                    chat for Q&amp;A, a guided form for nutrition.
                  </>
                }
                consequences={
                  <>
                    Each model is auditable in isolation — critical for a
                    healthcare context. The UX is cleaner too: users pick the
                    right tool for the question instead of one modal that tries
                    to do everything.
                  </>
                }
              />

              <ADR
                number={2}
                title="Supabase + Flask for session continuity."
                context={
                  <>
                    Firebase is the default for student healthcare apps. Cheaper
                    start, faster auth, no servers to manage.
                  </>
                }
                decision={
                  <>
                    Postgres-backed Supabase + a Flask orchestrator. The clinical
                    context required real relational data (cycles, conditions,
                    visits) and{" "}
                    <strong>conversation history that persists</strong> across
                    sessions.
                  </>
                }
                consequences={
                  <>
                    Users don&apos;t repeat themselves to the chatbot — that
                    continuity is the experience. RLS gave per-profile isolation
                    for free; the operational overhead was worth it.
                  </>
                }
              />
            </>
          ),
        },
        {
          kicker: "Challenges",
          heading: "What was hard, and the tradeoffs I took.",
          body: (
            <>
              <p>
                <strong>Arabic rendering, not the AI, was the long pole.</strong>{" "}
                Calling a model is a few lines of code. Numbers, punctuation, and
                English drug names inside Arabic sentences each needed explicit
                BiDi handling, verified on real devices across both platforms.
              </p>

              <ADR
                number={3}
                title="Calibrated refusals — designed as a first-class state, not an error."
                context={
                  <>
                    A confident LLM that hallucinates dosages is dangerous in
                    maternal care. Generic Arabic chatbots fail badly here.
                  </>
                }
                decision={
                  <>
                    Below a confidence threshold, the chatbot returns{" "}
                    <strong>
                      &ldquo;استشيري طبيبتك / Consult your doctor&rdquo;
                    </strong>{" "}
                    instead of guessing — designed in Figma as a{" "}
                    <strong>warm, non-error state</strong>, not a red warning
                    box.
                  </>
                }
                consequences={
                  <>
                    Trust over benchmark. Fewer impressive demo answers, but the
                    product is safe to put in front of real mothers. The design
                    treatment of the refusal mattered as much as the threshold.
                  </>
                }
              />
            </>
          ),
        },
        {
          kicker: "Outcomes",
          heading: "A real, defensible product — and a way of working.",
          body: (
            <>
              <p>
                BloomBelly shipped as a working Arabic-first app and was the
                basis of my graduation project: three AI capabilities behind one
                bilingual interface, calibrated to defer to a clinician rather
                than guess. No hallucinated medical advice by design.
              </p>
              <p>
                The lasting result is a method. The Figma prototype — Arabic
                screens first, English second — became the spec; when something
                looked wrong in Flutter, the Figma file was the reference.{" "}
                <strong>Designing before building saved weeks</strong>, and it&apos;s
                how I&apos;ve worked on every product since.
              </p>
            </>
          ),
        },
        {
          kicker: "Reflection",
          heading: "What I'd carry forward.",
          body: (
            <>
              <p>
                BloomBelly taught me that in a regulated domain the interesting
                work is the restraint: deciding what the product should refuse to
                do. The calibrated-refusal pattern and the Figma-first method are
                the two things I&apos;ve reused on every project since.
              </p>
              <p>
                If I took it further, the next step is real clinical validation
                and structured testing with mothers — the architecture is ready
                for it; the evidence is what a production health product would
                need next.
              </p>
            </>
          ),
        },
      ]}
      nextProject={{
        label: "CareConnect — one backend, three audiences →",
        href: "/projects/careconnect",
      }}
      />
    </>
  );
}
