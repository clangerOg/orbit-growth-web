'use client';

import { Menu } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { HeaderLink } from '../Header';
import { HeaderDropdownProps } from './HeaderDropdown.types';

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ links }) => {
  return (
    <div>
      <Menu>
        <Menu.Button>
          <Bars3Icon className="w-8 text-slate-900" />
        </Menu.Button>
        <Menu.Items className="absolute left-0 top-20 z-40 w-full rounded-b-md border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">
          <div className="flex flex-col gap-5 p-6">
            {links &&
              links.map((link: HeaderLink, key: number) => {
                return (
                  <Menu.Item key={key}>
                    <Link href={link.target}>
                      <div className="cursor-pointer font-medium text-slate-500 dark:text-slate-200">
                        <p>{link.title}</p>
                      </div>
                    </Link>
                  </Menu.Item>
                );
              })}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default HeaderDropdown;
