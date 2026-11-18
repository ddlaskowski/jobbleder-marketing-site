import Link from "next/link"
import type { ReactNode } from "react"
import { SiteHeader, SiteFooter } from "@/components/site/SiteChrome"
import { ApplicationCTA, ProductMedia, REGISTRATION_GUIDANCE, ResourceLink, SectionContainer } from "@/components/site/Primitives"
import { seoPages } from "@/content/seoPages"
import { timelistCategories, timelistFaqs, timelistInvoiceExample, timelistSeoPage } from "@/content/timelistProduct"
import manifest from "@/content/timelistProductMedia.json"
import site from "@/components/site/site.module.css"
import styles from "./timelistProduct.module.css"

type MediaKey = keyof typeof manifest.assets
function Media({ asset, mobile, alt, caption, priority = false }: { asset: MediaKey; mobile?: MediaKey; alt: string; caption: string; priority?: boolean }) {
  const image = manifest.assets[asset]
  return <ProductMedia image={{ ...image, alt }} mobileImage={mobile ? { ...manifest.assets[mobile], alt } : undefined}
    originalSrc={image.original.file.replace(/^public/, "")} caption={caption} priority={priority} />
}

function Section({ id, eyebrow, title, children, alternate = false }: { id: string; eyebrow: string; title: string; children: ReactNode; alternate?: boolean }) {
  return <section id={id} aria-labelledby={`${id}-title`} className={`${site.section} ${alternate ? styles.alternate : ""}`}>
    <SectionContainer><div className={styles.sectionHeading}><p className={site.eyebrow}>{eyebrow}</p><h2 id={`${id}-title`} className={site.title}>{title}</h2></div>{children}</SectionContainer>
  </section>
}

