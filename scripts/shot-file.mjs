// Screenshot a LOCAL html file (file://) to PNG using installed Chrome.
//   node scripts/shot-file.mjs <input.html> <out.png> [width] [height] [full]
import puppeteer from "puppeteer-core";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const input = process.argv[2];
const out = process.argv[3] || "shot.png";
const width = Number(process.argv[4] || 1440);
const height = Number(process.argv[5] || 900);
const full = process.argv[6] === "full";

const url = pathToFileURL(resolve(input)).href;
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width, height, deviceScaleFactor: 1.5 });
await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
// trigger reveal-on-scroll observers, then return to top
await page.evaluate(async () => {
  await new Promise((res) => {
    let y = 0;
    const t = setInterval(() => {
      window.scrollBy(0, 600);
      y += 600;
      if (y >= document.body.scrollHeight + 600) { clearInterval(t); res(); }
    }, 60);
  });
});
await new Promise((r) => setTimeout(r, 800));
await page.evaluate(() => window.scrollTo(0, 0));
await new Promise((r) => setTimeout(r, 500));
await page.screenshot({ path: out, fullPage: full });
await browser.close();
console.log("shot ->", out);
