import banhLocChay from '@/assets/home/banhlocchay.jpg';
import bgHero from '@/assets/hero/banner.jpg';
import Image from 'next/image';


export const Hero = () => {


  return (
    <div className=" pt-[80px] h-[full] w-full flex items-center justify-center ">
      <Image src={bgHero} fill objectFit="content" />
    </div>
  );
};


