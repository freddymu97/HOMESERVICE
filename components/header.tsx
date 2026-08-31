"use client"

import type { HeaderContent, SiteContent } from "@/lib/site-content"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type HeaderProps = {
  brand: SiteContent["brand"]
  content: HeaderContent
}

export function Header({ brand, content }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header
      className={cn(
        "fixed z-50 transition-all duration-500 my-0 py-0 rounded-none",
        scrolled || mobileMenuOpen
          ? "bg-primary backdrop-blur-md py-4 top-4 left-4 right-4 rounded-2xl"
          : "bg-transparent py-4 top-0 left-0 right-0",
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between md:px-[24]" aria-label={brand.name}>
        <a
          href="/"
          className="flex items-center gap-2 text-xl font-medium tracking-tight text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          aria-label={brand.homeAriaLabel}
        >
          {brand.name}
        </a>

        <ul className="hidden lg:flex items-center gap-10 text-sm tracking-wide">
          {content.navigation.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="hover:text-[rgb(251,146,60)] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-[rgb(251,146,60)] after:transition-all after:duration-300 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
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
          className={cn(
            "hidden lg:inline-flex items-center gap-2 whitespace-nowrap text-sm px-5 py-2.5 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white",
            scrolled
              ? "bg-white text-foreground border border-foreground/20 hover:bg-foreground hover:text-white"
              : "bg-white text-foreground border border-foreground/20 hover:bg-foreground hover:text-white",
          )}
        >
          {content.cta.label}
        </a>

        <button
          type="button"
          className="mobile-menu-button lg:hidden z-50 transition-colors duration-300 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
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
        className={cn(
          "mobile-navigation-no-js lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-[600px] opacity-100 mt-8" : "max-h-0 opacity-0",
        )}
      >
        <div className="container mx-auto px-6">
          <ul className="flex flex-col gap-6 mb-8">
            {content.navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-[rgb(251,146,60)] transition-colors duration-300 text-white text-4xl font-light block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
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
    </header>
  )
}
