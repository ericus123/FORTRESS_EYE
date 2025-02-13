import { createSlice } from "@reduxjs/toolkit";

export interface PlayerSliceState {
  isMicOpen: boolean;
  isSpeakerOpen: boolean;
  isExpanded: boolean;
  isInPictureMode: boolean;
  isCameraDetailsOpen: boolean;
}

const initialState: PlayerSliceState = {
  isMicOpen: false,
  isSpeakerOpen: false,
  isExpanded: false,
  isInPictureMode: false,
  isCameraDetailsOpen: false
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    toggleMic: (state) => {
      state.isMicOpen = !state.isMicOpen;
    },
    toggleSpeaker: (state) => {
      state.isSpeakerOpen = !state.isSpeakerOpen;
    },
    toggleExpanded: (state) => {
      state.isExpanded = !state.isExpanded;
    },
    togglePictureMode: (state) => {
      state.isInPictureMode = !state.isInPictureMode;
    },
    toggleCameraDetailsView: (state) => {
      state.isCameraDetailsOpen = !state.isCameraDetailsOpen;
    }
  }
});

export const {
  toggleMic,
  toggleSpeaker,
  toggleExpanded,
  togglePictureMode,
  toggleCameraDetailsView
} = playerSlice.actions;

export default playerSlice.reducer;
