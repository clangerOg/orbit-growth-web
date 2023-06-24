'use client';

import { cn } from '@/lib/utils';
import * as Form from '@radix-ui/react-form';
import React, { HTMLInputTypeAttribute, forwardRef } from 'react';

type FormFieldProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'ref'
> & {
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
  className?: string;
};

export const FormField: React.FC<FormFieldProps> = forwardRef<
  HTMLDivElement,
  FormFieldProps
>((props, ref) => {
  const { name, label, type, className, ...other } = props;

  return (
    <Form.Field
      {...other}
      ref={ref}
      name={name}
      className={cn('flex flex-col', className)}
    >
      <Form.Label className="mb-2.5 text-sm font-semibold text-neutral-900">
        {label}
      </Form.Label>
      <Form.Control asChild>
        <input
          required
          type={type}
          className="block w-full rounded-md border-0 bg-slate-50 px-3.5 py-2 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 data-[invalid]:ring-2 data-[valid]:ring-2 data-[invalid]:ring-red-500 data-[valid]:ring-emerald-500 sm:text-sm sm:leading-6"
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

FormField.displayName = 'FormField';

// export default FormField;
