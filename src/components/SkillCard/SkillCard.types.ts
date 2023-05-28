import React from 'react';

export type SkillCardProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  highlighted?: boolean;
  title: string;
};
