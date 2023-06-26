'use client';

import { cn } from '@/lib/utils';
import { Disclosure } from '@headlessui/react';
import { PlusIcon } from '@heroicons/react/24/solid';
import React from 'react';

type FAQDisclosureProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  question: string;
  answer: string;
};

export const FAQDisclosure: React.FC<FAQDisclosureProps> = (props) => {
  const { question, answer, className, ...other } = props;

  return (
    <div {...other} className={cn('w-full', className)}>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className={'w-full'}>
              <div className="flex w-full items-center justify-between gap-8 py-8">
                <p className="text-left text-lg font-medium text-slate-900">
                  {question}
                </p>
                <div
                  className={cn(
                    'w-8 flex-shrink-0 text-slate-600 transition-transform duration-150',
                    open ? 'rotate-45' : 'rotate-0'
                  )}
                >
                  <PlusIcon className="w-full" />
                </div>
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className={'pb-8'}>
              <p className="max-w-prose text-base text-slate-600">{answer}</p>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};
