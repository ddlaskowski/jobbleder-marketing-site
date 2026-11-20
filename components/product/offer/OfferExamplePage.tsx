import Link from "next/link"
import { SiteHeader, SiteFooter } from "@/components/site/SiteChrome"
import { ApplicationCTA, REGISTRATION_GUIDANCE, SectionContainer } from "@/components/site/Primitives"
import OfferFigure from "@/components/editorial/OfferFigure"
import { seoPages, type SEOSection } from "@/content/seoPages"
import site from "@/components/site/site.module.css"
import styles from "./offerExample.module.css"

function Copy({ section }: { section: SEOSection }) {
  return <>{section.paragraphs.map(p => <p key={p}>{p}</p>)}</>
}

export default function OfferExamplePage() {
  const page = seoPages.find(p => p.slug === "tilbud-eksempel")!
  const [document, customer, work, quantity, price, dates, clarify, acceptance] = page.sections!
  const cluster = seoPages.filter(p => p.topic === page.topic)
  const otherTopics = [...new Set(seoPages.filter(p => p.topic !== page.topic).map(p => p.topic))]
  const legacyRelated = [...cluster.filter(p => p.slug !== page.slug).slice(0, 3), ...otherTopics.flatMap(topic => seoPages.filter(p => p.topic === topic).slice(0, 2))].slice(0, 9)
  const otherResources = legacyRelated.filter(p => p.topic !== page.topic)
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }
  const units = [
    { title: "Kunde og prosjekt", sections: [customer] },
    { title: "Arbeid og antall", sections: [work, quantity] },
    { title: "Pris og MVA", sections: [price] },
    { title: "Datoer og gyldighet", sections: [dates] },
  ]

  return <div className={`${site.surface} ${styles.page}`}>
    <a className={`${site.skip} ${styles.skip}`} href="#tilbudseksempel-innhold">Hopp til innhold</a>
    <SiteHeader />
    <main id="tilbudseksempel-innhold" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className={styles.hero} aria-labelledby="offer-example-title"><SectionContainer>
        <nav className={styles.breadcrumb} aria-label="Brødsmuler"><Link href="/">Hjem</Link><span aria-hidden="true">/</span><Link href="/tilbud-mal">Tilbud</Link><span aria-hidden="true">/</span><span aria-current="page">{page.h1}</span></nav>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>ET AUTENTISK DOKUMENT · TILBUD 29</p>
          <h1 id="offer-example-title">{page.h1}</h1>
          <p className={styles.lead}>Se et utfylt tilbud fra Jobbleder. Her finner du hele dokumentet, forklaring av feltene og praktiske avklaringer til ditt eget oppdrag.</p>
          <div className={styles.heroActions}><ApplicationCTA>Opprett tilbud gratis</ApplicationCTA><a className={styles.textLink} href="#tilbud-29">Se hele dokumentet <span aria-hidden="true">↓</span></a></div>
          <p className={styles.registration}>{REGISTRATION_GUIDANCE}</p>
        </div>
        <ul className={styles.heroNotes}>{page.bullets.map(b => <li key={b}>{b}</li>)}</ul>
      </SectionContainer></section>

      <section id="tilbud-29" className={styles.section} aria-labelledby="document-title"><SectionContainer><div className={styles.documentGrid}>
        <div className={styles.documentCopy}>
          <p className={styles.eyebrow}>01 / DOKUMENTET KUNDEN FÅR</p>
          <h2 id="document-title">Tilbud 29.<br />Hele dokumentet.</h2>
          <div className={styles.copy}><Copy section={document} /></div>
          <dl className={styles.facts}>
            <div><dt>Kunde</dt><dd>Eksempel Eiendom</dd></div>
            <div><dt>Arbeid</dt><dd>Legging av parkett</dd></div>
            <div><dt>Netto</dt><dd>12 000 kr</dd></div>
            <div><dt>MVA · eksempel 25 %</dt><dd>3 000 kr</dd></div>
            <div className={styles.total}><dt>Totalt</dt><dd>15 000 kr</dd></div>
          </dl>
          <Link className={styles.textLink} href="/lage-tilbud">Slik forbereder du ditt eget tilbud <span aria-hidden="true">↗</span></Link>
        </div>
        <div className={styles.document}><OfferFigure variant="document" /></div>
      </div></SectionContainer></section>

      <section className={`${styles.section} ${styles.alternate}`} aria-labelledby="understand-title"><SectionContainer>
        <div className={styles.sectionHead}><p className={styles.eyebrow}>02 / LES DOKUMENTET</p><h2 id="understand-title">Fra kundeopplysninger<br />til ferdig sum.</h2></div>
        <div className={styles.units}>{units.map((unit, i) => <section key={unit.title} aria-labelledby={`offer-unit-${i}`}>
          <p className={styles.unitNumber} aria-hidden="true">0{i + 1}</p><h3 id={`offer-unit-${i}`}>{unit.title}</h3>
          <div className={styles.copy}>{unit.sections.map(s => <Copy key={s.heading} section={s} />)}</div>
        </section>)}</div>
      </SectionContainer></section>

      <section className={styles.section} aria-labelledby="clarify-title"><SectionContainer><div className={styles.clarifyGrid}>
        <div><p className={styles.eyebrow}>03 / DITT EGET OPPDRAG</p><h2 id="clarify-title">Avklar mer enn<br />bare beløpet.</h2>
          <ul className={styles.questions}><li>Hvem leverer materialene?</li><li>Hva inngår, og hva er holdt utenfor?</li><li>Hvordan avklarer dere ekstraarbeid?</li></ul>
        </div>
        <div className={styles.copy}><Copy section={clarify} />{clarify.links?.map(l => <Link className={styles.textLink} key={l.href} href={l.href}>{l.label}<span aria-hidden="true"> ↗</span></Link>)}</div>
      </div></SectionContainer></section>

      <section className={`${styles.section} ${styles.alternate}`} aria-labelledby="acceptance-title"><SectionContainer>
        <div className={styles.sectionHead}><p className={styles.eyebrow}>04 / TILBUD · AKSEPT · KONTRAKT · FAKTURA</p><h2 id="acceptance-title">Når kunden har svart.</h2></div>
        <div className={styles.acceptanceGrid}>{["Avtalen mellom dere", "Dokumentet du lager videre", "Skriftlig dokumentasjon"].map((title, i) => <div key={title}><h3>{title}</h3><p>{acceptance.paragraphs[i]}</p></div>)}</div>
        <ul className={styles.contextLinks}>{acceptance.links?.map(l => <li key={l.href}><a className={styles.textLink} href={l.href}>{l.label}<span aria-hidden="true"> ↗</span></a></li>)}</ul>
      </SectionContainer></section>

      <section className={styles.section} aria-labelledby="create-title"><SectionContainer><div className={styles.createGrid}>
        <div><p className={styles.eyebrow}>05 / FRA EKSEMPEL TIL EGET TILBUD</p><h2 id="create-title">Sett opp tilbudet<br />til ditt neste oppdrag.</h2><p className={styles.lead}>Opprett tilbudet i nettleseren, kontroller innholdet og generer PDF-en du deler med kunden selv.</p><Link className={styles.textLink} href="/tilbud-mal">Se hvordan Jobbleder støtter tilbudsarbeidet <span aria-hidden="true">↗</span></Link></div>
        <div className={styles.plan}><h3>Dokumentfunksjonene er med i Free.</h3><p>Opprett tilbud, generer PDF og bruk dokumentet videre til kontrakt eller faktura i Free. PDF-ene har Jobbleder-merking. Premium fjerner merkingen og lar deg bruke egen firmalogo.</p><ApplicationCTA>Opprett tilbud gratis</ApplicationCTA><p className={styles.registration}>{REGISTRATION_GUIDANCE}</p></div>
      </div></SectionContainer></section>

      <section className={`${styles.section} ${styles.alternate}`} aria-labelledby="faq-title"><SectionContainer><div className={styles.faq}>
        <p className={styles.eyebrow}>06 / SPØRSMÅL OG SVAR</p><h2 id="faq-title">Ofte stilte spørsmål</h2>
        {page.faqs.map(f => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}
      </div></SectionContainer></section>

      <section className={styles.related} aria-labelledby="related-title"><SectionContainer>
        <p className={styles.eyebrow}>07 / VIDERE LESNING</p><h2 id="related-title">Finn neste steg.</h2>
        <div className={styles.resourceGrid}><nav aria-label="Mer om tilbud"><h3>Tilbudsarbeid</h3><ul>{cluster.map(p => <li key={p.slug}><Link href={`/${p.slug}`} aria-current={p.slug === page.slug ? "page" : undefined}>{p.h1}</Link></li>)}</ul></nav>
          <nav aria-label="Andre dokumentguider"><h3>Andre dokumenter</h3><ul className={styles.otherResources}>{otherResources.map(p => <li key={p.slug}><Link href={`/${p.slug}`}>{p.h1}</Link></li>)}</ul></nav>
        </div>
      </SectionContainer></section>
    </main><SiteFooter />
  </div>
}
