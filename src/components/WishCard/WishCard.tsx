'use client';
import {  ProductList } from '@/utils/Type/type'
import Image from 'next/image';
import BlurFade from '../ui/blur-fade';
import ShinyButton from '../ui/shiny-button';
import { useRouter } from 'next/navigation';

function WishCard({cloth}:{cloth:ProductList}) {
    const {id,product_img,product_name,product_id} = cloth;
    const navigDetail = useRouter();
  return (
    <BlurFade key={product_img} delay={0.25 + id * 0.05} inView>

    <div className='flex w-[400px] flex-col items-center  text-center shadow max-[420px]:w-[290px] max-[300px]:w-[250px]'>
      <Image className='h-[200px] w-[400px] max-[420px]:w-[290px] max-[300px]:w-[250px]' src={`${product_img}`} alt={product_name} height={200} width={200}/>
      <div className="flex items-center gap-10 py-1 max-[300px]:gap-5">
    <h3 className='font-bold text-slate-400 max-[300px]:text-sm'>{product_name}</h3>
    <ShinyButton className='outline-none text-teal-300 max-[300px]:text-sm' onClick={() => navigDetail.push(`/product/${product_id}`)}>Buy Now</ShinyButton>
      </div>
    </div>
    </BlurFade>
  )
};
export default WishCard;