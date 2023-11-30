import { createSlice } from "@reduxjs/toolkit";

export interface NavigationSliceState {
  route: string;
  isDrawerOpen: boolean;
  activeLink: string;
}

const initialState: NavigationSliceState = {
  route: "/",
  isDrawerOpen: false,
  activeLink: ""
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {}
});

export const {} = navigationSlice.actions;

export default navigationSlice.reducer;
