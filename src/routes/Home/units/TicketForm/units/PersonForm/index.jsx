import React from "react";
import "./index.scss";

import FormInput from "../../../../../../components/FormInput";

const PersonForm = ({ state, setState }) => {
  const handleChange = (e) => {
    setState(e.target.value);
  };
  return (
    <div className="flex flex-row">
      <FormInput
        type="number"
        placeholder="Person"
        state={state}
        handleChange={handleChange}
        iconName="people"
      />
      <div className="flex justify-center items-center">
        <p>Person</p>
      </div>
    </div>
  );
};

export default PersonForm;
