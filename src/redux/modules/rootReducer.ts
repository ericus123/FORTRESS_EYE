import { combineReducers } from "@reduxjs/toolkit";
import areaSlice from "./area/areaSlice";
import authSlice from "./auth/authSlice";
import managementSlice from "./management/managementSlice";
import memberSlice from "./member/memberSlice";
import monitoringSlice from "./monitoring/monitoringSlice";
import navigationSlice from "./navigation/navigationSlice";
import settingsSlice from "./settings/settingsSlice";
import trackSlice from "./tracking/trackSlice";
const rootReducer = combineReducers({
  navigation: navigationSlice,
  auth: authSlice,
  area: areaSlice,
  track: trackSlice,
  member: memberSlice,
  settings: settingsSlice,
  management: managementSlice,
  monitoring: monitoringSlice
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
