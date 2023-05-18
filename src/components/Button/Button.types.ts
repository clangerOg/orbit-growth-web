import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

export const buttonVariants = cva(
  'inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700',
  {
    variants: {
      variant: {
        default: 'text-white bg-neutral-900',
        secondary: '',
      },
      size: {
        default: '', // px-5 py-3 text-sm
        sm: 'px-3 py-2 text-xs',
        lg: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export type ButtonProps = React.HtmlHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants> & {
    href: string;
  };
