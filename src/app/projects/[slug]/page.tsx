import { Section, Typography } from '@/components/common';
import { ProjectNotFoundError } from '@/lib/exceptions';
import {
  getProject,
  getProjectOGData,
  getProjectSlugs,
} from '@/lib/sanity/sanity.methods';
import { Project } from '@/lib/sanity/types/project.type';
import { formatDate, formatTags } from '@/lib/utils';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';

type PageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await getProjectSlugs();
  const routes = slugs.map((slug: { slug: string }) => slug.slug);

  return routes.map((slug) => ({
    slug,
  }));
}

// generate dynamic metadata
export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch prvious og image
  const previousImages =
    (parent != undefined && (await parent).openGraph?.images) || [];

  // pick slug from params
  const slug = params.slug;

  // create default (fallback) metadata object
  // let metadata: Metadata = {
  //   title: {
  //     absolute: 'OrbitGrowth Webdesign Agentur | Projekt',
  //   },
  //   description:
  //     'Ein beispielhaftes Projekt, an dem unsere Agentur bereits gearbeitet hat.',
  //   openGraph: {
  //     images: [...previousImages],
  //   },
  // };

  let title = 'OrbitGrowth Webdesign Agentur | Projekt';
  let description =
    'Ein beispielhaftes Projekt, an dem unsere Agentur bereits gearbeitet hat.';

  // fetch project from CMS
  const project: Pick<Project, 'title' | 'subTitle'> = await getProjectOGData(
    slug
  );

  // adjust metadata object
  if (project && project.title != null && project.subTitle != null) {
    (title = `${project.title} | OrbitGrowth`),
      (description = project.subTitle.substring(0, 100).trim() + '...'); // truncate string after 100 characters
  }

  return {
    title: {
      absolute: title,
    },
    description,
    openGraph: {
      title: {
        absolute: title,
      },
      description,
      images: [...previousImages],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const project: Project = await getProject(params.slug);

  if (project == null) throw new ProjectNotFoundError();

  return (
    <>
      <div className="w-full relative h-72 md:h-96">
        <Image
          src={project.mainImageSrc}
          fill
          alt="Project Main Image"
          className="object-cover object-center border-b border-dashed border-slate-200/90"
          quality={100}
        />
      </div>
      <Section className="antialiased border-b border-slate-200/90 border-dashed">
        <Section.Wrapper className="pb-20 border-0 md:border-x border-dashed border-inherit">
          <Section.Content>
            <div className="text-sm text-slate-500 flex justify-start items-center border-slate-200 flex-wrap gap-12 pt-10">
              <div className="">
                <p className="mb-1.5 font-semibold text-slate-900">Date</p>
                <p>{formatDate(project.publishedAt)}</p>
              </div>
              <div className="">
                <p className="mb-1.5 font-semibold text-slate-900">Tags</p>
                <p>{formatTags(project.tags)}</p>
              </div>
            </div>

            <Typography variant={'h1'} className="mt-20">
              {project.title}
            </Typography>
            <Typography variant={'h2'} className="mt-4 text-slate-500">
              {project.subTitle}
            </Typography>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      <article className="border-b border-slate-200/90 border-dashed relative py-24 prose prose-slate prose-base md:prose-lg max-w-none prose-img:m-0 flex justify-center items-center flex-col prose-p:px-6 prose-p:max-w-prose">
        <div className="-z-20 absolute border-0 md:border-x border-dashed border-slate-200/90 w-full max-w-6xl h-full top-0" />
        <PortableText
          value={project.content}
          components={myPortableTextComponents}
        />
      </article>
    </>
  );
}

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: any }) => (
      <>
        <div className="bg-slate-100 w-full flex justify-center items-center border-y border-slate-200 overflow-hidden">
          <div className="max-w-6xl w-full">
            <Image
              src={value.asset.url}
              alt=""
              width={900}
              height={1200}
              quality={100}
              className="w-full shadow-lg"
            />
          </div>
        </div>
      </>
    ),
  },
  block: {
    h3: ({ children }) => (
      <div className="max-w-prose w-full px-6">
        <h3>{children}</h3>
      </div>
    ),
  },
};
