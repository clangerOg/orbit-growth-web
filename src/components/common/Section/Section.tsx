import classNames from 'classnames';
import { SectionProps } from '.';
import SectionContent from './SectionContent';
import SectionWrapper from './SectionWrapper';

const SectionComponent: React.FC<SectionProps> = ({ className, ...props }) => {
  return (
    <div
      {...props}
      className={classNames(
        'relative flex w-full flex-col items-center justify-center',
        className
      )}
    >
      {props.children}
    </div>
  );
};

SectionComponent.displayName = 'Section';

const Section = Object.assign(SectionComponent, {
  Wrapper: SectionWrapper,
  Content: SectionContent,
});

export default Section;
