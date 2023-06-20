import { StaticImageData } from 'next/image';

export type ResponsiveImageProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  description?: string;
  src: string | StaticImageData;
};

export type ResponsiveImageRefType = HTMLDivElement;
