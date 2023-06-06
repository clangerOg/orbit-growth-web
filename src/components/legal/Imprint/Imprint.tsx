import { Button, Section, Typography } from '@/components/common';
import Link from 'next/link';
import { ImprintProps } from './Imprint.types';

const Imprint: React.FC<ImprintProps> = () => {
  return (
    <Section className="antialiased border-b border-slate-200/90 border-dashed">
      <Section.Wrapper className="py-32 border-0 md:border-x border-dashed border-inherit">
        <Section.Content>
          <Typography variant={'h3'}>
            Impressum{' '}
            <span className="text-slate-600 text-base leading-7 font-normal">
              <br />
              Angaben gemäß § 5 TMG:{' '}
            </span>
          </Typography>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg border border-slate-200">
              <p className="mb-6 text-slate-600 text-base leading-7">
                <span className="font-semibold text-slate-900">
                  Kosche und Langer GbR, Webdesign Agentur
                </span>
                <br />
                Friedrich-List-Straße 4 <br />
                40882 Ratingen <br />
                Tel.: +49 176 42013555 <br />
                Mail: hello@orbitgrowth.de
              </p>
              <Button size={'sm'} href="mailto:hello@orbitgrowth.de">
                Mail an hello@orbitgrowth.de
              </Button>
            </div>
            <div className="p-8 rounded-lg border border-slate-200">
              <p className="mb-8 text-slate-600 text-base leading-7">
                <span className="font-semibold text-slate-900">
                  Vertreten durch:
                </span>
                <br />
                Paul Georg Kosche <br />
                Friedrich-List-Straße 4 <br />
                40882 Ratingen
              </p>
              <p className=" text-slate-600 text-base leading-7">
                <span className="font-semibold text-slate-900">Kontakt:</span>
                <br />
                Tel.: +49 176 42013555 <br />
                Mail: hello@orbitgrowth.de
              </p>
            </div>
            <div className="p-8 rounded-lg border border-slate-200">
              <p className="text-slate-600 text-base leading-7">
                <span className="font-semibold text-slate-900">
                  Zuständige Aufsichtsbehörde:
                </span>
                <br />
                Landesbeauftragte/r für Datenschutz und Informationsfreiheit
                Nordrhein-Westfalen <br />
                Kavalleriestr. 2-4 <br />
                40213 Düsseldorf <br />
                Postfach 20 04 44
              </p>
            </div>
            <div className="p-8 rounded-lg border border-slate-200">
              <p className="text-slate-600 text-base leading-7">
                <span className="font-semibold text-slate-900">
                  Kammerzugehörigkeit
                </span>
                <br />
                Industrie- und Handelskammer Musterstadt <br />
                Musterstraße 987 <br />
                12345 Musterstadt
              </p>
            </div>
            <div className="p-8 rounded-lg border border-slate-200">
              <p className="text-slate-600 text-base leading-7">
                <span className="font-semibold text-slate-900">
                  Umsatzsteueridentifikationsnummer
                </span>
                <br />
                Noch nicht ausgestellt...
              </p>
            </div>
            <div className="p-8 rounded-lg border border-slate-200 col-span-2 flex flex-col gap-y-8">
              <p className="text-slate-900 font-semibold leading-7 text-lg">
                Haftungsausschluss
              </p>
              <p className="text-slate-600 text-base leading-7">
                <span className="font-semibold text-slate-900">
                  Haftung für Inhalte
                </span>
                <br />
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
                sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
                bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die
                auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
                Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine
                diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
                diese Inhalte umgehend entfernen.
              </p>
              <p className="text-slate-600 text-base leading-7">
                <span className="font-semibold text-slate-900">
                  Haftung für Links
                </span>
                <br />
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                umgehend entfernen.
              </p>
              <p className="text-slate-600 text-base leading-7">
                <span className="font-semibold text-slate-900">
                  Urheberrecht
                </span>
                <br />
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
                dieser Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
                Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                werden wir derartige Inhalte umgehend entfernen.
              </p>
              <p className="text-slate-600 text-base leading-7">
                <span className="font-semibold text-slate-900">
                  Alternative Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO und §
                  36 VSBG:
                </span>
                <br />
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit, die Sie unter{' '}
                <Link
                  className="text-blue-600 underline underline-offset-2"
                  href={'https://ec.europa.eu/consumers/odr'}
                >
                  https://ec.europa.eu/consumers/odr
                </Link>{' '}
                finden. Wir sind nicht bereit, an einem außergerichtlichen
                Schlichtungsverfahren teilzunehmen. Zuständig ist die Allgemeine
                Verbraucherschlichtungsstelle des Zentrums für Schlichtung e.V.,
                Straßburger Straße 8, 77694 Kehl am Rhein,
                www.verbraucher-schlichter.de.
              </p>
            </div>
          </div>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
};

export default Imprint;
