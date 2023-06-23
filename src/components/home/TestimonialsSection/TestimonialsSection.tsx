import { Section } from '@/components/common';
import Image from 'next/image';
import { TestimonialsSectionProps } from './TestimonialsSection.types';

const TestimonialsSection: React.FC<TestimonialsSectionProps> = () => {
  return (
    <Section className="border-b border-dashed border-slate-200/90 bg-slate-100 antialiased">
      <Section.Wrapper className="grid grid-cols-1 divide-y divide-dashed divide-slate-300/90 border-0 border-dashed border-slate-300/90 md:grid-cols-2 md:divide-x md:divide-y-0 md:border-x">
        <div className="py-20 md:py-52 md:pr-6">
          <p className="text-xl leading-8 text-slate-600">
            “Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.”
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="relative aspect-square w-9 flex-shrink-0">
              <Image
                src={
                  'https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                }
                alt=""
                fill
                className="rounded-full object-cover object-center"
              />
            </div>
            <div className="text-sm text-slate-600">
              <p className="font-semibold text-slate-900">Max Mustermann</p>
              <p>CEO Mustercompany, Somebranche</p>
            </div>
          </div>
        </div>
        <div className="py-20 md:py-52 md:pl-6">
          <p className="text-xl leading-8 text-slate-600">
            “Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.”
          </p>
          <div className="mt-6">
            <div></div>
            <div className="text-sm text-slate-600">
              <p className="font-semibold text-slate-900">Max Mustermann</p>
              <p>CEO Mustercompany, Somebranche</p>
            </div>
          </div>
        </div>
      </Section.Wrapper>
    </Section>
  );
};

export default TestimonialsSection;
