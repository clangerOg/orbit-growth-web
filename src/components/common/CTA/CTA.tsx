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
          <div className="max-w-6xl bg-slate-900 rounded-lg shadow-lg px-8 py-12 md:p-14 flex flex-col items-center justify-center relative">
            <div className="absolute bottom-0 left-0 rounded-bl-lg overflow-hidden z-0 opacity-20 md:opacity-30">
              <CircleLeft />
            </div>
            <div className="absolute bottom-0 right-0 rounded-br-lg overflow-hidden z-0 opacity-10 sm:opacity-20 md:opacity-30">
              <CircleRight />
            </div>
            <div className="relative z-20">
              <Typography variant={'h3'} className="text-center !text-white">
                Ready for takeoff?
              </Typography>
              <Typography
                variant={'h4'}
                className="text-center text-slate-400 mt-4 text-base sm:text-lg"
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.{' '}
              </Typography>

              <div className="flex flex-row justify-center items-center w-full mt-14 gap-8 flex-wrap">
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
