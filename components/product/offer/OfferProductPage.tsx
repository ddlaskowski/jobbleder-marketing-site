import Link from "next/link"
import type { ReactNode } from "react"
import { SiteHeader, SiteFooter } from "@/components/site/SiteChrome"
import { ApplicationCTA, ProductMedia, REGISTRATION_GUIDANCE, ResourceLink, SectionContainer } from "@/components/site/Primitives"
import { seoPages } from "@/content/seoPages"
import { offerFaqs, offerSeoPage } from "@/content/offerProduct"
import manifest from "@/content/offerProductMedia.json"
import site from "@/components/site/site.module.css"
import styles from "./offerProduct.module.css"

type MediaKey = keyof typeof manifest.assets
function Media({ asset, mobile, alt, caption, priority = false }: { asset: MediaKey; mobile?: MediaKey; alt: string; caption: string; priority?: boolean }) {
  const image = manifest.assets[asset]
  return <ProductMedia image={{ ...image, alt }} mobileImage={mobile ? { ...manifest.assets[mobile], alt } : undefined}
    originalSrc={image.original.file.replace(/^public/, "")} caption={caption} priority={priority} />
}
function Section({ id, eyebrow, title, children, alternate = false }: { id: string; eyebrow: string; title: string; children: ReactNode; alternate?: boolean }) {
  return <section id={id} aria-labelledby={`${id}-title`} className={`${site.section} ${alternate ? styles.alternate : ""}`}>
    <SectionContainer><div className={styles.heading}><p className={site.eyebrow}>{eyebrow}</p><h2 id={`${id}-title`} className={site.title}>{title}</h2></div>{children}</SectionContainer>
  </section>
}

