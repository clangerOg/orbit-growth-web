import React from 'react';

export type HeaderLink = {
  title: string;
  target: string;
  icon: React.JSX.Element;
};

export type HeaderProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  links?: HeaderLink[];
};
