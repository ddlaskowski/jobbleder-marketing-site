import Image from "next/image"
import media from "@/content/offerProductMedia.json"
import mobileMedia from "@/content/instructionMobileMedia.json"
import styles from "./offerFigure.module.css"

export default function OfferFigure({ variant }: { variant: "document" | "form" }) {
  const image = variant === "document" ? media.assets.pdf : media.assets.editor
  const mobile = mobileMedia.assets.mobileOfferForm
  const alt = variant === "document"
    ? "Tilbud 29 fra Jobbleder med legging av parkett, netto 12 000 kroner, MVA 3 000 kroner og total 15 000 kroner"
    : "Tilbud 29 under oppretting med kunde, prosjekt, datoer og parkettlinje med enhetspris og antall"

  return <figure className={`${styles.figure} ${variant === "form" ? styles.form : styles.document}`}>
    {variant === "form" ? <picture>
      <source media="(max-width: 639px)" srcSet={mobile.src} width={mobile.width} height={mobile.height} />
      <Image src={image.src} width={image.width} height={image.height} alt={alt} loading="lazy" unoptimized className={styles.image} />
    </picture> : <Image src={image.src} width={image.width} height={image.height} alt={alt} loading="lazy" unoptimized
      sizes="(min-width: 640px) 506px, calc(100vw - 96px)" className={styles.image} />}
    <figcaption>
      {variant === "document" ? <>
        Hele A4-siden fra Tilbud 29, generert i Jobbleder Free med demonstrasjonsdata og Jobbleder-merking. Dette er et utfylt eksempel, ikke en blank PDF-mal. Bildet er bevart uten beskjæring. {" "}
        <a href={image.original.file.replace(/^public/, "")}>Åpne Tilbud 29 i full størrelse</a>
      </> : <>
        Tilbud 29 i opprettingsskjemaet. Desktopbildet viser også MVA og summer. På mobil vises et eget opptak fra nettleseren; MVA-sats, oppsummering og lagreknapper er utenfor dette utsnittet. {" "}
        <a className={styles.desktopLink} href={image.original.file.replace(/^public/, "")}>Åpne tilbudsskjemaet i full størrelse</a>
        <a className={styles.mobileLink} href={mobile.original.file.replace(/^public/, "")}>Åpne mobilbildet av tilbudsskjemaet i full størrelse</a>
      </>}
    </figcaption>
  </figure>
}
