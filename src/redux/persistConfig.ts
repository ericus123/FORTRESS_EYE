import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./modules/rootReducer";
import encryptTransform from "./transform";

export const persistConfig = {
  key: "persist-root",
  storage,
  whitelist: ["auth", "area"],
  transforms: [encryptTransform]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
