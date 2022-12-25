import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    switchBurger: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { switchBurger } = burgerSlice.actions;
export default burgerSlice.reducer;
