import { createSlice } from "@reduxjs/toolkit";
import { MenuItemName } from "../../../components/dashboard/sidebar/items";

export interface NavigationSliceState {
  isDrawerOpen: boolean;
  activeLink: MenuItemName;
}

const initialState: NavigationSliceState = {
  isDrawerOpen: false,
  activeLink: "Home"
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    handleActiveLink: (state, { payload }: { payload: MenuItemName }) => {
      state.activeLink = payload;
    }
  }
});

export const { handleActiveLink } = navigationSlice.actions;

export default navigationSlice.reducer;
