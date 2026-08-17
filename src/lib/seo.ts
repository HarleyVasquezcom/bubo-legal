import type { Metadata } from 'next';
import { site, siteUrl } from '@/lib/site';

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  image = '/og/bubo-legal.svg',
  type = 'website',
  publishedTime,
}: PageMetaInput): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': `${siteUrl}#organization`,
  name: site.name,
  legalName: site.legalName,
  description: site.description,
  url: siteUrl,
  telephone: site.phone,
  email: site.email,
  image: `${siteUrl}/images/bubo-logo.png`,
  logo: `${siteUrl}/images/bubo-logo.png`,
  priceRange: 'COP',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  areaServed: { '@type': 'Country', name: 'Colombia' },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '13:00',
    },
  ],
  sameAs: [site.social.linkedin, site.social.instagram, site.social.facebook],
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  date: string;
  author: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    datePublished: input.date,
    dateModified: input.date,
    mainEntityOfPage: `${siteUrl}${input.path}`,
    author: { '@type': 'Person', name: input.author },
    publisher: { '@type': 'Organization', name: site.name, url: siteUrl },
    ...(input.image ? { image: input.image } : {}),
  };
}
