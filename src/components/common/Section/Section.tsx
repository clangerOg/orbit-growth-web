import classNames from 'classnames';
import { forwardRef } from 'react';
import { SectionProps } from '.';
import SectionContent from './SectionContent';
import SectionWrapper from './SectionWrapper';

const SectionComponent: React.FC<SectionProps> = forwardRef<
  HTMLDivElement,
  SectionProps
>((props, ref) => {
  const { className, ...otherProps } = props;

  return (
    <section
      {...otherProps}
      ref={ref}
      className={classNames(
        'relative flex w-full flex-col items-center justify-center',
        className
      )}
    >
      {props.children}
    </section>
  );
});

SectionComponent.displayName = 'Section';

const Section = Object.assign(SectionComponent, {
  Wrapper: SectionWrapper,
  Content: SectionContent,
});

export default Section;
