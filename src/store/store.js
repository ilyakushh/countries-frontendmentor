import { configureStore } from "@reduxjs/toolkit";
import dataFetchSlice from "../reducers/dataFetchSlice";
import filterSlice from "../reducers/filterSlice";

export const store = configureStore({
  reducer: {
    countries: dataFetchSlice,
    filter: filterSlice,
  },
});
