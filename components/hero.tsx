"use client"

import type { PageContent, SiteContent } from "@/lib/site-content"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

type HeroProps = {
  content: Omit<PageContent["hero"], "breadcrumb"> & {
    breadcrumb?: PageContent["hero"]["breadcrumb"] | null
  }
  imagery: SiteContent["imagery"]
}

export function Hero({ content, imagery }: HeroProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [animationProgress, setAnimationProgress] = useState(0)
  const [animationComplete, setAnimationComplete] = useState(false)
  const accumulatedScrollRef = useRef(0)
  const touchStartY = useRef<number>(0)
  const lastTouchY = useRef<number>(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      accumulatedScrollRef.current = 700
      setAnimationProgress(1)
      setAnimationComplete(true)
      if (contentRef.current) contentRef.current.style.transform = "none"
      return
    }

    const handleWheel = (event: WheelEvent) => {
      const atTopOfPage = window.scrollY === 0

      if (atTopOfPage && !animationComplete) {
        event.preventDefault()
        accumulatedScrollRef.current = Math.max(0, Math.min(700, accumulatedScrollRef.current + event.deltaY))
        const newProgress = Math.max(0, Math.min(1, accumulatedScrollRef.current / 700))
        setAnimationProgress(newProgress)
        if (newProgress >= 1) setAnimationComplete(true)
        if (contentRef.current) {
          const translateY = newProgress * 200
          const rotationX = newProgress * 45
          const scale = 1 - newProgress * 0.3
          contentRef.current.style.transform = `translateY(${translateY}px) rotateX(${rotationX}deg) scale(${scale})`
        }
      } else if (atTopOfPage && animationComplete && event.deltaY < 0) {
        event.preventDefault()
        accumulatedScrollRef.current = Math.max(0, Math.min(700, accumulatedScrollRef.current + event.deltaY))
        const newProgress = Math.max(0, Math.min(1, accumulatedScrollRef.current / 700))
        setAnimationProgress(newProgress)
        if (newProgress < 1) setAnimationComplete(false)
        if (contentRef.current) {
          const translateY = newProgress * 200
          const rotationX = newProgress * 45
          const scale = 1 - newProgress * 0.3
          contentRef.current.style.transform = `translateY(${translateY}px) rotateX(${rotationX}deg) scale(${scale})`
        }
      }
    }

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0].clientY
      lastTouchY.current = event.touches[0].clientY
    }

    const handleTouchMove = (event: TouchEvent) => {
      const atTopOfPage = window.scrollY === 0
      const currentTouchY = event.touches[0].clientY
      const deltaY = lastTouchY.current - currentTouchY

      if (atTopOfPage && !animationComplete) {
        event.preventDefault()
        accumulatedScrollRef.current = Math.max(0, Math.min(700, accumulatedScrollRef.current + deltaY * 3))
        const newProgress = Math.max(0, Math.min(1, accumulatedScrollRef.current / 700))
        setAnimationProgress(newProgress)
        if (newProgress >= 1) setAnimationComplete(true)
        if (contentRef.current) {
          const translateY = newProgress * 200
          const rotationX = newProgress * 45
          const scale = 1 - newProgress * 0.3
          contentRef.current.style.transform = `translateY(${translateY}px) rotateX(${rotationX}deg) scale(${scale})`
        }
      } else if (atTopOfPage && animationComplete && deltaY < 0) {
        event.preventDefault()
        accumulatedScrollRef.current = Math.max(0, Math.min(700, accumulatedScrollRef.current + deltaY * 3))
        const newProgress = Math.max(0, Math.min(1, accumulatedScrollRef.current / 700))
        setAnimationProgress(newProgress)
        if (newProgress < 1) setAnimationComplete(false)
        if (contentRef.current) {
          const translateY = newProgress * 200
          const rotationX = newProgress * 45
          const scale = 1 - newProgress * 0.3
          contentRef.current.style.transform = `translateY(${translateY}px) rotateX(${rotationX}deg) scale(${scale})`
        }
      }

      lastTouchY.current = currentTouchY
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("touchstart", handleTouchStart, { passive: false })
    window.addEventListener("touchmove", handleTouchMove, { passive: false })

    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [animationComplete])

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={imagery.heroBackground.src} alt={imagery.heroBackground.alt} fill sizes="100vw" priority className="object-cover object-center" />
      </div>

      {content.breadcrumb ? (
        <nav
          aria-label="Migas de pan"
          className="absolute left-6 top-20 z-30 bg-black/35 px-3 py-2 text-xs tracking-[0.18em] text-white/85 backdrop-blur-sm md:left-12 md:text-sm"
        >
          <a
            href={content.breadcrumb.homeHref}
            className="transition-colors duration-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {content.breadcrumb.homeLabel}
          </a>{" "}
          <span aria-hidden="true">›</span>{" "}
          <span aria-current="page">{content.breadcrumb.currentLabel}</span>
        </nav>
      ) : null}

      <div
        ref={contentRef}
        className="hero-scroll-content container mx-auto px-6 md:px-12 lg:pt-0 relative z-10 pb-0 pl-1 pr-1 pt-8 md:pt-0"
        style={{ willChange: "transform", transform: "translateY(0px)", perspective: "1000px", transformStyle: "preserve-3d" }}
        data-animation-progress={animationProgress}
      >
        <div className="mb-72 md:mb-60 lg:mb-80 text-center">
          <p className="text-xs md:text-sm tracking-[0.22em] md:tracking-[0.3em] uppercase text-secondary mb-4">{content.eyebrow}</p>
          <h1 ref={titleRef} className="text-5xl sm:text-6xl md:text-7xl font-medium text-balance text-center text-white mb-5 tracking-tight leading-[0.95] lg:text-8xl">
            {content.title}
          </h1>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-white/90 md:text-lg">
            {content.subtitleMobile}
            {content.subtitleDesktopEnd ? (
              <> <span className="hidden md:inline">{content.subtitleDesktopEnd}</span></>
            ) : null}
            .
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={content.primaryCta.href} target="_blank" rel="noopener" aria-label={content.primaryCta.ariaLabel} data-analytics={content.primaryCta.analytics} className="inline-flex items-center justify-center whitespace-nowrap bg-white px-6 py-3 text-sm text-foreground transition-all duration-300 hover:bg-foreground hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              {content.primaryCta.label}
            </a>
            <a href={content.secondaryCta.href} aria-label={content.secondaryCta.ariaLabel} data-analytics={content.secondaryCta.analytics} className="inline-flex items-center justify-center whitespace-nowrap border border-white/40 px-6 py-3 text-sm text-white transition-colors duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              {content.secondaryCta.label}
            </a>
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-white/75 md:text-sm">{content.microcopy}</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {content.chips.map((chip) => <span key={chip} className="border border-white/25 px-3 py-1.5 text-xs text-white/85">{chip}</span>)}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-20 pointer-events-none">
        <Image src={imagery.heroForeground.src} alt={imagery.heroForeground.alt} fill sizes="100vw" className="object-cover object-center" />
      </div>

      {animationComplete && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-30" aria-hidden="true">
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </div>
      )}
    </section>
  )
}
