"use client"

import type { PlumbingContent, SiteContent } from "@/lib/site-content"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { HighlightedText } from "./highlighted-text"

type PhilosophyProps = {
  content: PlumbingContent["steps"]
  image: SiteContent["imagery"]["steps"]
}

export function Philosophy({ content, image }: PhilosophyProps) {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) setVisibleItems((previous) => [...new Set([...previous, index])])
        })
      },
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((reference) => {
      if (reference) observer.observe(reference)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id={content.id} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">{content.eyebrow}</p>
            <h2 className="text-6xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
              {content.titleBeforeHighlight}
              <br />
              <HighlightedText>{content.titleHighlight}</HighlightedText>
            </h2>

            <div className="relative hidden lg:block">
              <Image src={image.src} alt={image.alt} width={1696} height={1928} sizes="50vw" loading="lazy" className="opacity-90 relative z-10 w-auto" />
            </div>
          </div>

          <div className="space-y-6 lg:pt-48">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-12">{content.intro}</p>

            {content.items.map((item, index) => (
              <div
                key={item.title}
                ref={(element) => {
                  itemRefs.current[index] = element
                }}
                data-index={index}
                className={`reveal-item transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <span className="text-muted-foreground/50 text-sm font-medium">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
