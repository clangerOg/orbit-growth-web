import { cn } from '@/lib/utils';
import { PropsWithoutRef } from '@/types';

type ProcessCardProps = PropsWithoutRef<HTMLDivElement, HTMLDivElement> & {
  title: string;
};

export const ProcessCard: React.FC<ProcessCardProps> = (props) => {
  const { title, children, className, ...other } = props;

  return (
    <div
      {...other}
      className={cn('w-full rounded-md bg-slate-50 p-6', className)}
    >
      <p className="text-base leading-7 text-slate-500">
        <span className="font-semibold text-slate-900">{title} </span>{' '}
        {children}
      </p>
    </div>
  );
};
ProcessCard.displayName = 'ProcessCard';
