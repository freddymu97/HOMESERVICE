export const PHONE_E164 = "+593982811068"
export const PHONE_WA = "593982811068"
export const SITE_URL = "https://homeservicequito.com"

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
    whatsappHref: whatsappHref("Hola HomeService, deseo información sobre un servicio a domicilio."),
    phoneLabel: "Teléfono",
    whatsappLabel: "WhatsApp",
    hours: HOURS,
  },
  headers: {
    home: {
      navigation: [
        { label: "Inicio", href: "/" },
        { label: "Plomería", href: "/plomero-quito" },
        { label: "Electricidad", href: "/electricista-quito" },
        { label: "Cobertura", href: "#cobertura" },
        { label: "Preguntas", href: "#preguntas" },
      ],
      openMenuAriaLabel: "Abrir menú",
      closeMenuAriaLabel: "Cerrar menú",
      cta: {
        label: "Solicitar servicio",
        href: whatsappHref("Hola HomeService, necesito un servicio a domicilio en Quito."),
        ariaLabel: "Solicitar un servicio a domicilio por WhatsApp",
        analytics: "cta_whatsapp_navbar_click",
      },
    },
    plomeria: {
      navigation: [
        { label: "Inicio", href: "/" },
        { label: "Plomería", href: "/plomero-quito" },
        { label: "Electricidad", href: "/electricista-quito" },
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
    electricidad: {
      navigation: [
        { label: "Inicio", href: "/" },
        { label: "Plomería", href: "/plomero-quito" },
        { label: "Electricidad", href: "/electricista-quito" },
        { label: "Cobertura", href: "#cobertura" },
        { label: "Preguntas", href: "#preguntas" },
      ],
      openMenuAriaLabel: "Abrir menú",
      closeMenuAriaLabel: "Cerrar menú",
      cta: {
        label: "Solicitar servicio",
        href: whatsappHref(
          "Hola HomeService, quiero solicitar un servicio eléctrico en Quito. Mi sector es: ",
        ),
        ariaLabel: "Solicitar un servicio eléctrico por WhatsApp",
        analytics: "cta_whatsapp_navbar_click",
      },
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
    home: {
      seo: {
        title: "HomeService | Plomería y electricidad a domicilio en Quito",
        description:
          "Servicio a domicilio de plomería y electricidad en Quito y valles. Fugas, destapes, grifería, cortocircuitos, tableros e instalaciones. Todos los días de 7:30 a 19:30.",
        canonical: "https://homeservicequito.com/",
        ogImage: "/brand/og-image.jpg",
        ogImageAlt: "HomeService, plomería y electricidad a domicilio en Quito",
      },
      hero: {
        eyebrow: "HOMESERVICE · ASISTENCIA A DOMICILIO EN QUITO",
        title: "Plomería y electricidad a domicilio en Quito",
        subtitleMobile:
          "Un solo contacto para los dos problemas que no pueden esperar en casa: el agua y la luz. Atendemos casas, departamentos, oficinas y locales de Quito y sus valles",
        subtitleDesktopEnd: "",
        microcopy:
          "Revisamos, te explicamos qué tiene la instalación y conversamos el costo antes de empezar.",
        chips: ["Plomería. Electricidad.", HOURS.sevenDays],
        primaryCta: {
          label: "Solicitar servicio por WhatsApp",
          href: whatsappHref(
            "Hola HomeService, necesito ayuda con un problema en casa. El servicio que necesito es: ",
          ),
          ariaLabel: "Solicitar ayuda a domicilio por WhatsApp",
          analytics: "cta_whatsapp_hero_home_click",
        },
        secondaryCta: {
          label: "Llamar ahora",
          href: `tel:${PHONE_E164}`,
          ariaLabel: "Llamar a HomeService",
          analytics: "cta_llamada_hero_home_click",
        },
      },
      services: {
        id: "servicios",
        eyebrow: "SERVICIOS",
        title: "Dos servicios, un mismo equipo",
        intro:
          "Atendemos a domicilio lo que se daña en el agua y en la luz de tu casa o tu local. Elige el servicio que necesitas y te atendemos el mismo día o el siguiente.",
        items: [
          {
            id: 1,
            title: "Fugas de agua",
            description: "Ubicación y reparación de fugas en tuberías, paredes y pisos.",
            asset: {
              filename: "fugas-de-agua.jpg",
              src: "/images/servicios/fugas-de-agua.jpg",
              desktopDimensions: "1200 × 1500 px",
              mobileDimensions: "1600 × 1000 px",
              alt: "Técnico de HomeService reparando una fuga de agua en Quito",
            },
          },
          {
            id: 2,
            title: "Cañerías y desagües tapados",
            description: "Destape de inodoros, fregaderos, duchas y cajas de revisión.",
            asset: {
              filename: "destape-desagues.jpg",
              src: "/images/servicios/destape-desagues.jpg",
              desktopDimensions: "1200 × 1500 px",
              mobileDimensions: "1600 × 1000 px",
              alt: "Técnico de HomeService destapando un desagüe en Quito",
            },
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
          },
          {
            id: 4,
            title: "Cortocircuitos y cortes de luz",
            description:
              "Diagnóstico y reparación de fallas que dejan sin energía la casa o el local.",
            asset: {
              filename: "cortocircuitos.jpg",
              src: "/images/servicios/cortocircuitos.jpg",
              desktopDimensions: "1200 × 1500 px",
              mobileDimensions: "1600 × 1000 px",
              alt: "Técnico de HomeService revisando un cortocircuito en Quito",
            },
          },
          {
            id: 5,
            title: "Tableros y breakers",
            description:
              "Instalación, cambio y orden de tableros, breakers y protecciones.",
            asset: {
              filename: "tableros-breakers.jpg",
              src: "/images/servicios/tableros-breakers.jpg",
              desktopDimensions: "1200 × 1500 px",
              mobileDimensions: "1600 × 1000 px",
              alt: "Técnico de HomeService revisando un tablero eléctrico en Quito",
            },
          },
          {
            id: 6,
            title: "Puntos de luz y tomacorrientes",
            description:
              "Instalación y reparación de tomacorrientes, luminarias e interruptores.",
            asset: {
              filename: "puntos-tomacorrientes.jpg",
              src: "/images/servicios/puntos-tomacorrientes.jpg",
              desktopDimensions: "1200 × 1500 px",
              mobileDimensions: "1600 × 1000 px",
              alt: "Técnico de HomeService instalando un tomacorriente en Quito",
            },
          },
        ],
        groups: [
          {
            title: "Plomería",
            itemIds: [1, 2, 3],
            linkPrefix: "Ver servicio de",
            linkLabel: "plomero en Quito",
            href: "/plomero-quito",
          },
          {
            title: "Electricidad",
            itemIds: [4, 5, 6],
            linkPrefix: "Ver servicio de",
            linkLabel: "electricista en Quito",
            href: "/electricista-quito",
          },
        ],
        cta: {
          label: "Solicitar servicio por WhatsApp",
          href: whatsappHref(
            "Hola HomeService, quisiera coordinar un servicio a domicilio. Mi sector es: ",
          ),
          ariaLabel: "Coordinar un servicio a domicilio por WhatsApp",
          analytics: "cta_whatsapp_verticales_click",
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
          { title: "Diagnóstico explicado", description: "Te decimos qué encontramos y por qué, en palabras simples." },
          { title: "Costo conversado antes", description: "El precio se acuerda antes de empezar el trabajo. Sin cargos sorpresa al final." },
          { title: "Herramienta profesional", description: "Sonda eléctrica, equipo de detección y equipo de presión según el caso." },
          { title: "Materiales a la vista", description: "Los materiales se cotizan aparte y los apruebas tú antes de comprarlos." },
          { title: "Atención los 7 días", description: "De lunes a domingo, de 7:30 a 19:30." },
          { title: "Menor rotura posible", description: "Procuramos resolver sin romper; si hay que abrir, se te avisa antes." },
        ],
      },
      coverage: {
        id: "cobertura",
        eyebrow: "COBERTURA",
        titleBeforeHighlight: "Dónde",
        titleHighlight: "atendemos",
        intro: "Cubrimos Quito y los valles. Escríbenos con tu sector y te confirmamos la visita.",
        sectors: ["Norte", "Centro", "Sur", "La Carolina", "El Condado", "Ponceano", "Carcelén", "Calderón", "Cumbayá", "Tumbaco", "Valle de los Chillos", "Sangolquí", "y sectores aledaños"],
        structuredAreas: ["Quito", "Cumbayá", "Tumbaco", "Valle de los Chillos", "Rumiñahui"],
        cta: {
          label: "Confirmar cobertura por WhatsApp",
          href: whatsappHref("Hola HomeService, quisiera confirmar si atienden en mi sector: "),
          ariaLabel: "Confirmar la cobertura de HomeService por WhatsApp",
          analytics: "cta_whatsapp_cobertura_home_click",
        },
      },
      faq: {
        id: "preguntas",
        eyebrow: "PREGUNTAS",
        title: "Preguntas frecuentes",
        items: [
          { question: "¿Qué servicios ofrece HomeService?", answer: "Plomería y electricidad a domicilio en Quito y sus valles. Cada servicio tiene su propia página con el detalle completo." },
          { question: "¿Atienden los fines de semana?", answer: HOURS.sentence },
          { question: "¿Cómo se pide el servicio?", answer: "Nos escribes por WhatsApp con tu sector y el problema, coordinamos la visita y el técnico te explica el trabajo y el costo antes de empezar." },
          { question: "¿Trabajan en departamentos, oficinas y locales?", answer: "Sí, además de casas." },
          { question: "¿Los materiales están incluidos?", answer: "Se cotizan aparte. Te los mostramos y los apruebas antes de la compra." },
          { question: "¿A qué sectores de Quito llegan?", answer: "A Quito y los valles: norte, centro, sur, Cumbayá, Tumbaco y Los Chillos, entre otros. Escríbenos tu sector." },
        ],
        cta: {
          label: "Consultar por WhatsApp",
          href: whatsappHref("Hola HomeService, tengo una consulta sobre sus servicios a domicilio."),
          ariaLabel: "Consultar sobre los servicios de HomeService por WhatsApp",
          analytics: "cta_whatsapp_faq_home_click",
        },
      },
      floatingCta: {
        label: "WhatsApp",
        href: whatsappHref("Hola HomeService, necesito coordinar un servicio en Quito. Mi sector es: "),
        ariaLabel: "Solicitar un servicio de HomeService por WhatsApp",
        analytics: "cta_whatsapp_flotante_click",
      },
    },
    electricidad: {
      seo: {
        title: "Electricista en Quito a domicilio | Cortocircuitos y tableros | HomeService",
        description:
          "Electricista a domicilio en Quito y valles: cortocircuitos, tableros, breakers, puntos de luz, puesta a tierra e instalaciones. Atendemos todos los días de 7:30 a 19:30.",
        canonical: "https://homeservicequito.com/electricista-quito",
        ogImage: "/brand/og-image-electricidad.jpg",
        ogImageFallback: "/brand/og-image.jpg",
        ogImageAlt: "HomeService, electricidad a domicilio en Quito",
      },
      hero: {
        eyebrow: "HOMESERVICE · ELECTRICIDAD A DOMICILIO EN QUITO",
        title: "Electricista en Quito a domicilio",
        subtitleMobile:
          "Atendemos cortocircuitos, cortes de luz, tableros, breakers, puntos de luz e instalaciones eléctricas en casas, departamentos, oficinas y locales de Quito y sus valles",
        subtitleDesktopEnd: "",
        microcopy:
          "Revisamos la instalación, te explicamos la falla y conversamos el costo antes de empezar.",
        chips: ["Cortocircuitos. Tableros. Instalaciones.", HOURS.sevenDays],
        breadcrumb: {
          homeLabel: "Inicio",
          homeHref: "/",
          currentLabel: "Electricista en Quito",
        },
        primaryCta: {
          label: "Solicitar servicio por WhatsApp",
          href: whatsappHref(
            "Hola HomeService, necesito un electricista a domicilio en Quito. Mi sector es: ",
          ),
          ariaLabel: "Solicitar un electricista a domicilio por WhatsApp",
          analytics: "cta_whatsapp_hero_electricista_click",
        },
        secondaryCta: {
          label: "Llamar ahora",
          href: `tel:${PHONE_E164}`,
          ariaLabel: "Llamar a HomeService por un servicio eléctrico",
          analytics: "cta_llamada_hero_electricista_click",
        },
      },
      services: {
        id: "servicios",
        eyebrow: "SERVICIOS",
        title: "Servicios de electricista a domicilio",
        intro:
          "Atendemos las fallas eléctricas más frecuentes en Quito, desde un cortocircuito que dejó sin luz una parte de la casa hasta la instalación completa de puntos nuevos.",
        items: [
          {
            id: 1,
            title: "Cortocircuitos y cortes de luz",
            description: "Diagnóstico y reparación de fallas que dejan sin energía la casa o el local.",
            asset: {
              filename: "cortocircuitos.jpg",
              src: "/images/servicios/cortocircuitos.jpg",
              desktopDimensions: "1200 × 1500 px",
              mobileDimensions: "1600 × 1000 px",
              alt: "Técnico de HomeService diagnosticando un cortocircuito en Quito",
            },
          },
          {
            id: 2,
            title: "Tableros y breakers",
            description: "Instalación, cambio y ordenamiento de tableros, breakers y protecciones.",
            asset: {
              filename: "tableros-breakers.jpg",
              src: "/images/servicios/tableros-breakers.jpg",
              desktopDimensions: "1200 × 1500 px",
              mobileDimensions: "1600 × 1000 px",
              alt: "Técnico de HomeService revisando un tablero eléctrico en Quito",
            },
          },
          {
            id: 3,
            title: "Puntos de luz y tomacorrientes",
            description: "Instalación y reparación de tomacorrientes, interruptores y luminarias.",
            asset: {
              filename: "puntos-tomacorrientes.jpg",
              src: "/images/servicios/puntos-tomacorrientes.jpg",
              desktopDimensions: "1200 × 1500 px",
              mobileDimensions: "1600 × 1000 px",
              alt: "Técnico de HomeService instalando un tomacorriente en Quito",
            },
          },
          {
            id: 4,
            title: "Revisión de cableado",
            description: "Revisión de cableado, conexiones flojas y puntos recalentados.",
            asset: {
              filename: "revision-cableado.jpg",
              src: "/images/servicios/revision-cableado.jpg",
              desktopDimensions: "1200 × 1500 px",
              mobileDimensions: "1600 × 1000 px",
              alt: "Técnico de HomeService revisando cableado eléctrico en Quito",
            },
          },
          {
            id: 5,
            title: "Puesta a tierra y 110v–220v",
            description: "Puesta a tierra y adecuación de 110v a 220v para equipos de mayor consumo.",
            asset: {
              filename: "puesta-a-tierra.jpg",
              src: "/images/servicios/puesta-a-tierra.jpg",
              desktopDimensions: "1200 × 1500 px",
              mobileDimensions: "1600 × 1000 px",
              alt: "Técnico de HomeService verificando una puesta a tierra en Quito",
            },
          },
          {
            id: 6,
            title: "Duchas, cocinas de inducción y calefones eléctricos",
            description: "Conexión eléctrica de duchas, cocinas de inducción y calefones eléctricos.",
            asset: {
              filename: "instalaciones-electricas.jpg",
              src: "/images/servicios/instalaciones-electricas.jpg",
              desktopDimensions: "1200 × 1500 px",
              mobileDimensions: "1600 × 1000 px",
              alt: "Técnico de HomeService realizando una conexión eléctrica en Quito",
            },
          },
        ],
        additionalServices: {
          label: "También atendemos",
          items: [
            "Iluminación LED",
            "Acometidas y medidores",
            "Instalación eléctrica en viviendas",
            "Porteros y videoporteros",
            "Control de acceso",
            "Cámaras de seguridad",
            "Cercos eléctricos",
            "Cargadores de auto eléctrico",
            "Domótica",
          ],
        },
        cta: {
          label: "Solicitar servicio por WhatsApp",
          href: whatsappHref(
            "Hola HomeService, quisiera coordinar un servicio eléctrico. La falla es: ",
          ),
          ariaLabel: "Coordinar un servicio eléctrico por WhatsApp",
          analytics: "cta_whatsapp_servicios_electricista_click",
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
          { title: "Escribes por WhatsApp", description: "Cuéntanos qué falla en la instalación eléctrica y en qué sector de Quito estás." },
          { title: "Coordinamos la visita", description: "Agendamos al técnico dentro del horario de atención del mismo día o del siguiente." },
          { title: "El técnico revisa y explica", description: "Revisa la instalación eléctrica, te dice qué hay que hacer y cuánto cuesta antes de empezar." },
        ],
      },
      reasons: {
        eyebrow: "HOMESERVICE",
        titleBeforeHighlight: "Por qué llamar a",
        titleHighlight: "HomeService",
        intro: "Claridad antes del trabajo y una explicación concreta de lo que necesita la instalación.",
        items: [
          { title: "Diagnóstico explicado", description: "Te decimos qué encontramos y por qué, en palabras simples." },
          { title: "Costo conversado antes", description: "El precio se acuerda antes de empezar el trabajo. Sin cargos sorpresa al final." },
          { title: "Herramienta profesional", description: "Multímetro, pinza amperimétrica y equipo de medición según el caso." },
          { title: "Materiales a la vista", description: "Los materiales se cotizan aparte y los apruebas tú antes de comprarlos." },
          { title: "Atención los 7 días", description: "De lunes a domingo, de 7:30 a 19:30." },
          { title: "Trabajo ordenado", description: "Dejamos el tablero rotulado y la instalación ordenada." },
        ],
      },
      coverage: {
        id: "cobertura",
        eyebrow: "COBERTURA",
        titleBeforeHighlight: "Dónde",
        titleHighlight: "atendemos",
        intro: "Nuestros electricistas en Quito cubren la ciudad y los valles. Escríbenos con tu sector y te confirmamos la visita.",
        sectors: ["Norte", "Centro", "Sur", "La Carolina", "El Condado", "Ponceano", "Carcelén", "Calderón", "Cumbayá", "Tumbaco", "Valle de los Chillos", "Sangolquí", "y sectores aledaños"],
        structuredAreas: ["Quito", "Cumbayá", "Tumbaco", "Valle de los Chillos", "Rumiñahui"],
        cta: {
          label: "Confirmar cobertura por WhatsApp",
          href: whatsappHref("Hola, necesito un electricista en Quito. Mi sector es: "),
          ariaLabel: "Confirmar cobertura de electricidad por WhatsApp",
          analytics: "cta_whatsapp_cobertura_electricista_click",
        },
      },
      faq: {
        id: "preguntas",
        eyebrow: "PREGUNTAS",
        title: "Preguntas frecuentes",
        items: [
          { question: "¿Atienden cortes de luz el mismo día?", answer: "Atendemos todos los días de 7:30 a 19:30 y coordinamos la visita según la agenda del día. Para emergencias eléctricas dentro de ese horario, escríbenos con tu sector." },
          { question: "¿Cuánto cuesta un electricista en Quito?", answer: "Depende de la falla y de los materiales. El técnico revisa, te indica el costo y tú decides antes de que empiece." },
          { question: "¿Revisan tableros y breakers de edificios?", answer: "Sí. Atendemos casas, departamentos, oficinas, locales y áreas comunes." },
          { question: "¿Hacen cambio de 110v a 220v?", answer: "Sí, cuando la instalación lo permite. El técnico revisa el tablero y la acometida antes de proponer el trabajo." },
          { question: "¿Instalan puntos nuevos de luz y tomacorrientes?", answer: "Sí, en obra existente y en remodelaciones." },
          { question: "¿A qué sectores de Quito llegan?", answer: "A Quito y los valles: norte, centro, sur, Cumbayá, Tumbaco y Los Chillos, entre otros. Si estás buscando un electricista cerca de mí, escríbenos tu sector y te confirmamos la cobertura." },
        ],
        cta: {
          label: "Consultar por WhatsApp",
          href: whatsappHref("Hola HomeService, tengo una consulta sobre un servicio eléctrico."),
          ariaLabel: "Consultar sobre un servicio eléctrico por WhatsApp",
          analytics: "cta_whatsapp_faq_electricista_click",
        },
      },
      floatingCta: {
        label: "WhatsApp",
        href: whatsappHref("Hola HomeService, necesito revisar una falla eléctrica en Quito. Mi sector es: "),
        ariaLabel: "Solicitar ayuda eléctrica por WhatsApp",
        analytics: "cta_whatsapp_flotante_click",
      },
      crossLink: {
        prefix: "¿Se te tapó una cañería o tienes una fuga? Mira nuestro servicio de",
        label: "plomero en Quito",
        href: "/plomero-quito",
      },
    },
  },
  footer: {
    contactHeading: "Contacto",
    columns: [
      {
        heading: "Plomería",
        href: "/plomero-quito",
        items: [
          "Fugas de agua",
          "Cañerías y desagües tapados",
          "Grifería y sanitarios",
          "Tuberías y conexiones",
          "Bombas y presión de agua",
          "Instalaciones y mantenimiento",
        ],
      },
      {
        heading: "Electricidad",
        href: "/electricista-quito",
        items: [
          "Cortocircuitos y cortes de luz",
          "Tableros y breakers",
          "Puntos de luz y tomacorrientes",
          "Revisión de cableado",
          "Puesta a tierra y 110v–220v",
          "Duchas, cocinas y calefones eléctricos",
        ],
      },
    ],
    copyrightSuffix: "HomeService. Todos los derechos reservados.",
  },
  seo: {
    locale: "es_EC",
    twitterCard: "summary_large_image",
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
export type HeaderContent = WidenContent<(typeof siteContent.headers)[keyof typeof siteContent.headers]>
export type PlumbingContent = PageContent
export type ServiceItem = PageContent["services"]["items"][number]

export function getSiteUrl() {
  return new URL(`${SITE_URL}/`)
}
