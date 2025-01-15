import React from 'react'
import OrderBox from '../OrderBox/OrderBox'
import CartCard from '../CartCard/CartCard'
import { useEcomHook } from '@/Context/Context'
import { DrawerClose, DrawerContent,DrawerHeader } from '../ui/drawer'
import { poppins, rubikBuble } from '@/utils/Helper/helper'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import { WarpBackground } from '../ui/warp-background'
import MorphingText from '../ui/morphing-text';
import RippleButton from '../ui/ripple-button'
import OrderAlert from '../OrderAlert/OrderAlert'
const morpTexts = [
  "Welcome",
  "To",
  "Our",
  "Cart Page",
  "Here",
  "Have",
  "That You",
  "Want To",
  "Buy",
];
function CartDrawer() {
    const {cartData,orderMessage} = useEcomHook()
  return (
    <>

    <DrawerContent className={`${poppins.className} `}>
      <OrderAlert/>
    <WarpBackground>
    <DrawerHeader>
      {/* <DrawerTitle className='mint'>Cart Area</DrawerTitle> */}
      <MorphingText texts={morpTexts} className={`text-slate-400 ${rubikBuble.className}`}/>
      {/* <DrawerDescription>See Your Carts</DrawerDescription> */}
    </DrawerHeader>
    <div className="flex justify-center gap-44 items-center py-5 max-[1270px]:gap-32 max-[1090px]:gap-20  max-[720px]:justify-evenly max-[700px]:flex-col max-[700px]:justify-center max-[700px]:gap-5 " >
    

    {/* </ScrollArea> */}
{cartData.addCartProd.length===0 ? ( <> <h1 className={`${rubikBuble.className} text-5xl w-[250px] text-center `}>{orderMessage}</h1></>) : ( 
    <ScrollArea className=' max-[935px]:w-[700px] max-[800px]:w-[900px] max-[720px]:w-[1000px] max-[700px]:w-[480px] max-[500px]:w-[400px] max-[420px]:w-[350px] max-[370px]:w-[300px] max-[320px]:w-[250px]'>
   <div className="flex flex-col py-5 px-1 h-[53vh]  max-[1210px]:w-[550px] max-[935px]:w-[500px] max-[850px]:w-[450px] max-[720px]:w-[400px]  max-[700px]:h-[25vh] max-[700px]:w-[450px]  max-[700px]:py-1 max-[320px]:w-[400px] max-[375px]:h-[20vh]">
     {
         cartData.addCartProd.map((e) => {
             return(
                 <CartCard key={e.productid} productcategory={e.productcategory} productcolor={e.productcolor} productid={e.productid} productimage={e.productimage} productname={e.productname} productprice={e.productprice} productquantity={e.productquantity}  />
                )
            })
        }
  </div>
  <ScrollBar orientation="horizontal" />
  </ScrollArea>
)}

     <OrderBox/>
     </div>
     <DrawerClose asChild>
              <RippleButton rippleColor='#81ecec' >Go Back</RippleButton>
            </DrawerClose>
    </WarpBackground>
        </DrawerContent>
    </>
  )
}

export default CartDrawer
