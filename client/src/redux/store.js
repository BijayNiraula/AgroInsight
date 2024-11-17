import { configureStore } from "@reduxjs/toolkit";

import globalSlices from "./slices/global.slices";
export const store = configureStore({
  reducer: {
    global: globalSlices,
  },
});
