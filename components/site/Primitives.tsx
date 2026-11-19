import Link from "next/link"
import Image from "next/image"
import type { CSSProperties, ReactNode } from "react"
import styles from "./site.module.css"

export const APPLICATION_URL = "https://app.jobbleder.no/"
export const REGISTRATION_GUIDANCE = "Appen åpnes med innlogging. Velg «Create account» for å registrere deg."

export function SectionContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`${styles.container} ${className}`}>{children}</div>
}

export function ApplicationCTA({ children = "Start gratis" }: { children?: ReactNode }) {
  return <a href={APPLICATION_URL} className={styles.button}>{children}<span aria-hidden="true">↗</span></a>
}

export function ResourceLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className={styles.textLink}>{children}<span aria-hidden="true">↗</span></Link>
}

export type SiteImage = { src: string; width: number; height: number; alt: string; srcSet?: string }

export function ProductMedia({ image, mobileImage, tabletImage, compact = false, originalSrc, mobileOriginalSrc, caption, document = false, priority = false, sizes = "(max-width: 1199px) calc(100vw - 48px), 1152px" }: {
  image: SiteImage; mobileImage?: SiteImage; tabletImage?: SiteImage; compact?: boolean; originalSrc?: string; mobileOriginalSrc?: string; caption: string; document?: boolean; priority?: boolean; sizes?: string
}) {
  const fullImage = originalSrc ?? image.src
  const separateOriginals = mobileImage && mobileOriginalSrc && mobileOriginalSrc !== fullImage
  // One description must remain accurate for both art-directed variants.
  const alt = mobileImage ? mobileImage.alt : image.alt
  const mediaStyle = { "--image-width": `${image.width}px`, "--mobile-image-width": `${mobileImage?.width ?? image.width}px` } as CSSProperties
  return (
    <figure className={`${styles.media} ${document ? styles.document : ""} ${compact ? styles.compactMedia : ""}`} style={mediaStyle}>
      <div className={styles.imageFrame}>
        {mobileImage ? <picture>
          <source media={compact ? "(max-width: 1023px)" : "(max-width: 639px)"} srcSet={mobileImage.src} width={mobileImage.width} height={mobileImage.height} />
          {tabletImage && <source media="(max-width: 1199px)" srcSet={tabletImage.src} width={tabletImage.width} height={tabletImage.height} />}
          {image.srcSet && <source srcSet={image.srcSet} sizes={sizes} width={image.width} height={image.height} />}
          <Image src={image.src} width={image.width} height={image.height} alt={alt} className={styles.image} unoptimized loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : undefined} />
        </picture> : <Image src={image.src} width={image.width} height={image.height} alt={alt} className={styles.image} sizes={document ? "(max-width: 367px) calc(100vw - 48px), 320px" : sizes} preload={priority} loading={priority ? undefined : "lazy"} unoptimized={image.src.endsWith(".webp")} />}
      </div>
      <figcaption className={styles.caption}>{caption} {separateOriginals ? <>
        <a className={compact ? styles.compactDesktopOriginal : styles.desktopOriginal} href={fullImage}>Åpne hele bildet<span className={styles.srOnly}>: {alt}</span></a>
        <a className={compact ? styles.compactMobileOriginal : styles.mobileOriginal} href={mobileOriginalSrc}>Åpne hele bildet<span className={styles.srOnly}>: {alt}</span></a>
      </> : <a href={fullImage}>Åpne hele bildet<span className={styles.srOnly}>: {alt}</span></a>}</figcaption>
    </figure>
  )
}

export function FeatureIntroduction({ id, number, name, title, children, links, media, detail }: {
  id: string; number: string; name: string; title: string; children: ReactNode; links: ReactNode;
  media?: ReactNode; detail?: ReactNode
}) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <SectionContainer>
        <div className={styles.feature}>
          <div className={styles.featureCopy}>
            <p className={styles.eyebrow}>{number} / {name}</p>
            <h2 id={`${id}-title`} className={styles.title}>{title}</h2>
            {children}
            <div className={styles.featureLinks}>{links}</div>
            {media && detail && <div className={styles.featureDetail}>{detail}</div>}
          </div>
          {media ?? (detail && <div className={styles.featureAside}>{detail}</div>)}
        </div>
      </SectionContainer>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section className={`${styles.section} ${styles.final}`} aria-labelledby="start-title">
      <SectionContainer>
        <p className={styles.eyebrow}>FRA ARBEID TIL DOKUMENT</p>
        <h2 id="start-title" className={styles.title}>Få dokumentarbeidet på plass.</h2>
        <p>Opprett en konto og kom i gang med faktura, timeliste, tilbud og kontrakt i Jobbleder.</p>
        <ApplicationCTA>Start gratis med Jobbleder</ApplicationCTA>
        <p className={styles.registration}>{REGISTRATION_GUIDANCE}</p>
      </SectionContainer>
    </section>
  )
}
