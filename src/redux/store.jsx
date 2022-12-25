import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import languageReducer from "./languageSlice";
import menuControlReducer from "./menuControlSlice";
import burgerReducer from "./burgerSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
    menuControl: menuControlReducer,
    burger: burgerReducer,
  },
});
