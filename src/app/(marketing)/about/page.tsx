import { Section, StaffCard, Typography } from '@/components';
import { getStaff } from '@/lib/sanity/sanity.methods';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
};

export default async function AboutPage() {
  const staffMembers = await getStaff();

  return (
    <>
      {/* Hero */}
      <Section>
        <Image
          alt=""
          src={
            'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
          fill
          className="w-full h-full object-cover object-center"
        />
        <div className="w-full h-full absolute bg-slate-900/70" />
        <Section.Wrapper>
          <Section.Content className="pb-44 pt-72 lg:pt-[30rem] lg:pb-52 relative z-30">
            <h1 className="sm:text-6xl sm:leading-none text-4xl leading-10 text-white font-bold tracking-tight max-w-3xl text-left">
              Gute Webseiten waren noch nie so einfach
            </h1>
            <h2 className="mt-6 text-lg leading-8 text-slate-200 max-w-2xl text-left">
              OrbitGrowth ist eine Webdesign Agentur aus Ratingen, die sich auf
              das Designen und Entwickeln von Webseiten für lokale Unternehmen
              spezialisiert hat.
            </h2>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      {/* <Section className="mt-0 md:mt-6 xl:mt-24 overflow-hidden">
        <Section.Wrapper>
          <Section.Content className="relative">
            <div className="h-24 border-x border-dashed border-inherit relative">
              <div className="h-full absolute botttom-0 -left-[1px] -right-[1px] bg-gradient-to-b from-white to-white/0" />
            </div>
            <div className="border border-slate-200/90 border-dashed p-6 flex justify-center items-center relative">
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
              <div className="border-x border-slate-200/90 border-dashed p-6 flex justify-center items-center gap-6 flex-wrap">
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
      </Section> */}
      {/* About (Paragraph) */}
      <Section className="antialiased border-b border-slate-200/90 border-dashed">
        <Section.Wrapper className="py-52 border-0 md:border-x border-dashed border-inherit">
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
            {/* <div className="mt-32 w-full h-60 sm:h-96 relative rounded-xl shadow-xl">
              <Image
                alt=""
                src={DusBridge}
                fill
                className="object-cover object-center rounded-xl"
              />
            </div> */}
          </Section.Content>
        </Section.Wrapper>
      </Section>
      {/* Image */}
      <Section className="antialiased border-b border-slate-200/90 border-dashed">
        <Section.Wrapper className="border-0 md:border-x border-dashed border-inherit h-96 relative">
          <Image
            src={
              'https://images.pexels.com/photos/361527/pexels-photo-361527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
            fill
            alt=""
            className="object-cover object-center"
          />
        </Section.Wrapper>
      </Section>
      {/* Team */}
      <Section className="antialiased border-b border-slate-200/90 border-dashed">
        <Section.Wrapper className="pt-72 pb-52 border-0 md:border-x border-dashed border-inherit">
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
              {staffMembers &&
                staffMembers.map((contributor, key) => {
                  return <StaffCard staff={contributor} key={key} />;
                })}
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      {/* <div className=" w-full h-96" />
      <CTA />
      <div className=" w-full h-96" /> */}
    </>
  );
}
