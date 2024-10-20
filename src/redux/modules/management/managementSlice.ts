import { createSlice } from "@reduxjs/toolkit";
import { TabType } from "../../../components/common/panels/Tab";

export type ManagementTab = "members" | "logs" | "devices";

export const managementTabs: ManagementTab[] = ["logs", "members", "devices"];
export interface SettingsSliceState {
  active: TabType;
}

const initialState: SettingsSliceState = {
  active: "logs"
};

const managementSlice = createSlice({
  name: "management",
  initialState,
  reducers: {
    handleActiveTab: (state, { payload }: { payload: TabType }) => {
      state.active = payload;
    }
  }
});

export const { handleActiveTab } = managementSlice.actions;

export default managementSlice.reducer;
