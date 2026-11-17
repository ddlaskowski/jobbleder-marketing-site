import "./globals.css"
import type { Metadata } from "next"
import Tracker from "@/components/Tracker";
import { SITE_ORIGIN, siteUrl } from "@/lib/siteUrl"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: "Jobbleder – Faktura, kontrakt, timeliste og tilbud på minutter",
    template: "%s | Jobbleder",
  },
  description:
    "Lag faktura, kontrakt, timeliste og tilbud enkelt i nettleseren. Jobbleder er laget for håndverkere og små bedrifter.",
    icons: {
      icon: "/favicon.png",
      apple: "/apple-touch-icon.png",
    },
  openGraph: {
    title: "Jobbleder",
    description:
      "Lag faktura, kontrakt, timeliste og tilbud enkelt i nettleseren.",
    url: siteUrl("/"),
    siteName: "Jobbleder",
    locale: "no_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jobbleder",
    description:
      "Lag faktura, kontrakt, timeliste og tilbud enkelt i nettleseren.",
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
     potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl("/blogg")}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
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
