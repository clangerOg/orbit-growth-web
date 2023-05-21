import { Button, Section, Typography } from '@/components';

export default function LegalPage() {
  return (
    <>
      <Section>
        <Section.Wrapper>
          <Section.Content className="py-32 border-b border-slate-200">
            <Typography variant={'h3'}>Impressum</Typography>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <p className="mb-6 text-slate-600 text-base leading-7">
                  <span className="font-semibold text-slate-900">
                    OrbitGrowth Media GmbH
                  </span>
                  <br />
                  OrbitGrowth Media GmbH Kreativagentur für die digitale Zeit{' '}
                  <br />
                  Musterstraße 10
                  <br />
                  12345 Musterhausen <br />
                  Fon 0123/45 67 89 <br />
                  Fax 0123/45 67 89 99
                </p>
                <Button size={'sm'} href="mailto:christoph.langer100@gmail.com">
                  Mail an we@orbitgrowth.de
                </Button>
              </div>
              <div>
                <p className="mb-8 text-slate-600 text-base leading-7">
                  <span className="font-semibold text-slate-900">
                    Alleinvertretungsberechtigter Geschäftsführer:
                  </span>
                  <br />
                  Max Mustermann
                  <br />
                  Handelsregisternummer 123456 HB <br />
                  Ust-ID: DE123456789
                </p>
                <p className="mb-8 text-slate-600 text-base leading-7">
                  <span className="font-semibold text-slate-900">
                    Verantwortliche im Sinne von § 55 Abs. 2 RStV:
                  </span>
                  <br />
                  Max Mustermann
                  <br />
                  Anschrift: siehe Geschäftsanschrift
                </p>
              </div>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      <Section className="py-32">
        <Section.Wrapper>
          <Section.Content>
            <Typography variant={'h3'}>Datenschutz</Typography>
          </Section.Content>
        </Section.Wrapper>
      </Section>
    </>
  );
}
