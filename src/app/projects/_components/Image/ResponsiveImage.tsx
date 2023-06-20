import classNames from 'classnames';
import Image from 'next/image';
import { forwardRef } from 'react';
import {
  ResponsiveImageProps,
  ResponsiveImageRefType,
} from './ResponsiveImage.types';

const ResponsiveImage: React.FC<ResponsiveImageProps> = forwardRef<
  ResponsiveImageRefType,
  ResponsiveImageProps
>((props, ref) => {
  const { className, description, src, ...other } = props;

  return (
    <div
      ref={ref}
      className={classNames('not-prose w-full bg-red-500', className)}
    >
      <div className="bg">
        <Image
          src={src}
          alt={description || 'Not alt text found'}
          width={5000}
          height={200}
        />
      </div>
    </div>
  );
});

ResponsiveImage.displayName = 'ResponsiveImage';

export default ResponsiveImage;
