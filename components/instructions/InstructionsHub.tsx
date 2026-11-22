import Link from "next/link"
import { SiteHeader, SiteFooter } from "@/components/site/SiteChrome"
import { ApplicationCTA, ProductMedia, REGISTRATION_GUIDANCE, ResourceLink, SectionContainer } from "@/components/site/Primitives"
import { instructionSections, type InstructionItem } from "@/content/instructionContent"
import { instructionGuides, instructionLabels, instructionSectionLabels, workflowLinks, type InstructionGuide, type InstructionMedia } from "@/content/instructionGuides"
import manifest from "@/content/instructionMedia.json"
import mobileManifest from "@/content/instructionMobileMedia.json"
import { seoPages } from "@/content/seoPages"
import InstructionAnchors from "./InstructionAnchors"
import ContractMedia from "@/components/product/contract/ContractMedia"
import site from "@/components/site/site.module.css"
import styles from "./instructions.module.css"

const assets = { ...manifest.assets, ...mobileManifest.assets }

function Media({ item, phone = false }: { item: InstructionMedia; phone?: boolean }) {
  const image = assets[item.asset]
  return <div className={phone ? styles.phoneMedia : styles.stepMedia}><ProductMedia image={{ ...image, alt: item.alt }}
    mobileImage={item.mobile ? { ...manifest.assets[item.mobile], alt: item.alt } : undefined}
    mobileOriginalSrc={item.mobile ? manifest.assets[item.mobile].original.file.replace(/^public/, "") : undefined}
    originalSrc={image.original.file.replace(/^public/, "")} caption={item.caption} document={item.document}
    sizes={phone ? "(max-width: 419px) calc(100vw - 90px), 332px" : "(max-width: 767px) calc(100vw - 88px), 960px"} /></div>
}

function Guide({ guide, title }: { guide: InstructionGuide; title: string }) {
  return <>
    {guide.before && <p className={styles.before}><strong>Start her:</strong> {guide.before}</p>}
    {guide.parts.map((part, index) => <section key={part.id ?? index} id={part.id} tabIndex={part.id ? -1 : undefined} className={styles.part} aria-labelledby={part.title ? `${part.id}-title` : undefined}>
      {part.title && <h4 id={`${part.id}-title`} tabIndex={-1}>{part.title}</h4>}
      {part.intro && <p>{part.intro}</p>}
      <ol className={styles.steps}>{part.steps.map((step, i) => <li key={step.title}>
        <span className={styles.number} aria-hidden="true">{i + 1}</span>
        <div className={styles.stepContent}><p className={styles.stepTitle}>{step.title}{step.optional && <span className={styles.optional}>Valgfritt</span>}</p><p>{step.text}</p>
          {step.mobileExample && <div className={styles.stepMedia}><details className={styles.mobileExample}>
            <summary>Se på mobil: {step.mobileExample.title}</summary>
            <p>{step.mobileExample.description}</p>
            <div className={styles.phoneGallery}>{step.mobileExample.images.map(item => <Media key={item.asset} item={item} phone />)}</div>
          </details></div>}
          {step.media && <Media item={step.media} />}
          {step.contractVisual && <ContractMedia variant={step.contractVisual} omitOnMobile />}
        </div>
      </li>)}</ol>
      {part.note && <p className={styles.note}>{part.note}</p>}
    </section>)}
    {guide.note && <p className={styles.note}>{guide.note}</p>}
    {guide.links && <nav className={styles.related} aria-label={`Neste steg: ${title}`}>{guide.links.map(link => link.href.startsWith("#")
      ? <a key={link.href} href={link.href} className={site.textLink}>{link.label}<span aria-hidden="true">↗</span></a>
      : <ResourceLink key={link.href} href={link.href}>{link.label}</ResourceLink>)}</nav>}
  </>
}

function ExistingInstruction({ item }: { item: InstructionItem }) {
  return <>
    {item.description?.map(text => <p key={text}>{text}</p>)}
    {item.steps && <ol className={styles.textSteps}>{item.steps.map(step => <li key={step}>{step}</li>)}</ol>}
    {item.tip && <p className={styles.note}><strong>Tips:</strong> {item.tip}</p>}
    {item.warning && <p className={styles.note}><strong>Viktig:</strong> {item.warning}</p>}
    {item.actions?.length ? <div className={styles.existingActions}>{item.actions.map((action, i) => <a href={action.href} key={`${action.label}-${i}`}>{action.label}</a>)}<p className={site.registration}>{REGISTRATION_GUIDANCE} Velg deretter riktig område i appmenyen.</p></div> : null}
  </>
}

