import { configureStore } from "@reduxjs/toolkit";

import drawer_slice from "./slice/drawer_slice";
import ThemeSlice from "./slice/theme_slice";

export const makeStore = () =>
  configureStore({
    reducer: {
      themeSlice: ThemeSlice,
      drawerSlice: drawer_slice,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
