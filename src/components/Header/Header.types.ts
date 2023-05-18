import React from 'react';

export type HeaderLink = {
  title: string;
  target: string;
};

export type HeaderProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  links?: HeaderLink[];
};
