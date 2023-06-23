import { Project } from '@/lib/types';
import React from 'react';

export type ProjectCardProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  project: Project;
};
