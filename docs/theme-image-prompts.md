# Theme image prompts — "calm pastel cosmos"

Assets that turn the immersive theme from *calm* into *rich and warm*. The orb (the
guide) travels through the page; each section becomes a different **place** in one
soft world, and the orb appears in a different **pose** in each.

**Palette (paste into every prompt):** Salmverse — periwinkle `#738fbd`, light blue
`#a8c3d4`, lavender `#dbd6df`, soft pink `#eec6c7`, rose `#db88a4`, mauve `#cc8eb1`,
with a warm golden-hour light.

**Shared style suffix (append to every prompt):**
> Flat vector illustration, soft gradients, smooth shading, dreamy and calm, no harsh
> outlines, no text, no watermark. Salmverse pastel palette with warm golden-hour light.

**Consistency:** generate the orb poses first, then use `character.png` + one finished
scene as a style reference (`--sref` in Midjourney) for everything else.

---

## A. Per-section background scenes  →  `public/scenes/*.webp`

Wide illustrations, **no characters**, with empty space where the text/cards sit.
Export ≥ **2880×1620** WebP.

### A1. About  →  `scenes/about.webp`
```
A calm dreamy observatory floating in a pastel sky at dawn — a soft hill with a small
telescope, gentle clouds, a large crescent moon and a softly glowing ringed planet in
the distance, a few constellations. Peaceful, contemplative. Wide 16:9, keep the left
half open and uncluttered for text, no characters.
```

### A2. Selected work  →  `scenes/work.webp`
```
A serene "gallery among the stars" — soft floating platforms and translucent holographic
panels glowing faintly, gentle light beams, distant pastel planets and stars, lots of
calm negative space. Abstract and minimal so cards read on top. Wide 16:9, no characters.
```

### A3. Stack  →  `scenes/stack.webp`
```
A tranquil constellation field at twilight — softly glowing star-nodes connected by thin
delicate lines forming gentle shapes, a faint nebula haze in periwinkle and rose, a small
ringed planet at the edge. Minimal, lots of dark-free negative space. Wide 16:9, no
characters.
```

### A4. Trajectory  →  `scenes/trajectory.webp`
```
A luminous winding path climbing through soft pastel hills toward a glowing horizon at
dawn, small glowing milestone markers along the way like little lanterns, a comet trail
arcing across the sky. Hopeful, forward-moving. Wide 16:9, keep the right side open for
text, no characters.
```

### A5. Contact  →  `scenes/contact.webp`
```
A warm pastel sunset over a soft sea of clouds, a gentle horizon glow in peach and rose,
a single paper plane and a shooting star, a few drifting clouds. The warmest, coziest
scene of the set. Wide 16:9, keep the lower-left open for text, no characters.
```

---

## B. Orb poses — the recurring guide  →  `public/orb/*.png`

Same creature as `character.png`: a glowing translucent pearlescent orb with two simple
vertical glowing white oval eyes, no mouth. **Transparent background, square, ~700×700.**

### B1. Reading / curious (About)  →  `orb/reading.png`
```
The glowing pearlescent orb mascot with two vertical glowing white oval eyes, tilted
slightly as if curiously reading, a tiny soft open book or glowing page floating beside
it. Isolated on a fully transparent background, square.
```

### B2. Presenting (Selected work)  →  `orb/present.png`
```
The glowing pearlescent orb mascot with two vertical glowing white oval eyes, leaning to
one side with a small gesture as if presenting / showing something to the side. Isolated
on a fully transparent background, square.
```

### B3. Stargazing (Stack)  →  `orb/stargaze.png`
```
The glowing pearlescent orb mascot with two vertical glowing white oval eyes looking
upward in wonder, a few tiny sparkles around it. Isolated on a fully transparent
background, square.
```

### B4. Journeying (Trajectory)  →  `orb/journey.png`
```
The glowing pearlescent orb mascot with two vertical glowing white oval eyes drifting
forward with a faint motion trail behind it, as if travelling along a path. Isolated on a
fully transparent background, square.
```

### B5. Waving goodbye (Contact)  →  `orb/wave.png`
```
The glowing pearlescent orb mascot with two happy curved glowing eyes, a small soft wisp
raised like a friendly wave goodbye. Warm and cheerful. Isolated on a fully transparent
background, square.
```

---

## C. Floating props / objects  →  `public/props/*.png`

Small detailed objects, **transparent background, square**, ~600×600. Reused as
parallax accents and to replace the CSS planets.

| File | Prompt (+ shared suffix) |
|---|---|
| `props/moon.png` | `A soft glowing crescent moon, pastel ivory and lavender, gentle craters, subtle halo. Isolated on a transparent background, square.` |
| `props/planet-ring.png` | `A dreamy ringed planet, pastel rose and periwinkle gradient, soft glossy highlight, thin elegant ring. Isolated on a transparent background, square.` |
| `props/island.png` | `A tiny floating island with a soft grassy top and a little tree, pastel mauve rock underneath, gentle glow. Isolated on a transparent background, square.` |
| `props/paper-plane.png` | `A small soft paper plane with a faint pastel motion trail, periwinkle and white. Isolated on a transparent background, square.` |
| `props/books.png` | `A small neat stack of soft pastel books glowing faintly, rose, lavender, periwinkle covers. Isolated on a transparent background, square.` |
| `props/rocket.png` | `A cute tiny rounded rocket with a soft pastel flame, periwinkle body, rose fins. Isolated on a transparent background, square.` |
| `props/cloud.png` | `A single soft fluffy pastel cloud, white with faint pink and periwinkle shading, dreamy and blurred at the edges. Isolated on a transparent background, wide.` |

---

## D. Optional foreground (hero parallax)  →  `public/scenes/hero-foreground.png`
```
A thin foreground strip of soft silhouetted pastel hills and a couple of small floating
islands, transparent above the ridge line, to layer in front of the hero scene for depth.
Wide 16:9, bottom-aligned, transparent top, no characters.
```

---

## Where each slots in (so wiring is instant)

- `scenes/*.webp` → faint per-section background layer (like the hero) behind each section's glass.
- `orb/*.png` → swap the small section-header orb for the matching pose.
- `props/*.png` → replace the CSS `<Planet>`/decor and add hero parallax accents.
- Drop files into the exact paths above and tell me — I'll create the folders, wire the
  layers, set per-section parallax, and tune opacity/blur so text stays readable.
