import Container from "@/components/Container"
import { invoiceProduct } from "@/content/invoiceProduct"
import styles from "./invoiceProduct.module.css"

export default function ProductValueStrip() {
  return (
    <section className={styles.valueStrip} aria-label="Kort om Jobbleder">
      <Container><dl className={styles.valueGrid}>
        {invoiceProduct.values.map(({ title, description }) => (
          <div key={title}><dt>{title}</dt><dd>{description}</dd></div>
        ))}
      </dl></Container>
    </section>
  )
}
