import { HOURS, PHONE_E164, PHONE_WA } from "@/lib/site-content"
import type { HeaderContent, PageContent } from "@/lib/site-content"

const whatsappHref = (message: string) =>
  `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(message)}`

const requestHref = whatsappHref(
  "Hola HomeService, necesito destape de cañerías en Quito. El punto tapado es: . Mi sector es: ",
)

export const drainHeader = {
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
    ariaLabel: "Solicitar revisión de una cañería tapada por WhatsApp",
    analytics: "cta_whatsapp_navbar_destape_click",
  },
} satisfies HeaderContent

export const drainContent = {
  seo: {
    title: "Destape de cañerías Quito | HomeService",
    description:
      "Destape de cañerías en Quito para inodoros, fregaderos y desagües. Revisión desde $19.99; destape cotizado antes de empezar. Agenda con HomeService.",
    ogImage: "/destapedecaneriasquito/opengraph-image",
    ogImageAlt: "Destape de cañerías en Quito con HomeService",
  },
  hero: {
    eyebrow: "HOMESERVICE · DESTAPE DE CAÑERÍAS",
    title: "Destape de cañerías en Quito",
    subtitleMobile:
      "Cuando el agua deja de salir, revisamos el problema y te explicamos cómo resolverlo. Para casas, departamentos y locales de Quito y sus valles",
    subtitleDesktopEnd: "",
    microcopy: "Revisión desde $19.99. El destape se cotiza después de revisar, antes de empezar el trabajo.",
    chips: ["Costo claro antes del trabajo", HOURS.label],
    breadcrumb: {
      homeLabel: "Inicio",
      homeHref: "/",
      currentLabel: "Destape de cañerías",
    },
    primaryCta: {
      label: "Solicitar revisión",
      href: requestHref,
      ariaLabel: "Solicitar revisión para destape de cañerías en Quito por WhatsApp",
      analytics: "cta_whatsapp_hero_destape_click",
    },
    secondaryCta: {
      label: "Llamar ahora",
      href: `tel:${PHONE_E164}`,
      ariaLabel: "Llamar a HomeService para un destape de cañerías",
      analytics: "cta_llamada_hero_destape_click",
    },
  } satisfies PageContent["hero"],
  services: {
    id: "servicios",
    eyebrow: "EL AGUA VUELVE A SU CAMINO",
    title: "Destape de cañerías a domicilio",
    intro:
      "Nuestro servicio de destapacaños a domicilio en Quito empieza por revisar el sanitario, el sifón o la tubería afectada. Identificamos los accesos disponibles para definir el trabajo adecuado, sin tratar todos los casos como si fueran iguales.",
    items: [
      {
        title: "Inodoros tapados",
        description:
          "Cuando el agua sube al descargar o el sanitario no evacúa. Revisamos si la obstrucción está en el inodoro o continúa hacia el desagüe.",
      },
      {
        title: "Fregaderos de cocina",
        description:
          "Para agua retenida o drenaje lento. Revisamos el sifón y la salida hacia la tubería, donde pueden acumularse grasa y residuos de alimentos.",
      },
      {
        title: "Lavamanos y duchas",
        description:
          "Atendemos desagües que drenan lentamente, se estancan o presentan retorno de agua. El diagnóstico ayuda a distinguir una obstrucción local de un problema compartido.",
      },
      {
        title: "Desagües y cajas de revisión",
        description:
          "Revisamos cañerías de salida y puntos accesibles en viviendas o locales. Si varios desagües fallan a la vez, cuéntanos cuáles para orientar la visita.",
      },
    ],
    image: {
      desktopSrc: "/images/destape-desagues-desktop.png",
      mobileSrc: "/images/destape-desagues-movil.png",
      alt: "Técnico de HomeService trabajando en el destape de un desagüe",
    },
    symptomsTitle: "¿Qué señales conviene revisar?",
    symptoms:
      "Agua que tarda en bajar, sonidos de burbujeo, malos olores o retorno en otro punto son señales para consultar. Si el agua está regresando, evita seguir usando el punto afectado y envíanos una foto o un video corto para orientar la visita.",
  },
  specialistGroups: {
    withoutBreaking: {
      id: "sin-romper",
      eyebrow: "MENOR INTERVENCIÓN POSIBLE",
      title: "Destape de cañerías sin romper",
      description:
        "Procuramos destapar desde los accesos existentes cuando la revisión lo permite. El método depende del punto de obstrucción y del estado de la instalación; resolver sin romper no se puede asegurar antes de revisar.",
      detail:
        "Si encontramos una tubería dañada o hace falta abrir un acceso, te explicamos el motivo, el alcance y el costo antes de intervenir.",
    },
    drains: {
      id: "tuberias-desagues",
      eyebrow: "LA RED DE TU INMUEBLE",
      title: "Destape de tuberías y desagües en Quito",
      description:
        "Cuando varios puntos drenan mal, revisamos el recorrido compartido y las cajas accesibles. La limpieza de cañerías y desagües se define según la obstrucción, los residuos y el estado del tramo afectado.",
      detail:
        "Para alcantarillado privado, cuéntanos dónde aparece el retorno y qué accesos tiene el inmueble. Confirmamos el alcance después de revisar la instalación.",
    },
  },
  pricing: {
    id: "costo",
    eyebrow: "CLARIDAD DESDE LA REVISIÓN",
    title: "Primero revisamos. Luego cotizamos.",
    label: "Revisión desde",
    price: "$19.99",
    priceNote: "Valor de la revisión. El servicio de destape se cotiza por separado.",
    intro:
      "El precio de destapar una cañería depende del punto afectado, la ubicación de la obstrucción, el acceso a la tubería y el trabajo necesario. Por eso la revisión y el destape tienen alcances distintos.",
    items: [
      "Revisamos qué ocurre y te explicamos la intervención propuesta.",
      "Te indicamos el costo del destape antes de empezar; tú decides si lo autorizas.",
      "Si hacen falta materiales o abrir un acceso, lo conversamos antes de continuar.",
    ],
    closing:
      "Envíanos tu sector, el tipo de inmueble y el punto que se tapó. Te confirmamos la disponibilidad y las condiciones de la revisión antes de coordinar la visita.",
    cta: {
      label: "Consultar mi caso",
      href: requestHref,
      ariaLabel: "Consultar la revisión y cotización del destape por WhatsApp",
      analytics: "cta_whatsapp_costo_destape_click",
    },
  },
  steps: {
    id: "como-funciona",
    eyebrow: "CÓMO FUNCIONA",
    titleBeforeHighlight: "Un proceso",
    titleHighlight: "claro",
    intro:
      "Desde el primer mensaje hasta la revisión del drenaje, sabes qué estamos evaluando y qué trabajo se propone para tu instalación.",
    items: [
      {
        title: "Cuéntanos qué se tapó",
        description:
          "Escríbenos por WhatsApp con tu sector de Quito, el punto afectado y desde cuándo ocurre. Indica si hay otros desagües con el mismo problema.",
      },
      {
        title: "Revisamos y acordamos el costo",
        description:
          "Coordinamos la visita según la agenda. El técnico revisa los accesos y te explica la solución y su precio antes de realizar el destape.",
      },
      {
        title: "Destapamos y revisamos el flujo",
        description:
          "Con el trabajo autorizado, usamos la herramienta adecuada al caso y comprobamos el paso del agua. Si encontramos otro problema, te explicamos qué requiere atención.",
      },
    ],
  } satisfies PageContent["steps"],
  coverage: {
    id: "cobertura",
    eyebrow: "QUITO Y SUS VALLES",
    titleBeforeHighlight: "Atendemos en",
    titleHighlight: "tu sector",
    intro:
      "Destape de cañerías a domicilio en el norte, centro y sur de Quito, y en los valles. Atendemos todos los días de 7:30 a 19:30; la visita se coordina según disponibilidad. Envíanos tu ubicación para confirmar cobertura.",
    sectors: [
      "La Carolina", "El Condado", "Ponceano", "Carcelén", "Calderón",
      "Centro", "Sur de Quito", "Cumbayá", "Tumbaco", "Los Chillos", "Sangolquí",
    ],
    structuredAreas: ["Quito", "Cumbayá", "Tumbaco", "Valle de los Chillos", "Rumiñahui"],
    cta: {
      label: "Confirmar cobertura",
      href: whatsappHref("Hola HomeService, necesito destape de cañerías. ¿Atienden en este sector?: "),
      ariaLabel: "Confirmar cobertura de destape de cañerías por WhatsApp",
      analytics: "cta_whatsapp_cobertura_destape_click",
    },
  } satisfies PageContent["coverage"],
  faq: {
    id: "preguntas",
    eyebrow: "ANTES DE COORDINAR",
    title: "Preguntas sobre el destape",
    items: [
      {
        question: "¿Cuánto cuesta el destape de cañerías en Quito?",
        answer:
          "La revisión empieza desde $19.99. Ese valor corresponde a revisar el problema, no es una tarifa fija por destapar. Después de la revisión, te explicamos el trabajo necesario y cotizamos el destape antes de empezar. El costo depende de la obstrucción y de los accesos disponibles.",
      },
      {
        question: "¿Pueden atender una cañería tapada el mismo día?",
        answer:
          "Coordinamos según la agenda y tu sector. Atendemos todos los días de 7:30 a 19:30. Escríbenos para consultar la disponibilidad; te confirmamos la visita antes de agendar.",
      },
      {
        question: "¿Hay que romper el piso o la pared para destapar?",
        answer:
          "Procuramos trabajar desde los accesos existentes. Si el estado de la tubería o la ubicación del problema exige abrir un acceso, el técnico te explica el motivo y el alcance antes de hacerlo.",
      },
      {
        question: "¿Destapan cañerías en departamentos y locales?",
        answer:
          "Sí. Atendemos casas, departamentos, oficinas y locales. Si el problema parece afectar una tubería compartida de un edificio, indica qué puntos fallan y si se puede acceder a las cajas de revisión.",
      },
      {
        question: "¿Cómo pido un destapador de cañerías a domicilio en Quito?",
        answer:
          "Escríbenos por WhatsApp con tu sector, el punto tapado y una descripción de lo que ocurre. Una foto o un video corto del agua retenida ayuda a orientar la visita. También cuéntanos si ya usaste algún producto o intentaste destaparlo.",
      },
      {
        question: "¿Y si la cañería se vuelve a tapar?",
        answer:
          "Una obstrucción que se repite puede necesitar una revisión del tramo de tubería y de su estado. Coméntanos cuándo reaparece y qué puntos afecta; no todos los retornos de agua se resuelven con el mismo trabajo.",
      },
    ],
    cta: {
      label: "Resolver mi consulta",
      href: requestHref,
      ariaLabel: "Consultar una duda sobre destape de cañerías por WhatsApp",
      analytics: "cta_whatsapp_faq_destape_click",
    },
  } satisfies PageContent["faq"],
  floatingCta: {
    label: "Solicitar revisión",
    href: requestHref,
    ariaLabel: "Solicitar revisión de cañerías tapadas por WhatsApp",
    analytics: "cta_whatsapp_flotante_destape_click",
  } satisfies PageContent["floatingCta"],
  crossLink: {
    prefix: "¿Además del destape necesitas reparar una fuga o cambiar la grifería? Consulta nuestro servicio de",
    label: "plomero en Quito",
    href: "/plomero-quito",
  },
} as const
