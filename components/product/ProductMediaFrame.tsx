import Image from "next/image"
import type { CSSProperties } from "react"
import type { ProductMediaImage } from "@/lib/invoiceProductMedia"
import styles from "./invoice/invoiceProduct.module.css"

type Props = {
  label: string
  kind?: "app" | "document"
  caption?: string
  image?: ProductMediaImage
  mobileImage?: ProductMediaImage
  priority?: boolean
}

/** Explicit placeholders until an approved, authentic product asset is supplied. */
export default function ProductMediaFrame({ label, kind = "app", caption, image, mobileImage, priority = false }: Props) {
  return (
    <figure className={styles.mediaFigure}>
      <div className={`${styles.mediaFrame} ${kind === "document" ? styles.documentFrame : styles.appFrame} ${image ? styles.imageFrame : ""}`}
        style={image ? { "--media-ratio": `${image.width} / ${image.height}`, "--mobile-media-ratio": mobileImage ? `${mobileImage.width} / ${mobileImage.height}` : `${image.width} / ${image.height}` } as CSSProperties : undefined}>
        {image ? (
          <picture>
            {mobileImage && <source media="(max-width: 639px)" srcSet={mobileImage.src} width={mobileImage.width} height={mobileImage.height} />}
            <Image {...image} alt={image.alt} className={styles.productImage} unoptimized loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} />
          </picture>
        ) : (
          <>
            <span className={styles.mediaLabel}>PLASSHOLDER · {kind === "document" ? "PDF" : "APP"}</span>
            <div className={styles.mediaCenter}>
              <span className={styles.mediaTitle}>{label}</span>
              <span className={styles.mediaHint}>{kind === "document" ? "Plass til en ekte faktura-PDF" : "Plass til et ekte skjermbilde"}</span>
            </div>
            <span className={styles.mediaFootnote}>Produktvisning kommer</span>
          </>
        )}
      </div>
      {(caption || (image && kind === "document")) && <figcaption className={styles.mediaCaption}>{caption}
        {image && kind === "document" && <a href={image.src} className={styles.mediaFullLink}>Åpne fakturavisningen i full størrelse <span aria-hidden="true">↗</span></a>}
      </figcaption>}
    </figure>
  )
}
