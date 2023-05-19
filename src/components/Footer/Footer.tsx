import Link from 'next/link';
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
];

const Template: React.FC<TemplateProps> = () => {
  return (
    <Section>
      <Section.Wrapper>
        <Section.Content className="border-t border-neutral-200 py-16">
          <div className="flex flex-wrap gap-8 text-base text-neutral-500 mb-8 font-normal justify-center items-center">
            {footerLinks.map((link, key) => {
              return (
                <Link href={link.href} key={key}>
                  <span className="hover:text-neutral-700 transition-colors">
                    {link.title}
                  </span>
                </Link>
              );
            })}
          </div>
          <p className="text-center text-sm text-neutral-400">
            © 2020 Your Company, Inc. All rights reserved.
          </p>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
};

export default Template;
