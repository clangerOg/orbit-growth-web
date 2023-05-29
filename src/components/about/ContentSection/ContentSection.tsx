import { Section, Typography } from '@/components/common';
import { ContentSectionProps } from './ContentSection.types';

const ContentSection: React.FC<ContentSectionProps> = () => {
  return (
    <Section className="antialiased border-b border-slate-200/90 border-dashed">
      <Section.Wrapper className="py-52 border-0 md:border-x border-dashed border-inherit">
        <Section.Content>
          <Typography variant={'h3'}>Our mission</Typography>
          <div className="grid grid-cols-1 lg:grid-cols-4 mt-6 gap-x-16 gap-y-24">
            <div className="lg:col-span-3">
              <Typography variant={'h4'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </Typography>
              <Typography variant={'p'} className="mt-9">
                Denn esse est percipi - Sein ist wahrgenommen werden. Und weil
                Sie nun schon die Güte haben, mich ein paar weitere Sätze lang
                zu begleiten, möchte ich diese Gelegenheit nutzen, Ihnen nicht
                nur als Lückenfüller zu dienen, sondern auf etwas hinzuweisen,
                das es ebenso verdient wahrgenommen zu werden: Webstandards
                nämlich.
              </Typography>
              <Typography variant={'p'} className="mt-9">
                Denn esse est percipi - Sein ist wahrgenommen werden. Und weil
                Sie nun schon die Güte haben, mich ein paar weitere Sätze lang
                zu begleiten, möchte ich diese Gelegenheit nutzen, Ihnen nicht
                nur als Lückenfüller zu dienen, sondern auf etwas hinzuweisen,
                das es ebenso verdient wahrgenommen zu werden: Webstandards
                nämlich.
              </Typography>
            </div>
            <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <p className="text-5xl text-slate-900 font-medium">2023</p>
                <p className="mt-1 text-slate-500 text-base">gegründet</p>
              </div>
              <div>
                <p className="text-5xl text-slate-900 font-medium">+130</p>
                <p className="mt-1 text-slate-500 text-base">
                  zufriedene Kunden
                </p>
              </div>
              <div>
                <p className="text-5xl text-slate-900 font-medium">46,000</p>
                <p className="mt-1 text-slate-500 text-base">
                  Erreichte Kunden
                </p>
              </div>
            </div>
          </div>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
};

export default ContentSection;
