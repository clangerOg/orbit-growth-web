import { Section } from '@/components/common';
import Image from 'next/image';
import PaulPb from '../../../../public/people/Paul.jpg';
import { ContactPersonSectionProps } from './ContactPersonSection.types';

const ContactPersonSection: React.FC<ContactPersonSectionProps> = (props) => {
  return (
    <Section className="py-52">
      <Section.Wrapper>
        <Section.Content className="flex items-center justify-center">
          <div className="grid w-full max-w-4xl grid-cols-1 gap-16 sm:grid-cols-3">
            <div className="col-span-1">
              <Image src={PaulPb} alt="" className="rounded-lg" />
            </div>
            <div className="relative col-span-2 flex flex-col items-start justify-center">
              <p className="absolute right-0 top-0 font-serif text-9xl font-bold text-slate-900/10">
                &quot;
              </p>
              <p className="text-2xl font-medium leading-9 text-slate-900">
                &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus ullam cumque illum debitis distinctio totam, a expedita
                nulla, iste, natus eaque. Repellendus modi velit similique rerum
                consectetur maiores aliquid&quot;
              </p>
              <p className="mt-6 text-base font-semibold text-slate-900">
                Paul Kosche
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Dein persönlicher Ansprechpartner
              </p>
            </div>
          </div>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
};

export default ContactPersonSection;
