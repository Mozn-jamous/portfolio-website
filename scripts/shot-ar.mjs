import puppeteer from "puppeteer-core";

// Usage: node scripts/shot-ar.mjs <url> <out.png> [selector] [viewport]
// Forces Arabic + RTL via localStorage before first paint, then screenshots.
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const url = process.argv[2] || "http://localhost:3000/";
const out = process.argv[3] || "ar.png";
const sel = process.argv[4] || "";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

// Seed the lang BEFORE any script runs so the pre-paint inline script picks it up.
await page.evaluateOnNewDocument(() => {
  try {
    localStorage.setItem("lang", "ar");
  } catch {}
});

await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });

// Belt-and-suspenders: ensure html lang/dir are set even if storage was late.
await page.evaluate(() => {
  document.documentElement.lang = "ar";
  document.documentElement.dir = "rtl";
});

// scroll to trigger lazy images + reveals
await page.evaluate(async () => {
  await new Promise((res) => {
    let y = 0;
    const t = setInterval(() => {
      window.scrollBy(0, 350);
      y += 350;
      if (y >= document.body.scrollHeight + 1000) {
        clearInterval(t);
        res();
      }
    }, 70);
  });
});
await new Promise((r) => setTimeout(r, 1200));

if (sel) {
  await page.evaluate((s) => document.querySelector(s)?.scrollIntoView({ block: "start" }), sel);
  await new Promise((r) => setTimeout(r, 900));
  await page.screenshot({ path: out });
} else {
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: out, fullPage: true });
}

await browser.close();
console.log("shot-ar ->", out);
