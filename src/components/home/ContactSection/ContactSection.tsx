import { Section } from '@/components/common';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { ContactForm } from '..';
import { ContactSectionProps } from './ContactSection.types';

const ContactSection: React.FC<ContactSectionProps> = () => {
  return (
    <Section
      id="contact"
      className="border-b border-dashed border-slate-200/90 antialiased"
    >
      <Section.Wrapper className="border-0 border-dashed border-inherit py-80 md:border-x">
        <Section.Content className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="">
            <h3 className="max-w-2xl text-left text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Vereinbare noch heute ein Gespräch zur kostenlosen Erstberatung.
            </h3>
            <h4 className="mt-4 max-w-3xl text-left text-lg leading-8 text-slate-500">
              Hinterlasse uns eine Nachricht oder rufe uns an, damit wir ein
              gemeinsames Gespräch vereinbaren können. Wir freuen uns auf dich!
            </h4>
            <div className="mt-12 flex flex-col gap-6">
              <Link
                href="https://google.com"
                className="inline-flex items-center gap-4 text-base text-slate-600"
              >
                <span className="w-5 text-blue-600">
                  <EnvelopeIcon className="w-full" />
                </span>
                we@orbitgrowth.de
              </Link>
              <Link
                href="https://google.com"
                className="inline-flex items-center gap-4 text-base text-slate-600"
              >
                <span className="w-5 text-blue-600">
                  <PhoneIcon className="w-full" />
                </span>
                +49 123 45678900
              </Link>
            </div>
          </div>
          <div className="flex w-full items-start justify-center">
            <div className="w-full max-w-xl rounded-lg border border-slate-200 p-8 shadow-lg">
              <ContactForm />
            </div>
          </div>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
};

export default ContactSection;
