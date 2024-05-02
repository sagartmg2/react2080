import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [
      //   {
      //     _id: "234234",
      //     name: "watch",
      //     price: "500",
      //     quanity: 2,
      //   },
    ],
    // value:["one","two","three"]
  },
  reducers: {
    addCartItem: (state, action) => {
      let product = action.payload;
      let { name, _id, price, image } = product;

      /* check if that _id already exists   */

      state.value.push({
        quantity: 1,
        name,
        _id,
        price,
        image,
      });
    },
    resetCart: (state, action) => {
      state.value = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCartItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
