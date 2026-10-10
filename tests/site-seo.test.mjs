import assert from "node:assert/strict"
import { spawn } from "node:child_process"
import { once } from "node:events"
import { access } from "node:fs/promises"
import { createServer } from "node:net"
import { createRequire } from "node:module"
import { setTimeout as delay } from "node:timers/promises"
import { after, before, test } from "node:test"

const require = createRequire(import.meta.url)
const site = new URL(`${(process.env.NEXT_PUBLIC_SITE_URL || "https://www.homeservicequito.com").replace(/\/+$/, "")}/`)
if (site.href === "https://homeservicequito.com/") site.hostname = "www.homeservicequito.com"
const servicePaths = ["/", "/plomero-quito", "/electricista-quito", "/destapedecaneriasquito", "/detectordefugasdeaguaquito"]
let server
let base
let logs = ""

function elements(html, tag) {
  return [...html.matchAll(new RegExp(`<${tag}\\b([^>]+)>`, "g"))].map((match) =>
    Object.fromEntries([...match[1].matchAll(/([\w:-]+)="([^"]*)"/g)].map((a) => [a[1], a[2]])),
  )
}

function textContent(html) {
  return html.replace(/<[^>]*>/g, " ")
    .replace(/&(?:amp|quot|apos|lt|gt|#39);/g, (entity) => ({
      "&amp;": "&", "&quot;": '"', "&apos;": "'", "&lt;": "<", "&gt;": ">", "&#39;": "'",
    })[entity])
    .replace(/\s+/g, " ").trim()
}

function section(html, id) {
  const start = html.indexOf(`id="${id}"`)
  assert.notEqual(start, -1, `Missing section: ${id}`)
  const end = html.indexOf("</section>", start)
  assert.notEqual(end, -1, `Missing closing section: ${id}`)
  return html.slice(start, end)
}

async function request(path) {
  return fetch(base + path, { redirect: "manual", signal: AbortSignal.timeout(10000) })
}

before(async () => {
  await access(new URL("../.next/BUILD_ID", import.meta.url))
  const socket = createServer()
  socket.listen(0, "127.0.0.1")
  await once(socket, "listening")
  const port = socket.address().port
  await new Promise((resolve) => socket.close(resolve))
  base = `http://127.0.0.1:${port}`
  server = spawn(process.execPath, [require.resolve("next/dist/bin/next"), "start", "--hostname", "127.0.0.1", "--port", String(port)], {
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
    stdio: ["ignore", "pipe", "pipe"],
  })
  server.stdout.on("data", (data) => { logs = (logs + data).slice(-12000) })
  server.stderr.on("data", (data) => { logs = (logs + data).slice(-12000) })
  for (let attempt = 0; attempt < 100; attempt++) {
    if (server.exitCode !== null) throw new Error(`Test server exited: ${logs}`)
    try {
      if ((await request("/")).status === 200) return
    } catch {}
    await delay(100)
  }
  throw new Error(`Test server did not become ready: ${logs}`)
})

after(async () => {
  if (server && server.exitCode === null) {
    const stopped = once(server, "exit")
    server.kill("SIGTERM")
    await stopped
  }
})

test("all service pages render with one H1 and a consistent, unique canonical", async () => {
  const titles = new Set()
  const descriptions = new Set()
  const headings = new Set()
  for (const path of servicePaths) {
    const response = await request(path)
    assert.equal(response.status, 200, path)
    const html = await response.text()
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1, path)
    headings.add(textContent(html.match(/<h1\b[^>]*>(.*?)<\/h1>/s)[1]))
    const canonical = elements(html, "link").filter((a) => a.rel === "canonical")
    assert.equal(canonical.length, 1, path)
    assert.equal(new URL(canonical[0].href).href, new URL(path, site).href)
    const title = html.match(/<title>(.*?)<\/title>/s)?.[1]
    assert.ok(title?.includes("HomeService"), path)
    titles.add(title)
    const description = elements(html, "meta").find((a) => a.name === "description")?.content
    assert.ok(description?.length > 60, path)
    descriptions.add(description)
  }
  assert.equal(titles.size, servicePaths.length, "Each service intent needs its own title")
  assert.equal(descriptions.size, servicePaths.length, "Each service intent needs its own description")
  assert.equal(headings.size, servicePaths.length, "Each service intent needs its own H1")
})

