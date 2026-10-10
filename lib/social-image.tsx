import { ImageResponse } from "next/og"

import { getSiteUrl } from "@/lib/site-content"

export function socialImage({ title, eyebrow, detail }: { title: string; eyebrow: string; detail: string }) {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", flexDirection: "column", justifyContent: "space-between", background: "#f5f2eb", color: "#24211e", padding: "56px 64px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="54" height="54" viewBox="0 0 64 64" fill="none">
            <path d="M10 29 32 10 54 29M17 25v29h30V25M27 54V37h10v17" stroke="#24211e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontSize: 34, fontWeight: 600, letterSpacing: "-1px" }}>HomeService</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ width: 36, height: 3, background: "#fb923c" }} />
            <span style={{ fontSize: 18, letterSpacing: "3px", textTransform: "uppercase" }}>{eyebrow}</span>
          </div>
          <div style={{ display: "flex", maxWidth: 1000, fontSize: 72, lineHeight: 1.08, fontWeight: 500, letterSpacing: "-3px" }}>{title}</div>
          <div style={{ display: "flex", fontSize: 27, color: "#5b554d" }}>{detail}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #cfc7bc", paddingTop: 20, fontSize: 19, color: "#5b554d" }}>
          <span>{getSiteUrl().hostname}</span>
          <span>Quito y sus valles</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
