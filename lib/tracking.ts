export const TRACK_EVENTS = {
  PAGE_VIEW: "",
  CLICK_START_GRATIS: "click_start_gratis",
  DOWNLOAD_TIMELISTE_PDF: "download_timeliste_pdf",
} as const;

export async function sendFootprint(view: string) {
  try {
    await fetch("/api/footprint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ view }),
      keepalive: true,
    });
  } catch {
    // ignore errors
  }
}