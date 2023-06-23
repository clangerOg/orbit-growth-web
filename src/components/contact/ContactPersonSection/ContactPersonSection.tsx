import { Section } from '@/components/common';
import Image from 'next/image';
import PaulPb from '../../../../public/people/Paul.jpg';
import { ContactPersonSectionProps } from './ContactPersonSection.types';

const ContactPersonSection: React.FC<ContactPersonSectionProps> = (props) => {
  return (
    <Section className="py-52">
      <Section.Wrapper>
        <Section.Content className="flex items-center justify-center">
          <div className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-3 gap-16">
            <div className="col-span-1">
              <Image src={PaulPb} alt="" className="rounded-lg" />
            </div>
            <div className="col-span-2 flex flex-col items-start justify-center relative">
              <p className="font-serif absolute top-0 right-0 text-9xl font-bold text-slate-900/10">
                &quot;
              </p>
              <p className="text-2xl font-medium text-slate-900 leading-9">
                &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus ullam cumque illum debitis distinctio totam, a expedita
                nulla, iste, natus eaque. Repellendus modi velit similique rerum
                consectetur maiores aliquid&quot;
              </p>
              <p className="text-slate-900 mt-6 text-base font-semibold">
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
