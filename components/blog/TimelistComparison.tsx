import Image from "next/image"
import Link from "next/link"
import mobileMedia from "@/content/instructionMobileMedia.json"
import styles from "./timelistComparison.module.css"

export default function TimelistComparison() {
  const image = mobileMedia.assets.mobileRegistrationForm

  return (
    <section className={styles.section} aria-labelledby="pdf-eller-digital">
      <h2 id="pdf-eller-digital">PDF eller digital timeliste?</h2>
      <p className={styles.intro}>En PDF-mal passer når du vil skrive ut et skjema eller føre noen få arbeidsdager. Du fyller inn opplysningene og summerer timene selv. Last ned en av malene ovenfor hvis det er alt du trenger.</p>
      <div className={styles.layout}>
        <div className={styles.copy}>
          <p>Fører du timer jevnlig, kan du registrere arbeidsdagene i Jobbleder og bruke opplysningene videre. Du velger selv hvilke dager timelisten skal dekke.</p>
          <p className={styles.workflow}>Registreringer <span aria-hidden="true">→</span><span className={styles.srOnly}>til</span> Timeliste <span aria-hidden="true">→</span><span className={styles.srOnly}>til</span> Faktura</p>
          <ol className={styles.steps}>
            <li><strong>Registrer arbeidsdagen.</strong> Legg inn timer, pauser og arbeidsbeskrivelse i nettleseren på mobilen. Ta med kilometer når KM er aktivert, og marker ekstraarbeid ved behov.</li>
            <li><strong>Velg og importer.</strong> Marker de lagrede registreringene du vil bruke, og velg «Importer til timeliste».</li>
            <li><strong>Kontroller timelisten.</strong> Lag en PDF, eller konverter timelisten til en faktura. Kontroller også fakturaen før du sender den til kunden.</li>
          </ol>
          <p>Oppretting av dokumenter og konvertering er tilgjengelig i Free.</p>
          <Link href="/timeliste-mal#registrer-pa-mobil" className={styles.productLink}>Se hvordan du registrerer timer på mobilen<span aria-hidden="true"> ↗</span></Link>
        </div>
        <figure className={styles.figure}>
          <Image src={image.src} width={image.width} height={image.height} sizes="(min-width: 768px) 248px, (max-width: 339px) calc(100vw - 48px), 292px" unoptimized loading="lazy" className={styles.image}
            alt="Registrering i Jobbleder på mobil med arbeidsbeskrivelse, inn- og uttid, pause og knappen Lagre registrering" />
          <figcaption>En arbeidsdag i mobilnettleseren. Du lagrer registreringen selv. <a href={image.original.file.replace(/^public/, "")}>Åpne bildet i full størrelse<span className={styles.srOnly}>: registrering i Jobbleder på mobil</span></a></figcaption>
        </figure>
      </div>
    </section>
  )
}
