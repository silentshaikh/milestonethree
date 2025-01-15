'use client';
import { poppins } from '@/utils/Helper/helper'
import React from 'react'
import ProductImg from '../ProductImg/ProductImg';
import ProductImgContent from '../ProductImgContent/ProductImgContent';
import { useEcomHook } from '@/Context/Context';
// import { Toaster } from 'sonner';


function ProdDetail({id}:{id:string}) {
  const {fullList} = useEcomHook();
  const productDetail = fullList.find((e) => {
    return e.product_id === id;
  });
 if(productDetail){
  return (
    <>
    <section className={`${poppins.className} flex justify-evenly items-center bg-[#fafafa] pt-32 pb-10 max-[700px]:flex-col max-[700px]:gap-10`}>
      <ProductImg img={productDetail.product_img} name={productDetail.product_name} imglist={productDetail.img_list} />
      <ProductImgContent id={productDetail.product_id} name={productDetail.product_name} available={productDetail.availability} color={productDetail.color_list} price={productDetail.new_price} quantity={productDetail.productQuantity}/>
    
    </section>
    {/* <Toaster /> */}
    </>
  )
 }
}

export default ProdDetail;
