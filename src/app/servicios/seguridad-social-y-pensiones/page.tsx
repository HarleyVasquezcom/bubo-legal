import type { Metadata } from 'next';
import { ServicePage } from '@/components/services/ServicePage';
import { pageMetadata } from '@/lib/seo';
import { requireService, serviceHref } from '@/lib/services';

const service = requireService('seguridad-social-y-pensiones');

export const metadata: Metadata = pageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: serviceHref(service.slug),
  keywords: service.keywords,
});

export default function Page() {
  return <ServicePage service={service} />;
}
