import { ProductMedia } from "@/components/site/Primitives"
import type { CSSProperties } from "react"
import manifest from "@/content/contractProductMedia.json"
import { contractVisuals, type ContractVisual } from "@/content/contractProductVisuals"
import styles from "./contractMedia.module.css"

export default function ContractMedia({ variant, priority = false, appearance = "light", omitOnMobile = false }: { variant: ContractVisual; priority?: boolean; appearance?: "light" | "page"; omitOnMobile?: boolean }) {
  const visual = contractVisuals[variant]
  const image = manifest.assets[visual.asset]
  const mobile = !omitOnMobile && "mobile" in visual ? manifest.assets[visual.mobile] : undefined
  const original = (file: string) => file.replace(/^public/, "")
  const mediaStyle = { "--contract-media-width": `${image.width}px`, "--contract-mobile-width": `${mobile?.width ?? image.width}px` } as CSSProperties
  return <div className={`${styles.figure} ${appearance === "page" ? styles.onPage : ""} ${mobile ? styles.mobile : styles.desktopOnly}`} style={mediaStyle} data-contract-visual={variant}>
    <ProductMedia image={{ ...image, alt: visual.alt }} mobileImage={mobile ? { ...mobile, alt: visual.alt } : undefined}
      originalSrc={original(image.original.file)} mobileOriginalSrc={mobile ? original(mobile.original.file) : undefined}
      caption={visual.caption} priority={priority} sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) calc(100vw - 96px), 850px" />
  </div>
}
