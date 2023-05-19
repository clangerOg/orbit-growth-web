import { Footer, Header, HeaderLink } from '@/components';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const HeaderLinks: HeaderLink[] = [
  {
    target: '/',
    title: 'Home',
  },
  {
    target: '/about',
    title: 'About',
  },
  {
    target: '/projects',
    title: 'Projects',
  },
  {
    target: '/skills',
    title: 'Skills',
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Header links={HeaderLinks} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
