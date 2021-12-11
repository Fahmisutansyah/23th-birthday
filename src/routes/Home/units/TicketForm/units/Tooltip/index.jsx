import React from "react";
import "./index.scss";

const ToolTip = ({ onClick }) => {
  return (
    <div
      className="tooltip-container flex justify-center pa1"
      onClick={onClick}
    >
      <p>Japan, Narita (NRT)</p>
    </div>
  );
};

export default ToolTip;
