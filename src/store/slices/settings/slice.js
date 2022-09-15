import { createSlice } from "@reduxjs/toolkit";

import { fetchSettings } from "./thunks";

const initialState = {
  value: 0,
  isFetching: false
};

export const {
  actions: settingsAction,
  name,
  reducer: settingsReducer
} = createSlice({
  name: "settings",
  initialState,

  reducers: {
    resetValue: (state, _) => {
      state.value = 5;
      state.isFetching = false;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchSettings.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchSettings.fulfilled, (state, action) => {
        state.value = state.value + action.payload;
        state.isFetching = false;
      })
      .addCase(fetchSettings.rejected, (state, action) => {
        state.value = action.payload;
        state.isFetching = false;
      });
  }
});
