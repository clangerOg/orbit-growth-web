'use client';

import { Button, Section, Typography } from '@/components/common';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import MainImage from '../../../../../../public/projects/travel-explorer/MainImage.png';
import SomeImage from '../../../../../../public/projects/travel-explorer/SomeImage.png';
import TravelExplorer from '../_components/travel-explorer.mdx';

type PageProps = {
  params: {
    projectId: string;
  };
};

type Project = {
  title: string;
  desc: string;
  id: string;
  content: ReactElement<any, any>;
  date: string;
  url: string;
  company: string;
};

const projects: Project[] = [
  {
    title: 'Travel Explorer Website Redesign',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia temporibus id dolore doloribus reiciendis debitis fuga officia eius? Voluptates hic dolore illum nobis, placeat non blanditiis! Atque obcaecati odit tempora.',
    id: 'abc',
    content: <TravelExplorer />,
    date: 'Januar 2023',
    url: 'https://google.com',
    company: 'Konzept Projekt',
  },
];

const getProject = async (id: string): Promise<Project | undefined> => {
  return projects.find((e) => e.id == id);
};

export default async function Page({ params }: PageProps) {
  const { projectId } = params;

  const project: Project | undefined = await getProject(projectId);

  if (project == undefined) {
    return (
      <div>
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <>
      <Section className="border-b border-slate-200 bg-slate-100 overflow-hidden">
        <Section.Wrapper>
          <Section.Content className="overflow-hidden shadow-lg shadow-slate-300">
            <Image
              src={SomeImage}
              alt="Main Image for Travel Explorer"
              className="border-x border-inherit"
            />
          </Section.Content>
        </Section.Wrapper>
      </Section>
      <Section className="mb-24 border-b border-slate-200">
        <Section.Wrapper>
          <Section.Content className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-200">
            <div className="p-6 lg:p-8 border-l border-inherit">
              <p className="text-sm text-slate-900 font-bold">Date</p>
              <p className="text-slate-500 text-sm mt-1">{project.date}</p>
            </div>
            <div className="p-6 lg:p-8 !border-r lg:!border-r-0">
              <p className="text-sm text-slate-900 font-bold">URL</p>
              <Link href={project.url}>
                <p className="text-slate-500 text-sm mt-1">{project.url}</p>
              </Link>
            </div>
            <div className="p-6 lg:p-8 border-t lg:border-t-0 border-inherit">
              <p className="text-sm text-slate-900 font-bold">Unternehmen</p>
              <p className="text-slate-500 text-sm mt-1">{project.company}</p>
            </div>
            <div className="p-4 lg:p-8 !border-r flex items-center justify-center border-t lg:border-t-0 border-inherit">
              <Button variant={'default'} href={project.url}>
                Seite aufrufen
              </Button>
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

      <Section className="border-y border-slate-200 bg-slate-100 overflow-hidden mt-52">
        <Section.Wrapper>
          <Section.Content className="overflow-hidden shadow-lg shadow-slate-300">
            <Image
              src={MainImage}
              alt="Main Image for Travel Explorer"
              className="border-x border-inherit"
            />
          </Section.Content>
        </Section.Wrapper>
      </Section>
      <Section>
        <Section.Wrapper>
          <Section.Content>
            <div className="pl-6 border-l border-slate-200 py-6">
              <small className="prose prose-slate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis necessitatibus labore, odio odit nisi illum libero nam,
                harum accusamus ad consequatur repudiandae. Aspernatur vero
                voluptas delectus odio at. Debitis, incidunt.
              </small>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
    </>
  );
}
