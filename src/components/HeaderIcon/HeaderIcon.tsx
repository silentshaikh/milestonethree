'use client';
import { poppins } from '@/utils/Helper/helper'
import Image from 'next/image'
import React from 'react'
import { Drawer, DrawerTrigger } from '../ui/drawer'
import CartDrawer from '../CartDrawer/CartDrawer'
import { useEcomHook } from '@/Context/Context';
import Link from 'next/link';

function HeaderIcon() {
  const {cartData,setNavTogg} = useEcomHook();
  const {wishList} = cartData;
  return (
    <>
    <div className={`${poppins.className} flex gap-5  text-[#23a6f0] text-sm items-center`}>
      <Image className="size-4" onClick={() => setNavTogg(false)}  src='/images/icn settings icn-xs.png' alt="search"
      height={10}
      width={10}
      />
      
      <Drawer>
        <DrawerTrigger>

      <div className='flex gap-1 items-center relative' onClick={() => setNavTogg(false)}>
      <Image className="size-4" src='/images/Vector (4).png' alt="cart"
      height={10}
      width={10}
      />
      <p className='absolute left-5 bottom-2'>{cartData.totalQuantity}</p>
      </div>
      </DrawerTrigger>
      <CartDrawer/>
      </Drawer>
      
      <Link href='/wishlist'>
      <div className='flex gap-1 items-center relative' onClick={() => setNavTogg(false)}>
      <Image className="size-4" src='/images/Vector (5).png' alt="wishlist"
      height={10}
      width={10}
      />
      <p className='absolute left-5 bottom-2'>{wishList.length}</p>
      </div>
      </Link>
      </div>

      </>
  )
}

export default HeaderIcon
