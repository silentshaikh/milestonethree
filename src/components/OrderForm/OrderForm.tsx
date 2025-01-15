'use client';

import { useEcomHook } from "@/Context/Context";

function OrderForm() {
  const {isChecked,onHandleCheck,onHandleTerms} = useEcomHook();
  return (
    <form action="" className='flex flex-col items-center' onSubmit={(e) => onHandleTerms(e)}>
        <div className="flex gap-2 pb-2">
        <input type="checkbox" name="" id="" checked={isChecked} onChange={onHandleCheck} />
        <label htmlFor="" className="max-[1303px]:text-sm max-[980px]:text-[13px] max-[935px]:text-[12px] ">I agree to the Terms and Conditions</label>
        </div>
        <button className='bg-[#23A6F0] py-2 px-3 tracking-widest text-white'>Order</button>
    </form>
  )
}

export default OrderForm
