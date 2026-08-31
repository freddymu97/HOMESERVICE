import type { SiteContent } from "@/lib/site-content"

type FooterProps = {
  brand: SiteContent["brand"]
  contact: SiteContent["contact"]
  content: SiteContent["footer"]
}

export function Footer({ brand, contact, content }: FooterProps) {
  return (
    <footer className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <p className="mb-6 text-xl font-medium tracking-tight text-foreground">{brand.name}</p>
            <p className="text-muted-foreground leading-relaxed max-w-sm">{brand.footerLine}</p>
          </div>

          {content.columns.map((column) => (
            <div key={column.heading}>
              <h2 className="text-sm font-medium mb-4">
                <a
                  href={column.href}
                  className="hover:text-muted-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
                >
                  {column.heading}
                </a>
              </h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {column.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}

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
