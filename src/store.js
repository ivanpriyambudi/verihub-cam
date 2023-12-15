import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./features/filter";
import configReducer from "./features/config";
import resultReducer from "./features/result";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    config: configReducer,
    result: resultReducer,
  },
});

export default store;