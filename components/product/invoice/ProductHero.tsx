import Link from "next/link"
import Container from "@/components/Container"
import ProductMediaFrame from "../ProductMediaFrame"
import { invoiceProduct as product } from "@/content/invoiceProduct"
import styles from "./invoiceProduct.module.css"
import { heroIsOverview, invoiceImage } from "@/lib/invoiceProductMedia"

export default function ProductHero() {
  const heroImage = invoiceImage("hero", heroIsOverview ? "Jobbleder: oversikt og hurtighandling for ny faktura" : "Fakturaeditoren i Jobbleder med kunde og utstedelsesdato", "(max-width: 1279px) calc(100vw - 48px), 1232px")
  return (
    <section className={styles.hero} aria-labelledby="produkttittel">
      <Container>
        <nav className={styles.breadcrumb} aria-label="Brødsmuler">
          <Link href="/">Hjem</Link><span aria-hidden="true">/</span>
          <Link href="/fakturaprogram-gratis" aria-current="page">Fakturaprogram gratis</Link>
        </nav>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{product.eyebrow}</p>
            <h1 id="produkttittel" className={styles.heroTitle}>
              <span>{product.headline[0]}</span><span className={styles.accentText}>{product.headline[1]}</span>
            </h1>
            <p className={styles.heroLead}>{product.intro}</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href={product.appUrl}>Start gratis <span aria-hidden="true">↗</span></a>
              <a className={styles.textLink} href="#slik-fungerer-det">Se hvordan det fungerer <span aria-hidden="true">↓</span></a>
            </div>
            <p className={styles.disclosure}>{product.watermarkNote}</p>
            <p className={styles.registrationHelp}>{product.registrationHelp}</p>
          </div>
          <div className={styles.heroMedia}>
            <div className={styles.heroApp}>
              <ProductMediaFrame label="Fakturavisning i Jobbleder" image={heroImage} mobileImage={invoiceImage("heroMobile", heroIsOverview ? "Hurtighandlingen Ny faktura i Jobbleder" : "Kunde og utstedelsesdato i fakturaeditoren i Jobbleder", "100vw")} priority />
              {heroImage && <a href={heroImage.src} className={styles.mediaFullLink}>Åpne produktvisningen i full størrelse <span aria-hidden="true">↗</span></a>}
              {heroIsOverview && <p className={styles.mediaCaption}>Oversikt i Jobbleder. På mobil vises et utsnitt av hurtighandlingen «Ny faktura».</p>}
            </div>
            <div className={styles.heroPdf}><ProductMediaFrame label="Premium PDF med firmalogo" kind="document" image={invoiceImage("premiumLogo", "Jobbleder-faktura med egen firmalogo", "(max-width: 639px) 58vw, 260px")} /></div>
          </div>
        </div>
      </Container>
    </section>
  )
}
