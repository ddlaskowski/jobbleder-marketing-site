import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Footer from "@/components/Footer"
import HowItWorks from "@/components/HowItWorks"
import BlogPreview from "@/components/BlogPreview"
import CTASection from "@/components/CTASection"

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