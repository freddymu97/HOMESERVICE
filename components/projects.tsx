"use client"

import type { PlumbingContent } from "@/lib/site-content"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { AssetSlot } from "@/components/asset-slot"

type ServicesContent = Omit<PlumbingContent["services"], "items"> & {
  items: ReadonlyArray<{
    id: number
    title: string
    description: string
    asset: {
      filename: string
      src: string
      desktopDimensions: string
      mobileDimensions: string
      alt: string
      available: boolean
    }
  }>
}

export function Projects({ content }: { content: ServicesContent }) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((previous) => new Set(previous).add(content.items[index].id))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((reference) => {
      if (reference) observer.observe(reference)
    })

    return () => observer.disconnect()
  }, [content.items])

  return (
    <section id={content.id} className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">{content.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">{content.title}</h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">{content.intro}</p>
          </div>
          <a
            href={content.cta.href}
            target="_blank"
            rel="noopener"
            aria-label={content.cta.ariaLabel}
            data-analytics={content.cta.analytics}
            className="inline-flex items-center gap-2 whitespace-nowrap text-sm text-muted-foreground hover:text-foreground transition-colors group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
          >
            {content.cta.label}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {content.items.map((service, index) => (
            <article
              key={service.id}
              className="group"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                ref={(element) => {
                  imageRefs.current[index] = element
                }}
                className="relative overflow-hidden aspect-[16/10] md:aspect-[4/5] mb-6"
              >
                <AssetSlot
                  asset={service.asset}
                  available={service.asset.available}
                  labels={content.assetSlot}
                  imageClassName={`object-cover transition-transform duration-700 ${
                    hoveredId === service.id ? "scale-105" : "scale-100"
                  }`}
                />
                <div
                  className="reveal-cover absolute inset-0 bg-primary origin-top pointer-events-none"
                  style={{
                    transform: revealedImages.has(service.id) ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                  }}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
                <span className="text-muted-foreground/60 text-sm">0{service.id}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">{content.schedule}</p>
          <a
            href={content.cta.href}
            target="_blank"
            rel="noopener"
            aria-label={content.cta.ariaLabel}
            data-analytics={content.cta.analytics}
            className="inline-flex items-center justify-center whitespace-nowrap bg-foreground px-6 py-3 text-sm text-primary-foreground transition-colors duration-300 hover:bg-foreground/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
          >
            {content.cta.label}
          </a>
        </div>
      </div>
    </section>
  )
}
