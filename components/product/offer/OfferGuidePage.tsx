import Link from "next/link"
import { SiteHeader, SiteFooter } from "@/components/site/SiteChrome"
import { ApplicationCTA, REGISTRATION_GUIDANCE, SectionContainer } from "@/components/site/Primitives"
import OfferFigure from "@/components/editorial/OfferFigure"
import { seoPages, type SEOSection } from "@/content/seoPages"
import site from "@/components/site/site.module.css"
import styles from "./offerExample.module.css"
import guide from "./offerGuide.module.css"

type GuideSlug = "lage-tilbud" | "hvordan-folge-opp-tilbud"

function Copy({ section }: { section: SEOSection }) {
  return <div className={styles.copy}>{section.paragraphs.map(p => <p key={p}>{p}</p>)}{section.links?.map(l => <Link className={styles.textLink} key={l.href} href={l.href}>{l.label}</Link>)}</div>
}

function Steps({ sections, start }: { sections: SEOSection[]; start: number }) {
  return <ol start={start} className={guide.steps}>{sections.map(s => <li key={s.heading}><h3>{s.heading}</h3><Copy section={s} /></li>)}</ol>
}

function Creation({ sections }: { sections: SEOSection[] }) {
  return <>
    <section className={styles.section} aria-labelledby="prepare-title"><SectionContainer>
      <p className={styles.eyebrow}>01 / GRUNNLAGET FOR TILBUDET</p><h2 id="prepare-title" className={guide.heading}>Gjør oppdraget tydelig.</h2>
      <Steps sections={sections.slice(0, 3)} start={1} />
      <div className={guide.editor}><OfferFigure variant="form" /></div>
    </SectionContainer></section>
    <section className={`${styles.section} ${styles.alternate}`} aria-labelledby="details-title"><SectionContainer>
      <p className={styles.eyebrow}>02 / AVKLARINGENE SOM TELLER</p><h2 id="details-title" className={guide.heading}>Avgrens arbeidet.<br />Kontroller tall og datoer.</h2>
      <Steps sections={sections.slice(3, 6)} start={4} />
    </SectionContainer></section>
    <section className={styles.section} aria-labelledby="review-title"><SectionContainer>
      <p className={styles.eyebrow}>03 / FRA SKJEMA TIL PDF</p><h2 id="review-title" className={guide.heading}>Les gjennom før du deler.</h2>
      <Steps sections={sections.slice(6, 8)} start={7} />
    </SectionContainer></section>
    <section className={`${styles.section} ${styles.alternate}`} aria-labelledby="sent-title"><SectionContainer><div className={guide.split}>
      <div><p className={styles.eyebrow}>04 / ETTER AT TILBUDET ER SENDT</p><h2 id="sent-title" className={guide.heading}>{sections[8].heading}</h2></div>
      <div><Copy section={sections[8]} /><Link className={styles.textLink} href="/hvordan-folge-opp-tilbud">Finn en enkel rutine for å følge opp kunden</Link></div>
    </div></SectionContainer></section>
  </>
}

