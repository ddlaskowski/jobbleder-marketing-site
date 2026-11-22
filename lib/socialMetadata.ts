import type { Metadata, ResolvingMetadata } from "next"
import { siteUrl } from "./siteUrl"

/** Keep existing image metadata while giving each page its own social text and URL. */
export async function socialMetadata(
  title: string,
  description: string,
  path: string,
  parent: ResolvingMetadata,
  { fileBasedOpenGraph = false }: { fileBasedOpenGraph?: boolean } = {},
): Promise<Pick<Metadata, "openGraph" | "twitter">> {
  const inherited = await parent
  return {
    openGraph: {
      title,
      description,
      url: siteUrl(path),
      siteName: "Jobbleder",
      locale: "no_NO",
      type: "website",
      // Leave this key absent when Next supplies the route's own image file.
      ...(!fileBasedOpenGraph ? { images: inherited.openGraph?.images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: inherited.twitter?.images,
    },
  }
}
