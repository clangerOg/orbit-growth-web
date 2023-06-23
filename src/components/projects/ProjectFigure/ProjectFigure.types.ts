import { StaticImageData } from 'next/image';
import React from 'react';

export type ProjectFigureProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  image: string | StaticImageData;
  caption?: string;
  alt?: string;
};
