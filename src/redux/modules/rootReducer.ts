import { combineReducers } from "@reduxjs/toolkit";
import areaSlice from "./area/areaSlice";
import authSlice from "./auth/authSlice";
import navigationSlice from "./navigation/navigationSlice";
const rootReducer = combineReducers({
  navigation: navigationSlice,
  auth: authSlice,
  area: areaSlice
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
