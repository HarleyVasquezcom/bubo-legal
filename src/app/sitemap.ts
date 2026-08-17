import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import { serviceHref, services } from '@/lib/services';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/nosotros`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${siteUrl}/contacto`, lastModified: now, changeFrequency: 'yearly', priority: 0.9 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    {
      url: `${siteUrl}/preguntas-frecuentes`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/politica-de-privacidad`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terminos-y-condiciones`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}${serviceHref(service.slug)}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...postRoutes];
}
