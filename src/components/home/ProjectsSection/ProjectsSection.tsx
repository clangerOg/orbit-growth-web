import {
  Button,
  ProjectThumbnail,
  Section,
  Typography,
} from '@/components/common';
import { ProjectsSectionProps } from './ProjectsSection.types';

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <Section className="antialiased border-b border-slate-200/90 border-dashed">
      <Section.Wrapper className="py-52 border-0 md:border-x border-dashed border-inherit">
        <Section.Content>
          <div>
            <Typography variant={'h3'}>
              Projekte, mit denen wir überzeugen können
            </Typography>
            <Typography variant={'h4'} className="mt-4">
              Entdecke unsere Vorzeigeprojekte, mit denen wir verschiedenen
              Kunden bereits helfen konnten, ihre Webpräsenz zu verbessern. Von
              eleganten Unternehmenswebsites bis hin zu benutzerfreundlichen
              E-Commerce-Plattformen
            </Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-8 relative">
            <div className="h-52 w-full absolute z-10 -bottom-20 bg-gradient-to-t from-white to-white/0 flex justify-center items-end">
              <Button href="/projects" variant={'secondary'} useDefaultArrow>
                Weitere Projekte
              </Button>
            </div>

            {projects &&
              projects.map((project, index) => {
                return (
                  <ProjectThumbnail project={project} key={`pr-${index}`} />
                );
              })}
          </div>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
};

export default ProjectsSection;
