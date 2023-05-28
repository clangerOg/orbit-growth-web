'use client';

import { cn } from '@/lib/utils';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { ButtonProps, buttonVariants } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  className,
  size,
  variant,
  children,
  useDefaultArrow,
  ...props
}) => {
  return (
    <Link
      {...props}
      scroll={false}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
      {useDefaultArrow && (
        <span>
          <ArrowRightIcon className="w-4" />
        </span>
      )}
    </Link>
  );
};

Button.displayName = 'Button';

export default Button;
