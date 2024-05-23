import { createSlice } from "@reduxjs/toolkit";

interface DrawerSliceProps {
  isOpenDrawer: boolean;
}

const initialState: DrawerSliceProps = {
  isOpenDrawer: false,
};

const drawerSlice = createSlice({
  name: "drawer-slice",
  initialState,
  reducers: {
    openDrawer: (state) => {
      state.isOpenDrawer = true;
    },
    closeDrawer: (state) => {
      state.isOpenDrawer = false;
    },
  },
});

export default drawerSlice.reducer;
export const { closeDrawer, openDrawer } = drawerSlice.actions;
