import { ImageResponse } from "next/og"

export const alt = "Jobbleder – faktura, timeliste og tilbud"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #0f172a 0%, #111827 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: 36,
              opacity: 0.8,
            }}
          >
            Jobbleder
          </div>

          <div
            style={{
              fontSize: 74,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            Lag faktura, timeliste og tilbud på minutter
          </div>

          <div
            style={{
              fontSize: 28,
              color: "#cbd5e1",
              maxWidth: 820,
              lineHeight: 1.4,
            }}
          >
            Gratis nettbasert verktøy for håndverkere og små bedrifter i Norge.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#93c5fd",
          }}
        >
          <div>jobbleder.no</div>
          <div>Faktura • Timeliste • Tilbud</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}