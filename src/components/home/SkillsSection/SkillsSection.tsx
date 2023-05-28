import { Section } from '@/components/common';
import { SkillCard } from '..';
import { SkillsSectionProps } from './SkillsSection.types';

const SkillsSection: React.FC<SkillsSectionProps> = () => {
  return (
    <Section className="antialiased border-y border-slate-200/90 border-dashed">
      <Section.Wrapper className="py-52 border-0 md:border-x border-dashed border-inherit">
        <Section.Content>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <h3 className="sm:text-4xl text-3xl text-slate-900 font-bold tracking-tight max-w-2xl text-left">
              Gute Webseiten waren noch nie so einfach.
            </h3>
            <h4 className="text-lg leading-8 text-slate-500 max-w-3xl text-left mt-0.5">
              Als eine junge Webdesign Agentur bieten wir Qualitäten, die andere
              Agenturen nicht erreichen können. Unser Ziel ist es preiswerte
              Webseiten für jeden zu ermöglichen.
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-8">
            <SkillCard
              highlighted
              title="Pixelperfect Design."
              className="col-span-1 md:col-span-2 lg:col-span-1"
            >
              Als junges Team sind wir in der Lage, frische und kreative Ideen
              zu entwicklen, die sich von der Masse abheben und auf deine
              Bedürfnisse amßgeschneidert sind.
            </SkillCard>
            <SkillCard title="High-End-Webentwicklung.">
              Unsere Agentur setzt auf moderne Webtechnologien, wie Webflow, mit
              denen wir sicherstellen können, dass du immer eine technisch
              einwandfreie und optimierte Webseite erhalten wirst.
            </SkillCard>
            <SkillCard title="Schnelle Umsetzung.">
              Als junges und agiles Team können wir Projekte schnell und
              effizient umsetzen, ohne Kompromisse bei der Qualität einzugehen.
            </SkillCard>
          </div>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
};

export default SkillsSection;
