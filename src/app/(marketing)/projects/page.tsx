import { Section, Typography } from '@/components';
import Image from 'next/image';
import HeroBackground from '../../../../public/about/HeroBackground.png';

export default async function ProjectsPage() {
  // const projects = await getProjects();

  return (
    <>
      <Section>
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
      </Section>
      <div className=" w-full h-28" />
    </>
  );
}
