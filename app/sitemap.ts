import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://portfolio.foxstorebr.com';
  const lastModified = new Date('2026-11-03T12:00:00.000Z');

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          'pt-BR': baseUrl,
          'en-US': baseUrl,
          'es-ES': baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/privacidade`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'pt-BR': `${baseUrl}/privacidade`,
          'en-US': `${baseUrl}/privacidade`,
          'es-ES': `${baseUrl}/privacidade`,
        },
      },
    },
    {
      url: `${baseUrl}/termos`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'pt-BR': `${baseUrl}/termos`,
          'en-US': `${baseUrl}/termos`,
          'es-ES': `${baseUrl}/termos`,
        },
      },
    },
  ];
}