export default function OfferProductPage() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: offerFaqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }
  const related = ["timeliste-mal", "timeliste-mal-pdf", "fakturaprogram-gratis", "lage-faktura", "kontrakt-mal", "kontrakt-handverker"]
  return <div className={`${site.surface} ${styles.page}`}>
    <a href="#tilbudsinnhold" className={site.skip}>Hopp til innhold</a><SiteHeader />
    <main id="tilbudsinnhold" tabIndex={-1}>
      <section className={styles.hero} aria-labelledby="offer-title"><SectionContainer>
        <nav className={styles.breadcrumb} aria-label="Brødsmuler"><Link href="/">Hjem</Link><span aria-hidden="true">/</span><span aria-current="page">Tilbud mal</span></nav>
        <div className={styles.heroCopy}><p className={site.eyebrow}>TILBUD MAL · FOR HÅNDVERKERE OG SMÅ BEDRIFTER</p>
          <h1 id="offer-title" className={styles.headline}>Lag tilbud som <span>blir til mer.</span></h1>
          <p className={site.lead}>Et profesjonelt tilbud er starten. Lag tilbud gratis i Jobbleder, last ned en ryddig PDF og bruk opplysningene videre i kontrakt eller faktura.</p>
          <div className={styles.actions}><ApplicationCTA>Lag tilbud gratis</ApplicationCTA><a href="#tilbudseksempel" className={site.textLink}>Se tilbudseksempel <span aria-hidden="true">↓</span></a></div>
          <p className={site.registration}>{REGISTRATION_GUIDANCE}</p>
        </div>
        <div className={styles.heroMedia}><Media asset="hero" mobile="heroMobile" alt="Tilbudslinje for legging av parkett og prisoppsummering i Jobbleder" caption="Tilbud 29 i dokumentoversikten. Mobilutsnittet viser tilbudslinjen og summene. Hele bildet viser også kunde, prosjekt og dokumentvalg." priority /></div>
      </SectionContainer></section>

      <Section id="tilbudseksempel" eyebrow="01 / DOKUMENTET KUNDEN FÅR" title="Et ryddig tilbud. Klart som PDF." alternate>
        <div className={styles.pdfLayout}><div className={styles.pdf}><Media asset="pdf" alt="Tilbud 29 som PDF for legging av parkett, med total 15 000 kroner og Jobbleder-merking" caption="Autentisk eksportert tilbud fra Jobbleder Free. Hele dokumentsiden er bevart." /></div>
          <div className={styles.copy}><p className={site.lead}>Gi kunden et tydelig grunnlag for å ta stilling til oppdraget. Tilbudet samler kundeopplysninger, prosjekt, beskrivelse, priser og gyldighetsdato.</p>
            <p>Eksemplet gjelder legging av parkett for Eksempel Eiendom AS. Last ned tilbudet som PDF og del det med kunden på den måten dere foretrekker.</p>
            <dl className={styles.totals}><div><dt>Tilbudssum ekskl. MVA</dt><dd>12 000 kr</dd></div><div><dt>MVA 25 %</dt><dd>3 000 kr</dd></div><div><dt>Totalt inkl. MVA</dt><dd>15 000 kr</dd></div></dl>
            <p className={styles.note}>Dette er et utfylt demonstrasjonseksempel, ikke en tom PDF-mal. Beløpene er eksempelverdier. Free-dokumenter har Jobbleder-merking.</p>
          </div></div>
      </Section>

      <Section id="lag-tilbud" eyebrow="02 / FRA OPPDRAG TIL TILBUD" title="Få detaljene på plass én gang.">
        <ol className={styles.steps}><li><h3>Velg kunde og prosjekt.</h3><p>Knytt tilbudet til kunden og oppdraget det gjelder.</p></li><li><h3>Beskriv og pris arbeidet.</h3><p>Legg inn tilbudslinjer med beskrivelse, enhetspris, antall og MVA.</p></li><li><h3>Kontroller og lag PDF.</h3><p>Se gjennom datoer, innhold og summer før du genererer dokumentet.</p></li></ol>
        <Media asset="editor" mobile="editorMobile" alt="Tilbudslinje med beskrivelse, enhetspris, antall og MVA i tilbudsopprettingen" caption="Oppretting av Tilbud 29. På mobil vises tilbudslinjen; hele bildet viser også kunde, prosjekt, datoer og oppsummering." />
        <ResourceLink href="/instruksjoner#opprett">Se veiledning for å opprette dokumenter</ResourceLink>
      </Section>

      <Section id="tilbud-til-faktura" eyebrow="03 / DEN DIREKTE VEIEN" title="Fra tilbud til faktura. Uten dobbeltarbeidet." alternate>
        <div className={styles.intro}><p className={site.lead}>Når tilbudet skal faktureres, oppretter du fakturaen direkte fra tilbudet. Bruk dokumentdataene videre uten å skrive inn opplysningene på nytt.</p><p>Se gjennom innhold, datoer og beløp før du genererer og laster ned fakturaen.</p><ResourceLink href="/fakturaprogram-gratis">Se fakturaprogrammet</ResourceLink></div>
        <Media asset="invoice" mobile="invoiceMobile" alt="Faktura 111 under oppretting med Tilbud 29 som kilde og en linje for legging av parkett" caption="Tilbud 29 → Faktura 111. Kildereferansen følger med i opprettingen. Mobilutsnittet viser kilde og fakturalinje." />
      </Section>

      <Section id="tilbud-til-kontrakt" eyebrow="04 / NÅR OPPDRAGET TRENGER EN AVTALE" title="Bygg en kontrakt på tilbudet.">
        <div className={styles.intro}><p className={site.lead}>Opprett kontrakten direkte fra tilbudet. Deretter kan du redigere kontrakten selvstendig og tilpasse avtalen til oppdraget.</p><p>Tilbudet er utgangspunktet. Arbeidsbeskrivelse og betalingsvilkår kan bearbeides videre i kontrakten. Last ned dokumentet og avtal manuell signering.</p></div>
        <div className={styles.contracts}><div><h3>1. Fra Tilbud 29 til Kontrakt 11</h3><Media asset="contract" mobile="contractMobile" alt="Kontrakt 11 under oppretting med Tilbud 29 som kilde" caption="Kontrakten opprettes med Tilbud 29 som grunnlag. Mobilutsnittet viser kilde og de sentrale avtalefeltene." /></div><div><h3>2. Rediger kontrakten videre</h3><Media asset="editedContract" alt="Redigert Kontrakt 11 med arbeidsbeskrivelse, fastpris og betalingsvilkår" caption="Samme kontrakt, bearbeidet som et selvstendig dokument. Utsnittet viser arbeidsbeskrivelse, prismodell og betaling." /></div></div>
        <ResourceLink href="/kontrakt-mal">Les mer om kontrakt for oppdrag</ResourceLink>
      </Section>

      <Section id="kontrakt-til-faktura" eyebrow="05 / FRA AVTALE TIL FAKTURAGRUNNLAG" title="La kontrakten bli neste faktura." alternate>
        <div className={styles.intro}><p className={site.lead}>Du kan også opprette faktura direkte fra kontrakten. Her er Kontrakt 11 grunnlaget for Faktura 112.</p><p>Velg løpet som passer oppdraget: rett fra tilbud til faktura, eller via en kontrakt. Begge er med i Free.</p></div>
        <ol className={styles.flow} aria-label="Eksempel på dokumentflyt"><li>Tilbud 29</li><li>Kontrakt 11</li><li>Faktura 112</li></ol>
        <Media asset="contractInvoice" mobile="contractInvoiceMobile" alt="Faktura 112 under oppretting med Kontrakt 11 som kilde og tilbudets parkettarbeid som fakturalinje" caption="Kontrakt 11 → Faktura 112. Mobilutsnittet beholder kildereferansen og fakturalinjen. Du kontrollerer dokumentet før PDF-generering." />
      </Section>

      <Section id="free-og-premium" eyebrow="HELE ARBEIDSFLYTEN ER MED I FREE" title="Gratis funksjoner. Egen profil med Premium.">
        <p className={styles.intro}>Tilbud, PDF-eksport, kunder, prosjekter og alle dokumentkonverteringene på denne siden er tilgjengelige i Free. Premium endrer dokumentenes profil.</p>
        <table className={styles.planTable}><caption className={site.srOnly}>Tilbud i Free og Premium</caption><thead><tr><th scope="col">Dette får du</th><th scope="col">Free</th><th scope="col">Premium</th></tr></thead><tbody><tr><th scope="row">Tilbud og PDF</th><td>Inkludert</td><td>Inkludert</td></tr><tr><th scope="row">Dokumentflyt</th><td>Inkludert</td><td>Inkludert</td></tr><tr><th scope="row">Kunder og prosjekter</th><td>Inkludert</td><td>Inkludert</td></tr><tr><th scope="row">PDF-profil</th><td>Jobbleder-merking</td><td>Fjern Jobbleder-merking og bruk egen firmalogo</td></tr></tbody></table>
      </Section>

      <Section id="om-tilbud" eyebrow="MALER OG PRAKTISK VEILEDNING" title="Et godt tilbud starter med tydelige rammer." alternate>
        <div className={styles.education}>{offerSeoPage.sections!.map(section => <article key={section.heading}><h3>{section.heading}</h3>{section.paragraphs.map(p => <p key={p}>{p}</p>)}</article>)}</div>
        <nav className={styles.resources} aria-label="Mer om tilbud"><h3>Fordyp deg i tilbudsarbeidet</h3><ul>{seoPages.filter(page => page.topic === "tilbud").map(page => <li key={page.slug}><Link href={`/${page.slug}`} aria-current={page.slug === "tilbud-mal" ? "page" : undefined}>{page.h1}</Link></li>)}</ul></nav>
      </Section>

      <Section id="sporsmal" eyebrow="FØR DU LAGER DITT FØRSTE TILBUD" title="Ofte stilte spørsmål.">
        <div className={styles.faqs}>{offerFaqs.map(({ q, a }) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div>
        <nav className={styles.resources} aria-label="Relaterte dokumenter"><h3>Se også</h3><ul>{related.map(slug => { const page = seoPages.find(p => p.slug === slug)!; return <li key={slug}><Link href={`/${slug}`}>{page.h1}</Link></li> })}<li><Link href="/instruksjoner#dokumenter">Veiledning for dokumenter</Link></li></ul></nav>
      </Section>

      <section className={`${site.section} ${site.final}`} aria-labelledby="offer-start-title"><SectionContainer><p className={site.eyebrow}>START MED DET NESTE OPPDRAGET</p><h2 id="offer-start-title" className={site.title}>Få ditt første tilbud på plass.</h2><p>Lag tilbudet gratis. Ta opplysningene videre når du trenger kontrakt eller faktura.</p><ApplicationCTA>Lag tilbud gratis</ApplicationCTA><p className={site.registration}>{REGISTRATION_GUIDANCE}</p></SectionContainer></section>
    </main><SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
  </div>
}
