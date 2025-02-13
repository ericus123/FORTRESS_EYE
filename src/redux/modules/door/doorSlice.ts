import { createSlice } from "@reduxjs/toolkit";
import { Alarm } from "../../../hooks/useAreas";

export interface doorSliceState {
  doors: Alarm[];
  door?: Alarm;
  isAddOpen: boolean;
}

const initialState: doorSliceState = {
  doors: [],
  isAddOpen: false
};

const doorSlice = createSlice({
  name: "door",
  initialState,
  reducers: {
    savedoors(state, { payload }: { payload: Alarm[] }) {
      state.doors = payload;
    },
    handleActive(state, { payload }: { payload: Alarm }) {
      state.door = payload;
    },
    handleDoorAddShow(state, { payload }: { payload: boolean }) {
      state.isAddOpen = payload;
    }
  }
});

export const { savedoors, handleActive, handleDoorAddShow } = doorSlice.actions;

export default doorSlice.reducer;
