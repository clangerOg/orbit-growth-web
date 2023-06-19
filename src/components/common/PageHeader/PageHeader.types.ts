import React from 'react';

export type PageHeaderProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  title: string;
  desc: string;
};
