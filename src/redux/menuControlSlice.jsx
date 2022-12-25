import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const menuControlSlice = createSlice({
  name: "menuControl",
  initialState,
  reducers: {
    openMenu: state => {
      state.value = true;
    },
    closeMenu: state => {
      state.value = false;
    },
  },
});

export const { openMenu, closeMenu } = menuControlSlice.actions;
export default menuControlSlice.reducer;
