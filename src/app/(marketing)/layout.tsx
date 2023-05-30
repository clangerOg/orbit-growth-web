import { Footer, Header, HeaderLink } from '@/components/layout';
import {
  ClipboardDocumentIcon,
  FireIcon,
  HomeIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { LocalBusiness, WithContext } from 'schema-dts';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const jsonLd: WithContext<LocalBusiness> = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Orbitgrowth Webdesign Agentur',
  legalName: 'Kosche und Langer GbR, Webdesign Agentur',
  url: 'https://orbitgrowth.de',
  description:
    'Webdesign Agentur aus Ratingen, die sich auch lokale Unternehmen spezialisiert hat.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Friedrich-List-Straße 4',
    addressLocality: 'Ratingen',
    postalCode: '40882',
    addressCountry: 'DE',
    addressRegion: 'NRW',
    areaServed: 'DE',
  },
  review: {
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '4',
      bestRating: '5',
    },
    author: {
      '@type': 'Person',
      name: 'Mike Jones',
    },
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

export const metadata: Metadata = {
  title: {
    default: 'OrbitGrowth',
    template: '%s | OrbitGrowth',
  },
  description: 'Webdesign Agentur aus Ratingen, NRW',
  alternates: {
    canonical: 'https://orbitgrowth.de/',
  },
  openGraph: {
    title: {
      default: 'OrbitGrowth',
      template: '%s | OrbitGrowth',
    },
    description: 'Webdesign Agentur aus Ratingen, NRW',
    url: 'https://orbitgrowth.de',
    type: 'website',
    countryName: 'Germany',
    locale: 'DE',
  },
  twitter: {
    title: 'OrbitGrowth',
    description: 'Webdesign Agentur aus Ratingen, NRW',
  },
};

const HeaderLinks: HeaderLink[] = [
  {
    target: '/',
    title: 'Home',
    icon: <HomeIcon className="w-full" />,
  },
  {
    target: '/about',
    title: 'About',
    icon: <UserIcon className="w-full" />,
  },
  {
    target: '/projects',
    title: 'Projects',
    icon: <ClipboardDocumentIcon className="w-full" />,
  },
  {
    target: '/skills',
    title: 'Skills',
    icon: <FireIcon className="w-full" />,
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.className}>
      <body>
        <Script
          id="structuredData"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main>
          <Header links={HeaderLinks} />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
