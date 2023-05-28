import { Section } from '@/components/common';
import { ProcessSectionProps } from './ProcessSection.types';

const ProcessSection: React.FC<ProcessSectionProps> = () => {
  return (
    <Section className="antialiased border-b border-slate-200/90 border-dashed">
      <Section.Wrapper className="py-52 border-0 md:border-x border-dashed border-inherit">
        <Section.Content>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            <div className="h-full">
              <div className="sticky top-52">
                <h3 className="sm:text-4xl text-3xl text-slate-900 font-bold tracking-tight max-w-2xl">
                  Ein klarer Plan, der immer zum Ziel führt.
                </h3>
                <h4 className="text-lg leading-8 text-slate-500 max-w-3xl mt-4">
                  Unser Team arbeitet nach einem festen und stukturiertem
                  Ablauf, damit am Ende alle deine Wünsche erfüllt werden. Ganz
                  nach dem Motto &quot;Der Weg ist das Ziel&quot;.
                </h4>
              </div>
            </div>
            <div>
              <div className="w-full p-6 bg-slate-50 rounded-md">
                <p className="text-base text-slate-500 leading-7">
                  <span className="text-slate-900 font-semibold">
                    Kostenlose Erstberatung
                  </span>{' '}
                  Wir beginnen mit einem persönlichen Gespräch, um Ihre
                  Anforderungen, Ziele und Vorstellungen zu verstehen.
                </p>
              </div>
              <div className="w-1/2 h-8 border-r-2 border-dashed border-slate-300" />
              <div className="w-full p-6 bg-slate-50 rounded-md">
                <p className="text-base text-slate-500 leading-7">
                  <span className="text-slate-900 font-semibold">
                    Konzeptentwicklung
                  </span>{' '}
                  Unser Team erstellt ein maßgeschneidertes Konzept für Ihre
                  Website, das Ihre Marke und Zielgruppe berücksichtigt.
                </p>
              </div>
              <div className="w-1/2 h-8 border-r-2 border-dashed border-slate-300" />
              <div className="w-full p-6 bg-slate-50 rounded-md">
                <p className="text-base text-slate-500 leading-7">
                  <span className="text-slate-900 font-semibold">
                    Designphase
                  </span>{' '}
                  Wir gestalten ein ansprechendes und benutzerfreundliches
                  Design, das Ihre Markenidentität widerspiegelt und eine
                  positive Nutzererfahrung bietet.
                </p>
              </div>
              <div className="w-1/2 h-8 border-r-2 border-dashed border-slate-300" />
              <div className="w-full p-6 bg-slate-50 rounded-md">
                <p className="text-base text-slate-500 leading-7">
                  <span className="text-slate-900 font-semibold">
                    Entwicklung und Umsetzung
                  </span>{' '}
                  Unsere erfahrenen Entwickler setzen das Design in eine
                  funktionierende Website um und integrieren erforderliche
                  Funktionen und Inhalte.
                </p>
              </div>
              <div className="w-1/2 h-8 border-r-2 border-dashed border-slate-300" />
              <div className="w-full p-6 bg-slate-50 rounded-md">
                <p className="text-base text-slate-500 leading-7">
                  <span className="text-slate-900 font-semibold">
                    Feinabstimmung und Optimierung
                  </span>{' '}
                  Wir nehmen Ihre Anmerkungen und Anpassungswünsche entgegen und
                  optimieren die Website für ein optimales Ergebnis.
                </p>
              </div>
              <div className="w-1/2 h-8 border-r-2 border-dashed border-slate-300" />
              <div className="w-full p-6 bg-slate-50 rounded-md">
                <p className="text-base text-slate-500 leading-7">
                  <span className="text-slate-900 font-semibold">
                    Ongoing Support
                  </span>{' '}
                  Wir bieten Ihnen kontinuierlichen Support und stehen Ihnen
                  auch nach dem Launch mit Updates, Wartung und technischem
                  Support zur Seite.
                </p>
              </div>
            </div>
          </div>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
};

export default ProcessSection;
