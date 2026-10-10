import type { PageContent, SiteContent } from "@/lib/site-content"

import Image from "next/image"
import { ArrowDown, MessageCircle, Phone } from "lucide-react"

type HeroProps = {
  content: Omit<PageContent["hero"], "breadcrumb"> & {
    breadcrumb?: PageContent["hero"]["breadcrumb"] | null
  }
  imagery: SiteContent["imagery"]
}

export function Hero({ content, imagery }: HeroProps) {
  return (
    <section id="hero" className="relative isolate flex min-h-svh items-center overflow-hidden bg-primary">
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        <Image src={imagery.heroBackground.src} alt="" fill sizes="100vw" priority className="object-cover object-center" />
        <Image src={imagery.heroForeground.src} alt="" fill sizes="100vw" className="object-cover object-center" />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(16,16,14,0.45)_0%,rgba(16,16,14,0.58)_62%,rgba(16,16,14,0.48)_100%)]" aria-hidden="true" />

      <div className="container mx-auto px-6 pb-28 pt-32 text-center md:px-12 md:pb-36 md:pt-40">
        {content.breadcrumb ? (
          <nav aria-label="Migas de pan" className="mb-6 text-xs text-white/75">
            <ol className="flex flex-wrap items-center justify-center gap-2">
              <li>
                <a href={content.breadcrumb.homeHref} className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                  {content.breadcrumb.homeLabel}
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{content.breadcrumb.currentLabel}</li>
            </ol>
          </nav>
        ) : null}

        <p className="mb-5 text-[10px] uppercase leading-relaxed tracking-[0.24em] text-white/80 sm:text-xs md:mb-7 md:tracking-[0.3em]">{content.eyebrow}</p>
        <h1 className="mx-auto mb-6 max-w-6xl text-balance text-[clamp(2.25rem,6vw,5rem)] font-medium leading-[1.06] tracking-[-0.045em] text-white">
          {content.title}
        </h1>
        <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-white/90 md:text-lg">
          {content.subtitleMobile}
          {content.subtitleDesktopEnd ? <> {content.subtitleDesktopEnd}</> : null}
          {!/[.!?]$/.test(content.subtitleDesktopEnd || content.subtitleMobile) ? "." : null}
        </p>

        <div className="mx-auto mt-7 flex max-w-sm flex-col items-stretch justify-center gap-2 sm:max-w-none sm:flex-row sm:items-center sm:gap-7 md:mt-9">
          <a
            href={content.primaryCta.href}
            target="_blank"
            rel="noopener"
            aria-label={content.primaryCta.ariaLabel}
            data-analytics={content.primaryCta.analytics}
            className="inline-flex min-h-12 items-center justify-center gap-3 bg-white px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            {content.primaryCta.label}
          </a>
          <a
            href={content.secondaryCta.href}
            aria-label={content.secondaryCta.ariaLabel}
            data-analytics={content.secondaryCta.analytics}
            className="inline-flex min-h-12 items-center justify-center gap-2 px-3 py-3 text-sm text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {content.secondaryCta.label}
          </a>
        </div>

        <p className="mx-auto mt-5 max-w-xl text-xs leading-relaxed text-white/80 md:text-sm">{content.microcopy}</p>
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/80">
          {content.chips.map((chip) => <li key={chip}>{chip}</li>)}
        </ul>
      </div>

      <a href="#servicios" aria-label="Ver servicios" className="absolute bottom-8 left-1/2 inline-flex h-11 w-11 -translate-x-1/2 items-center justify-center text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
        <ArrowDown className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
      </a>
    </section>
  )
}
