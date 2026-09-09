import type { NextConfig } from "next";

// Static export triggers: NEXT_PUBLIC_BASE_PATH (legacy subpath builds) or
// NEXT_PUBLIC_STATIC_EXPORT=1 (the GitHub Pages build on the custom domain
// moznjamous.org, served at the root via public/CNAME). Otherwise (local
// dev / Vercel) run as a normal optimized Next.js app.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const isExport = !!basePath || process.env.NEXT_PUBLIC_STATIC_EXPORT === "1";

// Dev-only: Next blocks cross-origin dev requests (the HMR socket and the
// /_next/* internals) unless the origin is allow-listed. Opening the dev
// server by LAN IP (e.g. from a phone) without this leaves the client JS
// un-hydrated — which showed up as a blank Hero, since its entrance
// animation never ran and the blocks stayed at their opacity-0 start state.
const allowedDevOrigins = [
  "localhost",
  "127.0.0.1",
  "192.168.1.114",
  "192.168.1.*",
  "192.168.0.*",
];

const nextConfig: NextConfig = isExport
  ? {
      // Pin the workspace root to this project so Turbopack doesn't infer a
      // parent dir (e.g. C:\Users\mesho, which contains OneDrive) as root and
      // try to scan the entire tree — that exhausts memory and OOM-crashes dev.
      turbopack: { root: __dirname },
      allowedDevOrigins,
      output: "export",
      ...(basePath ? { basePath } : {}),
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {
      turbopack: { root: __dirname },
      allowedDevOrigins,
      images: { formats: ["image/avif", "image/webp"] },
    };

export default nextConfig;
