import Container from "@/components/Container"
import ProductMediaFrame from "../ProductMediaFrame"
import { invoiceProduct } from "@/content/invoiceProduct"
import styles from "./invoiceProduct.module.css"
import { invoiceImage } from "@/lib/invoiceProductMedia"

export default function PlanComparison() {
  return (
    <section className={`${styles.section} ${styles.alternate}`} aria-labelledby="planer-tittel">
      <Container>
        <div className={styles.sectionHeader}><p className={styles.eyebrow}>SAMME FAKTURERING. DITT UTTRYKK.</p>
          <h2 id="planer-tittel">Gratis fakturering. Mer kontroll med Premium.</h2>
          <p>Ubegrenset fakturering i begge. Forskjellen ligger i hvordan PDF-en profileres.</p>
        </div>
        <div className={styles.comparison}>
          <table>
            <caption className={styles.srOnly}>Sammenligning av Free og Premium</caption>
            <thead><tr><th scope="col">Dette får du</th><th scope="col">Free <span>Gratis</span></th><th scope="col">Premium <span>Velg PDF-profil</span></th></tr></thead>
            <tbody>{invoiceProduct.comparison.map((row) => (
              <tr key={row.feature}><th scope="row">{row.feature}</th><td>{row.free}</td><td>{row.premium}</td></tr>
            ))}</tbody>
          </table>
        </div>
        <p className={styles.planNote}>Med Premium velger du enten egen firmalogo eller PDF uten grafisk profil og vannmerke. Dette er alternative utseendevalg.</p>
        <div className={styles.planMediaGrid}>
          <div className={styles.planMedia} role="group" aria-labelledby="free-pdf-label"><p id="free-pdf-label" className={styles.smallHeading}>FREE · MED JOBBLEDER-VANNMERKE</p><ProductMediaFrame label="Free PDF-eksempel" kind="document" image={invoiceImage("free", "Gratis faktura med Jobbleder-vannmerke", "(max-width: 639px) calc(100vw - 96px), 360px")} /></div>
          <div className={styles.planMedia} role="group" aria-labelledby="premium-pdf-label"><p id="premium-pdf-label" className={styles.smallHeading}>PREMIUM · DITT VALG AV PROFIL</p>
            <ProductMediaFrame label="Premium PDF med firmalogo" kind="document" image={invoiceImage("premiumLogo", "Premium-faktura med egen firmalogo", "(max-width: 639px) calc(100vw - 96px), 360px")} />
            <details className={styles.premiumAlternative}><summary>Alternativ: PDF uten grafisk profil</summary>
              <ProductMediaFrame label="Premium PDF uten grafisk profil" kind="document" image={invoiceImage("premiumClear", "Premium-faktura uten grafisk profil eller vannmerke", "(max-width: 639px) calc(100vw - 96px), 360px")} />
            </details>
          </div>
        </div>
      </Container>
    </section>
  )
}
