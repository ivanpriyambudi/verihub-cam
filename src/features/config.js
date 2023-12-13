import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  useConfig: ["countdown", "flash"],
  configList: ["mirror", "square", "countdown", "flash", "full screen"]
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setUseConfig: (state, action) => {
      state.useConfig = action.payload
    },
  },
});

export const { setUseConfig } = configSlice.actions;

export default configSlice.reducer;