import { Figure } from '@/components/figure';
import { ProjectFigure, ProjectHeader } from '@/components/projects';
import { PROJECTS } from '@/lib/consts';
import MainImage from '../../../../../public/projects/travel-explorer/MainImage.png';

export default async function Page() {
  const project = PROJECTS.find((project) => project.id == 'travel-explorer');

  if (project == undefined) {
    throw new Error('There was an error while loading this project.');
  }

  return (
    <>
      <ProjectHeader project={project} />

      <ProjectFigure
        image={MainImage}
        alt="Main Image for Travel Explorer"
        className="mt-52"
        caption="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis necessitatibus labore, odio odit nisi illum libero nam,
                harum accusamus ad consequatur repudiandae. Aspernatur vero
                voluptas delectus odio at. Debitis, incidunt."
      />

      <Figure
        image={MainImage}
        alt="Main Image for Travel Explorer"
        className="mt-52"
        caption="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis necessitatibus labore, odio odit nisi illum libero nam,
                harum accusamus ad consequatur repudiandae. Aspernatur vero
                voluptas delectus odio at. Debitis, incidunt."
      />
    </>
  );
}