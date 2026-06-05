import type { Metadata } from "next";
import {
  CaseStudyLayout,
  ADR,
  Callout,
  FactGrid,
  Lead,
} from "@/components/case-study/CaseStudyLayout";
import { CareConnectDiagram } from "@/components/case-study/ArchitectureDiagram";

export const metadata: Metadata = {
  title: "CareConnect — Mozn Jamous",
  description:
    "Three Flutter apps on one Supabase backend. A childcare marketplace built for mothers, babysitters, and admins — with role-based access at the database layer.",
};

export default function CareConnectPage() {
  return (
    <CaseStudyLayout
      meta={{
        eyebrow: "Three-app marketplace",
        status: "Shipped — 2025",
        title: "CareConnect — one backend, three audiences.",
        lede: "A childcare marketplace built as three native Flutter apps on a single Supabase backend. Mothers find vetted babysitters. Babysitters manage their availability. Admins keep the whole thing trustworthy.",
        year: "2025",
        role: "End-to-end · Full product lifecycle",
        stack: ["Flutter", "Dart", "Supabase", "PostgreSQL", "RLS", "REST", "RBAC"],
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
        { value: "3", label: "Flutter apps" },
        { value: "1", label: "Shared backend" },
        { value: "3", label: "User roles" },
        { value: "IEEE 830", label: "Documentation" },
      ]}
      sections={[
        {
          kicker: "TL;DR",
          heading: "What I built.",
          body: (
            <>
              <Lead>
                Three Flutter apps — Mother, Babysitter, Admin — share a single
                Supabase backend with strict row-level security. The database
                is the contract; each client is just a different negotiation
                of it.
              </Lead>
            </>
          ),
        },
        {
          kicker: "The problem",
          heading: "A marketplace lives or dies on trust between three sides.",
          body: (
            <>
              <p>
                You can&apos;t solve childcare with a single app. Mothers need
                quick, vetted matches. Babysitters need a schedule, a profile,
                and reliable payment visibility. Admins need control — who is
                verified, who is flagged, what bookings are in flight, and how
                to intervene without breaking the platform.
              </p>
              <p>
                The wrong architecture would have been three separate
                backends — or worse, three half-synchronized copies of the
                same data. I built one Supabase backend with strict row-level
                security and pointed three purpose-built Flutter clients at
                it.
              </p>
            </>
          ),
        },
        {
          kicker: "Architecture",
          heading: "One Postgres. Three clients. Zero shared-state hacks.",
          body: (
            <>
              <p>
                Every read and write goes through Supabase RLS. A mother can
                only see active babysitters within her search radius. A
                babysitter can only see and modify her own profile and
                bookings. An admin sees everything — but every admin action
                is logged. The role enforcement lives in the database, not in
                the client.
              </p>

              <CareConnectDiagram />

              <Callout kicker="Design principle">
                The database is the contract. UI is just the negotiation.
              </Callout>

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
                title="Three apps over one polymorphic app."
                context={
                  <>
                    A single app with role-switching screens is cheaper to
                    build and maintain. Many marketplaces ship this way.
                  </>
                }
                decision={
                  <>
                    I chose <strong>three dedicated apps</strong>. Each
                    audience has fundamentally different mental models — a
                    mother is shopping, a babysitter is selling time, an admin
                    is moderating.
                  </>
                }
                consequences={
                  <>
                    Higher initial build cost, but each app stays focused. No
                    cluttered &ldquo;mode switch&rdquo; UI. Each install on
                    the store has the right copy, the right onboarding, the
                    right permissions.
                  </>
                }
              />

              <ADR
                number={2}
                title="Supabase + RLS over Firebase + client-side guards."
                context={
                  <>
                    Firebase is the default for student marketplaces. Auth +
                    Firestore is fast to wire. But security rules in Firestore
                    are a JSON DSL that is easy to get subtly wrong.
                  </>
                }
                decision={
                  <>
                    I chose <strong>Postgres + Supabase RLS</strong>. RLS
                    policies are real SQL, run on every query, and impossible
                    to bypass from the client.
                  </>
                }
                consequences={
                  <>
                    A small learning curve for RLS syntax, but the security
                    model is auditable and reviewable. Mother queries
                    physically cannot return another mother&apos;s bookings.
                  </>
                }
              />

              <ADR
                number={3}
                title="IEEE 830 SRS before a single screen was built."
                context={
                  <>
                    Most projects skip the SRS and discover the spec through
                    implementation. Faster start, painful middle.
                  </>
                }
                decision={
                  <>
                    I wrote a full <strong>IEEE 830 SRS</strong> first —
                    every entity, every relation, every user flow. Then I
                    built.
                  </>
                }
                consequences={
                  <>
                    When a payments change landed mid-development, the spec
                    told me exactly which six screens across two apps needed
                    to update. Refactoring became a search, not an
                    excavation.
                  </>
                }
              />
            </>
          ),
        },
        {
          kicker: "What I learned",
          heading: "Multi-app marketplaces are mostly about data, not UI.",
          body: (
            <>
              <p>
                It&apos;s tempting to think of three apps as three projects.
                In practice, the apps are the easy part. The hard part is
                designing a schema and a permission model that lets three
                distinct user experiences stay consistent without becoming
                three copies of the same code.
              </p>
              <p>
                The IEEE 830 habit isn&apos;t academic; it&apos;s the
                cheapest insurance against drift between three apps and one
                backend.
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
  );
}
