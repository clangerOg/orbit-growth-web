import { Button, Section, Typography } from '@/components/common';
import Detail from './Detail';
import { HeroSectionProps } from './HeroSection.types';

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <Section className="mt-0 overflow-hidden md:mt-6 xl:mt-24">
      <Section.Wrapper>
        <Section.Content className="relative">
          <Detail
            className="-right-px bottom-0"
            size={'md'}
            direction={'vertical'}
          />
          {/* Spacer with overlay */}
          <div className="relative h-24 border-x border-dashed border-inherit">
            <div className="botttom-0 absolute -left-[1px] -right-[1px] h-full bg-gradient-to-b from-white to-white/0" />
          </div>
          {/* H1 Wrapper */}
          <div className="relative flex items-center justify-center border border-dashed border-slate-200/90 p-6">
            <Detail
              className="-left-24 -top-px"
              size={'md'}
              direction={'horizontal'}
            />
            <Detail
              className="-left-px -top-8"
              size={'md'}
              direction={'vertical'}
            />
            <Typography variant={'h1'} className="max-w-3xl text-center">
              Herausragende Webseiten für lokale Unternehmen, zu fairen Preisen.
            </Typography>
          </div>

          {/* H2 Wrapper */}
          <div className="flex items-center justify-center border border-t-0 border-dashed border-slate-200/90 p-6">
            <Typography variant="h2" className="text-center">
              OrbitGrowth ist eine Webdesign Agentur aus Ratingen, die sich auf
              das Designen und Entwickeln von Webseiten für lokale Unternehmen
              spezialisiert hat.
            </Typography>
          </div>
          <div className="relative flex items-center justify-center border border-t-0 border-dashed border-slate-200/90">
            <Detail
              className="-top-px left-24 "
              size={'md'}
              direction={'horizontal'}
            />
            {/* Button Wrapper */}
            <div className="flex flex-wrap items-center justify-center gap-6 border-x border-dashed border-slate-200/90 p-4 md:p-6">
              <Button href={'#contact'} className="w-full sm:w-fit">
                Kontakt aufnehmen
              </Button>
              <Button
                href="/projects"
                variant={'secondary'}
                className="w-full sm:w-fit"
                useDefaultArrow
              >
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
