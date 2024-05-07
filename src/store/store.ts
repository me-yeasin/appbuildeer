import { configureStore } from "@reduxjs/toolkit";

import ModalBottomSheetSlice from "./slice/modal_bottom_sheet_slice";
import ThemeSlice from "./slice/theme_slice";

export const makeStore = () =>
  configureStore({
    reducer: {
      themeSlice: ThemeSlice,
      modalBottomSheetSlice: ModalBottomSheetSlice,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
