import { Button, Section } from '@/components';
import { getThumbnailProjects } from '@/lib/sanity/sanity.methods';
import { ThumbnailProjectType } from '@/lib/sanity/types/project.type';
import { ArrowRightIcon, ArrowUpRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';

export default async function Page() {
  const projects: ThumbnailProjectType[] = await getThumbnailProjects();

  return (
    <>
      <div className="w-full h-96" />
      <Section className="antialiased border-y border-gray-200/90 border-dashed">
        <Section.Wrapper className="py-52 border-0 md:border-x border-dashed border-inherit">
          <Section.Content>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <h3 className="sm:text-4xl text-3xl text-gray-900 font-bold tracking-tight max-w-2xl text-left">
                Boost you productivity. Start using our app today.
              </h3>
              <h4 className="text-lg leading-8 text-gray-500 max-w-3xl text-left mt-0.5">
                Überall dieselbe alte Leier. Das Layout ist fertig, der Text
                lässt auf sich warten. Damit das Layout nun nicht nackt im Raume
                steht und sich klein und leer vorkommt, springe ich ein.
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-8">
              <div className="p-6 rounded-md bg-gray-100 h-fit col-span-1 md:col-span-2 lg:col-span-1 transition-shadow shadow-none hover:shadow-md ">
                <p className="text-base text-gray-600 leading-7">
                  <span className="font-semibold text-gray-900">
                    Pixelperfect Design.
                  </span>{' '}
                  Als junges Team sind Sie in der Lage, frische und kreative
                  Ideen zu entwickeln, die den Geschmack Ihrer Kunden treffen
                  und sich von der Masse abheben.
                </p>
              </div>
              <div className="p-6 rounded-md border border-gray-200 h-fit">
                <p className="text-base text-gray-500 leading-7">
                  <span className="font-semibold text-gray-900">
                    High-End-Webentwicklung.
                  </span>{' '}
                  Als Webentwickler können wir sicherstellen, dass Sie eine
                  technisch einwandfreie und optimierte Webseite erhalten, die
                  auf die individuellen Bedürfnisse ihrer Zielgruppe
                  zugeschnitten ist.
                </p>
              </div>
              <div className="p-6 rounded-md border border-gray-200 h-fit">
                <p className="text-base text-gray-500 leading-7">
                  <span className="font-semibold text-gray-900">
                    Schnelle Umsetzung.
                  </span>{' '}
                  Als junges und agiles Team können Sie Projekte schnell und
                  effizient umsetzen, ohne Kompromisse bei der Qualität
                  einzugehen.
                </p>
              </div>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      <Section className="antialiased border-b border-gray-200/90 border-dashed">
        <Section.Wrapper className="py-52 border-0 md:border-x border-dashed border-inherit">
          <Section.Content>
            <div>
              <h3 className="sm:text-4xl text-3xl text-gray-900 font-bold tracking-tight max-w-2xl">
                Projekte, mit denen wir überzeugen können
              </h3>
              <h4 className="text-lg leading-8 text-gray-500 max-w-3xl mt-4">
                Entdecken Sie unsere beeindruckende Webdesign-Arbeit und lassen
                Sie sich von unseren vielfältigen Projekten inspirieren. Von
                eleganten Unternehmenswebsites bis hin zu benutzerfreundlichen
                E-Commerce-Plattformen
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
                        <div className="w-full h-full flex justify-center items-center bg-gray-900/50 opacity-0 group-hover:opacity-100 rounded-lg z-20 absolute transition-opacity duration-150 p-8">
                          <div className="rounded-full border-2 border-gray-400 px-2.5 py-1">
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
                          className="object-cover object-center rounded-lg border border-gray-200"
                        />
                      </div>
                    </Link>
                  );
                })}
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      <Section className="antialiased border-b border-gray-200/90 border-dashed">
        <Section.Wrapper className="py-52 border-0 md:border-x border-dashed border-inherit">
          <Section.Content>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              <div className="h-full">
                <div className="sticky top-52">
                  <h3 className="sm:text-4xl text-3xl text-gray-900 font-bold tracking-tight max-w-2xl">
                    Projekte, mit denen wir überzeugen können
                  </h3>
                  <h4 className="text-lg leading-8 text-gray-500 max-w-3xl mt-4">
                    Entdecken Sie unsere beeindruckende Webdesign-Arbeit und
                    lassen Sie sich von unseren vielfältigen Projekten
                    inspirieren. Von eleganten Unternehmenswebsites bis hin zu
                    benutzerfreundlichen E-Commerce-Plattformen
                  </h4>
                </div>
              </div>
              <div>
                <div className="w-full p-6 bg-gray-50 rounded-md">
                  <p className="text-base text-gray-500 leading-7">
                    <span className="text-gray-900 font-semibold">
                      Kostenlose Erstberatung
                    </span>{' '}
                    Wir beginnen mit einem persönlichen Gespräch, um Ihre
                    Anforderungen, Ziele und Vorstellungen zu verstehen.
                  </p>
                </div>
                <div className="w-1/2 h-8 border-r-2 border-dashed border-gray-300" />
                <div className="w-full p-6 bg-gray-50 rounded-md">
                  <p className="text-base text-gray-500 leading-7">
                    <span className="text-gray-900 font-semibold">
                      Konzeptentwicklung
                    </span>{' '}
                    Unser Team erstellt ein maßgeschneidertes Konzept für Ihre
                    Website, das Ihre Marke und Zielgruppe berücksichtigt.
                  </p>
                </div>
                <div className="w-1/2 h-8 border-r-2 border-dashed border-gray-300" />
                <div className="w-full p-6 bg-gray-50 rounded-md">
                  <p className="text-base text-gray-500 leading-7">
                    <span className="text-gray-900 font-semibold">
                      Designphase
                    </span>{' '}
                    Wir gestalten ein ansprechendes und benutzerfreundliches
                    Design, das Ihre Markenidentität widerspiegelt und eine
                    positive Nutzererfahrung bietet.
                  </p>
                </div>
                <div className="w-1/2 h-8 border-r-2 border-dashed border-gray-300" />
                <div className="w-full p-6 bg-gray-50 rounded-md">
                  <p className="text-base text-gray-500 leading-7">
                    <span className="text-gray-900 font-semibold">
                      Entwicklung und Umsetzung
                    </span>{' '}
                    Unsere erfahrenen Entwickler setzen das Design in eine
                    funktionierende Website um und integrieren erforderliche
                    Funktionen und Inhalte.
                  </p>
                </div>
                <div className="w-1/2 h-8 border-r-2 border-dashed border-gray-300" />
                <div className="w-full p-6 bg-gray-50 rounded-md">
                  <p className="text-base text-gray-500 leading-7">
                    <span className="text-gray-900 font-semibold">
                      Feinabstimmung und Optimierung
                    </span>{' '}
                    Wir nehmen Ihre Anmerkungen und Anpassungswünsche entgegen
                    und optimieren die Website für ein optimales Ergebnis.
                  </p>
                </div>
                <div className="w-1/2 h-8 border-r-2 border-dashed border-gray-300" />
                <div className="w-full p-6 bg-gray-50 rounded-md">
                  <p className="text-base text-gray-500 leading-7">
                    <span className="text-gray-900 font-semibold">
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
      <Section className="antialiased bg-gray-100 border-b border-gray-200/90 border-dashed">
        <Section.Wrapper className="border-0 md:border-x border-dashed border-gray-300/90 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-dashed divide-gray-300/90">
          <div className="md:pr-6 py-20 md:py-52">
            <p className="text-xl text-gray-600 leading-8">
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
              <div className="text-sm text-gray-600">
                <p className="font-semibold text-gray-900">Max Mustermann</p>
                <p>CEO Mustercompany, Somebranche</p>
              </div>
            </div>
          </div>
          <div className="md:pl-6 py-20 md:py-52">
            <p className="text-xl text-gray-600 leading-8">
              “Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.”
            </p>
            <div className="mt-6">
              <div></div>
              <div className="text-sm text-gray-600">
                <p className="font-semibold text-gray-900">Max Mustermann</p>
                <p>CEO Mustercompany, Somebranche</p>
              </div>
            </div>
          </div>
        </Section.Wrapper>
      </Section>
      <Section className="antialiased border-b border-gray-200/90 border-dashed">
        <Section.Wrapper className="py-52 border-0 md:border-x border-dashed border-inherit">
          <Section.Content className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="">
              <h3 className="sm:text-4xl text-3xl text-gray-900 font-bold tracking-tight max-w-2xl text-left">
                Boost you productivity. Start using our app today.
              </h3>
              <h4 className="text-lg leading-8 text-gray-500 max-w-3xl text-left mt-4">
                Überall dieselbe alte Leier. Das Layout ist fertig, der Text
                lässt auf sich warten. Damit das Layout nun nicht nackt im Raume
                steht und sich klein und leer vorkommt, springe ich ein.
              </h4>
            </div>
            <div className="flex justify-center items-start w-full">
              <div className="border border-gray-200 p-8 rounded-lg w-full max-w-xl">
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-2">
                    First Name
                  </p>
                  <div className="w-full p-4 bg-gray-50 rounded-md border border-slate-200"></div>
                </div>
              </div>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      <Section className="antialiased border-b border-gray-200/90 border-dashed">
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
      <Section className="antialiased border-b border-gray-200/90 border-dashed">
        <Section.Wrapper className="py-32 border-0 md:border-x border-dashed border-inherit">
          <Section.Content>
            <div className="w-full rounded-lg grid grid-cols-1 md:grid-cols-2 border border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200 shadow-md">
              <div className="p-6">
                <p className="text-xl text-gray-600 leading-8">
                  “Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.”
                </p>
                <div className="mt-6">
                  <div></div>
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold text-gray-900">
                      Max Mustermann
                    </p>
                    <p>CEO Mustercompany, Somebranche</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xl text-gray-600 leading-8">
                  “Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.”
                </p>
                <div className="mt-6">
                  <div></div>
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold text-gray-900">
                      Max Mustermann
                    </p>
                    <p>CEO Mustercompany, Somebranche</p>
                  </div>
                </div>
              </div>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      <div className="w-full h-96" />
      <Section className="py-32 bg-gray-100">
        <Section.Wrapper>
          <Section.Content>
            <p>Hello World</p>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      <div className="w-full h-32" />
    </>
  );
}
