'use client';

import { HeaderLinks } from '@/app/layout';
import { Button, Logo, Section } from '@/components/common';
import { HeaderDropdown } from '@/components/layout';
import classNames from 'classnames';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

export const Header: React.FC = () => {
  const ref = useRef(null);

  const [scrolled, setScrolled] = useState<boolean>(false);

  const onScroll = () => {
    const scroll = window.scrollY;
    const offset = 50;

    console.log('Scroll Y', scroll);

    if (scroll > offset) {
      //   console.log('set scrolled to true');
      setScrolled(true);
    }

    if (scroll < offset) {
      //   console.log('set scrolled to false');
      setScrolled(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [ref]);

  useEffect(() => {
    console.log('Scroll changed:', scrolled);
  }, [scrolled]);

  useEffect(() => {
    console.log('Trying to change scroll');
  }, [setScrolled]);

  return (
    <div
      ref={ref}
      className={classNames(
        ' flex w-full flex-col items-center justify-center z-40 sticky md:fixed top-0 bg-white border-b border-slate-200 md:border-0 transition-colors',
        scrolled ? 'md:bg-white' : 'md:bg-transparent'
      )}
    >
      <Section.Wrapper>
        <Section.Content className="py-6 flex justify-between items-center ">
          <div className="h-8 w-fit block">
            <Logo woodmark light={!scrolled} />
          </div>
          <div className="items-center gap-x-8 hidden md:flex">
            {HeaderLinks &&
              HeaderLinks.map((link, key) => {
                return (
                  <Link href={link.target} key={key}>
                    <p
                      className={classNames(
                        'text-sm leading-6 font-semibold ',
                        scrolled ? 'text-slate-900' : 'text-white'
                      )}
                    >
                      {link.title}
                    </p>
                  </Link>
                );
              })}
            <Button
              href="/contact"
              size={'sm'}
              variant={scrolled ? 'default' : 'tertiary'}
              className="transition-colors duration-300"
            >
              Kontakt aufnehmen
            </Button>
          </div>
          <div className="flex items-center gap-x-4 md:hidden">
            <Button
              href="/contact"
              size={'sm'}
              variant={scrolled ? 'default' : 'default'}
            >
              Kontakt
            </Button>
            <div className="mt-1">
              <HeaderDropdown links={HeaderLinks} />
            </div>
          </div>
        </Section.Content>
      </Section.Wrapper>
    </div>
  );
};

export default Header;
