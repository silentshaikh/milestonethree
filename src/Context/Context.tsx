'use client';
import { CartAction, CartDec, CartListType, ContextType, InitialCartData, InitialProdData, ProductAction, ProductList } from '@/utils/Type/type';
import { ChangeEvent, createContext, FormEvent, ReactNode, useContext, useEffect, useReducer, useState } from 'react'
import { paginButton } from '@/utils/Helper/helper';
import { useRouter } from 'next/navigation';
const prodInitialData:InitialProdData = {
  productList:[],
  backupList:[],
  page:1,
  limit:12
};
const PRODUCTACTION = {
  LOADPRODUCT:'LOADPRODUCT',
  PRODPAGEONE:'PRODPAGEONE',
  PRODPAGETWO:'PRODPAGETWO',
  FILTERCATEG:'FILTERCATEG',
};

const cartInitialData:InitialCartData = {
  cartList:[],
  productColor:'',
  totalPrice:0,
  totalQuantity:0,
  addCartProd:[],
  shipping:10,
  wishList:[],
  toast:false
};
const CARTACTION = {
  CARTSETLIST:'CARTSETLIST',
  ADDCOLOR:'ADDCOLOR',
  INCPRODUCTQUAN:'INCPRODUCTQUAN',
  DECPRODUCTQUAN:'DECPRODUCTQUAN',
  ADDTOCART:"ADDTOCART",
  INC_ON_CART_PRODUCT:"INC_ON_CART_PRODUCT",
  DEC_ON_CART_PRODUCT:"DEC_ON_CART_PRODUCT",
  ORDER_DONE:'ORDER_DONE',
  RESET_COLOR_SIZE:'RESET_COLOR_SIZE',
  WISHLIST:'WISHLIST',
}
const EcomContext = createContext<ContextType|null>(null);
function Context({children}:{children:ReactNode}) {
  //for navbar toggle
    const [navTogg,setNavTogg] = useState(false);
    //for full list 
    const [fullList,setFullList]  = useState<ProductList[]>([]);
     //for home list 
     const [homeList,setHomeList]  = useState<ProductList[]>([]);
    //destructuring the Reducer Product Action
    const {LOADPRODUCT,PRODPAGEONE,PRODPAGETWO,FILTERCATEG} = PRODUCTACTION;
    //destructuring the Reducer Cart Action
    const {CARTSETLIST,ADDCOLOR,DECPRODUCTQUAN,INCPRODUCTQUAN,ADDTOCART,INC_ON_CART_PRODUCT,DEC_ON_CART_PRODUCT,ORDER_DONE,RESET_COLOR_SIZE,WISHLIST} = CARTACTION;
    //handle select box for filter product through product type
    const [selectValue,setSelectValue] = useState<string>('');
//Handle Term and Condition Checkbox
const [isChecked,setIsChecked] = useState<boolean>(false);
//for show animation after order have completed
const [orderComp,setOrderComp] = useState<boolean>(false);
//for order message
const [orderMessage,setOrderMessage] = useState('No Cart Items');
//add color on wishlist icon
const [colr,setColr] = useState<boolean>(false);
// add alert for empty cart selection
const [emptyAlert,setEmptyAlert] = useState<boolean>(false);
//add alert for order empty fields
const [orderEmpty,setOrderEmpty] = useState<boolean>(false);
//add alert when product add in the cart
const [cartAlert,setCartAlert] = useState<boolean>(false);

//for handle empty alert
useEffect(() => {
  setTimeout(() => {
    setEmptyAlert(false);
  },5000)
},[emptyAlert])

//for handle order empty alert
useEffect(() => {
  setTimeout(() => {
    setOrderEmpty(false);
  },5000)
},[orderEmpty])

//for handle cart  alert
useEffect(() => {
  setTimeout(() => {
    setCartAlert(false);
  },5000)
},[cartAlert])

const cartNavig = useRouter();
    const onHandleSelectBox = (e:ChangeEvent<HTMLSelectElement>) => {
      setSelectValue(e.target.value);
      console.log(e.target.value);
    };

    const onFilterForm = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if(selectValue){
        dispatch({type:FILTERCATEG,payload:selectValue});
        // setAnime();
      }else{
        alert("Plz Fill the fields");
      }
    }

    //for handle product list
    const [prodData,dispatch] = useReducer(productReducer,prodInitialData);
    function productReducer(state:InitialProdData,action:ProductAction):InitialProdData{
      switch (action.type) {
        case LOADPRODUCT:
          return {...state,productList:(action.payload as ProductList[]),backupList:(action.payload as ProductList[])};
      
          //for first page query
        case PRODPAGEONE:
          let pageNumb = state.page;
          if(pageNumb<2){
            pageNumb = 1;
          }else{
            pageNumb = pageNumb-1
          };
          return {...state,page:pageNumb};

          //for second page query
         case PRODPAGETWO:
          let pageNum = state.page;
          if(pageNum>=2){
            pageNum = 2;
          }else{
            pageNum = pageNum+1;
          };
          return {...state,page:pageNum};

        case FILTERCATEG:
          if((action.payload as string).trim().toLowerCase() === 'ALL'.toLowerCase()){
            return {...state,productList:state.backupList};
          }else{
            const filterProdTypes = state.backupList.filter((e) => {
              return e.product_type.trim().toLowerCase() === (action.payload as string).trim().toLowerCase();
            });
            return {...state,productList:filterProdTypes}

          }
        default:
          return state;
      }

    }

     

    //Calculate Total Quantity
  const calculateQuantity = (addCart:CartListType[]) => {
    const setTotalQuantity = addCart.map((e) => e.productquantity)
              .reduce((prev, curr) => {
                return prev + curr;
    }, 0);
    return setTotalQuantity;
  };
   //Calculate Total Quantity
   const calculateTotalPrice = (addCart:CartListType[]) => {
    const setTotalPrice = addCart.reduce((total, item) => {
      return total + (item.productprice * item.productquantity);
    }, 0);
    return setTotalPrice;
  };


    //Add to Cart Reducer
    const [cartData,cartDispatch] = useReducer(cartReducer,cartInitialData);
    function cartReducer(state:InitialCartData,action:CartAction):InitialCartData {
      switch (action.type) {
        case CARTSETLIST:
          return {...state,cartList:(action.payload as ProductList[])};
        case ADDCOLOR:
          return {...state,productColor:(action.payload as string)};
        case  INCPRODUCTQUAN:
          const updatedCartInc = state.cartList.map((e) => {
            if (e.product_id === (action.payload as string)){
            //  const quanInc = ++e.productquantity;
            // alert(e.product_id)
              return { ...e, productQuantity: e.productQuantity+1};
            }; 
              return e;
          });
          return { ...state, cartList: updatedCartInc}; 

        case DECPRODUCTQUAN:
          const updatedCartDec = state.cartList.map((e) => {
            if (e.product_id === (action.payload as string)){
              const quanDec = e.productQuantity===0 ? 0 : e.productQuantity-1;
              return { ...e, productQuantity:quanDec};
            } else {
              return e;
            }
          });
          return { ...state, cartList: updatedCartDec};
          case RESET_COLOR_SIZE:
            const updatedCartList = state.cartList.map((e) => {
              if(e.product_id === (action.payload as string)){
                // remove one quantity for set the decrement of product
                const deleteQuan = e.productQuantity-1;
                return {...e, productQuantity:e.productQuantity-deleteQuan}
              }else{
                return e;
              }
            });
            return {...state,cartList:updatedCartList, productColor:'',};  

        case ADDTOCART:
          const prodFind = state.cartList.find((e)=> {
            return e.product_id === (action.payload as string);
          });
          if(prodFind){
            if(state.productColor=== '' || prodFind.productQuantity<1){
              setEmptyAlert(true);
            }else{
              setEmptyAlert(false);
              setCartAlert(true);
              const getColor =prodFind.color_list.find((e) => {
                return e === state.productColor;
              });
              if(getColor){
                const addProductItem:CartListType = {
                  productid:new Date().getTime(),
                  productname:prodFind.product_name,
                  productimage:prodFind.product_img,
                  productcategory:prodFind.product_type,
                  productcolor:getColor,
                  productprice:prodFind.new_price,
                  productquantity:prodFind.productQuantity,
                };

                //destructure the find item
                const {product_name,productQuantity} = prodFind;
              
                //find product if already exist in the cart with same property
                const findCartProd=state.addCartProd.find((e) => {
                  return e.productname === product_name && e.productcolor === getColor;
                });
                if(findCartProd){
                  const {productname,productcolor,productid} = findCartProd;
                  // if(productname.toLowerCase() === product_name.toLowerCase() && getColor === productcolor){
                    //update  the quantity that product if it's already exist in the cart
                    const mapCartList = state.addCartProd.map((e) => {
                      if(productname === e.productname && productcolor === getColor && e.productid === productid){
                        return {...e,productquantity:e.productquantity+productQuantity}
                      }else{
                        return e;
                      }
                    });
                    //add the updated list of cart
                    return {...state,addCartProd:mapCartList,totalQuantity:calculateQuantity(mapCartList),totalPrice:calculateTotalPrice(mapCartList),toast:false};

                  // }
                 
                }else{
                  const addCartItems:CartListType[] =[...state.addCartProd,addProductItem];
                  // setShowToast(true);
                  return {...state,addCartProd:addCartItems,totalQuantity:calculateQuantity(addCartItems),totalPrice:calculateTotalPrice(addCartItems),toast:true};
                }
                
              }else{
                alert("Color,Size is not Available");
              }
            }
          } else {
            alert("Product is not Available");
            return {...state,toast:false};
          }
        case INC_ON_CART_PRODUCT:
          const incAddProd = state.addCartProd.map((e) => {
            if(e.productid === (action.payload as number)){
              return {...e, productquantity: e.productquantity+1}
            };
            return e;
          }); 
          return {...state,addCartProd:incAddProd,totalQuantity:calculateQuantity(incAddProd),totalPrice:calculateTotalPrice(incAddProd)};   

        case DEC_ON_CART_PRODUCT:
          if((action.payload as CartDec).quantity===1){
            //remove that item if quantity zero
            const removeCartItem = state.addCartProd.filter((e) => {
              return e.productid !== (action.payload as CartDec).id
            });
            return {...state, addCartProd:removeCartItem,totalQuantity:calculateQuantity(removeCartItem), totalPrice:calculateTotalPrice(removeCartItem)};
          }else{
  
            const decAddProd = state.addCartProd.map((e) => {
              if(e.productid === (action.payload as CartDec).id){
                return {...e, productquantity: e.productquantity-1}
              }else{
                return e;
              }
            });
            return {...state,addCartProd:decAddProd,totalQuantity:calculateQuantity(decAddProd),totalPrice:calculateTotalPrice(decAddProd)};   
          }  
        case ORDER_DONE:
        return {...state,addCartProd:[],totalPrice:0,totalQuantity:0};
        case WISHLIST:
          //find the product to add in wishlist
          const findProdForWish = state.cartList.find((e) => {
            return e.product_id === (action.payload as string);
          });
          if(findProdForWish){
            //create wishlist
            const wishProduct:ProductList = {
              id:findProdForWish.id,
              availability:findProdForWish.availability,
              color_list:findProdForWish.color_list,
              img_list:findProdForWish.img_list,
              new_price:findProdForWish.new_price,
              old_price:findProdForWish.old_price,
              product_content:findProdForWish.product_content,
              product_id:findProdForWish.product_id,
              product_img:findProdForWish.product_img,
              product_name:findProdForWish.product_name,
              product_review:findProdForWish.product_review,
              product_type:findProdForWish.product_type,
              productQuantity:findProdForWish.productQuantity
            };
            //destructure the wish list object
            const {product_name} = wishProduct;
            //find if some products is already exist in wishlist
            const findExistWishList = state.wishList.find((e) => {
              return e.product_name === product_name;
            });
            // const findColor = findExistWishList?.color_list.find((e) => {
            //   e === state.productColor;
            // })
            if(findExistWishList?.product_name === product_name){
              alert('This Product is already exist');
              return state;
            }else{
              const addWishList = [...state.wishList,wishProduct];
              return {...state,wishList:addWishList}
            }

          } 

        default:
          return state
      }
    };

    //set the product color
    const setProdColor = (color:string) => {
      cartDispatch({type:ADDCOLOR,payload:color});
    }

    //Toggle Navbar
    const onHandleNav = () => {
        setNavTogg((prev) => !prev);
    };

    //product increment and decrement
    const onProdInc= (id:string) => {
      cartDispatch({type:INCPRODUCTQUAN,payload:id});
    }
    const onProdDec= (id:string) => {
      cartDispatch({type:DECPRODUCTQUAN,payload:id});
      // alert(id)
    };

    //Add To Cart
    const addToCart = (id:string) => {
      cartDispatch({type:ADDTOCART,payload:id});
    }
    

    //Increment  and Decrement on Cart Product
    const cartProdInc = (id:number) => {
      cartDispatch({type:INC_ON_CART_PRODUCT,payload:id});
    };
    const cartProdDec = (id:number,quantity:number) => {
      cartDispatch({type:DEC_ON_CART_PRODUCT,payload:{id,quantity}});
    };

    //reset the color and the other property when i click on product card
    const onProductDetail = (id:string) => {
    cartDispatch({ type: RESET_COLOR_SIZE, payload: id });
    cartNavig.push(`/product/${id}`);
    setColr(false);
  };

  //Add Wishlist
  const addWishList = (id:string) => {
    cartDispatch({type:WISHLIST,payload:id});
    const findProd = productList.find((e) => e.product_id === id);
    if(findProd){
      setColr(true);
    }
  }

  //animation after product ordered
  const setAnime = () => {
    setOrderComp(true);
    setOrderMessage("Thank You! Your Order Is on Its Way!")
  };
  useEffect(() => {
    setTimeout(() => {
      setOrderComp(false);
    },10000);
  },[orderComp])
  useEffect(() => {
    setTimeout(() => {
      setOrderMessage("No Cart Items")
    },10000);
  },[orderMessage])

    //function to Handle Terms input
  const onHandleCheck = (e:ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const onHandleTerms = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!isChecked || cartData.totalQuantity==0 || cartData.totalPrice===0){
      // alert('Follow Condition')
      setOrderEmpty(true);
    }else{
      // alert('success');
      setOrderEmpty(false);
      setAnime()
      cartDispatch({type:ORDER_DONE,payload:''});
      // cartNavig.push('/checkout');
      setIsChecked(false);
    };
  };

    //fetch the product data
    const fetchProductList = async (api:string) => {
      try {
        const fetchProd = await fetch(api);
      const getProd:ProductList[] = await fetchProd.json();
      return getProd;
      } catch (error) {
        throw new Error(`${error}: API Not Found`);
      }
    };
    //destructure of Product Data
    const {productList,limit,page} = prodData;

    //call the api function
    useEffect(() => {
      const callFetchFunc = async ()=> {
        //for Product list will show
        const prodList = (await fetchProductList(`http://localhost:3000/api/productlist?limit=${limit}&page=${page}`)).map((e) => ({...e, productQuantity:1}));
        // console.log(prodList);
        
        dispatch({type:LOADPRODUCT,payload:prodList});
        
        //for home product
        const homeList = (await fetchProductList(`http://localhost:3000/api/productlist`)).map((e) => ({...e,productQuantity:1}));
        const homeProductList = homeList.filter((e) => {
          return e.id>13 && e.id<18;
        });
        setHomeList(homeProductList)
        setFullList(homeList);
        cartDispatch({type:CARTSETLIST,payload:homeList});
 };
 //call the function
 callFetchFunc();    
},[page,CARTSETLIST,LOADPRODUCT,limit]);

  //destructuring the pagination button value
  const {first,one} = paginButton;
  // perform pagination operation
  const paginationOperate = (value:string) => {
    if(value === first || value === one){
      dispatch({type:PRODPAGEONE,payload:''});
    }else{
      dispatch({type:PRODPAGETWO,payload:''});
    };
    setSelectValue('ALL');
  };

  //array for filter by product type
  const productTypes:string[] = prodData.backupList.map((e) => e.product_type);
  const uniqueTypes =[ "ALL",...new Set(productTypes)];
  // console.log(uniqueTypes);

  return(
    <EcomContext.Provider value={{navTogg,setNavTogg,onHandleNav,productList,fullList,paginationOperate,page,uniqueTypes,onHandleSelectBox,selectValue,onFilterForm,setProdColor,cartData,onProdInc,onProdDec,addToCart,cartProdDec,cartProdInc,isChecked,onHandleCheck,onHandleTerms,onProductDetail,orderComp,setAnime,orderMessage,addWishList,colr,homeList,emptyAlert,orderEmpty,cartAlert}}>{children}</EcomContext.Provider>
  )
}

export default Context


export const useEcomHook = () => {
    const ecomHok = useContext(EcomContext);
    if(!ecomHok){
        throw new Error('useEcomHook must be used within a EcomContext.Provider')
    };
    return ecomHok;
};