'use client';

import * as Form from '@radix-ui/react-form';
import classNames from 'classnames';
import { forwardRef } from 'react';
import { ContactFormFieldProps } from './ContactForm.types';

const ContactFormField: React.FC<ContactFormFieldProps> = forwardRef<
  HTMLDivElement,
  ContactFormFieldProps
>((props, ref) => {
  const { name, label, type, className, ...other } = props;

  return (
    <Form.Field
      {...other}
      ref={ref}
      name={name}
      className={classNames('flex flex-col', className)}
    >
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
});

ContactFormField.displayName = 'ContactFormField';

export default ContactFormField;
