/**
 * Base path the app is served under.
 *
 * Empty for local dev and Vercel (served at the domain root). Set to
 * "/portfolio-website" by the GitHub Pages build (a project page is served
 * under /<repo>). next/link and next/image apply `basePath` automatically;
 * this helper is for RAW `<a href>` / `<img src>` that Next does not rewrite.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefix an absolute internal path with the base path. External URLs
 * (http/mailto), protocol-relative (`//`), hash links, relative paths, and
 * already-prefixed paths are returned unchanged.
 */
export function withBase(path: string): string {
  if (!BASE_PATH) return path;
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  if (path === BASE_PATH || path.startsWith(`${BASE_PATH}/`)) return path;
  return `${BASE_PATH}${path}`;
}

/**
 * Origin the site is served from — WITHOUT the base path. This is what
 * `metadataBase` wants: Next prefixes the base path itself when resolving
 * file-based metadata images (opengraph-image, icon), so including it here
 * would double it.
 *
 * moznjamous.org is Mozn's own domain (bought Aug 2026, DNS on Cloudflare),
 * attached to GitHub Pages via public/CNAME — so every build target now
 * shares one canonical origin, with no /portfolio-website subpath.
 */
export const SITE_ORIGIN = "https://moznjamous.org";

/** True for static-export builds (GitHub Pages), where trailingSlash is on. */
const IS_EXPORT =
  !!BASE_PATH || process.env.NEXT_PUBLIC_STATIC_EXPORT === "1";

/** The site's public root URL, base path included. */
export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`;

/**
 * Absolute public URL for an internal path — for hand-written `og:url`,
 * JSON-LD `@id`, sitemap and robots entries. The static export sets
 * `trailingSlash: true`, so a trailing slash is added there to keep canonical
 * URLs off a 301.
 */
export function siteUrl(path = "/"): string {
  if (!path || path === "/") return `${SITE_URL}/`;
  const p = path.startsWith("/") ? path : `/${path}`;
  return IS_EXPORT ? `${SITE_URL}${p}/` : `${SITE_URL}${p}`;
}
