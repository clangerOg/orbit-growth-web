import React, { HTMLInputTypeAttribute } from 'react';

export type ContactFormProps = React.HtmlHTMLAttributes<HTMLFormElement> & {};

export type ContactFormFieldProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
  className?: string;
};
