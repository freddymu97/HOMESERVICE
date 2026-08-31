import type { Metadata } from "next"

import { CallToAction } from "@/components/call-to-action"
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

const home = siteContent.verticals.home

export const metadata: Metadata = {
  title: home.seo.title,
  description: home.seo.description,
  alternates: { canonical: home.seo.canonical },
  openGraph: {
    title: home.seo.title,
    description: home.seo.description,
    url: home.seo.canonical,
    siteName: siteContent.brand.name,
    locale: siteContent.seo.locale,
    type: "website",
    images: [{ url: home.seo.ogImage, width: 1200, height: 630, alt: home.seo.ogImageAlt }],
  },
  twitter: {
    card: siteContent.seo.twitterCard,
    title: home.seo.title,
    description: home.seo.description,
    images: [home.seo.ogImage],
  },
}

export default function Home() {
  const services = {
    ...home.services,
    items: home.services.items.map((service) => ({
      ...service,
      asset: { ...service.asset, available: publicAssetExists(service.asset.src) },
    })),
  }
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${home.seo.canonical}#business`,
        name: siteContent.brand.name,
        telephone: PHONE_E164,
        url: home.seo.canonical,
        parentOrganization: { "@id": `${home.seo.canonical}#organization` },
        areaServed: home.coverage.structuredAreas.map((name) => ({
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
          name: "Servicios a domicilio de HomeService",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Plomería a domicilio",
                url: "https://homeservicequito.com/plomero-quito",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Electricidad a domicilio",
                url: "https://homeservicequito.com/electricista-quito",
              },
            },
          ],
        },
      },
      {
        "@type": "Organization",
        "@id": `${home.seo.canonical}#organization`,
        name: siteContent.brand.name,
        url: home.seo.canonical,
        telephone: PHONE_E164,
      },
      {
        "@type": "WebSite",
        "@id": `${home.seo.canonical}#website`,
        name: siteContent.brand.name,
        url: home.seo.canonical,
        publisher: { "@id": `${home.seo.canonical}#organization` },
      },
    ],
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <Header brand={siteContent.brand} content={siteContent.headers.home} />
      <Hero content={home.hero} imagery={siteContent.imagery} />
      <Projects content={services} />
      <Philosophy content={home.steps} image={siteContent.imagery.steps} />
      <Expertise content={home.reasons} />
      <CallToAction content={home.coverage} />
      <FAQ content={home.faq} />
      <Footer brand={siteContent.brand} contact={siteContent.contact} content={siteContent.footer} />
      <FloatingCTA content={home.floatingCta} />
    </main>
  )
}
