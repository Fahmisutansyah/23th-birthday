/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import FormInput from "../../../../../../components/FormInput";
import ToolTip from "../Tooltip";
import "./index.scss";
const DestinationForm = () => {
  const [active, setActive] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    handleOnFocus();
  }, [input]);
  const handleOnClick = () => {
    setInput("Japan, Narita (NRT)");
    setTimeout(function () {
      setActive(false);
    }, 1000);
  };
  //INI GABISA HANLDE CHANGE KARENA ONBLURNYA.
  //pas ngeclick ngetrigger onblur, treus componennya ilang

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleOnFocus = (e) => {
    if (input.length > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  const handleOnBlur = (e) => {
    setTimeout(function () {
      setActive(false);
    }, 1000);
  };
  return (
    <>
      <FormInput
        placeholder="Select Destination"
        type="text"
        state={input}
        handleChange={handleChange}
        onBlur={handleOnBlur}
        iconName="geo-alt-fill"
      />
      {/* <div className="tooltip">{active && <ToolTip />}</div> */}
      <div className="flex justify-center">
        {active && <ToolTip onClick={handleOnClick} />}
      </div>
    </>
  );
};

export default DestinationForm;
