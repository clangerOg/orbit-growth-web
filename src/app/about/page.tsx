import { ContentSection, HeroSection, TeamSection } from '@/components/about';
import { Section } from '@/components/common';
import { getStaff } from '@/lib/sanity/sanity.methods';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'Erfahre mehr über unsere Agentur und welche Werte wir vertreten.',
};

export default async function AboutPage() {
  const staffMembers = await getStaff();

  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* About (Paragraph) */}
      <ContentSection />

      {/* Image */}
      <Section className="antialiased border-b border-slate-200/90 border-dashed">
        <Section.Wrapper className="border-0 md:border-x border-dashed border-inherit h-96 relative">
          <Image
            src={
              'https://images.pexels.com/photos/361527/pexels-photo-361527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
            fill
            alt=""
            className="object-cover object-center"
          />
        </Section.Wrapper>
      </Section>

      {/* Team */}
      <TeamSection staffMembers={staffMembers} />
    </>
  );
}
