import Section from '../Section/Section';
import Typography from '../Typography/Typography';
import { CTAProps } from './CTA.types';

const CTA: React.FC<CTAProps> = () => {
  return (
    <Section>
      <Section.Wrapper>
        <Section.Content>
          <div className="max-w-6xl bg-slate-900 rounded-lg shadow-lg p-8 flex flex-col items-center justify-center">
            <Typography variant={'h3'} className="text-center !text-white">
              Ready for takeoff?
            </Typography>
            <Typography variant={'h4'} className="text-center text-slate-400">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.{' '}
            </Typography>
          </div>
        </Section.Content>
      </Section.Wrapper>
    </Section>
  );
};

export default CTA;
