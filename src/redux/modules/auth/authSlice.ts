import { createSlice } from "@reduxjs/toolkit";
import { SigninResponse } from "../../../hooks/useAuth";

export interface AuthSliceState {
  tokens: {
    accessToken?: string;
    refreshToken?: string;
  };
}

const initialState: AuthSliceState = {
  tokens: {}
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleAuthTokens(
      state,
      {
        payload
      }: {
        payload: SigninResponse;
      }
    ) {
      state.tokens = payload;
    },
    handleSignoutData(state) {
      state.tokens = {};
    }
  }
});

export const { handleAuthTokens, handleSignoutData } = authSlice.actions;

export default authSlice.reducer;
