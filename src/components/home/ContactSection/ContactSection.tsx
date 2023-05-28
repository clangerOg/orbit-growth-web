import { Section } from '@/components/common';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { ContactForm } from '..';
import { ContactSectionProps } from './ContactSection.types';

const ContactSection: React.FC<ContactSectionProps> = () => {
  return (
    <Section
      id="contact"
      className="antialiased border-b border-slate-200/90 border-dashed"
    >
      <Section.Wrapper className="py-80 border-0 md:border-x border-dashed border-inherit">
        <Section.Content className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="">
            <h3 className="sm:text-4xl text-3xl text-slate-900 font-bold tracking-tight max-w-2xl text-left">
              Boost you productivity. Start using our app today.
            </h3>
            <h4 className="text-lg leading-8 text-slate-500 max-w-3xl text-left mt-4">
              Überall dieselbe alte Leier. Das Layout ist fertig, der Text lässt
              auf sich warten. Damit das Layout nun nicht nackt im Raume steht
              und sich klein und leer vorkommt, springe ich ein.
            </h4>
            <div className="mt-12 flex flex-col gap-6">
              <Link
                href="https://google.com"
                className="text-base inline-flex items-center gap-4 text-slate-600"
              >
                <span className="w-5 text-blue-600">
                  <EnvelopeIcon className="w-full" />
                </span>
                we@orbitgrowth.de
              </Link>
              <Link
                href="https://google.com"
                className="text-base inline-flex items-center gap-4 text-slate-600"
              >
                <span className="w-5 text-blue-600">
                  <PhoneIcon className="w-full" />
                </span>
                +49 123 45678900
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-start w-full">
            <div className="border border-slate-200 p-8 rounded-lg w-full max-w-xl shadow-lg">
              <ContactForm />
            </div>
          </div>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
};

export default ContactSection;
