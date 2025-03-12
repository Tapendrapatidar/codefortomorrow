import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isGridView: true,
  isFeedbackView: false,
};

const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    setGridView: (state, action) => {
      state.isGridView = action.payload;
    },
    setFeedbackView: (state, action) => {
      state.isFeedbackView = action.payload;
    },
  },
});

export const { setGridView, setFeedbackView } = gridSlice.actions;
export default gridSlice.reducer;
