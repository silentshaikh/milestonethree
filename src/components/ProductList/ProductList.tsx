'use client';
import { poppins} from '@/utils/Helper/helper';
import Card from '../Card/Card';
import { useEcomHook } from '@/Context/Context';
import ProductLoad from '../ProductLoad/ProductLoad';
function ProductList() {
  const {productList} = useEcomHook();
  if(productList){
    return (
      <section className={`${poppins.className} pt-10 flex justify-center flex-wrap gap-12`}>
        {
          productList.map((e) => {
            return(
              <Card key={e.id} clothlist={e}/>
            );
          })
        }
      </section>
    )
  }else{
    return(
      <ProductLoad/>
    )
  }
}

export default ProductList
