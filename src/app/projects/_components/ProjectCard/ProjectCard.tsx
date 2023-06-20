import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { forwardRef } from 'react';
import { ProjectCardProps } from './ProjectCard.types';

const ProjectCard: React.FC<ProjectCardProps> = forwardRef<
  HTMLDivElement,
  ProjectCardProps
>((props, ref) => {
  const { project, className, ...other } = props;
  // const { date, desc, id, title, company, headerImage, thumbnailImage, url } =
  //   project;

  const { id } = project;

  return (
    <Link href={`/projects/${id}`}>
      <div
        {...other}
        ref={ref}
        className={classNames(
          'rounded-xl p-4 bg-slate-50 hover:bg-slate-100 transition-colors ',
          className
        )}
      >
        <Image
          src={project.thumbnailImage}
          alt={`Thumbnail for Project ${project.title}`}
          className="rounded-lg shadow"
        />
        <div className="mt-6 px-2">
          <p className="text-base font-semibold text-slate-900">
            {project.title}
          </p>
          <p className="mt-1 text-sm text-slate-500 inline-flex items-center gap-3">
            {project.date}{' '}
            <span className="text-slate-400 shrink-0 text-xs">●</span>
            {project.company}
          </p>
        </div>
      </div>
    </Link>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
