import { configureStore } from "@reduxjs/toolkit";
import dataFetchSlice from "../reducers/dataFetchSlice";

export const store = configureStore({
  reducer: {
    countries: dataFetchSlice,
  },
});
