import { Button, Section, Typography } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import HeroBackground from '../../../public/landing/HeroBackground.png';

export default function HomePage() {
  return (
    <>
      <Section>
        <div className="absolute w-full h-full -z-20">
          <Image
            src={HeroBackground}
            fill
            quality={100}
            alt="Background Image for Hero Section"
            className="object-cover object-center"
          />
        </div>
        <Section.Wrapper>
          <Section.Content className="h-full py-56">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full mb-8 flex justify-center items-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 w-fit border border-slate-200">
                  <p className="text-sm text-slate-600">
                    How we transformed this website.{' '}
                    <Link href={'/'}>
                      <span className="font-semibold text-blue-600">
                        Read more
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
              <Typography
                variant={'h1'}
                className="max-w-3xl text-center w-full"
              >
                Boost you productivity. Start using our app today.
              </Typography>
              <Typography variant={'h2'} className="mt-6 text-center">
                Überall dieselbe alte Leier. Das Layout ist fertig, der Text
                lässt auf sich warten. Damit das Layout nun nicht nackt im Raume
                steht und sich klein und leer vorkommt, springe ich ein.
              </Typography>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button href="/">Kontakt aufnehmen</Button>
                <Button href="/" variant={'secondary'}>
                  Kontakt aufnehmen
                </Button>
              </div>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      <div className="mt-96">
        <p>Hello</p>
      </div>
    </>
  );
}
