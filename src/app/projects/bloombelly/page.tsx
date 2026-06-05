import type { Metadata } from "next";
import {
  CaseStudyLayout,
  ADR,
  Callout,
  FactGrid,
  Lead,
} from "@/components/case-study/CaseStudyLayout";
import { BloomBellyDiagram } from "@/components/case-study/ArchitectureDiagram";

export const metadata: Metadata = {
  title: "BloomBelly — Mozn Jamous",
  description:
    "Arabic-first maternal & child health companion. Flutter app with three integrated AI components: Gemini for imaging, LoRA transformer for Q&A, Random Forest for nutrition.",
};

export default function BloomBellyPage() {
  return (
    <CaseStudyLayout
      meta={{
        eyebrow: "Graduation thesis · AI healthcare",
        status: "Shipped — 2025",
        title: "BloomBelly — three AIs behind one phone.",
        lede: "An Arabic-first maternal and child health companion. Three specialized models — vision, text, classifier — orchestrated by Flask, delivered through a Flutter app, deployable inside clinics via a doctor-administered wallet.",
        year: "2025",
        role: "End-to-end · Mobile + AI integration",
        stack: [
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
          { label: "Citation file", href: "/#outro" },
        ],
      }}
      metrics={[
        { value: "3", label: "AI components" },
        { value: "4", label: "User roles" },
        { value: "7", label: "Research references" },
        { value: "AR-first", label: "RTL · Levantine UX" },
      ]}
      sections={[
        {
          kicker: "TL;DR",
          heading: "What I built.",
          body: (
            <>
              <Lead>
                BloomBelly combines three specialized AI components — Google
                Gemini for medical image analysis, a LoRA-fine-tuned
                transformer for the medical chatbot, and a Random Forest
                classifier for nutrition guidance — behind a Python Flask
                backend and a Flutter mobile app, with a doctor-administered
                wallet system that enables clinic distribution.
              </Lead>
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
            </>
          ),
        },
        {
          kicker: "The problem",
          heading: "Maternal health information is everywhere — and nowhere.",
          body: (
            <>
              <p>
                For an expectant mother in the Arab world, the gap between an
                Arabic search query and a trustworthy clinical answer is
                enormous. English-language tools dominate digital health. The
                few Arabic resources that exist are static articles or generic
                chatbots that hallucinate medical advice. Meanwhile, obstetric
                clinics in Damascus are stretched thin and follow-up visits
                are rare.
              </p>
              <p>
                BloomBelly was my graduation project at ASPU. The brief was
                deliberately ambitious: ship a real, Arabic-first health app —
                not a demo.
              </p>
            </>
          ),
        },
        {
          kicker: "Architecture",
          heading: "One Flutter app. Three specialized models. One Flask brain.",
          body: (
            <>
              <p>
                I treated the AI layer as three independent capabilities,
                because real maternal questions don&apos;t fit one model.
                Flask routes incoming requests to the right model based on
                intent classification, then formats Arabic responses with
                source citations. Supabase handles auth, profile, pregnancy
                week tracking, and stores conversation history for continuity
                between sessions.
              </p>

              <BloomBellyDiagram />

              <Callout kicker="Design principle">
                Every screen had to work in Arabic first, English second — not
                the other way around. RTL layout, Arabic numerals, MSA for
                medical terminology, Levantine-leaning tone for the
                conversational surface.
              </Callout>
            </>
          ),
        },
        {
          kicker: "Engineering decisions",
          heading: "Three trade-offs that shaped the build.",
          body: (
            <>
              <ADR
                number={1}
                title="Three models, not one general-purpose LLM."
                context={
                  <>
                    A single fine-tuned LLM could answer questions, classify
                    nutrition, and describe images. Cheaper to operate, one
                    deployment surface.
                  </>
                }
                decision={
                  <>
                    I chose <strong>three specialized models</strong> — Gemini
                    for vision, LoRA-tuned transformer for Q&amp;A, Random
                    Forest for nutrition. Routed via intent classification at
                    the Flask layer.
                  </>
                }
                consequences={
                  <>
                    More deployment complexity, but each model is auditable in
                    isolation — critical for a healthcare context where
                    calibrated refusals matter more than a confident
                    one-size-fits-all answer.
                  </>
                }
              />

              <ADR
                number={2}
                title="Supabase + Flask, not Firebase + Cloud Functions."
                context={
                  <>
                    Firebase is the default for student healthcare apps.
                    Cheaper start, faster auth setup, no servers to manage.
                  </>
                }
                decision={
                  <>
                    I chose <strong>Postgres-backed Supabase + a Flask
                    orchestrator</strong>. The clinical context required real
                    relational data (cycles, conditions, visits) and
                    auditable access logs.
                  </>
                }
                consequences={
                  <>
                    More operational work, but RLS gave me doctor-administered
                    wallets and per-clinic isolation for free. The Flask layer
                    owned the routing logic that decides which model answers.
                  </>
                }
              />

              <ADR
                number={3}
                title="Calibrated refusals built into the chatbot."
                context={
                  <>
                    A confident LLM that hallucinates dosages is a liability
                    in maternal care. Generic Arabic chatbots fail badly here.
                  </>
                }
                decision={
                  <>
                    Below a confidence threshold, the chatbot returns{" "}
                    <strong>
                      &ldquo;استشيري طبيبتك / Consult your doctor&rdquo;
                    </strong>{" "}
                    instead of guessing. The threshold was tuned against a
                    clinical-review dataset.
                  </>
                }
                consequences={
                  <>
                    Fewer &ldquo;impressive&rdquo; answers in demos, but the
                    product is safe to put in front of real mothers. Trust
                    over benchmark.
                  </>
                }
              />
            </>
          ),
        },
        {
          kicker: "What I learned",
          heading: "AI is the easy part. Arabic UX is where the work lives.",
          body: (
            <>
              <p>
                Calling a model is a few lines of code. Making sure
                Arabic-language medical answers are accurate, culturally
                appropriate, and rendered correctly across Flutter&apos;s RTL
                quirks is months of iteration. Numbers, punctuation, mixed
                English drug names inside Arabic sentences — every detail had
                to be solved.
              </p>
              <p>
                The biggest insight: in a healthcare context,{" "}
                <strong>calibrated refusals matter more than confident
                answers</strong>. That decision shaped the product in a way
                no benchmark could measure.
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
  );
}
