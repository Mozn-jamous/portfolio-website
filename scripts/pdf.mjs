// Render a local HTML file to PDF using the installed Chrome (puppeteer-core).
//   node scripts/pdf.mjs <input.html> <output.pdf>
import puppeteer from "puppeteer-core";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const input = process.argv[2] || "docs/portfolio.html";
const out = process.argv[3] || "Mozn-Jamous-Portfolio.pdf";

const url = pathToFileURL(resolve(input)).href;

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox"],
});
const page = await browser.newPage();
await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
await page.emulateMediaType("print");
await page.pdf({
  path: out,
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
  displayHeaderFooter: false,
});
await browser.close();
console.log("pdf ->", out);
