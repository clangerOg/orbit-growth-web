import NavBar from '@/components/nav-bar';
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
      <NavBar links={HeaderLinks} />
      {children}
    </>
  );
}
