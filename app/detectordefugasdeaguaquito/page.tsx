import type { Metadata } from "next"

import { CallToAction } from "@/components/call-to-action"
import { CrossLink } from "@/components/cross-link"
import { FAQ } from "@/components/faq"
import { FloatingCTA } from "@/components/floating-cta"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LeakServices } from "@/components/leak-services"
import { Philosophy } from "@/components/philosophy"
import { leakContent, leakHeader } from "@/lib/leak-content"
import { getSiteUrl, HOURS, PHONE_E164, siteContent } from "@/lib/site-content"

const siteUrl = getSiteUrl()
const canonical = new URL("detectordefugasdeaguaquito", siteUrl).toString()
const businessId = `${siteUrl.toString()}#business`
const serviceId = `${canonical}#service`

export const metadata: Metadata = {
  title: leakContent.seo.title,
  description: leakContent.seo.description,
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    title: leakContent.seo.title,
    description: leakContent.seo.description,
    url: canonical,
    siteName: siteContent.brand.name,
    locale: siteContent.seo.locale,
    type: "website",
    images: [{ url: leakContent.seo.ogImage, width: 1200, height: 630, alt: leakContent.seo.ogImageAlt }],
  },
  twitter: {
    card: siteContent.seo.twitterCard,
    title: leakContent.seo.title,
    description: leakContent.seo.description,
    images: [leakContent.seo.ogImage],
  },
}

export default function LeakPage() {
  const areaServed = leakContent.coverage.structuredAreas.map((name) => ({
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
        name: "Detección de fugas de agua en Quito",
        serviceType: "Localización de fugas de agua en instalaciones privadas",
        description: "Detección de fugas de agua ocultas con geófono y cámara termográfica según las condiciones de la instalación. Se cotiza por separado de la revisión y de la reparación.",
        url: canonical,
        provider: { "@id": businessId },
        areaServed,
      },
      {
        "@type": "Service",
        "@id": `${canonical}#revision`,
        name: "Revisión de una posible fuga de agua",
        description: "Revisión desde $19.99. No incluye detección especializada ni reparación, que se cotizan por separado.",
        provider: { "@id": businessId },
        areaServed,
        offers: {
          "@type": "Offer",
          name: "Revisión de una posible fuga de agua desde $19.99",
          url: `${canonical}#costo`,
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: 19.99,
            priceCurrency: "USD",
            description: "Precio desde para la revisión; no incluye detección especializada ni reparación.",
          },
        },
      },
      {
        "@type": "Service",
        "@id": `${canonical}#reparacion`,
        name: "Reparación de fugas de agua en Quito",
        serviceType: "Reparación de fugas en instalaciones privadas",
        description: "La reparación se cotiza por separado después del diagnóstico y se autoriza antes de intervenir la instalación.",
        url: `${canonical}#reparacion`,
        provider: { "@id": businessId },
        areaServed,
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: leakContent.seo.title,
        description: leakContent.seo.description,
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
          { "@type": "ListItem", position: 2, name: "Detección de fugas", item: canonical },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: leakContent.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <Header brand={siteContent.brand} content={leakHeader} />
      <Hero content={leakContent.hero} imagery={siteContent.imagery} />
      <LeakServices />
      <Philosophy content={leakContent.steps} image={siteContent.imagery.steps} />
      <CallToAction content={leakContent.coverage} />
      <FAQ content={leakContent.faq} />
      <CrossLink content={leakContent.crossLink} />
      <Footer brand={siteContent.brand} contact={siteContent.contact} content={siteContent.footer} />
      <FloatingCTA content={leakContent.floatingCta} />
    </main>
  )
}
