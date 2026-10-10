import type React from "react"
import type { Metadata } from "next"
import { ContactTracking } from "@/components/contact-tracking"

import { getSiteUrl } from "@/lib/site-content"
import "./globals.css"

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: siteUrl,
  icons: {
    icon: { url: "/brand/favicon.svg", type: "image/svg+xml" },
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-EC">
      <head>
        <noscript>
          <style>{`.reveal-item{opacity:1!important;transform:none!important}.reveal-cover{transform:scaleY(0)!important}.faq-answer{max-height:none!important;opacity:1!important}@media(max-width:1023px){header{position:relative!important;background:var(--primary)}.mobile-menu-button,.mobile-navigation-no-js{display:none!important}}`}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased">
        {children}
        <ContactTracking />
      </body>
    </html>
  )
}
