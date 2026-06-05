import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SceneAtmosphere } from "@/components/site/SceneAtmosphere";
import { ScrollProgress } from "@/components/site/ScrollProgress";

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

// Geometric display sans — playful, techy headings (Nesh-style), not serif
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mozn Jamous — Flutter · Odoo · AI integration",
  description:
    "Informatics engineer in Damascus. Building Flutter apps, Odoo deployments, and Arabic-first health systems. Open to Flutter and Odoo roles.",
  metadataBase: new URL("https://moznjamous.com"),
  openGraph: {
    title: "Mozn Jamous — Flutter · Odoo · AI integration",
    description:
      "Informatics engineer in Damascus. Open to Flutter and Odoo roles.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mozn Jamous — Flutter · Odoo · AI integration",
    description:
      "Informatics engineer in Damascus. Open to Flutter and Odoo roles.",
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
      className={`${inter.variable} ${jetbrains.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen text-[var(--ink)]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[var(--ink)] focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <SceneAtmosphere />
        <ScrollProgress />
        <SiteNav />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
