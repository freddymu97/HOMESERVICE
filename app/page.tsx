import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { Projects } from "@/components/projects"
import { Expertise } from "@/components/expertise"
import { FAQ } from "@/components/faq"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { publicAssetExists } from "@/lib/assets"
import { getSiteUrl, PHONE_E164, siteContent } from "@/lib/site-content"

export default function Home() {
  const plumbing = siteContent.verticals.plomeria
  const services = {
    ...plumbing.services,
    items: plumbing.services.items.map((service) => ({
      ...service,
      asset: {
        ...service.asset,
        available: publicAssetExists(service.asset.src),
      },
    })),
  }
  const siteUrl = getSiteUrl().toString()
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: siteContent.brand.name,
    telephone: PHONE_E164,
    url: siteUrl,
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
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <Header brand={siteContent.brand} content={siteContent.header} />
      <Hero content={plumbing.hero} imagery={siteContent.imagery} />
      <Philosophy content={plumbing.steps} image={siteContent.imagery.steps} />
      <Projects content={services} />
      <Expertise content={plumbing.reasons} />
      <CallToAction content={plumbing.coverage} />
      <FAQ content={plumbing.faq} />
      <Footer
        brand={siteContent.brand}
        contact={siteContent.contact}
        content={siteContent.footer}
        services={plumbing.services.items}
      />
      <FloatingCTA content={plumbing.floatingCta} />
    </main>
  )
}
