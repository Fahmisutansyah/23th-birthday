import React from "react";
import "./index.scss";

const Partition = (props) => {
  return <div className="bg-near-white partition pv5-ns">{props.children}</div>;
};

export default Partition;
