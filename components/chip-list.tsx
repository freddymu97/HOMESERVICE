import { cn } from "@/lib/utils"

type ChipListProps = {
  items: ReadonlyArray<string>
  tone?: "light" | "dark"
  className?: string
}

export function ChipList({ items, tone = "light", className }: ChipListProps) {
  return (
    <div className={cn("flex flex-wrap gap-2 md:gap-3", className)}>
      {items.map((item) => (
        <span
          key={item}
          className={cn(
            "max-w-full border px-4 py-2 text-sm break-words",
            tone === "dark"
              ? "border-primary-foreground/25 text-primary-foreground/80"
              : "border-foreground/25 text-muted-foreground",
          )}
        >
          {item}
        </span>
      ))}
    </div>
  )
}
