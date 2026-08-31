import type { PageContent } from "@/lib/site-content"

import { MessageCircle } from "lucide-react"

export function FloatingCTA({ content }: { content: PageContent["floatingCta"] }) {
  return (
    <a
      href={content.href}
      target="_blank"
      rel="noopener"
      aria-label={content.ariaLabel}
      data-analytics={content.analytics}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 bg-foreground px-4 py-3 text-sm text-primary-foreground shadow-lg transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">{content.label}</span>
    </a>
  )
}
