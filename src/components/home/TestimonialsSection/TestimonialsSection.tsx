import { Section } from '@/components/common';
import Image from 'next/image';
import { TestimonialsSectionProps } from './TestimonialsSection.types';

const TestimonialsSection: React.FC<TestimonialsSectionProps> = () => {
  return (
    <Section className="antialiased bg-slate-100 border-b border-slate-200/90 border-dashed">
      <Section.Wrapper className="border-0 md:border-x border-dashed border-slate-300/90 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-dashed divide-slate-300/90">
        <div className="md:pr-6 py-20 md:py-52">
          <p className="text-xl text-slate-600 leading-8">
            “Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.”
          </p>
          <div className="mt-6 flex gap-4 items-center">
            <div className="w-9 aspect-square flex-shrink-0 relative">
              <Image
                src={
                  'https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                }
                alt=""
                fill
                className="object-cover object-center rounded-full"
              />
            </div>
            <div className="text-sm text-slate-600">
              <p className="font-semibold text-slate-900">Max Mustermann</p>
              <p>CEO Mustercompany, Somebranche</p>
            </div>
          </div>
        </div>
        <div className="md:pl-6 py-20 md:py-52">
          <p className="text-xl text-slate-600 leading-8">
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
