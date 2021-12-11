import React from "react";
import "./index.scss";

const HeaderTitle = ({ headerText, stepText, subHeaderText }) => {
  return (
    <div className="flex flex-column items-center mv4-ns">
      <p className="f1-ns">{headerText}</p>
      <p className="f3-ns">{subHeaderText}</p>
      <p className="f4-ns">{stepText}</p>
    </div>
  );
};

export default HeaderTitle;
