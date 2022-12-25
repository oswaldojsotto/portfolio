import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "english",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    switchLanguage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { switchLanguage } = languageSlice.actions;
export default languageSlice.reducer;
