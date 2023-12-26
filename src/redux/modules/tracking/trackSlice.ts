import { createSlice } from "@reduxjs/toolkit";

export type StatusPopup = {
  isSuccess: boolean;
  show: boolean;
};

export interface TrackSliceState {
  geo: Geo;
}

export type Geo = {
  latitude?: number;
  longitude?: number;
};
const initialState: TrackSliceState = {
  geo: {}
};

const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    saveUserLocation(
      state,
      {
        payload
      }: {
        payload: Geo;
      }
    ) {
      state.geo = payload;
    }
  }
});

export const { saveUserLocation } = trackSlice.actions;

export default trackSlice.reducer;
