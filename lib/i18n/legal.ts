import { Language } from './types';

export interface LegalSection {
  id: string;
  number: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LegalDocumentData {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  lastUpdatedLabel: string;
  lastUpdatedDate: string;
  complianceBadges: string[];
  backToHome: string;
  switchDocLabel: string;
  tocTitle: string;
  dpoCardTitle: string;
  dpoRole: string;
  dpoDescription: string;
  contactCta: string;
  sections: LegalSection[];
}

export interface LegalDictionary {
  privacy: LegalDocumentData;
  terms: LegalDocumentData;
}

export const legalDictionaries: Record<Language, LegalDictionary> = {
  pt: {
    privacy: {
      badge: 'GOVERNANÇA & PROTEÇÃO DE DADOS • LGPD / GDPR / ISO 27001',
      title: 'Política de ',
      titleHighlight: 'Privacidade',
      subtitle:
        'Transparência, segurança da informação e conformidade rigorosa no tratamento de dados em todo o ecossistema digital FOXTECH.',
      lastUpdatedLabel: 'Última atualização:',
      lastUpdatedDate: '03 de Novembro de 2026',
      complianceBadges: [
        'LGPD (Lei nº 13.709/2018)',
        'GDPR (EU 2016/679)',
        'ISO/IEC 27001',
        'Zero-Trust Architecture',
      ],
      backToHome: 'Voltar para o Início',
      switchDocLabel: 'Ver Termos de Uso',
      tocTitle: 'Índice do Documento',
      dpoCardTitle: 'Encarregado de Dados (DPO) & Governança',
      dpoRole: 'Osvaldo Queta Fernando — CEO & Lead Architect',
      dpoDescription:
        'Para exercer seus direitos como titular de dados, solicitar esclarecimentos sobre segurança da informação ou firmar Acordos de Confidencialidade (NDA), entre em contato direto pelos canais oficiais.',
      contactCta: 'Falar com o Encarregado (DPO)',
      sections: [
        {
          id: 'controlador-escopo',
          number: '01',
          title: 'Controlador de Dados e Escopo Corporativo',
          paragraphs: [
            'A FOXTECH ("nós", "nosso" ou "Empresa"), sob a liderança técnica e direção executiva de Osvaldo Queta Fernando, atua como Controladora dos dados pessoais eventualmente coletados ou processados através do portal institucional https://portfolio.foxstorebr.com e de suas plataformas integradas (incluindo https://foxstorebr.com e https://libras.foxstorebr.com).',
            'Esta Política de Privacidade foi elaborada em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais do Brasil (LGPD — Lei nº 13.709/2018), o Regulamento Geral sobre a Proteção de Dados da União Europeia (GDPR — Regulamento UE 2016/679) e os padrões internacionais de segurança da informação ISO/IEC 27001 e governança COBIT / ITIL v4.',
          ],
        },
        {
          id: 'dados-coletados',
          number: '02',
          title: 'Dados Coletados e Finalidade do Tratamento',
          paragraphs: [
            'Nosso website institucional foi projetado sob o princípio de Privacidade desde a Concepção (Privacy by Design), coletando apenas o mínimo estritamente necessário para viabilizar o atendimento comercial e a experiência técnica do usuário:',
          ],
          bullets: [
            'Formulário de Contato Direto (Direct Contact): Quando você preenche voluntariamente os campos "Seu Nome", "Empresa / Organização", "Solução Desejada", "Previsão de Investimento" e "Detalhes do Projeto", esses dados são estruturados localmente no seu navegador para iniciar um atendimento direto via API oficial do WhatsApp Business (+55 63 99258-1001). Não armazenamos essas informações em bancos de dados públicos sem o seu consentimento expresso.',
            'Preferências de Internacionalização (i18n): Armazenamos localmente no navegador a chave "fox_portfolio_language" (pt, en ou es) para preservar o idioma escolhido entre sessões.',
            'Telemetria Técnica e Segurança: Dados técnicos estritamente anonimizados (como endereço IP mascarado em logs de borda CDN, tipo de navegador, métricas Core Web Vitals e prevenção contra ataques DDoS) podem ser processados pela infraestrutura de hospedagem para garantir disponibilidade de 99,9%.',
          ],
        },
        {
          id: 'powerbi-sandbox',
          number: '03',
          title: 'Estação Interativa Microsoft Power BI e Ambientes Demonstrativos',
          paragraphs: [
            'A seção "FOXTECH Data Intelligence • Live Station" apresenta dashboards interativos, métricas DAX e modelos dimensionais Star Schema voltados exclusivamente à demonstração de capacidade técnica e arquitetural.',
            'Todos os dados exibidos nos painéis demonstrativos públicos são anonimizados, sintéticos ou agregados para fins de portfólio executivo. Em projetos contratados por clientes corporativos, todas as conexões (SQL Server, PostgreSQL, Snowflake, ERPs e APIs) operam em ambientes isolados com Row-Level Security (RLS), criptografia em trânsito (TLS 1.3) e em repouso (AES-256), sob Acordo de Confidencialidade (NDA).',
          ],
        },
        {
          id: 'cookies-armazenamento',
          number: '04',
          title: 'Cookies, LocalStorage e Tecnologias Semelhantes',
          paragraphs: [
            'Não utilizamos cookies de rastreamento invasivos, redes de anúncios de terceiros ou venda de dados comportamentais. O portal utiliza exclusivamente:',
          ],
          bullets: [
            'Armazenamento Essencial (LocalStorage): Utilizado apenas para guardar a preferência de idioma (Português, Inglês ou Espanhol) selecionada pelo visitante.',
            'Cookies Estritamente Necessários de Segurança: Gerados pela rede de entrega de conteúdo (CDN / Edge Network) para proteção contra bots maliciosos e balanceamento de carga.',
          ],
        },
        {
          id: 'compartilhamento-terceiros',
          number: '05',
          title: 'Compartilhamento de Dados e Serviços Integrados',
          paragraphs: [
            'A FOXTECH jamais comercializa, aluga ou cede dados pessoais de visitantes ou clientes a terceiros. A interação com serviços externos ocorre apenas mediante ação direta do usuário:',
          ],
          bullets: [
            'WhatsApp Business (Meta Platforms, Inc.): Ao clicar nos botões de contato direto ou enviar o formulário de diagnóstico, você é redirecionado ao aplicativo oficial do WhatsApp para comunicação criptografada de ponta a ponta com nossa equipe.',
            'Redes Profissionais e Repositórios: Links externos para LinkedIn (linkedin.com/in/osvaldo-queta-fernando), GitHub (github.com/osvaldoqueta), Instagram (instagram.com/foxtech.ia), FoxStoreBR (foxstorebr.com) e Fox Libras (libras.foxstorebr.com) possuem políticas próprias e seguras.',
          ],
        },
        {
          id: 'seguranca-governanca',
          number: '06',
          title: 'Segurança da Informação, ISO 27001 e Sigilo Corporativo (NDA)',
          paragraphs: [
            'Adotamos controles rigorosos baseados nas normas ISO/IEC 27001, COBIT e ITIL v4 para proteger informações técnicas, comerciais e estratégicas:',
          ],
          bullets: [
            'Comunicação integralmente criptografada via HTTPS / TLS 1.3 com cabeçalhos de segurança estritos (HSTS, Content-Security-Policy e X-Frame-Options).',
            'Assinatura de Acordo de Não Divulgação (NDA — Non-Disclosure Agreement) antes do início de qualquer auditoria de dados, consultoria de BI, engenharia de software ou treinamento de modelos de IA (RAG).',
            'Controle de acesso baseado no princípio do privilégio mínimo (Zero-Trust Architecture) e autenticação multifator (MFA) em todos os ambientes Cloud (AWS, Azure e Google Cloud).',
          ],
        },
        {
          id: 'direitos-titular',
          number: '07',
          title: 'Direitos dos Titulares de Dados (LGPD Art. 18 & GDPR)',
          paragraphs: [
            'Em conformidade com a legislação aplicável, você possui o direito de solicitar a qualquer momento e gratuitamente:',
          ],
          bullets: [
            'Confirmação da existência de tratamento e acesso aos seus dados pessoais eventualmente fornecidos em comunicações comerciais.',
            'Correção de dados incompletos, inexatos ou desatualizados.',
            'Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei.',
            'Revogação do consentimento e exclusão de registros de contato comercial de nossos canais de atendimento.',
          ],
        },
        {
          id: 'retencao-contato',
          number: '08',
          title: 'Retenção de Dados, Transferência Internacional e Contato',
          paragraphs: [
            'Dados fornecidos voluntariamente durante negociações comerciais ou execução de contratos são mantidos apenas pelo período necessário ao cumprimento das finalidades contratuais, obrigações legais ou auditorias técnicas.',
            'Como a FOXTECH atende clientes no Brasil e no exterior (América do Norte, Europa e América Latina), eventuais transferências internacionais de dados observam cláusulas-padrão de proteção e criptografia de nível empresarial.',
          ],
        },
      ],
    },
    terms: {
      badge: 'TERMOS LEGAIS & GOVERNANÇA CORPORATIVA • FOXTECH',
      title: 'Termos de ',
      titleHighlight: 'Uso',
      subtitle:
        'Condições gerais de utilização do portal institucional, demonstrações tecnológicas, propriedade intelectual e diretrizes de contratação da FOXTECH.',
      lastUpdatedLabel: 'Última atualização:',
      lastUpdatedDate: '03 de Novembro de 2026',
      complianceBadges: [
        'Marco Civil da Internet (Lei nº 12.965/2014)',
        'Propriedade Intelectual (Lei nº 9.610/1998)',
        'ITIL v4 & COBIT Governance',
        'SLA Corporativo 24/7',
      ],
      backToHome: 'Voltar para o Início',
      switchDocLabel: 'Ver Política de Privacidade',
      tocTitle: 'Índice dos Termos',
      dpoCardTitle: 'Departamento Jurídico & Arquitetura Corporativa',
      dpoRole: 'Osvaldo Queta Fernando — CEO & Lead Architect',
      dpoDescription:
        'Dúvidas sobre propostas técnicas, licenciamento de software, contratos Enterprise ou termos de nível de serviço (SLA)? Nossa equipe está disponível 24/7.',
      contactCta: 'Entrar em Contato Oficial',
      sections: [
        {
          id: 'aceitacao-visao-geral',
          number: '01',
          title: 'Aceitação dos Termos e Visão Geral do Ecossistema',
          paragraphs: [
            'Bem-vindo ao portal oficial da FOXTECH (https://portfolio.foxstorebr.com), liderada por Osvaldo Queta Fernando. Ao acessar, navegar ou utilizar qualquer recurso deste website — bem como suas integrações com https://foxstorebr.com e https://libras.foxstorebr.com — você declara ter lido, compreendido e concordado integralmente com estes Termos de Uso.',
            'Caso não concorde com qualquer disposição aqui estabelecida, recomendamos que interrompa imediatamente a utilização do portal.',
          ],
        },
        {
          id: 'escopo-servicos',
          number: '02',
          title: 'Escopo das Soluções e Serviços Apresentados',
          paragraphs: [
            'O website tem como objetivo apresentar o portfólio executivo, a arquitetura técnica e os modelos de contratação da FOXTECH em quatro pilares principais:',
          ],
          bullets: [
            '01. Business Intelligence & Data Engineering: Dashboards corporativos em Power BI, modelagem dimensional Star Schema, medidas DAX avançadas, pipelines ETL e integração com SQL Server, PostgreSQL e Snowflake.',
            '02. Software Engineering & AI Ecosystems: Desenvolvimento de aplicações web full-stack em Next.js e React, integrações de APIs, agentes autônomos de IA generativa e arquiteturas RAG com bancos vetoriais.',
            '03. Strategic IT Consulting & Governance: Consultoria executiva em ITIL v4, COBIT, adequação ISO/IEC 27001, auditoria tecnológica e arquitetura corporativa.',
            '04. Cloud Solutions & Automation: Arquitetura Multi-Cloud (AWS, Microsoft Azure e Google Cloud), esteiras DevOps CI/CD e automação inteligente de workflows empresariais.',
          ],
        },
        {
          id: 'propriedade-intelectual',
          number: '03',
          title: 'Propriedade Intelectual e Direitos Autorais',
          paragraphs: [
            'Todo o conteúdo presente neste portal — incluindo, sem limitação, o nome empresarial e marca "FOXTECH", o logotipo vetorial geométrico da raposa, o slogan "Inovação. Estratégia. Resultados.", códigos-fonte, componentes visuais, scripts DAX, arquiteturas de software, fotografias executivas, textos em Português, Inglês e Espanhol, gráficos e layout — constitui propriedade intelectual exclusiva da FOXTECH e de Osvaldo Queta Fernando, protegida pela Lei de Direitos Autorais (Lei nº 9.610/1998), Lei de Software (Lei nº 9.609/1998) e tratados internacionais.',
            'É expressamente proibida a reprodução, cópia, clonagem de interface, redistribuição, engenharia reversa ou utilização comercial de qualquer ativo visual ou código deste site sem autorização prévia e por escrito.',
          ],
        },
        {
          id: 'uso-estacao-powerbi',
          number: '04',
          title: 'Uso da Estação Interativa Power BI e Demonstrações Técnicas',
          paragraphs: [
            'Os painéis interativos, visualizações de código DAX/SQL e simuladores disponibilizados no portal destinam-se exclusivamente à avaliação técnica por potenciais clientes, recrutadores executivos e parceiros de negócios.',
          ],
          bullets: [
            'O usuário compromete-se a não realizar ataques de negação de serviço (DoS/DDoS), raspagem automatizada abusiva (scraping) ou tentativas de exploração de vulnerabilidades contra os containers e iframes do portal.',
            'As métricas e indicadores financeiros/operacionais exibidos na estação demonstrativa representam cenários de referência técnica e não configuram aconselhamento financeiro ou garantia automática de resultados idênticos sem diagnóstico específico.',
          ],
        },
        {
          id: 'contratacao-propostas-sla',
          number: '05',
          title: 'Contratação de Projetos, Propostas Comerciais e SLA',
          paragraphs: [
            'As informações de planos e modalidades exibidas na seção "Modelos de Contratação Corporativa" (BI & Analytics Sprint, Enterprise Data & AI, Software & Cloud Solutions e Governance & Squad 24/7) possuem caráter referencial e informativo.',
          ],
          bullets: [
            'A contratação efetiva de qualquer serviço ocorre mediante diagnóstico técnico, emissão de Proposta Comercial Formal e assinatura de Contrato de Prestação de Serviços acompanhado de Acordo de Confidencialidade (NDA).',
            'Prazos de entrega, escopo de entregáveis, cronogramas de sprints e Acordos de Nível de Serviço (SLA 24/7) passam a vigorar a partir da assinatura contratual entre as partes.',
            'A titularidade intelectual dos códigos, dashboards e modelos desenvolvidos sob encomenda para o cliente será transferida ou licenciada conforme estipulado no respectivo contrato comercial.',
          ],
        },
        {
          id: 'limitacao-responsabilidade',
          number: '06',
          title: 'Limitação de Responsabilidade e Disponibilidade',
          paragraphs: [
            'A FOXTECH emprega as melhores práticas de engenharia de software e hospedagem em borda (Edge CDN) para manter o portal disponível 24 horas por dia, 7 dias por semana, com máxima performance.',
            'Contudo, não nos responsabilizamos por eventuais indisponibilidades temporárias decorrentes de manutenções programadas, falhas em provedores globais de telecomunicações ou serviços de terceiros (como APIs do WhatsApp, GitHub, Instagram ou LinkedIn).',
          ],
        },
        {
          id: 'alteracoes-foro',
          number: '07',
          title: 'Atualizações dos Termos, Legislação Aplicável e Foro',
          paragraphs: [
            'A FOXTECH reserva-se o direito de atualizar ou aprimorar estes Termos de Uso e sua Política de Privacidade a qualquer momento para refletir evoluções tecnológicas ou alterações normativas, mantendo sempre visível a data da última atualização.',
            'Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de Juiz de Fora, Estado de Minas Gerais, Brasil, para dirimir quaisquer controvérsias oriundas deste instrumento, com renúncia expressa a qualquer outro, por mais privilegiado que seja.',
          ],
        },
      ],
    },
  },
  en: {
    privacy: {
      badge: 'DATA GOVERNANCE & PRIVACY • GDPR / LGPD / ISO 27001',
      title: 'Privacy ',
      titleHighlight: 'Policy',
      subtitle:
        'Transparency, information security, and strict regulatory compliance in data processing across the entire FOXTECH digital ecosystem.',
      lastUpdatedLabel: 'Last updated:',
      lastUpdatedDate: 'November 3, 2026',
      complianceBadges: [
        'GDPR (EU 2016/679)',
        'LGPD (Brazil Law 13.709/18)',
        'ISO/IEC 27001',
        'Zero-Trust Architecture',
      ],
      backToHome: 'Back to Home',
      switchDocLabel: 'View Terms of Use',
      tocTitle: 'Table of Contents',
      dpoCardTitle: 'Data Protection Officer (DPO) & Governance',
      dpoRole: 'Osvaldo Queta Fernando — CEO & Lead Architect',
      dpoDescription:
        'To exercise your data subject rights, request information security clarifications, or execute a Corporate Non-Disclosure Agreement (NDA), contact us directly via our official channels.',
      contactCta: 'Contact Data Protection Officer',
      sections: [
        {
          id: 'controller-scope',
          number: '01',
          title: 'Data Controller and Corporate Scope',
          paragraphs: [
            'FOXTECH ("we", "our", or "Company"), under the technical leadership and executive direction of Osvaldo Queta Fernando, acts as the Data Controller for personal data collected or processed through our corporate portal https://portfolio.foxstorebr.com and its integrated platforms (including https://foxstorebr.com and https://libras.foxstorebr.com).',
            'This Privacy Policy is designed in strict compliance with the European Union General Data Protection Regulation (GDPR — Regulation EU 2016/679), the Brazilian General Data Protection Law (LGPD — Law No. 13.709/2018), the California Consumer Privacy Act (CCPA), and ISO/IEC 27001 / COBIT / ITIL v4 governance standards.',
          ],
        },
        {
          id: 'collected-data',
          number: '02',
          title: 'Data We Collect and Purpose of Processing',
          paragraphs: [
            'Our corporate website is engineered under the principle of Privacy by Design, processing only the minimum information strictly necessary to enable business communication and technical navigation:',
          ],
          bullets: [
            'Direct Contact Dispatch Form: When you voluntarily fill in "Your Name", "Company / Organization", "Desired Solution", "Estimated Investment", and "Project Details", these fields are formatted locally in your browser to initiate an encrypted message via the official WhatsApp Business API (+55 63 99258-1001). We do not store form submissions in public databases without your explicit consent.',
            'Internationalization Preferences (i18n): We store the key "fox_portfolio_language" (pt, en, or es) in your browser’s localStorage solely to remember your selected language across visits.',
            'Technical Telemetry & Edge Security: Strictly anonymized edge logs (such as masked IP addresses, browser user-agent, Core Web Vitals performance metrics, and DDoS mitigation telemetry) are processed by our cloud infrastructure to guarantee 99.9% uptime.',
          ],
        },
        {
          id: 'powerbi-sandbox',
          number: '03',
          title: 'Interactive Microsoft Power BI Station & Sandbox Environments',
          paragraphs: [
            'The "FOXTECH Data Intelligence • Live Station" section showcases interactive dashboards, DAX formulas, and Star Schema dimensional models exclusively to demonstrate our engineering capabilities.',
            'All figures displayed in public demonstration dashboards are anonymized, synthetic, or aggregated. For enterprise client engagements, all data pipelines (SQL Server, PostgreSQL, Snowflake, ERPs, and APIs) run inside isolated environments enforced by Row-Level Security (RLS), TLS 1.3 encryption in transit, AES-256 encryption at rest, and a binding Non-Disclosure Agreement (NDA).',
          ],
        },
        {
          id: 'cookies-storage',
          number: '04',
          title: 'Cookies, LocalStorage, and Tracking Technologies',
          paragraphs: [
            'We do not use invasive third-party advertising trackers, behavioral profiling pixels, or data brokers. Our platform relies solely on:',
          ],
          bullets: [
            'Essential LocalStorage: Used exclusively to persist your language selection (Portuguese, English, or Spanish).',
            'Strictly Necessary Security Cookies: Generated by our global Edge CDN to prevent automated abuse and maintain load balancing.',
          ],
        },
        {
          id: 'data-sharing',
          number: '05',
          title: 'Third-Party Integrations and Ecosystem Links',
          paragraphs: [
            'FOXTECH never sells, rents, or trades personal data. Interaction with external platforms occurs solely upon direct user action:',
          ],
          bullets: [
            'WhatsApp Business (Meta Platforms, Inc.): Clicking our direct contact buttons or submitting the project dispatch form opens an end-to-end encrypted communication channel with our architecture team.',
            'Official Social & Code Repositories: External links to LinkedIn (linkedin.com/in/osvaldo-queta-fernando), GitHub (github.com/osvaldoqueta), Instagram (instagram.com/foxtech.ia), FoxStoreBR (foxstorebr.com), and Fox Libras (libras.foxstorebr.com) operate under their respective secure protocols.',
          ],
        },
        {
          id: 'security-governance',
          number: '06',
          title: 'Information Security, ISO 27001 & Corporate NDA',
          paragraphs: [
            'We enforce enterprise-grade security controls aligned with ISO/IEC 27001, COBIT, and ITIL v4 frameworks:',
          ],
          bullets: [
            'Full HTTPS / TLS 1.3 encryption across all endpoints with strict HTTP security headers.',
            'Execution of a formal Non-Disclosure Agreement (NDA) prior to any data audit, Business Intelligence implementation, custom software engineering, or AI/RAG deployment.',
            'Zero-Trust access control, least-privilege permissions, and Multi-Factor Authentication (MFA) across AWS, Microsoft Azure, and Google Cloud.',
          ],
        },
        {
          id: 'user-rights',
          number: '07',
          title: 'Your Data Protection Rights (GDPR & LGPD)',
          paragraphs: [
            'Under applicable data protection laws, you have the right to request at any time, free of charge:',
          ],
          bullets: [
            'Confirmation of processing and access to any personal data you have shared during business inquiries.',
            'Rectification of inaccurate, incomplete, or outdated information.',
            'Erasure ("Right to be Forgotten"), anonymization, or restriction of unnecessary data.',
            'Withdrawal of consent and removal from commercial communication records.',
          ],
        },
        {
          id: 'retention-contact',
          number: '08',
          title: 'Data Retention, International Transfers & Contact',
          paragraphs: [
            'Information shared during commercial proposals or active contracts is retained only for the duration required to fulfill contractual obligations, legal compliance, or technical audits.',
            'Because FOXTECH serves clients across Brazil, North America, Europe, and Latin America, any cross-border data processing adheres to international standard contractual clauses and enterprise encryption.',
          ],
        },
      ],
    },
    terms: {
      badge: 'LEGAL TERMS & CORPORATE GOVERNANCE • FOXTECH',
      title: 'Terms of ',
      titleHighlight: 'Use',
      subtitle:
        'General terms and conditions governing the use of the FOXTECH corporate portal, interactive demonstrations, intellectual property, and enterprise contracting.',
      lastUpdatedLabel: 'Last updated:',
      lastUpdatedDate: 'November 3, 2026',
      complianceBadges: [
        'International Copyright Treaties',
        'Software & IP Protection',
        'ITIL v4 & COBIT Governance',
        '24/7 Enterprise SLA',
      ],
      backToHome: 'Back to Home',
      switchDocLabel: 'View Privacy Policy',
      tocTitle: 'Terms Index',
      dpoCardTitle: 'Legal & Enterprise Architecture Desk',
      dpoRole: 'Osvaldo Queta Fernando — CEO & Lead Architect',
      dpoDescription:
        'Questions regarding technical proposals, software licensing, Enterprise retainers, or Service Level Agreements (SLA)? Our team is available 24/7.',
      contactCta: 'Contact Official Desk',
      sections: [
        {
          id: 'acceptance-overview',
          number: '01',
          title: 'Acceptance of Terms and Ecosystem Overview',
          paragraphs: [
            'Welcome to the official portal of FOXTECH (https://portfolio.foxstorebr.com), led by Osvaldo Queta Fernando. By accessing, browsing, or using any feature of this website — as well as its connected platforms https://foxstorebr.com and https://libras.foxstorebr.com — you acknowledge that you have read, understood, and agreed to be bound by these Terms of Use.',
            'If you do not agree with any part of these terms, please discontinue use of the website immediately.',
          ],
        },
        {
          id: 'services-scope',
          number: '02',
          title: 'Scope of Solutions and Consulting Services',
          paragraphs: [
            'This portal presents the executive portfolio, technical architecture, and engagement models of FOXTECH across four core pillars:',
          ],
          bullets: [
            '01. Business Intelligence & Data Engineering: Corporate Power BI dashboards, Star Schema dimensional modeling, advanced DAX engineering, automated ETL pipelines, and SQL Server, PostgreSQL, and Snowflake integrations.',
            '02. Software Engineering & AI Ecosystems: Full-stack web applications in Next.js and React, API integrations, autonomous generative AI agents, and RAG vector database architectures.',
            '03. Strategic IT Consulting & Governance: Executive consulting in ITIL v4, COBIT, ISO/IEC 27001 compliance, technology auditing, and enterprise architecture.',
            '04. Cloud Solutions & Automation: Multi-Cloud architecture (AWS, Microsoft Azure, and Google Cloud), DevOps CI/CD pipelines, and intelligent enterprise workflow automation.',
          ],
        },
        {
          id: 'intellectual-property',
          number: '03',
          title: 'Intellectual Property and Copyright',
          paragraphs: [
            'All content on this website — including but not limited to the "FOXTECH" corporate name and brand, the geometric fox vector logo, the slogan "Innovation. Strategy. Results.", source code, UI components, DAX measures, software architectures, executive photography, multilingual copy (Portuguese, English, and Spanish), graphics, and design system tokens — is the exclusive intellectual property of FOXTECH and Osvaldo Queta Fernando, protected by international copyright and software laws.',
            'Unauthorized reproduction, cloning, redistribution, reverse engineering, or commercial exploitation of any visual asset, brand element, or source code from this portal is strictly prohibited without prior written consent.',
          ],
        },
        {
          id: 'powerbi-demo-usage',
          number: '04',
          title: 'Use of the Interactive Power BI Station & Technical Demos',
          paragraphs: [
            'The interactive dashboards, DAX/SQL code inspectors, and telemetry simulations provided on this portal are intended solely for technical evaluation by prospective clients, executive partners, and enterprise stakeholders.',
          ],
          bullets: [
            'Users agree not to perform Denial-of-Service (DoS/DDoS) attacks, automated scraping, or unauthorized vulnerability probing against our sandbox containers or infrastructure.',
            'KPIs and financial/operational metrics shown in demonstration views represent reference scenarios and do not constitute financial advice or guaranteed outcomes without a dedicated project assessment.',
          ],
        },
        {
          id: 'contracting-sla',
          number: '05',
          title: 'Project Engagement, Commercial Proposals & SLA',
          paragraphs: [
            'The engagement tiers presented under "Enterprise Engagement Models" (BI & Analytics Sprint, Enterprise Data & AI, Software & Cloud Solutions, and Governance & Squad 24/7) serve as structured reference frameworks.',
          ],
          bullets: [
            'Formal engagement begins upon technical discovery, issuance of an Official Commercial Proposal, and execution of a Master Services Agreement (MSA) accompanied by a Non-Disclosure Agreement (NDA).',
            'Delivery timelines, sprint milestones, and 24/7 Service Level Agreements (SLA) take effect upon formal contract signature.',
            'Intellectual property rights and licenses for custom-built deliverables are transferred or granted to the client in accordance with the signed commercial contract.',
          ],
        },
        {
          id: 'limitation-liability',
          number: '06',
          title: 'Limitation of Liability and Platform Availability',
          paragraphs: [
            'FOXTECH applies industry-leading software engineering and global Edge CDN hosting to maintain 24/7 availability and elite Core Web Vitals performance.',
            'However, FOXTECH shall not be held liable for temporary interruptions caused by scheduled maintenance, global telecommunications outages, or third-party platforms (such as WhatsApp, GitHub, Instagram, or LinkedIn).',
          ],
        },
        {
          id: 'governing-law',
          number: '07',
          title: 'Amendments, Governing Law, and Jurisdiction',
          paragraphs: [
            'FOXTECH reserves the right to update these Terms of Use and our Privacy Policy at any time to reflect technological advancements or regulatory updates, always indicating the latest revision date.',
            'These Terms are governed by the laws of the Federative Republic of Brazil, with the courts of Juiz de Fora, State of Minas Gerais, Brazil, designated to resolve any disputes arising hereunder.',
          ],
        },
      ],
    },
  },
  es: {
    privacy: {
      badge: 'GOBERNANZA Y PROTECCIÓN DE DATOS • RGPD / LGPD / ISO 27001',
      title: 'Política de ',
      titleHighlight: 'Privacidad',
      subtitle:
        'Transparencia, seguridad de la información y estricto cumplimiento normativo en el tratamiento de datos en todo el ecosistema digital de FOXTECH.',
      lastUpdatedLabel: 'Última actualización:',
      lastUpdatedDate: '03 de Noviembre de 2026',
      complianceBadges: [
        'RGPD / GDPR (UE 2016/679)',
        'LGPD (Ley nº 13.709/2018)',
        'ISO/IEC 27001',
        'Arquitectura Zero-Trust',
      ],
      backToHome: 'Volver al Inicio',
      switchDocLabel: 'Ver Términos de Uso',
      tocTitle: 'Índice del Documento',
      dpoCardTitle: 'Delegado de Protección de Datos (DPO) y Gobernanza',
      dpoRole: 'Osvaldo Queta Fernando — CEO & Lead Architect',
      dpoDescription:
        'Para ejercer sus derechos como titular de datos, solicitar aclaraciones sobre seguridad de la información o firmar Acuerdos de Confidencialidad (NDA), contáctenos directamente por nuestros canales oficiales.',
      contactCta: 'Contactar al Delegado (DPO)',
      sections: [
        {
          id: 'controlador-alcance',
          number: '01',
          title: 'Responsable del Tratamiento y Alcance Corporativo',
          paragraphs: [
            'FOXTECH ("nosotros", "nuestro" o la "Empresa"), bajo el liderazgo técnico y dirección ejecutiva de Osvaldo Queta Fernando, actúa como Responsable del Tratamiento de los datos personales eventualmente recopilados o procesados a través del portal institucional https://portfolio.foxstorebr.com y sus plataformas integradas (incluyendo https://foxstorebr.com y https://libras.foxstorebr.com).',
            'Esta Política de Privacidad ha sido redactada en estricto cumplimiento del Reglamento General de Protección de Datos de la Unión Europea (RGPD / GDPR — Reglamento UE 2016/679), la Ley General de Protección de Datos Personales de Brasil (LGPD — Ley nº 13.709/2018) y los estándares internacionales ISO/IEC 27001, COBIT e ITIL v4.',
          ],
        },
        {
          id: 'datos-recopilados',
          number: '02',
          title: 'Datos Recopilados y Finalidad del Tratamiento',
          paragraphs: [
            'Nuestro sitio web institucional fue diseñado bajo el principio de Privacidad desde el Diseño (Privacy by Design), recopilando únicamente el mínimo indispensable para viabilizar la atención comercial y la experiencia técnica del usuario:',
          ],
          bullets: [
            'Formulario de Contacto Directo (Direct Contact): Cuando usted completa voluntariamente los campos "Su Nombre", "Empresa / Organización", "Solución Deseada", "Inversión Estimada" y "Detalles del Proyecto", dichos datos se estructuran localmente en su navegador para iniciar una atención directa vía API oficial de WhatsApp Business (+55 63 99258-1001). No almacenamos esta información en bases de datos públicas sin su consentimiento expreso.',
            'Preferencias de Internacionalización (i18n): Almacenamos localmente en el navegador la clave "fox_portfolio_language" (pt, en o es) únicamente para conservar el idioma seleccionado entre sesiones.',
            'Telemetría Técnica y Seguridad: Datos técnicos estrictamente anonimizados (como dirección IP enmascarada en registros de borde CDN, tipo de navegador, métricas Core Web Vitals y prevención contra ataques DDoS) son procesados por la infraestructura en la nube para garantizar una disponibilidad del 99,9%.',
          ],
        },
        {
          id: 'powerbi-sandbox',
          number: '03',
          title: 'Estación Interactiva Microsoft Power BI y Entornos Demostrativos',
          paragraphs: [
            'La sección "FOXTECH Data Intelligence • Live Station" presenta dashboards interactivos, métricas DAX y modelos dimensionales Star Schema orientados exclusivamente a demostrar nuestra capacidad técnica y arquitectónica.',
            'Todos los datos exhibidos en los paneles demostrativos públicos son anonimizados, sintéticos o agregados. En proyectos corporativos contratados, todas las conexiones (SQL Server, PostgreSQL, Snowflake, ERPs y APIs) operan en entornos aislados con Seguridad a Nivel de Fila (RLS), cifrado en tránsito (TLS 1.3), cifrado en reposo (AES-256) y bajo Acuerdo de Confidencialidad (NDA).',
          ],
        },
        {
          id: 'cookies-almacenamiento',
          number: '04',
          title: 'Cookies, LocalStorage y Tecnologías Similares',
          paragraphs: [
            'No utilizamos cookies de rastreo invasivas, redes publicitarias de terceros ni comercialización de perfiles de comportamiento. El portal utiliza exclusivamente:',
          ],
          bullets: [
            'Almacenamiento Esencial (LocalStorage): Empleado únicamente para guardar la preferencia de idioma (Portugués, Inglés o Español) elegida por el visitante.',
            'Cookies Estrictamente Necesarias de Seguridad: Generadas por nuestra red de distribución de contenido (Edge CDN) para protección contra bots maliciosos y balanceo de carga.',
          ],
        },
        {
          id: 'compartir-terceros',
          number: '05',
          title: 'Integraciones con Terceros y Ecosistema',
          paragraphs: [
            'FOXTECH jamás vende, alquila ni cede datos personales de visitantes o clientes a terceros. La interacción con plataformas externas ocurre únicamente mediante acción directa del usuario:',
          ],
          bullets: [
            'WhatsApp Business (Meta Platforms, Inc.): Al hacer clic en los botones de contacto directo o enviar el formulario de diagnóstico, usted es redirigido a la aplicación oficial de WhatsApp para una comunicación cifrada de extremo a extremo con nuestro equipo.',
            'Redes Profesionales y Repositorios: Los enlaces externos hacia LinkedIn (linkedin.com/in/osvaldo-queta-fernando), GitHub (github.com/osvaldoqueta), Instagram (instagram.com/foxtech.ia), FoxStoreBR (foxstorebr.com) y Fox Libras (libras.foxstorebr.com) cuentan con sus propias políticas de seguridad.',
          ],
        },
        {
          id: 'seguridad-gobernanza',
          number: '06',
          title: 'Seguridad de la Información, ISO 27001 y Confidencialidad (NDA)',
          paragraphs: [
            'Implementamos controles rigurosos basados en las normas ISO/IEC 27001, COBIT e ITIL v4 para proteger la información técnica, comercial y estratégica:',
          ],
          bullets: [
            'Comunicación íntegramente cifrada mediante HTTPS / TLS 1.3 con cabeceras de seguridad estrictas.',
            'Firma de Acuerdo de Confidencialidad (NDA — Non-Disclosure Agreement) antes de iniciar cualquier auditoría de datos, consultoría de BI, ingeniería de software o entrenamiento de modelos de IA (RAG).',
            'Control de acceso basado en privilegio mínimo (Arquitectura Zero-Trust) y autenticación multifactor (MFA) en AWS, Microsoft Azure y Google Cloud.',
          ],
        },
        {
          id: 'derechos-titular',
          number: '07',
          title: 'Derechos del Titular de los Datos (RGPD y LGPD)',
          paragraphs: [
            'De acuerdo con la normativa vigente, usted tiene derecho a solicitar en cualquier momento y de forma gratuita:',
          ],
          bullets: [
            'Confirmación de la existencia de tratamiento y acceso a sus datos personales eventualmente proporcionados en consultas comerciales.',
            'Rectificación de datos incompletos, inexactos o desactualizados.',
            'Anonimización, bloqueo o supresión ("Derecho al Olvido") de datos innecesarios.',
            'Revocación del consentimiento y eliminación de registros de contacto comercial.',
          ],
        },
        {
          id: 'retencion-contacto',
          number: '08',
          title: 'Conservación de Datos, Transferencias Internacionales y Contacto',
          paragraphs: [
            'Los datos proporcionados voluntariamente durante negociaciones comerciales o ejecución de contratos se conservan únicamente durante el período necesario para cumplir con las finalidades contractuales, obligaciones legales o auditorías técnicas.',
            'Dado que FOXTECH atiende a clientes en Brasil, Norteamérica, Europa y Latinoamérica, cualquier transferencia internacional de datos observa cláusulas contractuales tipo de protección y cifrado empresarial.',
          ],
        },
      ],
    },
    terms: {
      badge: 'TÉRMINOS LEGALES Y GOBERNANZA CORPORATIVA • FOXTECH',
      title: 'Términos de ',
      titleHighlight: 'Uso',
      subtitle:
        'Condiciones generales de utilización del portal institucional, demostraciones tecnológicas, propiedad intelectual y directrices de contratación de FOXTECH.',
      lastUpdatedLabel: 'Última actualización:',
      lastUpdatedDate: '03 de Noviembre de 2026',
      complianceBadges: [
        'Tratados Internacionales de Propiedad Intelectual',
        'Protección de Software e IA',
        'Gobernanza ITIL v4 y COBIT',
        'SLA Corporativo 24/7',
      ],
      backToHome: 'Volver al Inicio',
      switchDocLabel: 'Ver Política de Privacidad',
      tocTitle: 'Índice de Términos',
      dpoCardTitle: 'Departamento Legal y Arquitectura Corporativa',
      dpoRole: 'Osvaldo Queta Fernando — CEO & Lead Architect',
      dpoDescription:
        '¿Consultas sobre propuestas técnicas, licenciamiento de software, contratos Enterprise o Acuerdos de Nivel de Servicio (SLA)? Nuestro equipo está disponible 24/7.',
      contactCta: 'Contactar Canal Oficial',
      sections: [
        {
          id: 'aceptacion-vision-general',
          number: '01',
          title: 'Aceptación de los Términos y Visión General del Ecosistema',
          paragraphs: [
            'Bienvenido al portal oficial de FOXTECH (https://portfolio.foxstorebr.com), dirigida por Osvaldo Queta Fernando. Al acceder, navegar o utilizar cualquier recurso de este sitio web — así como sus integraciones con https://foxstorebr.com y https://libras.foxstorebr.com — usted declara haber leído, comprendido y aceptado íntegramente estos Términos de Uso.',
            'En caso de no estar de acuerdo con alguna disposición aquí establecida, le recomendamos interrumpir inmediatamente el uso del portal.',
          ],
        },
        {
          id: 'alcance-servicios',
          number: '02',
          title: 'Alcance de las Soluciones y Servicios Presentados',
          paragraphs: [
            'El sitio web tiene como objetivo presentar el portafolio ejecutivo, la arquitectura técnica y los modelos de contratación de FOXTECH en cuatro pilares fundamentales:',
          ],
          bullets: [
            '01. Business Intelligence & Data Engineering: Dashboards corporativos en Power BI, modelado dimensional Star Schema, medidas DAX avanzadas, pipelines ETL e integración con SQL Server, PostgreSQL y Snowflake.',
            '02. Software Engineering & AI Ecosystems: Desarrollo de aplicaciones web full-stack en Next.js y React, integraciones de APIs, agentes autónomos de IA generativa y arquitecturas RAG con bases vectoriales.',
            '03. Strategic IT Consulting & Governance: Consultoría ejecutiva en ITIL v4, COBIT, adecuación ISO/IEC 27001, auditoría tecnológica y arquitectura corporativa.',
            '04. Cloud Solutions & Automation: Arquitectura Multi-Cloud (AWS, Microsoft Azure y Google Cloud), pipelines DevOps CI/CD y automatización inteligente de flujos empresariales.',
          ],
        },
        {
          id: 'propiedad-intelectual',
          number: '03',
          title: 'Propiedad Intelectual y Derechos de Autor',
          paragraphs: [
            'Todo el contenido presente en este portal — incluyendo, sin limitación, el nombre comercial y marca "FOXTECH", el logotipo vectorial geométrico del zorro, el eslogan "Innovación. Estrategia. Resultados.", códigos fuente, componentes visuales, scripts DAX, arquitecturas de software, fotografías ejecutivas, textos en Portugués, Inglés y Español, gráficos y sistema de diseño — constituye propiedad intelectual exclusiva de FOXTECH y de Osvaldo Queta Fernando, protegida por las leyes de propiedad intelectual y tratados internacionales.',
            'Queda expresamente prohibida la reproducción, copia, clonación de interfaz, redistribución, ingeniería inversa o uso comercial de cualquier activo visual o código de este sitio sin autorización previa y por escrito.',
          ],
        },
        {
          id: 'uso-estacion-powerbi',
          number: '04',
          title: 'Uso de la Estación Interactiva Power BI y Demostraciones Técnicas',
          paragraphs: [
            'Los paneles interactivos, visualizaciones de código DAX/SQL y simuladores disponibles en el portal están destinados exclusivamente a la evaluación técnica por parte de clientes potenciales, directivos y socios comerciales.',
          ],
          bullets: [
            'El usuario se compromete a no realizar ataques de denegación de servicio (DoS/DDoS), extracción automatizada abusiva (scraping) ni intentos de explotación de vulnerabilidades contra los contenedores del portal.',
            'Las métricas e indicadores financieros/operativos exhibidos en la estación demostrativa representan escenarios de referencia técnica y no constituyen asesoramiento financiero ni garantía automática de resultados idénticos sin un diagnóstico específico.',
          ],
        },
        {
          id: 'contratacion-propuestas-sla',
          number: '05',
          title: 'Contratación de Proyectos, Propuestas Comerciales y SLA',
          paragraphs: [
            'La información de planes y modalidades exhibida en la sección "Modelos de Contratación Corporativa" (BI & Analytics Sprint, Enterprise Data & AI, Software & Cloud Solutions y Governance & Squad 24/7) tiene carácter referencial e informativo.',
          ],
          bullets: [
            'La contratación efectiva de cualquier servicio se formaliza mediante diagnóstico técnico, emisión de Propuesta Comercial Formal y firma de Contrato de Prestación de Servicios acompañado de un Acuerdo de Confidencialidad (NDA).',
            'Los plazos de entrega, alcance de entregables, cronogramas de sprints y Acuerdos de Nivel de Servicio (SLA 24/7) entran en vigor a partir de la firma contractual entre las partes.',
            'La titularidad intelectual de los códigos, dashboards y modelos desarrollados a medida para el cliente será transferida o licenciada según lo estipulado en el contrato comercial correspondiente.',
          ],
        },
        {
          id: 'limitacion-responsabilidad',
          number: '06',
          title: 'Limitación de Responsabilidad y Disponibilidad',
          paragraphs: [
            'FOXTECH emplea las mejores prácticas de ingeniería de software y alojamiento en el borde (Edge CDN) para mantener el portal disponible las 24 horas del día, los 7 días de la semana, con el máximo rendimiento.',
            'No obstante, no nos responsabilizamos por eventuales interrupciones temporales derivadas de mantenimientos programados, fallas en proveedores globales de telecomunicaciones o servicios de terceros (como APIs de WhatsApp, GitHub, Instagram o LinkedIn).',
          ],
        },
        {
          id: 'modificaciones-jurisdiccion',
          number: '07',
          title: 'Actualizaciones de los Términos, Legislación Aplicable y Jurisdicción',
          paragraphs: [
            'FOXTECH se reserva el derecho de actualizar o perfeccionar estos Términos de Uso y su Política de Privacidad en cualquier momento para reflejar evoluciones tecnológicas o cambios normativos, manteniendo siempre visible la fecha de la última actualización.',
            'Estos Términos se rigen por las leyes de la República Federativa del Brasil, eligiéndose los tribunales de la Comarca de Juiz de Fora, Estado de Minas Gerais, Brasil, para dirimir cualquier controversia derivada de este instrumento.',
          ],
        },
      ],
    },
  },
};
