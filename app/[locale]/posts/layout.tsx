import InnerBanner from '@/components/InnerBanner';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <InnerBanner page=""/>
      {children}
    </>
  );
}
