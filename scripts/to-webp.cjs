/**
 * One-off asset optimizer: converts every raster image under /public to WebP,
 * right-sizing oversized exports, then deletes the original. Run once:
 *
 *   node scripts/to-webp.cjs
 *
 * Sizing policy:
 *   - small UI/illustration assets with alpha (orb, demo chips, demo character)
 *     → capped at 768px, quality 82 (they render small)
 *   - everything else (scenes, screenshots, hero scene-bg) → capped at 1600px,
 *     quality 80 (screenshots display at <=768px; 1600 covers 2x retina)
 *
 * sharp preserves the alpha channel in WebP, so transparent assets stay clean.
 * After running, update the .png/.jpg references in src/ to .webp.
 */
const fs = require("fs");
const path = require("path");

// pnpm doesn't hoist transitive deps to top-level node_modules, so resolve sharp
// from the store if a plain require() can't find it.
function loadSharp() {
  try {
    return require("sharp");
  } catch {
    const pnpm = path.join(__dirname, "..", "node_modules", ".pnpm");
    const dir = fs.readdirSync(pnpm).find((d) => d.startsWith("sharp@"));
    return require(path.join(pnpm, dir, "node_modules", "sharp"));
  }
}
const sharp = loadSharp();

const PUBLIC = path.join(__dirname, "..", "public");

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (/\.(png|jpe?g)$/i.test(e.name)) out.push(p);
  }
  return out;
}

(async () => {
  const files = walk(PUBLIC);
  let before = 0;
  let after = 0;
  for (const f of files) {
    const rel = f.slice(PUBLIC.length).replace(/\\/g, "/");
    const small =
      /\/(orb|demo\/chips)\//.test(rel) || /\/demo\/character\.png$/i.test(rel);
    const maxEdge = small ? 768 : 1600;
    const quality = small ? 82 : 80;
    const outPath = f.replace(/\.(png|jpe?g)$/i, ".webp");
    const srcSize = fs.statSync(f).size;

    await sharp(f)
      .resize(maxEdge, maxEdge, { fit: "inside", withoutEnlargement: true })
      .webp({ quality, alphaQuality: 90, effort: 6 })
      .toFile(outPath);

    const outSize = fs.statSync(outPath).size;
    fs.unlinkSync(f);
    before += srcSize;
    after += outSize;
    console.log(
      `${rel.padEnd(44)} ${(srcSize / 1024).toFixed(0).padStart(5)}KB -> ${(
        outSize / 1024
      )
        .toFixed(0)
        .padStart(5)}KB`,
    );
  }
  console.log(
    `\nTOTAL  ${(before / 1048576).toFixed(1)}MB -> ${(after / 1048576).toFixed(
      1,
    )}MB  (${files.length} files)`,
  );
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
