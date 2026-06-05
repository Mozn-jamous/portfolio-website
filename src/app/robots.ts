import type { MetadataRoute } from "next";

// Required so the route can be emitted by `output: export` (GitHub Pages build).
export const dynamic = "force-static";

const BASE = "https://moznjamous.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /demo is a theme proof-of-concept, not portfolio content.
      disallow: "/demo",
    },
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
