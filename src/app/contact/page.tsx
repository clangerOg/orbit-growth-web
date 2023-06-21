import { Section } from '@/components/common';
import { Metadata } from 'next';
import Image from 'next/image';
import PaulPb from '../../../public/people/Paul.jpg';
import { ContactForm, Headings } from './_components';

// store values to prevent redundancies
const title = 'Kontak';
const description =
  'Trete in Kotakt mit uns, um noch heute die ersten Schritte in Richtung einer neuen Webseite einzuleiten.';

// export metadata object
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
};

export default async function Page() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Side Wrapper */}
        <Headings />
        {/* Right Side Wrapper */}
        <div
          id="contact-form"
          className="flex justify-start items-start py-32 md:py-40 xl:py-52 border-b border-slate-200"
        >
          {/* Right Side */}
          <div className="md:max-w-xl w-full px-6 lg:pl-24 flex items-center justify-center md:block">
            <ContactForm />
          </div>
        </div>
      </div>

      <Section className="my-24">
        <Section.Wrapper>
          <Section.Content className="flex items-center justify-center">
            <div className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-3 gap-16">
              <div className="col-span-1">
                <Image src={PaulPb} alt="" className="rounded-lg" />
              </div>
              <div className="col-span-2 flex flex-col items-start justify-center relative">
                <p className="font-serif absolute top-0 right-0 text-9xl font-bold text-slate-100">
                  &quot;
                </p>
                <p className="text-2xl font-medium text-slate-900 leading-9">
                  &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus ullam cumque illum debitis distinctio totam, a
                  expedita nulla, iste, natus eaque. Repellendus modi velit
                  similique rerum consectetur maiores aliquid&quot;
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
    </>
  );
}
