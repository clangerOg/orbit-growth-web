import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

export type TypographyTag = Extract<
  keyof React.JSX.IntrinsicElements,
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'small'
  | 'em'
  | 'strong'
>;

export const typographyVariants = cva('antialiased', {
  variants: {
    variant: {
      h1: 'sm:text-6xl sm:leading-none text-4xl leading-10 text-neutral-900 font-bold tracking-tight',
      h2: 'text-lg leading-8 text-neutral-600 max-w-2xl',
      h3: 'sm:text-4xl text-3xl text-neutral-900 font-bold tracking-tight',
      h4: 'text-lg leading-8 text-neutral-600 max-w-2xl',
      h5: 'text-base max-w-prose text-slate-900 font-semibold',
      h6: '',
      p: 'leading-7 font-normal text-neutral-700 text-base',
      span: '',
      small: '',
      em: '',
      strong: '',
      headerLink: 'leading-6 font-semibold text-sm text-neutral-900',
      overline: 'leading-7 font-semibold text-blue-600 text-base',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

export type TypographyProps = React.HtmlHTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof typographyVariants> & {
    tag?: TypographyTag;
  };
