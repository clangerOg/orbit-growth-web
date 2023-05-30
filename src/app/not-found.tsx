import { Button, Section, Typography } from '@/components/common';

export default function NotFound() {
  return (
    <Section>
      <Section.Wrapper>
        <Section.Content className="min-h-[85vh] h-full flex justify-center items-center">
          <div className="flex flex-col items-center justify-center">
            <Typography variant={'h3'} className="text-center">
              Diese Seite konnte leider nicht gefunden werden!
            </Typography>
            <Typography variant={'h4'} className="mt-6 text-center">
              Tut uns leid, aber hier gibt es leider nichts zu sehen :/ .
              Versuche es erneut oder kehre auf die Startseite zurück.
            </Typography>
            <div className="mt-9 flex justify-center items-center gap-6 flex-wrap">
              <Button href={'/'}>Zur Startseite</Button>
              <Button href="/#contact" variant={'secondary'} useDefaultArrow>
                Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
}
