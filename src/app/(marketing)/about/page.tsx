import { PageHeader, Section } from '@/components/common';
import { Metadata } from 'next';
import Image from 'next/image';
import { Content, Team } from './_components';
import { TEAM } from './_types/About.consts';

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
      <PageHeader
        title="Über uns"
        desc="Erfahre mehr über unsere Agentur und das Team, das hinter den Kulissen arbeitet."
      />

      {/* Content Section */}
      <Content />

      {/* Image Section */}
      <Section>
        <Section.Wrapper className="h-96 relative">
          <div className="relative w-full h-full">
            <Image
              src={
                'https://images.pexels.com/photos/361527/pexels-photo-361527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
              fill
              alt=""
              className="object-cover object-center shadow-lg rounded-lg"
            />
          </div>
        </Section.Wrapper>
      </Section>

      {/* Team Section */}
      <Team team={TEAM} />
    </>
  );
}
