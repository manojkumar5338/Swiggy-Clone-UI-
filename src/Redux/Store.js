import { configureStore } from "@reduxjs/toolkit";
import cart from "./CartSlice"
const store=configureStore({
    reducer:{
       cartStore:cart
    }
})

export default store