import { poppins, rubikBuble } from '@/utils/Helper/helper'
import React from 'react'
import PriceBox from '../PriceBox/PriceBox';
import OrderForm from '../OrderForm/OrderForm';
import { useEcomHook } from '@/Context/Context';

function OrderBox() {
  const {cartData} = useEcomHook();
  const {shipping,totalPrice} = cartData;
  return (
    <div className={`border-2 p-5 ${poppins.className} max-[1160px]:w-[400px] max-[935px]:w-[500px] max-[720px]:w-[800px] max-[700px]:w-[400px] max-[420px]:w-[350px] max-[370px]:w-[300px] max-[320px]:w-[250px]`}>
      <h2 className={`capitalize text-2xl  ${rubikBuble.className}`}>order summary</h2>
      <PriceBox name='Sub Total: ' price={totalPrice}/>
      <PriceBox name='Shipping: ' price={shipping}/>
      <PriceBox name='Total: ' price={totalPrice>0? totalPrice+shipping: totalPrice}/>
      <OrderForm/>
    </div>
  );
};
export default OrderBox;