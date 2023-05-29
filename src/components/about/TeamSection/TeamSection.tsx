import { Section, Typography } from '@/components/common';
import { StaffCard } from '..';
import { TeamSectionProps } from './TeamSection.types';

const TeamSection: React.FC<TeamSectionProps> = ({ staffMembers }) => {
  return (
    <Section className="antialiased border-b border-slate-200/90 border-dashed">
      <Section.Wrapper className="pt-72 pb-52 border-0 md:border-x border-dashed border-inherit">
        <Section.Content className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <Typography variant={'h3'}>Our Team</Typography>
            <Typography variant={'h4'} className="mt-6">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </Typography>
          </div>
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {staffMembers &&
              staffMembers.map((contributor, key) => {
                return <StaffCard staff={contributor} key={key} />;
              })}
          </div>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
};

export default TeamSection;
