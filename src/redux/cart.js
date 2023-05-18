import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  currentCartItem: null,
  totalCartItem: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        state.currentCartItem = action.payload
        console.log(state.currentCartItem)
        state.value.push(state.currentCartItem)
        state.totalCartItem += state.currentCartItem.qty
    },
    removeFromCart: (state, action) => {
      let index = state.value.findIndex(
        (element) => element.id === action.payload.id
      );
      state.value.splice(index, 1);
      state.totalCartItem -= action.payload.qty
    },
    emptyCart: (state) => {
      state.value.splice(0, state.value.length);
      state.totalCartItem = 0;
    },
    addCertain: (state, action) => {
        state.currentCartItem = action.payload
        console.log(state.currentCartItem)
        state.value.push(state.currentCartItem)
        state.totalCartItem += state.currentCartItem.qty
    },
  },
});

export const { addToCart, removeFromCart, emptyCart, addCertain } =
  cartSlice.actions;

export default cartSlice.reducer;
