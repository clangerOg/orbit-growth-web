import { PageHeader, Section } from '@/components/common';
import { Metadata } from 'next';
import { ProjectCard } from './_components';
import { PROJECTS } from './_types/projects.cons';

// store values to prevent redundancies
const title = 'Unsere Projekte';
const description =
  'Entdecke unsere Vorzeigeprojekte, mit denen wir verschiedenen Kunden bereits helfen konnten, ihre Webpräsenz zu verbessern.';

// export metadata object
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Projekte"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Necessitatibus ab corrupti doloribus, nihil officia dolorum quasi,"
      />
      <Section>
        <Section.Wrapper className="py-52">
          <Section.Content className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((p, index) => {
              return <ProjectCard project={p} key={index} />;
            })}
          </Section.Content>
        </Section.Wrapper>
      </Section>
    </>
  );
}
