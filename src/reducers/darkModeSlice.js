import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkTheme: false,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setDarkTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { setDarkTheme } = darkModeSlice.actions;

export default darkModeSlice.reducer;
