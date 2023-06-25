import { NavItem } from '@/types';
import {
  ClipboardDocumentIcon,
  HomeIcon,
  UserIcon,
} from '@heroicons/react/24/solid';

export type SiteConfig = typeof siteConfig;

const mainNav: NavItem[] = [
  {
    target: '/',
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
  // {
  //   target: '/skills',
  //   title: 'Kompetenzen',
  //   icon: <FireIcon className="w-full" />,
  // },
];

export const siteConfig = {
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
};
