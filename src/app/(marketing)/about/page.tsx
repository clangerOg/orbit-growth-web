import { TeamSection } from '@/components/about';
import { Typography } from '@/components/common';
import { Container } from '@/components/container';
import Header from '@/components/header';
import { Shell } from '@/components/shell';
import { TeamCard } from '@/components/team-card';
import { itemsConfig } from '@/config/items';
import { Metadata } from 'next';
import Image from 'next/image';
import DetailImage from '../../../../public/images/about-dus-img.jpg';

// store values to prevent redundancies
const title = 'Über uns';
const description =
  'Erfahre mehr über unsere Agenturwelche Werte wir vertreten und wie wir arbeiten.';

// export metadata object
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
};

export default async function Page() {
  return (
    <>
      {/* Page Header */}
      <Header
        title="Über uns"
        desc="Erfahre mehr über unsere Agentur und das Team, das hinter den Kulissen arbeitet."
      />

      {/* Content Section */}
      <Shell className="py-52">
        <Container>
          <Typography variant={'h3'}>Unsere Mission</Typography>
          <div className="mt-6 grid grid-cols-1 gap-x-16 gap-y-24 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <Typography variant={'h4'}>
                Orbit Growth ist eine Webdesign Agentur aus Ratingen, die sich
                auf lokale Unternehmen spezialisiert hat. Wir glauben daran,
                dass in einer so stark digitalisierten Welt, jeder, ob
                Großunternehmen oder Familienbetrieb, Zugang zu einer passenden
                Präsenz im Web haben sollte.
              </Typography>
              <Typography variant={'p'} className="mt-9">
                Unser Team besteht aus zwei jungen Erwachsenen, die schon seit
                langer Zeit großes Interesse an Webdesign so wie Webentwicklung
                haben. Paul Kosche ist dabei für die Projektleitung zuständig.
                Bei Fragen oder Problemen ist er dein Ansprechpartner. Um das
                Design und die Entwicklung deiner Webseite kümmert sich
                Christoph Langer.
              </Typography>
              <Typography variant={'p'} className="mt-9">
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
            </div>
          </div>
        </Container>
      </Shell>

      {/* Image Section */}
      <Shell>
        <Container className="h-96">
          <div className="relative h-full w-full">
            <Image
              src={DetailImage}
              fill
              alt="Detailed View of Düsseldorf Medienhafen at night."
              className="rounded-lg object-cover object-center shadow-lg"
            />
          </div>
        </Container>
      </Shell>

      {/* Team Section */}
      <TeamSection team={itemsConfig.teamMembers} />

      <Shell>
        <Container className="pb-52 pt-72 grid grid-cols-1 gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Typography variant={'h3'}>Unser Team</Typography>
            <Typography variant={'h4'} className="mt-6">
              Als Duo sind wir immer flexibel einsetzbar und können auf deine
              Anforderungen angepasst arbeiten, so, dass du immer schnell und
              präzise zum Ziel kommst.
            </Typography>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:col-span-3">
            {itemsConfig.teamMembers &&
              itemsConfig.teamMembers.map((teamMember, key) => {
                return <TeamCard member={teamMember} key={key} />;
              })}
          </div>
        </Container>
      </Shell>
    </>
  );
}
