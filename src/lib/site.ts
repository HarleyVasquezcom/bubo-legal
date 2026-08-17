export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bubolegal.vercel.app';

export const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '573001234567';

export const site = {
  name: 'BUBO Legal',
  legalName: 'BUBO Legal — Abogados Laboralistas',
  tagline: 'Protegemos tus derechos. Defendemos tu futuro.',
  description:
    'Firma de abogados especializada en derecho laboral colombiano. Despidos, liquidaciones, pensiones y acoso laboral. Primera consulta gratuita.',
  locale: 'es_CO',
  email: 'contacto@bubolegal.com',
  phone: '+57 300 123 4567',
  phoneHref: 'tel:+573001234567',
  landline: '+57 601 234 5678',
  address: {
    street: 'Calle 93 #11-27, Oficina 402',
    city: 'Bogotá',
    region: 'Cundinamarca',
    country: 'CO',
    postalCode: '110221',
  },
  geo: { lat: 4.6784, lng: -74.0483 },
  hours: 'Lunes a viernes 8:00 a.m. – 6:00 p.m. · Sábados 9:00 a.m. – 1:00 p.m.',
  registration:
    'Abogados inscritos ante el Consejo Superior de la Judicatura de Colombia. Tarjeta profesional vigente.',
  social: {
    linkedin: 'https://www.linkedin.com/company/bubolegal',
    instagram: 'https://www.instagram.com/bubolegal',
    facebook: 'https://www.facebook.com/bubolegal',
  },
  stats: [
    { value: '+15', label: 'años de experiencia' },
    { value: '+2.000', label: 'casos resueltos' },
    { value: '98%', label: 'tasa de éxito' },
    { value: 'Nacional', label: 'cobertura en Colombia' },
  ],
} as const;

export const whatsappUrl = (
  message = 'Hola BUBO Legal, quisiera una consulta gratuita sobre mi situación laboral.',
) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const disclaimer = 'Este contenido es informativo y no constituye asesoría jurídica.';
