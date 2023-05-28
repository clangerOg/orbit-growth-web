import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectThumbnailProps } from './ProjectThumbnail.types';

const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({
  project,
  className,
  ...props
}) => {
  return (
    <Link href={`projects/${project.slug}`}>
      <div {...props} className="w-full h-52 md:h-96 relative group">
        <div className="w-full h-full flex justify-center items-center bg-slate-900/50 opacity-0 group-hover:opacity-100 rounded-lg z-20 absolute transition-opacity duration-150 p-8">
          <div className="rounded-full border-2 border-slate-400 px-2.5 py-1">
            <p className="text-white font-medium inline-flex items-center justify-center gap-2 text-sm">
              {project.title}
              <span className="w-4">
                <ArrowUpRightIcon className="w-full" />
              </span>
            </p>
          </div>
        </div>
        <Image
          src={project.thumbnailSrc}
          alt=""
          fill
          className="object-cover object-center rounded-lg border border-slate-200"
        />
      </div>
    </Link>
  );
};

export default ProjectThumbnail;
