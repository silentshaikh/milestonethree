'use client';
import Card from '../Card/Card'
import { useEcomHook } from '@/Context/Context';
import ProductLoad from '../ProductLoad/ProductLoad';

function HomeSellerList() {
  const {homeList,fullList} = useEcomHook();
  console.log(fullList);
  if(homeList){
    return (
      <div className='flex justify-center gap-12 items-center flex-wrap pt-10'>
        {
          homeList.map((e) => {
              return(
                  <Card key={e.id} clothlist={e}/>
              )
          })
        }
      </div>
    )
  }else{
    return(
      <ProductLoad/>
    )
  }
}

export default HomeSellerList
