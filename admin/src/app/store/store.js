import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,

  },
  devTools: process.env.NODE_ENV !== "production",
});

// export const RootState = store.getState;
// export const AppDispatch = store.dispatch;