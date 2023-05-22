import { groq } from 'next-sanity';
import { clientFetch } from './sanity.client';
import { Contributor } from './types/contributor.type';
import { Project } from './types/project.type';

export async function getStaff(): Promise<Contributor[]> {
  const query = groq`
    *[_type == 'contributor']{
        name,
        'imageSrc': profileImage.asset->url,
        position
    }`;

  const res: Promise<Contributor[]> = clientFetch(query);

  return res;
}

export async function getProjectSlugs(): Promise<{ slug: string }[]> {
  const query = groq`
  *[_type == 'project'] {
    'slug': slug.current
  }`;

  const slugs: Promise<{ slug: string }[]> = clientFetch(query);

  return slugs;
}

export async function getProject(slug: string): Promise<Project> {
  const query = groq`
  *[_type == 'project' && slug.current == "${slug}"] {
    'mainImageSrc': mainImage.asset->url,
    'thumbnailSrc': thumbnail.asset->url,
    tags,
    title,
    subTitle,
    'slug': slug.current,
    publishedAt,
    content[] {
      ...,
      _type == "image" => {
        ...,
        asset->
      }
    },
    projectUrl,
  }[0]
  `;

  const project: Promise<Project> = clientFetch(query);

  return project;
}
