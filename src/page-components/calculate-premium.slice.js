import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: 0,
  dob: "",
  sumInsured: 0,
  occupation: [],
};

export const calculatePremiumSlice = createSlice({
  name: "calculatePremium",
  initialState,
  reducers: {
    setName: (state, { payload }) => {
      state.name = payload;
    },
    setDob: (state, { payload }) => {
      state.name = payload;
    },
    setSumInsured: (state, { payload }) => {
      state.name = payload;
    },
    setOccupation: (state, { payload }) => {
      state.name = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setName, setDob, setSumInsured, setOccupation } =
  calculatePremiumSlice.actions;

export default calculatePremiumSlice.reducer;
