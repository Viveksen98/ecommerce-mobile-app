import { configureStore } from "@reduxjs/toolkit";
import CartReducer from '../redux/CartReducer';

const Store = configureStore({
    reducer:{
        cart: CartReducer
    }
})
export default Store;