import { getImageProps } from "next/image"
import { ArrowUpRight, AudioLines, Check, Thermometer } from "lucide-react"

import { leakContent } from "@/lib/leak-content"

const services = leakContent.services
const pricing = leakContent.pricing
const specialistGroups = leakContent.specialistGroups
const equipment = leakContent.equipment
const equipmentIcons = [AudioLines, Thermometer] as const

export function LeakServices() {
  const { props: desktopImage } = getImageProps({
    src: services.image.desktopSrc,
    alt: services.image.alt,
    width: 1200,
    height: 1500,
    sizes: "(max-width: 1023px) calc(100vw - 96px), calc((100vw - 160px) / 2)",
    loading: "lazy",
  })
  const { props: mobileImage } = getImageProps({
    src: services.image.mobileSrc,
    alt: services.image.alt,
    width: 1600,
    height: 1000,
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
            <nav aria-label="Servicios de detección de fugas" className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {[
                { label: "A domicilio", href: "#servicios" },
                { label: "Sin romper", href: "#sin-romper" },
                { label: "Equipos", href: "#equipos" },
                { label: "Reparación", href: "#reparacion" },
              ].map((item) => (
                <a key={item.href} href={item.href} className="inline-flex min-h-11 items-center underline decoration-border underline-offset-4 hover:decoration-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground">{item.label}</a>
              ))}
            </nav>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <picture className="relative block overflow-hidden aspect-[16/10] md:aspect-[4/5] lg:sticky lg:top-28">
              <source media="(max-width: 767px)" srcSet={mobileImage.srcSet} sizes={mobileImage.sizes} />
              <img {...desktopImage} alt={services.image.alt} className="h-full w-full object-cover" />
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

      <section id={equipment.id} className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-10 max-w-3xl md:mb-14">
            <p className="mb-5 text-xs tracking-[0.22em] text-muted-foreground">{equipment.eyebrow}</p>
            <h2 className="text-4xl font-medium leading-[1.12] tracking-tight text-balance md:text-5xl lg:text-6xl">{equipment.title}</h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{equipment.intro}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            {equipment.items.map((item, index) => {
              const Icon = equipmentIcons[index]
              return (
                <article key={item.title} className="border-t border-border pt-7">
                  <Icon className="mb-5 h-9 w-9 text-foreground" strokeWidth={1.25} aria-hidden="true" />
                  <h3 className="mb-4 text-xl font-medium tracking-tight">{item.title}</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">{item.description}</p>
                </article>
              )
            })}
          </div>
          <div className="mt-10 flex flex-col items-start gap-5 border-t border-border pt-7 md:flex-row md:items-center md:justify-between md:gap-10">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{equipment.closing}</p>
            <a href={equipment.cta.href} target="_blank" rel="noopener" aria-label={equipment.cta.ariaLabel} data-analytics={equipment.cta.analytics} className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground">
              {equipment.cta.label}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-12 border-y border-border py-20 md:grid-cols-2 md:gap-16 md:py-28">
          {[specialistGroups.withoutBreaking, specialistGroups.repair].map((group) => (
            <section key={group.id} id={group.id}>
              <p className="mb-5 text-xs tracking-[0.22em] text-muted-foreground">{group.eyebrow}</p>
              <h2 className="text-4xl font-medium leading-[1.12] tracking-tight text-balance md:text-5xl">{group.title}</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{group.description}</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{group.detail}</p>
              <a href={pricing.cta.href} target="_blank" rel="noopener" data-analytics={`cta_whatsapp_${group.id}_fugas_click`} className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground">
                Consultar mi caso
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
              <h2 className="max-w-2xl text-4xl font-medium leading-[1.12] tracking-tight text-balance md:text-5xl lg:text-6xl">{pricing.title}</h2>
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
              <a href={pricing.cta.href} target="_blank" rel="noopener" aria-label={pricing.cta.ariaLabel} data-analytics={pricing.cta.analytics} className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-foreground px-5 py-3 text-sm text-primary-foreground transition-colors hover:bg-foreground/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground">
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
