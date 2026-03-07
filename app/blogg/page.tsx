import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Container from "@/components/Container"
import BlogCard from "@/components/BlogCard"
import { blogPosts } from "@/content/blogPosts"
import BlogCategoryNav from "@/components/BlogCategoryNav"


export const metadata: Metadata = {
  title: "Blogg om faktura, timelister og tilbud | Jobbleder",
  description:
    "Artikler og guider om faktura, timelister og tilbud for håndverkere og små bedrifter i Norge.",
  alternates: {
    canonical: "https://jobbleder.no/blogg",
  },
}

export default function BloggPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )

  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="border-b bg-gray-50 py-16">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold text-gray-900">Blogg</h1>
              <p className="mt-4 text-lg text-gray-600">
                Artikler og guider om faktura, timelister og tilbud for håndverkere og små bedrifter i Norge.
              </p>
            </div>
            <BlogCategoryNav active="Alle" />
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {sortedPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  slug={post.slug}
                  summary={post.summary}
                  category={post.category}
                  createdAt={new Date(post.createdAt).toLocaleDateString("no-NO", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  tags={post.tags}
                />
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  )
}