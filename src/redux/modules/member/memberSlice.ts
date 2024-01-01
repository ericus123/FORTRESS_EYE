import { createSlice } from "@reduxjs/toolkit";
import { Member } from "../../../hooks/useMembers";

export interface MemberSliceState {
  members: Member[];
  isInviteOpen: boolean;
}

const initialState: MemberSliceState = {
  members: [],
  isInviteOpen: false
};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    saveMembers(state, { payload }: { payload: Member[] }) {
      state.members = payload;
    },
    handleInviteShow(state) {
      state.isInviteOpen = !state.isInviteOpen;
    }
  }
});

export const { saveMembers, handleInviteShow } = memberSlice.actions;

export default memberSlice.reducer;
