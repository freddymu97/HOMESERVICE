import { cn } from "@/lib/utils"

type ChipListProps = {
  items: ReadonlyArray<string>
  tone?: "light" | "dark"
  className?: string
}

export function ChipList({ items, tone = "light", className }: ChipListProps) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {items.map((item) => (
        <span
          key={item}
          tabIndex={0}
          className={cn(
            "border px-4 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-4",
            tone === "dark"
              ? "border-primary-foreground/25 text-primary-foreground/80 focus-visible:outline-white"
              : "border-foreground/25 text-muted-foreground focus-visible:outline-foreground",
          )}
        >
          {item}
        </span>
      ))}
    </div>
  )
}
