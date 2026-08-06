import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/base-path";

// Required so the route can be emitted by `output: export` (GitHub Pages build).
export const dynamic = "force-static";

/** Stable routes. Project pages are explicit (they map 1:1 to case studies). */
const ROUTES = [
  { path: "/", priority: 1 },
  { path: "/projects", priority: 0.9 },
  { path: "/projects/mademoiselle", priority: 0.9 },
  { path: "/projects/bloombelly", priority: 0.9 },
  { path: "/projects/careconnect", priority: 0.9 },
  { path: "/projects/eda", priority: 0.9 },
  { path: "/projects/blatos", priority: 0.9 },
  { path: "/projects/smart-expense", priority: 0.9 },
  { path: "/projects/techno-solution", priority: 0.9 },
  { path: "/projects/burgasm", priority: 0.9 },
  { path: "/projects/takhrjy", priority: 0.9 },
  { path: "/projects/pharmacology", priority: 0.9 },
  { path: "/projects/noodlna", priority: 0.9 },
  { path: "/odoo", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.6 },
  { path: "/cv", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority }) => ({
    url: siteUrl(path),
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
