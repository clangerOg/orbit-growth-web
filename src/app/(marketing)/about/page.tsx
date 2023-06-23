import { ContentSection, TeamSection } from '@/components/about';
import { Section } from '@/components/common';
import Header from '@/components/header';
import { TEAM } from '@/lib/consts';
import { Metadata } from 'next';
import Image from 'next/image';

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

      {/* <PageHeader
        title="Über uns"
        desc="Erfahre mehr über unsere Agentur und das Team, das hinter den Kulissen arbeitet."
      /> */}

      {/* Content Section */}
      <ContentSection />

      {/* Image Section */}
      <Section>
        <Section.Wrapper className="relative h-96">
          <div className="relative h-full w-full">
            <Image
              src={
                'https://images.pexels.com/photos/361527/pexels-photo-361527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
              fill
              alt=""
              className="rounded-lg object-cover object-center shadow-lg"
            />
          </div>
        </Section.Wrapper>
      </Section>

      {/* Team Section */}
      <TeamSection team={TEAM} />
    </>
  );
}
