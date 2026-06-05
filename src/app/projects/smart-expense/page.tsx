import type { Metadata } from "next";
import {
  CaseStudyLayout,
  ADR,
  Callout,
  FactGrid,
  Figure,
  Lead,
} from "@/components/case-study/CaseStudyLayout";
import { SmartExpenseDiagram } from "@/components/case-study/ArchitectureDiagram";
import {
  StructuredData,
  caseStudyStructuredData,
} from "@/components/site/StructuredData";

const DESCRIPTION =
  "Odoo 19 module. Token-secured one-click email approvals routed via hr.employee hierarchy. Auto-generated journal entries on finance sign-off. LGPL-3.0.";

export const metadata: Metadata = {
  title: "Smart Expense Manager — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "Smart Expense Manager — approvals at one click",
    description: DESCRIPTION,
    type: "article",
    url: "https://moznjamous.com/projects/smart-expense",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Expense Manager — approvals at one click",
    description: DESCRIPTION,
  },
};

export default function SmartExpensePage() {
  return (
    <>
      <StructuredData
        data={caseStudyStructuredData({
          name: "Smart Expense Manager",
          description: DESCRIPTION,
          path: "/projects/smart-expense",
          year: "2026",
        })}
      />
      <CaseStudyLayout
      meta={{
        eyebrow: "UX-led design · Odoo 19 · Open source",
        status: "Live · LGPL-3.0",
        title: "Smart Expense Manager — approvals at the speed of one click.",
        lede: "An Odoo 19 custom module that replaces paper-based expense flows. Token-secured email approvals route via the hr.employee hierarchy — no login required. Auto-generated journal entries on finance sign-off; monthly PDF reports emailed by cron.",
        year: "2026 — Present",
        role: "UX-led design + Sole developer",
        stack: [
          "Python",
          "Odoo 19 ORM",
          "PostgreSQL",
          "QWeb",
          "OWL",
          "XML",
          "Bootstrap",
        ],
        links: [
          {
            label: "View on GitHub",
            href: "https://github.com/Mozn-jamous/smart-expense-manager",
            external: true,
            primary: true,
          },
        ],
      }}
      metrics={[
        { value: "Days → Secs", label: "Approval time — one-click flow, no login required" },
        { value: "No login", label: "Managers act from email; the system gets used" },
        { value: "Audit-grade", label: "Access enforced in record rules, not hidden menus" },
        { value: "Open source", label: "Live on GitHub under LGPL-3.0" },
      ]}
      sections={[
        {
          kicker: "Overview",
          heading: "What it does, and what I owned.",
          body: (
            <>
              <Lead>
                Employee submits a receipt from mobile. Manager approves with one
                click from email. Finance posts with one click from email. The
                journal entry is generated automatically and a monthly department
                digest is mailed by cron — no logins along the way.
              </Lead>
              <FactGrid
                items={[
                  { label: "Role", value: "UX + sole developer" },
                  { label: "Timeline", value: "2026 — present" },
                  { label: "Module type", value: "Odoo 19 custom" },
                  { label: "Users", value: "Employees · managers · finance" },
                  { label: "Auth pattern", value: "Token-secured URL" },
                  { label: "License", value: "LGPL-3.0 · open source" },
                ]}
              />
            </>
          ),
        },
        {
          kicker: "Problem",
          heading: "Paper-based expense workflows in small businesses are quietly broken.",
          body: (
            <>
              <p>
                In a typical small business in Damascus, an employee buys
                something for work, keeps the receipt in a desk drawer for two
                weeks, hands it to a manager who signs a paper form, walks it to
                finance who types it into a ledger — and at every stage someone
                is the bottleneck. Receipts get lost. Numbers get re-typed. The
                whole loop is invisible to the company until month-end.
              </p>
              <p>
                Existing Odoo expense modules require everyone in the chain to
                log into the system. In practice, managers don&apos;t log in.
                Approvals stall. The system goes unused.{" "}
                <strong>I needed a flow that works for people who never open
                Odoo.</strong>
              </p>
            </>
          ),
        },
        {
          kicker: "Design strategy",
          heading: "Optimize for the approval that actually happens.",
          body: (
            <>
              <Lead>
                A module that&apos;s technically complete but never used is a
                failure. The whole strategy was to remove every reason a manager
                might not approve — starting with the login.
              </Lead>
              <FactGrid
                items={[
                  { label: "Goal", value: "Approvals that actually get done, fast" },
                  { label: "Hypothesis", value: "Email-as-UI removes the stall that kills adoption" },
                  { label: "Priority", value: "Friction reduction over feature surface" },
                  { label: "Tradeoff", value: "Token-security burden for a zero-login flow" },
                ]}
              />
            </>
          ),
        },
        {
          kicker: "Approach",
          heading: "Email is the UI.",
          body: (
            <>
              <p>
                The module attaches a unique token to each expense request when
                it&apos;s sent to a manager. The approval email contains two
                links: <strong>Approve</strong> and <strong>Reject</strong>. Each
                link is a one-time URL bound to the token, the request ID, and
                the manager&apos;s hr.employee record. Clicking it triggers a
                state transition — no Odoo login required.
              </p>

              <SmartExpenseDiagram />

              <Callout kicker="Design principle">
                Friction is the enemy of compliance. Every login the user has to
                make is a chance to forget to approve — so the action lives where
                they already are: their inbox.
              </Callout>

              <Figure
                label="Approval email"
                caption="One-click Approve / Reject email — add screenshot"
              />
            </>
          ),
        },
        {
          kicker: "Technical architecture",
          heading: "Three trade-offs that shaped the build.",
          body: (
            <>
              <ADR
                number={1}
                title="Token-secured URLs over OAuth approval flows."
                context={
                  <>
                    The standard Odoo pattern sends a notification email with a
                    link into the Odoo UI. Manager logs in, finds the record,
                    clicks approve. Real-world result: approvals stall for days.
                  </>
                }
                decision={
                  <>
                    I embed a <strong>cryptographically random token</strong> in
                    the email URL itself. The token is single-use, bound to the
                    request and the manager&apos;s employee record, and expires
                    once acted on.
                  </>
                }
                consequences={
                  <>
                    Approvals collapse from days to seconds, and every state
                    transition logs the token used. Trade-off: emails must be
                    sent over TLS-encrypted SMTP, since the token grants action
                    rights.
                  </>
                }
              />

              <ADR
                number={2}
                title="Journal entries on finance approval, not on submission."
                context={
                  <>
                    An eager design auto-creates the journal entry the moment an
                    employee submits. Simpler state machine, but the ledger fills
                    with unapproved entries that have to be reversed.
                  </>
                }
                decision={
                  <>
                    The <code>account.move</code> is only generated on the
                    finance-approval transition. Until then, the request is just
                    an HR record.
                  </>
                }
                consequences={
                  <>
                    The ledger stays clean — accountants only see entries that
                    are real liabilities. Trade-off: an extra state, and the cron
                    digest must know to skip pending requests.
                  </>
                }
              />

              <ADR
                number={3}
                title="RBAC at the record-rule layer, not the menu layer."
                context={
                  <>
                    The easiest Odoo RBAC hides menus per group. But users can
                    still construct URLs and reach records they shouldn&apos;t
                    see.
                  </>
                }
                decision={
                  <>
                    Permissions live in <strong>record rules</strong> at the ORM
                    layer. An employee sees only their own requests; a manager
                    only requests routed to them; finance the approved queue.
                    Menu hiding is cosmetic — the rules are the contract.
                  </>
                }
                consequences={
                  <>
                    Audit-grade access enforcement. A URL-poking employee hits an
                    ORM exception, not a leak. Trade-off: a small testing matrix
                    for cross-role visibility.
                  </>
                }
              />
            </>
          ),
        },
        {
          kicker: "Bilingual by default",
          heading: "Full EN/AR translations — not an afterthought.",
          body: (
            <>
              <p>
                Every field, label, status, email template, and PDF report ships
                with full Arabic and English translations. The approval emails
                detect the recipient&apos;s preferred language from their{" "}
                <code>res.users.lang</code> setting, and QWeb-generated PDF
                reports pick up the same locale automatically.
              </p>
              <p>
                In a Damascus-based SME, this is what makes the difference between
                a module that gets installed and one that gets used.
              </p>
            </>
          ),
        },
        {
          kicker: "Outcomes",
          heading: "A pattern worth open-sourcing.",
          body: (
            <>
              <p>
                Smart Expense is live and open source under LGPL-3.0 — the
                token-secured approval flow turns a multi-day paper loop into a
                one-click action that managers complete from their inbox, with
                access enforced at the ORM layer and a clean ledger downstream.
              </p>
              <ol className="list-decimal space-y-2 pl-5 marker:text-[var(--accent)]">
                <li>
                  <strong>Reusable.</strong> The token-secured approval pattern
                  generalizes far beyond expense reports.
                </li>
                <li>
                  <strong>Auditable.</strong> An Odoo 19 module signed with my
                  name lives longer than a CV bullet.
                </li>
                <li>
                  <strong>Low IP risk.</strong> The module is mechanical, not
                  strategic — sharing it costs nothing and helps the Odoo
                  community.
                </li>
              </ol>
            </>
          ),
        },
        {
          kicker: "Reflection",
          heading: "What I'd carry forward.",
          body: (
            <>
              <p>
                The win here was a product insight, not a technical one: meeting
                people where they already are (their inbox) beats any amount of
                in-app polish they&apos;ll never see. I&apos;ll keep reaching for
                the lowest-friction surface before building a new screen.
              </p>
              <p>
                Next, I&apos;d add usage analytics and a lightweight audit
                dashboard — the token model already logs every transition, so
                the data to prove adoption is there to surface.
              </p>
            </>
          ),
        },
      ]}
      nextProject={{
        label: "BloomBelly — three AIs behind one app →",
        href: "/projects/bloombelly",
      }}
      />
    </>
  );
}
