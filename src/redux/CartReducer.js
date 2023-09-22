import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    handleAddToCart(state, action) {
      console.log("action====>>", action.payload);
      state.cartItem.push(action.payload);
    },
  },
});
const { actions, reducer } = cartSlice;
export const { handleAddToCart } = actions;
export default reducer;
