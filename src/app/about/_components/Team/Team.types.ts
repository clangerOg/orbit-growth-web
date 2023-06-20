import { SectionProps } from '@/components/common';
import { StaticImageData } from 'next/image';
import React from 'react';

export type TeamProps = SectionProps & {
  team: TeamMember[];
};

export type TeamMember = {
  name: string;
  position: string;
  imageSrc: string | StaticImageData;
  email: string;
};

export type TeamMemberCardProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  member: TeamMember;
};