export default function InstructionsHub() {
  const starts = [
    { href: "#legg-til-en-arbeidsokt", label: "Registrer arbeidsdagen", text: "Timer, pause og kilometer." },
    { href: "#opprett-faktura", label: "Lag en faktura", text: "Fra opplysninger til PDF." },
    { href: "#opprett-tilbud", label: "Lag et tilbud", text: "Beskriv og pris oppdraget." },
    { href: "#opprett-kontrakt", label: "Lag en kontrakt", text: "Tilpass pris og vilkår." },
  ]
  return <div className={`${site.surface} ${styles.page}`} data-instructions>
    <InstructionAnchors /><a href="#instruksjonsinnhold" className={site.skip}>Hopp til innhold</a><SiteHeader />
    <main id="instruksjonsinnhold" tabIndex={-1}>
      <section className={styles.hero} aria-labelledby="instructions-title"><SectionContainer>
        <p className={site.eyebrow}>HJELP TIL JOBBLEDER</p>
        <h1 id="instructions-title">Instruksjoner<br /><span>for Jobbleder.</span></h1>
        <p className={site.lead}>Fra første registrering til ferdig PDF. Velg oppgaven du vil løse, og følg stegene i ditt tempo.</p>
        <nav className={styles.starts} aria-label="Kom i gang med en oppgave">{starts.map(start => <a href={start.href} key={start.href}><strong>{start.label}<span aria-hidden="true">↗</span></strong><span>{start.text}</span></a>)}</nav>
        <div className={styles.heroBottom}><ApplicationCTA>Åpne Jobbleder</ApplicationCTA><p className={site.registration}>{REGISTRATION_GUIDANCE} Veiledningene viser hvor du går videre i appen.</p></div>
      </SectionContainer></section>

      <nav className={styles.categoryNav} aria-label="Instruksjonskategorier"><SectionContainer><p>Finn veiledningen</p><ul>{instructionSections.map(section => <li key={section.id}><a href={`#${section.id}`}>{instructionSectionLabels[section.id]?.title ?? section.title}</a></li>)}</ul></SectionContainer></nav>

      <section className={`${site.section} ${styles.workflowSection}`} aria-labelledby="workflows-title"><SectionContainer>
        <div className={styles.sectionHeading}><p className={site.eyebrow}>DOKUMENTER SOM HENGER SAMMEN</p><h2 id="workflows-title" className={site.title}>Ta opplysningene videre.</h2><p>Oppretting, PDF og disse konverteringene er med i Free. Du kontrollerer dokumentet før du genererer og laster ned filen.</p></div>
        <nav className={styles.workflows} aria-label="Veiledninger for dokumentflyt">{workflowLinks.map(link => <a href={link.href} key={link.href}><strong>{link.label}</strong><span>{link.description}</span><span className={styles.readMore}>Se stegene <span aria-hidden="true">↗</span></span></a>)}</nav>
      </SectionContainer></section>

      {instructionSections.map((section, sectionIndex) => <section key={section.id} id={section.id} tabIndex={-1} className={`${site.section} ${styles.category} ${sectionIndex % 2 ? styles.alternate : ""}`} aria-labelledby={`${section.id}-title`}>
        <SectionContainer>
          <div className={styles.categoryHeading}><p className={site.eyebrow}>{String(sectionIndex + 1).padStart(2, "0")} / VEILEDNINGER</p><h2 id={`${section.id}-title`} tabIndex={-1}>{instructionSectionLabels[section.id]?.title ?? section.title}</h2><p>{instructionSectionLabels[section.id]?.intro ?? section.intro}</p></div>
          <div className={styles.instructionList}>{section.items.map(original => {
            const item = instructionLabels(original), guide = instructionGuides[item.slug]
            const title = guide?.title ?? item.title, summary = guide?.summary ?? item.summary
            return <details key={item.slug} id={item.slug} className={styles.instruction}>
              <summary><div><h3>{title}</h3>{summary && <p>{summary}</p>}</div><span aria-hidden="true" className={styles.disclosureIcon} /></summary>
              <div className={styles.instructionBody}>
                {guide ? <Guide guide={guide} title={title} /> : <ExistingInstruction item={item} />}
                <a className={styles.permalink} href={`#${item.slug}`}>Direktelenke: {title}</a>
              </div>
            </details>
          })}</div>
        </SectionContainer>
      </section>)}

      <section className={`${site.section} ${styles.resources}`} aria-labelledby="resources-title"><SectionContainer>
        <div className={styles.sectionHeading}><p className={site.eyebrow}>MALER OG FORKLARINGER</p><h2 id="resources-title" className={site.title}>Vil du lese mer?</h2><p>Finn produktinformasjon, eksempler og veiledning om dokumentene.</p></div>
        <div className={styles.resourceGrid}>{["timeliste", "faktura", "tilbud", "kontrakt"].map(topic => <nav key={topic} aria-label={`Guider om ${topic}`}><h3>{topic}</h3><ul>{seoPages.filter(page => page.topic === topic).map(page => <li key={page.slug}><Link href={`/${page.slug}`}>{page.h1}</Link></li>)}</ul></nav>)}</div>
        <ResourceLink href="/kontakt">Kontakt oss hvis du trenger hjelp</ResourceLink>
      </SectionContainer></section>
      <section className={`${site.section} ${site.final}`} aria-labelledby="instructions-start-title"><SectionContainer><p className={site.eyebrow}>FRA VEILEDNING TIL FØRSTE DOKUMENT</p><h2 id="instructions-start-title" className={site.title}>Prøv stegene i Jobbleder.</h2><p>Opprett dokumentene gratis. Last ned PDF, kontroller innholdet og del det selv.</p><ApplicationCTA>Åpne Jobbleder</ApplicationCTA><p className={site.registration}>{REGISTRATION_GUIDANCE}</p></SectionContainer></section>
    </main><SiteFooter />
  </div>
}
