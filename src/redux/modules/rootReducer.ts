import { combineReducers } from "@reduxjs/toolkit";
import navigationSlice from "./navigation/navigationSlice";
const rootReducer = combineReducers({
  navigation: navigationSlice
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
