import { cn } from '@/lib/utils';
import { PropsWithoutRef } from '@/types';
import { forwardRef } from 'react';

type ShellProps = PropsWithoutRef<HTMLDivElement, HTMLDivElement> & {};

export const Shell: React.FC<ShellProps> = forwardRef<
  HTMLDivElement,
  ShellProps
>((props, ref) => {
  const { className, children, ...other } = props;

  return (
    <section
      {...other}
      ref={ref}
      className={cn(
        'relative flex flex-col items-center justify-center',
        className
      )}
    >
      {children}
    </section>
  );
});
Shell.displayName = 'Shell';
