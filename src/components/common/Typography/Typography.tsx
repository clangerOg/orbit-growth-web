import { cn } from '@/lib/utils';
import {
  TypographyProps,
  TypographyTag,
  typographyVariants,
} from './Typography.types';

const Typography: React.FC<TypographyProps> = ({
  className,
  variant = 'p',
  children,
  tag,
  ...props
}) => {
  let s: TypographyTag = 'p';

  if (tag != undefined) {
    s = tag;
  } else {
    if (variant == 'headerLink' || variant == 'overline' || variant == null) {
      s = 'p';
    } else {
      s = variant;
    }
  }

  const Component = s;

  return (
    <Component
      {...props}
      className={cn(typographyVariants({ variant, className }))}
    >
      {children}
    </Component>
  );
};

Typography.displayName = 'Typography';

export default Typography;
