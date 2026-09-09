import puppeteer from "puppeteer-core";
import { mkdirSync } from "node:fs";

// Renders a page at a phone viewport in the combinations where direction- and
// token-dependent bugs hide: Arabic/RTL and the light theme.
//
//   node scripts/shot-variants.mjs [url] [prefix] [menu|page]
//
// "menu" opens the mobile nav sheet (its RTL anchoring is easy to get wrong);
// "page" just captures the top of the page.
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const url = process.argv[2] || "http://localhost:3000/";
const prefix = process.argv[3] || ".shots/menu";
const mode = process.argv[4] || "menu";

mkdirSync(prefix.replace(/[^/\\]*$/, "") || ".", { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars"],
});

for (const v of [
  { name: "ar-dark", lang: "ar", theme: "dark" },
  { name: "en-light", lang: "en", theme: "light" },
  { name: "ar-light", lang: "ar", theme: "light" },
]) {
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.goto(url, { waitUntil: "domcontentloaded" });
  await page.evaluate(
    (lang, theme) => {
      localStorage.setItem("lang", lang);
      localStorage.setItem("theme", theme);
    },
    v.lang,
    v.theme
  );
  await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 800));

  if (mode === "menu") {
    await page.click('button[aria-label="Open menu"]');
    await new Promise((r) => setTimeout(r, 700));
    const rect = await page.evaluate(() => {
      const r = document.querySelector('[role="dialog"]').getBoundingClientRect();
      return { w: Math.round(r.width), h: Math.round(r.height), left: Math.round(r.left) };
    });
    console.log(v.name, JSON.stringify(rect));
  } else {
    console.log(v.name);
  }
  await page.screenshot({ path: `${prefix}-${v.name}.png` });
  await page.close();
}
await browser.close();
console.log("done");
