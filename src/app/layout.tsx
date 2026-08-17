import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { JsonLd } from '@/components/seo/JsonLd';
import { Analytics } from '@/components/seo/Analytics';
import { legalServiceSchema } from '@/lib/seo';
import { site, siteUrl } from '@/lib/site';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant',
});

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'BUBO Legal — Abogados Laboralistas en Colombia',
    template: '%s',
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName, url: siteUrl }],
  creator: site.legalName,
  keywords: [
    'abogado laboral Colombia',
    'abogados laboralistas Bogotá',
    'despido sin justa causa',
    'liquidación laboral',
    'acoso laboral Ley 1010',
    'pensión Colpensiones',
  ],
  openGraph: {
    type: 'website',
    locale: site.locale,
    siteName: site.name,
    url: siteUrl,
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CO" className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={legalServiceSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
