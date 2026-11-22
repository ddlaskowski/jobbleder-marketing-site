import Link from "next/link"
import type { ReactNode } from "react"
import { SiteHeader, SiteFooter } from "@/components/site/SiteChrome"
import { ApplicationCTA, REGISTRATION_GUIDANCE, ResourceLink, SectionContainer } from "@/components/site/Primitives"
import { seoPages } from "@/content/seoPages"
import { contractFaqs, contractPayments, contractPricing, contractSeoPage } from "@/content/contractProduct"
import ContractMedia from "./ContractMedia"
import site from "@/components/site/site.module.css"
import styles from "./contractProduct.module.css"

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
          <p className={site.lead}>Forbered et strukturert kontraktsdokument for privatkunder eller bedrifter. Beskriv jobben, velg pris og betalingsvilkår, og gjennomgå innholdet før du bruker PDF-en.</p>
          <div className={styles.actions}><ApplicationCTA>Opprett kontrakt gratis</ApplicationCTA><a href="#kontraktseksempel" className={site.textLink}>Se kontraktseksempel <span aria-hidden="true">↓</span></a></div>
          <p className={site.registration}>{REGISTRATION_GUIDANCE}</p>
          <p className={styles.note}>Standardvilkårene avventer uavhengig juridisk gjennomgang. Dokumentet må vurderes for ditt oppdrag før eventuell signering.</p>
        </div><div className={styles.heroMedia}><ContractMedia variant="creation" priority /></div></div>
      </SectionContainer></section>

      <Section id="kontraktseksempel" eyebrow="01 / ET DOKUMENT SOM MÅ GJENNOMGÅS" title="Samle kontraktsgrunnlaget i en PDF." alternate>
        <div className={styles.documentLayout}><div className={styles.document}><ContractMedia variant="savedPrivate" /></div>
          <div className={styles.copy}><p className={site.lead}>Samle det dere har avtalt før arbeidet begynner. Kontrakten gir kunden og bedriften en oversikt over oppdraget i ett dokument.</p>
            <ul className={styles.documentList}><li>Avtalepartene og beskrivelsen av arbeidet.</li><li>Start, estimert ferdigstillelse, pris og betaling.</li><li>Materialansvar, kontraktsvilkår og signaturfelt.</li></ul>
            <p>Jobbleder kan lage kontraktsdokumenter over flere sider. Gå gjennom arbeidsbeskrivelsen, kundetypen og vilkårene før eventuell signering, som du ordner utenfor Jobbleder. Elektronisk signering er ikke støttet.</p>
            <p className={styles.note}>Bildet viser forhåndsvisningen i appen. Nedlastbare PDF-eksempler er ikke publisert her.</p>
          </div></div>
      </Section>

      <Section id="prisstrukturer" eyebrow="02 / TRE MÅTER Å AVTALE PRISEN" title="Fastpris, timepris eller pris fra tilbud.">
        <p className={styles.intro}>Velg fastpris, timepris eller pris fra et eksisterende tilbud. Du kan oppgi priser inkludert eller ekskludert MVA. Kontroller både prisgrunnlaget og hvordan MVA er angitt før dokumentet deles.</p>
        <div className={styles.threeColumns}>{contractPricing.map(item => <article key={item.name}><p className={styles.label}>{item.name}</p><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        <ContractMedia variant="pricing" />
        <p className={styles.note}>Beløpene i skjermbildene gjelder eksemplene, ikke standardpriser.</p>
      </Section>

      <Section id="betalingsvilkar" eyebrow="03 / BETALING SOM PASSER AVTALEN" title="Avtal hvordan og når det skal faktureres." alternate>
        <div className={styles.threeColumns}>{contractPayments.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        <ContractMedia variant="payments" />
        <p className={styles.note}>I Jobbleder kan du beskrive en fremdriftsbasert betalingsplan med prosentvise delbetalinger. Planen oppretter eller sender ikke fakturaer automatisk. Avtal vilkår som passer oppdraget, og kontroller reglene for når leveransen kan faktureres.</p>
      </Section>

      <Section id="tilpass-vilkar" eyebrow="04 / DETALJENE SOM GJØR AVTALEN TYDELIG" title="Tilpass innholdet til oppdraget.">
        <div className={styles.termsLayout}><div className={styles.copy}><p className={site.lead}>Gi jobben en tydelig tittel og beskriv arbeidet i flere rader. Bruk arbeidsbeskrivelsesordboken som hjelp, og legg til en detaljert beskrivelse når omfanget trenger mer plass. Avsnitt, enkle overskrifter og lister kan følge med i PDF-en.</p>
          <p>Skill mellom estimert ferdigstillelse og en avtalt kontraktsfrist. Avklar materialansvar, betalingsfrist og hva som ikke inngår. Jobbleder foreslår kontraktstype, og du kan velge privatkunde eller bedrift manuelt. De separate B2C- og B2B-standardvilkårene må fortsatt gjennomgås for den konkrete avtalen.</p>
          <div className={styles.materials}><h3>Hvem leverer materialene?</h3><ContractMedia variant="materials" /></div>
          <ResourceLink href="/instruksjoner#opprett-kontrakt">Se veiledning for kontraktoppretting</ResourceLink></div>
          <div><h3 className={styles.mediaTitle}>Arbeidsrader og utfyllende beskrivelse.</h3><ContractMedia variant="work" /><h3 className={styles.mediaTitle}>Privatkunde eller bedrift.</h3><ContractMedia variant="business" /></div></div>
      </Section>

      <Section id="tilbud-til-kontrakt" eyebrow="05 / BYGG VIDERE PÅ ET TILBUD" title="Fra prisforslag til en egen kontrakt." alternate>
        <div className={styles.intro}><p className={site.lead}>Har du allerede laget et tilbud? Bruk det som grunnlag for kontrakten og ta opplysningene videre.</p><p>Kontrakten kan redigeres selvstendig, og PDF-en kan genereres på nytt. Tilpass innholdet til det dere har avtalt. Endring av dokumentet betyr ikke at kunden har godkjent endringen. Du kan også opprette kontrakten uten et tilbud.</p><ResourceLink href="/tilbud-mal">Se hvordan du lager tilbud</ResourceLink></div>
        <ContractMedia variant="offerAction" />
        <ContractMedia variant="offer" />
      </Section>

      <Section id="kontrakt-til-faktura" eyebrow="06 / TA AVTALEN VIDERE" title="Fra kontrakt til faktura.">
        <div className={styles.intro}><p className={site.lead}>Bruk kontrakten som grunnlag for en ny faktura. Kontroller og tilpass fakturalinjene før du genererer PDF.</p><p>Jobbleder beregner netto, MVA og totalbeløp ut fra fakturalinjene.</p><ResourceLink href="/fakturaprogram-gratis">Utforsk fakturaprogrammet</ResourceLink></div>
        <ContractMedia variant="invoice" />
        <p className={styles.note}>Du deler PDF-en med kunden selv.</p>
      </Section>

      <Section id="free-og-premium" eyebrow="ALLE KONTRAKTFUNKSJONENE ER MED I FREE" title="Gratis kontrakter. Egen profil med Premium." alternate>
        <p className={styles.intro}>Oppretting, redigering, pris- og betalingsvalg, PDF-eksport og dokumentkonvertering er tilgjengelig i Free. Premium gir deg kontroll over PDF-enes profil.</p>
        <table className={styles.planTable}><caption className={site.srOnly}>Kontrakt i Free og Premium</caption><thead><tr><th scope="col">Dette får du</th><th scope="col">Free</th><th scope="col">Premium</th></tr></thead><tbody><tr><th scope="row">Opprett og rediger</th><td>Inkludert</td><td>Inkludert</td></tr><tr><th scope="row">Pris og betaling</th><td>Inkludert</td><td>Inkludert</td></tr><tr><th scope="row">PDF og dokumentflyt</th><td>Inkludert</td><td>Inkludert</td></tr><tr><th scope="row">PDF-profil</th><td>Jobbleder-merking</td><td>Fjern Jobbleder-merking og bruk egen firmalogo</td></tr></tbody></table>
      </Section>

      <Section id="om-kontrakter" eyebrow="PRAKTISKE RAMMER FØR ARBEIDET STARTER" title="En tydelig avtale begynner med detaljene.">
        <div className={styles.education}>{contractSeoPage.sections!.map(section => <article key={section.heading}><h3>{section.heading}</h3>{section.paragraphs.map(p => <p key={p}>{p}</p>)}{section.links?.map(link => <p key={link.href}><ResourceLink href={link.href}>{link.label}</ResourceLink></p>)}</article>)}</div>
        <nav className={styles.resources} aria-label="Mer om kontrakter"><h3>Maler og veiledning om kontrakt</h3><ul>{seoPages.filter(page => page.topic === "kontrakt").map(page => <li key={page.slug}><Link href={`/${page.slug}`} aria-current={page.slug === "kontrakt-mal" ? "page" : undefined}>{page.h1}</Link></li>)}</ul></nav>
      </Section>

      <Section id="sporsmal" eyebrow="FØR DU OPPRETTER KONTRAKTEN" title="Ofte stilte spørsmål." alternate>
        <div className={styles.faqs}>{contractFaqs.map(({ q, a }) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div>
        <nav className={styles.resources} aria-label="Relaterte dokumenter"><h3>Se også</h3><ul>{related.map(slug => { const page = seoPages.find(p => p.slug === slug)!; return <li key={slug}><Link href={`/${slug}`}>{page.h1}</Link></li> })}<li><Link href="/instruksjoner#kontrakt-til-faktura">Veiledning for kontrakt til faktura</Link></li></ul></nav>
      </Section>

      <section className={`${site.section} ${site.final}`} aria-labelledby="contract-start-title"><SectionContainer><p className={site.eyebrow}>START MED DET NESTE OPPDRAGET</p><h2 id="contract-start-title" className={site.title}>Forbered kontrakten før arbeidet starter.</h2><p>Samle arbeidsbeskrivelse, pris og vilkår i Jobbleder. Gjennomgå dokumentet og få juridisk veiledning ved behov før dere signerer.</p><ApplicationCTA>Opprett en kontrakt</ApplicationCTA><p className={site.registration}>{REGISTRATION_GUIDANCE}</p></SectionContainer></section>
    </main><SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
  </div>
}
