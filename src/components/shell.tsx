import { cn } from '@/lib/utils';

type ShellProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children?: React.ReactNode;
  layout?: 'default';
};

export default async function Shell(props: ShellProps) {
  const { className, layout = 'default', children, ...other } = props;

  return (
    <section
      {...other}
      className={cn(
        'relative flex flex-col items-center justify-center',
        className
      )}
    >
      {children}
    </section>
  );
}
