import { ChangeEvent, FormEvent } from "react";

export interface NavList{
    name:string,
    link:string
};

export interface Img {
    id: string; // Unique identifier for the image
    img: string; // URL of the image
  }
  
export interface ProductList {
    id: number; // Numeric identifier for the product
    product_id: string; // UUID or unique string identifier for the product
    product_name: string; // Name of the product (e.g., "Reck Shirt")
    product_img: string; // Main image URL of the product
    img_list: Img[]; // List of additional images for the product
    color_list: string[]; // Array of color codes available for the product
    product_type: string; // Type or category of the product (e.g., "Shirt")
    old_price: number; // Previous price of the product
    new_price: number; // Current discounted price of the product
    product_review: number; // Review score or count for the product
    availability: boolean; // Availability status of the product (true for available, false for unavailable)
    product_content: string; // Description or content of the product
    productQuantity:number
  }
  

export interface ClothList{
    id:number;
    name:string;
    img:string;
    category:string;
    oldPrice:string;
    newPrice:string;
    color:string[]
}
export interface RatingList{
    ratingName:string;
    ratingCount:string;
}
export interface AboutTeam{
    img:string;
    userName:string;
    profession:string;
};
export interface ContactList{
    id:number;
    img:string;
    email:string;
    mailTwo:string;
    suport:string;
    btnSuport:string;
};
export interface PriceList{
    id:number;
    package:string;
    price:string;
    sym:string;
    duration:string;
    quality:string;
    para:string;
};
export interface FaqList{
    id:number;
    head:string;
    para:string;
}

//Product Reducer 
export interface InitialProdData{
    productList:ProductList[];
    backupList:ProductList[];
    page:number,
    limit:number
};

export interface ProductAction{
    type:string,
    payload:string|ProductList[];
};

//Cart Reducer
export interface CartListType{
    productname: string; 
    productid: number; 
    // productsize: string; 
    // producttype: string; 
    // productavaiableornot: boolean | null; 
    productcolor:string; 
    productprice: number; 
    productcategory: string; 
    productimage: string;
    productquantity:number;
    // productimagelist: ProductImage[]; 
  };

export interface InitialCartData{
    cartList:ProductList[];
    productColor:string;
    totalPrice:number;
    totalQuantity:number
    addCartProd:CartListType[]
    shipping:number;
    wishList:ProductList[];
    toast:boolean
};
export interface CartAction{
    type:string;
    payload:string|number|ProductList[]|CartDec;
}

//Context Type
export interface ContextType{
    navTogg:boolean,
    productList:ProductList[];
    fullList:ProductList[];
    homeList:ProductList[];
    page:number;
    uniqueTypes:string[];
    selectValue:string;
    cartData:InitialCartData;
    isChecked:boolean;
    orderComp:boolean;
    orderMessage:string;
    colr:boolean;
    emptyAlert:boolean;
    orderEmpty:boolean;
    cartAlert:boolean;
    setNavTogg:(e:boolean) => void;
    onHandleNav:() => void;
    paginationOperate:(value:string) => void;
    onHandleSelectBox:(e:ChangeEvent<HTMLSelectElement>) => void;
    onFilterForm: (e:FormEvent<HTMLFormElement>) => void;
    setProdColor: (color:string) => void;
    onProdInc: (id:string) => void;
    onProdDec: (id:string) => void;
    addToCart: (id:string) => void;
    cartProdInc:(id:number) => void;
    cartProdDec:(id:number,quantity:number) => void;
    onHandleCheck:(e:ChangeEvent<HTMLInputElement>) => void;
    onHandleTerms: (e:FormEvent<HTMLFormElement>) => void;
    onProductDetail: (id:string) => void;
    setAnime:() => void;
    addWishList: (id:string) => void;
};


export interface CartDec{
    id:number,
    quantity:number;
  }