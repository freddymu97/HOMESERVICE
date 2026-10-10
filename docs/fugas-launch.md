# Detector de fugas de agua · HomeService

Subpágina: `https://www.homeservicequito.com/detectordefugasdeaguaquito`. Comparte el diseño, la navegación, el contacto y la cobertura de HomeService. Los enlaces del home y plomería conducen a esta landing; se mantiene una sola URL para esta intención de búsqueda. El dominio público sin `www` redirige a `www`; una configuración antigua de `NEXT_PUBLIC_SITE_URL=https://homeservicequito.com` se normaliza para que los canonical no apunten a una URL que redirige. Otros dominios configurados se conservan.

## Oferta confirmada

- Geófono y cámara termográfica disponibles, confirmados por el usuario. Se elige el método según la instalación y las condiciones del caso; no se garantiza usar ambos ni localizar cualquier fuga sin abrir un acceso.
- Se mantiene el enfoque de HomeService: revisión desde **$19.99 USD**. Es el valor de revisión; detección especializada y reparación se cotizan por separado antes de intervenir.
- Servicio para instalaciones privadas de casas, departamentos, oficinas y locales en Quito y sus valles. Horario existente: todos los días, 7:30 a 19:30. Visita según disponibilidad y cobertura confirmada.
- La termografía observa temperaturas en superficies: no ve a través de paredes. El geófono permite analizar sonidos asociados a una fuga; ruido, material, profundidad y presión influyen en la evaluación.
- Las imágenes de fugas existentes muestran revisión/reparación bajo un fregadero, no equipos de detección. Se conservan con sus versiones móvil y desktop y optimización WebP.

## Keywords y campaña

| Intención recibida | Contenido de la landing | Destino sugerido |
| --- | --- | --- |
| Detector de fugas de agua Quito; detección/localización de fugas en Quito | Title con keyword reina, H1, servicio a domicilio y cobertura | `/detectordefugasdeaguaquito` |
| Fugas ocultas/no visibles; paredes y tuberías enterradas | Casos y señales que requieren revisión de la instalación | `#servicios` |
| Detectar fugas de agua sin romper | Evaluación desde accesos existentes y límites del método | `#sin-romper` |
| Geófono detector de fugas de agua; cámara termográfica | Equipos confirmados y qué aporta cada método | `#equipos` |
| Reparación/arreglo de fugas de agua | Detección y reparación con alcances y cotizaciones separados | `#reparacion` |

Estas intenciones provienen de la lista compartida por el usuario. No se atribuyen volúmenes ni posiciones a un estudio que no se haya consultado. La página ofrece un servicio; no vende detectores ni desarrolla recetas caseras.

La lista de negativas no se importó ni activó. Mantener las exclusiones de productos, otras ciudades y trámites municipales, pero revisar el tipo de coincidencia de **medidor**, **medidores** y **planilla**: también aparecen cuando un propietario busca localizar una fuga privada por consumo inusual. Filtrar frases de trámites y revisar los términos de búsqueda evita perder esa intención comercial. Lo mismo aplica a frases amplias relacionadas con humedad, que pueden ser un síntoma relevante; no toda humedad proviene de una fuga de tubería.

## Contacto y medición

WhatsApp y llamada conservan el número existente de HomeService. El mensaje de WhatsApp identifica el servicio de fugas y permite indicar sector y señales del problema. Los enlaces marcados con `data-analytics` generan:

```json
{
  "event": "contact_click",
  "channel": "whatsapp",
  "page_path": "/detectordefugasdeaguaquito",
  "service": "fugas",
  "cta_id": "cta_whatsapp_hero_fugas_click"
}
```

Es un intento de contacto, no una venta ni un lead atendido. No incluye teléfono, mensaje ni parámetros de la URL. Para medir conversiones publicitarias, conectar GTM/Google Ads y verificar sus etiquetas con las cuentas correspondientes. Esta tarea no crea ni activa una campaña.

## Validación y publicación

```bash
CI=1 NEXT_TELEMETRY_DISABLED=1 RAYON_NUM_THREADS=4 /workspace/.tools/homeservice/node_modules/.bin/pnpm run build
/workspace/.tools/homeservice/node_modules/.bin/pnpm exec tsc --noEmit --incremental false
/workspace/.tools/homeservice/node_modules/.bin/pnpm run test:smoke
```

La suite inicia y detiene su propio servidor de producción. Comprueba las cinco páginas, title/H1/canonical, grupos de contenido, oferta separada, schema, enlaces, sitemap, robots, imágenes sociales y redirecciones. Revisar especialmente 320/390 px y el header en 1024/1280 px: la navegación se despliega desde 1280 px para dar espacio al nuevo enlace.

La compilación, TypeScript y las **diez pruebas** pasaron. Se verificó también un build con el valor antiguo `NEXT_PUBLIC_SITE_URL=https://homeservicequito.com`: las cinco páginas, sitemap y datos estructurados mantienen el dominio principal `www`.

La revisión visual en Chromium cubrió la landing en 320, 390, 768, 1024, 1280 y 1440 px, más el home en móvil y 1024 px. CTA y precio visibles a 320 px; menú, FAQ, teclado, scroll táctil y navegación sin JavaScript correctos, sin errores ni desbordamiento. La medición de contactos pasó en las cinco páginas y en móvil: un evento por clic y sin datos personales ni parámetros de URL.

Lighthouse móvil sobre producción local: **rendimiento 95**, **accesibilidad 100**, **buenas prácticas 100** y **SEO 100**; LCP **2.6 s**, CLS **0**, TBT **150 ms**. Son mediciones de laboratorio.

Antes de integrar a `main`, comprobar el build del proyecto `home-service`, la landing en el preview de Vercel y sus interacciones en móvil y desktop. Tras publicar, confirmar canonical y sitemap en `www.homeservicequito.com` y solicitar indexación en Search Console. Los scores de Lighthouse son mediciones de laboratorio y no garantizan posiciones en Google.
