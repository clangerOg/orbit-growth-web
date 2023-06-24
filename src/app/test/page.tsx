import { CallToAction } from '@/components/call-to-action';
import { Button, Typography } from '@/components/common';
import { Container } from '@/components/container';
import { AboutSection, ProcessSection, SkillsSection } from '@/components/home';
import { Shell } from '@/components/shell';
import Image from 'next/image';
import HeroBackground from '../../../public/images/landing-hero-background.png';
import ProjectsSection from '../ProjectsSection/ProjectsSection';

export default async function Page() {
  return (
    <>
      {/* Header */}
      {/* <Header /> */}
      {/* Hero */}

      <Shell className="h-[90vh] w-full overflow-hidden shadow-2xl sm:h-[80vh]">
        <Image
          src={HeroBackground}
          alt="Background Image for Hero section on landing page."
          className="z-10 object-cover object-center"
          fill
          quality={100}
        />
        <Container className="relative z-30 flex flex-col items-center justify-center">
          <Typography variant={'h1'} className="text-center text-white">
            Herausragende Webseiten für lokale Unternehmen, zu fairen Preisen.
          </Typography>
          <Typography
            variant={'h2'}
            className="mt-6 text-center text-slate-100"
          >
            OrbitGrowth ist eine Webdesign Agentur aus Ratingen, die sich auf
            das Designen und Entwickeln von Webseiten für lokale Unternehmen
            spezialisiert hat.
          </Typography>

          <div className="mt-8 flex w-full flex-col items-center justify-center gap-8 sm:flex-row">
            <Button href="#" className="w-full sm:w-fit" variant={'tertiary'}>
              Kontakt aufnehmen
            </Button>
            <Button
              href="#"
              className="w-full sm:w-fit"
              variant={'quaternary'}
              useDefaultArrow
            >
              Projekte betrachten
            </Button>
          </div>
        </Container>
      </Shell>

      {/* Skills */}
      <SkillsSection className="mb-52 mt-[15vh]" />

      {/* Projects */}
      <ProjectsSection />

      {/* About */}
      <AboutSection />

      {/* Process */}
      <ProcessSection />

      <CallToAction />
      {/* 
      <svg
        className="w-full max-w-full"
        viewBox="0 0 1512 197"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1512 0L0 197H1512V0Z" fill="#0F172A" />
      </svg>

      <Section className=" bg-slate-900">
        <Section.Wrapper>
          <Section.Content className="relative py-52">
            <Image
              src={CTABg}
              alt=""
              fill
              className="z-10 object-contain object-center"
            />
            <div className="relative z-20 flex flex-wrap items-center justify-between gap-16">
              <div>
                <h3 className="max-w-md text-center text-3xl font-bold tracking-tight text-white sm:text-left sm:text-4xl">
                  Wodrauf wartest du noch? Wir sind startklar!
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-6 md:gap-8">
                <Button
                  href="/#contact"
                  variant={'tertiary'}
                  className="w-full sm:w-fit"
                  useDefaultArrow
                >
                  Jetzt Kontakt aufnehmen
                </Button>
                <Button
                  href="/projects"
                  variant={'quaternary'}
                  className="w-full sm:w-fit"
                >
                  Projekte betrachten
                </Button>
              </div>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section> */}
    </>
  );
}
