import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import cartReducer from './cart'
import productReducer from './productSlice'


export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        product: productReducer
    }
})