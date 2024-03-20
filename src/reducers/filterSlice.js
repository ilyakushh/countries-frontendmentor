import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  region: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload === "All" ? "" : action.payload;
    },
  },
});

export const { setSearchTerm, setRegion } = filterSlice.actions;

export default filterSlice.reducer;
