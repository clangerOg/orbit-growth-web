import { Section, Typography } from '@/components/common';
import classNames from 'classnames';
import TeamMemberCard from './TeamSection.Card';
import { TeamSectionProps } from './TeamSection.types';

const TeamSection: React.FC<TeamSectionProps> = (props) => {
  const { team, className, ...other } = props;
  return (
    <Section {...other} className={classNames(className)}>
      <Section.Wrapper className="pb-52 pt-72">
        <Section.Content className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Typography variant={'h3'}>Unser Team</Typography>
            <Typography variant={'h4'} className="mt-6">
              {/* Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.  */}
              Als Duo sind wir immer flexibel einsetzbar und können auf deine
              Anforderungen angepasst arbeiten, so, dass du immer schnell und
              präzise zum Ziel kommst.
            </Typography>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:col-span-3">
            {team &&
              team.map((teamMember, key) => {
                return <TeamMemberCard member={teamMember} key={key} />;
              })}
          </div>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
};

export default TeamSection;
