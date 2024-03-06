// import { configureStore } from "@reduxjs/toolkit";

// export const store = configureStore({
//   reducer: {
//     calculatePremium,
//   },
// });

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import calculatePremium from "../page-components/calculate-premium.slice";

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  calculatePremium,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
