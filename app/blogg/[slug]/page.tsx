import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Container from "@/components/Container"
import RelatedBlogPosts from "@/components/RelatedBlogPosts"
import { blogPosts } from "@/content/blogPosts"
import RelatedGuides from "@/components/RelatedGuides"


type Params = { slug: string }

type Props = {
  params: Promise<Params>
}

function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function generateStaticParams(): Params[] {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) return {}

  return {
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.summary,
    alternates: {
      canonical: `https://jobbleder.no/blogg/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) return notFound()

  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="border-b bg-gray-50 py-12">
          <Container>
            <nav className="text-sm text-gray-500">
              <Link href="/" className="hover:text-gray-900">
                Hjem
              </Link>
              <span className="mx-2">/</span>
              <Link href="/blogg" className="hover:text-gray-900">
                Blogg
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{post.title}</span>
            </nav>

            <div className="mt-6 max-w-3xl">
              <div className="flex items-center gap-3 text-sm">
                <span className="rounded-full bg-white px-3 py-1 font-medium text-gray-700 border border-gray-200">
                  {post.category}
                </span>
                <span className="text-gray-500">
                  {new Date(post.createdAt).toLocaleDateString("no-NO", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>

              <h1 className="mt-4 text-4xl font-bold text-gray-900">
                {post.title}
              </h1>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                {post.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.title,
              description: post.summary,
              datePublished: post.createdAt,
              author: {
                "@type": "Person",
                name: "Damian Laskowski",
              },
              publisher: {
                "@type": "Organization",
                name: "Jobbleder",
              },
            }),
          }}
        />
        <article className="py-16">
          <Container>
            <div className="max-w-3xl space-y-8">
              {post.blocks.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-bold text-gray-900"
                    >
                      {block.text}
                    </h2>
                  )
                }

                if (block.type === "paragraph") {
                  return (
                    <p
                      key={index}
                      className="leading-8 text-gray-700"
                    >
                      {block.text}
                    </p>
                  )
                }

                if (block.type === "list") {
                  return (
                    <ul
                      key={index}
                      className="list-disc space-y-3 pl-6 text-gray-700"
                    >
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )
                }

                if (block.type === "cta") {
                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-blue-200 bg-blue-50 p-6"
                    >
                      <p className="text-lg font-semibold text-gray-900">
                        {block.text}
                      </p>
                    </div>
                  )
                }

                if (block.type === "note") {
                return (
                    <div
                    key={index}
                    className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-gray-700"
                    >
                    {block.text}
                    </div>
                )
                }

                if (block.type === "link") {
                  const isExternal = block.href.startsWith("http")

                  if (isExternal) {
                    return (
                      <a
                        key={index}
                        href={block.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
                      >
                        {block.label}
                      </a>
                    )
                  }

                  return (
                    <Link
                      key={index}
                      href={block.href}
                      className="inline-flex rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
                    >
                      {block.label}
                    </Link>
                  )
                }

                return null
              })}
            </div>
          </Container>
        </article>

        <RelatedGuides relatedTopic={post.relatedTopic} />

        <RelatedBlogPosts
        currentSlug={post.slug}
        relatedTopic={post.relatedTopic}
        />
      </main>

      <Footer />
    </>
  )
}