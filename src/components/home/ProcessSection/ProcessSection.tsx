import { Section, Typography } from '@/components/common';
import classNames from 'classnames';
import React from 'react';
import { ProcessSectionProps } from './ProcessSection.types';

const StepCard: React.FC<
  React.HtmlHTMLAttributes<HTMLDivElement> & { title: string }
> = ({ title, children, className, ...props }) => {
  return (
    <div
      {...props}
      className={classNames('w-full p-6 bg-slate-50 rounded-md', className)}
    >
      <p className="text-base text-slate-500 leading-7">
        <span className="text-slate-900 font-semibold">{title} </span>{' '}
        {children}
      </p>
    </div>
  );
};

const ProcessSection: React.FC<ProcessSectionProps> = () => {
  return (
    <Section>
      <Section.Wrapper className="py-52">
        <Section.Content>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            <div className="h-full">
              <div className="sticky top-52">
                <Typography variant={'h3'}>
                  Ein klarer Plan, der immer zum Ziel führt.
                </Typography>
                <Typography variant={'h4'} className="mt-4">
                  Unser Team arbeitet nach einem festen und stukturiertem
                  Ablauf, damit am Ende alle deine Wünsche erfüllt werden. Ganz
                  nach dem Motto &quot;Der Weg ist das Ziel&quot;.
                </Typography>
              </div>
            </div>
            <div>
              <StepCard title="Kostenlose Erstberatung.">
                Wir beginnen mit einem persönlichen Gespräch, um deine
                Anforderungen, Ziele und Vorstellungen zu verstehen.
              </StepCard>
              <div className="w-1/2 h-8 border-r-2 border-dashed border-slate-300" />
              <StepCard title="Konzeptentwicklung.">
                Unser Team erstellt ein maßgeschneidertes Konzept für deine
                Website, das deine Marke und Zielgruppe berücksichtigt.
              </StepCard>
              <div className="w-1/2 h-8 border-r-2 border-dashed border-slate-300" />
              <StepCard title="Designphase.">
                Wir gestalten ein ansprechendes und benutzerfreundliches Design,
                das deine Markenidentität widerspiegelt und eine positive
                Nutzererfahrung bietet.
              </StepCard>
              <div className="w-1/2 h-8 border-r-2 border-dashed border-slate-300" />
              <StepCard title="Entwicklung und Umsetzung.">
                Unsere erfahrenen Entwickler setzen das Design in eine
                funktionierende Website um und integrieren erforderliche
                Funktionen und Inhalte.
              </StepCard>
              <div className="w-1/2 h-8 border-r-2 border-dashed border-slate-300" />
              <StepCard title="Feinabstimmung und Optimierung.">
                Wir nehmen deine Anmerkungen und Anpassungswünsche entgegen und
                optimieren die Website für ein optimales Ergebnis.
              </StepCard>
              <div className="w-1/2 h-8 border-r-2 border-dashed border-slate-300" />
              <StepCard title="Ongoing Support.">
                Wir bieten dir kontinuierlichen Support und stehen dir auch nach
                dem Launch mit Updates, Wartung und technischem Support zur
                Seite.
              </StepCard>
            </div>
          </div>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
};

export default ProcessSection;
