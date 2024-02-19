import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  isDarkMode: boolean;
}

const initialState: InitialStateType = {
  isDarkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
