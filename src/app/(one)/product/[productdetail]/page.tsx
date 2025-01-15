// import CartDrawer from "@/components/CartDrawer/CartDrawer"
import CartAlert from "@/components/CartAlert/CartAlert"
import CompanyBar from "@/components/CompanyBar/CompanyBar"
import EmptyAlert from "@/components/EmptyAlert/EmptyAlert"
import OtherProduct from "@/components/OtherProduct/OtherProduct"
import OtherSeller from "@/components/OtherSeller/OtherSeller"
import ProdDetail from "@/components/ProdDetail/ProdDetail"
// import { Toaster } from "@/components/ui/sonner"


function ProductDetail({params}:{params:{productdetail:string}}) {
  return (
    <main>
      {/* {params.productdetail} */}
      <ProdDetail id={params.productdetail} />
      <OtherProduct/>
      <OtherSeller/>
      <EmptyAlert/>
      <CartAlert/>
      <CompanyBar/>

      {/* <CartDrawer/> */}
      {/* <Toaster /> */}
    </main>
  )
}

export default ProductDetail
