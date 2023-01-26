import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    product: [],
    qty: 0,
    total: 0,
    estimateShippingCharge: 0,
    discountedShippingFree: 0,
  },
  reducers: {
    addProductToCart: (state, action) => {
      const { price, qty } = action.payload;
      const calcTotal = price * qty;
      state.qty += 1;
      state.product.push(action.payload);
      state.total += calcTotal;
      state.estimateShippingCharge = calcTotal / 9;
      state.discountedShippingFree = calcTotal / 14;
    },
    removeProductFromCart: (state, action) => {
      const { id } = action.payload;
      state.product = state.product.filter((product) => product._id !== id);
      state.qty -= 1;
    },
    incrementProductQty: (state, action) => {
      const { id } = action.payload;
      const product = state.product.find((product) => product._id === id);
      product.qty += 1;
      state.qty += 1;
      state.total += product.price;
    },
    decremenProductQty: (state, action) => {
      const { id } = action.payload;
      const product = state.product.find((product) => product._id === id);
      product.qty -= 1;
      state.qty -= 1;
      state.total -= product.price;
    },
    calculateShipping: (state, action) => {
      state.estimateShippingCharge = state.total / 9;
      state.discountedShippingFree = state.total / 14;
    },
  },
});
export const {
  addProductToCart,
  removeProductFromCart,
  incrementProductQty,
  decremenProductQty,
  calculateShipping,
} = cartSlice.actions;

export default cartSlice.reducer;
export const selectCurrentQty = (state) => state.cart.qty;
export const selectCurrentCart = (state) => state.cart;
