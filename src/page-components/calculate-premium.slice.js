import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppConstants, getAgeFromDob } from "../utilities/utilities";
import axios from "axios";

const initialState = {
  name: "",
  age: "",
  dob: "",
  sumInsured: "",
  occupation: "",
  monthlyPremium: "",
};

export const calculatePremiumSlice = createSlice({
  name: "calculatePremium",
  initialState,
  reducers: {
    setName: (state, { payload }) => {
      state.name = payload;
    },
    setDob: (state, { payload }) => {
      state.dob = payload;
      state.age = getAgeFromDob(payload);
    },
    setSumInsured: (state, { payload }) => {
      state.sumInsured = payload;
    },
    setOccupation: (state, { payload }) => {
      state.occupation = payload;
    },
    setMonthlyPremium: (state, { payload }) => {
      state.monthlyPremium = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setName,
  setDob,
  setSumInsured,
  setOccupation,
  setMonthlyPremium,
} = calculatePremiumSlice.actions;

export default calculatePremiumSlice.reducer;

export const calculateMonthlyPremiumAsync = createAsyncThunk(
  "get-monthly-premium",
  async ({ name, age, sumInsured, occupation }, { getState, dispatch }) => {
    const { data } = await axios.post(
      AppConstants.apiUrl + AppConstants.getMonthlyPremium,
      { name, age, sumInsured, occupation }
    );

    if (data?.status == "Success") {
      dispatch(setMonthlyPremium(data.result));
    } else {
      dispatch(setMonthlyPremium(0));
      // Todo Error Handling
    }
  }
);
