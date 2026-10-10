"use client"

import { useEffect } from "react"

type ContactClick = {
  event: "contact_click"
  channel: "whatsapp" | "phone"
  page_path: string
  service: "destape" | "plomeria" | "electricidad" | "home"
  cta_id: string
}

type TrackingWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>
}

function getService(pathname: string): ContactClick["service"] {
  if (pathname.startsWith("/destapedecaneriasquito")) return "destape"
  if (pathname.startsWith("/plomero-quito")) return "plomeria"
  if (pathname.startsWith("/electricista-quito")) return "electricidad"
  return "home"
}

export function ContactTracking() {
  useEffect(() => {
    function handleContactClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return

      const anchor = event.target.closest<HTMLAnchorElement>("a[data-analytics]")
      if (!(anchor instanceof HTMLAnchorElement)) return

      const ctaId = anchor.getAttribute("data-analytics")
      if (!ctaId) return

      const channel =
        anchor.protocol === "tel:"
          ? "phone"
          : anchor.protocol === "https:" && anchor.hostname === "wa.me"
            ? "whatsapp"
            : null
      if (!channel) return

      const pathname = window.location.pathname
      const trackingWindow = window as TrackingWindow
      const contactClick: ContactClick = {
        event: "contact_click",
        channel,
        page_path: pathname,
        service: getService(pathname),
        cta_id: ctaId,
      }

      // This records an attempt to contact us, not a confirmed lead or sale.
      trackingWindow.dataLayer ??= []
      trackingWindow.dataLayer.push(contactClick)
    }

    document.addEventListener("click", handleContactClick)
    return () => document.removeEventListener("click", handleContactClick)
  }, [])

  return null
}
