import { Button, Section, Typography } from '@/components/common';
import Detail from './Detail';
import { HeroSectionProps } from './HeroSection.types';

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <Section className="mt-0 md:mt-6 xl:mt-24 overflow-hidden">
      <Section.Wrapper>
        <Section.Content className="relative">
          <Detail
            className="-right-px bottom-0"
            size={'md'}
            direction={'vertical'}
          />
          {/* Spacer with overlay */}
          <div className="h-24 border-x border-dashed border-inherit relative">
            <div className="h-full absolute botttom-0 -left-[1px] -right-[1px] bg-gradient-to-b from-white to-white/0" />
          </div>
          {/* H1 Wrapper */}
          <div className="border border-slate-200/90 border-dashed p-6 flex justify-center items-center relative">
            <Detail
              className="-top-px -left-24"
              size={'md'}
              direction={'horizontal'}
            />
            <Detail
              className="-left-px -top-8"
              size={'md'}
              direction={'vertical'}
            />
            <Typography variant={'h1'} className="max-w-3xl text-center">
              Gute Webseiten waren noch nie so einfach
            </Typography>
          </div>

          {/* H2 Wrapper */}
          <div className="border border-t-0 border-slate-200/90 border-dashed p-6 flex justify-center items-center">
            <Typography variant="h2" className="text-center">
              OrbitGrowth ist eine Webdesign Agentur aus Ratingen, die sich auf
              das Designen und Entwickeln von Webseiten für lokale Unternehmen
              spezialisiert hat.
            </Typography>
          </div>
          <div className="border border-t-0 border-slate-200/90 border-dashed flex justify-center items-center relative">
            <Detail
              className="-top-px left-24 "
              size={'md'}
              direction={'horizontal'}
            />
            {/* Button Wrapper */}
            <div className="border-x border-slate-200/90 border-dashed p-4 md:p-6 flex justify-center items-center gap-6 flex-wrap">
              <Button href={'#contact'}>Kontakt aufnehmen</Button>
              <Button href="/projects" variant={'secondary'} useDefaultArrow>
                Referenzen
              </Button>
            </div>
          </div>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
};

export default HeroSection;
