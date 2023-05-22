import { Section, Typography } from '@/components';
import { getProject, getProjectSlugs } from '@/lib/sanity/sanity.methods';
import { Project } from '@/lib/sanity/types/project.type';
import { formatDate } from '@/lib/utils';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import Image from 'next/image';

export const revalidate = 216000;

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await getProjectSlugs();
  const routes = slugs.map((slug: { slug: string }) => slug.slug);

  return routes.map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project: Project = await getProject(params.slug);

  return (
    <>
      <div className="w-full relative h-72 md:h-96">
        <Image
          src={project.mainImageSrc}
          fill
          alt="Project Main Image"
          className="object-cover object-center"
          quality={100}
        />
      </div>
      <Section>
        <Section.Wrapper>
          <Section.Content>
            <div className="text-sm text-slate-500 flex justify-start items-center border-slate-200">
              <div className="p-4 pb-2 md:p-8 md:pb-4 border-l border-inherit">
                <p className="mb-1.5 font-semibold text-slate-900">Date</p>
                <p>{formatDate(project.publishedAt)}</p>
              </div>
              <div className="p-4 pb-2 md:p-8 md:pb-4 border-l border-inherit">
                <p className="mb-1.5 font-semibold text-slate-900">Tags</p>
                <p>{project.tags.map((tag) => `${tag}, `)}</p>
              </div>
            </div>

            <Typography variant={'h1'} className="mt-20">
              {project.title}
            </Typography>
            <Typography variant={'h2'} className="mt-4">
              {project.subTitle}
            </Typography>

            {/* <div className="my-12 flex flex-col justify-center items-center">
              <div className="max-w-3xl">
                <Typography variant={'h3'} className="">
                  {project.title}
                </Typography>
                <Typography variant={'h4'} className="mt-4 !max-w-full">
                  {project.subTitle}
                </Typography>
              </div>
            </div> */}
          </Section.Content>
        </Section.Wrapper>
      </Section>
      <div className="w-full h-72" />
      <article className="prose prose-slate prose-base md:prose-lg max-w-none prose-img:m-0 flex justify-center items-center flex-col prose-p:px-6 prose-p:max-w-prose">
        <PortableText
          value={project.content}
          components={myPortableTextComponents}
        />
      </article>
      <div className="w-full h-72" />

      {/* <Section className="mt-96">
        <Section.Wrapper>
          <Section.Content className="flex flex-col items-center justify-center">
            <div className="bg-red-400 flex flex-col justify-center items-start">
              <PortableText
                value={project.content}
                components={myPortableTextComponents}
              />
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section> */}
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
    // normal: ({ children }) => (
    //   <div className="prose">
    //     <p>{children}</p>
    //   </div>
    // ),
  },
};
