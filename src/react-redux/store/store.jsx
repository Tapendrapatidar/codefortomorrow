import { configureStore } from "@reduxjs/toolkit";
import demoSlice from "../slice/demoSlice";
import gridSlice from "../slice/gridviewSlice";

const store = configureStore({
  reducer: {
    demoSlice: demoSlice,
    gridSlice: gridSlice,
  },
});

export default store;