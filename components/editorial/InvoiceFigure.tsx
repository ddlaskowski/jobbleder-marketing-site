import Image from "next/image"
import media from "@/content/invoiceProductMedia.json"
import styles from "./invoiceFigure.module.css"

export default function InvoiceFigure({ variant = "document", appearance = "inherit" }: { variant?: "document" | "line"; appearance?: "inherit" | "light" }) {
  const image = variant === "line" ? media.assets.processLines : media.assets.free
  return (
    <figure className={`${styles.figure} ${variant === "line" ? styles.line : ""}`} data-appearance={appearance}>
      <Image src={image.src} width={image.width} height={image.height} loading="lazy" unoptimized
        sizes={variant === "line" ? "(min-width: 448px) 400px, calc(100vw - 48px)" : "(min-width: 1024px) 570px, (min-width: 576px) 480px, calc(100vw - 80px)"}
        className={styles.image}
        alt={variant === "line" ? "Felter for enhetspris 12 000 kroner og MVA-sats 25 prosent i Jobbleders fakturaskjema" : "Faktura 110 fra Jobbleder med parkettarbeid, 3 000 kroner i MVA og totalbeløp 15 000 kroner"} />
      <figcaption>
        {variant === "line" ? "Enhetspris og MVA-sats under oppretting i Jobbleder. Lenken viser den ferdige fakturaen fra samme eksempel. " : "Eksempel på en faktura generert i Jobbleder. Opplysningene er demonstrasjonsdata; dette er ikke en blank fakturamal. "}
        <a href={media.assets.free.src}>Åpne fakturaeksemplet i full størrelse</a>
      </figcaption>
    </figure>
  )
}
