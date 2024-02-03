import { createSlice } from "@reduxjs/toolkit";
import { TabType } from "../../../components/common/panels/Tab";

export type MonitoringTab = "cameras" | "map";

export const monitoringTabs: MonitoringTab[] = ["cameras", "map"];
export interface MonitoringSliceState {
  active: TabType;
}

const initialState: MonitoringSliceState = {
  active: "cameras"
};

const monitoringSlice = createSlice({
  name: "monitoring",
  initialState,
  reducers: {
    handleActiveTab: (state, { payload }: { payload: TabType }) => {
      state.active = payload;
    }
  }
});

export const { handleActiveTab } = monitoringSlice.actions;

export default monitoringSlice.reducer;