function FollowUp({ sections }: { sections: SEOSection[] }) {
  const routine = [
    ["Bekreft at tilbudet kom frem", "Bruk e-post eller telefon til å spørre om kunden har mottatt dokumentet. Dette gjør du selv, utenfor Jobbleder."],
    ["Gi kunden tid til å lese", "Tilpass tidspunktet til oppdragets omfang og det dere har avtalt. Noen dager kan passe; det finnes ingen fast frist som passer alle."],
    ["Følg opp kort og vennlig", "Spør om kunden har rukket å se på tilbudet. Unngå gjentatte purringer hvis kunden trenger mer tid."],
    ["Avklar spørsmålene", "Finn ut om kunden lurer på arbeidet, prisen eller forutsetningene. Svar på det konkrete spørsmålet før dere går videre."],
    ["Ta vare på endringene", "Avklar endringer i omfang eller pris skriftlig. Gjør det tydelig hvilken versjon av tilbudet dere diskuterer."],
  ]
  return <>
    <section className={styles.section} aria-labelledby="routine-title"><SectionContainer><div className={guide.routineGrid}>
      <div><p className={styles.eyebrow}>01 / EN ENKEL OPPFØLGINGSRUTINE</p><h2 id="routine-title" className={guide.heading}>Hold dialogen i gang.</h2><Copy section={sections[0]} /></div>
      <ol className={guide.timeline}>{routine.map(([title, text], i) => <li key={title}><span className={guide.number} aria-hidden="true">0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
    </div></SectionContainer></section>
    <section className={`${styles.section} ${styles.alternate}`} aria-labelledby="communication-title"><SectionContainer>
      <p className={styles.eyebrow}>02 / KONTAKTEN MED KUNDEN</p><h2 id="communication-title" className={guide.heading}>Vær konkret. Gi rom for spørsmål.</h2>
      <div className={guide.communication}>{sections.slice(1).map(s => <div key={s.heading}><h3>{s.heading}</h3><Copy section={s} /></div>)}</div>
      <Link className={styles.textLink} href="/blogg/folle-opp-tilbud">Les to konkrete forslag til oppfølgingsmeldinger</Link>
    </SectionContainer></section>
    <section className={styles.section} aria-labelledby="response-title"><SectionContainer>
      <p className={styles.eyebrow}>03 / NÅR KUNDEN SVARER</p><h2 id="response-title" className={guide.heading}>Avklar hva svaret betyr.</h2>
      <div className={guide.responses}>
        <div><h3>Aksept</h3><p>Ta vare på svaret og kontroller hva kunden har akseptert. Et akseptert tilbud kan danne grunnlag for en bindende avtale, avhengig av innhold, svar, omstendigheter og gjeldende regler. En separat signert kontrakt er ikke alltid nødvendig.</p></div>
        <div><h3>Ønskede endringer</h3><p>Avklar nytt omfang eller pris før dere går videre. Ikke legg til grunn at et svar med endringer er enighet om det opprinnelige tilbudet.</p></div>
        <div><h3>Avslag</h3><p>Takk for svaret og respekter beslutningen. Du kan spørre om en kort begrunnelse hvis det er naturlig, uten å presse kunden.</p></div>
        <div><h3>Behov for mer avklaring</h3><p>Avtal hva du skal undersøke, og når dere tar kontakt igjen. Oppsummer avklaringene skriftlig slik at begge har samme utgangspunkt.</p></div>
      </div>
      <p className={guide.qualification}>Dette er praktiske råd. Forbrukeravtaler og oppdrag mellom virksomheter kan være underlagt ulike regler. Jobbleder registrerer ikke kundens aksept automatisk.</p>
      <Link className={styles.textLink} href="/blogg/tilbud-vs-kontrakt">Les om tilbud, aksept og kontrakt</Link>
    </SectionContainer></section>
  </>
}

export default function OfferGuidePage({ slug }: { slug: GuideSlug }) {
  const page = seoPages.find(p => p.slug === slug)!, creation = slug === "lage-tilbud"
  const cluster = seoPages.filter(p => p.topic === page.topic)
  const otherTopics = [...new Set(seoPages.filter(p => p.topic !== page.topic).map(p => p.topic))]
  const oldRelated = [...cluster.filter(p => p.slug !== slug).slice(0, 3), ...otherTopics.flatMap(topic => seoPages.filter(p => p.topic === topic).slice(0, 2))].slice(0, 9)
  const others = oldRelated.filter(p => p.topic !== page.topic)
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }
  return <div className={`${site.surface} ${styles.page}`}>
    <a className={`${site.skip} ${styles.skip}`} href="#tilbudguide-innhold">Hopp til innhold</a><SiteHeader />
    <main id="tilbudguide-innhold" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className={styles.hero} aria-labelledby="guide-title"><SectionContainer>
        <nav className={styles.breadcrumb} aria-label="Brødsmuler"><Link href="/">Hjem</Link><span aria-hidden="true">/</span><Link href="/tilbud-mal">Tilbud</Link><span aria-hidden="true">/</span><span aria-current="page">{page.h1}</span></nav>
        <div className={styles.heroCopy}><p className={styles.eyebrow}>{creation ? "PRAKTISK GUIDE · ÅTTE STEG" : "ETTER UTSENDING · MANUELL KUNDEDIALOG"}</p><h1 id="guide-title">{page.h1}</h1><p className={styles.lead}>{page.intro}</p>
          {creation && <><div className={styles.heroActions}><ApplicationCTA>Opprett tilbud gratis</ApplicationCTA></div><p className={styles.registration}>{REGISTRATION_GUIDANCE}</p></>}
        </div>
        <ul className={styles.heroNotes}>{page.bullets.map(b => <li key={b}>{b}</li>)}</ul>
      </SectionContainer></section>
      {creation ? <Creation sections={page.sections!} /> : <FollowUp sections={page.sections!} />}
      <section className={`${styles.section} ${creation ? "" : styles.alternate}`} aria-labelledby="workflow-title"><SectionContainer><div className={styles.createGrid}>
        <div><p className={styles.eyebrow}>{creation ? "05 / DITT EGET TILBUD" : "04 / DOKUMENTARBEIDET I JOBBLEDER"}</p><h2 id="workflow-title" className={guide.heading}>{creation ? "Fra avklart oppdrag\ntil ferdig tilbud." : "Dokumentene i appen.\nDialogen med kunden."}</h2>
          <p className={styles.lead}>{creation ? "Opprett tilbudet i nettleseren, kontroller innholdet og generer en PDF du deler med kunden selv." : "Bruk Jobbleder til å opprette tilbud og generere PDF. Kundekontakt og oppfølging gjør du selv; appen sender ikke tilbud eller påminnelser og sporer ikke om kunden har åpnet dokumentet."}</p>
          {!creation && <p className={guide.workflowCopy}>Når grunnlaget er avklart, kan du selv opprette kontrakt fra tilbudet og redigere kontrakten videre, eller lage faktura direkte fra tilbudet. Du kan også opprette faktura fra kontrakten. Kontroller hvert nytt dokument før du deler det manuelt.</p>}
          <Link className={styles.textLink} href={creation ? "/tilbud-mal" : "/blogg/fra-tilbud-til-kontrakt-og-faktura"}>{creation ? "Utforsk tilbudsverktøyet" : "Se begge dokumentflytene med ekte eksempler"}</Link>
        </div>
        <div className={styles.plan}><h3>Dokumentfunksjonene er med i Free.</h3><p>Opprett tilbud, generer PDF og bruk dokumentet videre til kontrakt eller faktura i Free. PDF-ene har Jobbleder-merking. Premium fjerner merkingen og lar deg bruke egen firmalogo.</p><ApplicationCTA>Opprett tilbud gratis</ApplicationCTA><p className={styles.registration}>{REGISTRATION_GUIDANCE}</p></div>
      </div></SectionContainer></section>
      <section className={`${styles.section} ${creation ? styles.alternate : ""}`} aria-labelledby="faq-title"><SectionContainer><div className={styles.faq}>
        <p className={styles.eyebrow}>SPØRSMÅL OG SVAR</p><h2 id="faq-title">Ofte stilte spørsmål</h2>{page.faqs.map(f => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}
      </div></SectionContainer></section>
      <section className={`${styles.related} ${creation ? "" : styles.alternate}`} aria-labelledby="related-title"><SectionContainer>
        <p className={styles.eyebrow}>VIDERE LESNING</p><h2 id="related-title">Finn neste steg.</h2>
        <div className={styles.resourceGrid}><nav aria-label="Mer om tilbud"><h3>Tilbudsarbeid</h3><ul>{cluster.map(p => <li key={p.slug}><Link href={`/${p.slug}`} aria-current={p.slug === slug ? "page" : undefined}>{p.h1}</Link></li>)}</ul></nav><nav aria-label="Andre dokumentguider"><h3>Andre dokumenter</h3><ul className={styles.otherResources}>{others.map(p => <li key={p.slug}><Link href={`/${p.slug}`}>{p.h1}</Link></li>)}</ul></nav></div>
      </SectionContainer></section>
    </main><SiteFooter />
  </div>
}
