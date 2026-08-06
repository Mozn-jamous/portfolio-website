import type { Metadata } from "next";
import { AboutFull } from "@/components/about/AboutFull";
import { heroContent } from "@/lib/scenes-content";
import { SITE_URL, siteUrl } from "@/lib/base-path";

const DESCRIPTION =
  "Mozn Jamous — an end-to-end product builder: research and UX through Flutter, AI integration, and the business systems products run on. Journey, strengths, and working philosophy.";

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
