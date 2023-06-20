import { Button, Typography } from '@/components/common';
import {
  ArrowDownIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/20/solid';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { forwardRef } from 'react';
import ContactBG from '../../../../../public/contact/Contact_Bg.png';
import { HeadingsProps, HeadingsRef } from './Headings.types';

const Headings: React.FC<HeadingsProps> = forwardRef<
  HeadingsRef,
  HeadingsProps
>((props, ref) => {
  const { className, ...other } = props;

  return (
    <div
      {...other}
      ref={ref}
      className={classNames(
        'flex justify-start md:justify-end items-start bg-slate-900 py-24 md:py-40 xl:py-52 relative',
        className
      )}
    >
      <Image src={ContactBG} alt="" fill className="object-contain" />
      {/* Left Side */}
      <div className="md:max-w-xl w-full px-6 lg:pr-24 relative z-20">
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
            className="text-base inline-flex items-center gap-4 "
          >
            <span className="w-5 text-slate-400">
              <EnvelopeIcon className="w-full" />
            </span>
            hello@orbitgrowth.de
          </Link>
          <Link
            href="https://google.com"
            className="text-base inline-flex items-center gap-4 "
          >
            <span className="w-5 text-slate-400">
              <PhoneIcon className="w-full" />
            </span>
            +49 123 45678900
          </Link>
          <div className="w-full justify-end items-center flex md:hidden">
            <Button
              variant={'default'}
              href="/contact#contact-form"
              className="w-fit border-slate-700 bg-slate-800 text-white border"
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
  );
});

Headings.displayName = 'Headings';

export default Headings;