import type { Metadata } from "next";
import Link from "next/link";
import {
  CaseStudyLayout,
  Callout,
  FactGrid,
  Lead,
} from "@/components/case-study/CaseStudyLayout";
import {
  StructuredData,
  caseStudyStructuredData,
} from "@/components/site/StructuredData";

const DESCRIPTION =
  "Custom Odoo 19 business systems — expense management, HR, payroll, POS, and approval workflows. Built around how a company actually works. Reduced approval time from days to seconds; one module is open source and live.";

export const metadata: Metadata = {
  title: "ERP & Odoo Systems — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "ERP & Odoo Systems — business operations, engineered",
    description: DESCRIPTION,
    type: "article",
    url: "https://moznjamous.com/odoo",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP & Odoo Systems — business operations, engineered",
    description: DESCRIPTION,
  },
};

export default function OdooPage() {
  return (
    <>
      <StructuredData
        data={caseStudyStructuredData({
          name: "ERP & Odoo Systems",
          description: DESCRIPTION,
          path: "/odoo",
          year: "2025",
        })}
      />
      <CaseStudyLayout
      meta={{
        eyebrow: "ERP & Odoo Systems",
        status: "Production · Open source",
        title: "Business operations, engineered.",
        lede: "Custom Odoo 19 systems for real companies — expense management, HR, payroll, POS, and approval workflows. Built around how a business actually works, not Odoo's defaults. One module is open source and live on GitHub.",
        year: "2025 — Present",
        role: "Odoo Developer · Systems Designer",
        stack: [
          "Odoo 19",
          "Python",
          "PostgreSQL",
          "Odoo ORM",
          "QWeb",
          "OWL",
          "XML",
          "Odoo Studio",
          "REST APIs",
        ],
        links: [
          {
            label: "Smart Expense on GitHub",
            href: "https://github.com/Mozn-jamous/smart-expense-manager",
            external: true,
            primary: true,
          },
        ],
      }}
      metrics={[
        { value: "Days → Secs", label: "Expense approval time — login requirement removed" },
        { value: "3-division", label: "Company run on one centralized Odoo system" },
        { value: "1-click", label: "Manager & finance approvals — straight from email" },
        { value: "LGPL-3.0", label: "Smart Expense Manager — open source & live" },
      ]}
      sections={[
        {
          kicker: "What I've built",
          heading: "Systems people actually use.",
          body: (
            <>
              <Lead>
                Not demos that look good in a meeting — systems that survive
                contact with daily operations. Across two companies I&apos;ve
                designed, built, and deployed:
              </Lead>
              <FactGrid
                items={[
                  { label: "Expense management", value: "Receipt → approval → journal entry" },
                  { label: "HR systems", value: "Employees · contracts · hierarchy" },
                  { label: "Attendance", value: "Check-in/out, linked to payroll" },
                  { label: "Payroll", value: "Salary rules · automated runs" },
                  { label: "Point of sale", value: "Live restaurant POS" },
                  { label: "Approval workflows", value: "Email-based · no login" },
                ]}
              />
              <p>
                The common thread isn&apos;t a feature list — it&apos;s that
                each one was shaped around the people who use it. A manager who
                never opens Odoo still approves expenses. A cashier who never
                touched an ERP runs the till on day one. The system bends to the
                business, not the other way around.
              </p>
            </>
          ),
        },
        {
          kicker: "Capabilities",
          heading: "What goes into them.",
          body: (
            <>
              <p>
                Under the systems is real Odoo engineering — not just
                configuration in the UI. Modules are written in Python and XML,
                access is enforced at the data layer, and everything ships
                bilingual.
              </p>
              <FactGrid
                items={[
                  { label: "Custom Odoo modules", value: "Python · XML · ORM" },
                  { label: "Workflow automation", value: "Server actions · cron · Studio" },
                  { label: "Access control", value: "Record rules · 3-tier RBAC" },
                  { label: "Reporting", value: "QWeb PDF · scheduled email" },
                  { label: "API integrations", value: "REST · external systems" },
                  { label: "Localization", value: "Full EN / AR · RTL" },
                ]}
              />
            </>
          ),
        },
        {
          kicker: "Results",
          heading: "The outcomes that matter.",
          body: (
            <>
              <p>
                The point of a business system is not the technology — it&apos;s
                what changes for the company once it&apos;s running.
              </p>
              <Callout kicker="Approval time">
                Cut expense approvals from <strong>days to seconds</strong> — by
                removing the login requirement entirely. The approval lives in
                the email; one click moves the request forward.
              </Callout>
              <Callout kicker="Manual work">
                Replaced <strong>paper-based workflows with automated ones</strong>
                {" "}— receipts, approvals, journal entries, and monthly
                department reports that used to be typed by hand now generate
                themselves.
              </Callout>
              <Callout kicker="Operations">
                <strong>Centralized a three-division company</strong> —
                inventory, HR, payroll, and a live restaurant POS — into one
                system, replacing a scattered Excel operation.
              </Callout>
            </>
          ),
        },
        {
          kicker: "Selected systems",
          heading: "Two systems, in depth.",
          body: (
            <>
              <article className="mb-10">
                <h3 className="text-xl font-medium tracking-tight text-[var(--ink)]">
                  Techno Solution — full ERP rollout
                </h3>
                <p className="mt-3">
                  Replaced a three-division Excel operation — import, warehousing,
                  and solar — with one Odoo system built around the company&apos;s
                  real business logic. Configured a custom Chart of Accounts linked
                  across HR, payroll, accounting, manufacturing, and purchase, and
                  deployed a live restaurant POS with staff onboarded into daily
                  production.
                </p>
                <Callout kicker="The signal it worked">
                  After I left, they hired a dedicated Odoo developer to maintain
                  the system. A handoff is only possible when there&apos;s
                  something solid to hand off.
                </Callout>
              </article>

              <article>
                <h3 className="text-xl font-medium tracking-tight text-[var(--ink)]">
                  Smart Expense Manager — open source
                </h3>
                <p className="mt-3">
                  A custom Odoo 19 module that replaces paper expense flows with
                  token-secured, one-click email approvals routed through the
                  hr.employee hierarchy — no login required. Journal entries are
                  generated automatically on finance sign-off; monthly PDF reports
                  are emailed by cron. Three-tier RBAC is enforced at the
                  record-rule layer, and everything ships in full English and
                  Arabic. Licensed LGPL-3.0 and live on GitHub.
                </p>
                <p className="mt-4 font-mono text-[0.8rem]">
                  <Link
                    href="/projects/smart-expense"
                    className="text-[var(--accent-deep)] underline decoration-[var(--accent)]/40 underline-offset-4 transition hover:decoration-[var(--accent)]"
                  >
                    Read the full case study →
                  </Link>
                </p>
              </article>
            </>
          ),
        },
      ]}
      nextProject={{
        label: "Smart Expense Manager — the email-as-UI deep dive →",
        href: "/projects/smart-expense",
      }}
      />
    </>
  );
}
