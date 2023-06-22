import { SectionProps } from '@/components/common';
import React from 'react';
import { TeamMember } from '../../_types/TeamMember.types';

export type TeamProps = SectionProps & {
  team: TeamMember[];
};

export type TeamMemberCardProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  member: TeamMember;
};
