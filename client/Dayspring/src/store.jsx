import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feautures/userSlice";
import cartReducer from "./feautures/cartSlice"

// 🧠 redux-persist setup
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { combineReducers } from "redux";

// 🔧 Combine reducers (in case you add more later)
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

// 🗂️ Persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user","cart"], // only persist the `user` slice
};

// 🎯 Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 🏗️ Configure store with middleware tweaks
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }),
});

export const persistor = persistStore(store); // 🔁 export persistor
export default store;
