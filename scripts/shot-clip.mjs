import puppeteer from "puppeteer-core";

// Usage: node scripts/shot-clip.mjs <url> <out.png> <selector> [lang]
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const url = process.argv[2];
const out = process.argv[3];
const sel = process.argv[4];
const lang = process.argv[5] || "ar";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.evaluateOnNewDocument((l) => {
  try { localStorage.setItem("lang", l); } catch {}
}, lang);
await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
await page.evaluate((l) => {
  document.documentElement.lang = l;
  document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
}, lang);
await new Promise((r) => setTimeout(r, 800));
const el = await page.$(sel);
if (!el) { console.error("selector not found:", sel); process.exit(1); }
await el.scrollIntoView();
await new Promise((r) => setTimeout(r, 600));
await el.screenshot({ path: out });
await browser.close();
console.log("clip ->", out);
