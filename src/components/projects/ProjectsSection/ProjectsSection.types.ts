import { SectionProps } from '@/components/common';
import { Project } from '@/lib/types';

export type ProjectsSectionProps = SectionProps & {
  projects?: Project[];
};
