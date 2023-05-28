import classNames from "classnames";
import { SectionWrapperProps } from "./Section.types";

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  className,
  ...props
}) => {
  return (
    <div {...props} className={classNames("w-full max-w-6xl px-6", className)}>
      {props.children}
    </div>
  );
};

export default SectionWrapper;
