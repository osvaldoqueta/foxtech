import type { Metadata } from 'next';
import LegalDocumentView from '@/components/LegalDocumentView';

export const metadata: Metadata = {
  title: 'Política de Privacidade & Proteção de Dados (LGPD / GDPR) | FOXTECH',
  description:
    'Política de Privacidade, Segurança da Informação (ISO/IEC 27001) e Conformidade LGPD/GDPR da FOXTECH — Inovação. Estratégia. Resultados.',
  alternates: {
    canonical: 'https://portfolio.foxstorebr.com/privacidade',
  },
  openGraph: {
    type: 'website',
    url: 'https://portfolio.foxstorebr.com/privacidade',
    title: 'Política de Privacidade & Governança de Dados | FOXTECH',
    description:
      'Transparência, segurança da informação ISO 27001 e conformidade LGPD/GDPR em todo o ecossistema FOXTECH.',
    siteName: 'FOXTECH — Inovação. Estratégia. Resultados.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'FOXTECH Home',
        item: 'https://portfolio.foxstorebr.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Política de Privacidade',
        item: 'https://portfolio.foxstorebr.com/privacidade',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <LegalDocumentView docType="privacy" />
    </>
  );
}
