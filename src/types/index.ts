import { StaticImageData } from 'next/image';

export type Project = {
  date: string;
  title: string;
  desc: string;
  id: string;
  url: string | null;
  company: string;
  headerImage: StaticImageData | string;
  thumbnailImage: StaticImageData | string;
};

export type TeamMember = {
  name: string;
  position: string;
  imageSrc: string | StaticImageData;
  email: string;
};

export type NavItem = {
  title: string;
  target: string;
  icon?: React.JSX.Element;
};

export type PropsWithoutRef<T extends P, P> = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<T>, P>,
  'ref'
>;
