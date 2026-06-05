Mozn Jamous
Portfolio Specification & Content Script
A complete blueprint for the personal portfolio website
────────────────────────────────────────────────────────────
Version 1.0  ·  May 2026
Prepared for personal use; doubles as a content source for build.
What is this document?
This is the single source of truth for the personal portfolio website at moznjamous.com (proposed domain). It contains the strategic positioning, the page-by-page structure, the exact English copy to use, the design system, the tech stack, and the build phases. Treat every section as a brief to a designer/developer — or as the script you write into the actual site.
Contents
1. Strategic Positioning
2. Target Audiences & Primary Calls-to-Action
3. Information Architecture (Site Map)
4. Page-by-Page Specification & Content Script
   4.1  Home
   4.2  About
   4.3  Projects (Index)
   4.4  Project Detail (BloomBelly)
   4.5  Project Detail (CareConnect)
   4.6  Project Detail (Smart Expense Manager)
   4.7  Collaborations
   4.8  Writing / Notes (Future)
   4.9  Contact
5. Design System (Colors, Typography, Spacing, Motion)
6. Tech Stack & Repository Structure
7. Performance, SEO & Accessibility
8. Analytics & Lead Capture
9. Launch Plan (8-Week Phased Build)
10. Maintenance Cadence
11. Appendix: Reusable Snippets & Templates
1. Strategic Positioning
◆ One-line positioning
Mozn Jamous — software engineer turning research-grade ideas into production systems, with a focus on Arabic-first digital health and ERP.
1.1 Positioning principles
Lead with the work, not the credentials. The first thing a visitor sees is a hero image / video of BloomBelly running on a phone — not a school logo.
Frame each project around the human problem first, the engineering second. Reviewers from grants, accelerators, and engineering teams all respond to the problem statement.
Show three audiences in one site without splitting them: hiring managers, grant reviewers, and accelerator scouts each find what they need on the same page through clear sub-sections.
Maintain the same look and tone everywhere: portfolio site, GitHub READMEs, press kit PDFs. Visitors should feel they are inside one ecosystem.
Be specific and falsifiable. Replace adjectives ("high-quality", "scalable") with numbers ("50+ test cases", "4 user roles", "17 references").
1.2 What this portfolio is NOT
Not a marketing site for the projects — those have their own showcase repos.
Not a blog — writing comes later (Section 4.8 is a placeholder).
Not a CV in HTML — it is richer than a CV; the downloadable CV is a derivative.
Not Arabic-first — the site is English-primary; the projects themselves are Arabic-first.
2. Target Audiences & Primary Calls-to-Action

| Audience | What they need to see | Primary CTA |
| --- | --- | --- |
| Hiring managers (Flutter, Odoo, full-stack) | Architecture decisions, code quality signals, real shipped projects | “Download CV” + “Email me” |
| Grant reviewers (digital health) | Problem framing, evidence base, theory of change, team credibility | “Read the BloomBelly case study” + “Download press kit” |
| Accelerator scouts (MENA, healthtech, fintech) | Business model, market sizing, traction, founder-market fit | “Book a 15-min call” + “Download press kit” |
| Academic supervisors / researchers | Methodology, references, supervisors, thesis context | “Citation file” + “Email me” |
| Future collaborators (Shahd, shaha123s-type partners) | Honest credit, clear contribution split, joy of collaboration | “See collaborations” + “Email me” |

