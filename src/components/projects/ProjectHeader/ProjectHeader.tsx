import {
  Button,
  Section,
  Typography,
  buttonVariants,
} from '@/components/common';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ProjectHeaderProps } from './ProjectHeader.types';

const ProjectHeader: React.FC<ProjectHeaderProps> = (props) => {
  const { project } = props;

  return (
    <>
      <Section className="overflow-hidden border-b border-slate-200 bg-slate-100">
        <Section.Wrapper>
          <Section.Content className="overflow-hidden shadow-lg shadow-slate-300">
            <Image
              src={project.headerImage}
              alt="Main Image for Travel Explorer"
              className="border-x border-inherit"
            />
          </Section.Content>
        </Section.Wrapper>
      </Section>
      <Section className="mb-24 border-b border-slate-200">
        <Section.Wrapper>
          <Section.Content className="grid grid-cols-2 divide-x divide-slate-200 lg:grid-cols-4">
            <div className="border-l border-inherit p-6 lg:p-8">
              <p className="text-sm font-bold text-slate-900">Date</p>
              <p className="mt-1 text-sm text-slate-500">{project.date}</p>
            </div>
            <div className="!border-r p-6 lg:!border-r-0 lg:p-8">
              <p className="text-sm font-bold text-slate-900">URL</p>
              {project.url ? (
                <Link href={project.url}>
                  <p className="mt-1 text-sm text-slate-500">{project.url}</p>
                </Link>
              ) : (
                <>
                  <p className="mt-1 text-sm text-slate-500">
                    Nicht veröffentlicht
                  </p>
                </>
              )}
            </div>
            <div className="border-t border-inherit p-6 lg:border-t-0 lg:p-8">
              <p className="text-sm font-bold text-slate-900">Unternehmen</p>
              <p className="mt-1 text-sm text-slate-500">{project.company}</p>
            </div>
            <div className="flex items-center justify-center !border-r border-t border-inherit p-4 lg:border-t-0 lg:p-8">
              {project.url ? (
                <Button variant={'default'} href={project.url || '#'}>
                  Seite aufrufen
                </Button>
              ) : (
                <button
                  className={buttonVariants({
                    variant: 'default',
                    className:
                      'disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-slate-900',
                  })}
                  disabled
                >
                  Seite aufrufen
                </button>
              )}
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>

      <Section>
        <Section.Wrapper>
          <Section.Content className="">
            <Typography variant={'h1'}>{project.title}</Typography>
            <Typography variant={'h2'} className="mt-6">
              {project.desc}
            </Typography>
          </Section.Content>
        </Section.Wrapper>
      </Section>
    </>
  );
};

export default ProjectHeader;
