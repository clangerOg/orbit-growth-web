import { VariantProps, cva } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './HeroSection.module.css';

export const detailVariants = cva(
  'absolute from-sky-500/0 via-sky-500 to-fuchsia-500 z-30 opacity-40',
  {
    variants: {
      direction: {
        vertical: 'bg-gradient-to-t w-[2px]',
        horizontal: 'bg-gradient-to-r h-[2px]',
      },
      size: {
        md: '',
      },
    },
    compoundVariants: [
      {
        direction: 'horizontal',
        size: 'md',
        class: 'w-[20rem]',
      },
      {
        direction: 'vertical',
        size: 'md',
        class: 'h-[14rem]',
      },
    ],
    defaultVariants: {
      direction: 'horizontal',
      size: 'md',
    },
  }
);

type DetailVariantProps = VariantProps<typeof detailVariants>;
type DetailProps = React.HtmlHTMLAttributes<HTMLDivElement> &
  Omit<DetailVariantProps, 'direction' | 'size'> &
  Required<Pick<DetailVariantProps, 'direction' | 'size'>>;

const Detail: React.FC<DetailProps> = ({
  direction,
  size,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={twMerge(
        clsx(detailVariants({ direction, size, className })),
        direction == 'vertical' && styles.animateVertical,
        direction == 'horizontal' && styles.animateHorizontal
      )}
    />
  );
};

export default Detail;
