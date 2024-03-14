import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./slice";
export const store = configureStore({
  reducer: {
    wether: weatherSlice,
  },
});

// export const RootState = store.getState;
// export const AppDispatch = store.dispatch;
