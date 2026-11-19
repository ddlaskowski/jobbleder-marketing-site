import Image from "next/image"
import Link from "next/link"
import { SiteHeader, SiteFooter } from "@/components/site/SiteChrome"
import { ApplicationCTA, REGISTRATION_GUIDANCE, SectionContainer } from "@/components/site/Primitives"
import { seoPages } from "@/content/seoPages"
import { specializedTimelists, type SpecializedTimelistSlug } from "@/content/specializedTimelists"
import mobileMedia from "@/content/instructionMobileMedia.json"
import site from "@/components/site/site.module.css"
import styles from "./specializedTimelist.module.css"

const documentExample = { src: "/images/product/timeliste/optimized/jobbleder-blog-timelist-example-dd471883399a.webp", width: 926, height: 583, original: "/images/product/timeliste/source/exported_timelist_with_1_entry.png", alt: "Utfylt timeliste for Demo og prosjektet Renovering av leilighet, med én arbeidsdag og totalt åtte timer" }
const weekExample = { src: "/images/product/timeliste/optimized/jobbleder-weekly-example-652329574a5f.webp", width: 504, height: 393, original: "/images/product/timeliste/source/exported_timelist_with_3_entires.png", alt: "Timeliste for uke 47 i 2026 med tre arbeidsdager og separate summer for vanlige timer og ekstra timer" }
const worker = mobileMedia.assets.mobileTimelistImport
const workerExample = { ...worker, original: worker.original.file.replace(/^public/, ""), alt: "Timeliste 265 på mobil med Arbeider Demo, prosjekt og tre importerte registreringer" }

function Preview({ kind, priority = false }: { kind: "pdf" | "week" | "worker" | "project"; priority?: boolean }) {
  const image = kind === "week" ? weekExample : kind === "worker" ? workerExample : documentExample
  const caption = kind === "week" ? "Uke 47 med tre dager. Røde rammer fremhever to rader og ekstrasummene i det leverte eksemplet." : kind === "worker" ? "Et eget mobileksempel: Arbeider Demo i Timeliste 265. Navnet brukes i dokumentet." : "Utfylt dokument fra Jobbleder. Dette er et eksempel, ikke den tomme PDF-malen."
  return <figure className={`${styles.preview} ${kind === "worker" ? styles.phone : ""}`}>
    <Image src={image.src} width={image.width} height={image.height} alt={image.alt} sizes={kind === "worker" ? "(max-width: 379px) calc(100vw - 48px), 332px" : "(max-width: 767px) calc(100vw - 48px), (max-width: 1199px) 46vw, 560px"} unoptimized loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : undefined} />
    <figcaption>{caption} <a href={image.original}>Åpne hele bildet<span className={site.srOnly}>: {image.alt}</span></a></figcaption>
  </figure>
}

