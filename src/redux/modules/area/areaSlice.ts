import { createSlice } from "@reduxjs/toolkit";
import { Area, Areas } from "../../../hooks/useAreas";

export interface AreaSliceState {
  areas: Areas;
  area?: Area;
  isAddOpen: boolean;
  ecoSensorArea?: Area;
}

const initialState: AreaSliceState = {
  areas: [],
  isAddOpen: false
};

const areaSlice = createSlice({
  name: "area",
  initialState,
  reducers: {
    saveAreas(state, { payload }: { payload: Areas }) {
      state.areas = payload;
      if (!state.ecoSensorArea) {
        state.ecoSensorArea = payload[0];
      }
    },
    handleActive(state, { payload }: { payload: Area }) {
      state.area = payload;
    },
    handleAreaAddShow(state) {
      state.isAddOpen = !state.isAddOpen;
    },
    setEcosensorArea(
      state,
      {
        payload
      }: {
        payload: Area;
      }
    ) {
      state.ecoSensorArea = payload;
    }
  }
});

export const { saveAreas, handleActive, handleAreaAddShow, setEcosensorArea } =
  areaSlice.actions;

export default areaSlice.reducer;