Audience
What they need to see
Primary CTA
Hiring managers (Flutter, Odoo, full-stack)
Architecture decisions, code quality signals, real shipped projects
“Download CV” + “Email me”
Grant reviewers (digital health)
Problem framing, evidence base, theory of change, team credibility
“Read the BloomBelly case study” + “Download press kit”
Accelerator scouts (MENA, healthtech, fintech)
Business model, market sizing, traction, founder-market fit
“Book a 15-min call” + “Download press kit”
Academic supervisors / researchers
Methodology, references, supervisors, thesis context
“Citation file” + “Email me”
Future collaborators (Shahd, shaha123s-type partners)
Honest credit, clear contribution split, joy of collaboration
“See collaborations” + “Email me”
2.1 Friction-removal rules
No “Contact me” form on the home page — just an email and a LinkedIn link.
No newsletter pop-up. Ever.
No language switcher in V1 — the site is English-only.
No cookie banner unless analytics requires one; if so, single-line, dismiss-able.
No more than two CTAs visible above the fold on any page.
3. Information Architecture (Site Map)
moznjamous.com├── /                         Home├── /about                    About + story + skills + education├── /projects                 Projects index (3 featured cards)│   ├── /projects/bloombelly       Graduation thesis, deepest case study│   ├── /projects/careconnect      Three-app marketplace│   └── /projects/smart-expense    Odoo module (open source)├── /collaborations           Production codebases I contribute to├── /writing                  (V2) Long-form essays and ADRs├── /press-kit                Download links for press materials├── /cv                       Downloadable PDF CV└── /contact                  Email + LinkedIn + scheduling link
3.1 Navigation rules
Top nav (max 5 items): Projects · Collaborations · About · Contact · CV (button).
Footer mirrors the nav and adds GitHub, LinkedIn, email, press-kit, sitemap.
Project detail pages are always reachable by URL even if the index changes.
Every page has “What's next?” links at the bottom to guide the journey.
4. Page-by-Page Specification & Content Script
4.1 Home (/)
Goal: convince the visitor within 6 seconds that this is a serious engineer working on real problems.
Hero section (above the fold)
Layout: 60/40 split — left side text, right side a phone mockup of BloomBelly.
Copy (exact text to use):
“Hi, I'm Mozn Jamous. I build production systems for problems that matter — Arabic-first digital health, Odoo ERP, and AI-powered mobile apps. Currently graduating from Al-Sham Private University, Damascus.”
Two buttons under the hero copy:
Primary: “See my work” → scrolls to projects
Secondary: “Download CV (PDF)”
Featured projects section
Three cards in a row. Each card has: thumbnail, project name, one-line description, tech tags, link.
Order matters — always BloomBelly first, then CareConnect, then Smart Expense Manager.
Selected collaborations section
Short text + three logos/cards for the production codebases. Each links to /collaborations.
Quick-fact strip
Horizontal strip with four stats:

| Stat | Value | Tooltip on hover |
| --- | --- | --- |
| Projects shipped | 11+ | Across solo and team contexts |
| Lines of production code | 20M+ | Aggregate across owned + collaborative repos |
| User roles designed | 30+ | Across BloomBelly, CareConnect, takhrjy, Mademoiselle |
| Languages I build with | 8 | Dart, Python, TypeScript, Vue, JS, SQL, PL/pgSQL, Bash |

