import classNames from 'classnames';
import { SectionContentProps } from './Section.types';

const SectionContent: React.FC<SectionContentProps> = ({
  className,
  ...props
}) => {
  return (
    <div {...props} className={classNames('w-full', className)}>
      {props.children}
    </div>
  );
};

export default SectionContent;
