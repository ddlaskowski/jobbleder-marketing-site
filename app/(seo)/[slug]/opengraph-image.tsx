import { ImageResponse } from "next/og"
import { seoPages } from "@/content/seoPages"

export const alt = "Jobbleder guide"
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

function getPage(slug: string) {
  return seoPages.find((page) => page.slug === slug)
}

export default async function Image({ params }: Props) {
  const { slug } = await params
  const page = getPage(slug)

  const title = page?.h1 ?? "Jobbleder"
  const description =
    page?.description ??
    "Guider og maler for faktura, timeliste og tilbud."
  const topic = page?.topic ?? "guide"

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
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
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
                textTransform: "capitalize",
              }}
            >
              {topic}
            </div>

            <div
              style={{
                fontSize: "26px",
                opacity: 0.8,
              }}
            >
              Jobbleder guide
            </div>
          </div>

          <div
            style={{
              fontSize: "68px",
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
              maxWidth: "920px",
            }}
          >
            {description}
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
          <div>jobbleder.no</div>
          <div>Gratis guider og maler</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}