import { cn } from '@/lib/utils';
import { PropsWithoutRef } from '@/types';
import Image, { StaticImageData } from 'next/image';
import React, { forwardRef } from 'react';
import Container from './container';
import Shell from './shell';

type FigureProps = PropsWithoutRef<HTMLDivElement, HTMLDivElement> & {
  image: string | StaticImageData;
  caption?: string;
  alt?: string;
};

export const Figure: React.FC<FigureProps> = forwardRef<
  HTMLDivElement,
  FigureProps
>((props, ref) => {
  const { className, image, caption, alt, ...other } = props;

  return (
    <Shell {...other} ref={ref} className={cn(className)}>
      <div className="w-full border-y overflow-hidden border-slate-200 bg-slate-100">
        <Container>
          <Image
            src={image}
            alt={alt || 'Image preview of Project'}
            className="border-x border-inherit"
          />
        </Container>
      </div>
      <Container>
        <div className="border-l border-slate-200 py-6 pl-6">
          <small className="prose prose-slate">Hello {caption} </small>
        </div>
      </Container>
    </Shell>
  );
});

Figure.displayName = 'Figure';
