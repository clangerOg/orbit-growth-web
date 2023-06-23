import { ArrowRightIcon } from '@heroicons/react/20/solid';
import React from 'react';
import Button from '../Button/Button';
import Section from '../Section/Section';
import Typography from '../Typography/Typography';
import { CTAProps } from './CTA.types';

const CTA: React.FC<CTAProps> = () => {
  return (
    <Section className="overflow-hidden">
      <Section.Wrapper>
        <Section.Content>
          <div className="relative flex max-w-6xl flex-col items-center justify-center rounded-lg bg-slate-900 px-8 py-12 shadow-lg md:p-14">
            <div className="absolute bottom-0 left-0 z-0 overflow-hidden rounded-bl-lg opacity-20 md:opacity-30">
              <CircleLeft />
            </div>
            <div className="absolute bottom-0 right-0 z-0 overflow-hidden rounded-br-lg opacity-10 sm:opacity-20 md:opacity-30">
              <CircleRight />
            </div>
            <div className="relative z-20">
              <Typography variant={'h3'} className="text-center !text-white">
                Ready for takeoff?
              </Typography>
              <Typography
                variant={'h4'}
                className="mt-4 text-center text-base text-slate-400 sm:text-lg"
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.{' '}
              </Typography>

              <div className="mt-14 flex w-full flex-row flex-wrap items-center justify-center gap-8">
                <Button href="/contact" variant={'tertiary'}>
                  Get in touch
                </Button>
                <Button href="/projects" variant={'quaternary'}>
                  View Projects
                  <span>
                    <ArrowRightIcon className="w-4" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
};

const CircleLeft: React.FC = () => {
  return (
    <svg
      width="515"
      height="326"
      viewBox="0 0 515 326"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="91.5"
        cy="325.5"
        rx="423.5"
        ry="325.5"
        fill="url(#paint0_radial_31_557)"
        stopOpacity="0.25"
      />
      <defs>
        <radialGradient
          id="paint0_radial_31_557"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(91.5 325.5) rotate(90) scale(325.5 423.5)"
        >
          <stop stopColor="#9747FF" />
          <stop offset="1" stopColor="#9747FF" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

const CircleRight: React.FC = () => {
  return (
    <svg
      width="509"
      height="328"
      viewBox="0 0 509 328"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="423.5"
        cy="325.5"
        rx="423.5"
        ry="325.5"
        fill="url(#paint0_radial_31_558)"
        stopOpacity="0.25"
      />
      <defs>
        <radialGradient
          id="paint0_radial_31_558"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(423.5 325.5) rotate(90) scale(325.5 423.5)"
        >
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#2563EB" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default CTA;
