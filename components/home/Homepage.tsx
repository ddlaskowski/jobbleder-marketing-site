import Link from "next/link"
import manifest from "@/content/invoiceProductMedia.json"
import homeMedia from "@/content/homeProductMedia.json"
import { SiteHeader, SiteFooter } from "@/components/site/SiteChrome"
import { ApplicationCTA, FeatureIntroduction, FinalCTA, ProductMedia, REGISTRATION_GUIDANCE, ResourceLink, SectionContainer } from "@/components/site/Primitives"
import site from "@/components/site/site.module.css"
import styles from "./home.module.css"

const resourceGroups = [
  { title: "Faktura", links: [["/fakturaprogram-gratis", "Gratis fakturaprogram"], ["/lage-faktura", "Slik lager du faktura"], ["/faktura-eksempel", "Fakturaeksempel"], ["/faktura-krav", "Hva skal en faktura inneholde?"]] },
  { title: "Timeliste", links: [["/timeliste-mal", "Digital timeliste og mal"], ["/timeliste-mal-pdf", "Last ned timeliste som PDF"], ["/timeliste-uke", "Timeliste uke for uke"], ["/timeliste-ansatt", "Timeliste for ansatte"], ["/timeliste-prosjekt", "Før timer per prosjekt"]] },
  { title: "Tilbud", links: [["/tilbud-mal", "Lag tilbud med en fast mal"], ["/lage-tilbud", "Slik lager du tilbud"], ["/tilbud-eksempel", "Eksempel på tilbud"], ["/hvordan-folge-opp-tilbud", "Følg opp et sendt tilbud"]] },
  { title: "Kontrakt", links: [["/kontrakt-mal", "Lag kontrakt i Jobbleder"], ["/kontrakt-handverker", "Kontrakt for håndverkere"], ["/kontrakt-eksempel", "Eksempel på kontrakt"], ["/hva-skal-en-kontrakt-inneholde", "Hva bør kontrakten inneholde?"]] },
]

