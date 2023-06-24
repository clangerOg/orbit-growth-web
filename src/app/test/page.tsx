import { CallToAction } from '@/components/call-to-action';
import { Button, Typography } from '@/components/common';
import { Container } from '@/components/container';
import { AboutSection } from '@/components/home';
import { ProcessCard } from '@/components/process-card';
import { Shell } from '@/components/shell';
import { SkillCard } from '@/components/skill-card';
import { itemsConfig } from '@/config/items';
import Image from 'next/image';
import HeroBackground from '../../../public/images/landing-hero-background.png';
import ProjectsSection from '../ProjectsSection/ProjectsSection';

export default async function Page() {
  return (
    <>
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
      <Shell className="mb-52 mt-[15vh]">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Typography variant={'h3'}>
              Gute Webseiten waren noch nie so einfach.
            </Typography>
            <Typography variant={'h4'} className="mt-0.5">
              Als eine junge Webdesign Agentur bieten wir Qualitäten, die andere
              Agenturen nicht erreichen können. Unser Ziel ist es preiswerte
              Webseiten für jeden zu ermöglichen.
            </Typography>
          </div>
          <ul className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {itemsConfig.skillItems.map((card, index) => {
              return (
                <li key={`skills-${index}`}>
                  <SkillCard title={card.title} className={card.className}>
                    {card.description}
                  </SkillCard>
                </li>
              );
            })}
          </ul>
        </Container>
      </Shell>

      {/* Projects */}
      <ProjectsSection />

      {/* About */}
      <AboutSection />

      {/* Process */}
      <Shell className="py-52">
        <Container>
          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="h-full">
              <div className="sticky top-52">
                <Typography variant={'h3'}>
                  Ein klarer Plan, der immer zum Ziel führt.
                </Typography>
                <Typography variant={'h4'} className="mt-4">
                  Unser Team arbeitet nach einem festen und stukturiertem
                  Ablauf, damit am Ende alle deine Wünsche erfüllt werden. Ganz
                  nach dem Motto &quot;Der Weg ist das Ziel&quot;.
                </Typography>
              </div>
            </div>
            <ul>
              {itemsConfig.processItems.map((card, index) => {
                return (
                  <li key={`process-i-${index}`} className="group">
                    <ProcessCard title={card.title}>
                      {card.description}{' '}
                    </ProcessCard>
                    <div className="h-8 w-1/2 border-r-2 border-dashed border-slate-300 group-last:hidden" />
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </Shell>

      {/* Call To Action */}
      <CallToAction />
    </>
  );
}
