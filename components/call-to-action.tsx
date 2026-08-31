import type { PageContent } from "@/lib/site-content"

import { ArrowRight } from "lucide-react"
import { HighlightedText } from "./highlighted-text"

export function CallToAction({ content }: { content: PageContent["coverage"] }) {
  return (
    <section id={content.id} className="py-32 md:py-29 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-8">{content.eyebrow}</p>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-8 text-balance">
            {content.titleBeforeHighlight} <HighlightedText>{content.titleHighlight}</HighlightedText>
          </h2>

          <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">{content.intro}</p>

          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {content.sectors.map((sector) => (
              <span key={sector} className="border border-primary-foreground/25 px-4 py-2 text-sm text-primary-foreground/80">{sector}</span>
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href={content.cta.href}
              target="_blank"
              rel="noopener"
              aria-label={content.cta.ariaLabel}
              data-analytics={content.cta.analytics}
              className="inline-flex items-center justify-center gap-3 bg-primary-foreground text-foreground px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/90 transition-colors duration-300 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {content.cta.label}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
