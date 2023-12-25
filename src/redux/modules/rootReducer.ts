import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import navigationSlice from "./navigation/navigationSlice";
const rootReducer = combineReducers({
  navigation: navigationSlice,
  auth: authSlice
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