Stat
Value
Tooltip on hover
Projects shipped
11+
Across solo and team contexts
Lines of production code
20M+
Aggregate across owned + collaborative repos
User roles designed
30+
Across BloomBelly, CareConnect, takhrjy, Mademoiselle
Languages I build with
8
Dart, Python, TypeScript, Vue, JS, SQL, PL/pgSQL, Bash
Closing band
One line of copy + email + LinkedIn:
“If you're working on something I can help with — a digital health grant, an Odoo build, an Arabic-first product — I'd love to hear about it.”
4.2 About (/about)
Goal: build trust through narrative — who I am, why I work on what I work on.
Opening
“I'm a final-year Informatics Engineering student at Al-Sham Private University in Damascus, graduating in 2026. The work I'm proudest of comes from a single conviction: software is most valuable when it shows up where the world is hardest — Arabic-language healthcare, small-business ERP, the daily struggle of working mothers.”
Sections
How I got here — short paragraph about Damascus, ASPU, why software engineering.
What I build with — a stack overview with rationale (NOT a long list).
How I work — collaboration principles, communication preferences, response times.
What I'm looking for — the explicit asks: jobs, grants, accelerators, partnerships.
Education — ASPU details, supervisors, thesis.
Outside of work — one short, human paragraph.
What NOT to include
A 30-skill cloud. Pick 8.
A long timeline of every course. Just the relevant ones.
A list of every certification. Pick the strongest 3 if any.
4.3 Projects Index (/projects)
Goal: let visitors pick the project that's most relevant to them.
Layout: three large project cards stacked vertically, then a 'Collaborations' teaser at the bottom.
Each card contains:
Project name + emoji icon
One-line description
Status badge (Production, Graduation Thesis, Archived, etc.)
Three tech tags
Two CTAs: “Read case study” and “View on GitHub”
Hero image (Figma frame or app screenshot)
4.4 Project Detail: BloomBelly (/projects/bloombelly)
Goal: convince a grant reviewer, employer, or accelerator that this is real and grounded.
Page structure
Hero: title, tagline, status badge, three tech tags, hero image
TL;DR: 3-sentence summary anyone can absorb in 10 seconds
The Problem: maternal/child health gap in Arabic-speaking regions, with statistics
The Solution: features list with icons, organized by user role
Architecture: high-level diagram (Flutter — Flask — Gemini/LoRA/RF — Supabase)
Evidence: research references table with 7 sources
Engineering decisions: 3-4 of the most interesting ADRs with one-paragraph each
Team: Mozn + Shahd photos (if comfortable) + supervisors
Outcomes: what shipped, what's in the pipeline, what we learned
Links bar: showcase repo, Figma, citation, press kit, contact
Hero copy (exact)
“BloomBelly — An Arabic-first maternal and child health companion. Built as a graduation thesis with Shahd Bureghsh under Dr. Afaf Al-Shalabi and Eng. Rahaf Abdul Qader at Al-Sham Private University.”
TL;DR copy (exact)
“BloomBelly combines three specialized AI components — Google Gemini for medical image analysis, a LoRA-fine-tuned transformer for the medical chatbot, and a Random Forest classifier for nutrition guidance — behind a Python Flask backend and a Flutter mobile app, with a doctor-administered wallet system that enables clinic distribution.”
4.5 Project Detail: CareConnect (/projects/careconnect)
Goal: showcase system-design skill and partnership working.
Same structure as BloomBelly, with these differences
The hero emphasizes the three-app ecosystem, not the AI
The architecture diagram is the centerpiece (3 apps + Supabase + Maps/WhatsApp)
The 'Engineering decisions' section pulls 3 ADRs from the showcase repo: “Three apps over one”, “Supabase over Firebase”, “RBAC at the DB layer”
The team section gives the Babysitter App co-developer (@shaha123s) prominent credit
The links bar features the Figma prototype prominently
4.6 Project Detail: Smart Expense Manager (/projects/smart-expense)
Goal: prove I can ship clean, open-source backend code in a niche stack (Odoo).
Structure
Hero: Odoo 19 module emphasized; license badge (LGPL-3.0)
The Problem: paper-based expense workflows in small businesses
The Solution: mobile receipts, email approval flow, automated journal entries
Workflow diagram: Employee → Manager email → One-click approve → Finance posting
Why open source: educational, builds Odoo-developer reputation, low-risk IP
How to use it: link to GitHub README installation steps
Tech depth: a few snippets (anonymized) showing token-based auth pattern
4.7 Collaborations (/collaborations)
Goal: show I work well with others and contribute to production code I don't own.
Opening copy
“Some of my best work lives in repos I don't own. These are production codebases I contribute to as part of partner teams. Where possible, I link to the partner's GitHub so you can verify the collaboration is real.”
Three collaboration cards
Each card includes: partner name, project, my contribution areas, dates, status.
Cards to feature:
Mademoiselle (V1 + V2) — with @santateammedia
eda — with @xvtu2003
Babysitter Provider App — with @shaha123s (sister of CareConnect)
Honesty principle
Be explicit about what I did vs. what the team did. Use phrases like:
“Contributed to the backend RPCs” — not “Built”
“Co-designed the booking flow” — not “Designed”
“Paired on the auth refactor” — not “Refactored auth”
4.8 Writing / Notes (Future) (/writing)
Goal (future): demonstrate thinking through long-form writing.
In V1: this page does not exist. Top nav shows it as “Writing (soon)” only if scoping a V2 in the next 6 months.
When activated, candidate post topics:
“How we fine-tuned a transformer for Arabic medical Q&A on a graduation budget”
“Why we chose Supabase + Flask over Firebase for a healthcare app”
“Designing a three-app childcare marketplace with Supabase RLS”
“Token-based email approvals: a security pattern for low-friction workflows”
“What I learned writing a 50-page SRS as an undergraduate”
4.9 Contact (/contact)
Goal: convert interested visitors into a first email or call.
Contact page content
“If you're working on something I can help with — hiring for a Flutter, Odoo, or full-stack role; running a digital health grant; investing in MENA health tech; or just curious about something on this site — the fastest way to reach me is email.”
Three blocks:
Email: moznjamous9@gmail.com (with “Copy” button)
LinkedIn: linkedin.com/in/mozn-jamous (with profile preview)
Calendar: optional Cal.com / Calendly link for a 15-min intro call
What to say in the email subject line
Suggested template snippets the page can show as examples:
“[Hiring] Flutter role at [company]”
“[Grant] [program name] — interested in BloomBelly”
“[Partnership] [project area]”
“[Question] about [project]”
5. Design System
5.1 Color tokens

