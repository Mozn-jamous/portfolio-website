import type { NextConfig } from "next";

// When NEXT_PUBLIC_BASE_PATH is set (the GitHub Pages CI build), produce a
// static export served under that subpath. Otherwise (local dev / Vercel)
// run as a normal optimized Next.js app at the domain root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = basePath
  ? {
      // Pin the workspace root to this project so Turbopack doesn't infer a
      // parent dir (e.g. C:\Users\mesho, which contains OneDrive) as root and
      // try to scan the entire tree — that exhausts memory and OOM-crashes dev.
      turbopack: { root: __dirname },
      output: "export",
      basePath,
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {
      turbopack: { root: __dirname },
      images: { formats: ["image/avif", "image/webp"] },
    };

export default nextConfig;
