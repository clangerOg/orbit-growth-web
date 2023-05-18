'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { forwardRef } from 'react';
import { ButtonProps, buttonVariants } from './Button.types';

const Button: React.FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, size, variant, children, ...props }, ref) => {
  return (
    <Link
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </Link>
  );
});

Button.displayName = 'Button';

export default Button;
