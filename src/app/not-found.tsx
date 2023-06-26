import { Button, Typography } from '@/components/common';
import { Container } from '@/components/container';
import { Shell } from '@/components/shell';
import { Metadata } from 'next';

// store values to prevent redundancies
const title = '404: Diese Seite wurde nicht gefunden!';
const description =
  'Tut uns leid, aber diese Seite konnten wir leider nicht finden.';

// export metadata object
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
};

export default function NotFound() {
  return (
    <Shell>
      <Container className="flex h-full min-h-[85vh] items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Typography variant={'h3'} className="text-center">
            Diese Seite konnte leider nicht gefunden werden!
          </Typography>
          <Typography variant={'h4'} className="mt-6 text-center">
            Tut uns leid, aber hier gibt es leider nichts zu sehen :/ . Versuche
            es erneut oder kehre auf die Startseite zurück.
          </Typography>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-6">
            <Button href={'/'}>Zur Startseite</Button>
            <Button href="/#contact" variant={'secondary'} useDefaultArrow>
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </Container>
    </Shell>
  );
}
