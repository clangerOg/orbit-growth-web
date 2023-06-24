import { NavItem } from '@/types';
import {
  ClipboardDocumentIcon,
  FireIcon,
  HomeIcon,
  UserIcon,
} from '@heroicons/react/24/solid';

export type SiteConfig = typeof siteConfig;

const mainNav: NavItem[] = [
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

export const siteConfig = {
  name: 'Skateshop13',
  description:
    'An open source e-commerce skateshop build with everything new in Next.js 13.',
  url: 'https://skateshop13.vercel.app/',
  ogImage: 'https://skateshop13.vercel.app/opengraph-image.png',
  mainNav: mainNav,
  footerNav: [
    ...mainNav,
    {
      target: '/imprint',
      title: 'Impressum',
    },
    {
      target: '/privacy-policy',
      title: 'Datenschutzerklärung',
    },
  ],
  links: {
    twitter: 'https://twitter.com/sadmann17',
    github: 'https://github.com/sadmann7/skateshop',
  },
};
