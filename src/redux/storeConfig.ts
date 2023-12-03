import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import logger from "redux-logger";
import rootReducer from "./modules/rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    (process.env.NODE_ENV === "development" &&
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [
            "persist/FLUSH",
            "persist/REHYDRATE",
            "persist/PAUSE",
            "persist/PERSIST",
            "persist/PURGE",
            "persist/REGISTER"
          ]
        }
      }).concat(logger)) ||
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/FLUSH",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/PERSIST",
          "persist/PURGE",
          "persist/REGISTER"
        ]
      }
    })
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
