# Destape de cañerías · HomeService

Página: `https://www.homeservicequito.com/destapedecaneriasquito`.
El dominio de metadata, sitemap y datos estructurados se centraliza en `NEXT_PUBLIC_SITE_URL`; por defecto usa `www`. Antes de publicar, comprobar que ese sea el dominio principal en Vercel y que la alternativa redirija hacia él.

## Oferta y línea comercial

- Marca HomeService, con la misma paleta de neutros cálidos, carbón y acentos naranja del home.
- Revisión **desde $19.99 USD**. Este valor corresponde a la revisión; el destape se cotiza por separado y antes de trabajar.
- Atención todos los días, de 7:30 a 19:30. Visitas según disponibilidad y cobertura confirmada.
- Sin tarifas de destape inventadas, promesas de llegada, atención 24 horas ni garantías no confirmadas. “Sin romper” depende de la revisión y los accesos existentes.
- Alcantarillado limitado a instalaciones privadas. La página no presenta servicios municipales ni maquinaria industrial no confirmada.

## Grupos de búsqueda recibidos

| Grupo | Enfoque visible | Destino de campaña |
| --- | --- | --- |
| Destape general | Keyword principal “destape de cañerías Quito”; servicio a domicilio, destapacaños, inodoros, fregaderos, duchas y cobertura sur de Quito/Los Chillos | `/destapedecaneriasquito` |
| Sin romper | Destape desde accesos existentes, con revisión previa y límites explícitos | `/destapedecaneriasquito#sin-romper` |
| Tuberías y desagües | Tramos compartidos, limpieza de cañerías, cajas de revisión y alcantarillado privado | `/destapedecaneriasquito#tuberias-desagues` |

El contenido corresponde a los grupos de keywords compartidos por el usuario; no se atribuyen volúmenes, tendencias ni resultados a un estudio que no se haya consultado. No se utilizan recetas caseras ni contenido de venta de destapadores químicos.

Revisar las negativas de campaña antes de importarlas. Palabras como “precio”, “cuánto cuesta”, “solicitar” y “trabajo” también pueden aparecer en búsquedas de servicios con intención comercial; conviene revisar su coincidencia y los términos reales de búsqueda. La lista recibida no se activa automáticamente.

## Contacto y medición

WhatsApp y llamada usan el contacto existente de HomeService. Los clics en enlaces con `data-analytics` registran en `window.dataLayer`:

```json
{
  "event": "contact_click",
  "channel": "whatsapp",
  "page_path": "/destapedecaneriasquito",
  "service": "destape",
  "cta_id": "cta_whatsapp_hero_destape_click"
}
```

No se envían el teléfono, texto del mensaje ni parámetros de URL. Este evento mide un intento de contacto; no confirma una venta ni un lead atendido. Para activar medición real, conectar el contenedor y las etiquetas de GTM/Google Ads y comprobar la conversión en su modo de depuración. No se configuraron IDs de cuentas publicitarias ni se creó o activó una campaña.

## Verificación antes de pasar a main

Desde el checkout, usando el pnpm instalado en el entorno:

```bash
CI=1 NEXT_TELEMETRY_DISABLED=1 RAYON_NUM_THREADS=4 /workspace/.tools/homeservice/node_modules/.bin/pnpm run build
/workspace/.tools/homeservice/node_modules/.bin/pnpm exec tsc --noEmit --incremental false
/workspace/.tools/homeservice/node_modules/.bin/pnpm run test:smoke
```

`test:smoke` arranca su propio servidor de producción en un puerto libre y lo detiene al terminar. Verifica páginas, canonical, H1, grupos de contenido, precio separado, schema, enlaces contextuales, sitemap, robots, imágenes sociales y redirecciones. No necesita paquetes adicionales.

Revisar home y landing en 320, 390, 768 y 1440 px: CTA principal visible, ausencia de superposiciones/desbordamiento, scroll natural, menú por teclado, FAQ, imágenes y navegación sin JavaScript. El botón flotante aparece después del hero para dejar libre el bloque inicial.

## Resultado de la revisión local

Compilación de producción, TypeScript y las ocho pruebas funcionales aprobadas. La revisión en Chromium cubrió home y landing en los cuatro tamaños anteriores, scroll táctil, menú por teclado, FAQ y navegación sin JavaScript, sin errores ni desbordamiento.

Lighthouse móvil sobre producción local: rendimiento **99**, accesibilidad **100**, buenas prácticas **100** y SEO **100**; LCP **1.8 s**, CLS **0** y TBT **70 ms**. Es una medición de laboratorio, no un resultado de campo ni una garantía de posicionamiento. Las imágenes usan optimización WebP y fuentes responsivas; la foto móvil del servicio en 640 px pesa aproximadamente 35 KB en lugar de descargar el PNG original de unos 2 MB.

Después del despliegue de `home-service` en Vercel, comprobar el build, los dominios, la URL pública, los metadatos y las interacciones móviles sobre ese despliegue. Solicitar indexación mediante la propiedad correspondiente de Search Console cuando la página esté publicada. Las comprobaciones locales no confirman publicación ni indexación.
