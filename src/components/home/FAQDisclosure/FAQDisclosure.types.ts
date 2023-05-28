import React from 'react';

export type FAQDisclosureProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  question: string;
  answer: string;
};
