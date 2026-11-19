import Image from "next/image"
import styles from "./timelistContents.module.css"

export default function TimelistContents({ heading, text, items }: { heading: string; text: string; items: string[] }) {
  return (
    <section className={styles.layout} aria-labelledby="timelist-contents-title">
      <div className={styles.copy}>
        <h2 id="timelist-contents-title">{heading}</h2>
        <p>{text}</p>
        <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
      </div>
      <figure className={styles.figure}>
        <Image src="/images/product/timeliste/optimized/jobbleder-blog-timelist-example-dd471883399a.webp" width={926} height={583}
          sizes="(min-width: 768px) 386px, calc(100vw - 48px)" unoptimized loading="lazy" className={styles.image}
          alt="Timeliste opprettet i Jobbleder for Demo, med én arbeidsdag, arbeidsbeskrivelse og totalt åtte timer" />
        <figcaption>Eksempel på en timeliste opprettet i Jobbleder. Dette er et utfylt dokument, ikke den tomme PDF-malen. <a href="/images/product/timeliste/source/exported_timelist_with_1_entry.png">Åpne timelisteeksemplet i full størrelse</a></figcaption>
      </figure>
    </section>
  )
}
