'use client';
// import { useEcomHook } from '@/Context/Context'
import React from 'react'
import OrderBox from '../OrderBox/OrderBox';
// import CartCard from '../CartCard/CartCard';
function CartPage() {
    // const {cartData} = useEcomHook();
  return (
    <div className="flex justify-center gap-44 items-center">

{/* {cartData.addCartProd.length===0 ? ( <> <h1>No items</h1></>) : (  <div className="flex flex-col py-5">
     {
       cartData.addCartProd.map((e) => {
         return(
           <CartCard key={e.productid} productcategory={e.productcategory} productcolor={e.productcolor} productid={e.productid} productimage={e.productimage} productname={e.productname} productprice={e.productprice} productquantity={e.productquantity}  />
         )
       })
     }
  </div>)} */}

     <OrderBox/>
     </div>
  )
}

export default CartPage
