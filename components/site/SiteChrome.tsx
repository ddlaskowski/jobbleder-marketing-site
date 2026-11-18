import Link from "next/link"
import { APPLICATION_URL, SectionContainer } from "./Primitives"
import styles from "./site.module.css"

const products = [
  { name: "Faktura", href: "/fakturaprogram-gratis" },
  { name: "Timeliste", href: "/timeliste-mal" },
  { name: "Tilbud", href: "/tilbud-mal" },
  { name: "Kontrakt", href: "/kontrakt-mal" },
]
const resources = [
  { name: "Instruksjoner", href: "/instruksjoner" },
  { name: "Blogg", href: "/blogg" },
  { name: "Om oss", href: "/om-oss" },
  { name: "Kontakt", href: "/kontakt" },
]

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <SectionContainer>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.brand} aria-label="Jobbleder – hjem">Jobbleder</Link>
          <nav className={styles.desktopNav} aria-label="Hovedmeny">
            <details className={styles.productMenu}>
              <summary>Produkter <span aria-hidden="true" className={styles.menuChevron}>⌄</span></summary>
              <div className={styles.dropdown}>{products.map(p => <Link key={p.href} href={p.href}>{p.name}</Link>)}</div>
            </details>
            {resources.map(r => <Link key={r.href} href={r.href}>{r.name}</Link>)}
            <a href={APPLICATION_URL} className={styles.login}>Logg inn</a>
          </nav>
          <details className={styles.mobileMenu}>
            <summary>Meny <span aria-hidden="true" className={styles.menuChevron}>⌄</span></summary>
            <nav className={styles.mobilePanel} aria-label="Mobilmeny">
              <p>PRODUKTER</p>
              <div className={styles.mobileProducts}>{products.map(p => <Link key={p.href} href={p.href}>{p.name}</Link>)}</div>
              {resources.map(r => <Link key={r.href} href={r.href}>{r.name}</Link>)}
              <a href={APPLICATION_URL} className={styles.login}>Logg inn</a>
            </nav>
          </details>
        </div>
      </SectionContainer>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <SectionContainer>
        <div className={styles.footerGrid}>
          <div className={styles.footerIntro}><Link href="/" className={styles.brand}>Jobbleder</Link><p>Faktura, timeliste, tilbud og kontrakt.<br />Dokumentarbeid for små bedrifter.</p></div>
          <nav aria-label="Produkter i bunntekst"><h2>Produkter</h2><ul>{products.map(p => <li key={p.href}><Link href={p.href}>{p.name}</Link></li>)}</ul></nav>
          <nav aria-label="Ressurser i bunntekst"><h2>Mer om Jobbleder</h2><ul>{resources.map(r => <li key={r.href}><Link href={r.href}>{r.name}</Link></li>)}</ul></nav>
        </div>
        <p className={styles.footerBottom}>Laget for håndverkere og små bedrifter i Norge.</p>
      </SectionContainer>
    </footer>
  )
}
