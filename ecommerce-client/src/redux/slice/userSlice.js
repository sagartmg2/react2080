import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null, // to simulate as not logged in
    // value: {"name":"ram"}
  },
  reducers: {
    setReduxUser: (state, action) => {
      console.log("change redux store.");
      state.value = action.payload
    },
    logout: (state, action) => {
      state.value = null;
      localStorage.removeItem("token")
    },
  },
});

// Action creators are generated for each case reducer function
export const { setReduxUser, logout } = userSlice.actions;

export default userSlice.reducer;
