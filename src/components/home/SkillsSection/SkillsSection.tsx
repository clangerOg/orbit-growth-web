import { Section, Typography } from '@/components/common';
import { SkillCard } from '..';
import { SkillsSectionProps } from './SkillsSection.types';

const SkillsSection: React.FC<SkillsSectionProps> = () => {
  return (
    <Section className="antialiased border-y border-slate-200/90 border-dashed">
      <Section.Wrapper className="py-52 border-0 md:border-x border-dashed border-inherit">
        <Section.Content>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Typography variant={'h3'}>
              Gute Webseiten waren noch nie so einfach.
            </Typography>
            <Typography variant={'h4'} className="mt-0.5">
              Als eine junge Webdesign Agentur bieten wir Qualitäten, die andere
              Agenturen nicht erreichen können. Unser Ziel ist es preiswerte
              Webseiten für jeden zu ermöglichen.
            </Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-8">
            <SkillCard
              highlighted
              title="Pixelperfect Design."
              className="col-span-1 md:col-span-2 lg:col-span-1"
            >
              Als junges Team sind wir in der Lage, frische und kreative Ideen
              zu entwicklen, die sich von der Masse abheben und auf deine
              Bedürfnisse maßgeschneidert sind.
            </SkillCard>
            <SkillCard title="High-End-Webentwicklung.">
              Wir setzen auf moderne Webtechnologien, wie Webflow, mit denen wir
              sicherstellen können, dass du immer eine technisch einwandfreie
              und optimierte Webseite erhalten wirst.
            </SkillCard>
            <SkillCard title="Faire Preise.">
              Wir glauben, dass jedes Unternehmen Zugang zu einer einwandfreien
              Webseite haben und dass Kosten keine Blockade sein sollten.
            </SkillCard>
          </div>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
};

export default SkillsSection;
