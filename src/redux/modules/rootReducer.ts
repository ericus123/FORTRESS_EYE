import { combineReducers } from "@reduxjs/toolkit";
import alarmSlice from "./alarm/alarmSlice";
import areaSlice from "./area/areaSlice";
import authSlice from "./auth/authSlice";
import cameraSlice from "./camera/cameraSlice";
import doorSlice from "./door/doorSlice";
import eventsSlice from "./events/eventsSlice";
import lightSlice from "./light/lightSlice";
import managementSlice from "./management/managementSlice";
import memberSlice from "./member/memberSlice";
import monitoringSlice from "./monitoring/monitoringSlice";
import navigationSlice from "./navigation/navigationSlice";
import playerSlice from "./player/playerSlice";
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
  monitoring: monitoringSlice,
  events: eventsSlice,
  alarms: alarmSlice,
  lights: lightSlice,
  doors: doorSlice,
  playerSlice: playerSlice,
  camera: cameraSlice
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
