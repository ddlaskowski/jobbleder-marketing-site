import Image from "next/image"
import media from "@/content/instructionMobileMedia.json"
import type { BlogProductExampleBlock } from "@/content/blogPosts"
import styles from "./blogProductExample.module.css"

export default function BlogProductExample({ asset, paragraphs, alt, caption }: BlogProductExampleBlock) {
  const image = media.assets[asset]
  return <div className={styles.example}>
    <div className={styles.copy}>{paragraphs.map(text => <p key={text}>{text}</p>)}</div>
    <figure className={styles.figure}>
      <Image src={image.src} width={image.width} height={image.height} alt={alt} unoptimized loading="lazy"
        sizes="(min-width: 768px) 248px, (max-width: 339px) calc(100vw - 48px), 292px" className={styles.image} />
      <figcaption>{caption} <a href={image.original.file.replace(/^public/, "")}>Åpne hele skjermbildet<span className={styles.srOnly}>: {alt}</span></a></figcaption>
    </figure>
  </div>
}
