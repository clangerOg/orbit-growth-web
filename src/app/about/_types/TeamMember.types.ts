import { StaticImageData } from 'next/image';

export type TeamMember = {
  name: string;
  position: string;
  imageSrc: string | StaticImageData;
  email: string;
};
