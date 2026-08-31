"use client"

import type { PlumbingContent } from "@/lib/site-content"

import { useState } from "react"
import { Plus } from "lucide-react"

export function FAQ({ content }: { content: PlumbingContent["faq"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => setOpenIndex(openIndex === index ? null : index)

  return (
    <section id={content.id} className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">{content.eyebrow}</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">{content.title}</h2>
        </div>

        <div>
          {content.items.map((faq, index) => {
            const answerId = `faq-answer-${index}`
            const isOpen = openIndex === index

            return (
              <div key={faq.question} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  className="w-full py-6 flex items-start justify-between gap-6 text-left group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">{faq.question}</span>
                  <Plus className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`} strokeWidth={1.5} aria-hidden="true" />
                </button>
                <div id={answerId} className={`faq-answer overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10">
          <a
            href={content.cta.href}
            target="_blank"
            rel="noopener"
            aria-label={content.cta.ariaLabel}
            data-analytics={content.cta.analytics}
            className="inline-flex items-center justify-center whitespace-nowrap border border-foreground/30 px-6 py-3 text-sm transition-colors duration-300 hover:bg-foreground hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
          >
            {content.cta.label}
          </a>
        </div>
      </div>
    </section>
  )
}
