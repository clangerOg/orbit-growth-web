import Footer from '@/components/footer';
import { HeaderLink } from '@/components/layout';
import { siteConfig } from '@/config/site';
import { BASE_URL } from '@/lib/consts';
import {
  ClipboardDocumentIcon,
  FireIcon,
  HomeIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LocalBusiness, WithContext } from 'schema-dts';
import './globals.css';

// Font family
const inter = Inter({ subsets: ['latin'], display: 'swap' });

// Structured Data
const jsonLd: WithContext<LocalBusiness> = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Orbitgrowth Webdesign Agentur',
  legalName: 'Kosche und Langer GbR, Webdesign Agentur',
  url: BASE_URL,
  description:
    'Webdesign Agentur aus Ratingen, die sich auf die Entwicklung von Webseiten für lokale Unternehmen spezialisiert hat.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Friedrich-List-Straße 4',
    addressLocality: 'Ratingen',
    postalCode: '40882',
    addressCountry: 'DE',
    addressRegion: 'NRW',
    areaServed: 'DE',
  },
  telephone: '+4917657600680',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.3035628566591,
    longitude: 6.873863514371016,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '00:00',
      closes: '00:00',
    },
  ],
};

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'OrbitGrowth Webdesign Agentur aus Ratingen.',
    template: '%s | OrbitGrowth Webdesign Agentur',
  },
  description:
    'Webdesign Agentur aus Ratingen, die sich auf die Entwicklung von Webseiten für lokale Unternehmen spezialisiert hat.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: {
      default: 'OrbitGrowth Webdesign Agentur',
      template: '%s | OrbitGrowth Webdesign Agentur',
    },
    description: 'Webdesign Agentur aus Ratingen, NRW',
    url: BASE_URL,
    type: 'website',
    countryName: 'Germany',
    locale: 'DE',
  },
  twitter: {
    title: 'OrbitGrowth Webdesign Agentur',
    description: 'Webdesign Agentur aus Ratingen, NRW',
    card: 'summary_large_image',
  },
};

// Header Links
export const HeaderLinks: HeaderLink[] = [
  {
    target: '/test',
    title: 'Home',
    icon: <HomeIcon className="w-full" />,
  },
  {
    target: '/about',
    title: 'Über uns',
    icon: <UserIcon className="w-full" />,
  },
  {
    target: '/projects',
    title: 'Projekte',
    icon: <ClipboardDocumentIcon className="w-full" />,
  },
  {
    target: '/skills',
    title: 'Kompetenzen',
    icon: <FireIcon className="w-full" />,
  },
];

// Route Segment Configuration
export const dynamic = 'auto'; // cache as much as possible
export const dynamicParams = true; // dynamic segments not included in generateStaticParams are generated on demand
export const revalidate = 10800; // revalidate pages every 10800 seconds (3 hours)
export const runtime = 'nodejs'; // use default runtime (nodejs)
export const preferredRegion = 'all'; // set preferred region to all

// Layout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.className}>
      <body>
        {/* Bind Structured data to page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main>
          {children}
          <Footer links={siteConfig.footerNav} />
          <Analytics />
        </main>
      </body>
    </html>
  );
}
