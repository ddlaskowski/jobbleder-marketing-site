import Link from "next/link"
import InvoiceFigure from "@/components/editorial/InvoiceFigure"
import { SiteHeader, SiteFooter } from "@/components/site/SiteChrome"
import { ApplicationCTA, REGISTRATION_GUIDANCE, SectionContainer } from "@/components/site/Primitives"
import { seoPages } from "@/content/seoPages"
import site from "@/components/site/site.module.css"
import styles from "./invoiceExample.module.css"

export default function InvoiceExamplePage() {
  const page = seoPages.find(p => p.slug === "faktura-eksempel")!
  const [, reading, creation] = page.sections!
  const fields = reading.checklists![0].items.map(item => {
    const separator = item.indexOf(":")
    const text = item.slice(separator + 1).trim()
    return { label: item.slice(0, separator), text: text[0].toUpperCase() + text.slice(1) }
  })
  const related = seoPages.filter(p => ["lage-faktura", "faktura-krav", "fakturaprogram-gratis"].includes(p.slug))
  const otherTopics = [...new Set(seoPages.filter(p => p.topic !== page.topic).map(p => p.topic))]
  const otherResources = otherTopics.flatMap(topic => seoPages.filter(p => p.topic === topic).slice(0, 2))
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: page.faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  }

  return <div className={`${site.surface} ${styles.page}`}>
    <a className={`${site.skip} ${styles.skip}`} href="#fakturaeksempel-innhold">Hopp til innhold</a>
    <SiteHeader />
    <main id="fakturaeksempel-innhold" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <section className={styles.hero} aria-labelledby="invoice-example-title"><SectionContainer>
        <nav className={styles.breadcrumb} aria-label="Brødsmuler"><Link href="/">Hjem</Link><span aria-hidden="true">/</span><Link href="/fakturaprogram-gratis">Faktura</Link><span aria-hidden="true">/</span><span aria-current="page">{page.h1}</span></nav>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>ET UTFYLT EKSEMPEL · FAKTURA 110</p>
            <h1 id="invoice-example-title">{page.h1}</h1>
            <p className={styles.lead}>Se Faktura 110 fra Jobbleder: et utfylt eksempel med parkettarbeid, MVA og betalingsinformasjon.</p>
            <div className={styles.actions}><ApplicationCTA>Opprett faktura gratis</ApplicationCTA></div>
            <p className={styles.registration}>{REGISTRATION_GUIDANCE}</p>
          </div>
          <div className={styles.document}><InvoiceFigure hero /></div>
          <div className={styles.snapshot}>
            <p className={styles.eyebrow}>OPPDRAGET I EKSEMPELET</p>
            <dl><div><dt>Kunde</dt><dd>Eksempel Eiendom</dd></div><div><dt>Arbeid</dt><dd>Legging av parkett</dd></div><div className={styles.total}><dt>Til betaling</dt><dd>15 000 kr</dd></div></dl>
            <p className={styles.small}>Beløpet inkluderer 25 prosent MVA i dette eksemplet. Kontroller MVA-behandlingen som gjelder for ditt eget salg.</p>
            <a className={styles.textLink} href="#les-fakturaen">Slik leser du fakturaen <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </SectionContainer></section>

      <section id="les-fakturaen" className={styles.section} aria-labelledby="reading-title"><SectionContainer>
        <div className={styles.sectionIntro}><p className={styles.eyebrow}>LES DOKUMENTET</p><h2 id="reading-title">Slik leser du Faktura 110</h2><p>{reading.paragraphs[0]}</p></div>
        <dl className={styles.fields}>{fields.map(field => <div key={field.label}><dt>{field.label}</dt><dd>{field.text}</dd></div>)}</dl>
        <div className={styles.contextLinks}>{reading.links!.map(link => <Link className={styles.textLink} key={link.href} href={link.href}>{link.label}<span aria-hidden="true"> ↗</span></Link>)}</div>
      </SectionContainer></section>

      <section className={`${styles.section} ${styles.alternate}`} aria-labelledby="create-title"><SectionContainer><div className={styles.practical}>
        <div><p className={styles.eyebrow}>FRA EKSEMPEL TIL EGEN FAKTURA</p><h2 id="create-title">Bruk egne opplysninger.<br />Kontroller før du deler.</h2><p>{creation.paragraphs[0]}</p><Link className={styles.textLink} href="/lage-faktura">Se hvordan du lager din egen faktura <span aria-hidden="true">↗</span></Link></div>
        <div className={styles.creation}><h3>Opprett faktura i nettleseren</h3><p>{creation.paragraphs[1]}</p>{creation.links!.map(link => <Link className={styles.textLink} key={link.href} href={link.href}>{link.label}<span aria-hidden="true"> ↗</span></Link>)}<Link className={styles.textLink} href="/fakturaprogram-gratis">Se fakturaprogrammet og Free/Premium <span aria-hidden="true">↗</span></Link></div>
      </div></SectionContainer></section>

      <section className={styles.section} aria-labelledby="faq-title"><SectionContainer><div className={styles.faq}>
        <p className={styles.eyebrow}>SPØRSMÅL OM EKSEMPLET</p><h2 id="faq-title">Ofte stilte spørsmål</h2>
        {page.faqs.map(({ q, a }) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      </div></SectionContainer></section>

      <section className={`${styles.related} ${styles.alternate}`} aria-labelledby="related-title"><SectionContainer>
        <h2 id="related-title">Finn forklaringen du trenger.</h2>
        <nav aria-label="Guider om faktura"><ul className={styles.resources}>{related.map(p => <li key={p.slug}><Link href={`/${p.slug}`}>{p.h1}<span aria-hidden="true"> ↗</span></Link><p>{p.slug === "lage-faktura" ? "Fra kundeopplysninger til kontrollert PDF." : p.slug === "faktura-krav" ? "Krav, betingede opplysninger og praktiske tillegg." : "Se hvordan fakturering fungerer i Jobbleder."}</p></li>)}</ul></nav>
        <details className={styles.otherResources}><summary>Guider om timeliste, tilbud og kontrakt</summary><nav aria-label="Andre dokumentguider"><ul>{otherResources.map(p => <li key={p.slug}><Link href={`/${p.slug}`}>{p.h1}</Link></li>)}</ul></nav></details>
      </SectionContainer></section>
    </main><SiteFooter />
  </div>
}
