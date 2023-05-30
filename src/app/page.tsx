import { Section } from '@/components/common';
import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProcessSection,
  ProjectsSection,
  SkillsSection,
  TestimonialsSection,
} from '@/components/home';
import { getThumbnailProjects } from '@/lib/sanity/sanity.methods';
import { ThumbnailProjectType } from '@/lib/sanity/types/project.type';
import Image from 'next/image';

export default async function Page() {
  const projects: ThumbnailProjectType[] = await getThumbnailProjects();

  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Spacer */}
      <Section className="border-dashed">
        <Section.Wrapper className="h-40 sm:h-52 xl:h-72 border-0 md:border-x border-dashed border-inherit relative">
          <div className=" hidden md:block h-full absolute botttom-0 -left-[1px] -right-[1px] bg-gradient-to-b from-white to-white/0" />
        </Section.Wrapper>
      </Section>

      {/* Skills */}
      <SkillsSection />

      {/* Projects */}
      <ProjectsSection projects={projects} />

      {/* About */}
      <AboutSection />

      {/* Process */}
      <ProcessSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Contact */}
      <ContactSection />

      {/* Image */}
      <Section className="antialiased border-b border-slate-200/90 border-dashed">
        <Section.Wrapper className="border-0 md:border-x border-dashed border-inherit h-96 relative">
          <Image
            src={
              'https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
            fill
            alt=""
            className="object-cover object-center"
          />
        </Section.Wrapper>
      </Section>
    </>
  );
}
