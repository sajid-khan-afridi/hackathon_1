import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { client } from "@/lib/createClient";
import { Image as IImage } from "sanity";
import { data } from 'autoprefixer';
import { Console } from 'console';



// async function getData() {
//     const res= await client.fetch(`*[_type=="product"]{
//       title,image,alt,price,_id,category -> {
//         name
//       }, ptype -> {
//         name
//       }
//     }`);
//     return await res;
//   }
//   (async function Home() {
//     const data: IProduct[] = await getData();
//   })()

  interface IProduct {
    id:string,
    title: string;
    image: IImage;
    alt: string;
    quantity:number;
    category: {
      name: string;
    };
    price: number;
    ptype: string;
    _id: string;
  }


export interface cartState {
  allCart:IProduct[],
  totalQuantity:number,
  totalPrice:number
}

const initialState:cartState= {
  allCart:[],
  totalQuantity:0,
  totalPrice:0,
}

export const cartSlice = createSlice({
  name: 'cartName',
  initialState,
  reducers: {
    
    addToCart: (state, action)=>{
      let find=state.allCart.findIndex((item)=>item._id===action.payload._id);
      if(find>=0){
        state.allCart[find].quantity+=1
      }
      else{
        state.allCart.push(action.payload)
      }
    }
,

getCartTotal:(state)=>{
  let {totalQuantity,totalPrice}=state.allCart.reduce(
    (cartTotal,cartItem)=>{
      console.log("carttotal",cartTotal);
      console.log("cartitem",cartItem);
      const {price,quantity}=cartItem;
      console.log(price,quantity);
      const itemTotal=price*quantity;
      cartTotal.totalPrice+=itemTotal;//cartTotal=initailState
      cartTotal.totalQuantity+=quantity;
      return cartTotal;
    },
    {
      totalPrice:0,
      totalQuantity:0,
    }
  )
  state.totalPrice=parseInt(totalPrice.toFixed(2));
  state.totalQuantity=totalQuantity;
},

removeItem:(state,action)=>{
  state.allCart=state.allCart.filter((item)=>item._id!==action.payload)
},

increaseItemQuantity:(state,action)=>{
  // @ts-ignore
  state.allCart=state.allCart.map((item)=>{
    if(item._id===action.payload){
      return {...item,quantity:item.quantity + 1}
    }
    return item;
  })
},

decreaseItemQuantity:(state,action)=>{
  // @ts-ignore
  state.allCart=state.allCart.map((item)=>{
    if(item._id===action.payload){
      return {...item,quantity:item.quantity - 1}
    }
    return item;
  })
},
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
    // incrementByValue:(state,action)=>{
    //   state.cart=state.cart+action.payload;
    // }
  },
})

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount,showData,incrementByValue } = counterSlice.actions
export const { addToCart,getCartTotal,removeItem,increaseItemQuantity,decreaseItemQuantity} = cartSlice.actions


export default cartSlice.reducer