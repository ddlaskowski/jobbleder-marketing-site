import "./globals.css"

export const metadata = {
  title: "Jobbleder – Gratis fakturaprogram",
  description: "Lag faktura, timeliste og tilbud på minutter."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  )
}