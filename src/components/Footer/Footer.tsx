import Link from 'next/link';
import Button from '../Button/Button';
import Section from '../Section/Section';
import { TemplateProps } from './Footer.types';

const footerLinks: { title: string; href: string }[] = [
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
    title: 'Contact',
    href: '/contact',
  },
  {
    title: 'Skills',
    href: '/skills',
  },
  {
    title: 'Legal',
    href: '/legal',
  },
  {
    title: 'CMS',
    href: '/studio',
  },
];

('inline-flex justify-center rounded-lg text-sm font-semibold transition-colors inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-white/80 py-3 px-4');

('inline-flex justify-center rounded-lg text-sm font-semibold transition-colors inline-flex items-center gap-2 bg-tranparent text-white hover:text-slate-300 py-3 px-4');

const Template: React.FC<TemplateProps> = () => {
  return (
    <>
      {/* About */}
      <Section className="antialiased border-b border-slate-200/90 border-dashed">
        <Section.Wrapper className="py-52 border-0 md:border-x border-dashed border-inherit">
          <Section.Content className="flex justify-center items-center">
            <div className="bg-slate-900 w-full rounded-lg flex flex-wrap justify-between items-center p-8 md:p-16 shadow-xl gap-16">
              <div>
                <h3 className="sm:text-4xl text-3xl text-white font-bold tracking-tight max-w-md">
                  Are you ready for takeoff? We are!
                </h3>
              </div>
              <div className="flex flex-wrap gap-6 md:gap-8 items-center">
                <Button href="/contact" variant={'tertiary'}>
                  Kontakt aufnehmen
                </Button>
                <Button href="/projects" variant={'quaternary'}>
                  Projekte betrachten
                </Button>
              </div>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      <Section className="antialiased border-slate-200/90 border-dashed">
        <Section.Wrapper className="border-0 md:border-x border-dashed border-inherit !px-0">
          <Section.Content className="py-16">
            <div className="flex flex-wrap gap-8 text-base text-slate-500 mb-8 font-normal justify-center items-center px-6 border-b border-slate-200/90 border-dashed pb-8">
              {footerLinks.map((link, key) => {
                return (
                  <Link href={link.href} key={key}>
                    <span className="hover:text-slate-700 transition-colors">
                      {link.title}
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="px-6">
              <p className="text-center text-sm text-slate-400">
                © 2020 Your Company, Inc. All rights reserved.
              </p>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
    </>
  );
};

export default Template;
