import { createSlice } from "@reduxjs/toolkit";
import { Alarm } from "../../../hooks/useAreas";

export interface LightSliceState {
  lights: Alarm[];
  light?: Alarm;
  isAddOpen: boolean;
}

const initialState: LightSliceState = {
  lights: [],
  isAddOpen: false
};

const lightSlice = createSlice({
  name: "light",
  initialState,
  reducers: {
    saveLights(state, { payload }: { payload: Alarm[] }) {
      state.lights = payload;
    },
    handleActive(state, { payload }: { payload: Alarm }) {
      state.light = payload;
    },
    handleLightAddShow(state) {
      state.isAddOpen = !state.isAddOpen;
    }
  }
});

export const { saveLights, handleActive, handleLightAddShow } =
  lightSlice.actions;

export default lightSlice.reducer;