export default function TimelistProductPage() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: timelistFaqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }
  const cluster = seoPages.filter(page => page.topic === "timeliste")
  const relatedSlugs = ["tilbud-mal", "lage-tilbud", "fakturaprogram-gratis", "lage-faktura", "kontrakt-mal", "kontrakt-handverker"]
  return <div className={`${site.surface} ${styles.page}`}>
    <a href="#timelisteinnhold" className={site.skip}>Hopp til innhold</a>
    <SiteHeader />
    <main id="timelisteinnhold" tabIndex={-1}>
      <section className={styles.hero} aria-labelledby="timelist-title">
        <SectionContainer>
          <nav className={styles.breadcrumb} aria-label="Brødsmuler"><Link href="/">Hjem</Link><span aria-hidden="true">/</span><span aria-current="page">Timeliste mal</span></nav>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={site.eyebrow}>TIMELISTER FOR HÅNDVERKERE OG SMÅ BEDRIFTER</p>
              <h1 id="timelist-title" className={styles.headline}>Timeliste mal (gratis).<span>Fra arbeidstimer til ferdig faktura.</span></h1>
              <p className={site.lead}>Registrer arbeidet, samle dagene i en timeliste og bruk opplysningene videre i fakturaen. Eller lag timelisten direkte. Alt er tilgjengelig i Free.</p>
              <div className={styles.actions}><ApplicationCTA>Lag timeliste gratis</ApplicationCTA><a href="#pdf-maler" className={site.textLink}>Last ned PDF-mal <span aria-hidden="true">↓</span></a></div>
              <p className={site.registration}>{REGISTRATION_GUIDANCE}</p>
              <ol className={styles.flow} aria-label="Arbeidsflyt"><li>Registreringer</li><li>Timeliste</li><li>Faktura</li></ol>
            </div>
            <div className={styles.heroMedia}><Media asset="hero" mobile="heroMobile" alt="Arbeidsregistreringer i en timeliste med prosjekt og arbeider i Jobbleder" caption="Timeliste 264 i Jobbleder. På mobil vises et utsnitt av opprettingen. Åpne hele bildet for dokumentoversikten." priority /></div>
          </div>
        </SectionContainer>
      </section>

      <Section id="pdf-maler" eyebrow="GRATIS PDF-MALER" title="Vil du føre timene manuelt?" alternate>
        <div className={styles.downloadLayout}><p>Last ned en tom timeliste-mal for manuell utfylling, eller en ferdig datert versjon for de siste 7 dagene. Disse PDF-malene kan brukes separat fra den digitale appen.</p>
          <div className={styles.downloads}>{timelistSeoPage.downloadResources!.items.map(item => <a key={item.href} href={item.href} target="_blank" className={styles.downloadLink}>{item.label}<span aria-hidden="true">↗</span></a>)}</div>
        </div>
      </Section>

      <Section id="registreringer" eyebrow="01 / FRA ARBEID TIL OVERSIKT" title="Fra registrert arbeid til en samlet timeliste.">
        <div className={styles.registrationLayout}>
          <div className={styles.copy}><p>Registrer arbeidsdagene fortløpende. Når du skal lage timelisten, velger du registreringene du vil bruke og importerer dem til timelisteopprettingen.</p>
            <ol className={styles.steps}><li><strong>Registrer arbeidet.</strong><p>Legg inn dato, arbeidsbeskrivelse, inn- og uttid og pause. Ta med kilometer og marker ekstraarbeid ved behov.</p></li><li><strong>Velg og importer.</strong><p>Marker eksisterende registreringer og velg «Importer til timeliste». Kontroller radene i timelisten.</p></li><li><strong>Gi timene et navn.</strong><p>Skriv inn arbeidernavnet under opprettingen. Timene knyttes til dette navnet. Velg prosjekt og knytt til kunde ved behov.</p></li></ol>
            <p className={styles.note}>Du kan også opprette timelisten direkte og legge inn radene selv.</p><ResourceLink href="/instruksjoner#arbeidsokter">Se instruksjoner for arbeidsøkter</ResourceLink>
          </div>
          <Media asset="registrations" mobile="registrationsMobile" alt="To arbeidsregistreringer valgt for bruk i en timeliste" caption="Eksempel på valgte registreringer. På mobil vises selve utvalget; hele bildet viser også importknappen. Dette er et eget registreringseksempel." />
        </div>
      </Section>

      <Section id="timer-og-kilometer" eyebrow="02 / FIRE KATEGORIER" title="Timer og kilometer. Hver for seg." alternate>
        <div className={styles.categoryLayout}>
          <div className={styles.copy}><p>Før vanlige timer og kilometer, og marker rader med ekstraarbeid. Når timelisten brukes som grunnlag for en faktura, holdes alle fire kategoriene adskilt.</p>
            <dl className={styles.categories}>{timelistCategories.map(item => <div key={item.name}><dt>{item.name}<span>{item.amount}</span></dt><dd>{item.detail}</dd></div>)}</dl>
            <p className={styles.note}>Tallene er fra Timeliste 264. Ekstraarbeid markeres av deg; det er ikke automatisk beregning av overtid.</p>
          </div>
          <Media asset="form" mobile="formMobile" alt="Fire arbeidsrader med vanlige timer, ekstraarbeid og kilometer i Timeliste 264" caption="Samme timeliste, fire arbeidsrader. På mobil vises radene i et tettere utsnitt; ingen av de fire radene er fjernet." />
        </div>
      </Section>

      <Section id="timeliste-pdf" eyebrow="03 / DOKUMENTET DU KAN DELE" title="En ferdig timeliste som PDF.">
        <div className={styles.documentLayout}>
          <div className={styles.documentMedia}><Media asset="timelistPdf" alt="Timeliste-PDF for Demo med prosjekt, fire arbeidsrader og separate summer for timer og kilometer" caption="Autentisk PDF-eksempel fra Timeliste 264 med Jobbleder-merking. Bildet viser hele den leverte dokumentsiden." /></div>
          <div className={styles.copy}><p className={site.lead}>Arbeider, prosjekt, arbeidsdager og summer samlet i ett dokument. Kontroller opplysningene og last ned timelisten som PDF.</p>
            <ul className={styles.documentList}><li>Arbeidernavn, prosjekt, uke og år.</li><li>Datoer, arbeidstid, pauser, kilometer og beskrivelse.</li><li>Egne summer for vanlige timer, ekstra timer, vanlige kilometer og ekstra kilometer.</li></ul>
            <p>Eksemplet viser arbeideren Demo på prosjektet «Renovering av leilighet». Dette er en utfylt timeliste fra appen.</p><p className={styles.note}>Vil du ha en tom mal for manuell utfylling? Bruk PDF-malene øverst på siden.</p><a href="#pdf-maler" className={site.textLink}>Finn de tomme PDF-malene <span aria-hidden="true">↑</span></a>
          </div>
        </div>
      </Section>

      <Section id="timeliste-til-faktura" eyebrow="04 / BYGG VIDERE PÅ TIMENE" title="Gjør timelisten om til faktura." alternate>
        <div className={styles.conversionIntro}><p className={site.lead}>Timeliste 264 er brukt som grunnlag for Faktura 111. De fire kategoriene blir separate fakturalinjer, knyttet til arbeidernavnet Demo.</p><p>Se gjennom opplysningene og prisene før du oppretter fakturaen. Du velger selv når dokumentet skal genereres og lastes ned.</p><ResourceLink href="/fakturaprogram-gratis">Utforsk fakturaprogrammet</ResourceLink></div>
        <div className={styles.conversionMedia}><div><p className={styles.mediaLabel}>FAKTURAOPPRETTING · KILDE TIMELISTE 264</p><Media asset="invoiceForm" mobile="invoiceFormMobile" alt="Fire separate fakturalinjer fra Timeliste 264 for vanlige timer, kilometer, ekstra timer og ekstra kilometer" caption="Faktura 111 under oppretting. På mobil vises alle fire linjene; åpne hele bildet for kilde og oppsummering." /></div><div className={styles.invoiceDocument}><p className={styles.mediaLabel}>RESULTATET · FAKTURA 111</p><Media asset="invoicePdf" alt="Faktura 111 med fire linjer fra Timeliste 264 og total 28 368,75 kroner inkludert MVA" caption="Generert faktura fra samme eksempel. Dette er en dokumentvisning, ikke en automatisk utsending." /></div></div>
        <div className={styles.example}><table className={styles.exampleTable}><caption>Demonstrasjon: fire kategorier fra Timeliste 264 til Faktura 111</caption><thead><tr><th scope="col">Kategori</th><th scope="col">Antall</th><th scope="col">Enhetspris</th><th scope="col">Netto</th></tr></thead><tbody>{timelistInvoiceExample.map(row => <tr key={row.category}><th scope="row">{row.category}</th><td>{row.quantity}</td><td>{row.rate}</td><td>{row.net}</td></tr>)}</tbody></table><dl className={styles.totals}><div><dt>Netto</dt><dd>22 695,00 kr</dd></div><div><dt>MVA 25 %</dt><dd>5 673,75 kr</dd></div><div><dt>Totalt</dt><dd>28 368,75 kr</dd></div></dl><p className={styles.note}>Alle priser er i NOK. Verdiene er kun et demonstrasjonseksempel, ikke standardpriser i Jobbleder.</p></div>
      </Section>

      <Section id="free-og-premium" eyebrow="ARBEIDSFLYTEN ER MED I FREE" title="Gratis timelister. Mer kontroll med Premium.">
        <p className={styles.planIntro}>Registreringer, timelister, PDF-eksport og konvertering til faktura er tilgjengelig i Free. Premium gir deg kontroll over dokumentenes profil.</p>
        <table className={styles.planTable}><caption className={site.srOnly}>Sammenligning av Timeliste i Free og Premium</caption><thead><tr><th scope="col">Dette får du</th><th scope="col">Free</th><th scope="col">Premium</th></tr></thead><tbody><tr><th scope="row">Alle timelistefunksjoner</th><td>Inkludert</td><td>Inkludert</td></tr><tr><th scope="row">PDF og fakturakonvertering</th><td>Inkludert</td><td>Inkludert</td></tr><tr><th scope="row">Dokumentprofil</th><td>Jobbleder-merking</td><td>Fjern Jobbleder-merking og bruk egen firmalogo</td></tr></tbody></table>
      </Section>

      <Section id="om-timelister" eyebrow="MALER OG PRAKTISK VEILEDNING" title="Velg timelisten som passer arbeidet." alternate>
        <div className={styles.education}>{timelistSeoPage.sections!.map(section => <article key={section.heading}><h3>{section.heading}</h3>{section.paragraphs.map(p => <p key={p}>{p}</p>)}</article>)}</div>
        <nav className={styles.resources} aria-label="Relaterte sider om timeliste"><h3>Mer om timelister</h3><ul>{cluster.map(page => <li key={page.slug}><Link href={`/${page.slug}`} aria-current={page.slug === "timeliste-mal" ? "page" : undefined}>{page.h1}</Link></li>)}</ul></nav>
      </Section>

      <Section id="sporsmal" eyebrow="GODT Å VITE" title="Spørsmål om timelister?">
        <div className={styles.faqLayout}><div className={styles.copy}><p>Om gratis timeliste mal, PDF, registreringer og veien videre til faktura.</p><ResourceLink href="/instruksjoner">Se alle instruksjoner</ResourceLink></div><div className={styles.faqList}>{timelistFaqs.map(({ q, a }) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></div>
        <nav className={styles.resources} aria-label="Relaterte dokumenter"><h3>Flere maler og dokumenter</h3><ul>{relatedSlugs.map(slug => { const page = seoPages.find(p => p.slug === slug)!; return <li key={slug}><Link href={`/${slug}`}>{page.h1}</Link></li> })}</ul></nav>
      </Section>

      <section className={`${site.section} ${site.final} ${styles.final}`} aria-labelledby="timelist-start-title"><SectionContainer><p className={site.eyebrow}>FRA ARBEID TIL DOKUMENT</p><h2 id="timelist-start-title" className={site.title}>Samle arbeidet i en timeliste.</h2><p>Opprett en gratis konto og kom i gang med registreringer, timelister og faktura i Jobbleder.</p><div className={styles.actions}><ApplicationCTA>Start gratis med Jobbleder</ApplicationCTA><a href="#pdf-maler" className={site.textLink}>Last ned PDF-mal <span aria-hidden="true">↑</span></a></div><p className={site.registration}>{REGISTRATION_GUIDANCE}</p></SectionContainer></section>
    </main>
    <SiteFooter />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
  </div>
}
