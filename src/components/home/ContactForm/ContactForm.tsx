'use client';

import { buttonVariants } from '@/components/common';
import { PaperAirplaneIcon } from '@heroicons/react/20/solid';
import * as Form from '@radix-ui/react-form';
import classNames from 'classnames';
import { HTMLInputTypeAttribute } from 'react';
import { ContactFormProps } from './ContactForm.types';

const ContactForm: React.FC<ContactFormProps> = () => {
  return (
    <Form.Root className="grid grid-cols-2 gap-8">
      <FormField name="firstName" label="Vorname" type="text" />
      <FormField name="lastName" label="Nachname" type="text" />
      <FormField
        name="email"
        label="Email-Adresse"
        type="email"
        className="col-span-2"
      />
      <FormField
        name="company"
        label="Unternehmen"
        type="text"
        className="col-span-2"
      />
      <Form.Field name="message" className="flex flex-col col-span-2">
        <div className="flex justify-between items-center">
          <Form.Label className="text-sm font-semibold text-neutral-900 mb-2.5">
            Ihre Nachricht
          </Form.Label>
          <p className="text-sm text-slate-500">Max. 500 Characters</p>
        </div>
        <Form.Control asChild maxLength={500}>
          <textarea
            required
            className="bg-slate-50 block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 data-[invalid]:ring-2 data-[invalid]:ring-red-500 data-[valid]:ring-2 data-[valid]:ring-emerald-500"
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button
          className={buttonVariants({
            variant: 'default',
            size: 'default',
            className: 'w-full col-span-2',
          })}
        >
          Absenden
          <span className="w-4">
            <PaperAirplaneIcon className="w-full" />
          </span>
        </button>
      </Form.Submit>
    </Form.Root>
  );
};

const FormField: React.FC<{
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
  className?: string;
}> = ({ name, label, type, className }) => {
  return (
    <Form.Field name={name} className={classNames('flex flex-col', className)}>
      <Form.Label className="text-sm font-semibold text-neutral-900 mb-2.5">
        {label}
      </Form.Label>
      <Form.Control asChild>
        <input
          required
          type={type}
          className="bg-slate-50 block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 data-[invalid]:ring-2 data-[invalid]:ring-red-500 data-[valid]:ring-2 data-[valid]:ring-emerald-500"
        />
      </Form.Control>
      <Form.Message match={'valueMissing'}>
        <p className="mt-1.5 text-sm text-slate-600">
          Dieses Feld wird benötigt
        </p>
      </Form.Message>
      {type == 'email' && (
        <Form.Message match={'typeMismatch'}>
          <p className="mt-1.5 text-sm text-slate-600">
            Dieses Feld muss eine Email Adresse enthalten
          </p>
        </Form.Message>
      )}
    </Form.Field>
  );
};

export default ContactForm;
