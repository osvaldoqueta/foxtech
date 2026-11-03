export type Language = 'pt' | 'en' | 'es';

export interface LanguageOption {
  code: Language;
  label: string;
  shortLabel: string;
  flag: string; // Emoji flag or SVG
  country: string;
}

export interface Dictionary {
  metadata: {
    title: string;
    description: string;
  };
  navbar: {
    home: string;
    services: string;
    portfolio: string;
    contact: string;
    more: string;
    powerbi: string;
    pricing: string;
    timeline: string;
    availableBadge: string;
    store: string;
    libras: string;
    startProject: string;
    operationalStatus: string;
    statusOnline: string;
    storeOfficial: string;
    talkWhatsApp: string;
    switchLanguage: string;
    phoneLabel: string;
    directCall: string;
  };
  hero: {
    tagline: string;
    tagSub: string;
    headlinePre: string;
    headlineGradient: string;
    headlinePost: string;
    description: string;
    btnPrimary: string;
    btnSecondary: string;
    stackTitle: string;
    helloWatermark: string;
    followMe: string;
    certifiedBadge: string;
    certifiedSubtitle: string;
    experienceBadgeYears: string;
    experienceBadgeLabel: string;
    availableContracts: string;
  };
  statsBanner: {
    projectsVal: string;
    projectsLabel: string;
    clientsVal: string;
    clientsLabel: string;
    yearsVal: string;
    yearsLabel: string;
    ratingVal: string;
    ratingLabel: string;
  };
  about: {
    badge: string;
    headingPre: string;
    headingHighlight: string;
    downloadCv: string;
    bioParagraph: string;
    skillsTitle: string;
    skills: { name: string; percent: number }[];
  };
  works: {
    badge: string;
    headingPre: string;
    headingHighlight: string;
    description: string;
    portfolioBadge: string;
    exploreBtn: string;
    items: {
      id: string;
      title: string;
      category: string;
      description: string;
      imageBg: string;
      link?: string;
      tags: string[];
    }[];
  };
  ctaBanner: {
    badge: string;
    headingPre: string;
    headingHighlight: string;
    description: string;
    btnText: string;
    phoneText: string;
    consultantRole: string;
    ndaGuaranteed: string;
    customScope: string;
    fastResponse: string;
  };
  kpis: {
    yearsVal: string;
    yearsUnit: string;
    yearsLabel: string;
    yearsDesc: string;
    slaVal: string;
    slaUnit: string;
    slaLabel: string;
    slaDesc: string;
    dataVal: string;
    dataUnit: string;
    dataLabel: string;
    dataDesc: string;
    langVal: string;
    langUnit: string;
    langLabel: string;
    langDesc: string;
  };
  powerbi: {
    badge: string;
    titlePre: string;
    titleGradient: string;
    description: string;
    terminalVersion: string;
    viewDax: string;
    refreshTooltip: string;
    fullscreenTooltip: string;
    realtimeUpdate: string;
    btnCustomDashboard: string;
    btnInspectDax: string;
    btnHireDashboard: string;
    daxTitle: string;
    daxModel: string;
    canvasTitle: string;
    canvasDesc: string;
    sandboxId: string;
    latency: string;
    databaseQuestionPre: string;
    databaseQuestionBold: string;
    databaseQuestionLink: string;
    tabs: {
      financial: {
        tabName: string;
        category: string;
        title: string;
        subtitle: string;
        kpis: { label: string; value: string; change: string }[];
        insights: string[];
      };
      sales: {
        tabName: string;
        category: string;
        title: string;
        subtitle: string;
        kpis: { label: string; value: string; change: string }[];
        insights: string[];
      };
      supply: {
        tabName: string;
        category: string;
        title: string;
        subtitle: string;
        kpis: { label: string; value: string; change: string }[];
        insights: string[];
      };
    };
  };
  services: {
    badge: string;
    titlePre: string;
    titleGradient: string;
    description: string;
    items: {
      id: string;
      number: string;
      title: string;
      badge: string;
      description: string;
      features: string[];
      ctaText: string;
    }[];
  };
  pricing: {
    badge: string;
    titlePre: string;
    titleGradient: string;
    description: string;
    popularBadge: string;
    priceModel: string;
    scopeLabel: string;
    idealLabel: string;
    customScopeTitle: string;
    customScopeDesc: string;
    customScopeBtn: string;
    plans: {
      id: string;
      name: string;
      tagline: string;
      priceNote: string;
      deliveryTime: string;
      features: string[];
      idealFor: string;
      ctaText: string;
      whatsappMessage: string;
    }[];
  };
  timeline: {
    badge: string;
    titlePre: string;
    titleGradient: string;
    description: string;
    careerTitle: string;
    academicTitle: string;
    techDomainTitle: string;
    locationCity: string;
    locationSub: string;
    timeZone: string;
    milestones: {
      period: string;
      role: string;
      institution: string;
      badge: string;
      description: string;
    }[];
    credentials: {
      title: string;
      issuer: string;
    }[];
  };
  footer: {
    badge: string;
    titlePre: string;
    titleGradient: string;
    titlePost: string;
    description: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      scopeLabel: string;
      budgetLabel: string;
      detailsLabel: string;
      detailsPlaceholder: string;
      privacyNote: string;
      submitBtn: string;
      scopeOptions: string[];
      budgetOptions: string[];
    };
    identityBio: string;
    directChannels: string;
    ecosystemTitle: string;
    guaranteesTitle: string;
    guaranteesList: string[];
    rights: string;
    coreWebVitals: string;
  };
}