| Token | Hex | Use |
| --- | --- | --- |
| --ink | #0F172A | Body text, headings |
| --ink-muted | #475569 | Captions, secondary text |
| --paper | #FAFAFA | Page background |
| --surface | #FFFFFF | Cards, sections |
| --border | #E2E8F0 | Dividers, subtle outlines |
| --brand-primary | #214782 | Headings, primary buttons (BloomBelly navy) |
| --brand-accent | #4267B2 | Links, hover states |
| --brand-warm | #B45F06 | Highlights, badges (use sparingly, <3%) |
| --success | #16A34A | Confirmations |
| --danger | #DC2626 | Errors, warnings |

Token
Hex
Use
--ink
#0F172A
Body text, headings
--ink-muted
#475569
Captions, secondary text
--paper
#FAFAFA
Page background
--surface
#FFFFFF
Cards, sections
--border
#E2E8F0
Dividers, subtle outlines
--brand-primary
#214782
Headings, primary buttons (BloomBelly navy)
--brand-accent
#4267B2
Links, hover states
--brand-warm
#B45F06
Highlights, badges (use sparingly, <3%)
--success
#16A34A
Confirmations
--danger
#DC2626
Errors, warnings
5.2 Typography
Pair one display serif with one neutral sans-serif:
Display: “Cormorant Garamond” (for hero text, project titles)
Body: “Inter” (for everything else)
Monospace: “JetBrains Mono” (for code blocks)
Type scale (rem):
--text-xs:   0.75rem--text-sm:   0.875rem--text-base: 1rem--text-lg:   1.125rem--text-xl:   1.25rem--text-2xl:  1.5rem--text-3xl:  1.875rem--text-4xl:  2.25rem--text-5xl:  3rem--text-6xl:  3.75rem  (hero)
5.3 Spacing scale
Tailwind-style 4-pixel base; common values you will use:
0.25rem  0.5rem  0.75rem  1rem  1.5rem  2rem  3rem  4rem  6rem  8rem
5.4 Layout grid
Max content width: 1180 px
Mobile padding: 1.25rem
Desktop padding: 2rem
Section vertical rhythm: 6rem between major sections; 3rem inside
5.5 Motion
Durations: 140ms (micro), 240ms (default), 360ms (page-level)
Easing: cubic-bezier(0.4, 0, 0.2, 1)
Respect prefers-reduced-motion: reduce
No parallax. No auto-playing video. No carousel with auto-rotate.
5.6 Imagery rules
Phone mockups for mobile-app screens; never raw screenshots without a frame
Architecture diagrams in PNG export from Excalidraw / Figma; never as live Mermaid (Mermaid is fine for GitHub but not for the polished site)
Reuse the brand navy/accent in diagrams so they feel native to the page
Compress with WebP + AVIF fallbacks
6. Tech Stack & Repository Structure
6.1 The recommended stack

