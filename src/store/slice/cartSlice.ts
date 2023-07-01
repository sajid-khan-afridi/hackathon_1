import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { client } from "@/lib/createClient";
import { Image as IImage } from "sanity";



// async function getData() {
//     const res = await client.fetch(`*[_type=="product"]{
//       title,image,alt,price,_id,category -> {
//         name
//       }, ptype -> {
//         name
//       }
//     }`);
//     return res;
//   }

  interface IProduct {
    id:string,
    title: string;
    image: IImage;
    alt: string;
    category: {
      name: string;
    };
    price: number;
    ptype: string;
    _id: string;
  }

//   const data: IProduct[] = await getData();

export interface cartState {
  allCart:IProduct[],
  totalQuantity:number,
  totalPrice:number
}

const initialState:cartState= {
  allCart:[],
//   items:data,
  totalQuantity:0,
  totalPrice:0,
}

export const cartSlice = createSlice({
  name: 'cartName',
  initialState,
  reducers: {
    
    addToCart: (state, action)=>{
        state.allCart.push(action.payload)
    }
,
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
export const { addToCart} = cartSlice.actions


export default cartSlice.reducer