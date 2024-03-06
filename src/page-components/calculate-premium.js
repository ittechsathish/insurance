import { useState } from "react";
import {
  FormField,
  Button,
  Checkbox,
  Form,
  FormSelect,
} from "semantic-ui-react";

export default function CalculatePremium() {
  const [monthlyPremium, setMonthlyPremium] = useState();

  const options = [
    { key: "Author", text: "Author", value: "Author" },
    { key: "Cleaner", text: "Cleaner", value: "Cleaner" },
    { key: "Doctor", text: "Doctor", value: "Doctor" },
    { key: "Farmer", text: "Farmer", value: "Farmer" },
    { key: "Florist", text: "Florist", value: "Florist" },
    { key: "Mechanic", text: "Mechanic", value: "Mechanic" },
  ];

  return (
    <div className="calculate-premium ui segment">
      <h1 className="ui header">Calculate Monthly Premium</h1>
      <Form>
        <FormField>
          <label>Name</label>
          <input type="text" placeholder="Name" />
        </FormField>
        <FormField>
          <label>Date Of Birth</label>
          <input type="date" placeholder="Date Of Birth" />
        </FormField>
        <FormField>
          <label>Your Age From DOB</label>
          <input disabled readOnly type="number" placeholder="Age" />
        </FormField>
        <FormField>
          <label>Death Sum Insured</label>
          <input type="number" placeholder="Death Sum Insured" />
        </FormField>
        <FormField>
          <label>Occupation</label>
          <FormSelect options={options} placeholder="Occupation" />
        </FormField>
        {monthlyPremium ? (
          <label className="premium-calculated">
            <h3>Your Monthly Premium is:</h3> {monthlyPremium}
          </label>
        ) : null}
      </Form>
    </div>
  );
}
