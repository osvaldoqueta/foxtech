import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import ClientProviders from '@/components/ClientProviders';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#FF6800',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.foxstorebr.com'),
  title: {
    default: 'FOXTECH | Inovação. Estratégia. Resultados. — Business Intelligence, Software & IA',
    template: '%s | FOXTECH',
  },
  description:
    'FOXTECH: Empresa de tecnologia liderada por Osvaldo Queta Fernando (+16 anos de experiência). Especialista em Business Intelligence (Power BI, DAX, SQL, Snowflake), Engenharia de Software (Next.js, React), Inteligência Artificial (Agentes Autônomos, RAG), Governança de TI (ITIL v4, COBIT, ISO 27001) e Cloud Computing (AWS, Azure, GCP).',
  applicationName: 'FOXTECH',
  keywords: [
    'FOXTECH',
    'Osvaldo Queta Fernando',
    'Osvaldo Queta',
    'Business Intelligence',
    'Power BI',
    'Consultoria Power BI',
    'Dashboards Executivos',
    'DAX',
    'Data Engineering',
    'Engenharia de Dados',
    'SQL Server',
    'PostgreSQL',
    'Snowflake',
    'Engenharia de Software',
    'Desenvolvimento Web',
    'Next.js',
    'React',
    'Inteligência Artificial',
    'Agentes Autônomos de IA',
    'RAG',
    'Vector Database',
    'Governança de TI',
    'ITIL v4',
    'COBIT',
    'ISO 27001',
    'Cloud Computing',
    'AWS',
    'Azure',
    'Google Cloud',
    'DevOps',
    'Automação Empresarial',
    'FoxStoreBR',
    'Fox Libras',
  ],
  authors: [
    {
      name: 'Osvaldo Queta Fernando — FOXTECH',
      url: 'https://portfolio.foxstorebr.com',
    },
  ],
  creator: 'Osvaldo Queta Fernando — FOXTECH',
  publisher: 'FOXTECH',
  category: 'technology',
  alternates: {
    canonical: 'https://portfolio.foxstorebr.com',
    languages: {
      'pt-BR': 'https://portfolio.foxstorebr.com',
      'en-US': 'https://portfolio.foxstorebr.com',
      'es-ES': 'https://portfolio.foxstorebr.com',
      'x-default': 'https://portfolio.foxstorebr.com',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/branding/foxtech/foxtech-icon.svg', type: 'image/svg+xml' },
      { url: '/branding/foxtech/foxtech-icon.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.svg',
    apple: '/branding/foxtech/foxtech-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: ['en_US', 'es_ES'],
    url: 'https://portfolio.foxstorebr.com',
    siteName: 'FOXTECH — Inovação. Estratégia. Resultados.',
    title: 'FOXTECH | Soluções Inteligentes em BI, Software, IA, Governança & Cloud',
    description:
      'Desenvolvemos soluções digitais, com inteligência artificial, Power BI e tecnologia de ponta, para impulsionar o seu negócio. +16 anos de experiência e +500 projetos entregues.',
    images: [
      {
        url: '/Apresenta%C3%A7%C3%A3o%20de%20Landing%20Page%20FOXTECH.png',
        width: 1200,
        height: 630,
        alt: 'FOXTECH — Soluções Inteligentes para um futuro mais eficiente',
      },
      {
        url: '/branding/foxtech/foxtech-logo-primary.png',
        width: 1200,
        height: 630,
        alt: 'FOXTECH — Inovação. Estratégia. Resultados.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FOXTECH | Inovação. Estratégia. Resultados.',
    description:
      'Business Intelligence, Engenharia de Software, Inteligência Artificial, Governança de TI (ITIL/ISO 27001), Cloud Computing e Automação Empresarial.',
    images: ['/Apresenta%C3%A7%C3%A3o%20de%20Landing%20Page%20FOXTECH.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ProfessionalService', 'ITService'],
        '@id': 'https://portfolio.foxstorebr.com/#organization',
        name: 'FOXTECH',
        alternateName: 'FOXTECH — Inovação. Estratégia. Resultados.',
        slogan: 'INOVAÇÃO. ESTRATÉGIA. RESULTADOS.',
        url: 'https://portfolio.foxstorebr.com',
        logo: 'https://portfolio.foxstorebr.com/branding/foxtech/foxtech-logo-primary.png',
        image: 'https://portfolio.foxstorebr.com/osvaldo_portrait_terno.jpg',
        description:
          'Empresa de tecnologia especializada em Business Intelligence (Power BI), Engenharia de Software (Next.js/React), Inteligência Artificial (Agentes Autônomos e RAG), Governança de TI (ITIL v4, COBIT, ISO 27001) e Cloud Computing.',
        founder: {
          '@id': 'https://portfolio.foxstorebr.com/#person',
        },
        email: 'osvaldoqueta@gmail.com',
        telephone: '+5563992581001',
        priceRange: '$$$',
        openingHours: 'Mo-Su 00:00-23:59',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Juiz de Fora',
          addressRegion: 'MG',
          addressCountry: 'BR',
        },
        areaServed: ['BR', 'US', 'PT', 'ES', 'Worldwide'],
        availableLanguage: ['pt-BR', 'en-US', 'es-ES'],
        sameAs: [
          'https://www.linkedin.com/in/osvaldo-queta-fernando/',
          'https://github.com/osvaldoqueta',
          'https://www.instagram.com/foxtech.ia',
          'https://foxstorebr.com',
          'https://libras.foxstorebr.com',
        ],
        knowsAbout: [
          'Business Intelligence',
          'Data Engineering',
          'Microsoft Power BI',
          'DAX & Star Schema Modeling',
          'SQL Server, PostgreSQL & Snowflake',
          'Software Engineering',
          'Next.js & React',
          'Artificial Intelligence & Autonomous Agents',
          'Retrieval-Augmented Generation (RAG)',
          'IT Governance (ITIL v4, COBIT, ISO/IEC 27001)',
          'Cloud Computing (AWS, Azure, Google Cloud)',
          'Enterprise Automation',
        ],
      },
      {
        '@type': 'Person',
        '@id': 'https://portfolio.foxstorebr.com/#person',
        name: 'Osvaldo Queta Fernando',
        jobTitle: 'CEO, Founder & Principal Solutions Architect',
        worksFor: {
          '@id': 'https://portfolio.foxstorebr.com/#organization',
        },
        url: 'https://portfolio.foxstorebr.com',
        image: 'https://portfolio.foxstorebr.com/osvaldo_portrait_terno.jpg',
        sameAs: [
          'https://www.linkedin.com/in/osvaldo-queta-fernando/',
          'https://github.com/osvaldoqueta',
          'https://www.instagram.com/foxtech.ia',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://portfolio.foxstorebr.com/#website',
        url: 'https://portfolio.foxstorebr.com',
        name: 'FOXTECH — Inovação. Estratégia. Resultados.',
        publisher: {
          '@id': 'https://portfolio.foxstorebr.com/#organization',
        },
        inLanguage: ['pt-BR', 'en-US', 'es-ES'],
      },
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#080B12] text-white antialiased selection:bg-[#FF6800]/30 selection:text-white">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
