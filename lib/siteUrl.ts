/** Stable production origin; never use a request or preview host for SEO URLs. */
export const SITE_ORIGIN = "https://www.jobbleder.no"

/** Build an absolute URL from a root-relative marketing path. */
export function siteUrl(path: string = "/"): string {
  if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) {
    throw new Error("Marketing URLs must use a root-relative path")
  }

  const url = new URL(path, SITE_ORIGIN)
  if (url.origin !== SITE_ORIGIN) {
    throw new Error("Marketing URLs must stay on the production origin")
  }

  return url.href
}
