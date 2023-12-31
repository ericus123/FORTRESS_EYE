import { combineReducers } from "@reduxjs/toolkit";
import areaSlice from "./area/areaSlice";
import authSlice from "./auth/authSlice";
import memberSlice from "./member/memberSlice";
import navigationSlice from "./navigation/navigationSlice";
import trackSlice from "./tracking/trackSlice";
const rootReducer = combineReducers({
  navigation: navigationSlice,
  auth: authSlice,
  area: areaSlice,
  track: trackSlice,
  member: memberSlice
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
