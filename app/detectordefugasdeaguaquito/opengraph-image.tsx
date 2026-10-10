import { socialImage } from "@/lib/social-image"

export const alt = "Detector de fugas de agua en Quito · Geófono y termografía · HomeService"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return socialImage({
    title: "Detector de fugas de agua en Quito.",
    eyebrow: "HomeService · Geófono y termografía",
    detail: "Revisión desde $19.99. Detección y reparación cotizadas aparte.",
  })
}
