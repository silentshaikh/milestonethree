'use client';
import { useEcomHook } from '@/Context/Context';
import {  ProductList } from '@/utils/Type/type'
import Image from 'next/image';

function Card({clothlist}:{clothlist:ProductList}) {
    const {onProductDetail} = useEcomHook();
    const {product_name,product_img,product_id,color_list,product_type,old_price,new_price} = clothlist;
  return (
    <div  className='flex flex-col items-center cursor-pointer' onClick={() => onProductDetail(product_id)}>
                    <Image
                    className='h-[100%]'
                        src={product_img}
                        alt={product_name}
                        height={170}
                        width={235}
                    />
                    <h4 className='pt-4 font-bold'>{product_name}</h4>
                    <h5 className='py-2 text-sm font-bold text-[#737373]'>{product_type}</h5>
                    <div className='flex gap-2 text-sm font-bold'>
                        <p className='text-[#bdbdbd]'>${old_price}</p>
                        <p className='text-[#23a56d]'>${new_price}</p>
                    </div>
                    <div className="flex gap-2 pt-2">
                        {
                            color_list.map((e,i) => {
                                return(
                                    <div key={i} style={{backgroundColor:e}} className={` size-4 rounded-full`}></div>
                                );
                            })
                        }
                    </div>
                        
                </div>
  )
}

export default Card
