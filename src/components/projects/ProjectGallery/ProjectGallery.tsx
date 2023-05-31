import { ProjectThumbnail, Section } from '@/components/common';
import { ProjectGalleryProps } from './ProjectGallery.types';

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ projects }) => {
  return (
    <Section className="antialiased border-b border-slate-200/90 border-dashed">
      <Section.Wrapper className="pb-52 pt-[7.5rem] border-0 md:border-x border-dashed border-inherit relative">
        <Section.Content className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project, index) => {
            return <ProjectThumbnail project={project} key={`#pr-${index}`} />;
          })}
        </Section.Content>

        <div className="absolute bottom-20 w-full left-0">
          <p className="text-sm text-slate-500 text-center">
            Hier wird es bald voller!
          </p>
        </div>
      </Section.Wrapper>
    </Section>
  );
};

export default ProjectGallery;
