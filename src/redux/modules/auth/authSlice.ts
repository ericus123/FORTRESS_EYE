import { createSlice } from "@reduxjs/toolkit";
import { SigninResponse } from "../../../hooks/useAuth";

export type AuthTokens = {
  accessToken?: string;
  refreshToken?: string;
};
export interface AuthSliceState {
  tokens: AuthTokens;
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
