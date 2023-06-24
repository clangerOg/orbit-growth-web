import { cn } from '@/lib/utils';
import { PropsWithoutRef } from '@/types';
import React from 'react';

type SkillCardProps = PropsWithoutRef<HTMLDivElement, HTMLDivElement> & {
  title: string;
};

export const SkillCard: React.FC<SkillCardProps> = (props) => {
  const { title, className, children, ...other } = props;

  return (
    <div
      {...other}
      className={cn(
        'h-fit rounded-md p-6 bg-slate-50 text-slate-500',
        className
      )}
    >
      <p className={cn('text-base leading-7')}>
        <span className="font-semibold text-slate-900">{title}</span> {children}
      </p>
    </div>
  );
};

SkillCard.displayName = 'SkillCad';
