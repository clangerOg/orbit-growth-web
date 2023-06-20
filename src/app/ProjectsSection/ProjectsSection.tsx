import { Section, Typography } from '@/components/common';
import Image from 'next/image';
import SkillsBG from '../../../public/landing/Skills_Grid_Bg.png';
import TECard from '../../../public/landing/TE_Card.png';
import TECard2 from '../../../public/landing/TE_Card2.png';
import TECard3 from '../../../public/landing/TE_Card3.png';

const ProjectsSection: React.FC = () => {
  return (
    <>
      <Section>
        <Section.Wrapper>
          <Section.Content>
            <div className="">
              <Typography variant={'h3'}>
                Gute Webseiten waren noch nie so einfach.
              </Typography>
              <Typography variant={'h4'} className="mt-6">
                Als eine junge Webdesign Agentur bieten wir Qualitäten, die
                andere Agenturen nicht erreichen können. Unser Ziel ist es
                preiswerte Webseiten für jeden zu ermöglichen.
              </Typography>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
      <Section className="mt-12">
        <div className="absolute -z-30 top-0">
          <Image src={SkillsBG} alt="Hero Background Image" />
        </div>
        <Section.Wrapper>
          <Section.Content className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
            <div className="p-8 bg-white shadow-lg rounded-lg border border-slate-200 group overflow-hidden relative">
              <Typography variant={'h5'}>
                Travel Explorer Website Redesign
              </Typography>
              <Typography variant={'h6'} className="mt-4">
                Überall dieselbe alte Leier. Das Layout ist fertig, der Text
                lässt auf sich warten. Damit das Layout nun nicht nackt im Raume
                steht und sich klein und leer vorkommt, springe ich ein.
              </Typography>
              <div className="h-72 w-full mt-14" />

              <div className="flex gap-8 h-72 absolute bottom-8 -left-1/3">
                <Image
                  src={TECard}
                  alt=""
                  className="rounded-lg border border-slate-200"
                />
                <Image
                  src={TECard2}
                  alt=""
                  className="rounded-lg border border-slate-200 group-hover:shadow-lg transition-shadow"
                />
                <Image
                  src={TECard3}
                  alt=""
                  className="rounded-lg border border-slate-200"
                />
              </div>
            </div>
          </Section.Content>
        </Section.Wrapper>
      </Section>
    </>
  );
};

export default ProjectsSection;
