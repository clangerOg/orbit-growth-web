import { Button, Section, Typography } from '@/components/common';
import Image from 'next/image';
import Link from 'next/link';
import HeroBG from '../../public/landing/Hero_Grid_Bg.png';
import SkillsBG from '../../public/landing/Skills_Grid_Bg.png';
import BrowserWindow from './BrowserWindow';
import Card from './Card';
import ProjectsSection from './ProjectsSection/ProjectsSection';

export default function Page() {
  return (
    <>
      {/* Hero */}
      <Section className="min-h-[80vh] py-24">
        <div className="absolute top-0 -z-30">
          <Image src={HeroBG} alt="Hero Background Image" />
        </div>
        <Section.Wrapper>
          <Section.Content>
            <div className="flex flex-col items-center justify-center">
              <Typography variant={'h1'} className="text-center">
                Herausragende Webseiten für lokale Unternehmen, zu fairen
                Preisen.
              </Typography>
              <Typography variant={'h2'} className="mt-6 text-center">
                OrbitGrowth ist eine Webdesign Agentur aus Ratingen, die sich
                auf das Designen und Entwickeln von Webseiten für lokale
                Unternehmen spezialisiert hat.
              </Typography>

              <div className="mt-8 flex w-full flex-col items-center justify-center gap-8 sm:flex-row">
                <Button href="#" className="w-full sm:w-fit">
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
                  variant={'secondary'}
                  useDefaultArrow
                >
                  Projekte betrachten
                </Button>
              </div>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      <Section>
        {' '}
        <div className="absolute top-0 -z-30">
          <Image src={SkillsBG} alt="Hero Background Image" />
        </div>
        <Section.Wrapper>
          <Section.Content className="px-24 perspective-600">
            {/* <div
              id="browser-preview"
              className={classNames(
                'max-w-full w-full rounded-lg bg-slate-300 aspect-video',
                styles.browserPreview
              )}
            >
              <p>Hello World</p>
            </div> */}
            <BrowserWindow />
          </Section.Content>
        </Section.Wrapper>
      </Section>

      <div className="h-96 w-full" />
      <div className="h-96 w-full" />
      <div className="h-96 w-full" />

      <Section>
        <Section.Wrapper>
          <Section.Content>
            <div className="">
              <Typography variant={'h3'}>
                Gute Webseiten waren noch nie so einfach.
              </Typography>
              <Typography variant={'h4'} className="mt-6">
                Als eine junge Webdesign Agentur bieten wir Qualitäten, die
                andere Agenturen nicht erreichen können. Unser Ziel ist es
                preiswerte Webseiten für jeden zu ermöglichen.
              </Typography>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      <Section className="mt-12">
        <div className="absolute top-0 -z-30">
          <Image src={SkillsBG} alt="Hero Background Image" />
        </div>
        <Section.Wrapper>
          <Section.Content className="grid grid-cols-1 gap-8 pt-12 md:grid-cols-2 md:grid-rows-2">
            {/* <div className="row-span-1 md:row-span-2 bg-white border border-slate-200 rounded-lg p-8 shadow-lg overflow-hidden relative pb-52 md:pb-0">
              <div className="absolute w-3/4 h-1/2 bottom-0 right-0 z-20">
                <div className="relative z-20 w-full h-full">
                  <Image
                    fill
                    src={SkillsBrowserWindow}
                    alt="Example Design made by Orbitgrowth.de"
                    className=" w-full h-full object-left-top object-cover z-20 shadow-lg border-l border-t border-slate-200 rounded-tl-lg"
                  />
                </div>
              </div>
              <Typography>
                <span className="font-semibold text-slate-900">
                  Pixelperfect Design.
                </span>{' '}
                Als junges Team sind wir in der Lage, frische und kreative Ideen
                zu entwicklen, die sich von der Masse abheben und auf deine
                Bedürfnisse maßgeschneidert sind.
              </Typography>
            </div> */}
            <Card />
            <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-lg md:col-start-2">
              <Typography>
                <span className="font-semibold text-slate-900">
                  High-End-Webentwicklung.
                </span>{' '}
                Wir setzen auf moderne Webtechnologien, wie{' '}
                <span className="text-blue-600 underline underline-offset-4">
                  <Link href="https://webflow.com/" target="_blank">
                    Webflow
                  </Link>
                </span>
                , mit denen wir sicherstellen können, dass du immer eine
                technisch einwandfreie und optimierte Webseite erhalten wirst.
              </Typography>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-lg md:col-start-2">
              <Typography>
                <span className="font-semibold text-slate-900">
                  Faire Preise.
                </span>{' '}
                Wir glauben, dass jedes Unternehmen Zugang zu einer
                einwandfreien Webseite haben und dass Kosten keine Blockade sein
                sollten.
              </Typography>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      <div className="h-96 w-full" />
      <div className="h-96 w-full" />
      <ProjectsSection />
      <div className="h-96 w-full" />
      <div className="h-96 w-full" />
    </>
  );
}
