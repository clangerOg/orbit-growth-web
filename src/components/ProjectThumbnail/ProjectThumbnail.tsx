import { formatTags } from '@/lib/utils';
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
      <div
        {...props}
        className={classNames(
          'relative rounded-lg flex justify-center items-end w-full h-72 md:h-96',
          className
        )}
      >
        <Image
          className="absolute w-full h-full object-center object-cover rounded-lg"
          fill
          alt=""
          src={project.thumbnailSrc}
        />
        <div className="relative z-20 w-full p-6 md:p-8 bg-white/90 backdrop-blur-sm rounded-b-lg">
          <p className="text-lg font-semibold text-slate-900">
            {project.title}
          </p>
          <p className="text-base mt-1 text-slate-500">
            {formatTags(project.tags)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectThumbnail;
