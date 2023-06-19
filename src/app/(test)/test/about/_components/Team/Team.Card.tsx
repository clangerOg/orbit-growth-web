import classNames from 'classnames';
import Image from 'next/image';
import { forwardRef } from 'react';
import { TeamMemberCardProps } from './Team.types';

const TeamMemberCard: React.FC<TeamMemberCardProps> = forwardRef<
  HTMLDivElement,
  TeamMemberCardProps
>((props, ref) => {
  const { member, className, ...other } = props;
  const { email, imageSrc, name, position } = member;

  return (
    <div {...other} ref={ref} className={classNames(className)}>
      <div className="w-full relative h-96 group">
        <Image
          src={imageSrc}
          alt={`Profile Image for ${name}`}
          fill
          className="object-cover object-center rounded-lg"
        />
      </div>
      <p className="text-base font-semibold text-slate-900 mt-6">
        {name} ({email})
      </p>
      <p className="text-sm text-slate-600 mt-1">{position}</p>
    </div>
  );
});

TeamMemberCard.displayName = 'TeamMemberCard';

export default TeamMemberCard;
