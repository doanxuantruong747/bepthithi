import ScrollTop from '@/components/ScrollTop';
import 'animate.css';
import 'animate.css/animate.min.css';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import '../../i18next';

const LayoutWrapper = dynamic(() => import('@/components/Layout/Layout'), {
  ssr: false,
});

export default function business() {
  return (
    <React.Suspense>
      <Head>
        <title>Ario</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutWrapper>

        <ScrollTop />
      </LayoutWrapper>
    </React.Suspense>
  );
}
