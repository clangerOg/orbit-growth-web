import { ProjectThumbnail, Section } from '@/components/common';
import { getThumbnailProjects } from '@/lib/sanity/sanity.methods';
import { ThumbnailProjectType } from '@/lib/sanity/types/project.type';

export default async function ProjectsPage() {
  const projects: ThumbnailProjectType[] = await getThumbnailProjects();

  return (
    <>
      <Section className="antialiased border-b border-slate-200/90 border-dashed">
        <Section.Wrapper className="pt-52 pb-[7.5rem] border-0 md:border-x border-dashed border-inherit">
          <Section.Content>
            <div className="flex flex-col items-center justify-center">
              <h1 className="sm:text-6xl sm:leading-none text-4xl leading-10 text-slate-900 font-bold tracking-tight max-w-3xl text-center">
                Gute Webseiten waren noch nie so einfach
              </h1>
              <h2 className="mt-6 text-lg leading-8 text-slate-500 max-w-2xl text-center">
                OrbitGrowth ist eine Webdesign Agentur aus Ratingen, die sich
                auf das Designen und Entwickeln von Webseiten für lokale
                Unternehmen spezialisiert hat.
              </h2>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      {/* <Section>
        <div className="absolute w-full h-full -z-20">
          <Image
            src={HeroBackground}
            fill
            quality={100}
            alt="Background Image for Hero Section"
            className="object-cover object-center"
          />
        </div>

        <Section.Wrapper>
          <Section.Content className="h-full py-56">
            <div className="flex flex-col items-center justify-center">
              <Typography
                variant={'h1'}
                className="max-w-4xl text-center w-full"
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              </Typography>
              <Typography variant={'h2'} className="mt-6 text-center">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </Typography>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section> */}
      <Section className="antialiased border-b border-slate-200/90 border-dashed">
        <Section.Wrapper className="pb-52 pt-[7.5rem] border-0 md:border-x border-dashed border-inherit relative">
          <Section.Content className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {projects.map((project, index) => {
              return (
                <ProjectThumbnail project={project} key={`#pr-${index}`} />
              );
            })}
          </Section.Content>

          <div className="absolute bottom-20 w-full left-0">
            <p className="text-sm text-slate-500 text-center">
              Hier wird es bald voller!
            </p>
          </div>
        </Section.Wrapper>
      </Section>
      {/* <div className=" w-full h-96" />
      <CTA />
      <div className=" w-full h-96" /> */}
    </>
  );
}
