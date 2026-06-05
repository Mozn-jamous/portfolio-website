# كل ما يحتاجه الموقع — Launch & Completion Checklist

> الموقع **مبنيّ بالكامل ويُبنى بنجاح** (`npm run build` → 19/19 صفحة). هذه القائمة هي ما تبقّى لإنهائه وإطلاقه — مقسّمة حسب الأولوية. ابدئي بقسم 🔴.
>
> The site is fully built and compiles clean. This is everything left to finish and launch it, ordered by priority.

---

## 🔴 1. Required to launch — مطلوب للإطلاق

These are the things that block "a real, live, shareable site."

### 1.1 Deploy the site — انشري الموقع
The site is a static Next.js app (no backend needed yet). Recommended host: **Vercel** (free, made for Next.js).
- [ ] Push the repo to GitHub (it's already a git repo on branch `master`).
- [ ] Go to **vercel.com** → "Add New Project" → import the GitHub repo.
- [ ] Framework preset = **Next.js**, build command `next build` (auto-detected). No env vars needed.
- [ ] Deploy → you get a live `*.vercel.app` URL immediately.

### 1.2 Custom domain — النطاق
Right now the site assumes **`https://moznjamous.com`** (set in `src/app/layout.tsx` as `metadataBase`).
- [ ] Decide the real domain. If it's **not** `moznjamous.com`, update it in these files (find & replace the string `moznjamous.com`):
  - `src/app/layout.tsx` (`metadataBase`)
  - `src/app/sitemap.ts`, `src/app/robots.ts`
  - `src/components/site/StructuredData.tsx`
  - per-page OG URLs: `src/app/about/page.tsx`, `contact/page.tsx`, `projects/page.tsx`, `odoo/page.tsx`, and the 4 `projects/<slug>/page.tsx`
- [ ] Buy the domain, then add it in Vercel → Settings → Domains, and point DNS as Vercel instructs.

### 1.3 Verify your contact links are correct & live — تأكّدي من الروابط
Used across the site (in `src/lib/scenes-content.ts`). Open each and confirm it's right:
- [ ] Email: `moznjamous9@gmail.com`
- [ ] LinkedIn: `linkedin.com/in/mozn-jamous`
- [ ] GitHub: `github.com/Mozn-jamous`
- [ ] "Trusted by / collaborated with" list — Santa Media, Techno Solution, ASPU, Odoo, Supabase — make sure you're comfortable listing each publicly.
- [ ] Location & role: "Damascus, Syria" and "Santa Media" (in `heroContent`).

### 1.4 Résumé PDF — السيرة الذاتية كملف
Today the **"Download résumé / CV"** button points to `/cv`, which is a **print-optimized web page** (not a file). Two options:
- [ ] **Easiest:** keep it. On `/cv` the visitor clicks "Print / Save PDF" → saves a PDF. (Works now.)
- [ ] **Better:** export a real PDF, save it as `public/resume.pdf`, and change the résumé links to `/resume.pdf` (in `scenes-content.ts` → `contactPageContent.resume.href` and the hero `ctas.secondary.href`).

### 1.5 Project cover images — صور أغلفة المشاريع (4)
The 4 cards on the Projects grid currently show **branded gradient placeholders** (intentional, but real mockups are far stronger). None have a `cover` set.
- [ ] Export one hero mockup per project (a clean phone/UI shot). Spec: **16:10 ratio**, ~1600×1000px, `.webp` or `.png`.
- [ ] Save to `public/projects/` (e.g. `public/projects/bloombelly.webp`).
- [ ] In `src/lib/scenes-content.ts`, add `cover: "/projects/bloombelly.webp"` to each `projectsIndex` entry. The card swaps from gradient → image automatically.
- [ ] Projects needing a cover: **Mademoiselle, BloomBelly, CareConnect, Smart Expense Manager**.

---

## 🟡 2. Strongly recommended — يرفع الجودة كثيرًا (غير حاجز)

### 2.1 Case-study screenshots — لقطات دراسات الحالة
Each case study has image slots marked **"add export"** that currently show a placeholder. Filling them turns the case studies from text into proof. Export from Figma and set the `src` on the matching `<Figure>` in the page file:

| Case study | What's needed | File |
|---|---|---|
| BloomBelly | 4 user-journey maps; key screens (chatbot, imaging, nutrition — RTL) | `src/app/projects/bloombelly/page.tsx` |
| CareConnect | Mother · Babysitter · Admin screens | `src/app/projects/careconnect/page.tsx` |
| Mademoiselle | Key screens across Light/Dark/Brand themes; the buttons component sheet | `src/app/projects/mademoiselle/page.tsx` |
| Smart Expense | The one-click Approve/Reject email screenshot | `src/app/projects/smart-expense/page.tsx` |

- [ ] Save images to `public/projects/<slug>/…`, then pass `src="/projects/<slug>/…"` to each `<Figure>` (it shows a lightbox on click).

### 2.2 Real numbers — الأرقام الحقيقية (when you have them)
You said your metrics are still few — that's fine, everything on the site is honest today. When you have real, defensible numbers (users, time saved, downloads), add them in `scenes-content.ts`:
- [ ] `heroContent.stats` (the credibility row)
- [ ] `businessSystemsContent.results` (the ERP result stats)
- Keep the no-vanity-metrics rule: only add what you can defend in an interview.

### 2.3 Proofread — مراجعة لغوية
- [ ] Read every section once on the live site. Almost all copy lives in `src/lib/scenes-content.ts`; case-study prose is in each `projects/<slug>/page.tsx`.

---

## 🟢 3. Optional / future — اختياري ولاحقًا

- [ ] **Testimonials — التوصيات:** the section is built but hidden until you add real quotes. Add entries (with permission) to `testimonialsContent` in `scenes-content.ts` and it appears automatically. Never invent quotes.
- [ ] **Portrait photo — صورة شخصية:** the About section now uses an "At a glance" facts card instead of a photo, so a photo is optional. If you want one later, we can add it back.
- [ ] **Deferred interactive features** (we discussed these):
  - AI "Ask me" assistant — only as a *scripted, grounded* version (no backend, can't hallucinate). Skip the live-LLM version on a static site.
  - Recruiter Mode toggle (strips effects → résumé/projects/results).
  - Case-study walkthrough & Time-Travel viewer — build once the screenshots in 2.1 exist.
- [ ] **Analytics — التحليلات:** intentionally skipped. If you change your mind, use a privacy-friendly option (Vercel Analytics or Plausible) — not a fake "live metrics" dashboard.

---

## ✅ 4. Pre-launch QA — فحص قبل الإطلاق

Run locally before the final deploy:
- [ ] `npx tsc --noEmit` — clean
- [ ] `npm run build` — clean (currently passes, 19/19)
- [ ] `npm run lint` — fix anything new
- [ ] Click every nav item, the ⌘K palette, mobile menu, theme toggle, and every external link.
- [ ] Open on a **real phone** (iOS + Android) — check the Hero, Projects grid, Architecture viewer, Decision log, and Contact.
- [ ] Test the new interactive sections: **#architecture** (click each layer) and **#decisions** (open/close each).
- [ ] Check `prefers-reduced-motion` (enable "reduce motion" in OS) — animations should calm down.
- [ ] Lighthouse (Chrome DevTools): aim for green on Performance / Accessibility / Best Practices / SEO.

---

## 🔎 5. SEO & social sharing — الظهور والمشاركة

- [ ] Confirm the domain is correct everywhere (see 1.2) — OG tags, sitemap, and JSON-LD all use it.
- [ ] Test the share preview (the OG card) with the **LinkedIn Post Inspector** and **opengraph.xyz** — paste your URL, confirm the image/title/description look right. Assets already exist: `src/app/opengraph-image.png`, `icon.png`, `apple-icon.png` (replace via those same paths if you redesign them).
- [ ] Validate structured data with Google's **Rich Results Test**.
- [ ] After launch: add the site to **Google Search Console** and submit `/sitemap.xml`.

---

## 🛠️ 6. How to edit the site later — كيف تعدّلين لاحقًا (quick reference)

- **All copy** (projects, about, contact, process, architecture, decisions, stats) → one file: `src/lib/scenes-content.ts`.
- **Add a new project:** add an entry to `projectsIndex`, then create `src/app/projects/<slug>/page.tsx` using `CaseStudyLayout`.
- **New section data** (architecture layers / decision entries) → `architectureStack` / `decisionLog` in `scenes-content.ts`.
- **Always verify after edits:** `npx tsc --noEmit` then `npm run build`. For a visual check: `node scripts/shot.mjs <url> <out.png>`.

---

### TL;DR — أول 5 خطوات لإطلاقه اليوم
1. Push to GitHub → import to **Vercel** → deploy.
2. Verify email / LinkedIn / GitHub links are correct.
3. Add the **4 project cover images**.
4. Decide the **domain** (update the string if not `moznjamous.com`) and connect it in Vercel.
5. Run the QA checklist (section 4) and share the link.

Everything else (screenshots, metrics, testimonials, extra features) makes it *better* — but after step 5 you have a real, live, defensible portfolio.
