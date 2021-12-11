import React from "react";
import "./index.scss";
import CDatePicker from "../../../../../../components/CDatePicker";
import Icon from "../../../../../../components/Icon";

const FormDatePicker = ({
  selected,
  minDate,
  onChange,
  iconName,
  showYearDropdown,
}) => {
  return (
    <div className="dp-wrapper">
      <CDatePicker
        selected={selected}
        minDate={minDate}
        onChange={onChange}
        showYearDropdown={showYearDropdown}
      />
      {iconName && (
        <div className="flex justify-center items-center mh1-ns ph1-ns datepicker-icon-wrapper ">
          <Icon name={iconName} />
        </div>
      )}
    </div>
  );
};
export default FormDatePicker;
