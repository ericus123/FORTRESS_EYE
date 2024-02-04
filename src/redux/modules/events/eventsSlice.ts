import { createSlice } from "@reduxjs/toolkit";
import { TabType } from "../../../components/common/panels/Tab";

export type EventTab = "schedules" | "customize";

export const eventsTabs: EventTab[] = ["schedules", "customize"];
export interface EventsSliceState {
  active: TabType;
}

const initialState: EventsSliceState = {
  active: "cameras"
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    handleActiveTab: (state, { payload }: { payload: TabType }) => {
      state.active = payload;
    }
  }
});

export const { handleActiveTab } = eventsSlice.actions;

export default eventsSlice.reducer;
