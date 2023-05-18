import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

export const buttonVariants = cva(
  'inline-flex justify-center rounded-lg text-sm font-semibold',
  {
    variants: {
      variant: {
        default: 'bg-neutral-900 text-white hover:bg-neutral-700',
        secondary: '',
      },
      size: {
        default: 'py-3 px-4',
        sm: 'py-2.5 px-4',
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
