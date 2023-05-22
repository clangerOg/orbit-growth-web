'use client';

import { Disclosure } from '@headlessui/react';
import { PlusIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import { FAQDisclosureProps } from './FAQDisclosure.types';

const FAQDisclosure: React.FC<FAQDisclosureProps> = ({
  question,
  answer,
  className,
  ...props
}) => {
  return (
    <div {...props} className={classNames('w-full', className)}>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className={'w-full'}>
              <div className="py-8 flex items-center justify-between w-full gap-8">
                <p className="text-lg text-slate-900 font-medium text-left">
                  {question}
                </p>
                <div
                  className={classNames(
                    'w-8 transition-transform duration-150 flex-shrink-0 text-slate-600',
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

export default FAQDisclosure;
