import Link from "next/link"
import Container from "@/components/Container"
import ProductMediaFrame from "../ProductMediaFrame"
import { invoiceProduct } from "@/content/invoiceProduct"
import styles from "./invoiceProduct.module.css"
import { invoiceImage } from "@/lib/invoiceProductMedia"

export default function InvoiceShowcase() {
  return (
    <section className={`${styles.section} ${styles.alternate}`} aria-labelledby="pdf-tittel">
      <Container><div className={styles.showcaseGrid}>
        <div className={styles.showcaseDocument}>
          <ProductMediaFrame kind="document" label="Din faktura. Som PDF." caption="Premium: faktura med egen firmalogo." image={invoiceImage("premiumLogo", "Faktura fra Jobbleder med egen firmalogo", "(max-width: 767px) calc(100vw - 48px), 420px")} />
        </div>
        <div className={styles.showcaseCopy}>
          <p className={styles.eyebrow}>ET DOKUMENT Å JOBBE VIDERE MED</p>
          <h2 id="pdf-tittel">Fakturaer som ser profesjonelle ut</h2>
          <p>Samle opplysningene i en faktura og last ned dokumentet som PDF. Du fyller inn detaljene, og kan kontrollere innholdet før du oppretter fakturaen.</p>
          <ul className={styles.fieldList}>{invoiceProduct.invoiceFields.map((field) => <li key={field}>{field}</li>)}</ul>
          <p className={styles.note}>{invoiceProduct.watermarkNote} Med Premium velger du egen firmalogo eller PDF uten grafisk profil.</p>
          <div className={styles.inlineLinks}>
            <Link href="/faktura-eksempel">Om fakturaeksempler <span aria-hidden="true">↗</span></Link>
            <Link href="/faktura-krav">Les om fakturakrav <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </div></Container>
    </section>
  )
}
