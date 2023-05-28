import { Button, CTA, Section, Typography } from '@/components';
import FAQDisclosure from '@/components/FAQDisclosure/FAQDisclosure';
import ProjectThumbnail from '@/components/ProjectThumbnail/ProjectThumbnail';
import { getThumbnailProjects } from '@/lib/sanity/sanity.methods';
import { ThumbnailProjectType } from '@/lib/sanity/types/project.type';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { BoltIcon } from '@heroicons/react/24/solid';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import HeroBackground from '../../../public/landing/HeroBackground.png';

const FAQ: { q: string; a: string }[] = [
  {
    q: 'What services does your webdesign agency offer?',
    a: 'We offer a wide range of web design and development services including website design, website development, e-commerce development, content management system development, and more.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'The time it takes to build a website can vary depending on the complexity and scope of the project. However, we always work to provide our clients with a realistic timeline and complete the project in a timely manner.',
  },
  {
    q: 'Can you design a website that is mobile-friendly?',
    a: 'Yes, we specialize in creating websites that are optimized for all devices, including mobile phones, tablets, and desktop computers.',
  },
  {
    q: 'What is your web design process?',
    a: "Our web design process includes understanding our client's goals and objectives, conducting research and analysis, creating a design concept, developing the website, testing and launching it, and providing ongoing support and maintenance.",
  },
  {
    q: 'Do you provide website maintenance and support?',
    a: 'Yes, we offer ongoing website maintenance and support services to ensure your website remains up-to-date, secure, and running smoothly.',
  },
  {
    q: 'What sets your webdesign agency apart from others?',
    a: 'Our agency has a team of highly skilled and experienced web designers and developers who are dedicated to providing personalized and innovative web solutions to our clients. We also place a strong emphasis on communication, collaboration, and customer satisfaction.',
  },
];
export const metadata: Metadata = {
  title: 'Home | OrbitGrowth',
};

export default async function HomePage() {
  const projects: ThumbnailProjectType[] = await getThumbnailProjects();

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
              <div className="w-full mb-8 flex justify-center items-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 w-fit border border-slate-200">
                  <p className="text-sm text-slate-600 text-center">
                    How we transformed this website.{' '}
                    <Link href={'/'}>
                      <span className="font-semibold text-blue-600">
                        Read more
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
              <Typography
                variant={'h1'}
                className="max-w-3xl text-center w-full"
              >
                Boost you productivity. Start using our app today.
              </Typography>
              <Typography variant={'h2'} className="mt-6 text-center">
                Überall dieselbe alte Leier. Das Layout ist fertig, der Text
                lässt auf sich warten. Damit das Layout nun nicht nackt im Raume
                steht und sich klein und leer vorkommt, springe ich ein.
              </Typography>
              <div className="mt-10 flex items-center justify-center flex-wrap gap-6">
                <Button href="/">Kontakt aufnehmen</Button>
                <Button href="/" variant={'secondary'}>
                  Kontakt aufnehmen
                </Button>
              </div>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      <div className=" w-full h-96" />
      <Section>
        <Section.Wrapper>
          <Section.Content>
            <div className="flex justify-center items-center flex-col">
              <Typography variant={'h3'} className="text-center max-w-2xl">
                Boost you productivity. Start using our app today.
              </Typography>
              <Typography variant={'h4'} className="text-center mt-6">
                Überall dieselbe alte Leier. Das Layout ist fertig, der Text
                lässt auf sich warten. Damit das Layout nun nicht nackt im Raume
                steht und sich klein und leer vorkommt, springe ich ein.
              </Typography>
            </div>
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex gap-4 flex-nowrap">
                <div className="flex-shrink-0 w-5 mt-0.5">
                  <BoltIcon className="text-blue-600 w-full" />
                </div>
                <div className="grow">
                  <Typography variant={'p'}>
                    <span className="font-semibold text-slate-900">
                      Pixelperfect Design.
                    </span>{' '}
                    Als junges Team sind Sie in der Lage, frische und kreative
                    Ideen zu entwickeln, die den Geschmack Ihrer Kunden treffen
                    und sich von der Masse abheben.
                  </Typography>
                </div>
              </div>
              <div className="flex gap-4 flex-nowrap">
                <div className="flex-shrink-0 w-5 mt-0.5">
                  <BoltIcon className="text-blue-600 w-full" />
                </div>
                <div className="grow">
                  <Typography variant={'p'}>
                    <span className="font-semibold text-slate-900">
                      Pixelperfect Design.
                    </span>{' '}
                    Als junges Team sind Sie in der Lage, frische und kreative
                    Ideen zu entwickeln, die den Geschmack Ihrer Kunden treffen
                    und sich von der Masse abheben.
                  </Typography>
                </div>
              </div>
              <div className="flex gap-4 flex-nowrap">
                <div className="flex-shrink-0 w-5 mt-0.5">
                  <BoltIcon className="text-blue-600 w-full" />
                </div>
                <div className="grow">
                  <Typography variant={'p'}>
                    <span className="font-semibold text-slate-900">
                      Pixelperfect Design.
                    </span>{' '}
                    Als junges Team sind Sie in der Lage, frische und kreative
                    Ideen zu entwickeln, die den Geschmack Ihrer Kunden treffen
                    und sich von der Masse abheben.
                  </Typography>
                </div>
              </div>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      <div className=" w-full h-96" />
      <Section>
        <Section.Wrapper>
          <Section.Content>
            <Typography variant={'h3'}>
              Boost you productivity. Start using our app today.
            </Typography>
            <Typography variant={'h4'} className="mt-6">
              Überall dieselbe alte Leier. Das Layout ist fertig, der Text lässt
              auf sich warten. Damit das Layout nun nicht nackt im Raume steht
              und sich klein und leer vorkommt, springe ich ein.
            </Typography>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16">
              {projects.map((project, index) => {
                return <ProjectThumbnail key={index} project={project} />;
              })}
            </div>
            <div className="mt-20 flex justify-center items-center">
              <Button variant={'secondary'} size={'sm'} href="/projects">
                Weitere Projekte{' '}
                <span>
                  <ArrowRightIcon className="w-4" />
                </span>
              </Button>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      <div className=" w-full h-96" />
      <Section className="border-y border-slate-200 bg-slate-100">
        <Section.Wrapper>
          <Section.Content>
            <p>Hello World</p>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      <div className=" w-full h-96" />
      <CTA />
      <div className=" w-full h-96" />
      <Section>
        <Section.Wrapper>
          <Section.Content>
            <Typography variant={'h3'}>Frequently asked questions</Typography>
            <Typography variant={'h4'} className="mt-6">
              Have a different question and can&apos;t find the answer
              you&apos;re looking for? Reach out to our support team by{' '}
              <Link href={'mailto:christoph.langer100@gmail.com'}>
                <span className="underline font-medium underline-offset-4 decoration-blue-600 decoration-2 text-blue-600">
                  sending us an email
                </span>
              </Link>{' '}
              and we&apos;ll get back to you as soon as we can.
            </Typography>

            <div className="mt-20 flex justify-start items-center">
              <div className="max-w-full w-full divide-y divide-slate-200 gap-4">
                {FAQ.map((faq, index) => (
                  <FAQDisclosure key={index} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      <div className=" w-full h-96" />
    </>
  );
}
