import { Button, ContactForm, Section } from '@/components';
import { getThumbnailProjects } from '@/lib/sanity/sanity.methods';
import { ThumbnailProjectType } from '@/lib/sanity/types/project.type';
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';

import classNames from 'classnames';
import styles from './Landing.module.css';

export default async function Page() {
  const projects: ThumbnailProjectType[] = await getThumbnailProjects();

  return (
    <>
      {/* Hero */}
      <Section className="mt-0 md:mt-6 xl:mt-24 overflow-hidden">
        <Section.Wrapper>
          <Section.Content className="relative">
            <div
              className={classNames(
                'absolute h-56 w-[2px] bg-gradient-to-t from-sky-500/0 via-sky-500 to-fuchsia-500 -right-px -bottom-8 z-30 opacity-40',
                styles.animateVertical
              )}
            />
            <div className="h-24 border-x border-dashed border-inherit relative">
              <div className="h-full absolute botttom-0 -left-[1px] -right-[1px] bg-gradient-to-b from-white to-white/0" />
            </div>
            <div className="border border-slate-200/90 border-dashed p-6 flex justify-center items-center relative">
              <div
                className={classNames(
                  'absolute w-80 h-[2px] bg-gradient-to-r from-sky-500/0 via-sky-500 to-fuchsia-500 -top-px -left-24 z-30 opacity-40',
                  styles.animateHorizontal
                )}
              />
              <div
                className={classNames(
                  'absolute h-56 w-[2px] bg-gradient-to-t from-sky-500/0 via-sky-500 to-fuchsia-500 -left-px -top-8 z-30 opacity-40',
                  styles.animateVertical
                )}
              />
              <h1 className="sm:text-6xl sm:leading-none text-4xl leading-10 text-slate-900 font-bold tracking-tight max-w-3xl text-center">
                Gute Webseiten waren noch nie so einfach
              </h1>
            </div>
            <div className="border border-t-0 border-slate-200/90 border-dashed p-6 flex justify-center items-center">
              <h2 className="text-lg leading-8 text-slate-500 max-w-2xl text-center">
                OrbitGrowth ist eine Webdesign Agentur aus Ratingen, die sich
                auf das Designen und Entwickeln von Webseiten für lokale
                Unternehmen spezialisiert hat.
              </h2>
            </div>
            <div className="border border-t-0 border-slate-200/90 border-dashed flex justify-center items-center relative">
              <div
                className={classNames(
                  'absolute w-80 h-[2px] bg-gradient-to-r from-sky-500/0 via-sky-500 to-fuchsia-500 -top-px left-24 z-30 opacity-40',
                  styles.animateHorizontal2
                )}
              />
              <div className="border-x border-slate-200/90 border-dashed p-4 md:p-6 flex justify-center items-center gap-6 flex-wrap">
                <Button href={'#contact'}>Kontakt aufnehmen</Button>
                <Button href="/projects" variant={'secondary'}>
                  Referenzen{' '}
                  <span>
                    <ArrowRightIcon className="w-4" />
                  </span>
                </Button>
              </div>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      {/* Spacer */}
      <Section className="border-dashed">
        <Section.Wrapper className="h-40 sm:h-52 xl:h-72 border-0 md:border-x border-dashed border-inherit relative">
          <div className=" hidden md:block h-full absolute botttom-0 -left-[1px] -right-[1px] bg-gradient-to-b from-white to-white/0" />
        </Section.Wrapper>
      </Section>
      {/* Skills */}
      <Section className="antialiased border-y border-slate-200/90 border-dashed">
        <Section.Wrapper className="py-52 border-0 md:border-x border-dashed border-inherit">
          <Section.Content>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <h3 className="sm:text-4xl text-3xl text-slate-900 font-bold tracking-tight max-w-2xl text-left">
                Gute Webseiten waren noch nie so einfach.
              </h3>
              <h4 className="text-lg leading-8 text-slate-500 max-w-3xl text-left mt-0.5">
                Als eine junge Webdesign Agentur bieten wir Qualitäten, die
                andere Agenturen nicht erreichen können. Unser Ziel ist es
                preiswerte Webseiten für jeden zu ermöglichen.
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-8">
              <div className="p-6 rounded-md bg-slate-100 h-fit col-span-1 md:col-span-2 lg:col-span-1 ">
                <p className="text-base text-slate-600 leading-7">
                  <span className="font-semibold text-slate-900">
                    Pixelperfect Design.
                  </span>{' '}
                  Als junges Team sind wir in der Lage, frische und kreative
                  Ideen zu entwicklen, die sich von der Masse abheben und auf
                  deine Bedürfnisse amßgeschneidert sind.
                </p>
              </div>
              <div className="p-6 rounded-md border border-slate-200 h-fit">
                <p className="text-base text-slate-500 leading-7">
                  <span className="font-semibold text-slate-900">
                    High-End-Webentwicklung.
                  </span>{' '}
                  Unsere Agentur setzt auf moderne Webtechnologien, wie Webflow,
                  mit denen wir sicherstellen können, dass du immer eine
                  technisch einwandfreie und optimierte Webseite erhalten wirst.
                  {/* Als Webentwickler können wir sicherstellen, dass Sie eine
                  technisch einwandfreie und optimierte Webseite erhalten, die
                  auf die individuellen Bedürfnisse ihrer Zielgruppe
                  zugeschnitten ist. */}
                </p>
              </div>
              <div className="p-6 rounded-md border border-slate-200 h-fit">
                <p className="text-base text-slate-500 leading-7">
                  <span className="font-semibold text-slate-900">
                    Schnelle Umsetzung.
                  </span>{' '}
                  Als junges und agiles Team können wir Projekte schnell und
                  effizient umsetzen, ohne Kompromisse bei der Qualität
                  einzugehen.
                </p>
              </div>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      {/* Projects */}
      <Section className="antialiased border-b border-slate-200/90 border-dashed">
        <Section.Wrapper className="py-52 border-0 md:border-x border-dashed border-inherit">
          <Section.Content>
            <div>
              <h3 className="sm:text-4xl text-3xl text-slate-900 font-bold tracking-tight max-w-2xl">
                Projekte, mit denen wir überzeugen können
              </h3>
              <h4 className="text-lg leading-8 text-slate-500 max-w-3xl mt-4">
                Entdecke unsere Vorzeigeprojekte, mit denen wir verschiedenen
                Kunden bereits helfen konnten, ihre Webpräsenz zu verbessern.
                Von eleganten Unternehmenswebsites bis hin zu
                benutzerfreundlichen E-Commerce-Plattformen
                {/* Entdecken Sie unsere beeindruckende Webdesign-Arbeit und lassen
                Sie sich von unseren vielfältigen Projekten inspirieren. Von
                eleganten Unternehmenswebsites bis hin zu benutzerfreundlichen
                E-Commerce-Plattformen */}
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-8 relative">
              <div className="h-52 w-full absolute z-10 -bottom-20 bg-gradient-to-t from-white to-white/0 flex justify-center items-end">
                <Button href="/projects" variant={'secondary'}>
                  Weitere Projekte
                  <span>
                    <ArrowRightIcon className="w-4" />
                  </span>
                </Button>
              </div>
              {projects &&
                projects.map((project, index) => {
                  return (
                    <Link href={`projects/${project.slug}`} key={`pr-${index}`}>
                      <div className="w-full h-52 md:h-96 relative group">
                        <div className="w-full h-full flex justify-center items-center bg-slate-900/50 opacity-0 group-hover:opacity-100 rounded-lg z-20 absolute transition-opacity duration-150 p-8">
                          <div className="rounded-full border-2 border-slate-400 px-2.5 py-1">
                            <p className="text-white font-medium inline-flex items-center justify-center gap-2 text-sm">
                              {project.title}
                              <span className="w-4">
                                <ArrowUpRightIcon className="w-full" />
                              </span>
                            </p>
                          </div>
                        </div>
                        <Image
                          src={project.thumbnailSrc}
                          alt=""
                          fill
                          className="object-cover object-center rounded-lg border border-slate-200"
                        />
                      </div>
                    </Link>
                  );
                })}
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      {/* About */}
      <Section className="antialiased border-b border-slate-200/90 border-dashed">
        <Section.Wrapper className="py-52 border-0 md:border-x border-dashed border-inherit">
          <Section.Content className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="sm:text-4xl text-3xl text-slate-900 font-bold tracking-tight max-w-2xl">
                Über uns
              </h3>
              <h4 className="text-lg leading-8 text-slate-500 max-w-3xl mt-4">
                Entdecken Sie unsere beeindruckende Webdesign-Arbeit und lassen
                Sie sich von unseren vielfältigen Projekten inspirieren. Von
                eleganten Unternehmenswebsites bis hin zu benutzerfreundlichen
                E-Commerce-Plattformen
              </h4>
              <p className="leading-7 font-normal text-slate-700 text-base max-w-prose mt-9">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                soluta temporibus necessitatibus, rem consequatur magni ullam
                debitis adipisci repellendus alias recusandae veniam impedit
                aspernatur dicta tempora aliquid quasi nam vel! Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Minus pariatur
                illo, sequi fugiat consequuntur eum officiis! At possimus ut,
                tenetur eius dicta error. Dolor, quo obcaecati? Dolorem
                repellendus aut laboriosam?
              </p>
              <Button href="/about" variant={'secondary'} className="px-0 mt-6">
                Mehr Über uns
              </Button>
            </div>
            <div className="grid w-full h-full items-center justify-end grid-cols-2 gap-6">
              <div className="relative w-full h-52 col-span-2">
                <Image
                  src={
                    'https://images.pexels.com/photos/3183159/pexels-photo-3183159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  }
                  fill
                  alt=""
                  className="rounded-lg object-cover object-center"
                />
              </div>
              <div className="relative w-full h-96">
                <Image
                  src={
                    'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  }
                  fill
                  alt=""
                  className="rounded-lg object-cover object-center"
                />
              </div>
              <div className="relative w-full h-72 self-start">
                <Image
                  src="https://images.pexels.com/photos/8117466/pexels-photo-8117466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  fill
                  alt=""
                  className="rounded-lg object-cover object-center"
                />
              </div>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      {/* Process */}
      <Section className="antialiased border-b border-slate-200/90 border-dashed">
        <Section.Wrapper className="py-52 border-0 md:border-x border-dashed border-inherit">
          <Section.Content>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              <div className="h-full">
                <div className="sticky top-52">
                  <h3 className="sm:text-4xl text-3xl text-slate-900 font-bold tracking-tight max-w-2xl">
                    Ein klarer Plan, der immer zum Ziel führt.
                  </h3>
                  <h4 className="text-lg leading-8 text-slate-500 max-w-3xl mt-4">
                    Unser Team arbeitet nach einem festen und stukturiertem
                    Ablauf, damit am Ende alle deine Wünsche erfüllt werden.
                    Ganz nach dem Motto &quot;Der Weg ist das Ziel&quot;.
                  </h4>
                </div>
              </div>
              <div>
                <div className="w-full p-6 bg-slate-50 rounded-md">
                  <p className="text-base text-slate-500 leading-7">
                    <span className="text-slate-900 font-semibold">
                      Kostenlose Erstberatung
                    </span>{' '}
                    Wir beginnen mit einem persönlichen Gespräch, um Ihre
                    Anforderungen, Ziele und Vorstellungen zu verstehen.
                  </p>
                </div>
                <div className="w-1/2 h-8 border-r-2 border-dashed border-slate-300" />
                <div className="w-full p-6 bg-slate-50 rounded-md">
                  <p className="text-base text-slate-500 leading-7">
                    <span className="text-slate-900 font-semibold">
                      Konzeptentwicklung
                    </span>{' '}
                    Unser Team erstellt ein maßgeschneidertes Konzept für Ihre
                    Website, das Ihre Marke und Zielgruppe berücksichtigt.
                  </p>
                </div>
                <div className="w-1/2 h-8 border-r-2 border-dashed border-slate-300" />
                <div className="w-full p-6 bg-slate-50 rounded-md">
                  <p className="text-base text-slate-500 leading-7">
                    <span className="text-slate-900 font-semibold">
                      Designphase
                    </span>{' '}
                    Wir gestalten ein ansprechendes und benutzerfreundliches
                    Design, das Ihre Markenidentität widerspiegelt und eine
                    positive Nutzererfahrung bietet.
                  </p>
                </div>
                <div className="w-1/2 h-8 border-r-2 border-dashed border-slate-300" />
                <div className="w-full p-6 bg-slate-50 rounded-md">
                  <p className="text-base text-slate-500 leading-7">
                    <span className="text-slate-900 font-semibold">
                      Entwicklung und Umsetzung
                    </span>{' '}
                    Unsere erfahrenen Entwickler setzen das Design in eine
                    funktionierende Website um und integrieren erforderliche
                    Funktionen und Inhalte.
                  </p>
                </div>
                <div className="w-1/2 h-8 border-r-2 border-dashed border-slate-300" />
                <div className="w-full p-6 bg-slate-50 rounded-md">
                  <p className="text-base text-slate-500 leading-7">
                    <span className="text-slate-900 font-semibold">
                      Feinabstimmung und Optimierung
                    </span>{' '}
                    Wir nehmen Ihre Anmerkungen und Anpassungswünsche entgegen
                    und optimieren die Website für ein optimales Ergebnis.
                  </p>
                </div>
                <div className="w-1/2 h-8 border-r-2 border-dashed border-slate-300" />
                <div className="w-full p-6 bg-slate-50 rounded-md">
                  <p className="text-base text-slate-500 leading-7">
                    <span className="text-slate-900 font-semibold">
                      Ongoing Support
                    </span>{' '}
                    Wir bieten Ihnen kontinuierlichen Support und stehen Ihnen
                    auch nach dem Launch mit Updates, Wartung und technischem
                    Support zur Seite.
                  </p>
                </div>
              </div>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      {/* Testimonials */}
      <Section className="antialiased bg-slate-100 border-b border-slate-200/90 border-dashed">
        <Section.Wrapper className="border-0 md:border-x border-dashed border-slate-300/90 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-dashed divide-slate-300/90">
          <div className="md:pr-6 py-20 md:py-52">
            <p className="text-xl text-slate-600 leading-8">
              “Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.”
            </p>
            <div className="mt-6 flex gap-4 items-center">
              <div className="w-9 aspect-square flex-shrink-0 relative">
                <Image
                  src={
                    'https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  }
                  alt=""
                  fill
                  className="object-cover object-center rounded-full"
                />
              </div>
              <div className="text-sm text-slate-600">
                <p className="font-semibold text-slate-900">Max Mustermann</p>
                <p>CEO Mustercompany, Somebranche</p>
              </div>
            </div>
          </div>
          <div className="md:pl-6 py-20 md:py-52">
            <p className="text-xl text-slate-600 leading-8">
              “Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.”
            </p>
            <div className="mt-6">
              <div></div>
              <div className="text-sm text-slate-600">
                <p className="font-semibold text-slate-900">Max Mustermann</p>
                <p>CEO Mustercompany, Somebranche</p>
              </div>
            </div>
          </div>
        </Section.Wrapper>
      </Section>
      {/* Contact */}
      <Section
        id="contact"
        className="antialiased border-b border-slate-200/90 border-dashed"
      >
        <Section.Wrapper className="py-80 border-0 md:border-x border-dashed border-inherit">
          <Section.Content className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="">
              <h3 className="sm:text-4xl text-3xl text-slate-900 font-bold tracking-tight max-w-2xl text-left">
                Boost you productivity. Start using our app today.
              </h3>
              <h4 className="text-lg leading-8 text-slate-500 max-w-3xl text-left mt-4">
                Überall dieselbe alte Leier. Das Layout ist fertig, der Text
                lässt auf sich warten. Damit das Layout nun nicht nackt im Raume
                steht und sich klein und leer vorkommt, springe ich ein.
              </h4>
              <div className="mt-12 flex flex-col gap-6">
                <Link
                  href="https://google.com"
                  className="text-base inline-flex items-center gap-4 text-slate-600"
                >
                  <span className="w-5 text-blue-600">
                    <EnvelopeIcon className="w-full" />
                  </span>
                  we@orbitgrowth.de
                </Link>
                <Link
                  href="https://google.com"
                  className="text-base inline-flex items-center gap-4 text-slate-600"
                >
                  <span className="w-5 text-blue-600">
                    <PhoneIcon className="w-full" />
                  </span>
                  +49 123 45678900
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-start w-full">
              <div className="border border-slate-200 p-8 rounded-lg w-full max-w-xl shadow-lg">
                <ContactForm />
              </div>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
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
