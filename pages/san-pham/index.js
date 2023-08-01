import HotLine from '@/components/HotLine';
import ScrollTop from '@/components/ScrollTop';
import { About } from '@/components/about/About';
import { Products } from '@/components/products/Products';
import 'animate.css';
import 'animate.css/animate.min.css';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';


const LayoutWrapper = dynamic(() => import('@/components/Layout/Layout'), {
  ssr: false,
});

export default function Home() {


  return (
    <React.Suspense>
      <Head>
        <title>Bếp Thi Thi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutWrapper>
        {/* {isShow && 
        <Popup setIsShow={setIsShow}/>
        } */}
        {/* <Hero />
        <SliderVideo /> */}
        <Products />
        <About />
        <HotLine />

      </LayoutWrapper>
    </React.Suspense>
  );
}
