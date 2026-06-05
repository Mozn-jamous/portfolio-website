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