| Concern | Choice | Why |
| --- | --- | --- |
| Framework | Next.js 14 (App Router) | SSG + ISR; perfect for content-first sites; mature ecosystem |
| Language | TypeScript | Type safety; matches the seriousness of the projects |
| Styling | Tailwind CSS | Token-friendly; aligns with the design system |
| Components | shadcn/ui (selectively) | High-quality unstyled primitives; copy-paste, no lock-in |
| Content | MDX | Lets case studies mix prose, code, and components |
| Icons | lucide-react | Consistent, clean, free |
| Hosting | Vercel | Best-in-class for Next.js; free for personal use |
| Domain | moznjamous.com (suggested) | Personal-brand domain; ~$10/year |
| Analytics | Plausible or Vercel Analytics | Privacy-respecting; no cookie banner needed |
| Forms (future) | Resend + a simple API route | Lightweight, no third-party form service |

Concern
Choice
Why
Framework
Next.js 14 (App Router)
SSG + ISR; perfect for content-first sites; mature ecosystem
Language
TypeScript
Type safety; matches the seriousness of the projects
Styling
Tailwind CSS
Token-friendly; aligns with the design system
Components
shadcn/ui (selectively)
High-quality unstyled primitives; copy-paste, no lock-in
Content
MDX
Lets case studies mix prose, code, and components
Icons
lucide-react
Consistent, clean, free
Hosting
Vercel
Best-in-class for Next.js; free for personal use
Domain
moznjamous.com (suggested)
Personal-brand domain; ~$10/year
Analytics
Plausible or Vercel Analytics
Privacy-respecting; no cookie banner needed
Forms (future)
Resend + a simple API route
Lightweight, no third-party form service
6.2 Repository structure
personal-portfolio/├── app/│   ├── (marketing)/│   │   ├── page.tsx                 # Home│   │   ├── about/page.tsx│   │   ├── collaborations/page.tsx│   │   ├── contact/page.tsx│   │   └── press-kit/page.tsx│   ├── projects/│   │   ├── page.tsx                 # Index│   │   ├── bloombelly/page.mdx│   │   ├── careconnect/page.mdx│   │   └── smart-expense/page.mdx│   └── layout.tsx├── components/│   ├── hero.tsx│   ├── project-card.tsx│   ├── stat-strip.tsx│   ├── collaboration-card.tsx│   ├── nav.tsx│   └── footer.tsx├── content/│   └── cv.pdf                       # Static PDF├── public/│   ├── og/                          # OG images per page│   ├── mockups/                     # Phone frames│   ├── diagrams/                    # Architecture PNGs│   └── press-kit/                   # Downloadables├── styles/│   └── globals.css                  # Tokens + Tailwind├── next.config.mjs└── package.json
7. Performance, SEO & Accessibility
7.1 Performance targets

| Metric | Target | How |
| --- | --- | --- |
| Lighthouse Performance | ≥ 95 | Static export where possible; image optimization |
| Largest Contentful Paint | < 1.5s on 4G | Above-the-fold hero is a static image |
| Cumulative Layout Shift | < 0.05 | Reserve image dimensions |
| Total bundle (gzipped) | < 100 KB | Tree-shake; no chart library on home |
| Time to first byte | < 200ms | Vercel edge runtime where applicable |

