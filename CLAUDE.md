# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # next dev (Turbopack); serves on http://localhost:3000
npm run build        # next build (validates everything end-to-end; use this to verify)
npm run start        # serve the production build
npm run lint         # raw eslint (NOT `next lint`)
npx tsc --noEmit     # type-check only (fast sanity check after edits)
```

Multiple lockfiles may be present in parent directories (e.g. `C:\Users\mesho\package-lock.json`). Run commands from the project root so Next.js picks the correct workspace.

There is no test runner; verification is `tsc --noEmit` + `next build`.

## High-Level Architecture

This is a **single-page hiring portfolio** for Mozn Jamous, designed in a Pitch/Notion aesthetic — white paper, dark ink, one warm accent. The site is intentionally calm and skimmable; everything serves the hiring read.

### Content is one file: `src/lib/scenes-content.ts`

All visible copy on the site lives there. To change a project, role, milestone, contact, or bio, edit that file — almost no component code needs touching. The file's top comment documents how to add each kind of thing.

Exports:

| Export | Renders into | Contains |
|---|---|---|
| `heroContent` | `Hero.tsx` | Name, tagline, current role, socials, CTAs |
| `aboutContent` | `About.tsx` + CV "Open to" | Bio paragraphs + open-to list |
| `statsContent` | `Stats.tsx` | "By the numbers" credibility stats (value + label) |
| `scenes` | `SelectedWork.tsx` | Project cards. Each has `track: "mobile" \| "odoo"` — the grid renders two labeled groups (Mobile · Flutter & AI / ERP · Odoo) |
| `stackChapter` | `Stack.tsx` | Stack layers (Mobile / Backend / ERP / AI / Design) |
| `journeyChapter` | `Trajectory.tsx` | Timeline milestones + credentials |
| `outroContent` | `Contact.tsx` | Contact heading + contact links |

### Page composition (`src/app/page.tsx`)

```
Hero → About → Stats → SelectedWork → Stack → Trajectory → Contact
```

That sequence is the deliberate hiring read: who, why-they're-good, the proof in numbers, the work, tools, timeline, how-to-reach. **Selected Work is split into two tracks** — Mobile/Flutter and Odoo/ERP — driven by each scene's `track` field.

### Scenes & motion (immersive theme)

Each home section is a "place" in one pastel world:
- **`SceneBackground`** (`components/site/`) — a vivid full-bleed illustrated scene (`public/scenes/*.png`) per section, masked to fade into its neighbours, with a light white scrim. Uses `next/image` (optimised + lazy). Keep `opacity` high and `scrim` low (~0.1–0.16); content readability comes from solid `.panel` cards, **not** from washing out the scene.
- **`.panel`** — the solid translucent card content sits in so it stays readable over a vivid scene. Prefer it over bare `.glass` for text-heavy blocks.
- **`Reveal`** (`components/site/`) — scroll-in motion. **Animates `y` only; opacity stays 1** (so content is never hidden if the observer doesn't fire — the bfcache rule). Wrap inner content, never whole sections.
- **`Hero.tsx` is a client component** with mouse parallax: scene, foreground clouds, planet, and orb translate at different depths on pointer move.
- Dev visual check: `node scripts/shot.mjs <url> <out.png>` (puppeteer-core, drives the already-installed Chrome — no browser download) captures a true full-page render with lazy images loaded. Headless Chrome `--screenshot` with URL anchors is unreliable; prefer the script.

### Case studies (`src/app/projects/<slug>/page.tsx`)

Three deep-dive pages — BloomBelly, CareConnect, Smart Expense. They share one layout: `src/components/case-study/CaseStudyLayout.tsx` plus reusable `<ADR>`, `<Callout>`, `<FactGrid>`, `<Lead>` building blocks. Architecture diagrams are inline SVG in `src/components/case-study/ArchitectureDiagram.tsx`.

Adding a new deep-dive: create `src/app/projects/<slug>/page.tsx` using `CaseStudyLayout`, then set `cta: { label: "Read case study", href: "/projects/<slug>" }` on the corresponding scene in `scenes-content.ts`.

### CV (`src/app/cv/page.tsx`)

Print-optimized via the `@media print` rules in `globals.css`. Uses the same palette tokens as the rest of the site. The "Open to" list reads from `aboutContent.openTo` so it stays in sync with the home page.

### One visual system — Salmverse pastel (immersive)

The site is an **immersive pastel "scene"**: a fixed aurora gradient on `<body>` (defined in `globals.css`) with twinkling stars + drifting bokeh from `SceneAtmosphere`, and every section floats over it as a **glass** panel. The palette is Salmverse — soft periwinkle → lavender → rose. All surfaces (home, case studies, CV) use the same tokens via CSS custom properties in `globals.css`:

| Token | Value | Purpose |
|---|---|---|
| `--paper` | `#F1ECF7` | base lavender-white (fallback; body uses a gradient) |
| `--surface` | `#FFFFFF` | solid card (rarely used — prefer `.glass`) |
| `--surface-2` | `#EFE9F5` | tag chips / subtle fills |
| `--ink` | `#3F3A5A` | primary text (deep plum) |
| `--ink-muted` | `#6A6488` | secondary text |
| `--ink-faint` | `#9A93B5` | tertiary text / mono labels |
| `--border` | `#E7E0F0` | dividers |
| `--border-strong` | `#D3C9E1` | input borders |
| `--accent` | `#CF7A99` | warm accent thread — now **rose** (was Damascus terracotta) |
| `--accent-deep` | `#B4628A` | hover/active accent |
| `--accent-soft` | `#F7E4EA` | accent backgrounds (callouts, highlight chips) |

Raw palette also exposed as `--c-blue #738FBD`, `--c-blue-2 #A8C3D4`, `--c-lav #DBD6DF`, `--c-pink #EEC6C7`, `--c-rose #DB88A4`, `--c-mauve #CC8EB1`.

Never hardcode hex values inside components — always go through these tokens.

**Theme utilities (globals.css):** `.glass` / `.glass-2` (translucent blur surfaces — the default section/card background), `.shadow-soft` / `.shadow-soft-lg` (pastel-tuned elevation), `.text-gradient` (plum→rose→blue heading fill), and the `.orb*` classes (see below). Motion keyframes are theme-scoped: `t-float`, `t-pulse`, `t-twinkle`, `t-drift`, `t-bob`.

### Typography

Three fonts, each with a job:

- **Fraunces** (`.font-display`, var `--font-display`) — expressive editorial serif for big headings, the hero name, large pull-quotes, the giant stat numbers, project/section titles. This is what makes the page read as *designed* rather than as stacked boxes. Use it for anything large and expressive; italic Fraunces for accents (e.g. the hero tagline trail).
- **Inter** — body copy and UI text.
- **JetBrains Mono** — eyebrows, labels, years, status pills, the `· ·` meta.

Avoid making everything a centered card. Prefer **editorial layouts**: a big serif lead statement, huge numbers with hairline dividers, a numbered manifesto list, flowing chip rows, a real vertical timeline, large inline links — content integrated **into** the scene via the directional `.scrim-l` / `.scrim-b` washes (or an inline gradient) plus text-shadow, not boxed in a `.panel`. Reserve `.panel` for genuine cards (project gallery). Motion: `Reveal` (scroll rise), `ScrollProgress` (top bar), hero mouse-parallax.

### Site chrome

`SiteNav` (sticky, glass, backdrop-blurred, with a tiny Orb beside the wordmark) and `SiteFooter` (glass) are global — applied via `layout.tsx`. `SceneAtmosphere` is also mounted there as a fixed `-z-10` ambient layer behind everything. Case study pages do NOT add their own nav; they rely on the global one plus a "Back to work" link in their hero.

### The Orb — recurring guide (`components/site/Orb.tsx`)

The pastel mascot (a glowing pearlescent orb with eyes) is the site's recurring visual thread. Source image: `public/demo/character.png`. The `<Orb size={px} float alt?>` component renders the image with a pulsing radial glow (`.orb-glow`) and a radial mask (`.orb-img`) that fades the PNG's square corners. It appears at `size={200}` in the Hero, `size={28}` beside every section eyebrow (the thread), in the nav wordmark, and large/faded in the Contact finale. Decorative by default (`aria-hidden`) unless you pass `alt`.

### Hero scene (`components/home/Hero.tsx`)

The Hero is a full immersive scene: `public/demo/scene-bg.png` (pastel retro-futuristic landscape) as a cover background with legibility scrims that **melt into the page** at the bottom, the guide Orb floating above the name, white text with soft shadows, and a scroll cue. The old 3D `ArabesqueAccent.tsx` is **no longer used** (the Orb replaced it) — safe to delete along with `three` / `@react-three/fiber` when convenient.

### `/demo` reference page (`src/app/demo/`)

`src/app/demo/page.tsx` (+ scoped `demo.css`) is the original full-screen proof-of-concept for this theme — a fixed overlay covering the chrome, with the same scene, orb, grid floor, and an orbiting-devices section. It's where the theme was designed; the home page is the production application of it. Image prompts for regenerating assets live in `docs/demo-image-prompts.md`.

### Asset conventions

The site uses Next.js's App Router file-based asset conventions for icons and OG images. Don't put these in `public/`; place them directly in `src/app/`:

- `src/app/icon.png` → injected as `<link rel="icon">` (Next.js auto-resizes for favicon needs)
- `src/app/apple-icon.png` → injected as `<link rel="apple-touch-icon">` (iOS home-screen icon)
- `src/app/opengraph-image.png` → injected as `<meta property="og:image">` (LinkedIn / Twitter / WhatsApp share preview)

Each appears as its own route at build time (`/icon.png`, `/apple-icon.png`, `/opengraph-image.png`) — that's expected. The current assets are the user's own monogram + OG card designs and should be replaced through the same paths if she updates them.

### Smooth scroll & anchors

`src/hooks/useLenis.ts` initializes Lenis smooth scroll AND intercepts in-page anchor clicks (`<a href="#...">`) to do a controlled `lenis.scrollTo()`. Without that interception, native anchor jumps would feel abrupt.

### Motion

Framer Motion is installed but used sparingly. If you add scroll-triggered animation, **`initial` states must keep content visible** — never `initial={{ opacity: 0 }}` on scene wrappers. On browser back-navigation / bfcache restore the IntersectionObserver may not retrigger and content stays hidden. Animate `y` only; opacity stays `1`. Use `viewport={{ once: true, amount: 0.05 }}`.

All theme motion is **pure CSS** (the `t-*` keyframes) and is globally neutralized under `prefers-reduced-motion: reduce` by the rule in `globals.css` — so the Orb glow, float, twinkle, and bokeh all freeze automatically with no per-component work. Any *new* JS-driven motion (Framer Motion, GSAP, 3D) must still consult `src/hooks/useReducedMotion.ts` and render a static fallback.

### Dependencies note

The 3D stack is now **unused**: `three`, `@react-three/fiber`, `@react-three/drei`, and `@react-three/postprocessing` were only needed by `ArabesqueAccent.tsx`, which the Orb replaced. Safe to uninstall all four (and delete `ArabesqueAccent.tsx`). `gsap` is also listed but unused; `lenis` is used by `src/hooks/useLenis.ts`.
