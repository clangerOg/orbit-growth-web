'use client';
import {
  Button,
  Section,
  Typography,
  buttonVariants,
} from '@/components/common';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <Section className="border-b border-dashed border-slate-200/90 antialiased">
      <Section.Wrapper className="border-0 border-dashed border-inherit pb-20 md:border-x">
        <Section.Content className="flex h-full min-h-[85vh] items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <Typography variant={'h3'} className="text-center">
              {error.message || 'Es ist ein Fehler aufgetreten.'}
            </Typography>
            <Typography variant={'h4'} className="mt-6 text-center">
              Beim Laden dieser Seite ist ein Fehler aufgetreten. Versuche es
              später erneut oder kehre auf die Startseite zurück.
            </Typography>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-6">
              <button
                className={buttonVariants({
                  variant: 'default',
                  size: 'default',
                })}
                onClick={reset}
              >
                Erneut versuchen
              </button>
              <Button href="/" variant={'secondary'} useDefaultArrow>
                Zurück zur Startseite
              </Button>
            </div>
          </div>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
}
