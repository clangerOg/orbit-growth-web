import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

export const buttonVariants = cva(
  'inline-flex justify-center rounded-lg text-sm font-semibold transition-colors inline-flex items-center gap-2 focus:ring-2 outline-none focus:outline-none focus:ring-offset-4',
  {
    variants: {
      variant: {
        default:
          'bg-slate-900 text-white hover:bg-slate-700 focus:ring-blue-600',
        secondary:
          'bg-tranparent text-slate-900 hover:text-slate-600 focus:ring-blue-600',
        tertiary: 'bg-white text-slate-900 hover:bg-white/80',
        quaternary: 'bg-tranparent text-white hover:text-slate-300',
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
    useDefaultArrow?: boolean;
  };
