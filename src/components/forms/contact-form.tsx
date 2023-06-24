'use client';

import { buttonVariants } from '@/components/common';
import { cn } from '@/lib/utils';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/20/solid';
import * as Form from '@radix-ui/react-form';
import React, { forwardRef, useState } from 'react';
import { FormField } from '../form-field';

type ContactFormProps = Omit<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >,
  'ref'
> & {};

export const ContactForm: React.FC = forwardRef<
  HTMLFormElement,
  ContactFormProps
>((props, ref) => {
  const { className, ...other } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [res, setRes] = useState<{
    type: 'success' | 'warning' | 'error';
    title: string;
    value?: any;
  } | null>(null);

  async function handleSubmit(event: any) {
    event.preventDefault();

    setIsLoading(true);

    const data = {
      firstName: String(event.target.firstName.value),
      lastName: String(event.target.lastName.value),
      email: String(event.target.email.value),
    };

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setIsLoading(false);
      setRes({
        title: 'Wir haben deine Nachricht erhlaten!',
        type: 'success',
        value: `Deine Nachricht wurde erfolgreich versendet! Wir werden und so schnell wie möglich bei dir zurück melden.`,
      });
    }
    if (!response.ok) {
      setIsLoading(false);
      setRes({
        title: 'Es ist ein Felher aufgetreten!',
        type: 'error',
        value: `Ein unerwarteter Fehler ist aufgetreten: ${response.statusText}`,
      });
    }
  }

  return (
    <Form.Root
      {...other}
      ref={ref}
      className={cn('grid grid-cols-2 gap-8', className)}
      onSubmit={handleSubmit}
    >
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
      <Form.Field name="message" className="col-span-2 flex flex-col">
        <div className="flex items-center justify-between">
          <Form.Label className="mb-2.5 text-sm font-semibold text-neutral-900">
            Ihre Nachricht
          </Form.Label>
          <p className="text-sm text-slate-500">Max. 500 Characters</p>
        </div>
        <Form.Control asChild maxLength={500}>
          <textarea
            required
            className="block w-full rounded-md border-0 bg-slate-50 px-3.5 py-2 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 data-[invalid]:ring-2 data-[valid]:ring-2 data-[invalid]:ring-red-500 data-[valid]:ring-emerald-500 sm:text-sm sm:leading-6"
          />
        </Form.Control>
      </Form.Field>

      {res && (
        <div
          className={cn(
            'col-span-2 rounded-lg p-4',
            res.type == 'error' && 'bg-red-500',
            res.type == 'success' && 'bg-green-500'
          )}
        >
          <p className="inline-flex items-center font-medium text-white">
            <span className="mr-2 w-5 flex-shrink-0">
              {res.type == 'error' && (
                <ExclamationCircleIcon className="w-full" />
              )}
              {res.type == 'success' && <CheckCircleIcon className="w-full" />}
            </span>
            {res.title}
          </p>
          <p className="mt-2 text-sm font-light text-white">{res.value}</p>
        </div>
      )}

      <Form.Submit asChild>
        <button
          className={buttonVariants({
            variant: 'default',
            size: 'default',
            className:
              'col-span-2 w-full disabled:cursor-not-allowed disabled:opacity-75',
          })}
          disabled={isLoading}
        >
          {!isLoading ? (
            <>
              Absenden
              <span className="w-4">
                <PaperAirplaneIcon className="w-full" />
              </span>
            </>
          ) : (
            <div role="status">
              <svg
                aria-hidden="true"
                className="mr-2 h-4 w-4 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </button>
      </Form.Submit>
    </Form.Root>
  );
});
ContactForm.displayName = 'ContactForm';
