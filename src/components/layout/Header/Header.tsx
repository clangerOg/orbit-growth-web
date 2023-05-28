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
        'border-b border-slate-200 sticky top-0 bg-white z-40',
        className
      )}
    >
      <Section.Wrapper>
        <Section.Content className="py-6 flex justify-between items-center ">
          <div className="h-8 w-fit block">
            <Logo woodmark />
          </div>
          <div className="items-center gap-x-8 hidden md:flex">
            {links &&
              links.map((link, key) => {
                return (
                  <Link href={link.target} key={key}>
                    <p className="text-sm leading-6 font-semibold text-slate-900">
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
