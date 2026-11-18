import Homepage from "@/components/home/Homepage"
import type { Metadata } from "next"
import { siteUrl } from "@/lib/siteUrl"

export const metadata: Metadata = {
  alternates: { canonical: siteUrl("/") },
}

export default function Home() {
  return (
    <Homepage />
  )
}
