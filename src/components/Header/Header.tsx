import classNames from 'classnames';
import Link from 'next/link';
import Button from '../Button';
import HeaderDropdown from '../HeaderDropdown/HeaderDropdown';
import Logo from '../Logo/Logo';
import Section from '../Section/Section';
import { HeaderProps } from './Header.types';

const Header: React.FC<HeaderProps> = ({ links, className, ...props }) => {
  return (
    <Section
      {...props}
      className={classNames(
        'border-b border-slate-200 sticky top-0 bg-white z-30',
        className
      )}
    >
      <Section.Wrapper>
        <Section.Content className="py-8 flex justify-between items-center ">
          {/* <div className="h-10 block sm:hidden bg-blue-700">
            <Logo />
          </div> */}
          <div className="h-10 w-fit block">
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
            <HeaderDropdown links={links} />
          </div>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
};

export default Header;
