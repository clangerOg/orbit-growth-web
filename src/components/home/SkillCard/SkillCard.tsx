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
        'h-fit rounded-md p-6',
        highlighted ? 'bg-slate-50' : 'bg-slate-50',
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
