import { createSlice } from "@reduxjs/toolkit";
import { MenuItemName } from "../../../components/dashboard/sidebar/items";

export type StatusPopup = {
  isSuccess: boolean;
  show: boolean;
  message?: {
    success?: string;
    fail?: string;
  };
};

export interface NavigationSliceState {
  isDrawerOpen: boolean;
  activeLink: MenuItemName;
  status: StatusPopup;
  isLeftBarExpanded?: boolean;
}

const initialState: NavigationSliceState = {
  isDrawerOpen: false,
  activeLink: "Home",
  isLeftBarExpanded: true,
  status: {
    isSuccess: false,
    show: false
  }
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    handleActiveLink: (state, { payload }: { payload: MenuItemName }) => {
      state.activeLink = payload;
    },
    handleStatus(
      state,
      {
        payload
      }: {
        payload: StatusPopup;
      }
    ) {
      state.status = payload;
    },
    hideStatus(state) {
      state.status = {
        isSuccess: false,
        show: false
      };
    },
    handleLeftBar(state) {
      state.isLeftBarExpanded = !state.isLeftBarExpanded;
    }
  }
});

export const { handleActiveLink, handleStatus, hideStatus, handleLeftBar } =
  navigationSlice.actions;

export default navigationSlice.reducer;
