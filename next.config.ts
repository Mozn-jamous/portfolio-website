import type { NextConfig } from "next";

// When NEXT_PUBLIC_BASE_PATH is set (the GitHub Pages CI build), produce a
// static export served under that subpath. Otherwise (local dev / Vercel)
// run as a normal optimized Next.js app at the domain root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = basePath
  ? {
      output: "export",
      basePath,
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {
      images: { formats: ["image/avif", "image/webp"] },
    };

export default nextConfig;
