import Image from "next/image"
import media from "@/content/instructionMobileMedia.json"
import offerMedia from "@/content/offerProductMedia.json"
import homeMedia from "@/content/homeProductMedia.json"
import type { BlogProductExampleBlock } from "@/content/blogPosts"
import styles from "./blogProductExample.module.css"

export default function BlogProductExample({ asset, paragraphs, alt, caption }: BlogProductExampleBlock) {
  const wide = asset === "editedContract"
  const isDocument = asset === "offerDocument" || asset === "contractDocument"
  const image = asset === "offerDocument" ? homeMedia.assets.offer : asset === "contractDocument" ? homeMedia.assets.contractDocument : asset === "editedContract" ? offerMedia.assets.editedContract : media.assets[asset]
  return <div className={isDocument ? `${styles.example} ${styles.documentExample}` : wide ? `${styles.example} ${styles.wideExample}` : styles.example}>
    {paragraphs.length > 0 && <div className={styles.copy}>{paragraphs.map(text => <p key={text}>{text}</p>)}</div>}
    <figure className={styles.figure}>
      <Image src={image.src} width={image.width} height={image.height} alt={alt} unoptimized loading="lazy"
        sizes={isDocument ? "(min-width: 528px) 480px, calc(100vw - 48px)" : wide ? "(min-width: 608px) 560px, calc(100vw - 48px)" : "(min-width: 768px) 248px, (max-width: 339px) calc(100vw - 48px), 292px"} className={styles.image} />
      <figcaption>{caption} <a href={image.original.file.replace(/^public/, "")}>{isDocument ? "Åpne dokumentet i full størrelse" : "Åpne hele skjermbildet"}<span className={styles.srOnly}>: {alt}</span></a></figcaption>
    </figure>
  </div>
}
