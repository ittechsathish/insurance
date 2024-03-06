import { screen } from "@testing-library/react";
import CalculatePremium from "./page-components/calculate-premium";
import { renderWithProviders } from "./store/render-with-provider";

test("Should display error message when no name is given", () => {
  const initialState = {
    name: "",
    age: "",
    dob: "",
    sumInsured: "",
    occupation: "",
    monthlyPremium: "",

    //error flags
    nameError: false,
    dobError: false,
    sumInsuredError: false,
    occupationError: false,
  };

  const { getByText } = renderWithProviders(<CalculatePremium />, {
    preloadedState: {
      calculatePremium: initialState,
    },
  });

  expect(getByText(/Please enter your name./i)).toBeInTheDocument();
});

test("Should hide the error message when name is given", () => {
  const initialState = {
    name: "defaultName", // Here given a value to input field
    age: "",
    dob: "",
    sumInsured: "",
    occupation: "",
    monthlyPremium: "",

    //error flags
    nameError: false,
    dobError: false,
    sumInsuredError: false,
    occupationError: false,
  };

  const screen = renderWithProviders(<CalculatePremium />, {
    preloadedState: {
      calculatePremium: initialState,
    },
  });

  expect(screen.queryByText(/Please enter your name./i)).toBeNull();
});

test("Should display error message when age is less than 1", () => {
  const initialState = {
    name: "",
    age: "",
    dob: "",
    sumInsured: "",
    occupation: "",
    monthlyPremium: "",

    //error flags
    nameError: false,
    dobError: false,
    sumInsuredError: false,
    occupationError: false,
  };

  const { getByText } = renderWithProviders(<CalculatePremium />, {
    preloadedState: {
      calculatePremium: initialState,
    },
  });

  expect(getByText(/Age should be greater than zero/i)).toBeInTheDocument();
});

test("Should hide error message when age is greater than 1", () => {
  const initialState = {
    name: "",
    age: "20",
    dob: "",
    sumInsured: "",
    occupation: "",
    monthlyPremium: "",

    //error flags
    nameError: false,
    dobError: false,
    sumInsuredError: false,
    occupationError: false,
  };

  const { queryByText } = renderWithProviders(<CalculatePremium />, {
    preloadedState: {
      calculatePremium: initialState,
    },
  });

  expect(queryByText(/Age should be greater than zero/i)).toBeNull();
});
