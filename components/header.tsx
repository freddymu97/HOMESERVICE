"use client"

import type { HeaderContent, SiteContent } from "@/lib/site-content"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type HeaderProps = {
  brand: SiteContent["brand"]
  content: HeaderContent
}

export function Header({ brand, content }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  useEffect(() => {
    if (!mobileMenuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    const desktop = window.matchMedia("(min-width: 1280px)")
    const onResize = () => { if (desktop.matches) setMobileMenuOpen(false) }
    window.addEventListener("keydown", onKeyDown)
    desktop.addEventListener("change", onResize)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      desktop.removeEventListener("change", onResize)
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 py-4 transition-colors duration-300 md:py-5",
        scrolled || mobileMenuOpen
          ? "bg-primary/95 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav className="container mx-auto flex items-center justify-between gap-6 px-6 md:px-12" aria-label={brand.name}>
        <a
          href="/"
          className="flex items-center text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          aria-label={brand.homeAriaLabel}
        >
          <Image
            src="/images/homeservice-logo-blanco.png"
            alt={brand.name}
            width={2000}
            height={800}
            sizes="(max-width: 767px) 132px, 150px"
            className="h-auto w-[132px] md:w-[150px]"
          />
        </a>

        <ul className="hidden items-center gap-6 text-sm xl:flex 2xl:gap-8">
          {content.navigation.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="inline-flex min-h-11 items-center text-white transition-colors hover:text-[rgb(251,146,60)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={content.cta.href}
          target="_blank"
          rel="noopener"
          aria-label={content.cta.ariaLabel}
          data-analytics={content.cta.analytics}
          className="hidden min-h-11 shrink-0 items-center justify-center bg-white px-5 py-3 text-sm text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white xl:inline-flex"
        >
          {content.cta.label}
        </a>

        <button
          type="button"
          ref={menuButtonRef}
          className="mobile-menu-button inline-flex h-11 w-11 shrink-0 items-center justify-center text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white xl:hidden"
          aria-label={mobileMenuOpen ? content.closeMenuAriaLabel : content.openMenuAriaLabel}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          )}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        inert={!mobileMenuOpen}
        className={cn(
          "mobile-navigation-no-js overflow-y-auto transition-all duration-300 ease-in-out xl:hidden",
          mobileMenuOpen ? "mt-6 max-h-[calc(100svh-100px)] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="container mx-auto px-6">
          <ul className="mb-6 flex flex-col gap-2">
            {content.navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block py-2 text-2xl font-medium text-white transition-colors hover:text-[rgb(251,146,60)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={content.cta.href}
            target="_blank"
            rel="noopener"
            aria-label={content.cta.ariaLabel}
            data-analytics={content.cta.analytics}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm px-5 py-2.5 bg-white text-foreground border border-foreground/20 hover:bg-foreground hover:text-white transition-all duration-300 mb-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            onClick={closeMobileMenu}
          >
            {content.cta.label}
          </a>
        </div>
      </div>
      <noscript>
        <nav aria-label="Navegación móvil" className="container mx-auto px-6 pb-2 pt-4 xl:hidden">
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {content.navigation.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="inline-flex min-h-11 items-center text-sm text-white underline underline-offset-4">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </noscript>
    </header>
  )
}
