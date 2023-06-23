import { Section } from '@/components/common';
import React from 'react';
import { ProjectCard } from '../';
import { ProjectsSectionProps } from './ProjectsSection.types';

export const ProjectsSection: React.FC<ProjectsSectionProps> = (props) => {
  const { projects } = props;

  return (
    <Section>
      <Section.Wrapper className="py-52">
        <Section.Content className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects &&
            projects.map((p, index) => {
              return <ProjectCard project={p} key={index} />;
            })}
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
};

export default ProjectsSection;
