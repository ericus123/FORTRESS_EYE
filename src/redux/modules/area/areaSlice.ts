import { createSlice } from "@reduxjs/toolkit";
import { Area, Areas } from "../../../hooks/useAreas";

export interface AreaSliceState {
  areas: Areas;
  area?: Area;
  isAddOpen: boolean;
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
    },
    handleActive(state, { payload }: { payload: Area }) {
      state.area = payload;
    },
    handleAreaAddShow(state) {
      state.isAddOpen = !state.isAddOpen;
    }
  }
});

export const { saveAreas, handleActive, handleAreaAddShow } = areaSlice.actions;

export default areaSlice.reducer;
