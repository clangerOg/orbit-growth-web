import { Button, Section } from '@/components/common';
import Image from 'next/image';
import { AboutSectionProps } from './AboutSection.types';

const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
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
              aspernatur dicta tempora aliquid quasi nam vel! Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Minus pariatur illo, sequi
              fugiat consequuntur eum officiis! At possimus ut, tenetur eius
              dicta error. Dolor, quo obcaecati? Dolorem repellendus aut
              laboriosam?
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
  );
};

export default AboutSection;
