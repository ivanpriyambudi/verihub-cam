import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    setResult: (state, action) => {
      state.data = action.payload
    },
  },
});

export const { setResult } = resultSlice.actions;

export default resultSlice.reducer;