Metric
Target
How
Lighthouse Performance
≥ 95
Static export where possible; image optimization
Largest Contentful Paint
< 1.5s on 4G
Above-the-fold hero is a static image
Cumulative Layout Shift
< 0.05
Reserve image dimensions
Total bundle (gzipped)
< 100 KB
Tree-shake; no chart library on home
Time to first byte
< 200ms
Vercel edge runtime where applicable
7.2 SEO essentials
Unique <title> and <meta name="description"> on every page
Open Graph image (1200×630) for each project page; brand-aligned
Schema.org/Person on /about; CreativeWork on each project page
Sitemap.xml + robots.txt; both submitted to Google Search Console
Canonical URLs; no duplicate content
7.3 Accessibility (WCAG 2.1 AA target)
Keyboard-navigable nav and footer; visible focus rings
Color contrast ≥ 4.5:1 for body text; ≥ 3:1 for large text
Semantic HTML (header, nav, main, article, section, footer)
Alt text on every image; aria-labels on icon-only buttons
Skip-to-content link as first focusable element
Forms (when added): labels, error messages, validation feedback
8. Analytics & Lead Capture
8.1 What to track
Page views per page (with referrer)
CV download clicks
Email “copy” button clicks
Press-kit downloads (per project)
Outbound clicks to GitHub repos
Outbound clicks to Figma prototypes
8.2 What NOT to track
Scroll depth (noisy; rarely actionable)
Mouse movement / heatmaps (creepy; legally risky)
Anything PII without explicit consent
8.3 Lead-capture flows
◆ V1 — the email-first flow
Visitor reads, becomes interested, clicks the email link in nav/footer. I get an email. Done. No form, no popup, no third-party service.
◆ V2 — the calendar flow (optional)
Add a Cal.com or Calendly link on /contact for a 15-minute intro call. Useful once email volume justifies it.
9. Launch Plan (8-Week Phased Build)
Week 1 — Foundation
Buy moznjamous.com
Create new Next.js project; deploy a blank build to Vercel
Implement nav, footer, design tokens; ship a placeholder home page
Set up GitHub Actions + Vercel preview deployments
Week 2 — Home + About
Build Home (hero, featured projects, stat strip, closing band)
Build About (story, stack, looking-for, education)
Take and place phone mockups
Week 3 — Projects Index + BloomBelly detail
Build Projects index with the three cards
Build BloomBelly detail page; export the architecture diagram as PNG
Wire links to the showcase repo and press kit
Week 4 — CareConnect + Smart Expense detail pages
Build both project detail pages; mirror BloomBelly's structure
Embed Figma prototype on CareConnect page
Week 5 — Collaborations + Contact
Build /collaborations with three cards
Build /contact with email-copy button + LinkedIn block
Generate clean OG images for every page
Week 6 — Press kit + CV
Build /press-kit page; upload PDF press kits from showcase repos
Generate final CV PDF; make /cv route serve it
Add structured data (Schema.org) per page
Week 7 — Polish + Performance
Run Lighthouse; fix anything < 95
Optimize images (WebP/AVIF)
Accessibility audit; keyboard navigation review
Cross-browser testing
Week 8 — Launch
Submit sitemap to Google Search Console
Set up Plausible / Vercel Analytics
Announce on LinkedIn with a tasteful post
Email a handful of friends/mentors for feedback
Push v1.0 tag
10. Maintenance Cadence

| Cadence | Task |
| --- | --- |
| Weekly | Review analytics; capture any anomalies; respond to incoming email |
| Monthly | Update project status badges if anything shipped or paused |
| Quarterly | Refresh stats on the home page; revisit the “looking for” section |
| Twice a year | Add a new project or major update; rotate featured collaborations |
| Annually | Major design review; consider V2 of the site |

Cadence
Task
Weekly
Review analytics; capture any anomalies; respond to incoming email
Monthly
Update project status badges if anything shipped or paused
Quarterly
Refresh stats on the home page; revisit the “looking for” section
Twice a year
Add a new project or major update; rotate featured collaborations
Annually
Major design review; consider V2 of the site
11. Appendix: Reusable Snippets & Templates
11.1 Project-card component spec
type ProjectCardProps = {  title: string;  emoji: string;  oneLiner: string;  status: 'Production' | 'Graduation Thesis' | 'Open Source' | 'Archived';  tags: string[];                  // max 3  heroImage: string;               // 16:9  href: string;                    // /projects/[slug]  externalLinks: {    github?: string;    figma?: string;    pressKit?: string;  };};
11.2 Standard email signature
Mozn JamousInformatics Engineer (graduating 2026, ASPU)moznjamous9@gmail.com  ·  github.com/Mozn-jamous  ·  linkedin.com/in/mozn-jamous
11.3 Standard LinkedIn-post template for project launches
[1-sentence problem][1-sentence solution][1-sentence what was hardest / what we learned]🔗 [showcase URL]Built with [@collaborator if any]. Supervised by [supervisor if any].
11.4 Hero “What I do” one-liner (reusable in many places)
“I build production systems for problems that matter — Arabic-first digital health, Odoo ERP, and AI-powered mobile apps.”
11.5 Closing principle
“A portfolio is not a museum of past work. It is an invitation. Everything on this site should be designed to make a specific reader feel: 'I want to work with this person.'”
────────────────────────────────────────────────────────────
End of document. Version 1.0 — May 2026.