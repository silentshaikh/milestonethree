'use client';
import { useEcomHook } from "@/Context/Context";
import { CiHeart } from "react-icons/ci";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import ProductQuantity from "../ProductQuantity/ProductQuantity";

function ProductImgContent({
  color,
  name,
  price,
  available,
  id
}: {
  color: string[];
  name: string;
  price: number;
  available:boolean;
  id:string;
  quantity:number

}) {
  const {setProdColor,cartData,addToCart,addWishList,colr} = useEcomHook();
  return (
    <div>
      <h2 className="text-xl">{name}</h2>
      <div className="flex items-center gap-2 py-3">
        <div className="flex gap-2 text-yellow-300 text-lg">
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarOutline />
        </div>
        <p className="text-sm font-bold text-[#737373]">10 Reviews</p>
      </div>
      <h3 className="font-bold text-2xl py-2">${price}</h3>
      
      <p className="text-[#737373] font-bold pb-2 ">
        Availability: <span className="text-[#23a6f0] text-sm">{available ? "InStock" : "Out of Stock"}</span>
      </p>
      <ProductQuantity id={id} />
      <p className="text-[#737373] w-[500px] pt-2 pb-4 max-[1000px]:w-[400px] max-[950px]:text-[14px] max-[520px]:w-[300px] max-[450px]:py-3 max-[380px]:text-[13px] max-[350px]:w-[250px] max-[320px]:w-[220px]">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent door ENIM RELIT Mollie. Excitation venial
        consequent sent nostrum met.
      </p>
      
      <div className="flex gap-2 pt-2">
        {color.map((e,i) => {
          return (
            <div
              key={i}
              style={{ backgroundColor: e }}
              onClick={() => setProdColor(e)}
              className={`${e === cartData.productColor ? 'border-4 border-teal-200' :''} size-9 rounded-full max-[380px]:size-6`}
            ></div>
          );
        })}
      </div>
      <div className="flex items-center gap-5 pt-16 max-[950px]:pt-7 max-[350px]:gap-3 max-[320px]:flex-col">
        <button className="bg-[#23a6f0] py-3 px-4 rounded-md text-white text-sm font-bold" onClick={() => addToCart(id) }>Add To Cart</button>
        <div className="flex gap-3">
       <button className={`shadow size-10 p-3 rounded-full text-lg ${colr ? 'text-teal-400 fondt-bold' :''} max-[380px]:size-8`} onClick={() => addWishList(id)}><CiHeart  /></button> 
        {/* <BsCart className="shadow size-10 p-2 rounded-full max-[380px]:size-8" /> */}
        {/* <FaEye className="shadow size-10 p-2 rounded-full max-[380px]:size-8" /> */}
        </div>
      </div>
    </div>
  );
}

export default ProductImgContent;
