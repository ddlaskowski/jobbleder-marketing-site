import { ImageResponse } from "next/og"
import { blogPosts } from "@/content/blogPosts"

export const alt = "Jobbleder blogg"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

type Params = {
  slug: string
}

type Props = {
  params: Promise<Params>
}

function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export default async function Image({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)

  const title = post?.title ?? "Jobbleder blogg"
  const category = post?.category ?? "Blogg"
  const summary =
    post?.summary ??
    "Artikler og guider om faktura, timelister og tilbud."

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "22px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: "999px",
                padding: "10px 18px",
                fontSize: "24px",
              }}
            >
              {category}
            </div>
            <div
              style={{
                fontSize: "26px",
                opacity: 0.8,
              }}
            >
              Jobbleder blogg
            </div>
          </div>

          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: "980px",
            }}
          >
            {title}
          </div>

          <div
            style={{
              fontSize: "28px",
              lineHeight: 1.4,
              color: "#d1d5db",
              maxWidth: "900px",
            }}
          >
            {summary}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "24px",
            color: "#93c5fd",
          }}
        >
          <div>jobbleder.no/blogg</div>
          <div>Faktura • Timeliste • Tilbud</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}