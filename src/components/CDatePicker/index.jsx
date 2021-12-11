import React from "react";
import DatePicker from "react-datepicker";
import "./index.scss";

const CDatePicker = ({ selected, minDate, onChange, showYearDropdown }) => {
  return (
    <div className="w-100">
      <DatePicker
        selected={selected}
        minDate={minDate}
        onChange={onChange}
        showYearDropdown={showYearDropdown}
      />
    </div>
  );
};
export default CDatePicker;
