import { socialImage } from "@/lib/social-image"

export const alt = "HomeService: plomería y electricidad a domicilio en Quito"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return socialImage({
    title: "Tu hogar, en buenas manos.",
    eyebrow: "Plomería · Electricidad · Destape de cañerías",
    detail: "Revisamos. Te explicamos. Cotizamos antes de trabajar.",
  })
}
