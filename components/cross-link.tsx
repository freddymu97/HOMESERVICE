type CrossLinkProps = {
  content: {
    prefix: string
    label: string
    href: string
  }
}

export function CrossLink({ content }: CrossLinkProps) {
  return (
    <div className="container mx-auto px-6 py-8 md:px-12">
      <p className="text-sm text-muted-foreground">
        {content.prefix}{" "}
        <a
          href={content.href}
          className="text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors duration-300 hover:decoration-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          {content.label}
        </a>
        .
      </p>
    </div>
  )
}
