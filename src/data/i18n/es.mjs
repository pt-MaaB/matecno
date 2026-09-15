// i18n/es.mjs — Spanish (es-ES, informal "tú") string pack.
// Shape shared with pt.mjs / en.mjs; merged with structure.mjs in site.mjs.
// Voice: plain, factual, showcase-first. No em-dashes in prose, no colon-frame
// openers, no negation-sell formulas. Em-dashes allowed only in <title> tags.
export default {
  "seo": {
    "titleHome": "Matecno — Software a Medida en Coimbra",
    "descHome": "Software a medida, automatizaciones, webs y backends para empresas. Código escrito desde cero con Next.js, Prisma y PostgreSQL, el mismo stack de nuestros productos en producción.",
    "jsonldDescription": "Construimos software a medida, automatizaciones, webs, backends e integraciones para empresas, en Coimbra y en remoto. Código escrito desde cero.",
    "ownsDescription": "Plataforma de reservas multi-tenant, en tres idiomas y con recordatorios automáticos. En producción.",
    "areaServedRemote": "Remoto: Portugal y resto del mundo",
    "knowsAbout": [
      "Desarrollo de software a medida",
      "Automatización de procesos",
      "Webs y aplicaciones web",
      "Backends y APIs",
      "Integraciones de sistemas",
      "Next.js",
      "Prisma",
      "PostgreSQL"
    ],
    "makesOffer": [
      {
        "name": "Software a medida",
        "description": "Aplicaciones web y plataformas construidas desde cero para tu negocio."
      },
      {
        "name": "Automatizaciones",
        "description": "Automatización de tareas y flujos de trabajo para pymes."
      },
      {
        "name": "Webs",
        "description": "Webs rápidas, escritas a mano, con el SEO técnico resuelto desde el principio."
      },
      {
        "name": "Backends e integraciones",
        "description": "Backends, APIs e integraciones entre las herramientas que ya usas."
      }
    ]
  },
  "core": {
    "tagline": "Tu competencia aparece primero en Google. Nosotros nos encargamos."
  },
  "ui": {
    "navAria": "Principal",
    "back": "volver al sistema",
    "hint": "arrastra para orbitar · scroll para zoom · haz clic en un nodo para explorar",
    "detailLabel": "Detalle",
    "dissected": "nodo diseccionado",
    "viewPage": "ver página {label}",
    "sectionEyebrow": "nodo del sistema",
    "detalhe": "Detalle",
    "nextStep": "Siguiente paso",
    "otherNodes": "Otros nodos",
    "backToGraph": "volver al grafo",
    "waMessage": "Hola, me gustaría reservar mi evaluación gratuita",
    "floatingWaAria": "Habla con nosotros por WhatsApp",
    "floatingWaMessage": "Hola, me gustaría saber más sobre vuestros servicios"
  },
  "contact": {
    "ctaKicker": "Habla con nosotros",
    "ctaSub": "Respuesta directa de quien construye · ES o EN · Coimbra y remoto para todo el país",
    "stepsHeading": "Qué pasa a continuación",
    "steps": [
      {
        "title": "Diagnóstico gratuito de 30 min",
        "body": "Por llamada o en persona. Repasamos contigo el proceso en cuestión y los sistemas que ya usas."
      },
      {
        "title": "Presupuesto claro, o un no honesto",
        "body": "Si tiene sentido avanzar, sales con alcance, fases y precio. Si no lo tiene, te explicamos por qué."
      }
    ],
    "formKicker": "Prefieres escribir",
    "formHeading": "Cuéntanos qué necesitas",
    "formSub": "Lo lee quien construye.",
    "labelName": "Nombre",
    "labelCompany": "Empresa",
    "labelEmail": "Email",
    "labelPhone": "Teléfono",
    "labelMessage": "Qué necesitas construir",
    "phName": "Tu nombre",
    "phCompany": "Opcional",
    "phEmail": "email@laempresa.es",
    "phPhone": "+351 9xx xxx xxx",
    "phMessage": "Describe brevemente el problema o la idea...",
    "submit": "Enviar mensaje",
    "formFootnote": "Respondemos siempre, en español o inglés"
  },
  "hubs": {
    "serv": {
      "label": "Servicios",
      "aspects": [
        {
          "label": "Software",
          "title": "Software a medida",
          "desc": "Plataformas web y herramientas internas hechas a medida para escalar tu operación.",
          "items": [
            {"k": "Qué construimos", "v": "Paneles de gestión, portales de clientes y aplicaciones SaaS multi-tenant."},
            {"k": "Cómo entregamos", "v": "Código fuente 100% tuyo, infraestructura escalable y autenticación/pagos integrados."},
            {"k": "Ventaja", "v": "Control total sobre el producto, sin licencias de terceros ni límites del software prefabricado."}
          ]
        },
        {
          "label": "Automatización",
          "title": "Automatización de procesos",
          "desc": "Elimina el trabajo manual repetitivo entre las herramientas que tu equipo ya usa.",
          "items": [
            {"k": "Qué automatizamos", "v": "Sincronización de datos, emisión de facturas, envíos de email e informes automáticos."},
            {"k": "Infraestructura", "v": "Ejecución programada o por eventos, con logs de auditoría y alertas instantáneas si algo falla."},
            {"k": "Ventaja", "v": "Procesos funcionando 24/7 con cero error humano."}
          ]
        },
        {
          "label": "Webs",
          "title": "Webs y plataformas",
          "desc": "Sitios ultrarrápidos hechos a mano para máximo rendimiento y visibilidad.",
          "items": [
            {"k": "Qué incluye", "v": "Arquitectura estática ligera, i18n nativo (multi-idioma), Schema y Core Web Vitals optimizados."},
            {"k": "Ventaja", "v": "Mejor posicionamiento en Google y carga instantánea, sin depender de plugins pesados."}
          ]
        },
        {
          "label": "Backends",
          "title": "Backends, APIs e integraciones",
          "desc": "Conectamos los sistemas que ya usas para que los datos fluyan sin trabajo manual.",
          "items": [
            {"k": "Qué integramos", "v": "Stripe, Google Workspace, WhatsApp, email y tu ERP/CRM, vía APIs REST y webhooks."},
            {"k": "Cómo entregamos", "v": "Colas, crons y sincronización con reintentos, monitorización y documentación de la API."},
            {"k": "Ventaja", "v": "Un único flujo de datos fiable entre herramientas, sin exportar e importar hojas a mano."}
          ]
        },
        {
          "label": "Leads & Datos",
          "title": "Leads & Datos",
          "desc": "Listas B2B verificadas e inteligencia de mercado para tu equipo comercial.",
          "items": [
            {"k": "Qué entregamos", "v": "Leads B2B verificados, enriquecimiento y limpieza de listas, recogida de datos públicos a medida."},
            {"k": "Cómo entregamos", "v": "Email verificado antes de la entrega, teléfono directo, sin duplicados, flujo mensual segmentado por sector y región."},
            {"k": "Ventaja", "v": "Tu equipo habla con quien importa, en vez de buscar contactos."}
          ],
          "linkTo": "leads"
        }
      ],
      "page": {
        "title": "Servicios — Software a Medida, Automatización y Leads B2B | Matecno",
        "description": "Software a medida, automatización de procesos, webs, backends e integraciones, además de leads B2B y datos. Código escrito desde cero con Next.js, Prisma y PostgreSQL.",
        "h1": "Qué construimos",
        "paras": [
          "Trabajamos en cinco áreas: software a medida, automatización de procesos, webs, backends e integraciones, y leads B2B. El mismo stack en todo lo que hacemos, incluidos nuestros propios productos."
        ],
        "cta": "Diagnóstico gratuito de 30 minutos. WhatsApp +351 919 642 845 o mauro@matecno.pt."
      }
    },
    "leads": {
      "label": "Leads y Datos",
      "aspects": [
        {
          "label": "Oferta",
          "title": "Qué entregamos",
          "desc": "Leads B2B verificados, entregados cada mes y segmentados para tu equipo comercial.",
          "items": [
            {"k": "Qué entregamos", "v": "Generación de leads B2B cualificados, enriquecimiento y limpieza de listas existentes, recogida de datos públicos a medida."},
            {"k": "Cómo entregamos", "v": "Flujo mensual de leads nuevos, segmentado por sector y región, en el formato que usas: hoja de cálculo, informe o feed."},
            {"k": "Ventaja", "v": "Tu equipo empieza cada mes con contactos nuevos y cualificados, sin perder tiempo buscando."}
          ]
        },
        {
          "label": "Cada lead",
          "title": "Cada contacto, completo",
          "desc": "Un contacto solo entra en la lista cuando se puede llamar y escribir hoy.",
          "items": [
            {"k": "Qué incluye", "v": "Nombre y cargo del decisor, teléfono directo y email verificado antes de la entrega."},
            {"k": "Cómo lo garantizamos", "v": "Verificación de email antes de entregar y deduplicación en toda la lista."},
            {"k": "Ventaja", "v": "Cero rebotes y cero llamadas repetidas al mismo negocio."}
          ]
        },
        {
          "label": "Confianza",
          "title": "Fuentes públicas, RGPD",
          "desc": "Datos de fuentes públicas, tratados dentro del RGPD, sin listas compradas.",
          "items": [
            {"k": "De dónde vienen", "v": "Solo fuentes públicas; sin listas compradas ni reventa de contactos."},
            {"k": "Cómo trabajamos", "v": "Cumplimiento del RGPD y un análisis de mercado gratuito antes de avanzar."},
            {"k": "Ventaja", "v": "Contactas con legitimidad y conoces el tamaño del mercado antes de pagar."}
          ]
        }
      ],
      "page": {
        "title": "Generación de Leads B2B y Datos | Matecno Coimbra",
        "description": "Leads B2B verificados con nombre, cargo, email y teléfono del decisor. Enriquecimiento de datos e inteligencia de mercado. Fuentes públicas, RGPD.",
        "h1": "Leads B2B y datos de mercado",
        "paras": [
          "Construimos sistemas que recogen, cruzan y verifican datos de empresas. Son los mismos sistemas que usamos para entregar leads B2B cualificados y estudios de mercado a clientes.",
          "En la generación de leads entregamos contactos segmentados por sector y región, con nombre y cargo del decisor, email verificado y teléfono directo. Si ya tienes una lista, nos encargamos del enriquecimiento y la limpieza, y devolvemos registros completos, sin duplicados y con emails verificados.",
          "También recogemos datos públicos a medida, como precios de la competencia, listados y monitorización continua, entregados en hoja de cálculo, informe o feed automático. Si necesitas un flujo regular, definimos un perfil de cliente ideal y entregamos leads nuevos cada mes.",
          "Trabajamos solo con fuentes públicas y conforme al RGPD. No compramos listas ni enviamos spam. Antes de avanzar, comprobamos gratis si existe volumen suficiente en tu mercado."
        ],
        "cta": "Pide un análisis gratuito de tu mercado. WhatsApp +351 919 642 845 o mauro@matecno.pt."
      }
    },
    "produtos": {
      "label": "Productos",
      "aspects": [
        {
          "label": "HoraCerta",
          "title": "El producto en producción",
          "desc": "Plataforma de reservas online, en producción, con negocios reales usándola cada día.",
          "items": [
            {"k": "Qué es", "v": "Reservas online multi-tenant, con datos aislados por negocio, recordatorios automáticos y tres idiomas nativos."},
            {"k": "En producción", "v": "Cientos de reservas gestionadas al mes."},
            {"k": "Ventaja", "v": "Ves lo que construimos funcionando antes de confiarnos tu proyecto."}
          ]
        },
        {
          "label": "Stack",
          "title": "La ingeniería detrás",
          "desc": "El mismo stack que usamos en los proyectos para clientes, probándose en un producto propio.",
          "items": [
            {"k": "Qué usamos", "v": "Next.js en la aplicación, Prisma y PostgreSQL en el modelo de datos, backends e integraciones a medida."},
            {"k": "Cómo está hecho", "v": "Aislamiento de datos por tenant diseñado desde cero; código nuestro de principio a fin."},
            {"k": "Ventaja", "v": "Ninguna decisión técnica en tu proyecto es teoría: ya la tomamos en un producto en producción."}
          ]
        },
        {
          "label": "La línea",
          "title": "La línea va a crecer",
          "desc": "HoraCerta es el primero; cada producto siguiente entra aquí cuando está en producción.",
          "items": [
            {"k": "Qué viene", "v": "El próximo producto será para marketing, en el mismo stack."},
            {"k": "Cómo entra", "v": "Solo aparece en esta página cuando está en producción con usuarios reales."},
            {"k": "Ventaja", "v": "Esta página muestra lo que funciona, no lo que está planeado."}
          ]
        }
      ],
      "page": {
        "title": "Productos — HoraCerta y la línea Matecno | Coimbra",
        "description": "HoraCerta, plataforma de reservas multi-tenant en producción con Next.js, Prisma y Postgres, en tres idiomas. El software propio de Matecno.",
        "h1": "Nuestros productos",
        "paras": [
          "Además del trabajo para clientes, lanzamos nuestros propios productos. El primero es HoraCerta, una plataforma de reservas en producción que gestiona cientos de reservas al mes.",
          "Es multi-tenant, con varios negocios sobre la misma base y datos aislados por tenant, en tres idiomas y con recordatorios automáticos en cada reserva. La aplicación funciona con Next.js, con Prisma y Postgres en el modelo de datos.",
          "La línea va a crecer. El próximo producto será para marketing, y cada uno entra en esta página cuando esté en producción.",
          "HoraCerta es también nuestra carta de presentación. Es la forma más directa de valorar nuestro trabajo antes de contratarnos. Si tienes un producto en mente, el diagnóstico gratuito de 30 minutos sirve para mapearlo, en Coimbra o en remoto."
        ],
        "cta": "Agenda un diagnóstico gratuito. WhatsApp +351 919 642 845 o mauro@matecno.pt."
      }
    },
    "method": {
      "label": "Método",
      "aspects": [
        {
          "label": "Fases",
          "title": "Del diagnóstico a la entrega",
          "desc": "Cuatro fases, con software funcionando desde la segunda.",
          "items": [
            {"k": "Cómo empieza", "v": "Diagnóstico de 30 minutos sobre el proceso y los sistemas actuales, antes de cualquier presupuesto."},
            {"k": "Cómo construimos", "v": "Arquitectura de datos e integraciones validada contigo; construcción en ciclos cortos con el software funcionando en cada fase; entrega en producción con deploy, tests y documentación."},
            {"k": "Ventaja", "v": "Ves progreso real en cada ciclo, y el presupuesto se apoya en un diagnóstico, no en una estimación a ciegas."}
          ]
        },
        {
          "label": "Entregables",
          "title": "Lo que queda contigo",
          "desc": "Al final, el proyecto es tuyo por completo, sin dependencia de nosotros.",
          "items": [
            {"k": "Qué recibes", "v": "Código fuente en un repositorio tuyo; documentación de cómo funciona, cómo se cambia y cómo se despliega."},
            {"k": "Cómo queda", "v": "Accesos, entorno y base de datos en tus manos; flujos, integraciones y APIs listos para escalar."},
            {"k": "Ventaja", "v": "Puedes seguir con nosotros o con cualquier otro equipo. La elección es tuya."}
          ]
        },
        {
          "label": "Soporte",
          "title": "Después de entregar",
          "desc": "El soporte lo da quien escribió el código, con plazos acordados por escrito.",
          "items": [
            {"k": "Qué incluye", "v": "Plazos de respuesta por escrito y evoluciones por fases, a tu ritmo."},
            {"k": "Cómo funciona", "v": "WhatsApp directo, +351 919 642 845, con quien construyó el sistema."},
            {"k": "Ventaja", "v": "Nunca explicas tu sistema a alguien que no lo conoce."}
          ]
        }
      ],
      "page": {
        "title": "Método Matecno — del diagnóstico a la entrega",
        "description": "Cómo construimos software a medida: diagnóstico, arquitectura validada, construcción en ciclos cortos y entrega en producción con el código en tu repositorio.",
        "h1": "Cómo trabajamos, del diagnóstico a la entrega",
        "paras": [
          "Son cuatro fases: diagnóstico, arquitectura, construcción en ciclos cortos y entrega en producción. El presupuesto aparece después del diagnóstico, cuando el alcance está claro para las dos partes.",
          "La arquitectura de datos, flujos e integraciones se diseña y se valida contigo antes de la primera línea de código. La construcción avanza en ciclos cortos y vas viendo el software funcionar en cada fase. Al final queda en producción, documentado, en un repositorio tuyo.",
          "Este método produjo HoraCerta, nuestra plataforma de reservas multi-tenant en tres idiomas, hoy en producción sobre Next.js, Prisma y Postgres.",
          "Después de la entrega, el soporte lo da quien escribió el código, con plazos de respuesta acordados por escrito. Las evoluciones entran por fases, a tu ritmo. Para agendar el diagnóstico, escribe al +351 919 642 845 (WhatsApp) o a mauro@matecno.pt."
        ],
        "cta": "El diagnóstico son 30 minutos, gratuitos. WhatsApp +351 919 642 845 o mauro@matecno.pt."
      }
    },
    "about": {
      "label": "Nosotros",
      "aspects": [
        {
          "label": "Ingeniería",
          "title": "Código escrito desde cero",
          "desc": "Software a medida, del modelo de datos al deploy, sin plataformas prefabricadas debajo.",
          "items": [
            {"k": "Qué hacemos", "v": "Software a medida, automatizaciones e integraciones, del modelo de datos al deploy."},
            {"k": "Con qué", "v": "Next.js, Node.js y TypeScript en la app y el backend; Prisma y PostgreSQL en el modelo de datos; Python en las automatizaciones; Stripe, Google Workspace, WhatsApp y email en las integraciones."},
            {"k": "Ventaja", "v": "Un solo stack, dominado de principio a fin, sin capas que nadie del equipo sepa mantener."}
          ]
        },
        {
          "label": "Dónde",
          "title": "Coimbra y remoto para todo el país",
          "desc": "Base en Coimbra, trabajo remoto para todo Portugal, y siempre hablas con quien construye.",
          "items": [
            {"k": "Dónde estamos", "v": "Base en Coimbra, con presencia en la región Centro; remoto para todo el país."},
            {"k": "Cómo llegas", "v": "WhatsApp y email respondidos por quien construye; diagnóstico por llamada o en persona."},
            {"k": "Ventaja", "v": "Acceso directo a quien construye, sin gestores de cuenta en medio."}
          ]
        },
        {
          "label": "Principios",
          "title": "Lo que queda acordado",
          "desc": "Cuatro compromisos, por escrito, en todos los proyectos.",
          "items": [
            {"k": "Qué prometemos", "v": "El código fuente es tuyo, en un repositorio tuyo; alcance, plazos y soporte por escrito."},
            {"k": "Qué mostramos", "v": "HoraCerta en producción como referencia pública."},
            {"k": "Ventaja", "v": "Un no claro cuando el proyecto no se justifica. Ahorras el dinero y el tiempo."}
          ]
        }
      ],
      "page": {
        "title": "Sobre Matecno — Ingeniería de Software a Medida en Coimbra",
        "description": "Matecno escribe software desde cero con Next.js, Prisma y PostgreSQL, en Coimbra y remoto para todo el país. Nuestro producto HoraCerta está en producción.",
        "h1": "Ingeniería de software hecha en Coimbra",
        "paras": [
          "Matecno desarrolla aplicaciones web, automatizaciones, webs, backends e integraciones. Trabajamos con Next.js, Node.js, TypeScript, Prisma y PostgreSQL, y usamos Python en las automatizaciones. Conectamos los sistemas con Stripe, Google Workspace, email y WhatsApp. Además del trabajo para clientes, tenemos productos propios.",
          "Nuestro principal producto es HoraCerta, una plataforma de reservas multi-tenant en tres idiomas, con recordatorios automáticos, que gestiona cientos de reservas al mes en producción. Esta web también es trabajo nuestro, incluido el grafo 3D de la página de inicio.",
          "El código fuente se queda en el repositorio del cliente. Alcance, plazos y soporte quedan definidos por escrito antes de empezar. Cuando pensamos que un proyecto no se justifica, lo decimos en el diagnóstico.",
          "Estamos en Coimbra y trabajamos en persona en la región Centro y en remoto para el resto del país. El primer paso es un diagnóstico gratuito de 30 minutos, por llamada o en persona."
        ],
        "cta": "Habla con nosotros por WhatsApp +351 919 642 845 o en mauro@matecno.pt."
      }
    },
    "contact": {
      "label": "Contacto",
      "aspects": [
        {
          "label": "Directo",
          "title": "Línea directa",
          "desc": "Un contacto, una persona: hablas con quien construye.",
          "items": [
            {"k": "Cómo llegas", "v": "WhatsApp +351 919 642 845 o mauro@matecno.pt."},
            {"k": "Dónde", "v": "Coimbra, y remoto para todo Portugal."},
            {"k": "Ventaja", "v": "Sin formularios que nadie lee. El mensaje llega a quien escribe el código."}
          ]
        },
        {
          "label": "Respuesta",
          "title": "Respuesta de quien construye",
          "desc": "Email y WhatsApp respondidos por quien escribe el código, en portugués o inglés.",
          "items": [
            {"k": "Cómo respondemos", "v": "Por email o WhatsApp, en horario laboral, en portugués o inglés."},
            {"k": "Quién responde", "v": "Quien escribe el código, en una sola conversación del primer contacto al deploy."},
            {"k": "Ventaja", "v": "Nunca repites el contexto a una segunda persona."}
          ]
        },
        {
          "label": "Paso",
          "title": "Diagnóstico gratuito de 30 min",
          "desc": "Treinta minutos sobre tu proceso y sistemas, sin compromiso.",
          "items": [
            {"k": "Qué hacemos", "v": "Vemos el proceso y los sistemas actuales, por llamada o en persona."},
            {"k": "Con qué sales", "v": "Alcance y presupuesto, o un no claro."},
            {"k": "Ventaja", "v": "Decides con un plan concreto en la mano, no con una promesa."}
          ]
        }
      ],
      "page": {
        "title": "Contacto — Diagnóstico Gratuito | Matecno Coimbra",
        "description": "Habla directo con quien construye tu software. Diagnóstico gratuito de 30 minutos, por WhatsApp o email.",
        "h1": "Hablemos de tu proyecto",
        "paras": [
          "Hablas directamente con quien construye, sin gestores de cuenta de por medio.",
          "La primera conversación son 30 minutos, gratuitos. Repasamos el proceso o la idea y los sistemas que ya usas. Al final tienes un presupuesto con alcance definido, o un no con explicación.",
          "Escribe por WhatsApp (+351 919 642 845) o email (mauro@matecno.pt). Respondemos en español o inglés."
        ],
        "cta": "WhatsApp +351 919 642 845 · mauro@matecno.pt · ES o EN"
      }
    }
  }
};
