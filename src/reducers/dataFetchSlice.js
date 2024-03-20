import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ALL_COUNTRIES } from "../utils/config";

const initialState = {
  countriesData: [],
  isLoading: true,
  error: null,
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
      return rejectWithValue(error.message);
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
        state.error = null;
      })
      .addCase(fetchCoutriesData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.countriesData = action.payload.map((data) => ({
          name: {
            commonName: data.name.common,
            nativeName: data.name.nativeName
              ? Object.values(data.name.nativeName)[0]
              : null,
          },
          capital: data.capital[0],
          cca3: data.cca3,
          currencies: Object.values(data.currencies).map(
            (currency) => currency.name
          ),

          flags: {
            svg: data.flags.svg,
            png: data.flags.png,
          },
          languages: Object.values(data.languages),
          population: data.population.toLocaleString(),
          region: data.region,
          subregion: data.subregion,
          tld: data.tld[0],
          borders: data.borders,
        }));
      })
      .addCase(fetchCoutriesData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default dataFetchSlice.reducer;
