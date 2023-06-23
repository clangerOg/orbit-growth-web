import { Section, Typography } from '@/components/common';
import classNames from 'classnames';
import { ContentSectionProps } from './ContentSection.types';

const ContentSection: React.FC<ContentSectionProps> = (props) => {
  const { className, ...other } = props;
  return (
    <Section {...other} className={classNames(className)}>
      <Section.Wrapper className="py-52">
        <Section.Content>
          <Typography variant={'h3'}>Unsere Mission</Typography>
          <div className="mt-6 grid grid-cols-1 gap-x-16 gap-y-24 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <Typography variant={'h4'}>
                {/* Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Orbit Growth ist eine Webdesign */}
                Orbit Growth ist eine Webdesign Agentur aus Ratingen, die sich
                auf lokale Unternehmen spezialisiert hat. Wir glauben daran,
                dass in einer so stark digitalisierten Welt, jeder, ob
                Großunternehmen oder Familienbetrieb, Zugang zu einer passenden
                Präsenz im Web haben sollte.
              </Typography>
              <Typography variant={'p'} className="mt-9">
                {/* Denn esse est percipi - Sein ist wahrgenommen werden. Und weil
                Sie nun schon die Güte haben, mich ein paar weitere Sätze lang
                zu begleiten, möchte ich diese Gelegenheit nutzen, Ihnen nicht
                nur als Lückenfüller zu dienen, sondern auf etwas hinzuweisen,
                das es ebenso verdient wahrgenommen zu werden: Webstandards
                nämlich.
                <br /> */}
                Unser Team besteht aus zwei jungen Erwachsenen, die schon seit
                langer Zeit großes Interesse an Webdesign so wie Webentwicklung
                haben. Paul Kosche ist dabei für die Projektleitung zuständig.
                Bei Fragen oder Problemen ist er dein Ansprechpartner. Um das
                Design und die Entwicklung deiner Webseite kümmert sich
                Christoph Langer.
              </Typography>
              <Typography variant={'p'} className="mt-9">
                {/* Denn esse est percipi - Sein ist wahrgenommen werden. Und weil
                Sie nun schon die Güte haben, mich ein paar weitere Sätze lang
                zu begleiten, möchte ich diese Gelegenheit nutzen, Ihnen nicht
                nur als Lückenfüller zu dienen, sondern auf etwas hinzuweisen,
                das es ebenso verdient wahrgenommen zu werden: Webstandards
                nämlich.
                <br /> */}
                Durch die Mitarbeit an verschiedensten Projekten im Bereich
                Webdesign und Webentwicklung konnten wir umfangreiche Erfahrung
                aufbauen. Mit unser expertise schaffen wir es, für dich eine
                technisch einwandfreie Webseite zu entwickeln und gleichzeitig
                immer einen einzigartigen Touch zu behalten.
              </Typography>
            </div>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <p className="text-5xl font-medium text-slate-900">2023</p>
                <p className="mt-1 text-base text-slate-500">gegründet</p>
              </div>
              <div>
                <p className="text-5xl font-medium text-slate-900">+50</p>
                <p className="mt-1 text-base text-slate-500">
                  beeinflußte Projekte
                </p>
              </div>
              <div>
                <p className="text-5xl font-medium text-slate-900">46,000</p>
                <p className="mt-1 text-base text-slate-500">
                  Erreichte Kunden
                </p>
              </div>
            </div>
          </div>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
};

export default ContentSection;
