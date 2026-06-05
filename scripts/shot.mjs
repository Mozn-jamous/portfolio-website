import puppeteer from "puppeteer-core";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const url = process.argv[2] || "http://localhost:3200/";
const out = process.argv[3] || "page.png";
const fullPage = process.argv[4] !== "viewport";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });

// scroll through to trigger lazy images + scroll reveals
await page.evaluate(async () => {
  await new Promise((res) => {
    let y = 0;
    const step = 350;
    const t = setInterval(() => {
      window.scrollBy(0, step);
      y += step;
      if (y >= document.body.scrollHeight + 1000) {
        clearInterval(t);
        res();
      }
    }, 80);
  });
});
await new Promise((r) => setTimeout(r, 1500));
await page.evaluate(() => window.scrollTo(0, 0));
await new Promise((r) => setTimeout(r, 500));

await page.screenshot({ path: out, fullPage });
await browser.close();
console.log("shot ->", out);
