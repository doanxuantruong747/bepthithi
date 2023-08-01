import { products } from '../../mockData/products'
import React from 'react'
import { CardProduct } from './CardProduct'
import { useRouter } from "next/router";

export const Products = () => {
 const router = useRouter()
 const handleClickProduct = (id, name) => {
  typeof window !== "undefined" && localStorage.setItem("productId", id);
  const nameReplace = name
  //.replaceAll(/\s+|[:\s\-]+/g, " ")
  //.toLowerCase()
  //.trim();
  router.push(`${nameReplace}`);
  // router.push(`/${slug}`)
 }
 return (
  <div className=' custom_container h-[auto] mx-[auto]'>

   <p className='pb-[50px] pl-5 text-[#000] font-bold text-[30px] '>There's something for everyone!</p>
   <div className=' flex flex-wrap container-product '>
    {products.map((product, index) => (
     <div onClick={() => { handleClickProduct(index, product?.name) }}>
      <CardProduct product={product} id={index} />
     </div>

    ))}
   </div>
  </div>


 )
}
