import puppeteer from "puppeteer-core";
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";

// Mobile screenshot rig — captures the page at a real phone viewport in
// slices (one PNG per viewport-height band) so long-page density issues are
// visible. `--menu` instead captures the open mobile nav sheet.
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const url = process.argv[2] || "http://localhost:3000/";
const prefix = process.argv[3] || "m";
const mode = process.argv[4] || "slices";
const lang = process.argv[5]; // "ar" to check RTL
const theme = process.argv[6]; // "light" | "dark"

mkdirSync(dirname(`${prefix}-x.png`), { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({
  width: 390,
  height: 844,
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});
if (lang || theme) {
  await page.goto(url, { waitUntil: "domcontentloaded" });
  await page.evaluate(
    (l, t) => {
      if (l) localStorage.setItem("lang", l);
      if (t) localStorage.setItem("theme", t);
    },
    lang,
    theme
  );
}
await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });

// scroll through to trigger lazy images + scroll reveals
await page.evaluate(async () => {
  await new Promise((res) => {
    let y = 0;
    const t = setInterval(() => {
      window.scrollBy(0, 400);
      y += 400;
      if (y >= document.body.scrollHeight + 1200) {
        clearInterval(t);
        res();
      }
    }, 70);
  });
});
await new Promise((r) => setTimeout(r, 1200));
await page.evaluate(() => window.scrollTo(0, 0));
await new Promise((r) => setTimeout(r, 600));

if (mode === "menu") {
  await page.click('button[aria-label="Open menu"]');
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: `${prefix}-menu.png` });
} else {
  const h = await page.evaluate(() => document.body.scrollHeight);
  const slices = Math.min(Math.ceil(h / 844), 14);
  console.log("page height", h, "slices", slices);
  for (let i = 0; i < slices; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), i * 844);
    await new Promise((r) => setTimeout(r, 450));
    await page.screenshot({ path: `${prefix}-${String(i).padStart(2, "0")}.png` });
  }
}
await browser.close();
console.log("done");
