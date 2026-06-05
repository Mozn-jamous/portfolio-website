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

const DESCRIPTION =
  "Full product design and Flutter rebuild of Mademoiselle at Santa Media. Production Design System — multi-theme, full RTL, 17 text variants, 9 button variants.";

export const metadata: Metadata = {
  title: "Mademoiselle — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "Mademoiselle — redesigned from the ground up",
    description: DESCRIPTION,
    type: "article",
    url: "https://moznjamous.com/projects/mademoiselle",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mademoiselle — redesigned from the ground up",
    description: DESCRIPTION,
  },
};

export default function MademoisellePage() {
  return (
    <>
      <StructuredData
        data={caseStudyStructuredData({
          name: "Mademoiselle",
          description: DESCRIPTION,
          path: "/projects/mademoiselle",
          year: "2026",
        })}
      />
      <CaseStudyLayout
      meta={{
        eyebrow: "UI/UX · Flutter · Design System",
        status: "Active — 2026",
        title: "Mademoiselle — redesigned from the ground up.",
        lede: "A dormant FlutterFlow prototype brought back to production as a fully native Flutter app — with a complete UI redesign, a bilingual Design System (multi-theme, full RTL), and an AI module integration. Full design and development ownership.",
        year: "2026 — Present",
        role: "UI/UX Designer + Lead Flutter Developer",
        stack: [
          "Figma",
          "Flutter",
          "Dart",
          "Design Systems",
          "RTL",
          "Multi-theme",
          "AI Integration",
        ],
      }}
      metrics={[
        { value: "Stalled → live", label: "FlutterFlow prototype → native Flutter, now shipping" },
        { value: "26+", label: "Design System components — reused across every screen" },
        { value: "RTL-first", label: "Arabic-native, not an LTR mirror" },
        { value: "Multi-theme", label: "Light · Dark · Brand from one semantic token set" },
      ]}
      sections={[
        {
          kicker: "Overview",
          heading: "What it is, and what I owned.",
          body: (
            <>
              <Lead>
                Mademoiselle is a commercial mobile product at Santa Media. It
                had stalled as a FlutterFlow prototype; I was brought in to take
                it to production — and chose to redesign it before rebuilding it.
              </Lead>
              <FactGrid
                items={[
                  { label: "Role", value: "Designer + lead Flutter dev" },
                  { label: "Timeline", value: "2026 — present" },
                  { label: "Platform", value: "Flutter · iOS + Android" },
                  { label: "Audience", value: "Arabic-speaking, bilingual" },
                  { label: "Team", value: "Me + one AI-module engineer" },
                  { label: "Scope", value: "Redesign → DS → native rebuild" },
                ]}
              />
            </>
          ),
        },
        {
          kicker: "Problem",
          heading: "A dormant product, and a prototype that couldn't grow.",
          body: (
            <>
              <p>
                Mademoiselle had stalled in production with no clear path
                forward. FlutterFlow output is hard to extend and impossible to
                maintain at scale — and, more importantly, the original UI had
                never been designed for the app&apos;s actual Arabic-speaking
                audience.
              </p>
              <p>
                The team needed someone who could make the call on what to keep,
                what to rebuild, and how to set the product up so the next
                feature wouldn&apos;t require starting over again.
              </p>
            </>
          ),
        },
        {
          kicker: "Research",
          heading: "Why a rewrite was the right call, not the easy one.",
          body: (
            <>
              <p>
                I audited the existing prototype against where the product needed
                to go: more screens, an AI module, ongoing iteration, and a
                first-class Arabic experience. The FlutterFlow base failed on all
                four — every new screen compounded the maintenance cost, and RTL
                had been treated as an afterthought.
              </p>
              <Callout kicker="Decision">
                Rebuild natively — but design the system first. Opening Figma
                before the codebase was the difference between a rewrite that
                pays down debt and one that just moves it.
              </Callout>
            </>
          ),
        },
        {
          kicker: "Design strategy",
          heading: "Build the grammar before the sentences.",
          body: (
            <>
              <Lead>
                The strategic call was to treat the rebuild as a chance to set the
                product up to grow — a system first, so every later screen and the
                parallel AI module would inherit it for free.
              </Lead>
              <FactGrid
                items={[
                  { label: "Goal", value: "A maintainable, Arabic-first product that can keep growing" },
                  { label: "Hypothesis", value: "A system-first rebuild beats patching FlutterFlow" },
                  { label: "Priority", value: "Token grammar before screens" },
                  { label: "Tradeoff", value: "Slower start in exchange for zero design debt" },
                ]}
              />
            </>
          ),
        },
        {
          kicker: "Design process",
          heading: "Design System first. Screens second.",
          body: (
            <>
              <p>
                Building the Design System before building screens was a
                deliberate sequence. A system built after the screens are done is
                a retrofit — it never quite fits. Built first, it becomes the
                grammar everything else is written in.
              </p>

              <DesignDecision
                number={1}
                title="Multi-theme from day one — not added later."
                challenge={
                  <>
                    Most apps start with one theme and bolt on dark mode when
                    users complain. Adding theming after the fact means hardcoded
                    colours buried in every component.
                  </>
                }
                decision={
                  <>
                    Every token in the Design System is{" "}
                    <strong>semantic, not literal</strong> — <code>surface</code>,{" "}
                    <code>on-surface</code>, <code>primary</code>,{" "}
                    <code>on-primary</code> — never a raw hex value. Themes swap
                    by switching the token layer.
                  </>
                }
                outcome={
                  <>
                    Light, Dark, and Brand themes coexist with zero component
                    changes. A new theme is a token file, not a refactor.
                  </>
                }
              />

              <DesignDecision
                number={2}
                title="RTL-native, not RTL-mirrored."
                challenge={
                  <>
                    RTL support is commonly implemented as a visual mirror of an
                    LTR layout — flip the direction, swap some icons, call it
                    done. The result always feels foreign to Arabic readers.
                  </>
                }
                decision={
                  <>
                    The Figma file and every Flutter screen was{" "}
                    <strong>designed in Arabic first</strong>. Reading direction,
                    typographic hierarchy, spacing, and icon choices were all made
                    in RTL context — then adapted for LTR.
                  </>
                }
                outcome={
                  <>
                    The Arabic interface reads as the primary version. It is. LTR
                    is the adaptation, not the source of truth.
                  </>
                }
              />

              <Callout kicker="Typography system">
                17 text-style variants covering display, headline, title, body,
                label, and caption — each with size, weight, line-height, and
                letter-spacing tokens calibrated for both Arabic and Latin
                scripts. Arabic type needs tighter leading; Latin needs wider
                letter-spacing. One token set handles both.
              </Callout>

              <Figure
                label="Mademoiselle UI"
                caption="Key screens across Light / Dark / Brand themes — add export"
              />
            </>
          ),
        },
        {
          kicker: "Design system",
          heading: "26+ components. Two scripts. Three themes.",
          body: (
            <>
              <FactGrid
                items={[
                  { label: "Text variants", value: "17" },
                  { label: "Button variants", value: "9 — all states" },
                  { label: "Themes", value: "Light · Dark · Brand" },
                  { label: "Direction", value: "RTL + LTR" },
                  { label: "Scripts", value: "Arabic · Latin" },
                  { label: "Tokens", value: "Semantic — never raw hex" },
                ]}
              />
              <p>
                The 9 button variants cover the full interaction matrix —
                Primary, Secondary, Ghost, Destructive, and Icon — each with
                Default, Hover, Pressed, Disabled, and Loading states, in both
                Arabic and Latin type, across all three themes. Every state
                designed before any state was coded.
              </p>
              <Figure
                label="Component library"
                caption="Buttons × states × themes — Figma component sheet — add export"
              />
            </>
          ),
        },
        {
          kicker: "Challenges",
          heading: "Coordinating a parallel workstream without design debt.",
          body: (
            <>
              <p>
                The AI module was built in parallel by a second engineer while I
                drove the redesign and rebuild. The risk in any parallel
                workstream is divergence — two people inventing two visual
                languages that have to be reconciled later.
              </p>
              <p>
                The Design System absorbed that risk. Because the token grammar
                existed first, the AI-specific screens were built as instances of
                the same system rather than a separate look — so there was nothing
                to reconcile at the merge.
              </p>
            </>
          ),
        },
        {
          kicker: "Outcomes",
          heading: "The system is the product.",
          body: (
            <>
              <p>
                Mademoiselle is active and shipping as a native Flutter app on a
                bilingual, multi-theme Design System — a stalled prototype turned
                into a maintainable product. Every screen is an instance of the
                system, not a one-off, so inconsistencies surface in the system
                before they reach production.
              </p>
              <p>
                Building the system first inverts the usual order, where a Design
                System is documentation written at the end. Here it was the
                foundation — and it&apos;s why a second engineer&apos;s parallel
                work landed without accumulating design debt.
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
                Inheriting a stalled codebase made the case for design-system-first
                undeniable: the system was what let one person redesign and rebuild
                in parallel with a second engineer without the work drifting. I
                now treat the system as the first deliverable, not the last.
              </p>
              <p>
                With more time I&apos;d document the system as a living reference
                with usage examples, so future contributors extend it instead of
                quietly working around it.
              </p>
            </>
          ),
        },
      ]}
      nextProject={{
        label: "BloomBelly — Arabic-first AI healthcare →",
        href: "/projects/bloombelly",
      }}
      />
    </>
  );
}
