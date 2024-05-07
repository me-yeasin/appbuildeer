import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  toggleModalBottomSheet: boolean;
  isCloseAnimationDone: boolean;
}

const initialState: InitialStateType = {
  toggleModalBottomSheet: false,
  isCloseAnimationDone: false,
};

const modalBottomSheetSlice = createSlice({
  name: "modalBottomSheet",
  initialState,
  reducers: {
    toggleModalBottomSheetHandler: (state, payload) => {
      state.toggleModalBottomSheet = payload.payload;
    },
    toggleModalBottomSheetAnimation: (state, payload) => {
      state.isCloseAnimationDone = payload.payload;
    },
  },
});

export default modalBottomSheetSlice.reducer;
export const {
  toggleModalBottomSheetHandler,
  toggleModalBottomSheetAnimation,
} = modalBottomSheetSlice.actions;
