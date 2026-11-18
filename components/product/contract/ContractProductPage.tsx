import Link from "next/link"
import type { ReactNode } from "react"
import { SiteHeader, SiteFooter } from "@/components/site/SiteChrome"
import { ApplicationCTA, ProductMedia, REGISTRATION_GUIDANCE, ResourceLink, SectionContainer } from "@/components/site/Primitives"
import { seoPages } from "@/content/seoPages"
import { contractFaqs, contractPayments, contractPricing, contractSeoPage } from "@/content/contractProduct"
import manifest from "@/content/contractProductMedia.json"
import site from "@/components/site/site.module.css"
import styles from "./contractProduct.module.css"

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

export default function ContractProductPage() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: contractFaqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }
  const related = ["timeliste-mal", "timeliste-mal-pdf", "tilbud-mal", "lage-tilbud", "fakturaprogram-gratis", "lage-faktura"]
  return <div className={`${site.surface} ${styles.page}`}>
    <a href="#kontraktsinnhold" className={site.skip}>Hopp til innhold</a><SiteHeader />
    <main id="kontraktsinnhold" tabIndex={-1}>
      <section className={styles.hero} aria-labelledby="contract-title"><SectionContainer>
        <nav className={styles.breadcrumb} aria-label="Brødsmuler"><Link href="/">Hjem</Link><span aria-hidden="true">/</span><span aria-current="page">Kontrakt mal</span></nav>
        <div className={styles.heroGrid}><div className={styles.heroCopy}><p className={site.eyebrow}>KONTRAKT MAL · GRATIS FOR HÅNDVERKERE OG SMÅ BEDRIFTER</p>
          <h1 id="contract-title" className={styles.headline}>Lag kontrakter som <span>passer jobben.</span></h1>
          <p className={site.lead}>Opprett profesjonelle kontrakter med fastpris, timepris eller tilbud som grunnlag. Tilpass vilkårene, last ned PDF og opprett faktura når du er klar.</p>
          <div className={styles.actions}><ApplicationCTA>Opprett kontrakt gratis</ApplicationCTA><a href="#kontraktseksempel" className={site.textLink}>Se kontraktseksempel <span aria-hidden="true">↓</span></a></div>
          <p className={site.registration}>{REGISTRATION_GUIDANCE}</p>
        </div><div className={styles.heroMedia}><Media asset="hero" mobile="heroMobile" alt="Timepris 900 og betalingsfrist 14 dager i kontraktopprettingen i Jobbleder" caption="Opprett kontrakten selv, med kunde, prosjekt og vilkår. Her vises et timepriseksempel; mobilutsnittet viser timepris og betalingsfrist." priority /></div></div>
      </SectionContainer></section>

      <Section id="kontraktseksempel" eyebrow="01 / DET FERDIGE DOKUMENTET" title="Avtalen samlet i én PDF." alternate>
        <div className={styles.documentLayout}><div className={styles.document}><Media asset="pdf" alt="Kontrakt 11 som PDF med arbeid, pris fra Tilbud 29, vilkår og felt for manuelle signaturer" caption="Tidligere kontraktseksempel: pris fra Tilbud 29 og betaling etter ferdigstillelse. Hele dokumentsiden med Free-merking er bevart." /></div>
          <div className={styles.copy}><p className={site.lead}>Samle det dere har avtalt før arbeidet begynner. Kontrakten gir kunden og bedriften en oversikt over oppdraget i ett dokument.</p>
            <ul className={styles.documentList}><li>Avtalepartene og beskrivelsen av arbeidet.</li><li>Start, estimert ferdigstillelse, pris og betaling.</li><li>Materialansvar, kontraktsvilkår og signaturfelt.</li></ul>
            <p>Kontroller innholdet, last ned PDF-en og avtal manuell signering. Elektronisk signering er ikke støttet.</p>
            <p className={styles.note}>PDF-en viser en tidligere versjon av Kontrakt 11 med pris fra tilbud og betaling etter utført arbeid. Den er et eget dokumenteksempel, ikke eksporten av betalingsplanen lenger ned.</p>
          </div></div>
      </Section>

      <Section id="prisstrukturer" eyebrow="02 / TRE MÅTER Å AVTALE PRISEN" title="Fastpris, timepris eller pris fra tilbud.">
        <p className={styles.intro}>Velg prisstrukturen som passer oppdraget. Du legger inn og kontrollerer prisgrunnlaget i kontrakten.</p>
        <div className={styles.threeColumns}>{contractPricing.map(item => <article key={item.name}><p className={styles.label}>{item.name}</p><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        <Media asset="pricing" mobile="pricingMobile" alt="Prisstruktur-menyen med alternativene Fast, Time og Tilbud" caption="Tre alternative prisstrukturer i det samme kontraktsverktøyet. Alle tre valgene er bevart i mobilutsnittet." />
        <p className={styles.note}>Timeprisen på 900 og fastprisen på 12 000 i skjermbildene er demonstrasjonsverdier, ikke standardpriser.</p>
      </Section>

      <Section id="betalingsvilkar" eyebrow="03 / BETALING SOM PASSER AVTALEN" title="Avtal hvordan og når det skal faktureres." alternate>
        <div className={styles.threeColumns}>{contractPayments.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        <Media asset="payments" mobile="paymentsMobile" alt="Betalingsmetoder: faktura etter ferdigstillelse, forskuddsfaktura og fakturering etter fremdrift" caption="Velg betalingsmetode og angi betalingsfristen i kontrakten. Alle tre betalingsmåtene er synlige." />
        <div className={styles.paymentDetails}><div><h3>Angi forskuddsprosent.</h3><Media asset="advance" alt="Forskuddsfaktura valgt med forskudd 30 prosent og betalingsfrist 14 dager" caption="Et eksempel med 30 % forskudd. Prosenten er et felt du fyller inn i kontrakten." /></div>
          <div><h3>Legg inn en betalingsplan.</h3><Media asset="progress" alt="Fakturering etter fremdrift med betalingsplan aktivert og en rad på 25 prosent" caption="Utsnitt av en plan med én rad på 25 %. Du angir prosent og eventuell beskrivelse selv." /></div></div>
        <p className={styles.note}>Bildene viser betalingsvilkår du konfigurerer. Kontroller fakturagrunnlaget når du senere oppretter faktura.</p>
      </Section>

      <Section id="tilpass-vilkar" eyebrow="04 / DETALJENE SOM GJØR AVTALEN TYDELIG" title="Tilpass innholdet til oppdraget.">
        <div className={styles.termsLayout}><div className={styles.copy}><p className={site.lead}>Beskriv arbeidet med egne rader. Sett start- og sluttdato, avtal hvem som leverer materialene og angi betalingsfristen i dager.</p>
          <p>Bruk standardtekstene eller rediger de enkelte seksjonene. Du kan tilpasse tekst om tilleggsarbeid, reklamasjon, lovgrunnlag og egne tilleggsvilkår.</p>
          <div className={styles.materials}><h3>Hvem leverer materialene?</h3><Media asset="materials" alt="Materialvalg med alternativene Entreprenør, Kunde og Begge" caption="Fordel materialansvaret slik dere har avtalt: entreprenør, kunde eller begge." /></div>
          <ResourceLink href="/instruksjoner#opprett">Se veiledning for kontraktoppretting</ResourceLink></div>
          <div><h3 className={styles.mediaTitle}>Kontraktsseksjonene kan redigeres.</h3><Media asset="clauses" alt="Fire redigerbare kontraktsseksjoner: tilleggsarbeid, reklamasjonstekst, lovtekst og tilleggsvilkår" caption="De fire tekstfeltene er åpnet for redigering i dette eksemplet. Se gjennom innholdet så det beskriver avtalen deres." /></div></div>
      </Section>

      <Section id="tilbud-til-kontrakt" eyebrow="05 / BYGG VIDERE PÅ ET TILBUD" title="Fra prisforslag til en egen kontrakt." alternate>
        <div className={styles.intro}><p className={site.lead}>Har du allerede laget et tilbud? Bruk det som grunnlag for kontrakten og ta opplysningene videre.</p><p>Kontrakten kan deretter redigeres som et selvstendig dokument. Tilpass arbeidsbeskrivelse, pris og vilkår til det dere har blitt enige om. Du kan også opprette kontrakten uten et tilbud.</p><ResourceLink href="/tilbud-mal">Se hvordan du lager tilbud</ResourceLink></div>
        <Media asset="offer" mobile="offerMobile" alt="Kontrakt 11 under oppretting med Tilbud 29 som kilde og tilbudet som prisgrunnlag" caption="Tilbud 29 → Kontrakt 11. Kildereferansen og kontraktsfeltene er synlige; åpne hele bildet for hele opprettingen." />
      </Section>

      <Section id="kontrakt-til-faktura" eyebrow="06 / TA AVTALEN VIDERE" title="Bruk kontrakten som grunnlag for faktura.">
        <div className={styles.intro}><p className={site.lead}>Opprett en faktura direkte fra kontrakten. Se gjennom linjene, datoene og beløpene før du genererer og laster ned fakturaen.</p><p>Her har Faktura 112 Kontrakt 11 som kilde. Det samme parkettarbeidet følger med som fakturalinje.</p><ResourceLink href="/fakturaprogram-gratis">Utforsk fakturaprogrammet</ResourceLink></div>
        <Media asset="invoice" mobile="invoiceMobile" alt="Faktura 112 fra Kontrakt 11 med parkettarbeid som fakturalinje" caption="Kontrakt 11 → Faktura 112. Mobilutsnittet beholder kilde og fakturalinje." />
        <p className={styles.note}>Fakturaeksemplet viser hele beløpet på 12 000 kr før MVA. Det viser ikke en beregnet delbetaling fra betalingsplanen over.</p>
      </Section>

      <Section id="free-og-premium" eyebrow="ALLE KONTRAKTFUNKSJONENE ER MED I FREE" title="Gratis kontrakter. Egen profil med Premium." alternate>
        <p className={styles.intro}>Oppretting, redigering, pris- og betalingsvalg, PDF-eksport og dokumentkonvertering er tilgjengelig i Free. Premium gir deg kontroll over PDF-enes profil.</p>
        <table className={styles.planTable}><caption className={site.srOnly}>Kontrakt i Free og Premium</caption><thead><tr><th scope="col">Dette får du</th><th scope="col">Free</th><th scope="col">Premium</th></tr></thead><tbody><tr><th scope="row">Opprett og rediger</th><td>Inkludert</td><td>Inkludert</td></tr><tr><th scope="row">Pris og betaling</th><td>Inkludert</td><td>Inkludert</td></tr><tr><th scope="row">PDF og dokumentflyt</th><td>Inkludert</td><td>Inkludert</td></tr><tr><th scope="row">PDF-profil</th><td>Jobbleder-merking</td><td>Fjern Jobbleder-merking og bruk egen firmalogo</td></tr></tbody></table>
      </Section>

      <Section id="om-kontrakter" eyebrow="PRAKTISKE RAMMER FØR ARBEIDET STARTER" title="En tydelig avtale begynner med detaljene.">
        <div className={styles.education}>{contractSeoPage.sections!.map(section => <article key={section.heading}><h3>{section.heading}</h3>{section.paragraphs.map(p => <p key={p}>{p}</p>)}</article>)}</div>
        <nav className={styles.resources} aria-label="Mer om kontrakter"><h3>Maler og veiledning om kontrakt</h3><ul>{seoPages.filter(page => page.topic === "kontrakt").map(page => <li key={page.slug}><Link href={`/${page.slug}`} aria-current={page.slug === "kontrakt-mal" ? "page" : undefined}>{page.h1}</Link></li>)}</ul></nav>
      </Section>

      <Section id="sporsmal" eyebrow="FØR DU OPPRETTER KONTRAKTEN" title="Ofte stilte spørsmål." alternate>
        <div className={styles.faqs}>{contractFaqs.map(({ q, a }) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div>
        <nav className={styles.resources} aria-label="Relaterte dokumenter"><h3>Se også</h3><ul>{related.map(slug => { const page = seoPages.find(p => p.slug === slug)!; return <li key={slug}><Link href={`/${slug}`}>{page.h1}</Link></li> })}<li><Link href="/instruksjoner#dokumenter">Veiledning for dokumenter</Link></li></ul></nav>
      </Section>

      <section className={`${site.section} ${site.final}`} aria-labelledby="contract-start-title"><SectionContainer><p className={site.eyebrow}>START MED DET NESTE OPPDRAGET</p><h2 id="contract-start-title" className={site.title}>Få avtalen på plass før arbeidet starter.</h2><p>Opprett din første kontrakt gratis. Beskriv jobben, tilpass vilkårene og last ned dokumentet.</p><ApplicationCTA>Opprett kontrakt gratis</ApplicationCTA><p className={site.registration}>{REGISTRATION_GUIDANCE}</p></SectionContainer></section>
    </main><SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
  </div>
}
