import { Section, Typography } from '@/components';
import { getProject, getProjectSlugs } from '@/lib/sanity/sanity.methods';
import { Project } from '@/lib/sanity/types/project.type';
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
      <div className="w-full relative h-96">
        <Image
          src={project.mainImageSrc}
          fill
          alt="Project Main Image"
          className="object-cover object-center"
        />
      </div>
      <Section>
        <Section.Wrapper>
          <Section.Content>
            <div className="text-sm text-slate-500 flex justify-start items-center divide-x divide-slate-200">
              <div className="p-8 pb-4">
                <p className="mb-1.5 font-semibold text-slate-900">Date</p>
                <p>{project.publishedAt}</p>
              </div>
              <div className="p-8 pb-4">
                <p className="mb-1.5 font-semibold text-slate-900">Tags</p>

                <p>{project.tags.map((tag) => `${tag}, `)}</p>
              </div>
            </div>

            <div className="my-12 flex flex-col justify-center items-center">
              <div className="max-w-3xl">
                <Typography variant={'h3'} className="">
                  {project.title}
                </Typography>
                <Typography variant={'h4'} className="mt-4 !max-w-full">
                  {project.subTitle}
                </Typography>
              </div>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      <Section>
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
      </Section>
    </>
  );
}

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: any }) => (
      <>
        <div className=" bg-yellow-300 not-prose max-w-none w-full">
          <Image
            src={value.asset.url}
            alt=""
            width={900}
            height={1200}
            className="rounded-lg border border-slate-200"
          />
        </div>
      </>
    ),
  },
  block: {
    h3: ({ children }) => (
      <div className="prose">
        <h3>{children}</h3>
      </div>
    ),
    normal: ({ children }) => (
      <div className="prose">
        <p>{children}</p>
      </div>
    ),
  },
};
