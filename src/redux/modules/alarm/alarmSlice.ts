import { createSlice } from "@reduxjs/toolkit";
import { Alarm } from "../../../hooks/useAreas";

export interface AreaSliceState {
  alarms: Alarm[];
  alarm?: Alarm;
  isAddOpen: boolean;
}

const initialState: AreaSliceState = {
  alarms: [],
  isAddOpen: false
};

const alarmSlice = createSlice({
  name: "alarm",
  initialState,
  reducers: {
    saveAlarms(state, { payload }: { payload: Alarm[] }) {
      state.alarms = payload;
    },
    handleActive(state, { payload }: { payload: Alarm }) {
      state.alarm = payload;
    },
    handleAlarmAddShow(state) {
      state.isAddOpen = !state.isAddOpen;
    }
  }
});

export const { saveAlarms, handleActive, handleAlarmAddShow } =
  alarmSlice.actions;

export default alarmSlice.reducer;
