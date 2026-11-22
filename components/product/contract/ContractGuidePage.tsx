import Link from "next/link"
import { seoPages } from "@/content/seoPages"
import { SiteHeader, SiteFooter } from "@/components/site/SiteChrome"
import { ApplicationCTA, REGISTRATION_GUIDANCE, SectionContainer } from "@/components/site/Primitives"
import ContractEditorialMedia from "./ContractEditorialMedia"
import site from "@/components/site/site.module.css"
import guide from "../invoice/invoiceGuide.module.css"
import styles from "./contractGuide.module.css"

const presentations = {
  "kontrakt-eksempel": { eyebrow: "KONTRAKT · PRAKTISK EKSEMPEL", panel: "Dette lærer du av eksemplet", next: "Les gjennom eksemplet" },
  "kontrakt-handverker": { eyebrow: "KONTRAKT · FOR HÅNDVERKERE", panel: "Avklar oppdraget før du skriver", next: "Se de praktiske avklaringene" },
  "hva-skal-en-kontrakt-inneholde": { eyebrow: "KONTRAKT · PRAKTISK SJEKKLISTE", panel: "I denne guiden", next: "Gå til sjekklisten" },
}

export default function ContractGuidePage({ slug }: { slug: keyof typeof presentations }) {
  const page = seoPages.find(p => p.slug === slug)!
  const sections = page.sections ?? []
  const presentation = presentations[slug]
  const isExample = slug === "kontrakt-eksempel"
  const isChecklist = slug === "hva-skal-en-kontrakt-inneholde"
  const sectionId = (index: number) => `${slug}-tema-${index + 1}`
  const contractPages = seoPages.filter(p => p.topic === "kontrakt")
  // Preserve the legacy related-pages destinations, with the contract cluster shown only once.
  const otherTopics = [...new Set(seoPages.filter(p => p.topic !== page.topic).map(p => p.topic))]
  const otherPages = otherTopics.flatMap(topic => seoPages.filter(p => p.topic === topic).slice(0, 2))
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: page.faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  }

  return <div className={`${site.surface} ${guide.page} ${styles.page}`} data-contract-guide={slug}>
    <a href="#kontraktguide-innhold" className={`${site.skip} ${guide.skip}`}>Hopp til innhold</a>
    <SiteHeader />
    <main id="kontraktguide-innhold" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <section className={guide.hero} aria-labelledby="contract-guide-title"><SectionContainer>
        <nav className={guide.breadcrumb} aria-label="Brødsmuler"><Link href="/">Hjem</Link><span aria-hidden="true">/</span><Link href="/kontrakt-mal">Kontrakt</Link><span aria-hidden="true">/</span><span aria-current="page">{page.h1}</span></nav>
        <div className={guide.heroGrid}>
          <div><p className={guide.eyebrow}>{presentation.eyebrow}</p><h1 id="contract-guide-title">{page.h1}</h1><p className={`${guide.lead} ${styles.lead}`}>{page.intro}</p>
            <div className={guide.actions}><ApplicationCTA>{page.ctaLabel ?? "Start gratis"}</ApplicationCTA><a href={isChecklist ? "#kort-sjekkliste" : `#${sectionId(0)}`} className={guide.textLink}>{presentation.next}<span aria-hidden="true">↓</span></a></div>
            <p className={guide.registration}>{REGISTRATION_GUIDANCE}</p>
          </div>
          <aside className={guide.prepare} aria-labelledby="contract-panel-title"><h2 id="contract-panel-title">{presentation.panel}</h2>
            {isChecklist ? <nav aria-label="Temaer i kontraktsjekklisten"><ol className={styles.topicList}>{sections.map((section, index) => <li key={section.heading}><a href={`#${sectionId(index)}`}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{section.heading}</a></li>)}</ol></nav>
              : isExample ? <ul className={styles.learningGoals}>{page.bullets.map((bullet, index) => <li key={bullet}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{bullet}</li>)}</ul>
                : <dl>{page.bullets.map((bullet, index) => <div key={bullet}><dt>{["Omfang", "Materialer", "Pris og plan", "Kundetype"][index]}</dt><dd>{bullet}</dd></div>)}</dl>}
          </aside>
        </div>
        {!isChecklist && <nav className={guide.contents} aria-label="På denne siden"><a href={`#${sectionId(0)}`}>{isExample ? "Dokumentets oppbygning" : "Arbeid og avgrensninger"}</a><a href={`#${sectionId(isExample ? 3 : 2)}`}>Pris og betaling</a><a href="#contract-faq">Spørsmål og svar</a></nav>}
      </SectionContainer></section>

      {isChecklist && <section id="kort-sjekkliste" className={`${guide.section} ${styles.quickChecklist}`} aria-labelledby="quick-checklist-title"><SectionContainer><h2 id="quick-checklist-title">Fire avklaringer å begynne med.</h2><ul>{page.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></SectionContainer></section>}

      {sections.map((section, index) => <section id={sectionId(index)} key={section.heading} className={`${guide.section} ${!isExample && index % 2 ? guide.alternate : ""}`} aria-labelledby={`${sectionId(index)}-title`}>
        <SectionContainer><div className={isExample ? styles.anatomy : styles.reading}>
          <h2 id={`${sectionId(index)}-title`}>{section.heading}</h2>
          <div className={styles.sectionCopy}>
            {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            <ContractEditorialMedia slug={slug} heading={section.heading} />
            {section.checklists?.map(list => <div key={list.heading} className={styles.checklist}><h3>{list.heading}</h3><ul>{list.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}
            {section.links && <ul className={styles.contextLinks}>{section.links.map(link => <li key={link.href}><a href={link.href} className={guide.textLink}>{link.label}</a></li>)}</ul>}
          </div>
        </div></SectionContainer>
      </section>)}

      <section id="contract-faq" className={`${guide.section} ${guide.alternate}`} aria-labelledby="contract-faq-title"><SectionContainer><div className={guide.faq}><p className={guide.eyebrow}>SPØRSMÅL OG SVAR</p><h2 id="contract-faq-title">Ofte stilte spørsmål</h2>{page.faqs.map(({ q, a }) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></SectionContainer></section>

      <section className={guide.related} aria-labelledby="related-contract-title"><SectionContainer><h2 id="related-contract-title">Relaterte sider om kontrakt</h2>
        <nav aria-label="Kontraktsider"><ul className={styles.contractResources}>{contractPages.map(p => <li key={p.slug}><Link href={`/${p.slug}`} aria-current={p.slug === slug ? "page" : undefined} className={guide.textLink}>{p.h1}{p.slug === slug && <span className={styles.currentLabel}>Du er her</span>}</Link><p>{p.description}</p></li>)}</ul></nav>
        <details className={guide.otherResources}><summary>Guider om faktura, timeliste og tilbud</summary><nav aria-label="Andre dokumentguider"><ul>{otherPages.map(p => <li key={p.slug}><Link href={`/${p.slug}`}>{p.h1}</Link><p className={styles.relatedDescription}>{p.description}</p></li>)}</ul></nav></details>
      </SectionContainer></section>
    </main>
    <SiteFooter />
  </div>
}
