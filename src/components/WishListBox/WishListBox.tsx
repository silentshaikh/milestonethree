'use client';
import { poppins, rubikBuble } from '@/utils/Helper/helper'
import React from 'react'
import WishCard from '../WishCard/WishCard'
import { useEcomHook } from '@/Context/Context'
import { TextAnimate } from '../ui/text-animate';

function WishListBox() {
    const {cartData} = useEcomHook();
  if(cartData.wishList.length === 0){
    return(
        <div className='py-20'>
         {/* <h1 className={`${rubikBuble.className} text-4xl text-center`}>No Wish List Available</h1> */}
            <TextAnimate animation="blurIn" className={`${rubikBuble.className} text-4xl text-center text-slate-400  max-[320px]:w-[200px]`}>No Wish List Available</TextAnimate>
        </div>
    )
  }else{
    return (
        <div className={`${poppins.className} flex justify-center items-center gap-5 flex-wrap`}>
          {
            cartData.wishList.map((e) => {
                return <WishCard key={e.id} cloth={e} />
            })
          }
        </div>
      )
  }
}

export default WishListBox
