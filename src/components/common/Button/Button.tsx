'use client';

// import { analytics } from '@/lib/firebase/config';
import { cn } from '@/lib/utils';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
// import { logEvent } from 'firebase/analytics';
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
      // onClick={async () => {
      //   const a = await analytics();

      //   if (a != null) {
      //     logEvent(a, 'generate_lead');
      //   }
      // }}
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
