import { Button, Typography } from '@/components/common';
import { Container } from '@/components/container';
import { ContactForm } from '@/components/forms/contact-form';
import { Shell } from '@/components/shell';
import {
  ArrowDownIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/20/solid';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FormBackground from '../../../../public/images/contact-form-background.png';
import ContactPersonPortrait from '../../../../public/people/Paul.jpg';

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
      {/* Contact Form Section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Side Wrapper */}
        <div className="relative flex items-start justify-start bg-slate-900 py-24 md:justify-end md:py-40 xl:py-52">
          <Image src={FormBackground} alt="" fill className="object-contain" />

          {/* Left Side */}
          <div className="relative z-20 w-full px-6 md:max-w-xl lg:pr-24">
            <Typography variant={'h3'} className="text-white">
              Vereinbare noch heute ein Gespräch zur kostenlosen Erstberatung.
            </Typography>
            <Typography variant={'h4'} className="mt-6 text-slate-300">
              Hinterlasse uns eine Nachricht oder rufe uns an, damit wir ein
              gemeinsames Gespräch vereinbaren können. Wir freuen uns auf dich!
            </Typography>
            <div className="mt-12 flex flex-col gap-6 text-white">
              <Link
                href="mailto:hello@orbitgrowth.de"
                className="inline-flex items-center gap-4 text-base "
              >
                <span className="w-5 text-slate-400">
                  <EnvelopeIcon className="w-full" />
                </span>
                hello@orbitgrowth.de
              </Link>
              <Link
                href="https://google.com"
                className="inline-flex items-center gap-4 text-base "
              >
                <span className="w-5 text-slate-400">
                  <PhoneIcon className="w-full" />
                </span>
                +49 123 45678900
              </Link>

              {/* Scroll button, only visible on small screens */}
              <div className="flex w-full items-center justify-end md:hidden">
                <Button
                  variant={'default'}
                  href="/contact#contact-form"
                  className="w-fit border border-slate-700 bg-slate-800 text-white"
                >
                  Zum Kontaktformular
                  <span className="w-4 shrink-0">
                    <ArrowDownIcon className="w-full" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side Wrapper */}
        <div
          id="contact-form"
          className="flex items-start justify-start border-b border-slate-200 py-32 md:py-40 xl:py-52"
        >
          {/* Right Side */}
          <div className="flex w-full items-center justify-center px-6 md:block md:max-w-xl lg:pl-24">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Contact Person Section */}
      <Shell className="py-52">
        <Container className="flex items-center justify-center">
          <div className="grid w-full max-w-4xl grid-cols-1 gap-16 sm:grid-cols-3">
            <div className="col-span-1">
              <Image
                src={ContactPersonPortrait}
                alt="Portrait of Paul Kosche"
                className="rounded-lg"
              />
            </div>
            <div className="relative col-span-2 flex flex-col items-start justify-center">
              <p className="absolute right-0 top-0 font-serif text-9xl font-bold text-slate-900/10">
                &quot;
              </p>
              <p className="text-2xl font-medium leading-9 text-slate-900">
                &quot;Je schneller wir in Kontak treten, umso schneller können
                wir Unternehmen Web-berühmt machen!&quot;
              </p>
              <p className="mt-6 text-base font-semibold text-slate-900">
                Paul Kosche
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Dein persönlicher Ansprechpartner
              </p>
            </div>
          </div>
        </Container>
      </Shell>
    </>
  );
}
