// Screenshot a URL in a specific theme (light/dark) using installed Chrome.
//   node scripts/shot-theme.mjs <url> <out.png> [light|dark] [viewport]
import puppeteer from "puppeteer-core";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const url = process.argv[2] || "http://localhost:3000/";
const out = process.argv[3] || "shot.png";
const theme = process.argv[4] || "light";
const fullPage = process.argv[5] !== "viewport";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
// seed the choice before the inline theme script runs (faithful to real load)
await page.evaluateOnNewDocument((t) => {
  try {
    localStorage.setItem("theme", t);
  } catch {}
}, theme);
await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
await page.evaluate((t) => {
  document.documentElement.dataset.theme = t;
}, theme);
// scroll through to trigger lazy images + scroll reveals, then return to top
await page.evaluate(async () => {
  await new Promise((res) => {
    let y = 0;
    const i = setInterval(() => {
      window.scrollBy(0, 600);
      y += 600;
      if (y >= document.body.scrollHeight + 600) {
        clearInterval(i);
        res();
      }
    }, 50);
  });
});
await new Promise((r) => setTimeout(r, 400));
const scrollY = process.argv[6];
await page.evaluate((y) => window.scrollTo(0, y ? Number(y) : 0), scrollY);
await new Promise((r) => setTimeout(r, 250));
await page.screenshot({ path: out, fullPage });
await browser.close();
console.log("shot ->", out, `(${theme})`);
