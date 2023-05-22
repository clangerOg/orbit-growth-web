import { ThumbnailProjectType } from '@/lib/sanity/types/project.type';
import React from 'react';

export type ProjectThumbnailProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  project: ThumbnailProjectType;
};
