import Image from 'next/image';
import React from 'react';
import CTABackground from '../../public/images/cta-background.png';
import { Button, Typography } from './common';
import { Container } from './container';
import { Shell } from './shell';

type CallToActionProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const CallToAction: React.FC<CallToActionProps> = (props) => {
  return (
    <Shell className="bg-slate-900">
      <svg
        className="w-full max-w-full fill-slate-900 bg-white"
        viewBox="0 0 1512 197"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1512 0L0 197H1512V0Z" fill="fill-current" />
      </svg>
      <Container className="py-52">
        <Image
          src={CTABackground}
          alt="Backgroud Image for CTA Section"
          fill
          className="z-10 object-contain object-center"
        />
        <div className="relative z-20 flex flex-wrap items-center justify-between gap-16">
          <div>
            <Typography
              variant={'h3'}
              className="max-w-md text-center text-white sm:text-left"
            >
              Wodrauf wartest du noch? Wir sind startklar!
            </Typography>
          </div>
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <Button
              href="/#contact"
              variant={'tertiary'}
              className="w-full sm:w-fit"
              useDefaultArrow
            >
              Jetzt Kontakt aufnehmen
            </Button>
            <Button
              href="/projects"
              variant={'quaternary'}
              className="w-full sm:w-fit"
            >
              Projekte betrachten
            </Button>
          </div>
        </div>
      </Container>
    </Shell>
  );
};

CallToAction.displayName = 'CallToActionSection';
