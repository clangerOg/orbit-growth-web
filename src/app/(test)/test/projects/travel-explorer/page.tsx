import { Section } from '@/components/common';
import Image from 'next/image';
import MainImage from '../../../../../../public/projects/travel-explorer/MainImage.png';
import { ProjectHeader } from '../_components';
import { PROJECTS } from '../_types/projects.cons';

export default async function Page() {
  const project = PROJECTS.find((project) => project.id == 'travel-explorer');

  if (project == undefined) {
    throw new Error('There was an error while loading this project.');
  }

  return (
    <>
      {/* <Section className="border-b border-slate-200 bg-slate-100 overflow-hidden">
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
              {project.url ? (
                <Link href={project.url}>
                  <p className="text-slate-500 text-sm mt-1">{project.url}</p>
                </Link>
              ) : (
                <>
                  <p className="text-slate-500 text-sm mt-1">
                    Nicht veröffentlicht
                  </p>
                </>
              )}
            </div>
            <div className="p-6 lg:p-8 border-t lg:border-t-0 border-inherit">
              <p className="text-sm text-slate-900 font-bold">Unternehmen</p>
              <p className="text-slate-500 text-sm mt-1">{project.company}</p>
            </div>
            <div className="p-4 lg:p-8 !border-r flex items-center justify-center border-t lg:border-t-0 border-inherit">
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
      </Section> */}

      <ProjectHeader project={project} />

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
