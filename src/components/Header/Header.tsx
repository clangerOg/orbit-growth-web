import Link from 'next/link';
import Logo from '../Logo/Logo';
import { HeaderProps } from './Header.types';

const links: { title: string; href: string }[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'Skills',
    href: '/skills',
  },
];

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="border-b border-neutral-200 flex justify-center items-center">
      <div className="max-w-screen-xl w-full py-8 flex justify-between items-center">
        <div className="h-10 w-fit flex-shrink-0">
          <Logo />
        </div>
        <div className="flex items-center gap-x-8">
          {links.map((l, key) => {
            return (
              <Link href={l.href} key={key}>
                <p className="text-sm leading-6 font-semibold text-neutral-900">
                  {l.title}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
