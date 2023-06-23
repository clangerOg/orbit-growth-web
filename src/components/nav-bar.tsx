import { cn } from '@/lib/utils';
import { NavLink } from '@/types';
import Link from 'next/link';
import { Button, Logo } from './common';
import Container from './container';
import Shell from './shell';

type NavBarProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  links?: NavLink[];
};

export default async function NavBar(props: NavBarProps) {
  const { className, links, ...other } = props;

  return (
    <Shell {...other} className={cn(className)}>
      <Container className="flex items-center justify-between py-6">
        <div className="block h-8 w-fit">
          <Link href={'/'}>
            <Logo woodmark />
          </Link>
        </div>

        <ul className="hidden items-center gap-x-8 md:flex">
          {links &&
            links.map((link, index) => {
              return (
                <li key={`nav-i-${index}`}>
                  <Link href={link.target}>
                    <p className="text-sm font-semibold leading-6 text-slate-900">
                      {link.title}
                    </p>
                  </Link>
                </li>
              );
            })}
          <Button href="/contact" size={'sm'}>
            Kontakt aufnehmen
          </Button>
        </ul>
      </Container>
    </Shell>
  );
}
