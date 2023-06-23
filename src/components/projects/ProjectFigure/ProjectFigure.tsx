import { Section } from '@/components/common';
import classNames from 'classnames';
import Image from 'next/image';
import { ProjectFigureProps } from './ProjectFigure.types';

const ProjectFigure: React.FC<ProjectFigureProps> = (props) => {
  const { className, image, caption, alt, ...other } = props;

  return (
    <div {...other} className={classNames(className)}>
      <Section className="mt-52 overflow-hidden border-y border-slate-200 bg-slate-100">
        <Section.Wrapper>
          <Section.Content className="overflow-hidden shadow-lg shadow-slate-300">
            <Image
              src={image}
              alt={alt || 'Image preview of Project'}
              className="border-x border-inherit"
            />
          </Section.Content>
        </Section.Wrapper>
      </Section>
      {caption && (
        <Section>
          <Section.Wrapper>
            <Section.Content>
              <div className="border-l border-slate-200 py-6 pl-6">
                <small className="prose prose-slate">{caption} </small>
              </div>
            </Section.Content>
          </Section.Wrapper>
        </Section>
      )}{' '}
    </div>
  );
};

export default ProjectFigure;
