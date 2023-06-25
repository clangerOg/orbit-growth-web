import { cn } from '@/lib/utils';
import { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type ProjectThumbnailProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  project: Project;
};

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = (props) => {
  const { project, className, ...other } = props;
  const { company, date, id, thumbnailImage, title } = project;

  return (
    <Link href={`/projects/${id}`}>
      <div
        {...other}
        className={cn(
          'rounded-xl bg-slate-50 p-4 transition-colors hover:bg-slate-100 ',
          className
        )}
      >
        <Image
          src={thumbnailImage}
          alt={`Thumbnail for Project ${title}`}
          className="rounded-lg shadow"
        />
        <div className="mt-6 px-2">
          <p className="text-base font-semibold text-slate-900">{title}</p>
          <p className="mt-1 inline-flex items-center gap-3 text-sm text-slate-500">
            {date} <span className="shrink-0 text-xs text-slate-400">●</span>
            {company}
          </p>
        </div>
      </div>
    </Link>
  );
};
