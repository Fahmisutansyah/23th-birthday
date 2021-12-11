import React from "react";
import "./index.scss";
import { StageSpinner } from "react-spinners-kit";

const LoadingOverlay = ({ state }) => {
  return (
    <div className={`loading-overlay ${state ? "on" : ""}`}>
      <div className="spinner">
        <StageSpinner size={100} color="#FFFFFF" loading={state} />
      </div>
    </div>
  );
};

export default LoadingOverlay;
