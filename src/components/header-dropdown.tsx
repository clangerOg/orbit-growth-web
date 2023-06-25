'use client';

import { NavItem } from '@/types';
import { Menu } from '@headlessui/react';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Bars3Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';
import Button from './common/Button';

type HeaderDropdownProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & { links?: NavItem[] };

export const HeaderDropdown: React.FC<HeaderDropdownProps> = (props) => {
  const { links } = props;

  return (
    <div>
      <Menu>
        <Menu.Button>
          <Bars3Icon className="w-8 text-slate-900" />
        </Menu.Button>
        <Menu.Items className="absolute left-0 top-20 z-40 w-full rounded-b-md border border-slate-200 bg-white shadow-lg">
          <div className="flex flex-col gap-6 p-6">
            {links &&
              links.map((link, index) => {
                return (
                  <Menu.Item key={`dd-menu-${index}`}>
                    <Link href={link.target}>
                      <div className="flex items-center gap-6">
                        <div className="w-10 flex-shrink-0 rounded-md bg-slate-100 p-2 text-slate-600">
                          {link.icon}
                        </div>
                        <div className="cursor-pointer font-medium text-slate-500">
                          <p>{link.title}</p>
                        </div>
                      </div>
                    </Link>
                  </Menu.Item>
                );
              })}
          </div>
          <div className="mt-12 flex items-center justify-between bg-slate-100 p-6">
            <p className="text-base font-medium text-slate-900">
              Ready for takeoff?
            </p>
            <Menu.Item>
              <Button href="/contact" size={'sm'} variant={'default'}>
                Kontakt
                <span>
                  <ArrowRightIcon className="w-4" />
                </span>
              </Button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};
