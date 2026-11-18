import Link from "next/link"
import Container from "@/components/Container"
import { invoiceProduct } from "@/content/invoiceProduct"
import styles from "./invoiceProduct.module.css"

export default function ConnectedWorkflows() {
  return (
    <section className={styles.section} aria-labelledby="arbeidsflyt-tittel">
      <Container>
        <div className={styles.sectionHeader}><p className={styles.eyebrow}>SAMMENHENG I ARBEIDET</p>
          <h2 id="arbeidsflyt-tittel">Mer enn et fakturaprogram</h2>
          <p>Fra tilbud til faktura – samlet på ett sted.</p>
        </div>
        <div className={styles.workflowGrid}>
          {invoiceProduct.workflows.map((flow) => (
            <article key={flow.title} className={styles.workflow}>
              <h3 className={styles.workflowPath}>
                <span className={styles.workflowSource}>{flow.title}</span>{" "}
                <span className={styles.workflowConnector} aria-hidden="true"><span>→</span></span>{" "}
                <span className={styles.workflowDestination}>Faktura</span>
              </h3>
              <p>{flow.description}</p>
              <Link className={styles.textLink} href={flow.href}>Les om {flow.title.toLowerCase()} <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
