import { StaticImageData } from 'next/image';

export const ContributorSchema = {
  name: 'contributor',
  title: 'Mitarbeiter',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'profileImage',
      title: 'Profile Bild',
      type: 'image',
      //   options: {
      //     hotspot: true,
      //   },
    },
    {
      name: 'email',
      title: 'Email-Adresse',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'profileImage',
    },
  },
};

export type Contributor = {
  name: string;
  position: string;
  imageSrc: string | StaticImageData;
  email: string;
};
