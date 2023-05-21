import { CTA, Section, Typography } from '@/components';
import Image from 'next/image';
import DusBridge from '../../../../public/about/DusBridge.jpg';
import HeroBackground from '../../../../public/about/HeroBackground.png';
import TeamBackground from '../../../../public/about/TeamBackground.png';
import ChrisProfile from '../../../../public/about/chris.jpg';

export default function AboutPage() {
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
      <Section>
        <Section.Wrapper>
          <Section.Content>
            <Typography variant={'h3'}>Our mission</Typography>
            <div className="grid grid-cols-1 lg:grid-cols-4 mt-6 gap-x-16 gap-y-24">
              <div className="lg:col-span-3">
                <Typography variant={'h4'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </Typography>
                <Typography variant={'p'} className="mt-9">
                  Denn esse est percipi - Sein ist wahrgenommen werden. Und weil
                  Sie nun schon die Güte haben, mich ein paar weitere Sätze lang
                  zu begleiten, möchte ich diese Gelegenheit nutzen, Ihnen nicht
                  nur als Lückenfüller zu dienen, sondern auf etwas hinzuweisen,
                  das es ebenso verdient wahrgenommen zu werden: Webstandards
                  nämlich.
                </Typography>
                <Typography variant={'p'} className="mt-9">
                  Denn esse est percipi - Sein ist wahrgenommen werden. Und weil
                  Sie nun schon die Güte haben, mich ein paar weitere Sätze lang
                  zu begleiten, möchte ich diese Gelegenheit nutzen, Ihnen nicht
                  nur als Lückenfüller zu dienen, sondern auf etwas hinzuweisen,
                  das es ebenso verdient wahrgenommen zu werden: Webstandards
                  nämlich.
                </Typography>
              </div>
              <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
                <div>
                  <p className="text-5xl text-slate-900 font-medium">2023</p>
                  <p className="mt-1 text-slate-500 text-base">gegründet</p>
                </div>
                <div>
                  <p className="text-5xl text-slate-900 font-medium">+130</p>
                  <p className="mt-1 text-slate-500 text-base">
                    zufriedene Kunden
                  </p>
                </div>
                <div>
                  <p className="text-5xl text-slate-900 font-medium">46,000</p>
                  <p className="mt-1 text-slate-500 text-base">
                    Erreichte Kunden
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-32 w-full h-60 sm:h-96 relative rounded-xl shadow-xl">
              <Image
                alt=""
                src={DusBridge}
                fill
                className="object-cover object-center rounded-xl"
              />
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      <div className="w-full h-96" />
      <Section>
        <div className="absolute w-full h-full -z-20">
          <Image
            src={TeamBackground}
            fill
            quality={100}
            alt="Background Image for Team Section"
            className="object-fill contain object-center"
          />
        </div>
        <Section.Wrapper>
          <Section.Content className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <Typography variant={'h3'}>Our Team</Typography>
              <Typography variant={'h4'} className="mt-6">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </Typography>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="w-full relative h-96 group">
                  <Image
                    src={ChrisProfile}
                    alt="chris"
                    fill
                    className="object-cover object-center rounded-lg"
                  />
                </div>
                <p className="text-base font-semibold text-slate-900 mt-6">
                  Paul Kosche
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  Kundenbetreuung, Projektleitung
                </p>
              </div>
              <div>
                <div className="w-full relative h-96 group">
                  <Image
                    src={ChrisProfile}
                    alt="chris"
                    fill
                    className="object-cover object-center rounded-lg"
                  />
                </div>
                <p className="text-base font-semibold text-slate-900 mt-6">
                  Christoph Langer
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  Designer, Front-End Developer
                </p>
              </div>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      <div className=" w-full h-96" />
      <CTA />
      <div className=" w-full h-96" />
    </>
  );
}
