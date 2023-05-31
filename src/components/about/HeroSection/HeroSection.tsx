import { Section, Typography } from '@/components/common';
import Image from 'next/image';
import { HeroSectionProps } from './HeroSection.types';

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <Section className="">
      <Image
        alt=""
        src={
          'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
        fill
        className="w-full h-full object-cover object-center"
      />
      <div className="w-full h-full absolute bg-slate-900/70" />
      <Section.Wrapper className="">
        <Section.Content className="relative z-30 flex justify-start items-end min-h-screen h-full pb-72 ">
          <div className="w-full ">
            <Typography variant={'h1'} className="text-white max-w-2xl">
              Gute Webseiten waren noch nie so einfach
            </Typography>
            <Typography variant={'h2'} className="mt-6 text-slate-200">
              Erfahre mehr über unsere Agenturwelche Werte wir vertreten und wie
              wir arbeiten.
            </Typography>
          </div>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
};

export default HeroSection;
