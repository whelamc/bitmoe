import InnerBanner from '@/components/InnerBanner';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const title = '文档';
  return (
    <>
      <InnerBanner title={title} page=""/>
      {children}
    </>
  );
}
