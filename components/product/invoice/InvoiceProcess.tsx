import Container from "@/components/Container"
import ProductMediaFrame from "../ProductMediaFrame"
import { invoiceProduct } from "@/content/invoiceProduct"
import styles from "./invoiceProduct.module.css"
import { invoiceImage } from "@/lib/invoiceProductMedia"

export default function InvoiceProcess() {
  return (
    <section id="slik-fungerer-det" className={styles.section} aria-labelledby="prosess-tittel">
      <Container>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>FRA OPPDRAG TIL PDF</p>
          <h2 id="prosess-tittel">Slik lager du faktura med Jobbleder</h2>
          <p>Tre steg. En oversiktlig vei fra opplysninger til ferdig dokument.</p>
        </div>
        <ol className={styles.processGrid}>
          {invoiceProduct.steps.map((step, i) => (
            <li key={step.title}>
              <span className={styles.stepNumber} aria-hidden="true">0{i + 1}</span>
              <h3>{step.title}</h3><p>{step.description}</p>
              <ProductMediaFrame label={step.media} image={invoiceImage((["processCustomer", "processLines", "processTotals"] as const)[i], ["Valg av kunde i fakturaeditoren", "Enhetspris og MVA-sats på fakturalinjen", "Netto, MVA og fakturatotal i Jobbleder"][i], "(max-width: 767px) calc(100vw - 48px), 350px")} />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
