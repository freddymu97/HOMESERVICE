import type { Metadata } from "next"

import { CallToAction } from "@/components/call-to-action"
import { CrossLink } from "@/components/cross-link"
import { Expertise } from "@/components/expertise"
import { FAQ } from "@/components/faq"
import { FloatingCTA } from "@/components/floating-cta"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { Projects } from "@/components/projects"
import { publicAssetExists } from "@/lib/assets"
import { PHONE_E164, siteContent } from "@/lib/site-content"

const electricity = siteContent.verticals.electricidad
const canonical = electricity.seo.canonical
const ogImage = publicAssetExists(electricity.seo.ogImage)
  ? electricity.seo.ogImage
  : electricity.seo.ogImageFallback

export const metadata: Metadata = {
  title: electricity.seo.title,
  description: electricity.seo.description,
  alternates: { canonical },
  openGraph: {
    title: electricity.seo.title,
    description: electricity.seo.description,
    url: canonical,
    siteName: siteContent.brand.name,
    locale: siteContent.seo.locale,
    type: "website",
    images: [{ url: ogImage, width: 1200, height: 630, alt: electricity.seo.ogImageAlt }],
  },
  twitter: {
    card: siteContent.seo.twitterCard,
    title: electricity.seo.title,
    description: electricity.seo.description,
    images: [ogImage],
  },
}

export default function ElectricityPage() {
  const services = {
    ...electricity.services,
    items: electricity.services.items.map((service) => ({
      ...service,
      asset: { ...service.asset, available: publicAssetExists(service.asset.src) },
    })),
  }
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Electrician",
        "@id": `${canonical}#business`,
        name: siteContent.brand.name,
        telephone: PHONE_E164,
        url: canonical,
        areaServed: electricity.coverage.structuredAreas.map((name) => ({
          "@type": "AdministrativeArea",
          name,
        })),
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: siteContent.contact.hours.days,
          opens: siteContent.contact.hours.opens,
          closes: siteContent.contact.hours.closes,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: electricity.services.title,
          itemListElement: electricity.services.items.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
            },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://homeservicequito.com/" },
          { "@type": "ListItem", position: 2, name: "Electricista en Quito", item: canonical },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: electricity.faq.items.map((item) => ({
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
      <Header brand={siteContent.brand} content={siteContent.headers.electricidad} />
      <Hero content={electricity.hero} imagery={siteContent.imagery} />
      <Philosophy content={electricity.steps} image={siteContent.imagery.steps} />
      <Projects content={services} />
      <Expertise content={electricity.reasons} />
      <CallToAction content={electricity.coverage} />
      <FAQ content={electricity.faq} />
      <CrossLink content={electricity.crossLink} />
      <Footer brand={siteContent.brand} contact={siteContent.contact} content={siteContent.footer} />
      <FloatingCTA content={electricity.floatingCta} />
    </main>
  )
}
