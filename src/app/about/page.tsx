import { PageHeader, Section } from '@/components/common';
import Image from 'next/image';
import ChrisPB from '../../../public/people/Chris.jpg';
import PaulPB from '../../../public/people/Paul.jpg';
import { Content, Team, TeamMember } from './_components';

const team: TeamMember[] = [
  {
    email: 'p.kosche@orbitgrowth.de',
    imageSrc: PaulPB,
    name: 'Paul Kosche',
    position: 'Kundenbetreuung, Projektleitung',
  },
  {
    email: 'c.langer@orbitgrowth.de',
    imageSrc: ChrisPB,
    name: 'Christoph Langer',
    position: 'Design, Frontendentwicklung',
  },
];

export default async function Page() {
  return (
    <>
      <PageHeader
        title="Über uns"
        desc="Lerne mehr über uns und unser Unternehmen."
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
      <Team team={team} />
    </>
  );
}
