import { Button, Section } from '@/components/common';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectsSectionProps } from './ProjectsSection.types';

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <Section className="antialiased border-b border-slate-200/90 border-dashed">
      <Section.Wrapper className="py-52 border-0 md:border-x border-dashed border-inherit">
        <Section.Content>
          <div>
            <h3 className="sm:text-4xl text-3xl text-slate-900 font-bold tracking-tight max-w-2xl">
              Projekte, mit denen wir überzeugen können
            </h3>
            <h4 className="text-lg leading-8 text-slate-500 max-w-3xl mt-4">
              Entdecke unsere Vorzeigeprojekte, mit denen wir verschiedenen
              Kunden bereits helfen konnten, ihre Webpräsenz zu verbessern. Von
              eleganten Unternehmenswebsites bis hin zu benutzerfreundlichen
              E-Commerce-Plattformen
            </h4>
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
                  <Link href={`projects/${project.slug}`} key={`pr-${index}`}>
                    <div className="w-full h-52 md:h-96 relative group">
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
              })}
          </div>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
};

export default ProjectsSection;
