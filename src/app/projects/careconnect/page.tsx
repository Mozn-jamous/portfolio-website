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
import { CareConnectDiagram } from "@/components/case-study/ArchitectureDiagram";
import {
  StructuredData,
  caseStudyStructuredData,
} from "@/components/site/StructuredData";

const DESCRIPTION =
  "Three Flutter apps designed for three distinct audiences — Mother, Babysitter, Admin — on one Supabase backend. UX-first, then built.";

export const metadata: Metadata = {
  title: "CareConnect — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "CareConnect — one backend, three audiences",
    description: DESCRIPTION,
    type: "article",
    url: "https://moznjamous.com/projects/careconnect",
  },
  twitter: {
    card: "summary_large_image",
    title: "CareConnect — one backend, three audiences",
    description: DESCRIPTION,
  },
};

export default function CareConnectPage() {
  return (
    <>
      <StructuredData
        data={caseStudyStructuredData({
          name: "CareConnect",
          description: DESCRIPTION,
          path: "/projects/careconnect",
          year: "2024",
        })}
      />
      <CaseStudyLayout
      meta={{
        eyebrow: "UI/UX · Mobile · 3-app marketplace",
        status: "Shipped — 2024",
        title: "CareConnect — one backend, three audiences.",
        lede: "A childcare marketplace designed and built as three native Flutter apps — each shaped around a different user's mental model — on a single Supabase backend. The information architecture came before the first Figma frame.",
        year: "2024",
        role: "UI/UX Designer + Developer",
        stack: ["Figma", "Flutter", "Dart", "Supabase", "PostgreSQL", "RLS", "REST", "RBAC", "IEEE 830"],
        links: [
          {
            label: "Figma prototype",
            href: "https://figma.com/design/8nNCv2zMnDqGnqq0y9z0i0",
            external: true,
            primary: true,
          },
        ],
      }}
      metrics={[
        { value: "3 apps", label: "One per audience — no role-switching compromises" },
        { value: "1 backend", label: "Supabase RLS enforces access at the database layer" },
        { value: "Spec-first", label: "IEEE 830 requirements written before any wireframe" },
        { value: "Auditable", label: "Every admin action logged; access provable in SQL" },
      ]}
      sections={[
        {
          kicker: "Overview",
          heading: "What it is, and what I owned.",
          body: (
            <>
              <Lead>
                CareConnect is a childcare marketplace with three sides —
                mothers booking care, babysitters offering it, and admins
                moderating the platform. I designed and built all three as
                separate Flutter apps over one shared backend.
              </Lead>
              <FactGrid
                items={[
                  { label: "Role", value: "Designer + developer (solo)" },
                  { label: "Timeline", value: "2024" },
                  { label: "Platform", value: "3× Flutter · iOS + Android" },
                  { label: "Audiences", value: "Mother · Babysitter · Admin" },
                  { label: "Backend", value: "Supabase · Postgres · RLS" },
                  { label: "Scope", value: "SRS → Figma → Flutter" },
                ]}
              />
            </>
          ),
        },
        {
          kicker: "Problem",
          heading: "A marketplace lives or dies on trust between three sides.",
          body: (
            <>
              <p>
                You can&apos;t solve childcare with a single app. Mothers need
                quick, vetted matches. Babysitters need a schedule and reliable
                payment visibility. Admins need control — who is verified, who is
                flagged, and how to intervene without breaking the platform.
              </p>
              <p>
                Each side trusts the platform only if the other two are held to
                rules they can&apos;t see but can feel. That trust is an
                information-architecture and access-control problem long before
                it&apos;s a UI one.
              </p>
            </>
          ),
        },
        {
          kicker: "Research",
          heading: "One spec, three mental models.",
          body: (
            <>
              <p>
                I started with an IEEE 830 software requirements spec — every
                entity, every relation, every user flow — before any screen was
                designed. Writing it forced the core insight: a mother is{" "}
                <em>shopping</em>, a babysitter is <em>selling time</em>, and an
                admin is <em>moderating</em>. Three fundamentally different tasks
                that produce three fundamentally different information
                architectures.
              </p>
              <Callout kicker="Key insight">
                The most important design decision wasn&apos;t a screen — it was
                the data model. If the schema is wrong, no amount of good UI
                fixes it. So the spec came before Figma.
              </Callout>
            </>
          ),
        },
        {
          kicker: "Design strategy",
          heading: "Decide the structure before drawing a single screen.",
          body: (
            <>
              <Lead>
                The strategic bet was that a marketplace&apos;s hardest problem is
                keeping three audiences and one backend coherent — so the schema
                and permission model had to lead, and the UI follow.
              </Lead>
              <FactGrid
                items={[
                  { label: "Goal", value: "Trust across all three sides of the marketplace" },
                  { label: "Hypothesis", value: "Three focused apps beat one role-switching app" },
                  { label: "Priority", value: "Data model & access rules before UI" },
                  { label: "Tradeoff", value: "Higher build cost for honest, focused surfaces" },
                ]}
              />
            </>
          ),
        },
        {
          kicker: "Design process",
          heading: "Three audiences. Three mental models. Three apps.",
          body: (
            <>
              <p>
                The decision to build three separate apps instead of one with
                role-switching is a design decision before it&apos;s an
                engineering one. I designed each app in its own Figma file, with
                its own navigation and vocabulary.
              </p>

              <DesignDecision
                number={1}
                title="Three dedicated apps over one role-switching app."
                challenge={
                  <>
                    A single app with role-switching is cheaper to build and
                    maintain. Many marketplaces ship this way — one codebase, one
                    store listing, one onboarding flow.
                  </>
                }
                decision={
                  <>
                    Three apps. Each audience has a different primary action, a
                    different vocabulary, and different expectations.{" "}
                    <strong>
                      No &ldquo;you are logged in as: Mother&rdquo; cognitive
                      load.
                    </strong>
                  </>
                }
                outcome={
                  <>
                    Each app has a focused navigation structure and a store
                    listing that describes exactly what it does for that user.
                    Higher initial cost, but each surface stays honest to its
                    audience.
                  </>
                }
              />

              <Figure
                label="CareConnect UI"
                caption="Mother · Babysitter · Admin — three Figma files — add export"
              />
            </>
          ),
        },
        {
          kicker: "Technical architecture",
          heading: "One Postgres. Three clients. Zero shared-state hacks.",
          body: (
            <>
              <p>
                Every read and write goes through Supabase RLS. A mother can only
                see active babysitters within her search radius. A babysitter can
                only see and modify her own profile and bookings. An admin sees
                everything — but every admin action is logged. The role
                enforcement lives in the database, not the client.
              </p>

              <CareConnectDiagram />

              <FactGrid
                items={[
                  { label: "Mother app", value: "Discover · Book · Pay" },
                  { label: "Babysitter app", value: "Profile · Schedule" },
                  { label: "Admin app", value: "Moderate · Audit" },
                  { label: "Auth", value: "Supabase Auth" },
                  { label: "Realtime", value: "Postgres CDC" },
                  { label: "Policies", value: "RLS · RBAC" },
                ]}
              />

              <ADR
                number={1}
                title="Supabase + RLS over Firebase + client-side guards."
                context={
                  <>
                    Firebase is the default for student marketplaces. Auth +
                    Firestore is fast to wire. But security rules in Firestore
                    are a JSON DSL that&apos;s easy to get subtly wrong — and the
                    client can be modified.
                  </>
                }
                decision={
                  <>
                    Postgres + Supabase RLS. RLS policies are real SQL, run on
                    every query, and{" "}
                    <strong>impossible to bypass from the client</strong>. A
                    mother&apos;s query physically cannot return another
                    mother&apos;s bookings.
                  </>
                }
                consequences={
                  <>
                    The security model is auditable and reviewable. It&apos;s also
                    what made the three-app design viable — each client just asks
                    the database for what it can see; the database is the access
                    layer.
                  </>
                }
              />
            </>
          ),
        },
        {
          kicker: "Challenges",
          heading: "Keeping three apps and one backend from drifting apart.",
          body: (
            <>
              <p>
                Three apps are tempting to think of as three projects. In
                practice the apps are the easy part; the hard part is keeping a
                schema and permission model consistent across three distinct
                experiences without forking into three copies of the same code.
              </p>

              <ADR
                number={2}
                title="IEEE 830 SRS before a single screen was designed."
                context={
                  <>
                    Most projects skip the SRS and discover the spec through
                    implementation. Faster start, painful middle.
                  </>
                }
                decision={
                  <>
                    A full IEEE 830 SRS first — every entity, relation, and user
                    flow. Then Figma. Then Flutter.
                  </>
                }
                consequences={
                  <>
                    When a payments change landed mid-development, the spec told
                    me exactly which six screens across two apps needed to
                    update. Refactoring became a search, not an excavation.
                  </>
                }
              />
            </>
          ),
        },
        {
          kicker: "Outcomes",
          heading: "Three honest surfaces on one provable backend.",
          body: (
            <>
              <p>
                CareConnect shipped as three focused apps on a single Supabase
                backend, with access control enforced in the database rather than
                trusted to the client — so each side&apos;s data boundaries are
                provable in SQL, and every admin action is auditable.
              </p>
              <p>
                The three-app decision wasn&apos;t an engineering call; it was a
                UX call that engineering had to honour. The spec-first habit
                isn&apos;t academic — it&apos;s the cheapest insurance against
                drift between three apps and one backend.
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
                The lesson that stuck: most of a multi-sided product&apos;s
                difficulty is information architecture and access control, not
                screen count. Writing the spec first felt slow and turned out to
                be the fastest path — it&apos;s now my default for anything with
                more than one type of user.
              </p>
              <p>
                Next time I&apos;d invest earlier in a shared component layer
                across the three apps, so visual consistency is enforced by code
                and not just by discipline.
              </p>
            </>
          ),
        },
      ]}
      nextProject={{
        label: "Smart Expense Manager — Odoo 19 open source →",
        href: "/projects/smart-expense",
      }}
      />
    </>
  );
}
