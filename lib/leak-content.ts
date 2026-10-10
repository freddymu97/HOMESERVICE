import { HOURS, PHONE_E164, PHONE_WA } from "@/lib/site-content"
import type { HeaderContent, PageContent } from "@/lib/site-content"

const whatsappHref = (message: string) =>
  `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(message)}`

const requestHref = whatsappHref(
  "Hola HomeService, necesito revisar una posible fuga de agua en Quito. Lo que observo es: . Mi sector es: ",
)

export const leakHeader = {
  navigation: [
    { label: "Inicio", href: "/" },
    { label: "Plomería", href: "/plomero-quito" },
    { label: "Destape", href: "/destapedecaneriasquito" },
    { label: "Fugas", href: "/detectordefugasdeaguaquito" },
    { label: "Electricidad", href: "/electricista-quito" },
    { label: "Cobertura", href: "#cobertura" },
    { label: "Preguntas", href: "#preguntas" },
  ],
  openMenuAriaLabel: "Abrir menú",
  closeMenuAriaLabel: "Cerrar menú",
  cta: {
    label: "Solicitar revisión",
    href: requestHref,
    ariaLabel: "Solicitar revisión de una posible fuga de agua por WhatsApp",
    analytics: "cta_whatsapp_navbar_fugas_click",
  },
} satisfies HeaderContent

