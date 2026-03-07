import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Container from "@/components/Container"
import BlogCard from "@/components/BlogCard"
import BlogCategoryNav from "@/components/BlogCategoryNav"
import { blogPosts, blogCategories } from "@/content/blogPosts"

type Params = { category: string }

type Props = {
  params: Promise<Params>
}

const allowedCategories = blogCategories.map((cat) => cat.toLowerCase())

function normalizeCategory(category: string) {
  return category.toLowerCase()
}

function getDisplayCategory(category: string) {
  const found = blogCategories.find(
    (cat) => cat.toLowerCase() === category.toLowerCase()
  )

  return found ?? category
}

export function generateStaticParams(): Params[] {
  return blogCategories.map((category) => ({
    category: category.toLowerCase(),
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const normalized = normalizeCategory(category)

  if (!allowedCategories.includes(normalized)) {
    return {}
  }

  const displayCategory = getDisplayCategory(category)

  return {
    title: `${displayCategory} | Blogg`,
    description: `Artikler og guider om ${displayCategory.toLowerCase()} for brukere av Jobbleder.`,
    alternates: {
      canonical: `https://jobbleder.no/blogg/${normalized}`,
    },
  }
}

export default async function BlogCategoryPage({ params }: Props) {
  const { category } = await params
  const normalized = normalizeCategory(category)

  if (!allowedCategories.includes(normalized)) {
    return notFound()
  }

  const displayCategory = getDisplayCategory(category)

  const filteredPosts = blogPosts
    .filter((post) => post.category.toLowerCase() === normalized)
    .sort(
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
              <h1 className="text-4xl font-bold text-gray-900">
                {displayCategory}
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Artikler og guider om {displayCategory.toLowerCase()}.
              </p>
            </div>

            <BlogCategoryNav active={displayCategory} />
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredPosts.map((post) => (
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