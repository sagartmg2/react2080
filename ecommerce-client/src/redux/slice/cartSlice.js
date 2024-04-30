import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [], // to simulate as not logged in
    // value: {"name":"ram"}
  },
  reducers: {
    addCartItems: (state, action) => {
      state.value.push(action.payload)
      console.log(`added ${action.payload} in cart.`);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCartItems } = cartSlice.actions;

export default cartSlice.reducer;
