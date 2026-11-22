import Link from "next/link"
import homeMedia from "@/content/homeProductMedia.json"
import invoiceMedia from "@/content/invoiceProductMedia.json"
import { SiteHeader, SiteFooter } from "@/components/site/SiteChrome"
import { ApplicationCTA, FeatureIntroduction, ProductMedia, REGISTRATION_GUIDANCE, ResourceLink, SectionContainer } from "@/components/site/Primitives"
import site from "@/components/site/site.module.css"
import styles from "./home.module.css"

const resourceGroups = [
  { title: "Faktura", links: [["/fakturaprogram-gratis", "Gratis fakturaprogram"], ["/lage-faktura", "Slik lager du faktura"], ["/faktura-eksempel", "Fakturaeksempel"], ["/faktura-krav", "Hva skal en faktura inneholde?"]] },
  { title: "Timeliste", links: [["/timeliste-mal", "Digital timeliste og mal"], ["/timeliste-mal-pdf", "Last ned timeliste som PDF"], ["/timeliste-uke", "Timeliste uke for uke"], ["/timeliste-ansatt", "Timeliste for ansatte"], ["/timeliste-prosjekt", "Før timer per prosjekt"]] },
  { title: "Tilbud", links: [["/tilbud-mal", "Lag tilbud med en fast mal"], ["/lage-tilbud", "Slik lager du tilbud"], ["/tilbud-eksempel", "Eksempel på tilbud"], ["/hvordan-folge-opp-tilbud", "Følg opp et sendt tilbud"]] },
  { title: "Kontrakt", links: [["/kontrakt-mal", "Lag kontrakt i Jobbleder"], ["/kontrakt-handverker", "Kontrakt for håndverkere"], ["/kontrakt-eksempel", "Eksempel på kontrakt"], ["/hva-skal-en-kontrakt-inneholde", "Hva bør kontrakten inneholde?"]] },
]

const faqs = [
  { q: "Hva er Jobbleder?", a: "Jobbleder er en nettbasert løsning for håndverkere og små bedrifter. Du kan samle kunder og prosjekter, registrere arbeid og opprette dokumenter til oppdragene dine." },
  { q: "Kan jeg starte gratis?", a: "Ja. Oppretting av dokumenter, PDF-eksport og de støttede dokumentkonverteringene er tilgjengelige i Free. Free-PDF-er har Jobbleder-vannmerke. Premium fjerner vannmerket og gir mulighet for egen firmalogo." },
  { q: "Hvilke dokumenter kan jeg opprette?", a: "Du kan opprette timelister, tilbud, kontrakter og fakturaer. Dokumentene kan opprettes selvstendig eller brukes videre i de støttede dokumentflytene." },
  { q: "Må jeg installere noe?", a: "Nei. Jobbleder brukes i nettleseren på mobil og datamaskin. Du trenger ikke å installere en egen app." },
]

const original = (image: { original: { file: string } }) => image.original.file.replace(/^public/, "")

