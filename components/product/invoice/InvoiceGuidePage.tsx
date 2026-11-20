import Link from "next/link"
import { SiteHeader, SiteFooter } from "@/components/site/SiteChrome"
import { ApplicationCTA, ProductMedia, REGISTRATION_GUIDANCE, SectionContainer } from "@/components/site/Primitives"
import { seoPages } from "@/content/seoPages"
import media from "@/content/invoiceProductMedia.json"
import mobileMedia from "@/content/instructionMobileMedia.json"
import site from "@/components/site/site.module.css"
import styles from "./invoiceGuide.module.css"

const workflows = [
  { name: "Tilbud → Faktura", href: "/instruksjoner#tilbud-til-faktura", text: "Bruk opplysningene i tilbudet som utgangspunkt." },
  { name: "Kontrakt → Faktura", href: "/instruksjoner#kontrakt-til-faktura", text: "Kontroller fakturagrunnlaget mot avtalen." },
  { name: "Timeliste → Faktura", href: "/instruksjoner#timeliste-til-faktura", text: "Gjennomgå timer og kilometer som egne fakturalinjer." },
]

export default function InvoiceGuidePage() {
  const page = seoPages.find(p => p.slug === "lage-faktura")!
  const editor = media.assets.editor
  const phone = mobileMedia.assets.mobileInvoiceCreate
  const line = media.assets.processLines
  const otherTopics = [...new Set(seoPages.filter(p => p.topic !== page.topic).map(p => p.topic))]
  const otherResources = otherTopics.flatMap(topic => seoPages.filter(p => p.topic === topic).slice(0, 2))
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: page.faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  }

  return <div className={`${site.surface} ${styles.page}`}>
    <a className={`${site.skip} ${styles.skip}`} href="#fakturaguide-innhold">Hopp til innhold</a>
    <SiteHeader />
    <main id="fakturaguide-innhold" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <section className={styles.hero} aria-labelledby="guide-title"><SectionContainer>
        <nav className={styles.breadcrumb} aria-label="Brødsmuler"><Link href="/">Hjem</Link><span aria-hidden="true">/</span><Link href="/fakturaprogram-gratis">Faktura</Link><span aria-hidden="true">/</span><span aria-current="page">{page.h1}</span></nav>
        <div className={styles.heroGrid}>
          <div><p className={styles.eyebrow}>PRAKTISK GUIDE · I JOBBLEDER</p><h1 id="guide-title">{page.h1}</h1><p className={styles.lead}>Velg kunde, legg inn arbeidet og kontroller fakturaen. Her ser du hvordan du lager en PDF du sender selv.</p>
            <div className={styles.actions}><ApplicationCTA>Opprett faktura gratis</ApplicationCTA><a className={styles.textLink} href="#opprett-faktura">Se trinnene <span aria-hidden="true">↓</span></a></div>
            <p className={styles.registration}>{REGISTRATION_GUIDANCE}</p>
          </div>
          <aside className={styles.prepare} aria-labelledby="prepare-title"><h2 id="prepare-title">Før du begynner</h2>
            <dl><div><dt>Kunde</dt><dd>Ha kundeopplysningene klare. Du må velge en kunde i fakturaskjemaet.</dd></div><div><dt>Arbeid og pris</dt><dd>Beskrivelse, antall, enhetspris og MVA-behandlingen som gjelder for salget.</dd></div><div><dt>Firma og betaling</dt><dd>Kontroller firmadata og kontonummer i Innstillinger før du lager dokumentet.</dd></div></dl>
            <Link className={styles.textLink} href="/instruksjoner#firma-og-fakturadetaljer">Se hvor du legger inn firmadata <span aria-hidden="true">↗</span></Link>
          </aside>
        </div>
        <nav aria-label="På denne siden" className={styles.contents}><a href="#opprett-faktura">01 · Fyll ut skjemaet</a><a href="#kontroller-faktura">02 · Kontroller grunnlaget</a><a href="#generer-og-del">03 · Lag PDF og del</a></nav>
      </SectionContainer></section>

      <section id="opprett-faktura" className={styles.section} aria-labelledby="create-title"><SectionContainer>
        <div className={styles.sectionIntro}><p className={styles.eyebrow}>01 / FYLL UT SKJEMAET</p><h2 id="create-title">Fra kunde til fakturalinje.</h2><p>Begynn i Opprett. Eksemplene nedenfor viser det faktiske skjemaet i Jobbleder, ikke et ferdig PDF-dokument.</p></div>
        <ol className={styles.steps}>
          <li><span className={styles.number} aria-hidden="true">1</span><div><h3>Velg Faktura i Opprett</h3><p>Åpne Opprett i appen og velg Faktura blant dokumenttypene. Fakturanummeret vises i skjemaet; eksemplet på skrivebord viser nummer 110.</p></div></li>
          <li><span className={styles.number} aria-hidden="true">2</span><div><h3>Velg kunde og kontroller datoene</h3><p>Velg kunden fakturaen gjelder. Prosjekt er valgfritt. Kontroller Utstedt og Forfallsdato, også når de er forhåndsutfylt fra dokumentstandardene, og juster dem ved behov.</p>
            <div className={styles.editor}><ProductMedia compact image={{ ...editor, alt: "Fakturaskjema i Jobbleder med kunde, prosjekt, datoer og parkettarbeid" }} mobileImage={{ ...phone, alt: "Fakturaskjema i Jobbleder med kunde, prosjekt, datoer og parkettarbeid" }} originalSrc={editor.original.file.replace(/^public/, "")} mobileOriginalSrc={phone.original.file.replace(/^public/, "")} sizes="(max-width: 1023px) 332px, (max-width: 1199px) calc(100vw - 112px), 1088px" caption="Skrivebord: Faktura 110 med linje og Oppsummering. Mobil: et eget eksempel med Faktura 113; nederste del av linjen, MVA og Oppsummering er utenfor mobilbildet. Begge viser Opprett-skjemaet i nettleseren." /></div>
          </div></li>
          <li><span className={styles.number} aria-hidden="true">3</span><div><h3>Beskriv arbeidet og legg inn prisene</h3><p>Fyll inn Beskrivelse, Enhetspris (netto), Antall og MVA-sats på hver linje. Bruk Legg til rad hvis fakturaen trenger flere linjer. I Jobbleder må minst én linje ha beskrivelse, antall og pris før du kan lagre eller generere.</p><p>I skrivebordseksemplet er arbeidet Legging av parkett, med antall 1 og enhetspris 12 000 kroner. Antall 1 er enheten i dette priseksemplet, ikke en opplysning om én arbeidstime.</p></div></li>
        </ol>
      </SectionContainer></section>

      <section id="kontroller-faktura" className={`${styles.section} ${styles.alternate}`} aria-labelledby="review-title"><SectionContainer><div className={styles.review}>
        <div><p className={styles.eyebrow}>02 / KONTROLLER GRUNNLAGET</p><h2 id="review-title">Les gjennom før du genererer.</h2>
          <ul className={styles.checklist}><li>Stemmer kunden og arbeidsbeskrivelsen?</li><li>Er antall, nettopriser og MVA riktig for salget?</li><li>Stemmer Utstedt, Forfallsdato og betalingsinformasjonen?</li><li>Henger netto, MVA og total i Oppsummering sammen med linjene?</li></ul>
          <p className={styles.small}>Skjemaets kontroll av kunde og utfylt linje erstatter ikke din gjennomgang av opplysningene. Hvilke fakturaopplysninger og hvilken MVA-behandling salget krever, må vurderes for den aktuelle leveransen.</p><Link className={styles.textLink} href="/faktura-krav">Les om fakturakrav og betingede opplysninger <span aria-hidden="true">↗</span></Link>
        </div>
        <div className={styles.priceExample}><h3>Pris og MVA i eksemplet</h3><ProductMedia image={{ ...line, alt: "Enhetspris 12 000 kroner og MVA-sats 25 prosent i fakturaskjemaet" }} originalSrc={editor.original.file.replace(/^public/, "")} caption="Utsnitt av Faktura 110 på skrivebord. Hele bildet viser også beskrivelse, antall og summer." sizes="(max-width: 447px) calc(100vw - 48px), 400px" />
          <p>Antall 1 × 12 000 kroner gir 12 000 kroner netto. Med eksemplets sats på 25 prosent blir MVA 3 000 kroner og totalen 15 000 kroner.</p><p className={styles.small}>Dette er demonstrasjonsverdier. Velg MVA-behandlingen som passer ditt eget salg; 25 prosent er ikke en regel for alle fakturaer.</p>
        </div>
      </div></SectionContainer></section>

      <section id="generer-og-del" className={styles.section} aria-labelledby="generate-title"><SectionContainer>
        <div className={styles.sectionIntro}><p className={styles.eyebrow}>03 / LAG PDF OG DEL</p><h2 id="generate-title">Generering og sending er to ulike handlinger.</h2></div>
        <ol start={4} className={`${styles.steps} ${styles.finish}`}>
          <li><span className={styles.number} aria-hidden="true">4</span><div><h3>Velg Generer når innholdet stemmer</h3><p>Generer brukes til å lagre dokumentet og lage PDF. Lagre er alternativet når du vil lagre dokumentet uten å lage PDF med det samme. Fra et lagret dokument i Dokumenter kan du bruke Generer PDF.</p></div></li>
          <li><span className={styles.number} aria-hidden="true">5</span><div><h3>Last ned filen og del den selv</h3><p>Når PDF-en er klar, bruker du PDF-visningen i nettleseren til å lagre eller laste ned filen. Kontroller dokumentet og send det selv til kunden, for eksempel som vedlegg i en e-post du sender utenfor Jobbleder.</p></div></li>
        </ol>
        <div className={styles.deliveryNotes}><p>Oppretting, PDF-eksport og dokumentkonvertering er tilgjengelig i Free. Free-PDF-er har Jobbleder-vannmerke; Premium gir valg for egen firmalogo eller en ren PDF uten Jobbleder-merking.</p><p>Hvis en faktura må korrigeres, følg veiledningen for <Link href="/instruksjoner#rette-en-faktura">retting med kreditnota</Link>. Ikke legg til grunn at en ferdig faktura bare kan redigeres.</p></div>
        <Link className={styles.textLink} href="/faktura-eksempel">Se hele Faktura 110 og forklaringen av dokumentet <span aria-hidden="true">↗</span></Link>
      </SectionContainer></section>

      <section className={`${styles.section} ${styles.alternate}`} aria-labelledby="workflow-title"><SectionContainer><div className={styles.workflow}>
        <div><p className={styles.eyebrow}>HAR DU GRUNNLAGET ALLEREDE?</p><h2 id="workflow-title">Start med et dokument du har laget.</h2><p>Åpne tilbudet, kontrakten eller timelisten i Dokumenter og velg Opprett faktura. Du starter handlingen selv og kontrollerer opplysningene i den nye fakturaen før du genererer PDF.</p></div>
        <nav aria-label="Instruksjoner for faktura fra dokument"><ul>{workflows.map(flow => <li key={flow.href}><Link className={styles.textLink} href={flow.href}>{flow.name}<span aria-hidden="true"> ↗</span></Link><p>{flow.text}</p></li>)}</ul></nav>
      </div></SectionContainer></section>

      <section className={styles.section} aria-labelledby="faq-title"><SectionContainer><div className={styles.faq}><p className={styles.eyebrow}>SPØRSMÅL OG SVAR</p><h2 id="faq-title">Ofte stilte spørsmål</h2>{page.faqs.map(({ q, a }) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}<Link className={styles.textLink} href="/instruksjoner#opprett-faktura">Åpne den samlede opprettingsveiledningen <span aria-hidden="true">↗</span></Link></div></SectionContainer></section>
      <section className={`${styles.related} ${styles.alternate}`} aria-labelledby="related-title"><SectionContainer><h2 id="related-title">Et eksempel, kravene eller selve verktøyet?</h2>
        <nav aria-label="Mer om faktura"><ul className={styles.resources}><li><Link href="/faktura-eksempel">Se et utfylt fakturaeksempel</Link></li><li><Link href="/faktura-krav">Kontroller hvilke opplysninger du trenger</Link></li><li><Link href="/fakturaprogram-gratis">Utforsk gratis fakturering i Jobbleder</Link></li></ul></nav>
        <details className={styles.otherResources}><summary>Guider om timeliste, tilbud og kontrakt</summary><nav aria-label="Andre dokumentguider"><ul>{otherResources.map(p => <li key={p.slug}><Link href={`/${p.slug}`}>{p.h1}</Link></li>)}</ul></nav></details>
      </SectionContainer></section>
    </main><SiteFooter />
  </div>
}
