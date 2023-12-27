import { createSlice } from "@reduxjs/toolkit";
import { Member } from "../../../hooks/useMembers";

export interface MemberSliceState {
  members: Member[];
}

const initialState: MemberSliceState = {
  members: []
};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    saveMembers(state, { payload }: { payload: Member[] }) {
      state.members = payload;
    }
  }
});

export const { saveMembers } = memberSlice.actions;

export default memberSlice.reducer;
