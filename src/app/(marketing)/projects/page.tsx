import { Container } from '@/components/container';
import { Header } from '@/components/header';
import { ProjectThumbnail } from '@/components/project-thumbnail';
import { Shell } from '@/components/shell';
import { itemsConfig } from '@/config/items';
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
      {/* Page Header */}
      <Header
        title="Projekte"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Necessitatibus ab corrupti doloribus, nihil officia dolorum quasi,"
      />

      {/* Projects Gallery */}

      <Shell className="py-52">
        <Container>
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {itemsConfig.projects.map((project, index) => {
              return (
                <li key={`projects-i-${index}`}>
                  <ProjectThumbnail project={project} />
                </li>
              );
            })}
          </ul>
        </Container>
      </Shell>
    </>
  );
}
