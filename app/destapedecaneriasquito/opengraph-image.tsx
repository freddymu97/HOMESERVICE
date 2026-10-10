import { socialImage } from "@/lib/social-image"

export const alt = "Destape de cañerías en Quito · Revisión desde $19.99 · HomeService"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return socialImage({
    title: "Destape de cañerías en Quito.",
    eyebrow: "HomeService · Servicio a domicilio",
    detail: "Revisión desde $19.99. Destape cotizado por separado.",
  })
}
