import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./textInputSlice";

const store = configureStore({
  reducer: { inputReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
