import classNames from 'classnames';
import Link from 'next/link';
import Button from '../../common/Button';
import Logo from '../../common/Logo/Logo';
import Section from '../../common/Section/Section';
import HeaderDropdown from '../HeaderDropdown/HeaderDropdown';
import { HeaderProps } from './Header.types';

const Header: React.FC<HeaderProps> = ({ links, className, ...props }) => {
  return (
    <Section
      {...props}
      className={classNames(
        'sticky top-0 z-40 border-b border-slate-200 bg-white',
        className
      )}
    >
      <Section.Wrapper>
        <Section.Content className="flex items-center justify-between py-6 ">
          <div className="block h-8 w-fit">
            <Logo woodmark />
          </div>
          <div className="hidden items-center gap-x-8 md:flex">
            {links &&
              links.map((link, key) => {
                return (
                  <Link href={link.target} key={key}>
                    <p className="text-sm font-semibold leading-6 text-slate-900">
                      {link.title}
                    </p>
                  </Link>
                );
              })}
            <Button href="/contact" size={'sm'}>
              Kontakt aufnehmen
            </Button>
          </div>
          <div className="flex items-center gap-x-4 md:hidden">
            <Button href="/contact" size={'sm'}>
              Kontakt
            </Button>
            <div className="mt-1">
              <HeaderDropdown links={links} />
            </div>
          </div>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
};

export default Header;