test("the drain landing renders its keyword groups, prices and contact options without JavaScript", async () => {
  const html = await (await request("/destapedecaneriasquito")).text()
  assert.match(html, /<title>Destape de cañerías Quito \| HomeService<\/title>/)
  for (const id of ["servicios", "sin-romper", "tuberias-desagues", "costo", "cobertura", "preguntas"]) {
    assert.match(html, new RegExp(`id="${id}"`))
  }
  assert.match(html, /\$19\.99/)
  assert.match(html, /destape se cotiza por separado/i)
  assert.match(html, /sin romper no se puede asegurar antes de revisar/)
  assert.match(html, /Sur de Quito/)
  assert.match(html, /Los Chillos/)
  assert.ok(elements(html, "a").some((a) => a.href?.startsWith("https://wa.me/") && a["data-analytics"]))
  assert.ok(elements(html, "a").some((a) => a.href === "tel:+593982811068"))
  const robots = elements(html, "meta").find((a) => a.name === "robots")
  assert.match(robots.content, /index/)
  assert.doesNotMatch(robots.content, /noindex/)
})

test("structured data quotes the inspection separately from the drain service", async () => {
  const html = await (await request("/destapedecaneriasquito")).text()
  const graph = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1])["@graph"]
  const canonical = new URL("destapedecaneriasquito", site).href
  const business = graph.find((item) => item["@id"] === `${site.href}#business`)
  assert.equal(business.telephone, "+593982811068")
  assert.equal(business.openingHoursSpecification.opens, "07:30")
  assert.equal(business.openingHoursSpecification.closes, "19:30")
  assert.equal(business.openingHoursSpecification.dayOfWeek.length, 7)
  const drain = graph.find((item) => item["@id"] === `${canonical}#service`)
  assert.equal(drain.provider["@id"], business["@id"])
  assert.equal(drain.offers, undefined, "The inspection fee is not a fixed drain service price")
  const inspection = graph.find((item) => item["@id"] === `${canonical}#revision`)
  assert.equal(inspection.offers.priceSpecification.minPrice, 19.99)
  assert.equal(inspection.offers.priceSpecification.priceCurrency, "USD")
  const faq = graph.find((item) => item["@type"] === "FAQPage")
  assert.equal(faq.mainEntity.length, 6)
  for (const question of faq.mainEntity) {
    assert.ok(html.includes(question.name), question.name)
    assert.ok(question.acceptedAnswer.text.length > 40)
  }
})

test("the leak landing renders detection, equipment and repair information without JavaScript", async () => {
  const html = await (await request("/detectordefugasdeaguaquito")).text()
  assert.match(html, /<title>Detector de fugas de agua Quito \| HomeService<\/title>/)
  for (const id of ["servicios", "sin-romper", "equipos", "reparacion", "costo", "cobertura", "preguntas"]) {
    assert.match(html, new RegExp(`id="${id}"`))
  }
  const equipment = textContent(section(html, "equipos"))
  assert.match(equipment, /geófono/i)
  assert.match(equipment, /cámara termográfica/i)
  const pricing = textContent(section(html, "costo"))
  assert.match(pricing, /revisión desde/i)
  assert.match(pricing, /\$19\.99/)
  assert.match(pricing, /detección/i)
  assert.match(pricing, /reparación/i)
  assert.match(pricing, /cotiza/i)
  assert.match(pricing, /separado/i)
  assert.ok(elements(html, "a").some((a) => a.href?.startsWith("https://wa.me/") && a["data-analytics"]))
  assert.ok(elements(html, "a").some((a) => a.href === "tel:+593982811068"))
  const robots = elements(html, "meta").find((a) => a.name === "robots")
  assert.match(robots.content, /index/)
  assert.doesNotMatch(robots.content, /noindex/)
})

