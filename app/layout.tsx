import type React from "react"
import type { Metadata } from "next"

import { getSiteUrl, siteContent } from "@/lib/site-content"
import "./globals.css"

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    url: "/",
    siteName: siteContent.brand.name,
    locale: siteContent.seo.locale,
    type: "website",
    images: [
      {
        url: siteContent.seo.ogImage.src,
        width: siteContent.seo.ogImage.width,
        height: siteContent.seo.ogImage.height,
        alt: siteContent.seo.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: siteContent.seo.twitterCard,
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    images: [siteContent.seo.ogImage.src],
  },
  icons: {
    icon: "/brand/favicon.ico",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-EC">
      <head>
        <noscript>
          <style>{`.reveal-item{opacity:1!important;transform:none!important}.reveal-cover{transform:scaleY(0)!important}.faq-answer{max-height:none!important;opacity:1!important}.hero-scroll-content{transform:none!important}@media(max-width:1023px){.mobile-menu-button{display:none!important}.mobile-navigation-no-js{max-height:600px!important;opacity:1!important;margin-top:2rem!important}}`}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
