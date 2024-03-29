import { createSlice } from "@reduxjs/toolkit";
import { TabType } from "../../../components/common/panels/Tab";

export type SettingsTab = "profile" | "system" | "subscriptions";
export interface SettingsSliceState {
  active: TabType;
}

const initialState: SettingsSliceState = {
  active: "profile"
};

const settingsSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    handleActiveTab: (state, { payload }: { payload: TabType }) => {
      state.active = payload;
    }
  }
});

export const { handleActiveTab } = settingsSlice.actions;

export default settingsSlice.reducer;
