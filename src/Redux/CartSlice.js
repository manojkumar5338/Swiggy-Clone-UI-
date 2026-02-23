import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({

  name:"cart" ,
  initialState:[],
  reducers:{
    addCart:(state,action)=>{
        state.push(action.payload)
    },
    clearCart:()=>{
        return []
    }
  } 
})

export const {addCart,clearCart}=CartSlice.actions

export default CartSlice.reducer