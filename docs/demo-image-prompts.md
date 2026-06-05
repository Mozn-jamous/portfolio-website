# Demo scene — AI image prompts

Prompts for the `/demo` immersive scene. Palette = **Salmverse** (soft periwinkle → lavender → rose):
`#738fbd  #a8c3d4  #dbd6df  #eec6c7  #db88a4  #cc8eb1`

Works with Midjourney, DALL·E 3, Leonardo, Ideogram, or Flux. Place exports in `public/demo/`.

> Tip: for transparent PNGs use DALL·E 3 / Ideogram ("transparent background"), or Midjourney v6 with `--transparent` (niji/v6) or remove the bg afterward.

---

## 1. Character — the glowing orb mascot  →  `public/demo/character.png`

```
A cute friendly glowing spherical mascot floating in the air, a soft translucent
pearlescent bubble creature with two simple vertical glowing white oval eyes, no mouth,
gentle inner luminescence. Iridescent gradient from soft rose pink (#db88a4) and mauve
(#cc8eb1) into periwinkle blue (#738fbd), glossy top highlight, soft outer glow halo.
Calm, elegant, dreamy. Flat vector illustration with subtle gradients, smooth shading,
no harsh outlines. Centered, isolated on a fully transparent background. Soft ambient
rim light. High detail, clean edges.
--ar 1:1 --style raw --no background, scenery, text, watermark
```

**Notes:** must be on a **transparent** background (the code adds the glow + float). ~600×600px or larger, square.

---

## 2. Scene background — landscape, NO character  →  `public/demo/scene-bg.webp`

```
A dreamy pastel retro-futuristic landscape at twilight, wide panoramic view. Layered
rolling mountains and soft jagged ridges fading into atmospheric haze, with a few
minimalist sci-fi structures in silhouette — a satellite dish on slender legs, a slim
spire with a glowing orb on top, a mushroom-shaped tower. Soft glowing horizon. Calm,
serene, elegant. Color palette: periwinkle blue (#738fbd), light blue (#a8c3d4),
lavender grey (#dbd6df), soft pink (#eec6c7), rose (#db88a4), mauve (#cc8eb1). Flat
vector illustration, smooth gradients, gentle depth layering, subtle stars in the upper
sky. No characters, no people, empty center for an overlay. Cinematic, peaceful mood.
--ar 16:9 --style raw --no character, mascot, creature, text, logo, watermark, people
```

**Notes:** keep the **center empty** (the orb sits there). Export ≥ **2880×1620px**, WebP.

---

## 3. Orbiting device chips  →  `public/demo/chips/*.png`

One image each, isolated on transparent background. Same soft style.

### 3a. Monitor / computer  →  `chips/monitor.png`
```
A small cute retro computer monitor icon, rounded soft 3D shape, pastel periwinkle blue
(#738fbd) and lavender (#dbd6df) with a soft pink glowing screen (#eec6c7), gentle
shadows, glossy. Minimalist friendly illustration, isolated on a transparent background.
--ar 1:1 --no background, text, watermark
```

### 3b. Chart / analytics  →  `chips/graph.png`
```
A small cute floating card showing a rising line chart, rounded soft 3D shape, pastel
mauve (#cc8eb1) and periwinkle (#738fbd), soft glow, glossy. Minimalist friendly
illustration, isolated on a transparent background.
--ar 1:1 --no background, text, watermark
```

### 3c. Clock / time  →  `chips/clock.png`
```
A small cute rounded clock icon, soft 3D pastel rose (#db88a4) and light blue (#a8c3d4),
gentle glow, glossy. Minimalist friendly illustration, isolated on a transparent
background.
--ar 1:1 --no background, text, watermark
```

### 3d. Spark / AI insight  →  `chips/spark.png`
```
A small cute four-point sparkle / star icon, soft 3D pastel pink (#eec6c7) and mauve
(#cc8eb1), glowing, glossy. Minimalist friendly illustration, isolated on a transparent
background.
--ar 1:1 --no background, text, watermark
```

---

## Consistency tips

- Generate the **character first**, then reuse it as a style/`--sref` reference for the
  background and chips so everything matches.
- Keep every asset in the **same flat-vector, soft-gradient** style — avoid photoreal or
  heavy 3D.
- After generating, drop files into `public/demo/` (and `public/demo/chips/`) using the
  exact filenames above, then tell me — I'll wire them into the layers and animation.
