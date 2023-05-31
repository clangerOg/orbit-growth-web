import { HeroSection } from '@/components/projects';
import ProjectGallery from '@/components/projects/ProjectGallery/ProjectGallery';
import { getThumbnailProjects } from '@/lib/sanity/sanity.methods';
import { ThumbnailProjectType } from '@/lib/sanity/types/project.type';
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

export default async function ProjectsPage() {
  const projects: ThumbnailProjectType[] = await getThumbnailProjects();

  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Project Gallery */}
      <ProjectGallery projects={projects} />
    </>
  );
}
