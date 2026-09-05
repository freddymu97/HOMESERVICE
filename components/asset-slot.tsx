import { getImageProps } from "next/image"

import { cn } from "@/lib/utils"

type AssetSlotProps = {
  asset: {
    filename: string
    src: string
    mobileFilename: string
    mobileSrc: string
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
    const common = {
      alt: asset.alt,
      loading: "lazy" as const,
      quality: 85,
    }
    const { props: desktopImage } = getImageProps({
      ...common,
      src: asset.src,
      width: 1200,
      height: 1500,
      sizes: "(min-width: 768px) 50vw, 100vw",
    })
    const { props: mobileImage } = getImageProps({
      ...common,
      src: asset.mobileSrc,
      width: 1600,
      height: 1000,
      sizes: "100vw",
    })

    return (
      <picture>
        <source media="(max-width: 767px)" srcSet={mobileImage.srcSet} sizes="100vw" />
        <img
          {...desktopImage}
          alt={asset.alt}
          className={cn("absolute inset-0 h-full w-full object-cover", imageClassName)}
        />
      </picture>
    )
  }

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center border border-dashed border-foreground/25 bg-muted px-5 text-center text-foreground/70"
      role="img"
      aria-label={`${labels.pending}: ${asset.filename} / ${asset.mobileFilename}`}
    >
      <span className="text-xs uppercase tracking-[0.25em]">{labels.pending}</span>
      <span className="mt-3 text-sm font-medium text-foreground">{asset.filename}</span>
      <span className="mt-2 text-xs">
        {labels.desktop}: {asset.desktopDimensions}
      </span>
      <span className="text-xs">
        {labels.mobile}: {asset.mobileFilename} · {asset.mobileDimensions}
      </span>
    </div>
  )
}
