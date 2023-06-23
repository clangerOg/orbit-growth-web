import { Header } from '@/components/layout';
import React from 'react';
import { HeaderLinks } from '../layout';

export type MarketingLayoutProps = {
  children: React.ReactNode;
};

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <>
      <Header links={HeaderLinks} />
      {children}
    </>
  );
}
