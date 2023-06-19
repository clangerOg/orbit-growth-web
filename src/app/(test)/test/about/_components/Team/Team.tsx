import { Section, Typography } from '@/components/common';
import classNames from 'classnames';
import TeamMemberCard from './Team.Card';
import { TeamProps } from './Team.types';

const Team: React.FC<TeamProps> = (props) => {
  const { team, className, ...other } = props;
  return (
    <Section {...other} className={classNames(className)}>
      <Section.Wrapper className="pt-72 pb-52">
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

export default Team;
