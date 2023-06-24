import { cn } from '@/lib/utils';
import { NavItem } from '@/types';
import Link from 'next/link';
import { Container } from './container';
import { Shell } from './shell';

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  links?: NavItem[];
};

export default async function Footer(props: FooterProps) {
  const { className, links, ...other } = props;

  return (
    <Shell {...other} className={cn('bg-slate-900', className)}>
      <Container className="py-16">
        <ul className="mb-8 flex flex-wrap items-center justify-center gap-8 border-b border-slate-800 px-6 pb-8 text-base font-normal text-slate-200">
          {links &&
            links.map((link, index) => {
              return (
                <li key={`footer-nav-${index}`}>
                  <Link href={link.target}>
                    <span className="transition-colors hover:text-slate-400">
                      {link.title}
                    </span>
                  </Link>
                </li>
              );
            })}
        </ul>
        <div className="px-6">
          <p className="text-center text-sm text-slate-400">
            © 2023 Kosche Langer GbR, Webdesign Agentur. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </Container>
    </Shell>
  );
}