test("leak structured data separates detection, inspection and repair and matches visible FAQs", async () => {
  const html = await (await request("/detectordefugasdeaguaquito")).text()
  const graph = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1])["@graph"]
  const canonical = new URL("detectordefugasdeaguaquito", site).href
  const business = graph.find((item) => item["@id"] === `${site.href}#business`)
  assert.equal(business.telephone, "+593982811068")
  const detection = graph.find((item) => item["@id"] === `${canonical}#service`)
  assert.equal(detection["@type"], "Service")
  assert.equal(detection.provider["@id"], business["@id"])
  assert.equal(detection.offers, undefined, "The inspection fee is not a fixed detection price")
  const webpage = graph.find((item) => item["@type"] === "WebPage")
  assert.equal(webpage.mainEntity["@id"], detection["@id"])
  const inspection = graph.find((item) => item["@id"] === `${canonical}#revision`)
  assert.equal(inspection["@type"], "Service")
  assert.equal(inspection.offers.priceSpecification.minPrice, 19.99)
  assert.equal(inspection.offers.priceSpecification.priceCurrency, "USD")
  const repair = graph.find((item) => item["@id"] === `${canonical}#reparacion`)
  assert.equal(repair["@type"], "Service")
  assert.equal(repair.provider["@id"], business["@id"])
  assert.equal(repair.offers, undefined, "Repair requires its own quote")
  assert.equal(repair.price, undefined)
  const faq = graph.find((item) => item["@type"] === "FAQPage")
  assert.equal(faq.mainEntity.length, 6)
  const visibleFaq = textContent(section(html, "preguntas"))
  for (const question of faq.mainEntity) {
    assert.ok(visibleFaq.includes(textContent(question.name)), question.name)
    assert.ok(visibleFaq.includes(textContent(question.acceptedAnswer.text)), question.name)
  }
})

test("home and plumbing link contextually to the drain and leak landings", async () => {
  for (const path of ["/", "/plomero-quito"]) {
    const html = await (await request(path)).text()
    const services = section(html, "servicios")
    for (const servicePath of ["/destapedecaneriasquito", "/detectordefugasdeaguaquito"]) {
      assert.ok(elements(services, "a").some((a) => a.href === servicePath), `${path} → ${servicePath}`)
    }
  }
})

test("sitemap and robots advertise all five pages on the same primary domain", async () => {
  const sitemapResponse = await request("/sitemap.xml")
  assert.equal(sitemapResponse.status, 200)
  const sitemap = await sitemapResponse.text()
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1])
  assert.equal(urls.length, servicePaths.length)
  assert.deepEqual(new Set(urls), new Set(servicePaths.map((path) => new URL(path, site).href)))
  for (const url of urls) {
    assert.equal(new URL(url).origin, site.origin)
  }
  const robotsResponse = await request("/robots.txt")
  assert.equal(robotsResponse.status, 200)
  assert.ok((await robotsResponse.text()).includes(`Sitemap: ${new URL("sitemap.xml", site).href}`))
})

test("social images exist at the advertised size and the brand icon renders", async () => {
  for (const path of ["/opengraph-image", "/destapedecaneriasquito/opengraph-image", "/detectordefugasdeaguaquito/opengraph-image"]) {
    const response = await request(path)
    assert.equal(response.status, 200, path)
    assert.match(response.headers.get("content-type"), /image\/png/)
    const png = Buffer.from(await response.arrayBuffer())
    assert.equal(png.readUInt32BE(16), 1200)
    assert.equal(png.readUInt32BE(20), 630)
  }
  const icon = await request("/brand/favicon.svg")
  assert.equal(icon.status, 200)
  assert.match(await icon.text(), /<svg/)
})

test("mobile service imagery can be served as a small optimized WebP", async () => {
  for (const filename of ["destape-desagues-movil.png", "fugas-de-agua-movil.jpg"]) {
    const source = `/images/${filename}`
    const originalResponse = await request(source)
    assert.equal(originalResponse.status, 200, source)
    const original = Buffer.from(await originalResponse.arrayBuffer())
    const response = await fetch(`${base}/_next/image?url=${encodeURIComponent(source)}&w=640&q=75`, {
      headers: { Accept: "image/webp" },
      signal: AbortSignal.timeout(10000),
    })
    assert.equal(response.status, 200, source)
    assert.match(response.headers.get("content-type"), /image\/webp/)
    const image = Buffer.from(await response.arrayBuffer())
    assert.equal(image.toString("ascii", 0, 4), "RIFF")
    assert.equal(image.toString("ascii", 8, 12), "WEBP")
    assert.ok(image.length < original.length, `${source} should be smaller after mobile optimization`)
  }
})

test("legacy service URLs keep permanent redirects and missing pages return 404", async () => {
  for (const [from, to] of Object.entries({
    "/plomeria": "/plomero-quito", "/plomero": "/plomero-quito",
    "/electricidad": "/electricista-quito", "/electricista": "/electricista-quito",
  })) {
    const response = await request(from)
    assert.equal(response.status, 308, from)
    assert.equal(new URL(response.headers.get("location"), base).pathname, to)
  }
  assert.equal((await request("/a-page-that-does-not-exist")).status, 404)
})
