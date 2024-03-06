import { configureStore } from "@reduxjs/toolkit";
import calculatePremium from "../page-components/calculate-premium.slice";

export const store = configureStore({
  reducer: {
    calculatePremium,
  },
});
