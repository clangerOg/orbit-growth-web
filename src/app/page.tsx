import { CallToAction } from '@/components/call-to-action';
import { Button, Typography } from '@/components/common';
import { Container } from '@/components/container';
import { FAQDisclosure } from '@/components/faq-disclosure';
import { NavBar } from '@/components/nav-bar';
import { ProcessCard } from '@/components/process-card';
import { ProjectThumbnail } from '@/components/project-thumbnail';
import { Shell } from '@/components/shell';
import { SkillCard } from '@/components/skill-card';
import { itemsConfig } from '@/config/items';
import { siteConfig } from '@/config/site';
import Image from 'next/image';
import Link from 'next/link';
import HeroBackground from '../../public/images/landing-hero-background.png';

export default async function Page() {
  return (
    <>
      <NavBar links={siteConfig.mainNav} />
      {/* Hero */}
      <Shell className="h-[80vh] w-full overflow-hidden shadow-2xl sm:h-[70vh] bg-slate-900">
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
            <Button
              href="/contact"
              className="w-full sm:w-fit"
              variant={'tertiary'}
            >
              Kontakt aufnehmen
            </Button>
            <Button
              href="/projects"
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
      <Shell className="py-52">
        <Container>
          <Typography variant={'h3'}>
            Projekte, mit denen wir überzeugen können
          </Typography>
          <Typography variant={'h4'} className="mt-6">
            Entdecke unsere Vorzeigeprojekte, mit denen wir verschiedenen Kunden
            bereits helfen konnten, ihre Webpräsenz zu verbessern. Von eleganten
            Unternehmenswebsites bis hin zu benutzerfreundlichen
            E-Commerce-Plattformen Weitere Projekte
          </Typography>
        </Container>
        <Container className="mt-24">
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {itemsConfig.projects.slice(0, 6).map((project, index) => {
              return (
                <li key={`projects-i-${index}`}>
                  <ProjectThumbnail project={project} />
                </li>
              );
            })}
          </ul>
        </Container>
        <Container className="flex justify-center items-center mt-24">
          <Button href="/projects" useDefaultArrow size="sm">
            Weitere Projekte
          </Button>
        </Container>
      </Shell>

      {/* About */}
      <Shell className="py-52 bg-slate-50">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <Typography variant={'h3'}>Über uns</Typography>

            <Typography variant={'h4'} className="mt-4">
              Orbit Growth ist eine Webdesign Agentur aus Ratingen, die sich auf
              lokale Unternehmen spezialisiert hat. Für uns steht immer die
              Qualität im Vordergrund.
            </Typography>

            <Typography variant={'p'} className="mt-9">
              Durch die Mitarbeit an verschiedensten Projekten im Bereich
              Webdesign und Webentwicklung konnten wir umfangreiche Erfahrung
              aufbauen. Mit unser expertise schaffen wir es, für dich eine
              technisch einwandfreie Webseite zu entwickeln und gleichzeitig
              immer einen einzigartigen Touch zu behalten.
            </Typography>

            <Button
              href="/about"
              variant={'secondary'}
              className="mt-6 px-0"
              useDefaultArrow
            >
              Mehr Über uns
            </Button>
          </div>
          <div className="grid h-full w-full grid-cols-2 items-center justify-end gap-6">
            <div className="relative col-span-2 h-52 w-full">
              <Image
                src={
                  'https://images.pexels.com/photos/3183159/pexels-photo-3183159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                }
                fill
                alt=""
                className="rounded-lg object-cover object-center"
              />
            </div>
            <div className="relative h-96 w-full">
              <Image
                src={
                  'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                }
                fill
                alt=""
                className="rounded-lg object-cover object-center"
              />
            </div>
            <div className="relative h-72 w-full self-start">
              <Image
                src="https://images.pexels.com/photos/8117466/pexels-photo-8117466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                fill
                alt=""
                className="rounded-lg object-cover object-center"
              />
            </div>
          </div>
        </Container>
      </Shell>

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

      <Shell className="py-52">
        <Container>
          <Typography variant={'h3'}>Oft gestellte Fragen</Typography>
          <Typography variant={'h4'} className="mt-4">
            Hier sind ein paar Fragen, die wir oft zu hören bekommen. Falls du
            keine Antwort auf deine Frage finden konntest, hinterlasse uns{' '}
            <span className="text-blue-600 font-medium underline underline-offset-2">
              <Link href={'/contact'}>hier</Link>
            </span>{' '}
            einfach eine Nachricht und wir melden uns so schnell wie möglich bei
            dir.
          </Typography>
        </Container>
        <Container className="max-w-4xl mt-24">
          <ul>
            {itemsConfig.faqs.map((faq, index) => {
              return (
                <li key={`faq-${index}`}>
                  <FAQDisclosure question={faq.question} answer={faq.answer} />
                </li>
              );
            })}
          </ul>
        </Container>
      </Shell>
      {/* Call To Action */}
      <CallToAction />
    </>
  );
}
