import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
  name: "loaders",
  initialState: {
    loading: false,
  },
  reducers: {
    SetLoader: (state, action) => {
      state.loading = action.payload;  //change the loading state to true or false
    },
  },
});

export const { SetLoader } = loaderSlice.actions;
