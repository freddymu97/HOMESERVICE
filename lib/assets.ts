import "server-only"

import { existsSync } from "node:fs"
import { join } from "node:path"

export function publicAssetExists(src: string) {
  return existsSync(join(process.cwd(), "public", src.replace(/^\//, "")))
}
