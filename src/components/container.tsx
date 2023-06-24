import { cn } from '@/lib/utils';

type ContainerProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children?: React.ReactNode;
  layout?: 'default';
};

export default async function Container(props: ContainerProps) {
  const { className, layout = 'default', children, ...other } = props;

  return (
    <div
      {...other}
      className={cn('container relative max-w-6xl px-6 mx-auto', className)}
    >
      {children}
    </div>
  );
}
