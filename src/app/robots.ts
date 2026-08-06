import type { MetadataRoute } from "next";
import { SITE_ORIGIN, SITE_URL } from "@/lib/base-path";

// Required so the route can be emitted by `output: export` (GitHub Pages build).
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /demo is a theme proof-of-concept, not portfolio content.
      disallow: "/demo",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_ORIGIN,
  };
}
