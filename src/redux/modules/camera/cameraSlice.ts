import { createSlice } from "@reduxjs/toolkit";
import { Alarm } from "../../../hooks/useAreas";

export type ControlPopup = {
  isOpen: boolean;
  message: string;
  type: "disable" | "delete";
};
export interface CameraSliceState {
  cameras: Alarm[];
  camera?: Alarm;
  controlPopup: ControlPopup;
}

const initialState: CameraSliceState = {
  cameras: [],
  controlPopup: {
    isOpen: false,
    message: "",
    type: "disable"
  }
};

const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {
    handleControlPopup(state, { payload }: { payload: ControlPopup }) {
      state.controlPopup = payload;
    }
  }
});

export const { handleControlPopup } = cameraSlice.actions;

export default cameraSlice.reducer;
