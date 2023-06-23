import { BuildingOfficeIcon, EnvelopeIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { forwardRef } from 'react';
import { TeamMemberCardProps } from './TeamSection.types';

const TeamMemberCard: React.FC<TeamMemberCardProps> = forwardRef<
  HTMLDivElement,
  TeamMemberCardProps
>((props, ref) => {
  const { member, className, ...other } = props;
  const { email, imageSrc, name, position } = member;

  return (
    <div {...other} ref={ref} className={classNames(className)}>
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
});

TeamMemberCard.displayName = 'TeamMemberCard';

export default TeamMemberCard;
