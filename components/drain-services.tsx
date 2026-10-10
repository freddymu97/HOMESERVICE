import { getImageProps } from "next/image"
import { ArrowUpRight, Check } from "lucide-react"

import { drainContent } from "@/lib/drain-content"

const services = drainContent.services
const pricing = drainContent.pricing
const specialistGroups = drainContent.specialistGroups

export function DrainServices() {
  const { props: desktopImage } = getImageProps({
    src: services.image.desktopSrc,
    alt: services.image.alt,
    width: 1586,
    height: 992,
    sizes: "(max-width: 1023px) 100vw, 50vw",
    loading: "lazy",
  })
  const { props: mobileImage } = getImageProps({
    src: services.image.mobileSrc,
    alt: services.image.alt,
    width: 1122,
    height: 1402,
    sizes: "calc(100vw - 48px)",
    loading: "lazy",
  })
  return (
    <>
      <section id={services.id} className="bg-secondary/50 py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-12 max-w-3xl md:mb-16">
            <p className="mb-5 text-xs tracking-[0.22em] text-muted-foreground">{services.eyebrow}</p>
            <h2 className="text-4xl font-medium leading-[1.12] tracking-tight text-balance md:text-5xl lg:text-6xl">
              {services.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {services.intro}
            </p>
            <nav aria-label="Servicios de destape" className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <a href="#servicios" className="inline-flex min-h-11 items-center underline decoration-border underline-offset-4 hover:decoration-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground">A domicilio</a>
              <a href="#sin-romper" className="inline-flex min-h-11 items-center underline decoration-border underline-offset-4 hover:decoration-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground">Sin romper</a>
              <a href="#tuberias-desagues" className="inline-flex min-h-11 items-center underline decoration-border underline-offset-4 hover:decoration-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground">Tuberías y desagües</a>
            </nav>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <picture className="relative block overflow-hidden aspect-[1122/1402] md:aspect-[1586/992] lg:sticky lg:top-28">
              <source media="(max-width: 767px)" srcSet={mobileImage.srcSet} sizes={mobileImage.sizes} />
              <img
                {...desktopImage}
                alt={services.image.alt}
                className="h-full w-full object-cover"
              />
            </picture>

            <div>
              {services.items.map((item, index) => (
                <article key={item.title} className="border-t border-border py-6 first:pt-0 first:border-0">
                  <div className="mb-3 flex items-baseline gap-4">
                    <span className="text-xs text-muted-foreground" aria-hidden="true">0{index + 1}</span>
                    <h3 className="text-xl font-medium tracking-tight">{item.title}</h3>
                  </div>
                  <p className="pl-8 text-base leading-relaxed text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="mt-12 border-l-2 border-accent pl-6 md:mt-16 md:max-w-3xl" aria-label={services.symptomsTitle}>
            <h3 className="mb-3 text-lg font-medium">{services.symptomsTitle}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{services.symptoms}</p>
          </aside>
        </div>
      </section>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-12 border-b border-border py-20 md:grid-cols-2 md:gap-16 md:py-28">
          {[specialistGroups.withoutBreaking, specialistGroups.drains].map((group) => (
            <section key={group.id} id={group.id}>
              <p className="mb-5 text-xs tracking-[0.22em] text-muted-foreground">{group.eyebrow}</p>
              <h2 className="text-4xl font-medium leading-[1.12] tracking-tight text-balance md:text-5xl">{group.title}</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{group.description}</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{group.detail}</p>
              <a
                href={pricing.cta.href}
                target="_blank"
                rel="noopener"
                data-analytics={`cta_whatsapp_${group.id}_destape_click`}
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
              >
                Consultar este destape
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </section>
          ))}
        </div>
      </div>

      <section id={pricing.id} className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <div>
              <p className="mb-5 text-xs tracking-[0.22em] text-muted-foreground">{pricing.eyebrow}</p>
              <h2 className="max-w-2xl text-4xl font-medium leading-[1.12] tracking-tight text-balance md:text-5xl lg:text-6xl">
                {pricing.title}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{pricing.intro}</p>
              <ul className="mt-8 space-y-5">
                {pricing.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed md:text-base">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-border bg-secondary/50 p-7 md:p-10">
              <p className="text-sm text-muted-foreground">{pricing.label}</p>
              <p className="mt-2 text-6xl font-medium tracking-tight md:text-7xl">{pricing.price}</p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{pricing.priceNote}</p>
              <div className="my-7 h-px bg-border" />
              <p className="text-sm leading-relaxed text-muted-foreground">{pricing.closing}</p>
              <a
                href={pricing.cta.href}
                target="_blank"
                rel="noopener"
                aria-label={pricing.cta.ariaLabel}
                data-analytics={pricing.cta.analytics}
                className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-foreground px-5 py-3 text-sm text-primary-foreground transition-colors hover:bg-foreground/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
              >
                {pricing.cta.label}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
