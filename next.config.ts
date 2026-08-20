import type { NextConfig } from "next";

// Static export triggers: NEXT_PUBLIC_BASE_PATH (legacy subpath builds) or
// NEXT_PUBLIC_STATIC_EXPORT=1 (the GitHub Pages build on the custom domain
// moznjamous.org, served at the root via public/CNAME). Otherwise (local
// dev / Vercel) run as a normal optimized Next.js app.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const isExport = !!basePath || process.env.NEXT_PUBLIC_STATIC_EXPORT === "1";

const nextConfig: NextConfig = isExport
  ? {
      // Pin the workspace root to this project so Turbopack doesn't infer a
      // parent dir (e.g. C:\Users\mesho, which contains OneDrive) as root and
      // try to scan the entire tree — that exhausts memory and OOM-crashes dev.
      turbopack: { root: __dirname },
      output: "export",
      ...(basePath ? { basePath } : {}),
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {
      turbopack: { root: __dirname },
      images: { formats: ["image/avif", "image/webp"] },
    };

export default nextConfig;
