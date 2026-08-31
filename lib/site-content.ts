export const PHONE_E164 = "+593982811068"
export const PHONE_WA = "593982811068"

export const HOURS = {
  label: "Todos los días, 7:30 a 19:30",
  sentence: "Atendemos todos los días, de 7:30 a 19:30.",
  sevenDays: "Atendemos los 7 días, de 7:30 a 19:30.",
  footer: "Todos los días, 7:30 a 19:30",
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  opens: "07:30",
  closes: "19:30",
} as const

const whatsappHref = (message: string) =>
  `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(message)}`

export const siteContent = {
  brand: {
    name: "HomeService",
    eyebrow: "HOMESERVICE",
    footerLine: "HomeService · Asistencia a domicilio en Quito",
    homeAriaLabel: "Ir al inicio de HomeService",
  },
  contact: {
    phoneDisplay: "+593 98 281 1068",
    phoneHref: `tel:${PHONE_E164}`,
    whatsappHref: whatsappHref("Hola HomeService, deseo información sobre sus servicios de plomería."),
    phoneLabel: "Teléfono",
    whatsappLabel: "WhatsApp",
    hours: HOURS,
  },
  header: {
    navigation: [
      { label: "Servicios", href: "#servicios" },
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "Cobertura", href: "#cobertura" },
      { label: "Preguntas", href: "#preguntas" },
    ],
    openMenuAriaLabel: "Abrir menú",
    closeMenuAriaLabel: "Cerrar menú",
    cta: {
      label: "Solicitar servicio",
      href: whatsappHref("Hola HomeService, necesito un plomero en Quito."),
      ariaLabel: "Solicitar servicio de plomería por WhatsApp",
      analytics: "cta_whatsapp_navbar_click",
    },
  },
  imagery: {
    heroBackground: {
      src: "/images/hously-background.png",
      alt: "Interior residencial de tonos neutros usado como fondo de HomeService",
    },
    heroForeground: {
      src: "/images/hously-foreground.png",
      alt: "Detalle de una isla de cocina en un interior residencial",
    },
    steps: {
      src: "/images/exterior.png",
      alt: "Ilustración arquitectónica de un espacio residencial",
    },
  },
  verticals: {
    plomeria: {
      seo: {
        title: "Plomero en Quito a domicilio | Fugas, destapes y grifería | HomeService",
        description:
          "Plomeros a domicilio en Quito y valles: fugas de agua, cañerías tapadas, grifería, sanitarios y tuberías. Atendemos todos los días de 7:30 a 19:30.",
        canonical: "https://homeservicequito.com/plomero-quito",
        ogImage: "/brand/og-image-plomeria.jpg",
        ogImageFallback: "/brand/og-image.jpg",
        ogImageAlt: "HomeService, plomería a domicilio en Quito",
      },
      hero: {
        eyebrow: "HOMESERVICE · PLOMERÍA A DOMICILIO EN QUITO",
        title: "Plomero en Quito a domicilio",
        subtitleMobile: "Reparamos fugas, cañerías tapadas, grifería, sanitarios e instalaciones de agua en casas, departamentos y locales",
        subtitleDesktopEnd: "de Quito y sus valles",
        microcopy:
          "Revisamos, te explicamos qué tiene la instalación y conversamos el costo antes de empezar.",
        chips: ["Fugas. Cañerías. Grifería.", HOURS.sevenDays],
        breadcrumb: {
          homeLabel: "Inicio",
          homeHref: "/",
          currentLabel: "Plomero en Quito",
        },
        primaryCta: {
          label: "Solicitar servicio por WhatsApp",
          href: whatsappHref(
            "Hola HomeService, necesito ayuda con un problema de plomería a domicilio. Mi sector es: ",
          ),
          ariaLabel: "Solicitar servicio de plomería por WhatsApp",
          analytics: "cta_whatsapp_hero_click",
        },
        secondaryCta: {
          label: "Llamar ahora",
          href: `tel:${PHONE_E164}`,
          ariaLabel: "Llamar a HomeService",
          analytics: "cta_llamada_hero_click",
        },
      },
      services: {
        id: "servicios",
        eyebrow: "SERVICIOS",
        title: "Servicios de plomería a domicilio",
        intro:
          "Atendemos los problemas de agua y desagüe más frecuentes en casas, departamentos, oficinas y locales de Quito, con la herramienta adecuada para cada caso.",
        items: [
          {
            id: 1,
            title: "Fugas de agua",
            description: "Ubicación y reparación de fugas en tuberías, paredes, pisos y cisternas.",
            asset: {
              filename: "fugas-de-agua.jpg",
              src: "/images/servicios/fugas-de-agua.jpg",
              desktopDimensions: "1200 × 1500 px",
              mobileDimensions: "1600 × 1000 px",
              alt: "Técnico de HomeService reparando una fuga de agua en Quito",
            },
            // slug: "fugas-de-agua",
          },
          {
            id: 2,
            title: "Cañerías y desagües tapados",
            description: "Destape de inodoros, fregaderos, duchas, sifones y cajas de revisión.",
            asset: {
              filename: "destape-desagues.jpg",
              src: "/images/servicios/destape-desagues.jpg",
              desktopDimensions: "1200 × 1500 px",
              mobileDimensions: "1600 × 1000 px",
              alt: "Técnico de HomeService destapando un desagüe en Quito",
            },
            // slug: "destape-desagues",
          },
          {
            id: 3,
            title: "Grifería y sanitarios",
            description: "Cambio y reparación de llaves, mezcladoras, inodoros y lavamanos.",
            asset: {
              filename: "griferia-sanitarios.jpg",
              src: "/images/servicios/griferia-sanitarios.jpg",
              desktopDimensions: "1200 × 1500 px",
              mobileDimensions: "1600 × 1000 px",
              alt: "Técnico de HomeService ajustando la grifería de un lavamanos en Quito",
            },
            // slug: "griferia-sanitarios",
          },
          {
            id: 4,
            title: "Tuberías y conexiones",
            description: "Reparación o cambio de tramos de tubería de agua potable y desagüe.",
            asset: {
              filename: "tuberias-conexiones.jpg",
              src: "/images/servicios/tuberias-conexiones.jpg",
              desktopDimensions: "1200 × 1500 px",
              mobileDimensions: "1600 × 1000 px",
              alt: "Técnico de HomeService revisando conexiones de tubería en Quito",
            },
            // slug: "tuberias-conexiones",
          },
          {
            id: 5,
            title: "Bombas y presión de agua",
            description: "Revisión de bombas, cisternas, tanques y problemas de baja presión.",
            asset: {
              filename: "bombas-presion.jpg",
              src: "/images/servicios/bombas-presion.jpg",
              desktopDimensions: "1200 × 1500 px",
              mobileDimensions: "1600 × 1000 px",
              alt: "Técnico de HomeService revisando una bomba de agua en Quito",
            },
            // slug: "bombas-presion",
          },
          {
            id: 6,
            title: "Instalaciones y mantenimiento",
            description: "Puntos de agua para lavadora, calentador y mantenimiento preventivo.",
            asset: {
              filename: "instalaciones-mantenimiento.jpg",
              src: "/images/servicios/instalaciones-mantenimiento.jpg",
              desktopDimensions: "1200 × 1500 px",
              mobileDimensions: "1600 × 1000 px",
              alt: "Técnico de HomeService instalando un punto de agua en Quito",
            },
            // slug: "instalaciones-mantenimiento",
          },
        ],
        cta: {
          label: "Solicitar servicio por WhatsApp",
          href: whatsappHref(
            "Hola HomeService, quisiera coordinar un servicio de plomería. El problema es: ",
          ),
          ariaLabel: "Coordinar un servicio de plomería por WhatsApp",
          analytics: "cta_whatsapp_servicios_click",
        },
        schedule: HOURS.sentence,
        assetSlot: {
          pending: "Archivo pendiente",
          desktop: "Desktop 4:5",
          mobile: "Móvil 16:10",
        },
      },
      steps: {
        id: "como-funciona",
        eyebrow: "CÓMO FUNCIONA",
        titleBeforeHighlight: "Cómo pedir",
        titleHighlight: "el servicio",
        intro: "Tres pasos claros para coordinar la visita y decidir con la información completa.",
        items: [
          {
            title: "Escribes por WhatsApp",
            description: "Cuéntanos qué está pasando y en qué sector de Quito estás.",
          },
          {
            title: "Coordinamos la visita",
            description: "Agendamos al técnico dentro del horario de atención del mismo día o del siguiente.",
          },
          {
            title: "El técnico revisa y explica",
            description: "Revisa la instalación, te dice qué hay que hacer y cuánto cuesta antes de empezar.",
          },
        ],
      },
      reasons: {
        eyebrow: "HOMESERVICE",
        titleBeforeHighlight: "Por qué llamar a",
        titleHighlight: "HomeService",
        intro: "Claridad antes del trabajo y una explicación concreta de lo que necesita la instalación.",
        items: [
          {
            title: "Diagnóstico explicado",
            description: "Te decimos qué encontramos y por qué, en palabras simples.",
          },
          {
            title: "Costo conversado antes",
            description: "El precio se acuerda antes de empezar el trabajo. Sin cargos sorpresa al final.",
          },
          {
            title: "Herramienta profesional",
            description: "Sonda eléctrica, equipo de detección y equipo de presión según el caso.",
          },
          {
            title: "Materiales a la vista",
            description: "Los materiales se cotizan aparte y los apruebas tú antes de comprarlos.",
          },
          {
            title: "Atención los 7 días",
            description: "De lunes a domingo, de 7:30 a 19:30.",
          },
          {
            title: "Menor rotura posible",
            description: "Procuramos resolver sin romper; si hay que abrir, se te avisa antes.",
          },
        ],
      },
      coverage: {
        id: "cobertura",
        eyebrow: "COBERTURA",
        titleBeforeHighlight: "Dónde",
        titleHighlight: "atendemos",
        intro: "Cubrimos Quito y los valles. Escríbenos con tu sector y te confirmamos la visita.",
        sectors: [
          "Norte",
          "Centro",
          "Sur",
          "La Carolina",
          "El Condado",
          "Ponceano",
          "Carcelén",
          "Calderón",
          "Cumbayá",
          "Tumbaco",
          "Valle de los Chillos",
          "Sangolquí",
          "y sectores aledaños",
        ],
        structuredAreas: ["Quito", "Cumbayá", "Tumbaco", "Valle de los Chillos", "Rumiñahui"],
        cta: {
          label: "Confirmar cobertura por WhatsApp",
          href: whatsappHref("Hola, necesito un plomero en Quito. Mi sector es: "),
          ariaLabel: "Confirmar cobertura de plomería por WhatsApp",
          analytics: "cta_whatsapp_cobertura_click",
        },
      },
      faq: {
        id: "preguntas",
        eyebrow: "PREGUNTAS",
        title: "Preguntas frecuentes",
        items: [
          {
            question: "¿Atienden los fines de semana?",
            answer: "Sí. Atendemos todos los días, de 7:30 a 19:30.",
          },
          {
            question: "¿Cuánto cuesta el servicio?",
            answer:
              "Depende del trabajo y de los materiales que requiera. El técnico revisa, te indica el costo y tú decides antes de que empiece.",
          },
          {
            question: "¿Los materiales están incluidos?",
            answer: "Se cotizan aparte. Te los mostramos y los apruebas antes de la compra.",
          },
          {
            question: "¿Trabajan en departamentos y edificios?",
            answer: "Sí. Atendemos casas, departamentos, oficinas y locales comerciales.",
          },
          {
            question: "¿Tienen que romper para reparar?",
            answer: "Procuramos resolver sin romper. Si el caso lo exige, se te explica antes de abrir.",
          },
          {
            question: "¿Cómo encuentro un plomero cerca de mí?",
            answer:
              "Escríbenos con tu sector de Quito o los valles y te confirmamos la cobertura. Si buscas un plomero urgente, coordinamos según la agenda del día. Este oficio también es conocido como gasfitero en Ecuador.",
          },
        ],
        cta: {
          label: "Consultar por WhatsApp",
          href: whatsappHref("Hola HomeService, tengo una consulta sobre un servicio de plomería."),
          ariaLabel: "Consultar sobre un servicio de plomería por WhatsApp",
          analytics: "cta_whatsapp_faq_click",
        },
      },
      floatingCta: {
        label: "WhatsApp",
        href: whatsappHref("Hola, necesito un plomero a domicilio en Quito."),
        ariaLabel: "Solicitar un plomero a domicilio por WhatsApp",
        analytics: "cta_whatsapp_flotante_click",
      },
      crossLink: {
        prefix: "¿El problema es eléctrico? Mira nuestro servicio de",
        label: "electricista en Quito",
        href: "/electricista-quito",
      },
    },
  },
  footer: {
    servicesHeading: "Servicios",
    contactHeading: "Contacto",
    futureVertical: "Electricidad — próximamente.",
    copyrightSuffix: "HomeService. Todos los derechos reservados.",
  },
  seo: {
    title: "Plomeros a domicilio en Quito | Fugas, destapes y grifería | HomeService",
    description:
      "Servicio de plomería a domicilio en Quito y valles: fugas, cañerías tapadas, grifería, sanitarios y tuberías. Atendemos todos los días de 7:30 a 19:30.",
    locale: "es_EC",
    twitterCard: "summary_large_image",
    ogImage: {
      src: "/brand/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "HomeService, plomería a domicilio en Quito",
    },
  },
} as const

export type SiteContent = typeof siteContent

type WidenContent<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends ReadonlyArray<infer Item>
        ? ReadonlyArray<WidenContent<Item>>
        : T extends object
          ? { [Key in keyof T]: WidenContent<T[Key]> }
          : T

export type PageContent = WidenContent<(typeof siteContent.verticals)["plomeria"]>
export type PlumbingContent = PageContent
export type ServiceItem = PageContent["services"]["items"][number]

export function getSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_URL ?? "http://localhost:3000"
  const absoluteUrl = /^https?:\/\//.test(configuredUrl) ? configuredUrl : `https://${configuredUrl}`

  return new URL(absoluteUrl.endsWith("/") ? absoluteUrl : `${absoluteUrl}/`)
}
