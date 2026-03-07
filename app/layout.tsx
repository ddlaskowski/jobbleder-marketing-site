import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://jobbleder.no"),
  title: {
    default: "Jobbleder",
    template: "%s | Jobbleder",
  },
  description:
    "Lag faktura, timeliste og tilbud enkelt i nettleseren. Jobbleder er laget for håndverkere og små bedrifter.",
    icons: {
      icon: "/favicon.png",
      apple: "/apple-touch-icon.png",
    },
  openGraph: {
    title: "Jobbleder",
    description:
      "Lag faktura, timeliste og tilbud enkelt i nettleseren.",
    url: "https://jobbleder.no",
    siteName: "Jobbleder",
    locale: "no_NO",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jobbleder",
    url: "https://jobbleder.no",
    logo: "https://jobbleder.no/logo.png",
    sameAs: [],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jobbleder",
    url: "https://jobbleder.no",
    description:
      "Lag faktura, timeliste og tilbud enkelt i nettleseren. Jobbleder er laget for håndverkere og små bedrifter.",
  }
  return (
    <html lang="no">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {children}
        
        </body>
    </html>
  )
}