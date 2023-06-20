import React from 'react';
import { Project } from '../../_types/project.type';

export type ProjectCardProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  project: Project;
};
