import type { Metadata } from "next"

import { CallToAction } from "@/components/call-to-action"
import { CrossLink } from "@/components/cross-link"
import { DrainServices } from "@/components/drain-services"
import { FAQ } from "@/components/faq"
import { FloatingCTA } from "@/components/floating-cta"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { drainContent, drainHeader } from "@/lib/drain-content"
import { getSiteUrl, HOURS, PHONE_E164, siteContent } from "@/lib/site-content"

const siteUrl = getSiteUrl()
const canonical = new URL("destapedecaneriasquito", siteUrl).toString()
const businessId = `${siteUrl.toString()}#business`
const serviceId = `${canonical}#service`

export const metadata: Metadata = {
  title: drainContent.seo.title,
  description: drainContent.seo.description,
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    title: drainContent.seo.title,
    description: drainContent.seo.description,
    url: canonical,
    siteName: siteContent.brand.name,
    locale: siteContent.seo.locale,
    type: "website",
    images: [{ url: drainContent.seo.ogImage, width: 1200, height: 630, alt: drainContent.seo.ogImageAlt }],
  },
  twitter: {
    card: siteContent.seo.twitterCard,
    title: drainContent.seo.title,
    description: drainContent.seo.description,
    images: [drainContent.seo.ogImage],
  },
}

export default function DrainPage() {
  const areaServed = drainContent.coverage.structuredAreas.map((name) => ({
    "@type": "AdministrativeArea",
    name,
  }))
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Plumber",
        "@id": businessId,
        name: siteContent.brand.name,
        url: siteUrl.toString(),
        telephone: PHONE_E164,
        areaServed,
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: HOURS.days,
          opens: HOURS.opens,
          closes: HOURS.closes,
        },
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Destape de cañerías en Quito",
        serviceType: "Destape de cañerías y desagües",
        description: "Destape de inodoros, fregaderos, lavamanos, duchas y desagües. El trabajo se cotiza después de la revisión y antes de empezar.",
        url: canonical,
        provider: { "@id": businessId },
        areaServed,
      },
      {
        "@type": "Service",
        "@id": `${canonical}#revision`,
        name: "Revisión de cañerías tapadas",
        description: "Revisión desde $19.99. El precio del destape se cotiza por separado después de revisar.",
        provider: { "@id": businessId },
        areaServed,
        offers: {
          "@type": "Offer",
          name: "Revisión de cañerías tapadas desde $19.99",
          url: `${canonical}#costo`,
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: 19.99,
            priceCurrency: "USD",
            description: "Precio desde para la revisión, no para el servicio de destape.",
          },
        },
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: drainContent.seo.title,
        description: drainContent.seo.description,
        inLanguage: "es-EC",
        isPartOf: { "@id": `${siteUrl.toString()}#website` },
        mainEntity: { "@id": serviceId },
        breadcrumb: { "@id": `${canonical}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl.toString() },
          { "@type": "ListItem", position: 2, name: "Destape de cañerías", item: canonical },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: drainContent.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <Header brand={siteContent.brand} content={drainHeader} />
      <Hero content={drainContent.hero} imagery={siteContent.imagery} />
      <DrainServices />
      <Philosophy content={drainContent.steps} image={siteContent.imagery.steps} />
      <CallToAction content={drainContent.coverage} />
      <FAQ content={drainContent.faq} />
      <CrossLink content={drainContent.crossLink} />
      <Footer brand={siteContent.brand} contact={siteContent.contact} content={siteContent.footer} />
      <FloatingCTA content={drainContent.floatingCta} />
    </main>
  )
}
