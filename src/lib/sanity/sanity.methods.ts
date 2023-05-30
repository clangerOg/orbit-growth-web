import { groq } from 'next-sanity';
import { clientFetch } from './sanity.client';
import { Contributor } from './types/contributor.type';
import { Project, ThumbnailProjectType } from './types/project.type';

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

export async function getProjectOGData(
  slug: string
): Promise<Pick<Project, 'title' | 'subTitle'>> {
  const query = groq`
  *[_type == 'project' && slug.current == "${slug}"] { title, subTitle }[0]
  `;

  const project: Promise<Pick<Project, 'title' | 'subTitle'>> =
    clientFetch(query);

  return project;
}

export async function getThumbnailProjects(): Promise<ThumbnailProjectType[]> {
  const query = groq`
  *[_type == 'project'] {
    'thumbnailSrc': thumbnail.asset->url,
    'slug': slug.current,
    title,
    tags,
  }`;

  const res: Promise<ThumbnailProjectType[]> =
    clientFetch<ThumbnailProjectType[]>(query);

  return res;
}

export async function getOGProject(
  slug: string
): Promise<Pick<Project, 'title'>> {
  const query = groq`
  *[_type == 'project' && slug.current == "${slug}"] {
    title,
  }[0]`;

  const res: Promise<Pick<Project, 'title'>> =
    clientFetch<Pick<Project, 'title'>>(query);

  return res;
}
