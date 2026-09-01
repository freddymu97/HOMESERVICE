import Image from "next/image"

type AssetSlotProps = {
  asset: {
    filename: string
    src: string
    desktopDimensions: string
    mobileDimensions: string
    alt: string
  }
  available: boolean
  labels: {
    pending: string
    desktop: string
    mobile: string
  }
  imageClassName?: string
}

export function AssetSlot({ asset, available, labels, imageClassName }: AssetSlotProps) {
  if (available) {
    return (
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        sizes="(max-width: 767px) 100vw, 50vw"
        loading="lazy"
        className={imageClassName}
      />
    )
  }

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center border border-dashed border-foreground/25 bg-muted px-5 text-center text-foreground/70"
      role="img"
      aria-label={`${labels.pending}: ${asset.filename}`}
    >
      <span className="text-xs uppercase tracking-[0.25em]">{labels.pending}</span>
      <span className="mt-3 text-sm font-medium text-foreground">{asset.filename}</span>
      <span className="mt-2 text-xs">
        {labels.desktop}: {asset.desktopDimensions}
      </span>
      <span className="text-xs">
        {labels.mobile}: {asset.mobileDimensions}
      </span>
    </div>
  )
}
