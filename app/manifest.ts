import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'FOXTECH — Inovação. Estratégia. Resultados.',
    short_name: 'FOXTECH',
    description:
      'FOXTECH: Business Intelligence, Power BI, Engenharia de Software, Inteligência Artificial, Governança de TI (ITIL v4 / COBIT / ISO 27001) & Cloud Computing.',
    start_url: '/',
    display: 'standalone',
    background_color: '#080B12',
    theme_color: '#FF6800',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/branding/foxtech/foxtech-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
