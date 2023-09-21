import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: []
}

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    handleAddToCart(state, action) {

      state.cartItem = action.payload;
    },
  },
});
const { actions, reducer } = cartSlice;
export const { addToCart } = actions;
export default reducer;
