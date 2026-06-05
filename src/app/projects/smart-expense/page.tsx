import type { Metadata } from "next";
import {
  CaseStudyLayout,
  ADR,
  Callout,
  FactGrid,
  Lead,
} from "@/components/case-study/CaseStudyLayout";
import { SmartExpenseDiagram } from "@/components/case-study/ArchitectureDiagram";

export const metadata: Metadata = {
  title: "Smart Expense Manager — Mozn Jamous",
  description:
    "Odoo 19 module. Token-secured one-click email approvals routed via hr.employee hierarchy. Auto-generated journal entries on finance sign-off. LGPL-3.0.",
};

export default function SmartExpensePage() {
  return (
    <CaseStudyLayout
      meta={{
        eyebrow: "Open source · Odoo 19",
        status: "Live · LGPL-3.0",
        title: "Smart Expense Manager — approvals at the speed of one click.",
        lede: "An Odoo 19 custom module that replaces paper-based expense flows. Token-secured email approvals route via the hr.employee hierarchy — no login required. Auto-generated journal entries on finance sign-off; monthly PDF reports emailed by cron.",
        year: "2026 — Present",
        role: "Sole developer · open source",
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
        { value: "3", label: "RBAC tiers" },
        { value: "1-click", label: "Email approval" },
        { value: "EN · AR", label: "Translations" },
        { value: "LGPL-3.0", label: "License" },
      ]}
      sections={[
        {
          kicker: "TL;DR",
          heading: "What it does.",
          body: (
            <>
              <Lead>
                Employee submits a receipt from mobile. Manager approves with
                one click from email. Finance posts with one click from
                email. Journal entry generated automatically. Monthly
                department digest mailed by cron job. No logins along the
                way.
              </Lead>
              <FactGrid
                items={[
                  { label: "Module type", value: "Odoo 19 custom" },
                  { label: "Backend", value: "Python · Odoo ORM" },
                  { label: "DB", value: "PostgreSQL" },
                  { label: "Templating", value: "QWeb · OWL" },
                  { label: "Auth pattern", value: "Token-secured URL" },
                  { label: "Reporting", value: "QWeb PDF · cron mail" },
                ]}
              />
            </>
          ),
        },
        {
          kicker: "The problem",
          heading: "Paper-based expense workflows in small businesses are quietly broken.",
          body: (
            <>
              <p>
                In a typical small business in Damascus, an employee buys
                something for work, keeps the receipt in a desk drawer for
                two weeks, hands it to a manager who signs a paper form,
                walks it to finance who types it into a ledger — and at every
                stage someone is the bottleneck. Receipts get lost. Numbers
                get re-typed. The whole loop is invisible to the company
                until month-end.
              </p>
              <p>
                Existing Odoo expense modules require everyone in the chain
                to log into the system. In practice, managers don&apos;t log
                in. Approvals stall. The system goes unused. I needed a flow
                that worked for people who never open Odoo.
              </p>
            </>
          ),
        },
        {
          kicker: "Architecture",
          heading: "Email is the UI.",
          body: (
            <>
              <p>
                The module attaches a unique token to each expense request
                when it&apos;s sent to a manager. The approval email contains
                two links: <strong>Approve</strong> and{" "}
                <strong>Reject</strong>. Each link is a one-time URL bound to
                the token, the request ID, and the manager&apos;s
                hr.employee record. Clicking it triggers a state transition
                — no Odoo login required.
              </p>

              <SmartExpenseDiagram />

              <Callout kicker="Design principle">
                Friction is the enemy of compliance. Every login the user has
                to make is a chance to forget to approve.
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
                title="Token-secured URLs over OAuth approval flows."
                context={
                  <>
                    The standard Odoo pattern is to send a notification email
                    that contains a link into the Odoo UI. Manager logs in,
                    finds the record, clicks approve. Real-world result:
                    approvals stall for days.
                  </>
                }
                decision={
                  <>
                    I embed a <strong>cryptographically random token</strong>{" "}
                    in the email URL itself. The token is single-use, bound
                    to the request and the manager&apos;s employee record,
                    and expires once acted on.
                  </>
                }
                consequences={
                  <>
                    Approvals collapse from days to seconds. The token model
                    is auditable — every state transition logs the token
                    used. Trade-off: emails must be sent securely
                    (TLS-encrypted SMTP) since the token grants action
                    rights.
                  </>
                }
              />

              <ADR
                number={2}
                title="Journal entries on finance approval, not on submission."
                context={
                  <>
                    An eager design auto-creates the journal entry the moment
                    an employee submits an expense. Simpler state machine,
                    but the ledger fills with unapproved entries that have
                    to be reversed.
                  </>
                }
                decision={
                  <>
                    The <code>account.move</code> is only generated on the
                    finance-approval state transition. Until then, the
                    request is just an HR record.
                  </>
                }
                consequences={
                  <>
                    The ledger stays clean. Accountants only see entries that
                    are real liabilities. Trade-off: the state machine has an
                    extra step, and the cron job for monthly digests needs
                    to know to skip pending requests.
                  </>
                }
              />

              <ADR
                number={3}
                title="Three RBAC tiers at the record-rule layer, not the menu layer."
                context={
                  <>
                    Easiest Odoo RBAC is to hide menus per group. But users
                    can still construct URLs and reach records they
                    shouldn&apos;t see.
                  </>
                }
                decision={
                  <>
                    Permissions live in <strong>record rules</strong> at the
                    ORM layer. An employee can only see their own requests.
                    A manager can only see requests routed to them. Finance
                    sees the approved queue. Menu hiding is cosmetic; the
                    rules are the contract.
                  </>
                }
                consequences={
                  <>
                    Audit-grade access enforcement. A URL-poking employee
                    still hits an ORM exception, not a leak. Trade-off: a
                    small testing matrix for cross-role visibility cases.
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
                Every field, label, status, email template, and PDF report
                ships with full Arabic and English translations. The approval
                emails detect the recipient&apos;s preferred language from
                their <code>res.users.lang</code> setting. PDF reports
                generated by QWeb pick up the same locale automatically.
              </p>
              <p>
                In a Damascus-based SME, this is what makes the difference
                between a module that gets installed and one that gets used.
              </p>
            </>
          ),
        },
        {
          kicker: "Why open source",
          heading: "Three reasons the license is LGPL-3.0.",
          body: (
            <>
              <ol className="list-decimal space-y-2 pl-5 marker:text-[var(--accent)]">
                <li>
                  Educational. The token-secured approval pattern is
                  reusable far beyond expense reports.
                </li>
                <li>
                  Reputation. An auditable Odoo 19 module signed with my
                  name lives longer than a CV bullet.
                </li>
                <li>
                  Low IP risk. The module is mechanical, not strategic.
                  Sharing it costs nothing and helps the Odoo community.
                </li>
              </ol>
            </>
          ),
        },
      ]}
      nextProject={{
        label: "BloomBelly — three AIs behind one phone →",
        href: "/projects/bloombelly",
      }}
    />
  );
}
