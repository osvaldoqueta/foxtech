import { Dictionary } from '../types';

export const es: Dictionary = {
  metadata: {
    title: 'FOXTECH | Innovación. Estrategia. Resultados. — Business Intelligence, Software e IA',
    description: 'FOXTECH: Empresa de tecnología especializada en Business Intelligence, Ingeniería de Software, Inteligencia Artificial, Gobernanza de TI, Cloud Computing y Automatización Empresarial.',
  },
  navbar: {
    home: 'Home',
    services: 'Soluciones y Servicios',
    portfolio: 'Portafolio',
    contact: 'Direct Contact',
    more: '+ MORE',
    powerbi: 'Power BI Live',
    pricing: 'Planes y Precios',
    timeline: 'Trayectoria',
    availableBadge: 'Soporte 24/7 • Operación Global',
    store: 'FoxStoreBR',
    libras: 'Fox Libras',
    startProject: 'Comience Ahora',
    operationalStatus: 'Estado FOXTECH:',
    statusOnline: 'Online / 24/7',
    storeOfficial: 'FoxStoreBR',
    talkWhatsApp: 'Contáctenos en WhatsApp',
    switchLanguage: 'Seleccionar Idioma',
    phoneLabel: '+55 (63) 9 9258-1001',
    directCall: 'Contacto Directo',
  },
  hero: {
    tagline: 'Transforme sus ideas en realidad.',
    tagSub: 'INNOVACIÓN. ESTRATEGIA. RESULTADOS.',
    headlinePre: 'Soluciones Inteligentes para un futuro más ',
    headlineGradient: 'eficiente.',
    headlinePost: '',
    description: 'Desarrollamos soluciones digitales, con inteligencia artificial y tecnología de punta, para impulsar su negocio.',
    btnPrimary: 'Comience Ahora',
    btnSecondary: 'Conozca Nuestros Servicios',
    stackTitle: 'Especialidades Core:',
    helloWatermark: 'FOXTECH',
    followMe: 'Conéctese :',
    certifiedBadge: 'Certified BI & AI',
    certifiedSubtitle: 'Enterprise Architect',
    experienceBadgeYears: '16+',
    experienceBadgeLabel: 'Años de Experiencia',
    availableContracts: 'Soporte 24/7 • Siempre a su lado',
  },
  statsBanner: {
    yearsVal: '16+',
    yearsLabel: 'Años de Experiencia',
    clientsVal: '100%',
    clientsLabel: 'Compromiso con la Calidad',
    projectsVal: '+500',
    projectsLabel: 'Proyectos Entregados',
    ratingVal: 'Soporte 24/7',
    ratingLabel: 'Siempre a su lado',
  },
  about: {
    badge: 'SOBRE FOXTECH ✱ LIDERAZGO TÉCNICO',
    headingPre: 'Excelencia Tecnológica con Más de 16+ Años de ',
    headingHighlight: 'Resultados',
    downloadCv: 'Perfil Institucional',
    bioParagraph: 'Dirigida por Osvaldo Queta Fernando — Arquitecto de Software Senior, Especialista en Business Intelligence e Ingeniero de IA con más de 16 años de trayectoria — FOXTECH une ingeniería de datos avanzada, ecosistemas de Inteligencia Artificial, gobernanza corporativa (ITIL v4 / COBIT / ISO 27001) y arquitectura Cloud de alta disponibilidad.',
    skillsTitle: 'Dominio Tecnológico y Capacidades',
    skills: [
      { name: 'Business Intelligence, Power BI, DAX & Data Engineering', percent: 98 },
      { name: 'Software Engineering, Next.js & Ecosistemas de IA (RAG)', percent: 95 },
      { name: 'Gobernanza de TI, ITIL v4, COBIT & ISO 27001', percent: 94 },
      { name: 'Cloud Computing (AWS, Azure, GCP) & Automatización Empresarial', percent: 92 },
    ],
  },
  works: {
    badge: 'PORTAFOLIO FOXTECH ✱ CASOS REALES',
    headingPre: 'Proyectos Entregados y ',
    headingHighlight: 'Soluciones en Producción',
    description: 'Ecosistemas corporativos, plataformas de datos y soluciones digitales de alto rendimiento desarrolladas por FOXTECH.',
    portfolioBadge: 'FOXTECH',
    exploreBtn: 'Explorar Proyecto',
    items: [
      {
        id: 'executive-bi',
        title: 'Executive C-Level Financial & Risk BI',
        category: 'Business Intelligence & Data Engineering',
        description: 'Suite analítica corporativa en Power BI con P&L dinámico, telemetría de transacciones en tiempo real y modelado dimensional.',
        imageBg: 'from-orange-950/40 to-[#11141F]',
        link: '#powerbi',
        tags: ['Power BI', 'DAX', 'SQL Server', 'Snowflake'],
      },
      {
        id: 'ai-copilot',
        title: 'Enterprise AI Agents & RAG Ecosystem',
        category: 'Software Engineering & AI',
        description: 'Agentes autónomos de IA generativa, bases vectoriales y automatización inteligente de procesos empresariales.',
        imageBg: 'from-amber-950/40 to-[#11141F]',
        link: '#servicos',
        tags: ['Next.js', 'React', 'RAG & Vector DB', 'AI Agents'],
      },
      {
        id: 'itil-infra',
        title: 'Corporate Governance & Zero-Trust Architecture',
        category: 'Strategic IT Consulting & Governance',
        description: 'Auditoría tecnológica, cumplimiento ISO 27001, gobernanza ITIL v4 / COBIT y arquitectura corporativa segura.',
        imageBg: 'from-orange-900/30 to-[#11141F]',
        link: '#servicos',
        tags: ['ITIL v4', 'COBIT', 'ISO 27001', 'Cybersecurity'],
      },
      {
        id: 'supply-chain',
        title: 'Multi-Cloud DevOps & Workflow Automation',
        category: 'Cloud Solutions & Automation',
        description: 'Arquitectura escalable en AWS, Azure y Google Cloud con pipelines CI/CD y flujos empresariales inteligentes.',
        imageBg: 'from-red-950/35 to-[#11141F]',
        link: '#servicos',
        tags: ['AWS / Azure / GCP', 'DevOps', 'API Integrations', 'Automation'],
      },
      {
        id: 'foxstorebr',
        title: 'FoxStoreBR E-commerce Ecosystem',
        category: 'Digital Commerce & Cloud',
        description: 'Plataforma integral de comercio electrónico de alta conversión, pasarelas de pago e inteligencia comercial.',
        imageBg: 'from-orange-950/40 to-[#11141F]',
        link: 'https://foxstorebr.com',
        tags: ['Next.js', 'E-commerce', 'Payment Gateway', 'Analytics'],
      },
      {
        id: 'libras',
        title: 'Fox Libras Accesibilidad Digital Hub',
        category: 'Assistive Tech & WCAG Inclusion',
        description: 'Ecosistema enfocado en la inclusión corporativa, accesibilidad WCAG 2.1 AA y traducción bilingüe.',
        imageBg: 'from-slate-900 to-[#11141F]',
        link: 'https://libras.foxstorebr.com',
        tags: ['Lengua de Señas', 'WCAG 2.1 AA', 'Inclusión', 'Educación'],
      },
    ],
  },
  ctaBanner: {
    badge: 'INNOVACIÓN. ESTRATEGIA. RESULTADOS.',
    headingPre: '¿Listo para llevar su negocio al ',
    headingHighlight: 'siguiente nivel?',
    description: 'Hable con FOXTECH y descubra cómo podemos ayudar.',
    btnText: 'Contáctenos',
    phoneText: '+55 (63) 9 9258-1001',
    consultantRole: 'CEO & LEAD ARCHITECT • FOXTECH',
    ndaGuaranteed: 'NDA Corporativo Garantizado',
    customScope: 'Arquitectura a Medida',
    fastResponse: 'Soporte 24/7 Siempre a su lado',
  },
  kpis: {
    yearsVal: '16+',
    yearsUnit: 'Años',
    yearsLabel: 'Años de Experiencia',
    yearsDesc: 'Autoridad tecnológica y liderazgo senior',
    slaVal: '100%',
    slaUnit: 'Calidad',
    slaLabel: 'Compromiso con la Calidad',
    slaDesc: 'Gobernanza ITIL v4, COBIT e ISO 27001',
    dataVal: '+500',
    dataUnit: 'Proyectos',
    dataLabel: 'Proyectos Entregados',
    dataDesc: 'Soluciones corporativas de alto impacto',
    langVal: 'Soporte 24/7',
    langUnit: 'Global',
    langLabel: 'Siempre a su lado',
    langDesc: 'Atención en Portugués, Inglés y Español',
  },
  powerbi: {
    badge: 'FOXTECH DATA INTELLIGENCE • LIVE STATION',
    titlePre: 'Dashboards Corporativos e ',
    titleGradient: 'Ingeniería de Datos',
    description: 'Explore nuestra estación interactiva de Business Intelligence: modelado dimensional, pipelines ETL automatizados, SQL Server, PostgreSQL, Snowflake y cálculos DAX avanzados.',
    terminalVersion: ':: FOXTECH BI Engine v2026',
    viewDax: 'Ver DAX / SQL',
    refreshTooltip: 'Recargar telemetría del panel',
    fullscreenTooltip: 'Alternar pantalla completa',
    realtimeUpdate: 'Telemetría en Tiempo Real',
    btnCustomDashboard: 'Solicitar Solución de BI',
    btnInspectDax: 'Inspeccionar Medidas DAX',
    btnHireDashboard: 'Solicitar Proyecto para su Empresa',
    daxTitle: 'Modelado Dimensional e Ingeniería DAX Corporativa',
    daxModel: 'Star Schema / SQL / Snowflake / DAX',
    canvasTitle: 'Visualización Interactiva Power BI Service',
    canvasDesc: 'Entorno demostrativo con aislamiento seguro, conectividad DirectQuery y gobernanza corporativa de datos.',
    sandboxId: 'FOXTECH-BI-STATION-2026',
    latency: 'LATENCIA: 14ms • CLOUD DATA WAREHOUSE',
    databaseQuestionPre: '¿Necesita integrar ',
    databaseQuestionBold: 'SQL Server, PostgreSQL, Snowflake o APIs Corporativas',
    databaseQuestionLink: 'Hable con nuestros ingenieros de datos',
    tabs: {
      financial: {
        tabName: 'Financiero y DRE',
        category: 'Corporate Finance BI',
        title: 'Cockpit Financiero Ejecutivo y DRE Dinámico',
        subtitle: 'Visión consolidada de Margen EBITDA, Real vs. Presupuestado (Budget vs. Actual) y Flujo de Caja.',
        kpis: [
          { label: 'EBITDA Consolidado', value: '$ 2.45M', change: '+18.4% YoY' },
          { label: 'Margen Neto', value: '24.8%', change: '+3.2 p.p.' },
          { label: 'Budget vs. Actual', value: '104.2%', change: '+4.2% meta' },
          { label: 'Ciclo Financiero', value: '42 días', change: '-5 días' },
        ],
        insights: [
          'Modelado dimensional Star Schema con tablas de hechos particionadas.',
          'Métricas dinámicas de Time Intelligence (YTD, MTD, YoY y QoQ).',
          'Seguridad a nivel de fila (RLS) granular por dirección ejecutiva.'
        ]
      },
      sales: {
        tabName: 'Comercial y Analytics',
        category: 'Commercial Data Analytics',
        title: 'Rendimiento Comercial, LTV/CAC y Embudo Omnicanal',
        subtitle: 'Monitoreo de ingresos recurrentes, Ticket Promedio, Curva ABC de productos y retención por cohorte.',
        kpis: [
          { label: 'GMV Mensual', value: '$ 890k', change: '+27.6% MoM' },
          { label: 'CAC Blended', value: '$ 48.20', change: '-12.3%' },
          { label: 'Ratio LTV / CAC', value: '4.8x', change: 'Alta Eficiencia' },
          { label: 'Tasa de Conversión', value: '3.42%', change: '+0.8% p.p.' },
        ],
        insights: [
          'Pipelines ETL automatizados integrando CRM, ERP y pasarelas de pago.',
          'Segmentación inteligente de clientes mediante matriz RFM.',
          'Proyección de demanda y facturación con modelos analíticos.'
        ]
      },
      supply: {
        tabName: 'Operaciones y Supply Chain',
        category: 'Operations & Logistics BI',
        title: 'Control de Inventario, Rotación y SLA Logístico',
        subtitle: 'Auditoría integral de proveedores, prevención de quiebres de stock y eficiencia operativa.',
        kpis: [
          { label: 'Exactitud de Datos', value: '99.4%', change: '+1.1%' },
          { label: 'Tasa de Ruptura', value: '1.2%', change: '-0.9%' },
          { label: 'Rotación de Stock', value: '6.8x/año', change: '+0.7x' },
          { label: 'Lead Time Promedio', value: '4.2 días', change: '-1.5 días' },
        ],
        insights: [
          'Alertas automatizadas de reposición predictiva antes del punto crítico.',
          'Integración directa con SQL Server, PostgreSQL y Snowflake.',
          'Visualización responsiva para decisiones ejecutivas en tiempo real.'
        ]
      }
    }
  },
  services: {
    badge: 'Nuestras Soluciones',
    titlePre: '¿Qué podemos hacer por usted?',
    titleGradient: '',
    description: 'Soluciones completas en tecnología, datos e inteligencia artificial.',
    items: [
      {
        id: 'bi-data',
        number: '01',
        title: 'Business Intelligence & Data Engineering',
        badge: 'DATA & ANALYTICS',
        description: 'Transforme datos en decisiones estratégicas.',
        features: [
          'Power BI y dashboards corporativos.',
          'Ingeniería de datos.',
          'Modelado dimensional.',
          'ETL y automatización.',
          'SQL Server, PostgreSQL y Snowflake.',
          'Data Analytics.'
        ],
        ctaText: 'Saber Más'
      },
      {
        id: 'software-ai',
        number: '02',
        title: 'Software Engineering & AI Ecosystems',
        badge: 'SOFTWARE & AI',
        description: 'Desarrolle soluciones escalables con inteligencia artificial de punta.',
        features: [
          'Desarrollo de aplicaciones web.',
          'Next.js y React.',
          'Integraciones con APIs.',
          'Agentes autónomos de IA.',
          'RAG y bases vectoriales.',
          'Automatización de procesos.'
        ],
        ctaText: 'Saber Más'
      },
      {
        id: 'it-consulting',
        number: '03',
        title: 'Strategic IT Consulting & Governance',
        badge: 'GOVERNANCE & SECURITY',
        description: 'Estrategia y gobernanza para el crecimiento sostenible.',
        features: [
          'ITIL v4.',
          'COBIT.',
          'ISO 27001.',
          'Auditoría tecnológica.',
          'Arquitectura corporativa.',
          'Gobernanza y seguridad.'
        ],
        ctaText: 'Saber Más'
      },
      {
        id: 'cloud-automation',
        number: '04',
        title: 'Cloud Solutions & Automation',
        badge: 'CLOUD & DEVOPS',
        description: 'Automatice procesos y escale su operación.',
        features: [
          'Arquitectura Cloud.',
          'AWS, Azure y Google Cloud.',
          'DevOps.',
          'Integraciones.',
          'Automatización empresarial.',
          'Workflows inteligentes.'
        ],
        ctaText: 'Saber Más'
      }
    ]
  },
  pricing: {
    badge: 'PLANES E INVERSIÓN • FOXTECH',
    titlePre: 'Modelos de Contratación ',
    titleGradient: 'Corporativa',
    description: 'Formatos flexibles y escalables con previsibilidad de entrega, arquitectura de estándar internacional y enfoque en resultados.',
    popularBadge: 'MÁS ELEGIDO',
    priceModel: 'Modalidad',
    scopeLabel: 'Entregables Incluidos:',
    idealLabel: 'Indicado para:',
    customScopeTitle: '¿Necesita un proyecto a medida para su organización?',
    customScopeDesc: 'Nuestro equipo diseña arquitecturas personalizadas combinando BI, Ingeniería de Software, IA, Gobernanza y Cloud.',
    customScopeBtn: 'Hable con Nosotros en WhatsApp',
    plans: [
      {
        id: 'start',
        name: 'BI & Analytics Sprint',
        tagline: 'Dashboards Ejecutivos y ETL',
        priceNote: 'Alcance Ágil',
        deliveryTime: 'Entrega en 5 a 10 días hábiles',
        features: [
          'Dashboards corporativos en Power BI',
          'Conexión con SQL Server, PostgreSQL o ERP',
          'Modelado dimensional y medidas DAX',
          'Automatización de actualización y ETL',
          'Diseño ejecutivo desktop y móvil',
          'Documentación técnica y capacitación'
        ],
        idealFor: 'Empresas que desean transformar datos en decisiones estratégicas con rapidez y precisión.',
        ctaText: 'Solicitar Propuesta',
        whatsappMessage: '¡Hola! Me gustaría solicitar una propuesta de FOXTECH para el plan BI & Analytics Sprint.'
      },
      {
        id: 'enterprise',
        name: 'Enterprise Data & AI',
        tagline: 'Ingeniería de Datos, BI e Inteligencia Artificial',
        priceNote: 'Más Completo',
        deliveryTime: 'Entrega en 15 a 25 días hábiles',
        features: [
          'Ingeniería de Datos completa (SQL, PostgreSQL, Snowflake)',
          'Suite ejecutiva Power BI con P&L Dinámico y RLS',
          'Agentes autónomos de IA y arquitecturas RAG',
          'Integraciones avanzadas vía APIs y webhooks',
          'Gobernanza de datos y auditoría de seguridad',
          'Acompañamiento dedicado y soporte 24/7'
        ],
        idealFor: 'Organizaciones que buscan transformación digital completa con datos e inteligencia artificial de punta.',
        ctaText: 'Solicitar Propuesta Enterprise',
        whatsappMessage: '¡Hola! Quisiera agendar una reunión con FOXTECH sobre el plan Enterprise Data & AI.'
      },
      {
        id: 'mvp-systems',
        name: 'Software & Cloud Solutions',
        tagline: 'Aplicaciones Web, Cloud y Automatización',
        priceNote: 'Proyecto a Medida',
        deliveryTime: 'Sprints de 3 a 6 semanas',
        features: [
          'Desarrollo de aplicaciones web en Next.js y React',
          'Arquitectura Cloud en AWS, Azure y Google Cloud',
          'Pipelines DevOps, CI/CD y microservicios',
          'Workflows inteligentes y automatización empresarial',
          'Seguridad corporativa alineada con ISO 27001',
          'Alto rendimiento y escalabilidad global'
        ],
        idealFor: 'Empresas que necesitan software robusto, nube escalable y automatización integral.',
        ctaText: 'Iniciar Proyecto de Software',
        whatsappMessage: '¡Hola! Quiero conversar con FOXTECH sobre desarrollo de Software, Cloud y Automatización.'
      },
      {
        id: 'squad-retainer',
        name: 'Governance & Squad 24/7',
        tagline: 'Consultoría Continua, ITIL v4 y COBIT',
        priceNote: 'Retainer Mensual',
        deliveryTime: 'Asignación Continua',
        features: [
          'Consultoría estratégica en ITIL v4, COBIT e ISO 27001',
          'Auditoría tecnológica y arquitectura corporativa',
          'Evolución continua de dashboards, sistemas e IA',
          'Monitoreo de infraestructura Cloud y DevOps',
          'Reuniones ejecutivas de estrategia e indicadores',
          'Soporte 24/7 prioritario siempre a su lado'
        ],
        idealFor: 'Corporaciones que exigen un socio tecnológico estratégico continuo con SLA de élite.',
        ctaText: 'Hablar con Consultor',
        whatsappMessage: '¡Hola! Tengo interés en el modelo Governance & Squad 24/7 de FOXTECH.'
      }
    ]
  },
  timeline: {
    badge: 'AUTORIDAD TECNOLÓGICA • +16 AÑOS DE SOLIDEZ',
    titlePre: 'Experiencia, Gobernanza y ',
    titleGradient: 'Liderazgo Técnico',
    description: 'Conozca la base técnica y ejecutiva de FOXTECH bajo la dirección de Osvaldo Queta Fernando, uniendo excelencia académica, certificaciones internacionales y más de 500 proyectos entregados.',
    careerTitle: 'Trayectoria y Liderazgo Ejecutivo',
    academicTitle: 'Formación y Certificaciones',
    techDomainTitle: 'Stack Tecnológico FOXTECH',
    locationCity: 'Juiz de Fora / MG — Brasil',
    locationSub: 'Operación Nacional e Internacional',
    timeZone: 'Soporte 24/7 (UTC-3)',
    milestones: [
      {
        period: '2024 - Presente',
        role: 'Founder, Principal Software Architect & Head of BI / AI',
        institution: 'FOXTECH — Innovación. Estrategia. Resultados.',
        badge: 'DIRECCIÓN EJECUTIVA',
        description: 'Liderazgo de proyectos corporativos en Business Intelligence (Power BI, SQL Server, PostgreSQL, Snowflake), Ingeniería de Software (Next.js, React), Ecosistemas de IA (Agentes Autónomos, RAG) y Arquitectura Cloud.'
      },
      {
        period: '2020 - 2024',
        role: 'Consultor Senior de TI, Gobernanza & Data Engineering',
        institution: 'Consultoría Estratégica Corporativa',
        badge: 'GOBERNANZA Y DATOS',
        description: 'Implantación de modelos de gobernanza ITIL v4, COBIT e ISO 27001, auditoría tecnológica y construcción de data warehouses y cockpits ejecutivos.'
      },
      {
        period: '2016 - 2020',
        role: 'Docente Universitario e Investigador en Tecnología',
        institution: 'Red Federal (IFTO) y Universidades (UFJF / UniAcademia)',
        badge: 'ACADEMIA E INVESTIGACIÓN',
        description: 'Formación de profesionales de tecnología e investigación aplicada en ciencia de datos, ingeniería de sistemas y accesibilidad digital.'
      },
      {
        period: '2010 - 2016',
        role: 'Ingeniero de Sistemas y Especialista en Infraestructura',
        institution: 'Base Consolidada (+16 Años de Experiencia)',
        badge: 'INGENIERÍA CORE',
        description: 'Desarrollo de sistemas corporativos, administración de bases de datos relacionales, redes seguras e infraestructura crítica.'
      }
    ],
    credentials: [
      { title: 'Maestría e Investigación Aplicada', issuer: 'Metodologías, Tecnología e Innovación' },
      { title: 'MBA en Gestión de TI Corporativa', issuer: 'ITIL v4, COBIT, ISO 27001 y Gobernanza' },
      { title: 'Posgrado en Ciencia de Datos y Big Data', issuer: 'Data Engineering, Analytics e IA' },
      { title: 'Grado en Análisis y Desarrollo de Sistemas', issuer: 'Ingeniería de Software y Arquitectura' },
      { title: 'Grado en Letras (Portugués / Inglés)', issuer: 'Comunicación Ejecutiva Internacional' },
      { title: 'Especialización en Accesibilidad y Lengua de Señas', issuer: 'Inclusión Corporativa y WCAG' },
    ]
  },
  footer: {
    badge: 'DIRECT CONTACT • FOXTECH',
    titlePre: 'Inicie su Proyecto con ',
    titleGradient: 'FOXTECH',
    titlePost: '',
    description: 'Envíe los detalles de su requerimiento directamente a nuestro equipo de arquitectura y reciba un diagnóstico estratégico.',
    form: {
      nameLabel: 'Su Nombre',
      namePlaceholder: 'Ej: Carlos Silva',
      companyLabel: 'Empresa / Organización',
      companyPlaceholder: 'Ej: Grupo Nexus S/A',
      scopeLabel: 'Solución Deseada',
      budgetLabel: 'Inversión Estimada',
      detailsLabel: 'Detalles del Proyecto',
      detailsPlaceholder: 'Describa brevemente sus objetivos en BI, Software, IA, Gobernanza o Cloud...',
      privacyNote: '🔒 Sus datos están protegidos. Atención inmediata vía canal oficial FOXTECH.',
      submitBtn: 'Contáctenos Ahora',
      scopeOptions: [
        'Business Intelligence & Data Engineering',
        'Software Engineering & AI Ecosystems',
        'Strategic IT Consulting & Governance',
        'Cloud Solutions & Automation'
      ],
      budgetOptions: [
        'Proyecto Puntual / Sprint Ágil',
        'Proyecto Corporativo de Mediano Porte',
        'Arquitectura Enterprise / Escala Global',
        'Consultoría Continua y Soporte 24/7'
      ]
    },
    identityBio: 'Empresa de tecnología especializada en Business Intelligence, Ingeniería de Software, Inteligencia Artificial, Gobernanza de TI, Cloud Computing y Automatización Empresarial.',
    directChannels: 'Contacto',
    ecosystemTitle: 'Navegación',
    guaranteesTitle: 'Redes Sociales',
    guaranteesList: [
      'Compromiso 100% con Calidad y Seguridad ISO 27001.',
      'Más de 500 proyectos entregados con excelencia.',
      'Soporte 24/7 — Siempre a su lado.'
    ],
    rights: '© 2026 FOXTECH. Todos los derechos reservados.',
    coreWebVitals: 'Política de Privacidad • Términos de Uso'
  }
};
