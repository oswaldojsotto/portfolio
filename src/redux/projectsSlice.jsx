import { createSlice } from "@reduxjs/toolkit";
import { useRef } from "react";

const initialState = {
  value: null,
};

const projectSlice = createSlice({
  name: "projectRef",
  initialState,
  reducers: {
    projectRef: state => {
      state.value = useRef();
    },
  },
});

export const { projectRef } = projectSlice.actions;
export default projectSlice.reducer;
