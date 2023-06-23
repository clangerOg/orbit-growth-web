import { Button, Section, Typography } from '@/components/common';
import { AboutSection, ProcessSection, SkillsSection } from '@/components/home';
import Image from 'next/image';
import CTABg from '../../../public/CTA_BG.png';
import HeroBG from '../../../public/landing/HeroBG2.png';
import ProjectsSection from '../ProjectsSection/ProjectsSection';

export default async function Page() {
  return (
    <>
      {/* Header */}
      {/* <Header /> */}
      {/* Hero */}
      <Section className="h-[90vh] sm:h-[80vh] w-full overflow-hidden shadow-2xl">
        <Image
          src={HeroBG}
          alt=""
          className="z-10 object-cover object-center"
          fill
          quality={100}
        />
        <Section.Wrapper>
          <Section.Content>
            <div className="flex flex-col items-center justify-center z-30 relative">
              <Typography variant={'h1'} className="text-center text-white">
                Herausragende Webseiten für lokale Unternehmen, zu fairen
                Preisen.
              </Typography>
              <Typography
                variant={'h2'}
                className="text-center mt-6 text-slate-100"
              >
                OrbitGrowth ist eine Webdesign Agentur aus Ratingen, die sich
                auf das Designen und Entwickeln von Webseiten für lokale
                Unternehmen spezialisiert hat.
              </Typography>

              <div className="mt-8 flex gap-8 items-center justify-center flex-col sm:flex-row w-full">
                <Button
                  href="#"
                  className="w-full sm:w-fit"
                  variant={'tertiary'}
                >
                  Kontakt aufnehmen
                </Button>
                {/* <a
                  className="justify-center rounded-lg text-sm font-semibold transition-colors inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-700 py-3 px-4 w-full sm:w-fit"
                  href="#"
                >
                  Kontakt aufnehmen
                </a> */}

                <Button
                  href="#"
                  className="w-full sm:w-fit"
                  variant={'quaternary'}
                  useDefaultArrow
                >
                  Projekte betrachten
                </Button>
              </div>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>

      {/* Skills */}
      <SkillsSection className="mt-[15vh] mb-52" />

      {/* Projects */}
      <ProjectsSection />

      {/* About */}
      <AboutSection />

      {/* Process */}
      <ProcessSection />

      <svg
        className="max-w-full w-full"
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
              className="object-contain object-center z-10"
            />
            <div className="flex flex-wrap justify-between items-center gap-16 z-20 relative">
              <div>
                <h3 className="text-center sm:text-left sm:text-4xl text-3xl text-white font-bold tracking-tight max-w-md">
                  Wodrauf wartest du noch? Wir sind startklar!
                </h3>
              </div>
              <div className="flex flex-wrap gap-6 md:gap-8 items-center">
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
      </Section>
    </>
  );
}
