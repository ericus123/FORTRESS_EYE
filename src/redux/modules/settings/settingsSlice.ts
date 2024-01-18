import { createSlice } from "@reduxjs/toolkit";

export type SettingsTab = "profile" | "system" | "subscriptions";
export interface SettingsSliceState {
  active: SettingsTab;
}

const initialState: SettingsSliceState = {
  active: "profile"
};

const settingsSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    handleActiveTab: (state, { payload }: { payload: SettingsTab }) => {
      state.active = payload;
    }
  }
});

export const { handleActiveTab } = settingsSlice.actions;

export default settingsSlice.reducer;
