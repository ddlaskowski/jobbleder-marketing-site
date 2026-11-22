import "./globals.css"
import type { Metadata } from "next"
import Tracker from "@/components/Tracker";
import { SITE_ORIGIN, siteUrl } from "@/lib/siteUrl"

const siteTitle = "Jobbleder – Faktura, kontrakt, timeliste og tilbud på minutter"
const siteDescription = "Lag faktura, kontrakt, timeliste og tilbud enkelt i nettleseren. Jobbleder er laget for håndverkere og små bedrifter."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: siteTitle,
    template: "%s | Jobbleder",
  },
  description: siteDescription,
    icons: {
      icon: "/favicon.png",
      apple: "/apple-touch-icon.png",
    },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl("/"),
    siteName: "Jobbleder",
    locale: "no_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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
    url: siteUrl("/"),
    logo: siteUrl("/logo.png"),
    sameAs: [],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jobbleder",
    url: siteUrl("/"),
    description:
      "Lag faktura, kontrakt, timeliste og tilbud enkelt i nettleseren. Jobbleder er laget for håndverkere og små bedrifter.",
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

        <Tracker />
        
        {children}
        
        </body>
    </html>
  )
}
