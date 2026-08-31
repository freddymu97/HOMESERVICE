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

const plumbing = siteContent.verticals.plomeria
const canonical = plumbing.seo.canonical
const ogImage = publicAssetExists(plumbing.seo.ogImage)
  ? plumbing.seo.ogImage
  : plumbing.seo.ogImageFallback

export const metadata: Metadata = {
  title: plumbing.seo.title,
  description: plumbing.seo.description,
  alternates: { canonical },
  openGraph: {
    title: plumbing.seo.title,
    description: plumbing.seo.description,
    url: canonical,
    siteName: siteContent.brand.name,
    locale: siteContent.seo.locale,
    type: "website",
    images: [{ url: ogImage, width: 1200, height: 630, alt: plumbing.seo.ogImageAlt }],
  },
  twitter: {
    card: siteContent.seo.twitterCard,
    title: plumbing.seo.title,
    description: plumbing.seo.description,
    images: [ogImage],
  },
}

export default function PlumbingPage() {
  const services = {
    ...plumbing.services,
    items: plumbing.services.items.map((service) => ({
      ...service,
      asset: { ...service.asset, available: publicAssetExists(service.asset.src) },
    })),
  }
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Plumber",
        "@id": `${canonical}#business`,
        name: siteContent.brand.name,
        telephone: PHONE_E164,
        url: canonical,
        areaServed: plumbing.coverage.structuredAreas.map((name) => ({
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
          name: plumbing.services.title,
          itemListElement: plumbing.services.items.map((service) => ({
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
          { "@type": "ListItem", position: 2, name: "Plomero en Quito", item: canonical },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: plumbing.faq.items.map((item) => ({
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
      <Header brand={siteContent.brand} content={siteContent.headers.plomeria} />
      <Hero content={plumbing.hero} imagery={siteContent.imagery} />
      <Philosophy content={plumbing.steps} image={siteContent.imagery.steps} />
      <Projects content={services} />
      <Expertise content={plumbing.reasons} />
      <CallToAction content={plumbing.coverage} />
      <FAQ content={plumbing.faq} />
      <CrossLink content={plumbing.crossLink} />
      <Footer
        brand={siteContent.brand}
        contact={siteContent.contact}
        content={siteContent.footer}
      />
      <FloatingCTA content={plumbing.floatingCta} />
    </main>
  )
}
