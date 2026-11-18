import manifest from "@/content/invoiceProductMedia.json"

type Asset = { src: string; width: number; height: number }
type MediaKey = "hero" | "heroMobile" | "editor" | "free" | "premiumClear" | "premiumLogo" | "processCustomer" | "processLines" | "processTotals"
export type ProductMediaImage = Asset & { alt: string; sizes: string }
const assets: Record<MediaKey, Asset | null> = manifest.assets

export const heroIsOverview = manifest.heroKind === "overview"

export function invoiceImage(key: MediaKey, alt: string, sizes: string): ProductMediaImage | undefined {
  const asset = assets[key]
  return asset ? { src: asset.src, width: asset.width, height: asset.height, alt, sizes } : undefined
}
