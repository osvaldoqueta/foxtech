import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.foxstorebr.com'),
  title: 'FOXTECH | Inovação. Estratégia. Resultados. — Tecnologia, Dados & IA',
  description:
    'FOXTECH: Empresa de tecnologia especializada em Business Intelligence, Engenharia de Software, Inteligência Artificial, Governança de TI, Cloud Computing e Automação Empresarial.',
  keywords: [
    'FOXTECH',
    'Osvaldo Queta Fernando',
    'Business Intelligence',
    'Power BI',
    'Data Engineering',
    'Engenharia de Software',
    'Next.js',
    'React',
    'Inteligência Artificial',
    'Agentes de IA',
    'RAG',
    'Governança de TI',
    'ITIL v4',
    'COBIT',
    'ISO 27001',
    'Cloud Computing',
    'AWS',
    'Azure',
    'Google Cloud',
    'Automação Empresarial',
  ],
  authors: [{ name: 'FOXTECH — Osvaldo Queta Fernando', url: 'https://portfolio.foxstorebr.com' }],
  creator: 'FOXTECH',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/branding/foxtech/foxtech-icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/branding/foxtech/foxtech-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://portfolio.foxstorebr.com',
    siteName: 'FOXTECH — Inovação. Estratégia. Resultados.',
    title: 'FOXTECH | Soluções Inteligentes para um futuro mais eficiente',
    description:
      'Desenvolvemos soluções digitais, com inteligência artificial e tecnologia de ponta, para impulsionar o seu negócio.',
    images: [
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
      'Business Intelligence, Engenharia de Software, Inteligência Artificial, Governança de TI, Cloud Computing e Automação Empresarial.',
    images: ['/branding/foxtech/foxtech-logo-primary.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FOXTECH',
    alternateName: 'FOXTECH — Osvaldo Queta Fernando',
    slogan: 'INOVAÇÃO. ESTRATÉGIA. RESULTADOS.',
    url: 'https://portfolio.foxstorebr.com',
    logo: 'https://portfolio.foxstorebr.com/branding/foxtech/foxtech-logo-primary.svg',
    founder: {
      '@type': 'Person',
      name: 'Osvaldo Queta Fernando',
      jobTitle: 'CEO & Principal Solutions Architect',
    },
    email: 'osvaldoqueta@gmail.com',
    telephone: '+5563992581001',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Juiz de Fora',
      addressRegion: 'MG',
      addressCountry: 'BR',
    },
    sameAs: [
      'https://www.linkedin.com/in/osvaldo-queta-fernando/',
      'https://foxstorebr.com',
      'https://libras.foxstorebr.com',
    ],
    knowsAbout: [
      'Business Intelligence',
      'Data Engineering',
      'Power BI',
      'Software Engineering',
      'Artificial Intelligence',
      'IT Governance',
      'ITIL v4',
      'COBIT',
      'ISO 27001',
      'Cloud Computing',
      'Enterprise Automation',
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