export default function Homepage() {
  const invoice = manifest.assets.premiumLogo
  const images = homeMedia.assets
  const productSizes = "(max-width: 767px) calc(100vw - 48px), (max-width: 1199px) calc(47.5vw - 54px), 517px"
  const source = (asset: { original: { file: string } }) => asset.original.file.replace(/^public/, "")
  return (
    <div className={site.surface}>
      <a href="#hovedinnhold" className={site.skip}>Hopp til innhold</a>
      <SiteHeader />
      <main id="hovedinnhold" tabIndex={-1}>
        <section className={styles.hero} aria-labelledby="home-title">
          <SectionContainer>
            <div className={styles.heroCopy}>
              <p className={site.eyebrow}>FOR HÅNDVERKERE OG SMÅ BEDRIFTER</p>
              <h1 id="home-title" className={styles.headline}>Jobben din.<br /><span>Dokumentene på plass.</span></h1>
              <p className={`${site.lead} ${styles.intro}`}>Lag faktura, før timer og opprett tilbud og kontrakter. Jobbleder samler dokumentarbeidet i ett verktøy, rett i nettleseren.</p>
              <div className={styles.heroActions}><ApplicationCTA /><a href="#produkter" className={site.textLink}>Utforsk produktene <span aria-hidden="true">↓</span></a></div>
              <p className={`${site.registration} ${styles.heroGuidance}`}>{REGISTRATION_GUIDANCE}</p>
            </div>
            <div className={styles.overview}><ProductMedia
              image={{ ...images.overview, alt: "Oversikt i Jobbleder med hurtigvalg for registreringer og dokumenter" }}
              mobileImage={{ ...images.overviewMobile, alt: "Hurtigvalg for arbeidsregistrering og faktura i Jobbleder" }}
              originalSrc={source(images.overview)} caption="Produktoversikt i Jobbleder. På mobil vises hurtigvalg for registrering og faktura." priority /></div>
          </SectionContainer>
        </section>

        <div className={styles.productJump} id="produkter">
          <SectionContainer><nav aria-label="Utforsk produktene"><Link href="#faktura">Faktura <span aria-hidden="true">01 ↓</span></Link><Link href="#timeliste">Timeliste <span aria-hidden="true">02 ↓</span></Link><Link href="#tilbud">Tilbud <span aria-hidden="true">03 ↓</span></Link><Link href="#kontrakt">Kontrakt <span aria-hidden="true">04 ↓</span></Link></nav></SectionContainer>
        </div>

        <div className={styles.products}>
          <FeatureIntroduction id="faktura" number="01" name="FAKTURA" title="Fra utført arbeid til en ryddig faktura."
            links={<><ResourceLink href="/fakturaprogram-gratis">Se fakturaprogrammet</ResourceLink><ResourceLink href="/faktura-eksempel">Om fakturaeksempler</ResourceLink></>}
            media={invoice ? <ProductMedia image={{ src: invoice.src, width: invoice.width, height: invoice.height, alt: "Faktura fra Jobbleder med kundedetaljer, MVA, totalsum og egen firmalogo" }} originalSrc={source(invoice)} caption="Premium-faktura med egen firmalogo." document /> : undefined}>
            <p className={site.lead}>Legg inn kunde og arbeidsbeskrivelse, pris, antall og MVA. Kontroller totalsummen og last ned fakturaen som PDF.</p>
            <p className={styles.productNote}>Gratisversjonen har ubegrenset fakturering og Jobbleder-vannmerke på PDF-en. Med Premium velger du egen firmalogo eller PDF uten grafisk profil.</p>
          </FeatureIntroduction>

          <FeatureIntroduction id="timeliste" number="02" name="TIMELISTE" title="Få arbeidsdagene inn i oversikten."
            links={<><ResourceLink href="/timeliste-mal">Utforsk timelister</ResourceLink><ResourceLink href="/timeliste-mal-pdf">Timeliste som PDF</ResourceLink></>}
            media={<ProductMedia image={{ ...images.timelist, alt: "Timeliste med tre arbeidsdager, ekstraarbeid, oppsummering og dokumenthandlinger" }} mobileImage={{ ...images.timelistMobile, alt: "Arbeidsdager i en timeliste med markert ekstraarbeid" }} compact originalSrc={source(images.timelist)} sizes={productSizes} caption="Arbeidsdager med markert ekstraarbeid. Hele visningen har oppsummering og dokumenthandlinger." />}
            detail={<><h3>Arbeidet, dag for dag.</h3><dl><div><dt>Prosjekt</dt><dd>Knytt timelisten til oppdraget du jobber med.</dd></div><div><dt>Arbeider</dt><dd>Legg inn navn og registrer arbeidsdagene.</dd></div><div><dt>PDF</dt><dd>Lagre en oversikt som kan deles videre.</dd></div></dl></>}>
            <p className={site.lead}>Registrer dato, arbeidsbeskrivelse, inn- og uttid og pauser. Samle dagene i en timeliste for prosjektet, og last ned som PDF.</p>
            <p>Bruk en digital timeliste i Jobbleder, eller finn en tom PDF-mal når du vil føre timer manuelt.</p>
          </FeatureIntroduction>

          <FeatureIntroduction id="tilbud" number="03" name="TILBUD" title="Gjør det tydelig hva du tilbyr."
            links={<><ResourceLink href="/tilbud-mal">Utforsk tilbud</ResourceLink><ResourceLink href="/lage-tilbud">Slik lager du tilbud</ResourceLink></>}
            media={<ProductMedia image={{ ...images.offer, alt: "Tilbud med kundeopplysninger, gyldighetsdato, parkettlegging, MVA og totalsum" }} originalSrc={source(images.offer)} sizes={productSizes} caption="Utsnitt av et tilbudsdokument fra Jobbleder." />}
            detail={<><h3>Et klart grunnlag for kundens valg.</h3><dl><div><dt>Arbeid</dt><dd>Beskriv hva du skal levere til kunden.</dd></div><div><dt>Pris</dt><dd>Legg inn priser, antall og MVA.</dd></div><div><dt>Gyldighet</dt><dd>Sett gyldighetstid og generer tilbudet som PDF.</dd></div></dl></>}>
            <p className={site.lead}>Forbered et kundetilbud med arbeidsbeskrivelse og priser samlet i ett dokument. Se gjennom innholdet og last ned tilbudet som PDF.</p>
            <p>Når du skal videre med oppdraget, kan tilbudet brukes som grunnlag for kontrakt eller faktura.</p>
          </FeatureIntroduction>

          <FeatureIntroduction id="kontrakt" number="04" name="KONTRAKT" title="Samle det dere har avtalt."
            links={<><ResourceLink href="/kontrakt-mal">Utforsk kontrakter</ResourceLink><ResourceLink href="/hva-skal-en-kontrakt-inneholde">Hva bør være med?</ResourceLink></>}
            media={<div className={styles.contractMedia}><ProductMedia image={{ ...images.contractDocument, alt: "Kontrakt fra Jobbleder med avtalepartene, arbeid, pris, vilkår og felt for manuelle signaturer" }} originalSrc={source(images.contractDocument)} sizes={productSizes} caption="Eksempel på en kontrakt generert i Jobbleder. Last ned dokumentet, skriv det ut og signer manuelt." /></div>}
            detail={<><h3>Arbeid, pris og vilkår på samme sted.</h3><dl><div><dt>Omfang</dt><dd>Beskriv arbeidet og avtalens tidsramme.</dd></div><div><dt>Betaling</dt><dd>Legg inn prisgrunnlag og betalingsvilkår.</dd></div><div><dt>Dokument</dt><dd>Kontroller innholdet og generer kontrakten som PDF.</dd></div></dl></>}>
            <p className={site.lead}>Opprett et kontraktsdokument med arbeidsbeskrivelse, pris og vilkår. Bruk et tilbud som utgangspunkt, eller opprett kontrakten selv.</p>
            <p>Se gjennom opplysningene før du lager PDF-en, slik at dokumentet beskriver det dere har avtalt.</p>
            <p>Velg Fast, Time eller Tilbud som prisstruktur. Kontrakten skrives ut og signeres manuelt.</p>
          </FeatureIntroduction>
        </div>

        <section className={site.section} aria-labelledby="workflow-title">
          <SectionContainer>
            <div className={styles.sectionHeader}><p className={site.eyebrow}>DOKUMENTER SOM HENGER SAMMEN</p><h2 id="workflow-title" className={site.title}>Bygg videre på arbeidet du har gjort.</h2><p>Start med dokumentet du trenger. Når oppdraget går videre, kan du bruke eksisterende opplysninger som grunnlag.</p></div>
            <div className={styles.workflowMedia}>
              <ProductMedia image={{ ...images.documentFlow, alt: "Fire dokumentflyter fra registreringer, timelister og tilbud til faktura" }} mobileImage={{ ...images.documentFlowMobile, alt: "Fire dokumentflyter fra registreringer, timelister og tilbud til faktura" }} tabletImage={{ ...images.documentFlowCompact, alt: "Fire dokumentflyter fra registreringer, timelister og tilbud til faktura" }} originalSrc={source(images.documentFlow)} caption="Velg veien som passer oppdraget. Alle fire flytene er med også på mindre skjermer." />
            </div>
            <details className={styles.workflowText}><summary>Les dokumentflytene som tekst</summary><ol>
              <li>Registreringer til timeliste, deretter til faktura.</li>
              <li>Timeliste til faktura.</li>
              <li>Tilbud til kontrakt, deretter til faktura.</li>
              <li>Tilbud til faktura.</li>
            </ol></details>
            <p className={styles.workflowFootnote}>Alle fire arbeidsflytene er tilgjengelige i gratisversjonen. Du trenger ikke følge én bestemt rekkefølge. Velg arbeidsflyten som passer oppdraget.</p>
            <ResourceLink href="/instruksjoner#dokumenter">Se dokumentflyten i instruksjonene</ResourceLink>
          </SectionContainer>
        </section>

        <section className={`${site.section} ${styles.onboarding}`} aria-labelledby="getting-started-title">
          <SectionContainer>
            <div className={styles.sectionHeader}><p className={site.eyebrow}>KOM I GANG</p><h2 id="getting-started-title" className={site.title}>Fra innlogging til ditt første dokument.</h2></div>
            <ol className={styles.steps}>
              <li><span className={styles.stepNumber} aria-hidden="true">01</span><h3>Åpne Jobbleder</h3><p>Alt starter i appen, rett i nettleseren.</p></li>
              <li><span className={styles.stepNumber} aria-hidden="true">02</span><h3>Registrer deg eller logg inn</h3><p>{REGISTRATION_GUIDANCE}</p></li>
              <li><span className={styles.stepNumber} aria-hidden="true">03</span><h3>Legg inn firmaopplysninger</h3><p>Fyll inn opplysningene som skal brukes i dokumentene dine.</p></li>
              <li><span className={styles.stepNumber} aria-hidden="true">04</span><h3>Opprett et dokument</h3><p>Velg faktura, timeliste, tilbud eller kontrakt, og følg stegene.</p></li>
            </ol>
            <div className={styles.onboardingLinks}><ApplicationCTA>Åpne Jobbleder</ApplicationCTA><ResourceLink href="/instruksjoner">Se instruksjonene</ResourceLink></div>
          </SectionContainer>
        </section>

        <section className={site.section} aria-labelledby="resources-title">
          <SectionContainer>
            <div className={styles.sectionHeader}><p className={site.eyebrow}>FINN DET DU TRENGER</p><h2 id="resources-title" className={site.title}>Maler, eksempler og praktiske guider.</h2><p>Velg dokumenttypen du jobber med, og gå videre til riktig ressurs.</p></div>
            <div className={styles.resourceGrid}>{resourceGroups.map(group => <nav key={group.title} className={styles.resourceGroup} aria-label={`Guider om ${group.title.toLowerCase()}`}><h3>{group.title}</h3><ul>{group.links.map(([href, label]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul></nav>)}</div>
            <div className={styles.resourceFooter}><ResourceLink href="/blogg">Les flere tips på bloggen</ResourceLink><ResourceLink href="/instruksjoner">Finn hjelp til Jobbleder</ResourceLink></div>
          </SectionContainer>
        </section>
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  )
}
