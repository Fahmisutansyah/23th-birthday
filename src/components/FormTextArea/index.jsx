import React from "react";
import "./index.scss";

const FormTextArea = ({
  state,
  setState,
  rows,
  cols,
  disabled,
  placeholder,
}) => {
  const handleChange = (e) => {
    setState(e.target.value);
  };
  return (
    <textarea
      value={state}
      rows={rows ? rows : "4"}
      cols={cols ? cols : "50"}
      disabled={disabled ? disabled : false}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
export default FormTextArea;
