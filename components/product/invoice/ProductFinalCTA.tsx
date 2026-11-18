import Container from "@/components/Container"
import { invoiceProduct } from "@/content/invoiceProduct"
import styles from "./invoiceProduct.module.css"

export default function ProductFinalCTA() {
  return (
    <section className={styles.finalSection} aria-labelledby="kom-i-gang-tittel">
      <Container><div className={styles.finalInner}>
        <p className={styles.eyebrow}>FRA JOBB TIL FAKTURA</p>
        <h2 id="kom-i-gang-tittel">Klar til å lage din første faktura?</h2>
        <p>Opprett en gratis konto og kom i gang med Jobbleder.</p>
        <a href={invoiceProduct.appUrl} className={styles.primaryButton}>Start gratis med Jobbleder <span aria-hidden="true">↗</span></a>
        <p className={styles.registrationHelp}>{invoiceProduct.registrationHelp}</p>
      </div></Container>
    </section>
  )
}