export default function SpecializedTimelistPage({ slug }: { slug: SpecializedTimelistSlug }) {
  const data = specializedTimelists[slug], page = seoPages.find(p => p.slug === slug)!
  const cluster = seoPages.filter(p => p.topic === page.topic)
  const otherTopics = [...new Set(seoPages.filter(p => p.topic !== page.topic).map(p => p.topic))]
  const legacyRelated = [...cluster.filter(p => p.slug !== slug).slice(0, 3), ...otherTopics.flatMap(topic => seoPages.filter(p => p.topic === topic).slice(0, 2))].slice(0, 9)
  const related = [...new Map([...cluster, ...legacyRelated].map(p => [p.slug, p])).values()]
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }
  return <div className={`${site.surface} ${styles.page}`}>
    <a className={site.skip} href="#timelisteinnhold">Hopp til innhold</a>
    <SiteHeader />
    <main id="timelisteinnhold" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className={`${styles.hero} ${styles[data.kind]}`} aria-labelledby="specialist-title">
        <SectionContainer>
          <nav className={styles.breadcrumb} aria-label="Brødsmuler"><Link href="/">Hjem</Link><span aria-hidden="true">/</span><Link href="/timeliste-mal">Timeliste</Link><span aria-hidden="true">/</span><span aria-current="page">{page.h1}</span></nav>
          <div className={data.kind === "week" ? styles.weekHero : styles.heroCopy}>
            <div><p className={site.eyebrow}>{data.eyebrow}</p><h1 id="specialist-title">{page.h1}</h1><p className={styles.intro}>{data.intro}</p>
              {data.kind === "worker" && <p className={styles.nameNote}><strong>Arbeider = navnet i timelisten.</strong><br />Ingen ansattinnlogging eller lønnsberegning er en del av dette feltet.</p>}
              {data.kind === "project" && <p className={styles.projectLine}>Registrer arbeidet. Samle prosjektets dager. Kontroller dokumentet.</p>}
            </div>
            {data.kind === "week" && <Preview kind="week" priority />}
          </div>
          {page.downloadResources && <div className={styles.downloads}>{page.downloadResources.items.map(item => <a key={item.href} href={item.href}>{item.label}<span aria-hidden="true"> ↗</span></a>)}<p>Gratis nedlasting uten innlogging. Fyll ut og summer selv.</p></div>}
        </SectionContainer>
      </section>

      <section className={styles.story} aria-labelledby="example-title">
        <SectionContainer><div className={data.kind === "week" ? styles.weekStory : `${styles.storyGrid} ${data.kind === "project" ? styles.projectStory : ""}`}>
          <div className={styles.storyCopy}><p className={site.eyebrow}>{data.kind === "worker" ? "NAVNGIVNING I DOKUMENTET" : "ET AUTENTISK EKSEMPEL"}</p><h2 id="example-title">{data.storyTitle}</h2><p>{data.story}</p>
            {data.kind === "pdf" && <p>En manuell PDF er tilstrekkelig når du trenger et enkelt skjema. Du kan skrive ut, lagre og dele det. Vil du gjenbruke registrerte arbeidsdager, finner du den digitale arbeidsflyten lenger ned.</p>}
            {data.kind === "project" && <dl className={styles.projectDetails}><div><dt>Prosjekt</dt><dd>Renovering av leilighet</dd></div><div><dt>Arbeid</dt><dd>Legging av parkett</dd></div><div><dt>Dokumentert tid</dt><dd>8:00 etter én times pause</dd></div></dl>}
            {data.kind === "worker" && <p>Registreringene kan brukes som grunnlag når du oppretter timelisten. Sjekk arbeidernavnet og radene før du lagrer eller genererer dokumentet. Eksemplet viser ikke ansatte med egne brukerkontoer.</p>}
          </div>
          {data.kind !== "week" && <Preview kind={data.kind} />}
        </div></SectionContainer>
      </section>

      <section className={`${site.section} ${styles.guidance}`} aria-labelledby="guide-title"><SectionContainer>
        <div className={styles.sectionHead}><p className={site.eyebrow}>PRAKTISK GJENNOMGANG</p><h2 id="guide-title">{data.guideTitle}</h2></div>
        <ol className={styles.guides}>{data.sections.map((s, i) => <li key={s.title}><span className={styles.stepNumber} aria-hidden="true">0{i + 1}</span><h3>{s.title}</h3><p>{s.text}</p></li>)}</ol>
        <Link className={styles.textLink} href={data.help}>{data.helpLabel}<span aria-hidden="true"> ↗</span></Link>
      </SectionContainer></section>

      <section className={`${site.section} ${styles.next}`} aria-labelledby="next-title"><SectionContainer><div className={styles.nextGrid}>
        <div><h2 id="next-title">{data.nextTitle}</h2><p>{data.nextText}</p><Link className={styles.textLink} href={data.nextHref}>{data.nextLabel}<span aria-hidden="true"> ↗</span></Link></div>
        <aside className={styles.plan}><h3>Dokumentfunksjonene er med i Free.</h3><p>{data.planText}</p><ApplicationCTA>{data.ctaLabel}</ApplicationCTA><p className={site.registration}>{REGISTRATION_GUIDANCE}</p></aside>
      </div></SectionContainer></section>

      <section className={`${site.section} ${styles.faqSection}`} aria-labelledby="faq-title"><SectionContainer><div className={styles.faq}><h2 id="faq-title">Ofte stilte spørsmål</h2>{page.faqs.map(f => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></SectionContainer></section>
      <section className={styles.related} aria-labelledby="related-title"><SectionContainer><h2 id="related-title">Les videre</h2><nav aria-label="Relaterte maler og dokumentguider"><ul>{related.map(p => <li key={p.slug}><Link href={`/${p.slug}`} aria-current={p.slug === slug ? "page" : undefined}>{p.h1}</Link></li>)}</ul></nav></SectionContainer></section>
    </main><SiteFooter />
  </div>
}
