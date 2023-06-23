import { Button, Section, Typography } from '@/components/common';
import Image from 'next/image';
import { AboutSectionProps } from './AboutSection.types';

const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <Section className="">
      <Section.Wrapper className="py-52">
        <Section.Content className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <Typography variant={'h3'}>Über uns</Typography>

            <Typography variant={'h4'} className="mt-4">
              Orbit Growth ist eine Webdesign Agentur aus Ratingen, die sich auf
              lokale Unternehmen spezialisiert hat. Für uns steht immer die
              Qualität im Vordergrund.
            </Typography>

            <Typography variant={'p'} className="mt-9">
              Durch die Mitarbeit an verschiedensten Projekten im Bereich
              Webdesign und Webentwicklung konnten wir umfangreiche Erfahrung
              aufbauen. Mit unser expertise schaffen wir es, für dich eine
              technisch einwandfreie Webseite zu entwickeln und gleichzeitig
              immer einen einzigartigen Touch zu behalten.
            </Typography>

            <Button
              href="/about"
              variant={'secondary'}
              className="mt-6 px-0"
              useDefaultArrow
            >
              Mehr Über uns
            </Button>
          </div>
          <div className="grid h-full w-full grid-cols-2 items-center justify-end gap-6">
            <div className="relative col-span-2 h-52 w-full">
              <Image
                src={
                  'https://images.pexels.com/photos/3183159/pexels-photo-3183159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                }
                fill
                alt=""
                className="rounded-lg object-cover object-center"
              />
            </div>
            <div className="relative h-96 w-full">
              <Image
                src={
                  'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                }
                fill
                alt=""
                className="rounded-lg object-cover object-center"
              />
            </div>
            <div className="relative h-72 w-full self-start">
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
