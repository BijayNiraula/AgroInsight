import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  status: "loading",
  data: {},
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.data.userData = action.payload;
      state.status = "success";
    },
    setLocation: (state, action) => {
      state.data.location = action.payload;
    },
  },
});

export const { setUserData, setLocation } = globalSlice.actions;

export default globalSlice.reducer;
