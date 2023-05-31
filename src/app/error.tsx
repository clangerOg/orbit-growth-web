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
    <Section className="antialiased border-b border-slate-200/90 border-dashed">
      <Section.Wrapper className="pb-20 border-0 md:border-x border-dashed border-inherit">
        <Section.Content className="min-h-[85vh] h-full flex justify-center items-center">
          <div className="flex flex-col items-center justify-center">
            <Typography variant={'h3'} className="text-center">
              {error.message || 'Es ist ein Fehler aufgetreten.'}
            </Typography>
            <Typography variant={'h4'} className="mt-6 text-center">
              Beim Laden dieser Seite ist ein Fehler aufgetreten. Versuche es
              später erneut oder kehre auf die Startseite zurück.
            </Typography>
            <div className="mt-9 flex justify-center items-center gap-6 flex-wrap">
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
