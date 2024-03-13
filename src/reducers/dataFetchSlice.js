import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ALL_COUNTRIES } from "../utils/config";

const initialState = {
  countriesData: [],
  isLoading: false,
};

export const fetchCoutriesData = createAsyncThunk(
  "countries/fetchCoutriesData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(ALL_COUNTRIES);
      if (!response.ok) {
        throw new Error("Server error");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const dataFetchSlice = createSlice({
  name: "countries",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoutriesData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCoutriesData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.countriesData = action.payload;
      })
      .addCase(fetchCoutriesData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default dataFetchSlice.reducer;
