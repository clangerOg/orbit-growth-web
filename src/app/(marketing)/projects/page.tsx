import { PageHeader } from '@/components/common';
import { ProjectsSection } from '@/components/projects';
import { PROJECTS } from '@/lib/consts';
import { Metadata } from 'next';

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
      <ProjectsSection projects={PROJECTS} />
    </>
  );
}
