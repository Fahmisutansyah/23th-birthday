import React from "react";
import "./index.scss";
import Icon from "../Icon";

const FormInput = ({
  placeholder,
  disabled,
  // deafultValue,
  type,
  state,
  handleChange,
  onBlur,
  onFocus,
  iconName,
  min,
}) => {
  return (
    <div className="input-wrapper">
      <input
        placeholder={placeholder}
        disabled={disabled}
        // value={deafultValue}
        type={type ? type : "text"}
        value={state}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        min={min}
      />
      {iconName && (
        <div className="flex justify-center items-center mh1-ns ph1-ns form-icon-wrapper">
          <Icon name={iconName} />
        </div>
      )}
    </div>
  );
};
export default FormInput;
