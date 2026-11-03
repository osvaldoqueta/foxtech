import type { Metadata } from 'next';
import LegalDocumentView from '@/components/LegalDocumentView';

export const metadata: Metadata = {
  title: 'Termos de Uso & Condições Gerais | FOXTECH',
  description:
    'Termos de Uso, Propriedade Intelectual, Governança Corporativa (ITIL v4 / COBIT) e Diretrizes de Contratação da FOXTECH.',
  alternates: {
    canonical: 'https://portfolio.foxstorebr.com/termos',
  },
  openGraph: {
    type: 'website',
    url: 'https://portfolio.foxstorebr.com/termos',
    title: 'Termos de Uso & Governança Corporativa | FOXTECH',
    description:
      'Condições gerais de utilização do portal institucional, demonstrações tecnológicas Power BI e contratação corporativa FOXTECH.',
    siteName: 'FOXTECH — Inovação. Estratégia. Resultados.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfUsePage() {
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
        name: 'Termos de Uso',
        item: 'https://portfolio.foxstorebr.com/termos',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <LegalDocumentView docType="terms" />
    </>
  );
}
