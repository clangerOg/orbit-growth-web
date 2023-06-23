import { SectionProps } from '@/components/common';
import { TeamMember } from '@/lib/types';
import React from 'react';

export type TeamSectionProps = SectionProps & {
  team: TeamMember[];
};

export type TeamMemberCardProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  member: TeamMember;
};
