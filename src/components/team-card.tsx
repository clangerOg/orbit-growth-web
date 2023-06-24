import { TeamMember } from '@/types';
import { BuildingOfficeIcon, EnvelopeIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type TeamCardProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  member: TeamMember;
};

export const TeamCard: React.FC<TeamCardProps> = (props) => {
  const { member, ...other } = props;
  const { email, imageSrc, name, position } = member;

  return (
    <div {...other}>
      <div className="group relative h-96 w-full">
        <Image
          src={imageSrc}
          alt={`Profile Image for ${name}`}
          fill
          className="rounded-lg object-cover object-center"
        />
      </div>
      <p className="mt-6 text-base font-semibold text-slate-900">{name}</p>
      <p className="mt-1 inline-flex items-center gap-2 text-sm text-slate-600">
        <BuildingOfficeIcon className="w-4 text-slate-400" />
        {position}
      </p>
      <Link
        href={`mailto:${email}`}
        className="mt-1 inline-flex items-center gap-2 text-sm text-slate-600"
      >
        <EnvelopeIcon className="w-4 text-slate-400" />
        {email}
      </Link>
    </div>
  );
};

TeamCard.displayName = 'TeamCard';
