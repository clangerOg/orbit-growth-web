import { formatTags } from '@/lib/utils';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectThumbnailProps } from './ProjectThumbnail.types';

const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({
  project,
  className,
  ...props
}) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group">
        <div
          {...props}
          className={classNames(
            'relative rounded-lg flex justify-center items-end w-full h-72 md:h-96 group border border-slate-200',
            className
          )}
        >
          <Image
            className="absolute w-full h-full object-center object-cover rounded-lg"
            fill
            alt=""
            src={project.thumbnailSrc}
          />
          {/* <div className="relative z-20 w-full p-6 md:p-8 rounded-b-lg h-full bg-gradient-to-t from-stone-900/90 to-stone-900/0 flex flex-col items-start justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-150">
          <p className="text-lg font-semibold text-white">{project.title}</p>
          <p className="text-base mt-1 text-slate-300">
            {formatTags(project.tags)}
          </p>
        </div> */}
        </div>
        <div className="mt-6 flex flex-nowrap gap-8 items-center px-3">
          <div className="grow">
            <p className="text-base font-medium text-slate-900">
              {project.title}
            </p>
            <p className="text-sm mt-1 text-slate-500">
              {formatTags(project.tags)}
            </p>
          </div>
          <div className="flex-shrink-0 w-6 text-slate-900">
            <ArrowUpRightIcon className="w-full group-hover:rotate-45 transition-transform duration-150" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectThumbnail;
