export const ProjectSchema = {
  name: 'project',
  title: 'Projekt',
  type: 'document',
  fields: [
    {
      name: 'mainImage',
      title: 'Hauptbild',
      type: 'image',
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
    },
    {
      name: 'subTitle',
      title: 'Unter-Überschrift',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'projectUrl',
      title: 'Projekt-URL',
      type: 'url',
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    {
      name: 'publishedAt',
      title: 'Veröffentlichungssdatum',
      type: 'datetime',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
  ],
};

export type Project = {
  mainImageSrc: string;
  thumbnailSrc: string;
  tags: string[];
  title: string;
  subTitle: string;
  slug: string;
  publishedAt: string;
  content: any;
};

export type ThumbnailProjectType = NonNullable<
  Pick<Project, 'thumbnailSrc' | 'slug' | 'title' | 'tags'>
>;
