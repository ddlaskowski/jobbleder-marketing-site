import Link from "next/link"
import Container from "@/components/Container"
import { invoiceProduct } from "@/content/invoiceProduct"
import { seoPages } from "@/content/seoPages"
import styles from "./invoiceProduct.module.css"

export default function ProductFAQ() {
  // Preserve the shared renderer's related destinations and ordering.
  const slug = "fakturaprogram-gratis"
  const sameTopic = seoPages.filter((p) => p.slug !== slug && p.topic === "faktura").slice(0, 3)
  const otherTopics = [...new Set(seoPages.filter((p) => p.topic !== "faktura").map((p) => p.topic))]
  const related = [...sameTopic, ...otherTopics.flatMap((topic) => seoPages.filter((p) => p.topic === topic).slice(0, 2))].slice(0, 9)

  return (
    <section className={styles.section} aria-labelledby="faq-tittel">
      <Container>
        <div className={styles.faqLayout}>
          <div className={styles.faqIntro}><p className={styles.eyebrow}>GODT Å VITE</p><h2 id="faq-tittel">Spørsmål før du starter?</h2><p>Her er det viktigste om gratis fakturering, PDF og Premium.</p><Link className={styles.textLink} href="/instruksjoner">Se alle instruksjoner <span aria-hidden="true">↗</span></Link></div>
          <div className={styles.faqList}>{invoiceProduct.faqs.map(({ q, a }) => (
            <details key={q}><summary>{q}<span className={styles.disclosureIcon} aria-hidden="true" /></summary><p>{a}</p></details>
          ))}</div>
        </div>
        <nav className={styles.relatedLinks} aria-label="Relaterte sider">
          <h3>Mer om faktura og dokumenter</h3>
          <ul>{related.map((page) => <li key={page.slug}><Link href={`/${page.slug}`}>{page.h1}</Link></li>)}</ul>
        </nav>
      </Container>
    </section>
  )
}