export const leakContent = {
  seo: {
    title: "Detector de fugas de agua Quito | HomeService",
    description:
      "Detección de fugas de agua en Quito con geófono y cámara termográfica según el caso. Revisión desde $19.99; detección y reparación cotizadas aparte.",
    ogImage: "/detectordefugasdeaguaquito/opengraph-image",
    ogImageAlt: "Detección de fugas de agua en Quito con HomeService",
  },
  hero: {
    eyebrow: "HOMESERVICE · DETECCIÓN DE FUGAS",
    title: "Detector de fugas de agua en Quito",
    subtitleMobile:
      "Localizamos fugas ocultas con geófono y cámara termográfica según la instalación, y cotizamos antes de intervenir",
    subtitleDesktopEnd: "",
    microcopy: "Revisión desde $19.99. Detección especializada y reparación se cotizan por separado.",
    chips: ["Costo claro antes del trabajo", HOURS.label],
    breadcrumb: {
      homeLabel: "Inicio",
      homeHref: "/",
      currentLabel: "Detección de fugas",
    },
    primaryCta: {
      label: "Solicitar revisión",
      href: requestHref,
      ariaLabel: "Solicitar revisión de una fuga de agua en Quito por WhatsApp",
      analytics: "cta_whatsapp_hero_fugas_click",
    },
    secondaryCta: {
      label: "Llamar ahora",
      href: `tel:${PHONE_E164}`,
      ariaLabel: "Llamar a HomeService para revisar una fuga de agua",
      analytics: "cta_llamada_hero_fugas_click",
    },
  } satisfies PageContent["hero"],
  services: {
    id: "servicios",
    eyebrow: "ENCONTRAR EL ORIGEN",
    title: "Detección de fugas de agua a domicilio",
    intro:
      "Una mancha de humedad no siempre señala dónde pierde agua la tubería. Nuestro servicio de detección de fugas en Quito evalúa las señales, los recorridos y los accesos para orientar la localización antes de proponer una reparación.",
    items: [
      {
        title: "Fugas ocultas en paredes",
        description:
          "Revisamos humedad, pintura levantada o pérdida de agua no visible. Distinguimos indicios de una fuga de otras posibles filtraciones antes de definir la intervención.",
      },
      {
        title: "Tuberías bajo pisos",
        description:
          "Evaluamos las zonas afectadas y los puntos accesibles. Las señales del equipo se interpretan junto con el recorrido y el estado de la instalación.",
      },
      {
        title: "Tuberías enterradas privadas",
        description:
          "Para instalaciones del inmueble en patios o áreas exteriores. El material, la profundidad y los accesos condicionan el método de detección y su alcance.",
      },
    ],
    image: {
      desktopSrc: "/images/fugas-de-agua-desktop.jpg",
      mobileSrc: "/images/fugas-de-agua-movil.jpg",
      alt: "Técnico revisando una fuga bajo un fregadero",
    },
    symptomsTitle: "¿Qué señales conviene contarnos?",
    symptoms:
      "Humedad persistente, sonidos de agua, baja presión o consumo inusual ayudan a orientar la revisión. Si ya observaste cambios en la lectura con los grifos cerrados, anota ese dato. Una foto y la fecha en que empezó el problema también son útiles.",
  },
  specialistGroups: {
    withoutBreaking: {
      id: "sin-romper",
      eyebrow: "MENOR INTERVENCIÓN POSIBLE",
      title: "Detectar fugas de agua sin romper",
      description:
        "Buscamos acotar la zona de una posible fuga antes de abrir pisos o paredes. Los equipos aportan señales que deben contrastarse con las condiciones de la instalación.",
      detail:
        "La revisión determina si se puede localizar sin abrir o si hace falta un acceso. Te explicamos esa necesidad antes de intervenir; no prometemos una detección sin romper en todos los casos.",
    },
    repair: {
      id: "reparacion",
      eyebrow: "DEL DIAGNÓSTICO AL ARREGLO",
      title: "Reparación de fugas de agua en Quito",
      description:
        "Detectar orienta dónde está el problema; reparar requiere intervenir la instalación. Te explicamos el tramo o la conexión afectados y cotizamos el arreglo de la fuga por separado.",
      detail:
        "Si el trabajo requiere materiales o abrir un acceso, lo conversamos antes. La detección especializada y la reparación necesitan tu autorización y tienen alcances distintos.",
    },
  },
  equipment: {
    id: "equipos",
    eyebrow: "SEÑALES QUE AYUDAN A LOCALIZAR",
    title: "Geófono y cámara termográfica",
    intro:
      "Contamos con ambos equipos para la detección de fugas de agua. Elegimos la herramienta según la tubería, los accesos y las señales encontradas; no todos los casos requieren usar las dos.",
    items: [
      {
        title: "Geófono para detectar fugas de agua",
        description:
          "Capta señales acústicas transmitidas por la tubería y el terreno para orientar la localización de una posible pérdida. El ruido del entorno y el material pueden limitar la interpretación.",
      },
      {
        title: "Cámara termográfica",
        description:
          "Registra patrones de temperatura en las superficies que ayudan a evaluar zonas afectadas. No ve a través de paredes ni confirma por sí sola que exista una fuga.",
      },
    ],
    closing:
      "La lectura de los equipos se combina con la revisión del inmueble. Te explicamos qué indican los resultados y si hacen falta comprobaciones adicionales.",
    cta: {
      label: "Consultar la detección",
      href: requestHref,
      ariaLabel: "Consultar detección de fugas con geófono o cámara termográfica",
      analytics: "cta_whatsapp_equipos_fugas_click",
    },
  },
  pricing: {
    id: "costo",
    eyebrow: "TRES ALCANCES CLAROS",
    title: "Revisión, detección y reparación",
    label: "Revisión desde",
    price: "$19.99",
    priceNote: "Este valor no incluye la detección especializada ni la reparación. Se cotizan por separado.",
    intro:
      "La revisión permite evaluar el caso. Si se necesita detección especializada, te indicamos su alcance y costo. Una reparación posterior tiene su propia cotización, según el acceso, el daño y los materiales.",
    items: [
      "Confirmamos las condiciones de la revisión antes de coordinar.",
      "Cotizamos la detección especializada antes de realizarla.",
      "Explicamos y cotizamos la reparación antes de intervenir.",
    ],
    closing:
      "Envíanos tu sector y las señales que observas para consultar disponibilidad y coordinar la revisión.",
    cta: {
      label: "Consultar mi caso",
      href: requestHref,
      ariaLabel: "Consultar revisión y cotización de detección de fugas por WhatsApp",
      analytics: "cta_whatsapp_costo_fugas_click",
    },
  },
  steps: {
    id: "como-funciona",
    eyebrow: "CÓMO FUNCIONA",
    titleBeforeHighlight: "Un proceso",
    titleHighlight: "claro",
    intro: "Sabes qué estamos revisando y qué trabajo se propone para tu inmueble.",
    items: [
      {
        title: "Cuéntanos qué observas",
        description: "Comparte tu sector, una foto y desde cuándo hay humedad o cambios en el consumo.",
      },
      {
        title: "Revisamos y cotizamos",
        description: "Coordinamos según la agenda. Explicamos el método y el costo de la detección necesaria antes de realizarla.",
      },
      {
        title: "Explicamos el siguiente paso",
        description: "Con los resultados, te indicamos si se requiere una reparación o más comprobaciones. Tú autorizas cada intervención.",
      },
    ],
  } satisfies PageContent["steps"],
  coverage: {
    id: "cobertura",
    eyebrow: "QUITO Y SUS VALLES",
    titleBeforeHighlight: "Atendemos en",
    titleHighlight: "tu sector",
    intro:
      "Detección de fugas a domicilio en el norte, centro y sur de Quito, y en los valles. Atendemos todos los días de 7:30 a 19:30. La visita se coordina según disponibilidad; envíanos tu ubicación para confirmar cobertura.",
    sectors: [
      "La Carolina", "El Condado", "Ponceano", "Carcelén", "Calderón",
      "Centro", "Sur de Quito", "Cumbayá", "Tumbaco", "Los Chillos", "Sangolquí",
    ],
    structuredAreas: ["Quito", "Cumbayá", "Tumbaco", "Valle de los Chillos", "Rumiñahui"],
    cta: {
      label: "Confirmar cobertura",
      href: whatsappHref("Hola HomeService, necesito revisar una posible fuga de agua. ¿Atienden en este sector?: "),
      ariaLabel: "Confirmar cobertura de detección de fugas por WhatsApp",
      analytics: "cta_whatsapp_cobertura_fugas_click",
    },
  } satisfies PageContent["coverage"],
  faq: {
    id: "preguntas",
    eyebrow: "ANTES DE COORDINAR",
    title: "Preguntas sobre las fugas",
    items: [
      {
        question: "¿Cuánto cuesta detectar una fuga de agua en Quito?",
        answer:
          "La revisión empieza desde $19.99. Ese valor no incluye detección especializada ni reparación. Si se necesita localizar la fuga con equipos, cotizamos ese trabajo antes de realizarlo; cualquier reparación se cotiza y autoriza aparte.",
      },
      {
        question: "¿Pueden detectar una fuga sin romper?",
        answer:
          "Buscamos acotar la zona antes de abrir. La posibilidad depende de la instalación y de las señales disponibles. Si hace falta un acceso o una comprobación adicional, te explicamos el motivo antes de intervenir.",
      },
      {
        question: "¿Siempre usan geófono y cámara termográfica?",
        answer:
          "Contamos con ambos, pero elegimos según el caso. El geófono capta señales acústicas y la termografía registra patrones de temperatura en superficies. La cámara no ve a través de paredes; los resultados requieren interpretación.",
      },
      {
        question: "¿Revisan fugas no visibles y tuberías enterradas?",
        answer:
          "Sí, en instalaciones privadas de casas, departamentos y locales. Los accesos, el material y la profundidad condicionan el alcance. Comparte las señales que observas para orientar la revisión.",
      },
      {
        question: "¿La humedad siempre significa una fuga de agua?",
        answer:
          "No necesariamente. Puede tener otras causas. Revisamos los indicios y la instalación para distinguir una posible fuga de otras filtraciones; una mancha por sí sola no confirma el origen.",
      },
      {
        question: "¿Atienden el mismo día y reparan después de detectar?",
        answer:
          "Coordinamos según disponibilidad, todos los días de 7:30 a 19:30. Si los resultados indican una reparación, te explicamos el trabajo y cotizamos por separado antes de realizarlo.",
      },
    ],
    cta: {
      label: "Resolver mi consulta",
      href: requestHref,
      ariaLabel: "Consultar una duda sobre detección de fugas de agua por WhatsApp",
      analytics: "cta_whatsapp_faq_fugas_click",
    },
  } satisfies PageContent["faq"],
  floatingCta: {
    label: "Solicitar revisión",
    href: requestHref,
    ariaLabel: "Solicitar revisión de una posible fuga de agua por WhatsApp",
    analytics: "cta_whatsapp_flotante_fugas_click",
  } satisfies PageContent["floatingCta"],
  crossLink: {
    prefix: "¿Necesitas cambiar una llave o revisar otra instalación de agua? Consulta nuestro servicio de",
    label: "plomero en Quito",
    href: "/plomero-quito",
  },
} as const
