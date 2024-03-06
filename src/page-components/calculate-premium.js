import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormField, Form, FormSelect } from "semantic-ui-react";
import {
  calculateMonthlyPremiumAsync,
  setDob,
  setName,
  setOccupation,
  setSumInsured,
} from "./calculate-premium.slice";

const options = [
  { key: "Author", text: "Author", value: "Author" },
  { key: "Cleaner", text: "Cleaner", value: "Cleaner" },
  { key: "Doctor", text: "Doctor", value: "Doctor" },
  { key: "Farmer", text: "Farmer", value: "Farmer" },
  { key: "Florist", text: "Florist", value: "Florist" },
  { key: "Mechanic", text: "Mechanic", value: "Mechanic" },
];

export default function CalculatePremium() {
  const { monthlyPremium, name, age, sumInsured, occupation } = useSelector(
    (state) => state.calculatePremium
  );
  const dispatch = useDispatch();

  function setNameEvt(e) {
    dispatch(setName(e.target.value));
  }

  function setDobEvt(e) {
    dispatch(setDob(e.target.value));
  }

  function sumInsuredEvt(e) {
    dispatch(setSumInsured(e.target.value));
  }

  function occupationChangeEvt(e, { value }) {
    dispatch(setOccupation(value));
  }

  useEffect(() => {
    let isFormValid = true;
    //todo validate model

    if (isFormValid) {
      console.log("Dispatching_Service");
      dispatch(
        calculateMonthlyPremiumAsync({
          name,
          age,
          sumInsured,
          occupation,
        })
      );
    }
  }, [occupation]);

  return (
    <div className="calculate-premium ui segment">
      <h1 className="ui header">Calculate Monthly Premium</h1>
      <Form>
        <FormField>
          <label>Name</label>
          <input
            value={name}
            onChange={setNameEvt}
            type="text"
            placeholder="Name"
          />
          {/* <label>Please enter</label> */}
        </FormField>
        <FormField>
          <label>Date Of Birth</label>
          <input onChange={setDobEvt} type="date" placeholder="Date Of Birth" />
        </FormField>
        <FormField>
          <label>Your Age From DOB</label>
          <input
            value={age}
            disabled
            readOnly
            type="number"
            placeholder="Age"
          />
        </FormField>
        <FormField>
          <label>Death Sum Insured</label>
          <input
            value={sumInsured}
            onChange={sumInsuredEvt}
            type="number"
            placeholder="Death Sum Insured"
          />
        </FormField>
        <FormField>
          <label>Occupation</label>
          <FormSelect
            onChange={occupationChangeEvt}
            options={options}
            placeholder="Occupation"
          />
        </FormField>

        <label className="premium-calculated">
          <h3>Your Monthly Premium is:</h3>{" "}
          <label className="ui blue label">{monthlyPremium || "-"}</label>
        </label>
      </Form>
    </div>
  );
}
