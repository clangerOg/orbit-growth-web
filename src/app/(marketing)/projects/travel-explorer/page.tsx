import { Figure } from '@/components/figure';
import { ProjectHeader } from '@/components/project-header';
import { itemsConfig } from '@/config/items';
import MainImage from '../../../../../public/projects/travel-explorer/MainImage.png';

export default async function Page() {
  const project = itemsConfig.projects.find(
    (project) => project.id == 'travel-explorer'
  );

  if (project == undefined) {
    throw new Error('There was an error while loading this project.');
  }

  return (
    <>
      <ProjectHeader project={project} />

      <Figure
        image={MainImage}
        alt="Main Image for Travel Explorer"
        className="my-52"
        caption="Landing Page der Webseite mit Destinations-Karoussel um zum direktem Reiseauftritt anzuregen."
      />
    </>
  );
}
