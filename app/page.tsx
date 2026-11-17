import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Footer from "@/components/Footer"
import HowItWorks from "@/components/HowItWorks"
import BlogPreview from "@/components/BlogPreview"
import CTASection from "@/components/CTASection"
import type { Metadata } from "next"
import { siteUrl } from "@/lib/siteUrl"

export const metadata: Metadata = {
  alternates: { canonical: siteUrl("/") },
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <BlogPreview/>
      <CTASection/>
      <Footer />
    </>
  )
}
