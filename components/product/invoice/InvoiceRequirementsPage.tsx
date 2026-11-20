import Link from "next/link"
import { SiteHeader, SiteFooter } from "@/components/site/SiteChrome"
import { ApplicationCTA, REGISTRATION_GUIDANCE, SectionContainer } from "@/components/site/Primitives"
import { seoPages } from "@/content/seoPages"
import site from "@/components/site/site.module.css"
import styles from "./invoiceRequirements.module.css"

function splitField(item: string) {
  const separator = item.indexOf(":")
  const text = item.slice(separator + 1).trim()
  return { label: item.slice(0, separator), text: text[0].toUpperCase() + text.slice(1) }
}

export default function InvoiceRequirementsPage() {
  const page = seoPages.find(p => p.slug === "faktura-krav")!
  const [context, information, product, corrections] = page.sections!
  const [required, practical] = information.checklists!
  const fields = required.items.slice(0, 8).map(splitField)
  const seller = fields[2].text
  const sellerBoundary = seller.indexOf(". ")
  fields[2] = { ...fields[2], text: seller.slice(0, sellerBoundary + 1) }
  const registration = seller.slice(sellerBoundary + 2)
  const companyType = splitField(required.items[8])
  const otherTopics = [...new Set(seoPages.filter(p => p.topic !== page.topic).map(p => p.topic))]
  const otherResources = otherTopics.flatMap(topic => seoPages.filter(p => p.topic === topic).slice(0, 2))
  const schema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: page.faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  }

  return <div className={`${site.surface} ${styles.page}`}>
    <a className={`${site.skip} ${styles.skip}`} href="#fakturakrav-innhold">Hopp til innhold</a>
    <SiteHeader />
    <main id="fakturakrav-innhold" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className={styles.hero} aria-labelledby="requirements-title"><SectionContainer>
        <nav className={styles.breadcrumb} aria-label="Brødsmuler"><Link href="/">Hjem</Link><span aria-hidden="true">/</span><Link href="/fakturaprogram-gratis">Faktura</Link><span aria-hidden="true">/</span><span aria-current="page">{page.h1}</span></nav>
        <p className={styles.eyebrow}>OPPSLAGSVERK · FAKTURA I NORGE</p>
        <h1 id="requirements-title">{page.h1}</h1>
        <p className={styles.lead}>Hva må stå i fakturaen, og hva avhenger av salget? Skill mellom krav til dokumentet, betingede opplysninger og praktiske tillegg.</p>
        <a className={styles.textLink} href="#opplysninger">Se oversikten <span aria-hidden="true">↓</span></a>
        <nav className={styles.contents} aria-label="På denne siden"><a href="#opplysninger">01 · Opplysninger</a><a href="#betingede-krav">02 · Betingelser</a><a href="#kontroll">03 · Kontroll</a><a href="#kreditnota">04 · Retting</a></nav>
      </SectionContainer></section>

      <section id="opplysninger" className={styles.section} aria-labelledby="information-title"><SectionContainer><div className={styles.reference}>
        <div className={styles.sectionIntro}><p className={styles.eyebrow}>01 / GRUNNLAGET</p><h2 id="information-title">Opplysningene som beskriver salget.</h2><p>{context.paragraphs[0]}</p><p>{context.paragraphs[1]}</p><p className={styles.note}>Oversikten gjelder vanlige fakturaer og er ikke en uttømmende gjennomgang av alle dokumentasjonskrav eller unntak.</p></div>
        <dl className={styles.fields}>{fields.map(field => <div key={field.label}><dt>{field.label}</dt><dd>{field.text}</dd></div>)}</dl>
      </div><div className={styles.sourceNote}><span className={styles.eyebrow}>KILDEGRUNNLAG</span><ul>{context.links!.map(l => <li key={l.href}><a href={l.href}>{l.label} <span aria-hidden="true">↗</span></a></li>)}</ul><p>Se veiledningen fra myndighetene for reglene som gjelder ditt salg.</p></div></SectionContainer></section>

      <section id="betingede-krav" className={`${styles.section} ${styles.alternate}`} aria-labelledby="conditional-title"><SectionContainer>
        <div className={styles.sectionIntro}><p className={styles.eyebrow}>02 / AVHENGER AV VIRKSOMHETEN OG SALGET</p><h2 id="conditional-title">Noen opplysninger gjelder når vilkårene er oppfylt.</h2></div>
        <div className={styles.conditions}><div><h3>MVA-registrering</h3><p>{registration}</p></div><div><h3>Satser og avgiftsbehandling</h3><p>Har samme faktura ulike MVA-satser, eller både MVA-pliktige og MVA-frie salg, skal dette spesifiseres på egne linjer. Velg behandlingen som gjelder den faktiske leveransen.</p></div><div><h3>Foretaksform</h3><p>{companyType.text}</p></div></div>
        <p className={styles.note}>Også tidspunktet for fakturering og andre dokumentasjonskrav må vurderes ut fra salget og reglene som gjelder. Fakturadato, leveringsdato og betalingsforfall er forskjellige opplysninger.</p>
        <a className={styles.textLink} href="https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/mva/registrere-endre-slette/">Skatteetaten: MVA-registrering <span aria-hidden="true">↗</span></a>
      </SectionContainer></section>

      <section id="kontroll" className={styles.section} aria-labelledby="check-title"><SectionContainer><div className={styles.review}>
        <div><p className={styles.eyebrow}>03 / PRAKTISK GJENNOMGANG</p><h2 id="check-title">Kontroller innholdet før du sender.</h2><ul className={styles.checklist}><li>Er selger og kjøper riktig identifisert?</li><li>Beskriver fakturaen det som faktisk er levert, med riktig omfang, tidspunkt og sted?</li><li>Stemmer priser, MVA-behandling og totalbeløp?</li><li>Er betalingsforfall og betalingsopplysninger tydelige?</li></ul><p className={styles.note}>Bruk kontrollen som støtte, ikke som en bekreftelse på at alle krav for akkurat ditt salg er oppfylt.</p><Link className={styles.textLink} href="/faktura-eksempel">Se feltene i et fakturaeksempel <span aria-hidden="true">↗</span></Link></div>
        <aside className={styles.practical} aria-labelledby="practical-title"><p className={styles.eyebrow}>PRAKTISKE TILLEGG</p><h3 id="practical-title">Gjør det enklere å betale.</h3><p>{information.paragraphs[0]}</p><dl>{practical.items.map(splitField).map(field => <div key={field.label}><dt>{field.label}</dt><dd>{field.text}</dd></div>)}</dl></aside>
      </div></SectionContainer></section>

      <section id="kreditnota" className={`${styles.section} ${styles.alternate}`} aria-labelledby="correction-title"><SectionContainer><div className={styles.split}>
        <div><p className={styles.eyebrow}>04 / NÅR NOE MÅ RETTES</p><h2 id="correction-title">Korriger med spor til den opprinnelige fakturaen.</h2></div><div><p>{corrections.paragraphs[0]}</p><ul className={styles.links}>{corrections.links!.map(l => <li key={l.href}><Link className={styles.textLink} href={l.href}>{l.label} <span aria-hidden="true">↗</span></Link></li>)}</ul></div>
      </div></SectionContainer></section>

      <section className={styles.section} aria-labelledby="product-title"><SectionContainer><div className={styles.split}>
        <div><p className={styles.eyebrow}>FRA KRAV TIL DOKUMENT</p><h2 id="product-title">Et ryddig oppsett.<br />Din kontroll av innholdet.</h2></div><div className={styles.copy}><p>{product.paragraphs[0]}</p><p>{product.paragraphs[1]}</p><p className={styles.note}>Jobbleder gir deg et oppsett for fakturaen. Du må selv kontrollere at dokumentet inneholder opplysningene som kreves for salget.</p><Link className={styles.textLink} href="/instruksjoner#opprett-faktura">Slik oppretter du en faktura i Jobbleder <span aria-hidden="true">↗</span></Link><div className={styles.action}><ApplicationCTA>Opprett faktura gratis</ApplicationCTA><p className={styles.registration}>{REGISTRATION_GUIDANCE}</p></div></div>
      </div></SectionContainer></section>

      <section className={`${styles.section} ${styles.alternate}`} aria-labelledby="faq-title"><SectionContainer><div className={styles.faq}><p className={styles.eyebrow}>SPØRSMÅL OG SVAR</p><h2 id="faq-title">Ofte stilte spørsmål</h2>{page.faqs.map(({q,a}) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></SectionContainer></section>
      <section className={styles.related} aria-labelledby="related-title"><SectionContainer><h2 id="related-title">Vil du se dokumentet eller lage en faktura?</h2><nav aria-label="Mer om faktura"><ul className={styles.resources}><li><Link href="/faktura-eksempel">Se et utfylt fakturaeksempel</Link></li><li><Link href="/lage-faktura">Følg guiden til å lage faktura</Link></li><li><Link href="/fakturaprogram-gratis">Utforsk gratis fakturaprogram</Link></li></ul></nav><details className={styles.otherResources}><summary>Guider om timeliste, tilbud og kontrakt</summary><nav aria-label="Andre dokumentguider"><ul>{otherResources.map(p => <li key={p.slug}><Link href={`/${p.slug}`}>{p.h1}</Link></li>)}</ul></nav></details></SectionContainer></section>
    </main><SiteFooter />
  </div>
}
