import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const { cart } = state;
      const cartItem = cart.find((item) => item.id === product.id);
      if (cartItem) {
        cartItem.quantity += quantity;
        state.totalPrice += product.price * quantity;
      } else {
        state.cart.push({...product, quantity});
        state.totalItems += 1;
        state.totalPrice += product.price * quantity;
      }
      
    },
    removeFromCart: (state, action) => {
      const { product } = action.payload;
      const { cart } = state;
      state.totalItems -= 1;
      state.totalPrice -= product.price * product.quantity;
      state.cart = cart.filter((item) => item.id !== product.id);
    },
    reduceQuantity: (state, action) => {
      const { product } = action.payload;
      const { cart } = state;
      const cartItem = cart.find((item) => item.id === product.id);
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        state.totalPrice -= product.price;
      }
    },

    increaseQuantity: (state, action) => {
      const { product } = action.payload;
      const { cart } = state;
      const cartItem = cart.find((item) => item.id === product.id);
      cartItem.quantity += 1;
      state.totalPrice += product.price;
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const { clearCart, reduceQuantity, increaseQuantity, addToCart, removeFromCart} = cartSlice.actions;

export const cartSelector = (state) => state.cart;

export default cartSlice.reducer;