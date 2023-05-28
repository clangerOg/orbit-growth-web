import classNames from 'classnames';
import { SkillCardProps } from './SkillCard.types';

const SkillCard: React.FC<SkillCardProps> = ({
  highlighted = false,
  title,
  className,
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={classNames(
        'p-6 rounded-md h-fit',
        highlighted ? 'bg-slate-100' : 'border border-slate-200',
        className
      )}
    >
      <p
        className={classNames(
          'text-base leading-7',
          highlighted ? 'text-slate-600' : 'text-slate-500'
        )}
      >
        <span className="font-semibold text-slate-900">{title}</span> {children}
      </p>
    </div>
  );
};

export default SkillCard;