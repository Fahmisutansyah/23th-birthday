import React from "react";
import "./index.scss";

const Icon = ({ name, className }) => {
  return (
    <span className="icon-wrapper">
      <i className={`bi bi-${name} ${className || ""}`}> </i>
    </span>
  );
};

export default Icon;
