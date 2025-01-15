'use client';
import { useEcomHook } from '@/Context/Context';
import { rubikBuble } from '@/utils/Helper/helper'


function OrderAlert() {
    const {orderEmpty} = useEcomHook();
  return (
     <div className={`${rubikBuble.className} transition-all fixed top-80 ${orderEmpty ? 'left-[40%]' : '-left-[40%]'}  flex justify-center text-red-500 bg-slate-200 py-5 px-6 rounded-md`}>
          <p className=''>Please Fill the Fields</p>
        </div>
  )
}

export default OrderAlert