export default function Homepage() {
  const images = homeMedia.assets
  const productSizes = "(max-width: 767px) calc(100vw - 48px), (max-width: 1023px) 608px, (max-width: 1199px) calc(47.5vw - 54px), 517px"
  return <div className={site.surface}>
    <a href="#hovedinnhold" className={site.skip}>Hopp til innhold</a>
    <SiteHeader />
    <main id="hovedinnhold" tabIndex={-1}>
      <section className={styles.hero} aria-labelledby="home-title">
        <SectionContainer>
          <div className={styles.heroCopy}>
            <p className={site.eyebrow}>FOR HÅNDVERKERE OG SMÅ BEDRIFTER</p>
            <h1 id="home-title" className={styles.headline}>Kunder, arbeid og dokumenter. <span>Samlet i Jobbleder.</span></h1>
            <p className={site.lead + " " + styles.intro}>Samle kunder, prosjekter, timelister, tilbud, kontrakter og fakturaer på ett sted. Jobbleder gjør det enklere å holde oversikt over arbeidet og dokumentene.</p>
            <div className={styles.heroActions}><ApplicationCTA>Start gratis</ApplicationCTA><a href="#workflow-title" className={site.textLink}>Se hvordan det fungerer <span aria-hidden="true">↓</span></a></div>
            <p className={site.registration + " " + styles.heroGuidance}>{REGISTRATION_GUIDANCE}</p>
          </div>
          <div className={styles.overview}><ProductMedia image={{ ...images.overview, alt: "Oversikt i Jobbleder med hurtigvalg for registreringer og dokumenter" }} mobileImage={{ ...images.overviewMobile, alt: "Oversikt i Jobbleder med hurtigvalg for registreringer og dokumenter" }} originalSrc={original(images.overview)} caption="Eksempel på oversikten i Jobbleder. På mobil vises hurtigvalg for registrering og faktura." sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1087px) calc(100vw - 48px), 1040px" priority /></div>
        </SectionContainer>
      </section>

      <div className={styles.productJump} id="produkter"><SectionContainer><nav aria-label="Utforsk de fire dokumenttypene"><a href="#faktura">Faktura<span aria-hidden="true">01 ↓</span></a><a href="#timeliste">Timeliste<span aria-hidden="true">02 ↓</span></a><a href="#tilbud">Tilbud<span aria-hidden="true">03 ↓</span></a><a href="#kontrakt">Kontrakt<span aria-hidden="true">04 ↓</span></a></nav></SectionContainer></div>

        <div className={styles.products}>
          <FeatureIntroduction id="faktura" number="01" name="FAKTURA" title="Fra utført arbeid til en ryddig faktura."
            links={<><ResourceLink href="/fakturaprogram-gratis">Se fakturaprogrammet</ResourceLink><ResourceLink href="/faktura-eksempel">Om fakturaeksempler</ResourceLink></>}
            media={<div className={styles.invoiceMedia}><ProductMedia image={{ ...invoiceMedia.assets.free, alt: "Faktura fra Jobbleder Free med kunde, fakturalinjer, MVA og totalsum" }} originalSrc={original(invoiceMedia.assets.free)} caption="Faktura fra Free med Jobbleder-vannmerke. Åpne originalen for å lese hele dokumentet." sizes="(max-width: 447px) calc(100vw - 48px), 400px" /></div>}
            detail={<><h3>Kontroller grunnlaget før du deler.</h3><dl><div><dt>Kunde</dt><dd>Velg kunden dokumentet gjelder.</dd></div><div><dt>Linjer</dt><dd>Se gjennom arbeid, antall, priser og MVA.</dd></div><div><dt>PDF</dt><dd>Last ned fakturaen og del den selv.</dd></div></dl></>}>
            <p className={site.lead}>Legg inn kunde og arbeidsbeskrivelse, pris, antall og MVA. Kontroller totalsummen og last ned fakturaen som PDF.</p>
            <p>Opprett fakturaen selv, eller bruk en timeliste, et tilbud eller en kontrakt som grunnlag.</p>
          </FeatureIntroduction>

          <FeatureIntroduction id="timeliste" number="02" name="TIMELISTE" title="Få arbeidsdagene inn i oversikten."
            links={<><ResourceLink href="/timeliste-mal">Utforsk timelister</ResourceLink><ResourceLink href="/timeliste-mal-pdf">Timeliste som PDF</ResourceLink></>}
            media={<ProductMedia image={{ ...images.timelist, alt: "Timeliste med tre arbeidsdager, ekstraarbeid, oppsummering og dokumenthandlinger" }} originalSrc={original(images.timelist)} sizes={productSizes} caption="Timeliste med arbeidsdager, markert ekstraarbeid og oppsummering." />}
            detail={<><h3>Arbeidet, dag for dag.</h3><dl><div><dt>Prosjekt</dt><dd>Knytt timelisten til oppdraget du jobber med.</dd></div><div><dt>Arbeider</dt><dd>Legg inn navn og registrer arbeidsdagene.</dd></div><div><dt>PDF</dt><dd>Lagre en oversikt som kan deles videre.</dd></div></dl></>}>
            <p className={site.lead}>Registrer dato, arbeidsbeskrivelse, inn- og uttid og pauser. Samle dagene i en timeliste for prosjektet, og last ned som PDF.</p>
            <p>Velg og importer lagrede registreringer, eller legg inn dagene direkte. Du finner også en tom PDF-mal når du vil føre timer manuelt.</p>
          </FeatureIntroduction>

          <FeatureIntroduction id="tilbud" number="03" name="TILBUD" title="Gjør det tydelig hva du tilbyr."
            links={<><ResourceLink href="/tilbud-mal">Utforsk tilbud</ResourceLink><ResourceLink href="/lage-tilbud">Slik lager du tilbud</ResourceLink></>}
            media={<ProductMedia image={{ ...images.offer, alt: "Tilbud med kundeopplysninger, gyldighetsdato, parkettlegging, MVA og totalsum" }} originalSrc={original(images.offer)} sizes={productSizes} caption="Utsnitt av et tilbudsdokument fra Jobbleder." />}
            detail={<><h3>Et klart grunnlag for kundens valg.</h3><dl><div><dt>Arbeid</dt><dd>Beskriv hva du skal levere til kunden.</dd></div><div><dt>Pris</dt><dd>Legg inn priser, antall og MVA.</dd></div><div><dt>Gyldighet</dt><dd>Sett gyldighetstid og generer tilbudet som PDF.</dd></div></dl></>}>
            <p className={site.lead}>Forbered et kundetilbud med arbeidsbeskrivelse og priser samlet i ett dokument. Se gjennom innholdet og last ned tilbudet som PDF.</p>
            <p>Når du skal videre med oppdraget, kan tilbudet brukes som grunnlag for kontrakt eller faktura.</p>
          </FeatureIntroduction>

          <FeatureIntroduction id="kontrakt" number="04" name="KONTRAKT" title="Samle det dere har avtalt."
            links={<><ResourceLink href="/kontrakt-mal">Utforsk kontrakter</ResourceLink><ResourceLink href="/hva-skal-en-kontrakt-inneholde">Hva bør være med?</ResourceLink></>}
            media={<div className={styles.contractMedia}><ProductMedia image={{ ...images.contractDocument, alt: "Kontrakt fra Jobbleder med avtalepartene, arbeid, pris, vilkår og felt for manuelle signaturer" }} originalSrc={original(images.contractDocument)} sizes={productSizes} caption="Eksempel på en kontrakt generert i Jobbleder. Last ned dokumentet, skriv det ut og signer manuelt." /></div>}
            detail={<><h3>Arbeid, pris og vilkår på samme sted.</h3><dl><div><dt>Omfang</dt><dd>Beskriv arbeidet og avtalens tidsramme.</dd></div><div><dt>Betaling</dt><dd>Legg inn prisgrunnlag og betalingsvilkår.</dd></div><div><dt>Dokument</dt><dd>Kontroller innholdet og generer kontrakten som PDF.</dd></div></dl></>}>
            <p className={site.lead}>Opprett et kontraktsdokument med arbeidsbeskrivelse, pris og vilkår. Bruk et tilbud som utgangspunkt, eller opprett kontrakten selv.</p>
            <p>Se gjennom opplysningene før du lager PDF-en, slik at dokumentet beskriver det dere har avtalt.</p>
            <p>Velg Fast, Time eller Tilbud som prisstruktur. Kontrakten skrives ut og signeres manuelt.</p>
          </FeatureIntroduction>
        </div>


      <section className={styles.section} aria-labelledby="workflow-title">
        <SectionContainer>
          <div className={styles.sectionHeader}><p className={site.eyebrow}>DOKUMENTER SOM HENGER SAMMEN</p><h2 id="workflow-title" className={site.title}>Bruk opplysningene videre.</h2><p>Fra tilbud til avtale, eller fra registrerte arbeidstimer til timeliste. Bruk dokumentene som grunnlag når du skal lage faktura.</p></div>
          <div className={styles.workflowMedia}><ProductMedia image={{ ...images.documentFlow, alt: "Fire støttede dokumentflyter i Jobbleder, forklart som tekst under bildet" }} mobileImage={{ ...images.documentFlowMobile, alt: "Fire støttede dokumentflyter i Jobbleder, forklart som tekst under bildet" }} tabletImage={{ ...images.documentFlowCompact, alt: "Fire støttede dokumentflyter i Jobbleder, forklart som tekst under bildet" }} originalSrc={original(images.documentFlow)} caption="Velg arbeidsflyten som passer oppdraget." /></div>
          <details className={styles.workflowText} open><summary>Dokumentflytene forklart som tekst</summary><ol>
            <li>Registreringer → Timeliste → Faktura. <Link href="/instruksjoner#importer-arbeidsokter-til-timeliste">Velg og importer registreringer til timelisten</Link>.</li>
            <li>Timeliste → Faktura. <Link href="/instruksjoner#timeliste-til-faktura">Bruk en kontrollert timeliste som fakturagrunnlag</Link>.</li>
            <li>Tilbud → Kontrakt → Faktura. <Link href="/instruksjoner#lag-kontrakt-fra-tilbud">Opprett kontrakt fra tilbudet</Link>, og <Link href="/instruksjoner#kontrakt-til-faktura">bruk kontrakten som fakturagrunnlag</Link>.</li>
            <li>Tilbud → Faktura. <Link href="/instruksjoner#tilbud-til-faktura">Opprett faktura direkte fra tilbudet</Link>.</li>
          </ol></details>
          <p className={styles.workflowNote}>Alle fire flytene er med i Free. Du starter konverteringen og kontrollerer det nye dokumentet selv. Last ned PDF-en og del den med kunden.</p>
          <ResourceLink href="/instruksjoner#dokumenter">Se dokumentveiledningene</ResourceLink>
        </SectionContainer>
      </section>

      <section className={styles.section} aria-labelledby="customers-title">
        <SectionContainer><div className={styles.management}>
          <div className={styles.sectionHeader}><p className={site.eyebrow}>GRUNNLAGET FOR OPPDRAGET</p><h2 id="customers-title" className={site.title}>Kunder og prosjekter på ett sted.</h2><p>Knytt dokumentene til riktig kunde og prosjekt. Finn igjen opplysninger og lagrede dokumenter når du jobber videre med oppdraget.</p></div>
          <div className={styles.managementDetails}>
            <article><h3>Kunden bak dokumentet</h3><p>Samle kundeopplysningene og bruk dem når du oppretter dokumenter.</p><ResourceLink href="/instruksjoner#hvordan-kunder-fungerer">Slik fungerer kunder</ResourceLink></article>
            <article><h3>Arbeidet på prosjektet</h3><p>Knytt timelister og dokumenter til oppdraget de gjelder.</p><ResourceLink href="/instruksjoner#hvordan-prosjekter-fungerer">Slik fungerer prosjekter</ResourceLink></article>
          </div>
        </div></SectionContainer>
      </section>

      <section className={`${styles.section} ${styles.alternate}`} aria-labelledby="plans-title">
        <SectionContainer><div className={styles.plans}>
          <div className={styles.sectionHeader}><p className={site.eyebrow}>ARBEIDSFLYTEN ER MED I FREE</p><h2 id="plans-title" className={site.title}>Kom i gang gratis. Velg egen profil med Premium.</h2><p>Opprett dokumenter, last ned PDF og bruk opplysningene videre. Premium gir deg flere valg for PDF-enes profil.</p></div>
          <table className={styles.planTable}><caption className={site.srOnly}>Dokumentfunksjoner og PDF-profil i Free og Premium</caption><thead><tr><th scope="col">Dette får du</th><th scope="col">Free</th><th scope="col">Premium</th></tr></thead><tbody>
            <tr><th scope="row">Dokumenter og PDF</th><td>Inkludert</td><td>Inkludert</td></tr>
            <tr><th scope="row">Dokumentflyt</th><td>Inkludert</td><td>Inkludert</td></tr>
            <tr><th scope="row">PDF-profil</th><td>Jobbleder-vannmerke</td><td>Uten vannmerke, med valgfri firmalogo</td></tr>
          </tbody></table>
        </div></SectionContainer>
      </section>

      <section className={styles.section} aria-labelledby="getting-started-title">
        <SectionContainer>
          <div className={styles.sectionHeader}><p className={site.eyebrow}>KOM I GANG</p><h2 id="getting-started-title" className={site.title}>Start med ditt første dokument.</h2></div>
          <ol className={styles.steps}>
            <li><span aria-hidden="true">01</span><div><h3>Åpne Jobbleder</h3><p>Bruk appen rett i nettleseren.</p></div></li>
            <li><span aria-hidden="true">02</span><div><h3>Logg inn eller registrer deg</h3><p>Velg «Create account» hvis du skal opprette en konto.</p></div></li>
            <li><span aria-hidden="true">03</span><div><h3>Legg inn firmaopplysningene</h3><p>Kontroller opplysningene til dokumentene dine.</p></div></li>
            <li><span aria-hidden="true">04</span><div><h3>Opprett og kontroller</h3><p>Velg dokumenttype og se gjennom innholdet før du lager PDF.</p></div></li>
          </ol>
          <ResourceLink href="/instruksjoner">Følg instruksjonene i ditt tempo</ResourceLink>
        </SectionContainer>
      </section>

      <section className={`${styles.section} ${styles.alternate}`} aria-labelledby="faq-title">
        <SectionContainer><div className={styles.helpGrid}>
          <div><div className={styles.sectionHeader}><p className={site.eyebrow}>GODT Å VITE</p><h2 id="faq-title" className={site.title}>Spørsmål før du starter?</h2></div>
            <div className={styles.faqs}>{faqs.map(({ q, a }) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div>
          </div>
          <div><div className={styles.sectionHeader}><p className={site.eyebrow}>MALER OG VEILEDNING</p><h2 id="resources-title" className={site.title}>Finn riktig guide.</h2></div>
            <div className={styles.resources}>{resourceGroups.map(group => <details key={group.title}><summary>{group.title}<span>{group.links.length} guider <span aria-hidden="true">⌄</span></span></summary><nav aria-label={`Guider om ${group.title.toLowerCase()}`}><ul>{group.links.map(([href, label]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul></nav></details>)}</div>
            <div className={styles.contextLinks}><ResourceLink href="/blogg">Flere tips på bloggen</ResourceLink><ResourceLink href="/instruksjoner">Alle instruksjoner</ResourceLink></div>
          </div>
        </div></SectionContainer>
      </section>

      <section className={`${styles.section} ${site.final}`} aria-labelledby="start-title"><SectionContainer><p className={site.eyebrow}>DITT NESTE OPPDRAG</p><h2 id="start-title" className={site.title}>Få dokumentarbeidet på plass.</h2><p>Start med dokumentet du trenger, og bygg videre når oppdraget går fremover.</p><ApplicationCTA>Start gratis</ApplicationCTA><p className={site.registration}>{REGISTRATION_GUIDANCE}</p></SectionContainer></section>
    </main>
    <SiteFooter />
  </div>
}
