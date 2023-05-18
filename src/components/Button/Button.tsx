'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ButtonProps, buttonVariants } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  className,
  size,
  variant,
  children,
  ...props
}) => {
  return (
    <Link
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </Link>
  );
};

Button.displayName = 'Button';

export default Button;
