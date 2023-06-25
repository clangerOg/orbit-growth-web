import { CallToAction } from '@/components/call-to-action';
import { NavBar } from '@/components/nav-bar';
import { siteConfig } from '@/config/site';
import React from 'react';

export type MarketingLayoutProps = {
  children: React.ReactNode;
};

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <>
      <NavBar links={siteConfig.mainNav} />
      {children}
      <CallToAction />
    </>
  );
}
