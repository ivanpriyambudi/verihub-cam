import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./features/filter";
import configReducer from "./features/config";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    config: configReducer,
  },
});

export default store;