import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SceneAtmosphere } from "@/components/site/SceneAtmosphere";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { CommandPalette } from "@/components/site/CommandPalette";
import { StructuredData, siteStructuredData } from "@/components/site/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

// Display — Clash Display (Fontshare), self-hosted. Weights 500 & 600 only;
// the type system never goes heavier than 600 (per the typography spec).
const clashDisplay = localFont({
  src: [
    { path: "./fonts/ClashDisplay-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ClashDisplay-Semibold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mozn Jamous — End-to-End Product Builder",
  description:
    "End-to-end product builder in Damascus. I design products, build Flutter apps, integrate AI, and engineer the Odoo/ERP systems behind them — from idea to shipped reality. Arabic-first by default.",
  metadataBase: new URL("https://moznjamous.com"),
  openGraph: {
    title: "Mozn Jamous — End-to-End Product Builder",
    description:
      "Designs products, builds Flutter apps, integrates AI, and engineers the systems behind them — from idea to shipped reality. Based in Damascus, Arabic-first by default.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mozn Jamous — End-to-End Product Builder",
    description:
      "Designs products, builds Flutter apps, integrates AI, and engineers the systems behind them — from idea to shipped reality.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrains.variable} ${clashDisplay.variable}`}
    >
      <body className="min-h-screen text-[var(--ink)]">
        {/* Set the saved theme before paint to avoid a flash of the wrong one */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=(t==='light'||t==='dark')?t:'dark';}catch(e){}})();",
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[var(--ink)] focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <StructuredData data={siteStructuredData} />
        <SmoothScroll />
        <SceneAtmosphere />
        <ScrollProgress />
        <SiteNav />
        <main id="main">{children}</main>
        <SiteFooter />
        <CommandPalette />
      </body>
    </html>
  );
}
