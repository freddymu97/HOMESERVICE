"use client"

import type { PageContent } from "@/lib/site-content"

import { useEffect, useRef, useState } from "react"
import { BadgeDollarSign, CalendarDays, PackageCheck, SearchCheck, ShieldCheck, Wrench } from "lucide-react"
import { HighlightedText } from "./highlighted-text"

const reasonIcons = [SearchCheck, BadgeDollarSign, Wrench, PackageCheck, CalendarDays, ShieldCheck] as const

export function Expertise({ content }: { content: PageContent["reasons"] }) {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) setVisibleItems((previous) => [...new Set([...previous, index])])
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((reference) => {
      if (reference) observer.observe(reference)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">{content.eyebrow}</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            {content.titleBeforeHighlight}
            <br />
            <HighlightedText>{content.titleHighlight}</HighlightedText>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{content.intro}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {content.items.map((item, index) => {
            const Icon = reasonIcons[index]
            return (
              <div
                key={item.title}
                ref={(element) => {
                  itemRefs.current[index] = element
                }}
                data-index={index}
                className={`reveal-item relative pl-8 border-l border-border transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`transition-all duration-1000 ${visibleItems.includes(index) ? "animate-draw-stroke" : ""}`} style={{ transitionDelay: `${index * 150}ms` }}>
                  <Icon className="w-10 h-10 mb-4 text-foreground" strokeWidth={1.25} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
