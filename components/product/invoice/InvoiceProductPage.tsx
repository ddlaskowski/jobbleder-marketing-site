import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { invoiceProduct } from "@/content/invoiceProduct"
import ProductHero from "./ProductHero"
import ProductValueStrip from "./ProductValueStrip"
import InvoiceProcess from "./InvoiceProcess"
import InvoiceShowcase from "./InvoiceShowcase"
import ConnectedWorkflows from "./ConnectedWorkflows"
import PlanComparison from "./PlanComparison"
import ProductFAQ from "./ProductFAQ"
import ProductFinalCTA from "./ProductFinalCTA"
import styles from "./invoiceProduct.module.css"

export default function InvoiceProductPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: invoiceProduct.faqs.map(({ q, a }) => ({
      "@type": "Question", name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  }

  return (
    <div className={styles.page}>
      <a href="#produktinnhold" className={styles.skipLink}>Hopp til innhold</a>
      <Navbar />
      <main id="produktinnhold" tabIndex={-1}>
        <ProductHero />
        <ProductValueStrip />
        <InvoiceProcess />
        <InvoiceShowcase />
        <ConnectedWorkflows />
        <PlanComparison />
        <ProductFAQ />
        <ProductFinalCTA />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
    </div>
  )
}
