import type { PlumbingContent, SiteContent } from "@/lib/site-content"

type FooterProps = {
  brand: SiteContent["brand"]
  contact: SiteContent["contact"]
  content: SiteContent["footer"]
  services: PlumbingContent["services"]["items"]
}

export function Footer({ brand, contact, content, services }: FooterProps) {
  return (
    <footer className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <p className="mb-6 text-xl font-medium tracking-tight text-foreground">{brand.name}</p>
            <p className="text-muted-foreground leading-relaxed max-w-sm">{brand.footerLine}</p>
            <p className="mt-6 text-sm text-muted-foreground">{content.futureVertical}</p>
          </div>

          <div>
            <h2 className="text-sm font-medium mb-4">{content.servicesHeading}</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {services.map((service) => <li key={service.title}>{service.title}</li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-medium mb-4">{content.contactHeading}</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={contact.whatsappHref} target="_blank" rel="noopener" className="hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground">
                  {contact.whatsappLabel}: {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={contact.phoneHref} className="hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground">
                  {contact.phoneLabel}: {contact.phoneDisplay}
                </a>
              </li>
              <li>{contact.hours.footer}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {content.copyrightSuffix}</p>
        </div>
      </div>
    </footer>
  )
}
