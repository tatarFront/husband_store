import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSettings = createAsyncThunk(
  "settings/fetchSettings",
  async (_, { rejectWithValue }) => {
    try {
      const result = await new Promise((resolve) =>
        setTimeout(() => resolve(Math.random()), 3000)
      );
      return result;
    } catch (error) {
      return rejectWithValue(0);
    }
  }
);
