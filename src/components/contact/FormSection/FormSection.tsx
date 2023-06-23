import { ContactForm, Headings } from '../';
import { FormSectionProps } from './FormSection.types';

const FormSection: React.FC<FormSectionProps> = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* Left Side Wrapper */}
      <Headings />

      {/* Right Side Wrapper */}
      <ContactForm />
    </div>
  );
};

export default FormSection;
