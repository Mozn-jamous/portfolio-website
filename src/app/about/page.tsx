import type { Metadata } from "next";
import { AboutFull } from "@/components/about/AboutFull";
import { heroContent } from "@/lib/scenes-content";
import { SITE_URL, siteUrl } from "@/lib/base-path";

const DESCRIPTION =
  "Mozn Jamous, a software engineer working across mobile, web, backend, AI features and ERP systems. Background, strengths, and how she works.";

export const metadata: Metadata = {
  title: "About — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "About — Mozn Jamous",
    description: DESCRIPTION,
    type: "profile",
    url: siteUrl("/about"),
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Mozn Jamous",
    description: DESCRIPTION,
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutFull />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name: `About ${heroContent.name}`,
            description: DESCRIPTION,
            url: siteUrl("/about"),
            mainEntity: { "@id": `${SITE_URL}/#person` },
          }),
        }}
      />
    </>
  );
}
