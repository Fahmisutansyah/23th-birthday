import React from "react";
import "./index.scss";

const PartitionRow = ({ children, type }) => {
  return (
    <div className={`h5 pv3-ns ${type ? `p-row-${type}` : "p-row"}`}>
      {children}
    </div>
  );
};

export default PartitionRow;
