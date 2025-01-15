'use client';
import { useEcomHook } from "@/Context/Context";
// import { poppins } from "@/utils/Helper/helper";
import { CartListType } from "@/utils/Type/type";
import Image from "next/image";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

export default function CartCard({productcategory,productcolor,productimage,productname,productprice,productquantity,productid}:CartListType) {
 const {cartProdInc,cartProdDec} = useEcomHook();

  return (
    <>
    <div key={productid} className="flex justify-center gap-20 items-start border-t-2 py-1  max-[1225px]:gap-10 max-[850px]:text-sm max-[720px]:text-[13px] ">
      <Image className="size-[150px] max-[935px]:size-[120px] max-[850px]:size-[100px] max-[720px]:size-[80px] max-[700px]:size-[100px] max-[320px]:size-[80px]" src={productimage} alt={productname} height={100} width={200}/>
      <div className="flex flex-col gap-2">
    <h3 className="font-bold ">{productname}</h3>
    <h4>{productcategory}</h4>
    <div className="flex items-center gap-2">
    <h5 className="font-semibold">Color :</h5>
    <div style={{backgroundColor:productcolor}} className="size-[15px] rounded-full max-[850px]:size-[12px]"></div>
    </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h2 className="font-bold">Quantity</h2>
       <div className='flex  items-center gap-2 '>
               <button className='' onClick={() => cartProdDec(productid,productquantity)}><FiMinus />
               </button>
               <h5 className="font-bold">{productquantity}</h5>
               <button className='' onClick={() => cartProdInc(productid)}><GoPlus />
               </button>
             </div>
      </div>
      <div className="flex flex-col gap-2">
      <h3 className="font-bold">Price</h3>
      <h4>${productprice}</h4>
      </div>
    </div>
    </>
  );
}
