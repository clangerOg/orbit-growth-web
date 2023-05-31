import { Section, Typography } from '@/components/common';
import { HeroSectionProps } from './HeroSection.types';

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <Section className="antialiased border-b border-slate-200/90 border-dashed">
      <Section.Wrapper className="pt-20 lg:pt-32 pb-[7.5rem] border-0 md:border-x border-dashed border-inherit">
        <Section.Content>
          <div className="flex flex-col items-center justify-center">
            <Typography variant={'h1'} className="max-w-3xl text-center">
              Projekte, mit denen wir überzeugen können
            </Typography>
            <Typography variant={'h2'} className="mt-6 text-center">
              Entdecke unsere Vorzeigeprojekte, mit denen wir verschiedenen
              Kunden bereits helfen konnten, ihre Webpräsenz zu verbessern. Von
              eleganten Unternehmenswebsites bis hin zu benutzerfreundlichen
              E-Commerce-Plattformen
            </Typography>
          </div>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
};

export default HeroSection;
