import { Section, Typography } from '@/components/common';
import Image from 'next/image';
import SkillsBG from '../../../public/landing/Skills_Grid_Bg.png';
import TECard from '../../../public/landing/TE_Card.png';
import TECard2 from '../../../public/landing/TE_Card2.png';
import TECard3 from '../../../public/landing/TE_Card3.png';

const ProjectsSection: React.FC = () => {
  return (
    <>
      <Section className="pt-52">
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
      <Section className="mt-12 pb-52">
        <div className="absolute top-0 -z-30">
          <Image src={SkillsBG} alt="Hero Background Image" />
        </div>
        <Section.Wrapper>
          <Section.Content className="grid grid-cols-1 gap-8 pt-12 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-8 shadow-lg">
              <Typography variant={'h5'}>
                Travel Explorer Website Redesign
              </Typography>
              <Typography variant={'h6'} className="mt-4">
                Überall dieselbe alte Leier. Das Layout ist fertig, der Text
                lässt auf sich warten. Damit das Layout nun nicht nackt im Raume
                steht und sich klein und leer vorkommt, springe ich ein.
              </Typography>
              <div className="mt-14 h-72 w-full" />

              <div className="absolute -left-1/3 bottom-8 flex h-72 gap-8">
                <Image
                  src={TECard}
                  alt=""
                  className="rounded-lg border border-slate-200"
                />
                <Image
                  src={TECard2}
                  alt=""
                  className="rounded-lg border border-slate-200 transition-shadow group-hover:shadow-lg"
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
