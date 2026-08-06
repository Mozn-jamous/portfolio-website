import { heroContent } from "@/lib/scenes-content";
import { SITE_URL, siteUrl } from "@/lib/base-path";

/**
 * Renders a JSON-LD <script>. Server-rendered (no client JS). Pass any
 * schema.org object or array; it's stringified into the page head/body.
 */
export function StructuredData({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inject; no user input is involved.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Site-wide Person + WebSite graph, derived from the single content source. */
export const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: heroContent.name,
      jobTitle: heroContent.subtitle,
      url: siteUrl(),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Damascus",
        addressCountry: "SY",
      },
      sameAs: heroContent.socials
        .filter((s) => s.href.startsWith("http"))
        .map((s) => s.href),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: siteUrl(),
      name: `${heroContent.name} — ${heroContent.subtitle}`,
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

/** Build a CreativeWork node for a case-study page. */
export function caseStudyStructuredData(opts: {
  name: string;
  description: string;
  path: string;
  year?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: opts.name,
    description: opts.description,
    url: siteUrl(opts.path),
    ...(opts.year ? { dateCreated: opts.year } : {}),
    creator: { "@id": `${SITE_URL}/#person` },
  };
}
