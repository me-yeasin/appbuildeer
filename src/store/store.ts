import { configureStore } from "@reduxjs/toolkit";

import ThemeSlice from "./slice/theme_slice";

export const makeStore = () =>
  configureStore({
    reducer: {
      themeSlice: ThemeSlice,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
