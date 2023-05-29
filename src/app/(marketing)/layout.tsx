import { Footer, Header, HeaderLink } from '@/components/layout';
import {
  ClipboardDocumentIcon,
  FireIcon,
  HomeIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'OrbitGrowth',
    template: '%s | OrbitGrowth',
  },
  description: 'Webdesign Agentur aus Ratingen, NRW',
  alternates: {
    canonical: 'https://orbitgrowth.de/',
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
        <main>
          <Header links={HeaderLinks} />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
