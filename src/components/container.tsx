import { cn } from '@/lib/utils';
import { PropsWithoutRef } from '@/types';
import React, { forwardRef } from 'react';

type ContainerProps = PropsWithoutRef<HTMLDivElement, HTMLDivElement> & {};

export const Container: React.FC<ContainerProps> = forwardRef<
  HTMLDivElement,
  ContainerProps
>((props, ref) => {
  const { className, children, ...other } = props;

  return (
    <div
      {...other}
      ref={ref}
      className={cn('container relative max-w-6xl px-6 mx-auto', className)}
    >
      {children}
    </div>
  );
});
Container.displayName = 'Container';
