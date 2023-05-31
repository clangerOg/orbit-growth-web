import { Section, Typography } from '@/components/common';
import { HeroSectionProps } from './HeroSection.types';

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <Section className="antialiased border-b border-slate-200/90 border-dashed">
      <Section.Wrapper className="pt-32 lg:pt-52 pb-[7.5rem] border-0 md:border-x border-dashed border-inherit">
        <Section.Content>
          <div className="flex flex-col items-center justify-center">
            <Typography variant={'h1'} className="max-w-3xl text-center">
              Gute Webseiten waren noch nie so einfach
            </Typography>
            <Typography variant={'h2'} className="mt-6 text-center">
              OrbitGrowth ist eine Webdesign Agentur aus Ratingen, die sich auf
              das Designen und Entwickeln von Webseiten für lokale Unternehmen
              spezialisiert hat.
            </Typography>
          </div>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
};

export default HeroSection;
