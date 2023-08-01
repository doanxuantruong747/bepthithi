import Image from 'next/image'
import React from 'react'
import star from "@/assets/products/star.png";
import { Racting } from './Racting';

export const CardProduct = ({ product, id, index }) => {

 return (
  <div key={id} className=' md:mr-[25px] mx-[9px] card mt-[25px] w-[350px] h-[auto] shadow-sm shadow-[#000] rounded-[20px] hover:scale-[1.03] transition-all duration-300'>
   <div className=' cursor-pointer  '>
    <Image src={product.img[0]} alt="" className=" border-card-product pb-[10px]" width={350} height={310} />

    <p className='text-[18px] font-semibold pt-[7px] px-[5px]'>{product.name}</p>
    {/* <p className='text-[14px] font-normal pt-[7px] px-[5px] card_text_ellipsis '>{product.describe}</p> */}
    <div className='pl-[5px] pt-[10px]'>
     <Racting rating={product.race} />
    </div>

    <div className='py-[10px] pl-[10px] flex items-center '>
     {product.price > 0
      ? (<><p className=''><span className='text-[16px] text-[#636060] font-normal line-through pt-[10px]'>{product.price.toLocaleString()}</span><span>đ</span></p>
       <p className='pl-[15px] text-[22px] text-[#181717] font-semibold'>{product.priceSale.toLocaleString()}<span>đ</span> <span className='text-[18px] font-medium'>{`/ ${product.unit}`}</span></p>
      </>)
      : (<p className='text-[18px] text-[#181717] font-semibold'>Theo thời giá - liên hệ Zalo  </p>)
     }

    </div>

    <div className=''>

    </div>

   </div>
  </div>
 )
}
